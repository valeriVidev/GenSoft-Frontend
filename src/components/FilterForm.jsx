import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import FilterCss from "../componentsCss/FilterList.module.css";

function FilterForm(props) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()
    let formattedInput = input.trim()
    props.addFilter(formattedInput)
    setInput("")
  }

  return (
    <form onSubmit={handleSubmit} className={FilterCss.todo_form}>
      <br></br>
      <Form.Label>Създай нова стойност :</Form.Label>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className={FilterCss.todo_input}
        placeholder="Добави "
      />
      {props.errorMessage != "" ? (
        <p style={{ paddingTop: '2%', textAlign: 'center', color: 'white' }}>{props.errorMessage}</p>
      ) : (
        null
      )}
      <button type="submit" className={FilterCss.todo_button}>запазване</button>
    </form>
  );
}

export default FilterForm;