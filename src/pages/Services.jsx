import ServicesCSS from "../componentsCss/Services.module.css";
import Footer from "../components/Footer";
import Test from "../assets/testt.png";
import { useState, useRef, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import FirstPhoto from "../assets/services_first.png";
import SecondPhoto from "../assets/services_second.png";
import ThurdPhoto from "../assets/services_thurd.png";
import FourPhoto from "../assets/services_four.png";
import FivePhoto from "../assets/services_five.png";

import Button from "react-bootstrap/Button";

function Services() {

  // Page control
  const purchase_of_businesses_and_enterprises = useRef(null);
  const sale_of_businesses_and_enterprises = useRef(null);
  const purchase_and_sale_of_luxury_residential = useRef(null);
  const purchase_and_sale_of_industrial_and_commercial_properties = useRef(null);
  const investment_projects_and_business_strategies = useRef(null);
  const { t, i18n } = useTranslation()

  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth"
    })
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    })
  }

  return (
    <div>
      <p className={ServicesCSS.title}>
        {t('Services.service_title')}
      </p>
      <div className={ServicesCSS.wrapper_services}>
        <div onClick={() => scrollToSection(purchase_of_businesses_and_enterprises)} className={ServicesCSS.grid_container}>
          <div className={ServicesCSS.grid_item}>
            <h5 className={ServicesCSS.text_grid}>
              {t('Services.headlines.first')}
            </h5>
          </div>
        </div>
        <div className={ServicesCSS.grid_container_second_row}>
          <div onClick={() => scrollToSection(purchase_and_sale_of_luxury_residential)} className={ServicesCSS.grid_item_second_row}>
            <h5 className={ServicesCSS.text_grid}>
              {t('Services.headlines.second')}
            </h5>
          </div>
          <div onClick={() => scrollToSection(purchase_and_sale_of_industrial_and_commercial_properties)} className={ServicesCSS.grid_item}>
            <h5 className={ServicesCSS.text_grid}>
              {t('Services.headlines.third')}
            </h5>
          </div>
        </div>
        <div className={ServicesCSS.grid_container_last_row}>
          <div onClick={() => scrollToSection(sale_of_businesses_and_enterprises)} className={ServicesCSS.grid_item}>
            <h5 className={ServicesCSS.text_grid}>
              {t('Services.headlines.forth')}
            </h5>
          </div>
          <div onClick={() => scrollToSection(investment_projects_and_business_strategies)} className={ServicesCSS.grid_item}>
            <h5 className={ServicesCSS.text_grid}>
              {t('Services.headlines.fifth')}
            </h5>
          </div>
        </div>
      </div>
      <div ref={sale_of_businesses_and_enterprises} className={ServicesCSS.wrapper_description_service}>
        <div className={ServicesCSS.wrapper_left}>
          <p className={ServicesCSS.title_description}>
            {t('Services.headlines.forth')}
          </p>
          <p className={ServicesCSS.description}>
            {t('Services.headline_descriptions.forth')}
          </p>
        </div>
        <div className={ServicesCSS.wrapper_right}>
          <img width="400" style={{ padding: "20px" }}
            height="400" src={FourPhoto}></img>
        </div>
      </div>
      <div ref={purchase_of_businesses_and_enterprises} className={ServicesCSS.purchase_and_sale_second_part}>
        <div className={ServicesCSS.wrapper_right}>
          <img width="400" style={{ padding: "20px" }}
            height="400" src={FirstPhoto}></img>
        </div>
        <div className={ServicesCSS.wrapper_left}>
          <p className={ServicesCSS.title_description}>
            {t('Services.headlines.first')}
          </p>
          <p className={ServicesCSS.description}>
            {t('Services.headline_descriptions.first')}
          </p>
        </div>
      </div>
      <div ref={purchase_and_sale_of_industrial_and_commercial_properties} className={ServicesCSS.wrapper_description_service} style={{ backgroundColor: "#1A1A1A" }}>
        <div className={ServicesCSS.wrapper_left}>
          <p className={ServicesCSS.title_description}>
            {t('Services.headlines.third')}
          </p>
          <p className={ServicesCSS.description}>
            {t('Services.headline_descriptions.third')}
          </p>

        </div>
        <div className={ServicesCSS.wrapper_right}>
          <img width="400" style={{ padding: "20px" }}
            height="400" src={ThurdPhoto}></img>
        </div>
      </div>
      <div ref={investment_projects_and_business_strategies} className={ServicesCSS.purchase_and_sale_second_part}>
        <div className={ServicesCSS.wrapper_right}>
          <img width="400" style={{ padding: "20px" }}
            height="400" src={FivePhoto}></img>
        </div>
        <div className={ServicesCSS.wrapper_left}>
          <p className={ServicesCSS.title_description}>
            {t('Services.headlines.fifth')}
          </p>
          <p className={ServicesCSS.description}>
            {t('Services.headline_descriptions.fifth')}
          </p>
        </div>
      </div>
      <div ref={purchase_and_sale_of_luxury_residential} className={ServicesCSS.wrapper_description_service}>
        <div className={ServicesCSS.wrapper_left}>
          <p className={ServicesCSS.title_description}>
            {t('Services.headlines.second')}
          </p>
          <p className={ServicesCSS.description}>
            {t('Services.headline_descriptions.second')}
          </p>
        </div>
        <div className={ServicesCSS.wrapper_right}>
          <img width="400" style={{ padding: "20px" }}
            height="400" src={SecondPhoto}></img>
        </div>
      </div>
      {
        scrollPosition > 900 ? (
          <Button
            className={ServicesCSS.scrollToTopButton}
            onClick={scrollToTop}
            size="large"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-arrow-up-circle-fill" viewBox="0 0 16 16"  >
              <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z" />
            </svg>
          </Button>
        ) : (
          null
        )
      }
      <Footer />
    </div>
  )
}

export default Services;