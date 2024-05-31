import HomeCSS from "../componentsCss/HomePage.module.css";
import TopOffersCSS from "../componentsCss/TopOffers.module.css";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Button from "react-bootstrap/Button";

import { Link } from "react-router-dom";

import CarouselCover from "../assets/carousel_cover.png";
import { useState, useEffect } from "react";
import axios from "axios";
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
  // Data
  const [offers, setOffers] = useState([])
  const [offerButton, setOfferButton] = useState("properties")
  const { t, i18n } = useTranslation()



  useEffect(() => {
    let link;
    let params = { offset: 0 }
    if (offerButton === "properties") {
      link = "http://127.0.0.1:3005/api/property/getPage"
      params["property_language"] = i18n.language
    }
    else {
      return;
    }
    
    axios.post(link, params).then(
      (response) => {
        response = response.data
        setOffers(response["result"])
      }
    );

  }, [offerButton, i18n.language])

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
      <Carousel
        responsive={responsive}
        swipeable={false}
        draggable={true}
        ssr={true}
        infinite={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        transitionDuration={500}
        containerClass="carousel-container"
      >

        {offers.map((offer) => {
          return (
            <div key={offer["id"]} id={offer["id"]}>
              <Link to={offer["property_link"]}>
                <img
                  className={`${TopOffersCSS.carousel_cover} d-block w-100 `}
                  alt="carousel_first_photo"
                  src={offer["property_image"]}
                  style={{ padding: 10 }}
                />
              </Link>
            </div>
          )
        })}
      </Carousel>
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
          onClick={() => { setOfferButton("properties") }}
        >
          {t('Home.TopOffers.buttons.properties')}
        </Button>
        <Button
          className={`${HomeCSS.title_font} ${TopOffersCSS.button_styling} disabled`}
          variant="primary"
          active
          onClick={() => { setOfferButton("businesses") }}
        >
          {t('Home.TopOffers.buttons.businesses')}
        </Button>
      </div>
      ;
    </div>
  );
}

export default TopOffers;