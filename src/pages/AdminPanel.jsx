import PanelCSS from "../componentsCss/AdminPanel.module.css"
import Button from "react-bootstrap/Button";
import Cover from "../assets/cov.jpg";


function AdminPanel() {
    return (
        <div className={PanelCSS.wrapper_content_main}>
            <img style={{ opacity: "77%" }} className={PanelCSS.bg}
                src={Cover} />
            <h1>Административен панел</h1>
            <Button
                className={`${PanelCSS.title_font} ${PanelCSS.about_us_button_functions}`}>
                Функция филтри
            </Button>
            <Button
                className={`${PanelCSS.title_font} ${PanelCSS.about_us_button_main}`}>
                Функция новини
            </Button>
            <Button
                className={`${PanelCSS.title_font} ${PanelCSS.about_us_button_main}`}>
                Функция имоти
            </Button>
            <Button
                className={`${PanelCSS.title_font} ${PanelCSS.about_us_button_main}`}>
                Функция бизнеси
            </Button>
            <div className={PanelCSS.wrapper_row}>

            </div>
        </div>
    )
}

export default AdminPanel;