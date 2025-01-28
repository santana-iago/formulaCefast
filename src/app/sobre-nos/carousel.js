import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function SimpleSlider() {
  const images = [
    { src: "https://loremflickr.com/1920/1080?random=1", caption: "Legenda para a primeira imagem" },
    { src: "https://loremflickr.com/1920/1080?random=2", caption: "" }, // Sem legenda
    { src: "https://loremflickr.com/1920/1080?random=3", caption: "Legenda para a terceira imagem" }
  ];

  return (
    <Carousel
      showThumbs={false}
      autoPlay
      infiniteLoop
      interval={3000}
      axis='horizontal'
      transitionTime={1000}
      showStatus={false}
      renderArrowPrev={(onClickHandler, hasPrev, label) =>
        hasPrev && (
          <button
            type="button"
            onClick={onClickHandler}
            title={label}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-2 text-white"
          >
            <FaArrowAltCircleLeft size={30} />
          </button>
        )
      }
      renderArrowNext={(onClickHandler, hasNext, label) =>
        hasNext && (
          <button
            type="button"
            onClick={onClickHandler}
            title={label}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-2 text-white"
          >
            <FaArrowAltCircleRight size={30} />
          </button>
        )
      }
    >
      {images.map((image, index) => (
        <div key={index}>
          <img src={image.src} alt={`Slide ${index + 1}`} />
          {image.caption && <p className="legend">{image.caption}</p>}
        </div>
      ))}
    </Carousel>
  );
}