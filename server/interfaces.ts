export interface INews {
  id: number;
  image: string | null;
  slug: string;
  title: string;
  subtitle: string;
  views: number;
  date: string;
}
export interface ICategories {
  id: number;
  image: string;
  slug: string;
  title: string;
}
export interface IPartners {
  id: number;
  image: string;
}
