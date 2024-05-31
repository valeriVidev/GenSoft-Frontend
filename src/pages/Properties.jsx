import PropertiesCSS from "../componentsCss/Properties.module.css";
import Button from "react-bootstrap/Button";
import Footer from "../components/Footer";
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import PropertyEntry from "../components/PropertyEntry";
import PageNavigationButtons from "../components/PageNavigationButtons";
import DynamicParams from "../components/DynamicProperties";
import { useTranslation } from 'react-i18next';


function Properties() {
  // Selected filters
  const [getCountry, setGetCountry] = useState('');
  const [getCity, setGetCity] = useState('');
  const [getType, setGetType] = useState('');
  const getSearch = useRef();

  // Paging and items
  const [property_list, set_property_list] = useState([])
  const [offset, setOffset] = useState([])

  //Dynamic filters
  const [countries, setCountries] = useState("")
  const [cities, setCities] = useState("")
  const [types, setTypes] = useState("")

  //Page control
  const [searchMode, setSearchMode] = useState(false)
  const [firstRun, setFirstRun] = useState(true)
  const { t, i18n } = useTranslation()


  useEffect(() => {
    onClick(0)
    axios.post("http://127.0.0.1:3005/api/dynamicParams/get", {
      type: "Country",
      source: "Property",
      param_language: i18n.language
    }).then(
      (response) => {
        response = response.data
        setCountries(response["result"])
      }
    );
    axios.post("http://127.0.0.1:3005/api/dynamicParams/get", {
      type: "City",
      source: "Property",
      param_language: i18n.language
    }).then(
      (response) => {
        response = response.data
        setCities(response["result"])
      }
    );
    axios.post("http://127.0.0.1:3005/api/dynamicParams/get", {
      type: "Type",
      source: "Property",
      param_language: i18n.language
    }).then(
      (response) => {
        response = response.data
        setTypes(response["result"])
      }
    );
  }, [i18n.language])


  const onClick = (passedOffset) => {
    setOffset(passedOffset)
    axios.post("http://127.0.0.1:3005/api/property/getPage", {
      property_language: i18n.language,
      offset: passedOffset
    }).then(
      (response) => {
        response = response.data
        set_property_list(response["result"])
      }
    );
  }

  useEffect(() => {
    if (firstRun) {
      setFirstRun(false)
    }
    else {
      executeSearch("")
    }
  }, [getCountry, getCity, getType])

  const executeSearch = (event) => {
    if (event != "") {
      event.preventDefault();
    }

    axios.post("http://127.0.0.1:3005/api/property/search", {
      property_title: getSearch.current.value,
      property_country: getCountry,
      property_city: getCity,
      property_type: getType,
      property_language: i18n.language
    }).then(
      (response) => {
        response = response.data
        set_property_list(response["result"])
      }
    ).catch(() => {
      set_property_list([])
    });
    setSearchMode(true)
  }

  return (
    <>
      <p className={PropertiesCSS.title}>
      {t('Properties.property_title')}
      </p>
      <div className={PropertiesCSS.wrapper_filters_search}>
        <form onSubmit={executeSearch}>
          <InputGroup className="mb-3">
            <Form.Control className={PropertiesCSS.filter_search}
              placeholder= {t('Properties.search_value')}
              aria-describedby="basic-addon2"
              ref={getSearch}
            />
            <Button
              className={PropertiesCSS.button_search}
              type="submit"
              variant="outline-secondary"
              id="button-addon2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </Button>
          </InputGroup>
        </form>
      </div>
      <div className={PropertiesCSS.wrapper_filters}>
        <Form.Group controlId="formBasicSelect" className={PropertiesCSS.filter_whole}>
          <Form.Label>{t('Properties.filters.country')}</Form.Label>
          <Form.Select
            value={getCountry}
            onChange={(e => setGetCountry(e.currentTarget.value))}>
            <option value="">{t('Properties.filter_value')}</option>
            <DynamicParams entries={countries} />
          </Form.Select>
        </Form.Group>
        <Form.Group controlId="formBasicSelect" className={PropertiesCSS.filter_whole}>
          <Form.Label>{t('Properties.filters.city')}</Form.Label>
          <Form.Select
            value={getCity}
            onChange={(e => setGetCity(e.currentTarget.value))} >
            <option value="">{t('Properties.filter_value')}</option>
            <DynamicParams entries={cities} />
          </Form.Select>
        </Form.Group>
        <Form.Group controlId="formBasicSelect" className={PropertiesCSS.filter_whole}>
          <Form.Label>{t('Properties.filters.type')}</Form.Label>
          <Form.Select
            value={getType}
            onChange={(e => setGetType(e.currentTarget.value))}>
            <option value="">{t('Properties.filter_value')}</option>
            <DynamicParams entries={types} />
          </Form.Select>
        </Form.Group>
      </div>

      <PropertyEntry properties={property_list} />
      {searchMode ? (
        null
      ) : (
        <PageNavigationButtons request_offset={offset} response_size={property_list.length} onClick={onClick} />
      )}
      <Footer />
    </>

  )
}

export default Properties;