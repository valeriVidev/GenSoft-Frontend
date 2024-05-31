import { Link } from "react-router-dom";
import PropertiesCSS from "../componentsCss/Properties.module.css";
import Button from "react-bootstrap/Button";
import { useTranslation } from 'react-i18next';



function PropertyEntry(props) {
    const regex = /(<(?:[^>]+)(?:>|\.\.\.))/gi;
    const { t, i18n } = useTranslation()


    if (props.properties.length <= 0) {
        //TODO: Figure out a nice picture when lacking properties and move the inline css to normal css
        return <><p style={{ paddingTop: '15%', textAlign: 'center', color: 'white' }}>{t('Properties.not_found')}</p></>;
    }

    if (props.properties.length > 0) {
        for (let index = 0; index < props.properties.length; index++) {
            let property = props.properties[index];
            property["property_description"] = property["property_description"].replace(regex, '')
        }
    }

    return props.properties.map((property) => (
        <li id={property["id"]} key={property["id"]} className={PropertiesCSS.property_item}>
            <div className={PropertiesCSS.wrapper_property}>
                <div className={PropertiesCSS.wrapper_right}>
                    <Link to={property["property_link"]} className={PropertiesCSS.link_styling}>
                        <img className={PropertiesCSS.img_styling}
                            src={property["property_image"]}></img>
                    </Link>
                </div>
                <div className={PropertiesCSS.wrapper_left}>
                    <Link to={property["property_link"]} className={PropertiesCSS.link_styling}>
                        <p className={PropertiesCSS.title_description}>{property["property_title"]}</p>
                        <p className={PropertiesCSS.description}> {property["property_description"]}</p>
                        <Button
                            className={`${PropertiesCSS.title_font} ${PropertiesCSS.about_us_button}`}
                            variant="primary"
                            size="large"
                            active
                        >
                            {t('Properties.more')}
                        </Button>
                    </Link>
                </div>
            </div>

        </li>
    ));
}

export default PropertyEntry;
