import SPropertyCSS from "../componentsCss/SelectedProperty.module.css"
import Button from "react-bootstrap/Button";
import Slider from 'react-slick';
import Footer from "../components/Footer";
import React, { useState, useEffect } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useLocation } from "react-router-dom"
import axios from "axios";
import { useTranslation } from 'react-i18next';
import { useNavigate } from "react-router-dom";

function SelectedProperty() {
  //Nav properties
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

  // Data
  const [property, setProperty] = useState()
  const location = useLocation();
  const actualPath = decodeURIComponent(location.pathname)

  //Page control
  const [dataReady, setDataReady] = useState(false)
  const navigateTo = useNavigate();
  const { t, i18n } = useTranslation()

  useEffect(() => {
    axios.post("http://127.0.0.1:3005/api/property/get", {
      property_link: actualPath
    }).then(
      (response) => {
        response = response.data
        setProperty(response["result"])
        setDataReady(true)
      }
    )
  }, [])

  const clickedInquery = () => {
    const title = property["property_title"]
    navigateTo('/contact', { state: { title } })
  }

  if (dataReady) {

    return (
      <>
        <div className={SPropertyCSS.wrapper_property}>
          <div className={SPropertyCSS.wrapper_left}>

            <Slider asNavFor={nav2} ref={(slider1) => setNav1(slider1)}>
              <div>
                <img className={SPropertyCSS.img_styling} src={property["property_image"]}></img>
              </div>
              {
                property["property_support_images"].map((image, index) => {
                  return <div key={index}>
                    {image["image_path"].includes(".webm") ? (
                      <video className={SPropertyCSS.img_styling} width="100%" controls >
                        <source src={image["image_path"]} type="video/webm" />
                      </video>
                    ) : (
                      <img className={SPropertyCSS.img_styling} src={image["image_path"]}></img>
                    )}
                  </div>
                })
              }
            </Slider>
            {
              property["property_support_images"].length == 0 ? (<div></div>) : (
                <Slider className={SPropertyCSS.second_slider}
                  asNavFor={nav1}
                  ref={(slider2) => setNav2(slider2)}
                  slidesToShow={property["property_support_images"].length < 2 ? (2) : (3)}
                  swipeToSlide={true}
                  focusOnSelect={true}
                >
                  <div>
                    <img className={SPropertyCSS.img_styling_second_slider} src={property["property_image"]}></img>
                  </div>
                  {
                    property["property_support_images"].map((image, index) => {
                      return <div key={index}>
                        {image["image_path"].includes(".webm") ? (
                          <video className={SPropertyCSS.img_styling_second_slider} >
                            <source src={image["image_path"]} type="video/webm" />
                          </video>
                        ) : (
                          <img className={SPropertyCSS.img_styling_second_slider_second} src={image["image_path"]}></img>
                        )}
                      </div>
                    })
                  }

                </Slider>
              )
            }
          </div>
          <div className={SPropertyCSS.wrapper_right}>
            <p className={SPropertyCSS.title_description}>{property["property_title"]}</p>
            <Button className={`${SPropertyCSS.title_font} ${SPropertyCSS.about_us_button}`} variant="primary" size="large" active onClick={clickedInquery}>
              {t('SelectedProperty.inquiry')}
            </Button>
            <p className={SPropertyCSS.title_about}>
              {t('SelectedProperty.description')}
            </p>
            <div className={SPropertyCSS.description} dangerouslySetInnerHTML={{ __html: property["property_body"] }}>
            </div>
          </div>
        </div>
        <Footer />
      </>
    )
  }
}

export default SelectedProperty;