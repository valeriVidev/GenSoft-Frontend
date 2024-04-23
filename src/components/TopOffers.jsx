import HomeCSS from "../componentsCss/HomePage.module.css";
import TopOffersCSS from "../componentsCss/TopOffers.module.css";


import "react-multi-carousel/lib/styles.css";
import Button from "react-bootstrap/Button";
import CarouselCover from "../assets/carousel_cover.png";
import { useTranslation } from 'react-i18next';



const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 619 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 619, min: 0 },
    items: 1,
  },
};

function TopOffers() {
  const { t, i18n } = useTranslation()

  return (
    <div className="top_offers">
      <h3 className={`${HomeCSS.title_font} ${HomeCSS.top_offers_title}`}>
      {t('Home.TopOffers.headline')}
      </h3>
      <img
        className=" w-100"
        alt="carousel_cover"
        src={CarouselCover}
      />
      <img
        className={`${TopOffersCSS.carousel_cover_second} w-100 `}
        alt="carousel_cover_second"
        src={CarouselCover}
      />
      <div className={TopOffersCSS.Wrapper_buttons}>
        <Button
          className={`${HomeCSS.title_font} ${TopOffersCSS.button_styling}`}
          variant="primary"
          active
        >
          {t('Home.TopOffers.buttons.properties')}
        </Button>
        <Button
          className={`${HomeCSS.title_font} ${TopOffersCSS.button_styling}`}
          variant="primary"
          active
        >
          {t('Home.TopOffers.buttons.businesses')}
        </Button>
      </div>
      ;
    </div>
  );
}

export default TopOffers;