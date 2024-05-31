import PanelCSS from "../componentsCss/AdminPanel.module.css"

import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import FilterForm from "../components/FilterForm";
import FilterEntry from "../components/FilterEntry";
import Form from 'react-bootstrap/Form';
import FilterCss from "../componentsCss/FilterList.module.css";
import Cover from "../assets/admin_panel_cover.png";


function FiltersHandle() {

    // Selected filters
    const [getLanguage, setGetLanguage] = useState('');
    const [getSource, setGetSource] = useState('');
    const [getFilter, setGetFilter] = useState('');

    //Data
    const auth_token = sessionStorage.getItem("access_token") || "";
    const [paramValues, setParamValues] = useState([]);
    const [error, setError] = useState("");


    useEffect(() => {

        if (getLanguage == "" || getLanguage == undefined || getSource == "" || getSource == undefined || getFilter == "" || getFilter == undefined) {
            return
        }
        getParams()
    }, [getLanguage, getSource, getFilter])

    const addFilter = (paramValue) => {

        axios.post("http://127.0.0.1:3005/api/dynamicParams/create", {
            param_value: paramValue,
            type: getFilter,
            source: getSource,
            param_language: getLanguage
        },
            {
                headers: {
                    Authorization: `Bearer ${auth_token}`,
                },
            }

        ).then(
            (response) => {
                getParams()
                setError("")
            }
        ).catch(
            err => {
                if (err.response.data.error_message != undefined) {
                    setError(err.response.data.error_message)
                }
                else {
                    setError("")
                }
            }
        );
    };

    const removeFilter = (paramValue) => {
        axios.delete("http://127.0.0.1:3005/api/dynamicParams/delete",
            {
                headers: {
                    Authorization: `Bearer ${auth_token}`,
                },
                data: {
                    param_value: paramValue,
                    type: getFilter,
                    source: getSource,
                    param_language: getLanguage
                }
            }

        ).then(
            (response) => {
                getParams()
                setError("")
            }
        ).catch(
            err => {
                if (err.response.data.error_message != undefined) {
                    setError(err.response.data.error_message)
                }
                else {
                    setError("")
                }
            }
        );
    };


    const getParams = () => {
        axios.post("http://127.0.0.1:3005/api/dynamicParams/get", {
            type: getFilter,
            source: getSource,
            param_language: getLanguage
        }).then(
            (response) => {
                response = response.data
                setParamValues(response["result"])
                setError("")
            }
        ).catch(
            err => {
                if (err.response.data.error_message != undefined) {
                    setError(err.response.data.error_message)
                }
                else {
                    setError("")
                }
            }
        );
    }

    return (
        <div >

            <img className={PanelCSS.bg}
                src={Cover} />
            <div className={PanelCSS.wrapper_content}>
                <p className={PanelCSS.title}>Създаване на филтри </p>
                <p className={PanelCSS.page_description}>Създадените филтри ще могат да се използват при създаването на обявата </p>
                <div className={PanelCSS.wrapper_filters}>
                    <Form.Group controlId="formBasicSelect" className={PanelCSS.filter_whole}>
                        <Form.Label>Избери език :</Form.Label>
                        <Form.Select
                            value={getLanguage}
                            onChange={(e => setGetLanguage(e.currentTarget.value))}>
                            <option value=""></option>
                            <option value="bg">Български</option>
                            <option value="en">Английски</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group controlId="formBasicSelect" className={PanelCSS.filter_whole}>
                        <Form.Label>Избери за коя страница се отнася филтъра :</Form.Label>
                        <Form.Select
                            value={getSource}
                            onChange={(e => setGetSource(e.currentTarget.value))}>
                            <option value=""></option>
                            <option value="Business">Бизнеси</option>
                            <option value="Property">Имоти</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group controlId="formBasicSelect" className={PanelCSS.filter_whole}>
                        <Form.Label>Избери филтър :</Form.Label>
                        <Form.Select
                            value={getFilter}
                            onChange={(e => setGetFilter(e.currentTarget.value))} >
                            <option value=""></option>
                            <option value="Country">Държава</option>
                            <option value="City">Град</option>
                            <option value="Type">Тип</option>
                        </Form.Select>
                        <br></br>
                    </Form.Group>
                </div>
                <Form.Label style={{ color: "white" }}>Виж съществуващите :</Form.Label>
                <div style={{ maxHeight: 50, overflow: 'auto' }} className={FilterCss.todo_app}>
                    {paramValues.map((filter) => {
                        return (
                            <Form>
                                <FilterEntry removeFilter={removeFilter} filter={filter} />
                            </Form>
                        )
                    })}
                </div>
                <FilterForm addFilter={addFilter} errorMessage={error} />
                <section className="container vert-offset-top-2">
                    <div id="todoBox" className="todoBox col-xs-6 col-xs-offset-3"></div>
                </section>
            </div>
        </div>

    )
}

export default FiltersHandle;