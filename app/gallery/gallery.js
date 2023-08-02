// // import React, { useState } from "react";
// // import FsLightbox from "fslightbox-react";

// // function Gallerys() {
// //   const [toggler, setToggler] = useState(false);

// //   return (
// //     <>
// //       <button onClick={() => setToggler(!toggler)}>Open the lightbox.</button>
// //       <FsLightbox
// //         toggler={toggler}
// //         sources={[
// //           "/Images/Example.jpg",
// //           "https://i.imgur.com/fsyrScY.jpg",
// //           "https://www.youtube.com/watch?v=3nQNiWdeH2Q",
// //           "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
// //         ]}
// //       />
// //     </>
// //   );
// // }

// // export default Gallerys;
// /* import * as React from "react";

// import PhotoAlbum from "react-photo-album";
// import Lightbox from "yet-another-react-lightbox";

// import slides from "./slides";

// export default function Gallerys() {
//   const [index, setIndex] = React.useState(-1);

//   return (
//     <>
//       <PhotoAlbum
//         layout="rows"
//         photos={slides}
//         targetRowHeight={356}
//         onClick={({ index: current }) => setIndex(current)}
//         className="sk"
//       />

//       <Lightbox
//         index={index}
//         slides={slides}
//         open={index >= 0}
//         close={() => setIndex(-1)}
//       />
//     </>
//   );
// }
//  */
// import React from "react";
// import FsLightbox from "fslightbox-react";

// const Gallery = ({ images }) => {
//   const [lightboxVisible, setLightboxVisible] = React.useState(false);
//   const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

//   const openLightbox = (index) => {
//     setCurrentImageIndex(index);
//     setLightboxVisible(true);
//   };

//   const closeLightbox = () => {
//     setLightboxVisible(false);
//   };

//   const goToNextImage = () => {
//     setCurrentImageIndex((currentImageIndex + 1) % images.length);
//   };

//   const goToPrevImage = () => {
//     setCurrentImageIndex(
//       (currentImageIndex - 1 + images.length) % images.length
//     );
//   };

//   return (
//     <div>
//       <div>
//         {images.map((image, index) => (
//           <img
//             key={index}
//             src={image.src}
//             alt={`Image ${index}`}
//             onClick={() => openLightbox(index)}
//           />
//         ))}
//       </div>

//       <FsLightbox
//         toggler={lightboxVisible}
//         sources={images}
//         slide={currentImageIndex}
//         onClose={closeLightbox}
//         onSlideChange={setCurrentImageIndex}
//       />
//     </div>
//   );
// };

// export default Gallery;
