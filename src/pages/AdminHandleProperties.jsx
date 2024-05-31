import PanelCSS from "../componentsCss/AdminPanel.module.css"
import PicAdd from "../assets/add_pic.png";

import Select from 'react-select';
import React, { useState, useEffect, useRef } from "react";
import Form from 'react-bootstrap/Form';
import Cover from "../assets/cover_properties_admin.png";
import Button from "react-bootstrap/Button";
import DynamicParams from "../components/DynamicProperties";
import axios from "axios";
import MyRichTextEditor from "../components/RichTextEditor";


function PropertiesHandle() {

    const auth_token = sessionStorage.getItem("access_token") || "";

    // Extract selected inputs
    const [getOption, setGetOption] = useState("");
    // Extract selected inputs needed for creating a property
    const [getLanguage, setGetLanguage] = useState("");
    const [getCountry, setGetCountry] = useState("");
    const [getCity, setGetCity] = useState("");
    const [getType, setGetType] = useState("");
    const property_title = useRef();
    const [propertyBody, setPropertyBody] = useState("");
    const [headImage, setHeadImage] = useState(null);
    const [headImageText, setHeadImageText] = useState("добави главна снимка");
    const [supportImages, setSupportImages] = useState(null);
    const [supportImagesText, setSupportImagesText] = useState("добави други снимки");


    //Fed with request data items
    const [propertyNameList, setPropertyNameList] = useState([])
    const [property, setProperty] = useState([])
    const [countries, setCountries] = useState("")
    const [cities, setCities] = useState("")
    const [types, setTypes] = useState("")
    const [message, setMessage] = useState("");

    //Page control
    const [showPropertiesField, setShowPropertiesField] = useState(false);

    // Start of general functions
    const onOptionSelected = (e) => {
        unloadDataONSuccess();
        setGetOption(e.currentTarget.value)
        if (e.currentTarget.value == "add") {
            setShowPropertiesField(false)
        }
        else if (e.currentTarget.value == "edit" || e.currentTarget.value == "delete") {
            setShowPropertiesField(true)
        }
    }

    useEffect(() => {
        if (getOption != "" && getLanguage != "") {
            setMessage("")
            loadFilters()
            if (getOption == "edit" || getOption == "delete") {
                loadOffers()
            }

        }
    }, [getOption, getLanguage])

    const unloadDataONSuccess = () => {
        setPropertyNameList([])
        setProperty([])
        setGetCountry("")
        setCountries([])
        setGetCity("")
        setCities([])
        setGetType("")
        setTypes([])
        property_title.current.value = ""
        setPropertyBody("")
        setGetLanguage("")
        setHeadImage(null)
        setHeadImageText("добави главна снимка")
        setSupportImages(null)
        setSupportImagesText("добави други снимки")
    }
    // End of general functions

    // Start of logic for add, edit or delete functionality
    const loadOffers = () => {
        axios.post("http://127.0.0.1:3005/api/property/getNames", {
            property_language: getLanguage
        },
            {
                headers: {
                    Authorization: `Bearer ${auth_token}`,
                },
            }
        ).then(
            (response) => {
                response = response.data
                convertNamesToDict(response["result"])
            }
        ).catch(() => {
            setPropertyNameList([])
        });
    }

    const convertNamesToDict = (result) => {
        let nameDict = []
        result.forEach((item) => {
            nameDict.push({
                label: item["property_title"],
                value: item["property_title"]
            });
        })
        setPropertyNameList(nameDict)
    }

    const loadSelectedOffer = (propertyTitle) => {
        // When an offer from the list with names is clicked
        axios.post("http://127.0.0.1:3005/api/property/getFull", {
            property_title: propertyTitle["value"]
        },
            {
                headers: {
                    Authorization: `Bearer ${auth_token}`,
                },
            }
        ).then(
            (response) => {
                response = response.data
                setProperty(response["result"])
                loadParametersToFields(response["result"])
            }
        ).catch(
            err => {
                setMessage(err.response.data.error_message)
            });
    }

    const loadParametersToFields = (property) => {
        setGetCountry(property["property_country"])
        setGetCity(property["property_city"])
        setGetType(property["property_type"])
        property_title.current.value = property["property_title"]
        setPropertyBody(property["property_body"])
    }

    const loadFilters = () => {
        axios.post("http://127.0.0.1:3005/api/dynamicParams/get", {
            type: "Country",
            source: "Property",
            param_language: getLanguage
        }).then(
            (response) => {
                response = response.data
                setCountries(response["result"])
            }
        );
        axios.post("http://127.0.0.1:3005/api/dynamicParams/get", {
            type: "City",
            source: "Property",
            param_language: getLanguage
        }).then(
            (response) => {
                response = response.data
                setCities(response["result"])
            }
        );
        axios.post("http://127.0.0.1:3005/api/dynamicParams/get", {
            type: "Type",
            source: "Property",
            param_language: getLanguage
        }).then(
            (response) => {
                response = response.data
                setTypes(response["result"])
            }
        );
    }

    const HeadImageChange = (e) => {
        if (e.target.files) {
            setHeadImage(e.target.files[0]);
            setHeadImageText(`Главна снимка "${e.target.files[0]["name"]}" е прекачена`)
        }
    };

    const SupportImagesChange = (e) => {
        if (e.target.files) {
            setSupportImages(e.target.files);
            setSupportImagesText(`Брой добавени снимки: ${e.target.files.length}`)
        }
    };
    // End of logic for add, edit or delete functionality

    // Submission of the request
    const onSubmit = () => {
        setMessage("Loading...")
        if (getOption == "add" || getOption == "edit") {
            let link = "";
            if (getOption == "add") {
                link = "http://127.0.0.1:3005/api/property/create"
            }
            else {
                link = "http://127.0.0.1:3005/api/property/update"
            }

            const data = new FormData();

            if (headImage != null) {
                data.append("head_image", headImage, headImage.name)
            }
            if (supportImages != null) {
                // Files is not an array, but it's iterable, spread to get an array of files
                const supportImageFiles = supportImages ? [...supportImages] : [];
                supportImageFiles.forEach((file) => {
                    data.append('support_images', file, file.name);
                });
            }

            if (getOption == "edit") {
                if (property["property_title"] != property_title.current.value) {
                    data.append('property_title', property["property_title"]);
                    data.append('property_title_new', property_title.current.value)
                } else {
                    data.append('property_title', property_title.current.value);
                }
            }
            else {
                data.append('property_title', property_title.current.value);
            }
            data.append('property_body', propertyBody);
            data.append('property_country', getCountry);
            data.append('property_city', getCity);
            data.append('property_type', getType);
            data.append('property_language', getLanguage);

            if (getOption == "add") {
                axios.post(link, data,
                    {
                        headers: {
                            "Content-Type": "multipart/form-data",
                            "Authorization": `Bearer ${auth_token}`
                        }
                    }
                ).then(
                    (response) => {
                        unloadDataONSuccess();
                        response = response.data
                        setMessage("Property created successfully")
                    }
                ).catch(
                    err => {
                        setMessage(err.response.data.error_message)
                    });
            }
            else if (getOption == "edit") {
                axios.put(link, data,
                    {
                        headers: {
                            "Content-Type": "multipart/form-data",
                            "Authorization": `Bearer ${auth_token}`
                        }
                    }
                ).then(
                    (response) => {
                        unloadDataONSuccess();
                        setMessage("Property updated successfully")
                    }
                ).catch(
                    err => {
                        setMessage(err.response.data.error_message)
                    });
            }
            else if (getOption == "delete") {

            }

        }
        else if (getOption == "delete") {
            axios.delete("http://127.0.0.1:3005/api/property/delete",
                {
                    headers: {
                        Authorization: `Bearer ${auth_token}`,
                    },
                    data: {
                        property_id: property['id']
                    }
                }

            ).then(
                (response) => {
                    unloadDataONSuccess();
                    response = response.data
                    setMessage(response["result"])
                }
            ).catch(
                err => {
                    if (err.response.data.error_message != undefined) {
                        setMessage(err.response.data.error_message)
                    }
                    else {
                        setMessage("")
                    }
                }
            );

        }
    }

    return (
        <>
            <img className={PanelCSS.bg}
                src={Cover} />
            <div className={PanelCSS.wrapper_first}>
                <Form.Group controlId="formBasicSelect" className={PanelCSS.filter_whole}>
                    <Form.Label>Настройка :</Form.Label>
                    <Form.Select
                        value={getOption}
                        onChange={onOptionSelected}>
                        <option value=""></option>
                        <option value="add">Добави</option>
                        <option value="edit">Редакирай</option>
                        <option value="delete">Изтрий</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group controlId="formBasicSelect" className={PanelCSS.filter_whole}>
                    <Form.Label style={{ paddingTop: "1rem" }} >Eзик :</Form.Label>
                    <Form.Select
                        value={getLanguage}
                        onChange={(e => setGetLanguage(e.currentTarget.value))}>
                        <option value=""></option>
                        <option value="bg">Български</option>
                        <option value="en">Английски</option>
                    </Form.Select>
                </Form.Group>
            </div>
            {
                showPropertiesField ? (
                    <div className={PanelCSS.wrapper_content_businesses}>
                        <Form.Label style={{ paddingTop: "1rem" }}>Избери имот :</Form.Label>
                        <Select options={propertyNameList} menuPlacement="auto" maxMenuHeight={150} menuPortalTarget={document.body}
                            placeholder="Избери имот" onChange={loadSelectedOffer} isSearchable={true} />
                    </div>
                ) : (
                    null
                )
            }
            <div className={PanelCSS.wrapper_whole_second}>
                <Form.Group controlId="formBasicSelect" className={PanelCSS.filter_whole}>
                    <Form.Label>Държава :</Form.Label>
                    <Form.Select
                        value={getCountry}
                        onChange={(e => setGetCountry(e.currentTarget.value))}
                        disabled={getOption != "delete" ? (false) : (true)}>
                        <option value=""></option>
                        <DynamicParams entries={countries} />
                    </Form.Select>
                </Form.Group>
                <Form.Group controlId="formBasicSelect" className={PanelCSS.filter_whole}>
                    <Form.Label>Град :</Form.Label>
                    <Form.Select
                        value={getCity}
                        onChange={(e => setGetCity(e.currentTarget.value))}
                        disabled={getOption != "delete" ? (false) : (true)}>
                        <option value=""></option>
                        <DynamicParams entries={cities} />
                    </Form.Select>
                </Form.Group>
                <Form.Group controlId="formBasicSelect" className={PanelCSS.filter_whole}>
                    <Form.Label>Тип :</Form.Label>
                    <Form.Select
                        value={getType}
                        onChange={(e => setGetType(e.currentTarget.value))}
                        disabled={getOption != "delete" ? (false) : (true)}>
                        <option value=""></option>
                        <DynamicParams entries={types} />
                    </Form.Select>
                </Form.Group>
            </div>
            <div className={PanelCSS.whole_content_wrapper}>
                <div className={PanelCSS.wrapper_second}>
                    <label htmlFor="head_images" className={PanelCSS.imageLabel} style={getOption != "delete" ? (null) : ({ cursor: 'default' })}>

                        <div className={PanelCSS.wrapper_big_pic}>
                            <img src={PicAdd}
                                width="88"
                                height="88" />
                            <p>{headImageText}</p>

                        </div>
                    </label>
                    <input type="file" onChange={HeadImageChange} id="head_images" className={PanelCSS.uploadImages} disabled={getOption != "delete" ? (false) : (true)} />
                    <label htmlFor="support_images" className={PanelCSS.imageLabel} style={getOption != "delete" ? (null) : ({ cursor: 'default' })}>
                        <div className={PanelCSS.wrapper_small_pic}>
                            <p>{supportImagesText}</p>
                        </div>
                    </label>
                    <input type="file" onChange={SupportImagesChange} multiple id="support_images" className={PanelCSS.uploadImages} disabled={getOption != "delete" ? (false) : (true)} />
                </div>
                <div className={PanelCSS.wrapper_right_side}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="text" placeholder="Добави заглавие"
                            ref={property_title}
                            disabled={getOption != "delete" ? (false) : (true)} />
                    </Form.Group>
                    <p className={PanelCSS.title_about}>За имота</p>
                    <MyRichTextEditor body={propertyBody} setBody={setPropertyBody} disabled={getOption != "delete" ? (false) : (true)}/>
                    {message != "" ? (
                        <p style={{ paddingTop: '1%', textAlign: 'center', color: 'white' }}>{message}</p>
                    ) : (
                        null
                    )}
                    <Button onClick={onSubmit} style={{marginTop:"5%"}} className={`${PanelCSS.title_font} ${PanelCSS.about_us_button}`} variant="primary" size="large" active >
                        запази

                    </Button>
                </div>

            </div >
        </>
    )
}

export default PropertiesHandle;