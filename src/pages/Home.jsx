import HomeCSS from "../componentsCss/HomePage.module.css";
import React from "react";
import Button from "react-bootstrap/Button";
import "react-multi-carousel/lib/styles.css";

import TopOffers from "../components/TopOffers";
import CapitalPlusWork from "../components/CapitalPlusWork";
import Footer from "../components/Footer";
import HomePageSlider from "../components/HomePageSlider";
import HomePageIntro from "../components/HomePageIntro";
import { useTranslation } from 'react-i18next';


function Home() {

  const { t, i18n } = useTranslation()

  return (
    <>
      <HomePageIntro />
      <HomePageSlider />
      <div className={HomeCSS.container_why_capital}>
        <h3 className={`${HomeCSS.title_font} ${HomeCSS.why_capital}`}>
          {t('Home.About.why_us')}
        </h3>
        <p className={HomeCSS.desc_why_capital}>
          {t('Home.About.why_description')}
        </p>
        <Button
          className={`${HomeCSS.title_font} ${HomeCSS.about_us_button}`}
          variant="primary"
          size="large"
          active
        >
          {t('Home.About.about_us')}
        </Button>
      </div>
      <div className={HomeCSS.buisness_explained}>
        <div className={HomeCSS.left}>
          <div>
            <h3 className={`${HomeCSS.title_font} ${HomeCSS.buisness}`}>
              {t('Home.BusinessExplained.businesses')}
            </h3>
            <p className={HomeCSS.buisness_capital}>
              {t('Home.BusinessExplained.businesses_description.part_one')}
              <br />
              {t('Home.BusinessExplained.businesses_description.part_two')}
              <br />
              {t('Home.BusinessExplained.businesses_description.part_three')}
              <br />
              {t('Home.BusinessExplained.businesses_description.part_four')}
            </p>
          </div>
        </div>
        <div className={HomeCSS.right}>
          <div className={HomeCSS.grid_container}>
            <div className={HomeCSS.grid_item}>
              <h5 className={HomeCSS.text_grid}>
                {t('Home.BusinessExplained.business_items.enterprises')}</h5>
            </div>
            <div className={HomeCSS.grid_item}>
              <h5 className={HomeCSS.text_grid}>
                {t('Home.BusinessExplained.business_items.factories')}</h5>
            </div>
            <div className={`${HomeCSS.grid_item} ${HomeCSS.black_item}`}>
              <h5 className={HomeCSS.text_grid}></h5>
            </div>
            <div className={HomeCSS.grid_item}>
              <h5 className={HomeCSS.text_grid}>
                {t('Home.BusinessExplained.business_items.harbors')}</h5>
            </div>
            <div className={HomeCSS.grid_item}>
              <h5 className={HomeCSS.text_grid}>
                {t('Home.BusinessExplained.business_items.hotel_chains.part_one')}
                <br />
                {t('Home.BusinessExplained.business_items.hotel_chains.part_two')}
              </h5>
            </div>
            <div className={`${HomeCSS.grid_item} ${HomeCSS.grey_item} `}>
              <h5 className={HomeCSS.text_grid}>
                {t('Home.BusinessExplained.business_items.stores')}</h5>
            </div>
            <div className={`${HomeCSS.grid_item} ${HomeCSS.black_item}`}>
              <h5 className={HomeCSS.text_grid}></h5>
            </div>
            <div className={`${HomeCSS.grid_item} ${HomeCSS.grey_item}`}>
              <h5 className={HomeCSS.text_grid}>
                {t('Home.BusinessExplained.business_items.hospitals.part_one')}
                <br />
                {t('Home.BusinessExplained.business_items.hospitals.part_two')}</h5>
            </div>
            <div className={`${HomeCSS.grid_item} ${HomeCSS.plus_item}`}>
              <h5 className={`${HomeCSS.text_grid} ${HomeCSS.plus_item}`}>...</h5>
            </div>
          </div>
        </div>
      </div>
      <TopOffers />
      <CapitalPlusWork />
      <Footer />
    </>
  );
}

export default Home;