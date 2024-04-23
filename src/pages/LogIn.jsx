import Cover from "../assets/cover.webp";
import Logo from "../assets/logo_full_size.png";
import LogInCSS from "../componentsCss/LogIn.module.css";
import Button from "react-bootstrap/Button";
import React, { useState, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function LogIn() {

    // Data
    const getUsername = useRef();
    const getPassword = useRef();

    //Page control
    const navigateTo = useNavigate();
    const [isValidData, setIsValidData] = useState(true);

    const submitHandler = (event) => {
        event.preventDefault();

        axios.post("http://localhost:3005/api/auth/login", {
            username: getUsername.current.value,
            password: getPassword.current.value,
        },{
            withCredentials: true
        }
        ).then(
            (response) => {
                let results = response.data["result"]
                sessionStorage.setItem("access_token", results["access_token"]);
                navigateTo('/admin')
            },
            () => {
                setIsValidData(false);
            }
        );

    }
 
    return (
        <div className={LogInCSS.containerr}>
            <div className={LogInCSS.centered}>
                <img src={Logo} alt="cover image" />
                <div className="box">
                    <form className={LogInCSS.form_style} onSubmit={submitHandler}>
                        <div className={LogInCSS.input_container}>
                            <input
                                type="text"
                                required=""
                                ref={getUsername}
                            />
                            <label>Потребителско име</label>
                        </div>
                        <div className={LogInCSS.input_container}>
                            <input
                                type="password"
                                required=""
                                ref={getPassword}
                            />
                            <label>Парола</label>
                        </div>
                        <div
                            className={LogInCSS.wrong_password}
                            style={
                                isValidData
                                    ? { display: "none" }
                                    : { display: "block", color: "white" }
                            }
                        >
                            <p>Невалидно потребителско име или парола. </p>
                        </div>
                        <Button
                            className={`${LogInCSS.title_font} ${LogInCSS.about_us_button}`}
                            type="submit"
                            variant="primary"
                            size="large"
                            active
                        >
                            влизане
                        </Button>
                    </form>
                </div>
            </div>
            <img className={LogInCSS.coverr} src={Cover} alt="cover image" />

        </div>
    )
}

export default LogIn;