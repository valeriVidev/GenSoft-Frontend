import React, { useState, useRef, useEffect } from "react";
import ContactCSS from "../componentsCss/Contact.module.css";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Footer from "../components/Footer";
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';
import { useLocation } from 'react-router-dom';
import BgIcon from "../assets/bg.svg";
import EnIcon from "../assets/en.svg";

function Contact() {
  const [zIndex, setZIndex] = useState(5);
  const { t, i18n } = useTranslation()
  const location = useLocation();
  const form = useRef();
  const [subject, setSubject] = useState("")


  //Env variables
  const mail_service = import.meta.env.VITE_MAIL_SERVICE
  const mail_template = import.meta.env.VITE_MAIL_TEMPLATE
  const emailjs_public_key = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  const google_maps_link = import.meta.env.VITE_GOOGLE_MAP

  useEffect(() => {
    if (location.state != null) {
      if (location.state["title"] == undefined || location.state["title"] != "") {
        setSubject(location.state["title"]);
      }
      else {
        setSubject("")
      }
    }
    else {
      setSubject("")
    }

  }, [])


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(mail_service, mail_template, form.current, emailjs_public_key)
      .then((result) => {
        form.current.reset()
        setSubject("")
      }, (error) => {
        console.log(error)
      });
  };

  return (
    <>

      <div className={ContactCSS.cover_contact}>
        <div className={ContactCSS.wrapper_content}>

          <div className={ContactCSS.left}>
            <div className={ContactCSS.centered}>
              <h2 className={ContactCSS.title}>
                {t('Contact.have_question')}

              </h2>
              <h4>
                {t('Contact.contact_us')}
              </h4>
              <Form ref={form} onSubmit={sendEmail}>
                <Row>
                  <Col>
                    <Form.Label style={{ paddingTop: "0.5rem", fontWeight: "500" }}>
                      {t('Contact.form.name')}
                    </Form.Label>
                    <Form.Control
                      placeholder={t('Contact.form.name')}
                      name="from_name" id="from_name"
                      required
                    />
                  </Col>
                  <Col>
                    <Form.Label style={{ paddingTop: "0.5rem", fontWeight: "500" }}>
                      {t('Contact.form.surname')}
                    </Form.Label>
                    <Form.Control
                      placeholder={t('Contact.form.surname')}
                      name="from_surname" id="from_surname"
                      required
                    />
                  </Col>
                </Row>
                <Form.Group className="mb-3">
                  <Form.Label style={{ paddingTop: "0.5rem", fontWeight: "500" }}>
                    {t('Contact.form.mail')}
                  </Form.Label>
                  <Form.Control
                    type="email"
                    placeholder={t('Contact.form.mail')}
                    name="from_mail" id="from_mail"
                    required
                  />
                  <Col>
                    <Form.Label style={{ paddingTop: "0.5rem", fontWeight: "500" }}>
                      {t('Contact.form.subject')}
                    </Form.Label>
                    <Form.Control
                      placeholder={t('Contact.form.subject')}
                      name="subject" id="subject" defaultValue={subject}
                      minLength={5}
                      required
                    />
                  </Col>
                  <Form.Label style={{ paddingTop: "0.5rem", fontWeight: "500" }}>
                    {t('Contact.form.message')}
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    placeholder={t('Contact.form.message')}
                    style={{ height: "100px" }}
                    name="message" id="message"
                    minLength={10}
                    required
                  />

                  <Button
                    variant="primary"
                    type="submit"
                    style={{
                      marginTop: "1rem",
                      color: "black",
                      background: "#DED194",
                      borderColor: "transparent",
                    }}
                  >
                    {t('Contact.form.send')}
                  </Button>
                </Form.Group>
              </Form>
            </div>
          </div>
          <div className={ContactCSS.right}>
            <div className={ContactCSS.wrapper_contact_information}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="#DED194"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                />
              </svg>
              <h1 className={ContactCSS.contact_phone_title}>
                {t('Contact.form.phones')}
              </h1>
              <p className={ContactCSS.contact_number}>+1 702 447 24 42   <img style={{ marginLeft: "15px" }}
                src={EnIcon}
                width="20"
                height="20"
              /></p>
              <p className={ContactCSS.contact_number}>+359 879 855 393  <img style={{ marginLeft: "5px" }}
                src={BgIcon}
                width="20"
                height="20"
              /></p>
            </div>
            <div className={ContactCSS.wrapper_contact_information}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="#DED194"
                className="me-2"
                viewBox="0 0 16 16"
              >
                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
              </svg>
              <h1 className={ContactCSS.contact_phone_title}>E-mail</h1>
              <p className={ContactCSS.contact_number}>office@capitalplusbrokers.com</p>
            </div>
          </div>
        </div>

        <div className={ContactCSS.wrapper_map} style={{ overflow: "hidden" }}>
          <div id="map_container_google_2" className={`${ContactCSS.map_container_2} z-depth-1-half `} style={{ overflow: "hidden", height: "400px" }} >
            <div style={{ zIndex: zIndex, position: "absolute", width: "100%", height: "100%" }} onClick={() => { setZIndex(-1) }}>
            </div>
            <iframe src={google_maps_link} style={{ overflow: "hidden" }} scrolling="no" width="100" height="480" ></iframe>
          </div>
        </div>

      </div>
      <Footer />
    </>
  );
}

export default Contact;