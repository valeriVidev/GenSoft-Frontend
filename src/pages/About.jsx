import AboutCSS from "../componentsCss/About.module.css";
import Footer from "../components/Footer";

import Profile from "../assets/ceo_photo.jpg";
import OneShop from "../assets/one_shop.png";
import Experience from "../assets/experience.png";
import FaceToFace from "../assets/face_to_face.png";
import Engagement from "../assets/engagement.png";
import Trust from "../assets/trust.png";
import Justice from "../assets/justice.png";
import Team from "../assets/team.png";
import Respect from "../assets/respect.png";
import { useTranslation } from 'react-i18next';


function About() {
  // Finish here, still haven't done anything
  const { t, i18n } = useTranslation()

  return (
    <>
      {/* wrapper about us start */}
      <p className={AboutCSS.title}>
        {t('About.about_us')}
      </p>
      <div className={AboutCSS.wrapper}>
        <div className={AboutCSS.left}>
          <div className={AboutCSS.centered}>
            <img style={{ padding: "20px", border: "5px" }} width="400" src={Profile} alt="ceo_photo" />
          </div>
        </div>
        <div className={AboutCSS.right}>
          <p className={AboutCSS.descr_title}>
            {t('About.about_us_description')}
          </p>
        </div>
      </div>
      {/* wrapper about us end */}
      {/* wrapper our mission start */}
      <div className={AboutCSS.wrapper_mission}>
        <p className={AboutCSS.title_target}>
          {t('About.our_goal')}
        </p>
        <p className={AboutCSS.target_desc}>
          {t('About.our_goal_description')}
        </p>
      </div>
      {/* wrapper our mission end */}
      {/* wrapper three values start */}
      <div className={AboutCSS.wrapper_one_stop_shopping}>
        <div className={AboutCSS.wrapper_icon_shopping}>
          <p className={AboutCSS.title_card}>
            {t('About.features.shoping_title.part_one')}
            <br />
            {t('About.features.shoping_title.part_two')}
          </p>
          <img
            className={AboutCSS.pic_about_us}
            src={OneShop}
            alt="one_shop"
            width="70"
            height="auto"
          />
        </div>
        <p className={AboutCSS.card_desc}>
          {" "}
          {t('About.features.shopping_description')}
        </p>
      </div>
      <div className={AboutCSS.wrapper_one_stop_shopping}>
        <div className={AboutCSS.wrapper_icon_shopping}>
          <p className={AboutCSS.title_card}>
            {t('About.features.years_experience')}
          </p>
          <img
            className={AboutCSS.pic_about_us}
            src={Experience}
            alt="experience"
            width="70"
            height="auto"
          />
        </div>
        <p className={AboutCSS.card_desc}>
          {t('About.features.years_experience_description')}
        </p>
      </div>
      <div className={AboutCSS.wrapper_one_stop_shopping}>
        <div className={AboutCSS.wrapper_icon_shopping}>
          <p className={AboutCSS.title_card}>
            {t('About.features.face_to_face.part_one')}
            <br />
            {t('About.features.face_to_face.part_two')}
          </p>
          <img
            className={AboutCSS.pic_about_us}
            src={FaceToFace}
            alt="experience"
            width="70"
            height="auto"
          />
        </div>
        <p className={AboutCSS.card_desc}>
          {t('About.features.face_to_face_description')}
        </p>
      </div>
      {/* wrapper three values start */}
      {/* wrapper what we do start */}
      <div className={AboutCSS.wrapper_mission}>
        <p className={AboutCSS.title_target}>
          {t('About.what_we_do')}
        </p>
        <p className={AboutCSS.target_desc_what_we_do_for_you}>
          {t('About.what_we_do_description')}
        </p>
      </div>
      {/* wrapper what we do end */}
      {/* wrapper values start*/}
      <div className={AboutCSS.wrapper_our_values}>
        <p className={AboutCSS.title_target}>
          {t('About.values.valueHead')}
        </p>
      </div>
      <div className={AboutCSS.right_values}>
        <div className={AboutCSS.grid_container}>
          <div className={AboutCSS.grid_item}>
            <div className={AboutCSS.text_grid}>
              <img style={{ paddingBottom: "5px" }} src={Engagement} />
              <h4 className={AboutCSS.titles_values}>
                {t('About.values.value_one')}
              </h4>
              <p className={AboutCSS.desc_each_values}>
                {t('About.values.value_one_description')}
              </p>
            </div>
          </div>
          <div className={AboutCSS.grid_item}>
            <div className={AboutCSS.text_grid}>
              <img style={{ paddingBottom: "5px" }} src={Trust} />
              <h4 className={AboutCSS.titles_values}>
                {t('About.values.value_two')}
              </h4>
              <p className={AboutCSS.desc_each_values}>
                {t('About.values.value_two_description')}
              </p>
            </div>
          </div>
          <div className={AboutCSS.grid_item}>
            <div className={AboutCSS.text_grid}>
              <img style={{ paddingBottom: "5px" }} src={Justice} />
              <h4 className={AboutCSS.titles_values}>
                {t('About.values.value_three')}
              </h4>
              <p className={AboutCSS.desc_each_values}>
                {t('About.values.value_three_description')}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={AboutCSS.right_values_second_line}>
        <div className={AboutCSS.grid_item_second_row}>
          <div className={AboutCSS.grid_item_squares}>
            <div className={AboutCSS.text_grid}>
              <img style={{ paddingBottom: "5px" }} src={Team} />
              <h4 className={AboutCSS.titles_values}>
                {t('About.values.value_four')}
              </h4>
              <p className={AboutCSS.desc_each_values}>
                {t('About.values.value_four_description')}
              </p>
            </div>
          </div>
          <div className={AboutCSS.grid_item_squares}>
            <div className={AboutCSS.text_grid}>
              <img style={{ paddingBottom: "5px" }} src={Respect} />
              <h4 className={AboutCSS.titles_values}>
                {t('About.values.value_five')}
              </h4>
              <p className={AboutCSS.desc_each_values}>
                {t('About.values.value_five_description')}
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* wrapper values end*/}
      <Footer />
    </>
  );
}

export default About;