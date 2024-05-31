import CapitalPlusCSS from "../componentsCss/CapitalPlusWorks.module.css";
import Button from "react-bootstrap/Button";
import HomeCSS from "../componentsCss/HomePage.module.css";
import { useTranslation } from 'react-i18next';
import { useNavigate } from "react-router-dom";


function CapitalPlusWork() {
  const { t, i18n } = useTranslation()
  const navigateTo = useNavigate();


  return (
    <div className={`${CapitalPlusCSS.WrapperClassName}`}>
      <p className={`${CapitalPlusCSS.title_job} ${HomeCSS.title_font}`}>
        {t('Home.CapitalPlusWork.question.part_one')}

        <br />
        {t('Home.CapitalPlusWork.question.part_two')}

      </p>
      <p className={CapitalPlusCSS.desc_job}>
        {t('Home.CapitalPlusWork.apply_now')}
      </p>
      <Button
        className={`${CapitalPlusCSS.button_styling}`}
        onClick={() => {navigateTo('/contact')}}
        variant="primary"
        active
      >
        {t('Home.CapitalPlusWork.here_button')}
      </Button>
    </div>
  );
}

export default CapitalPlusWork;