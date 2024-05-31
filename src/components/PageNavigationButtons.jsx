import OtherCSS from "../componentsCss/Other.module.css";
import Button from "react-bootstrap/Button";
import React from "react";


function PageNavigationButtons(props) {
    const offsetIncrement = 6

    const handleNextClick = () => {
        let newOffset = props.request_offset + offsetIncrement

        if (newOffset < 0) {
            props.onClick(0)
        }
        else {
            props.onClick(newOffset)
        }
    }

    const handlePrevClick = () => {
        let newOffset = props.request_offset - offsetIncrement

        if (newOffset < 0) {
            props.onClick(0)
        }
        else {
            props.onClick(newOffset)
        }
    }

    return (
        <div className={OtherCSS.wrapper_buttons_paginator}>
            <div>
                {props.request_offset > 0 ?
                    (<Button
                        className={`${OtherCSS.title_font} ${OtherCSS.about_us_button}`}
                        variant="primary"
                        size="large"
                        onClick={handlePrevClick}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                        </svg>
                    </Button>) :
                    (null)
                }
            </div>
            <div>
                {props.response_size == 6 ?
                    (<Button
                        className={`${OtherCSS.title_font} ${OtherCSS.about_us_button}`}
                        variant="primary"
                        size="large"
                        onClick={handleNextClick}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                        </svg>
                    </Button>) :
                    (null)
                }
            </div>
        </div>
    )

}

export default PageNavigationButtons;