import PanelCSS from "../componentsCss/AdminPanel.module.css"
import Button from "react-bootstrap/Button";
import Cover from "../assets/cov.jpg";
import { useNavigate } from "react-router-dom";


function AdminPanel() {
    const navigateTo = useNavigate();

    return (
        <div className={PanelCSS.wrapper_content_main}>
            <img style={{ opacity: "77%" }} className={PanelCSS.bg}
                src={Cover} />
            <h1>Административен панел</h1>
            <Button
                className={`${PanelCSS.title_font} ${PanelCSS.about_us_button_functions}`}
                onClick={() => {navigateTo('/functionality/filters')}}>
                Функция филтри
            </Button>
            <Button
                className={`${PanelCSS.title_font} ${PanelCSS.about_us_button_main} disabled`}
                onClick={() => {navigateTo('/')}}>
                Функция новини
            </Button>
            <Button
                className={`${PanelCSS.title_font} ${PanelCSS.about_us_button_main}`}
                onClick={() => {navigateTo('/functionality/properties')}}>
                Функция имоти
            </Button>
            <Button
                className={`${PanelCSS.title_font} ${PanelCSS.about_us_button_main} disabled`}
                onClick={() => {navigateTo('/')}}>
                Функция бизнеси
            </Button>
            <div className={PanelCSS.wrapper_row}>

            </div>
        </div>
    )
}

export default AdminPanel;