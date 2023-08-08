import { NextRequest, NextResponse } from "next/server";
const defaultLocale = "en";
let locales = ["en", "uz", "ru"];
import langParser from "accept-language-parser";

const findBestMatchingLocale = (acceptLangHeader: string) => {
  // parse the locales acceptable in the header, and sort them by priority (q)
  const parsedLangs = langParser.parse(acceptLangHeader);

  // find the first locale that matches a locale in our list
  for (let i = 0; i < parsedLangs.length; i++) {
    const parsedLang = parsedLangs[i];
    // attempt to match both the language and the country
    const matchedLocale = locales.find((locale) => {
      const localeParts = getLocalePartsFrom({ locale });
      return (
        parsedLang.code === localeParts.lang
        // parsedLang.region === localeParts.country
      );
    });
    if (matchedLocale) {
      return matchedLocale;
    }
    // if we didn't find a match for both language and country, try just the language
    else {
      const matchedLanguage = locales.find((locale) => {
        const localeParts = getLocalePartsFrom({ locale });
        return parsedLang.code === localeParts.lang;
      });
      if (matchedLanguage) {
        return matchedLanguage;
      }
    }
  }
  // if we didn't find a match, return the default locale
  return defaultLocale;
};
type PathnameLocale = {
  pathname: string;
  locale?: never;
};
type ISOLocale = {
  pathname?: never;
  locale: string;
};
type LocaleSource = PathnameLocale | ISOLocale;
const getLocalePartsFrom = ({ pathname, locale }: LocaleSource) => {
  if (locale) {
    const localeParts = locale.toLowerCase().split("-");
    return {
      lang: localeParts[0],
      // country: localeParts[1],
    };
  } else {
    const pathnameParts = pathname!.toLowerCase().split("/");
    return {
      lang: pathnameParts[1],
      // country: pathnameParts[2],
    };
  }
};
export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const defaultLocaleParts = getLocalePartsFrom({ locale: defaultLocale });
  const currentPathnameParts = getLocalePartsFrom({ pathname });

  if (
    currentPathnameParts.lang === defaultLocaleParts.lang
    // currentPathnameParts.country === defaultLocaleParts.country
  ) {
    // we want to REMOVE the default locale from the pathname,
    // and later use a rewrite so that Next will still match
    // the correct code file as if there was a locale in the pathname
    return NextResponse.redirect(
      new URL(
        pathname.replace(
          `/${defaultLocaleParts.lang}`,
          pathname.startsWith("/") ? "/" : ""
        ),
        request.url
      )
    );
  }
  const pathnameIsMissingValidLocale = locales.every((locale) => {
    const localeParts = getLocalePartsFrom({ locale });
    return !pathname.startsWith(`/${localeParts.lang}`);
  });

  if (pathnameIsMissingValidLocale) {
    // rewrite it so next.js will render `/` as if it was `/en/us`

    const matchedLocale = findBestMatchingLocale(
      request.headers.get("Accept-Language") || defaultLocale
    );

    if (matchedLocale !== defaultLocale) {
      const matchedLocaleParts = getLocalePartsFrom({ locale: matchedLocale });
      return NextResponse.redirect(
        new URL(`/${matchedLocaleParts.lang}${pathname}`, request.url)
      );
    } else {
      return NextResponse.rewrite(
        new URL(`/${defaultLocaleParts.lang}${pathname}`, request.url)
      );
    }
  }
}
// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";

// import { i18n } from "@/i18n.config";

// import { match as matchLocale } from "@formatjs/intl-localematcher";
// import Negotiator from "negotiator";

// function getLocale(request: NextRequest): string | undefined {
//   const negotiatorHeaders: Record<string, string> = {};
//   request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

//   // @ts-ignore locales are readonly
//   const locales: string[] = i18n.locales;
//   const languages = new Negotiator({ headers: negotiatorHeaders }).languages();

//   const locale = matchLocale(languages, locales, i18n.defaultLocale);
//   return locale;
// }

// export function middleware(request: NextRequest) {
//   const pathname = request.nextUrl.pathname;
//   const pathnameIsMissingLocale = i18n.locales.every(
//     (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
//   );

//   // Redirect if there is no locale
//   if (pathnameIsMissingLocale) {
//     const locale = getLocale(request);
//     return NextResponse.redirect(
//       new URL(
//         `/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`,
//         request.url
//       )
//     );
//   }
// }

// export const config = {
//   // Matcher ignoring `/_next/` and `/api/`
//   matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
// };
