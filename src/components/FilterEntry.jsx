import React from 'react'
import { RiCloseCircleLine } from "react-icons/ri"

import FilterCss from "../componentsCss/FilterList.module.css";

function FilterEntry(props) {
    const { filter, removeFilter } = props
    return (
        <div className={FilterCss.todo_row}>
            {filter["paramValue"]}

            <div className={FilterCss.iconsContainer}>

                <RiCloseCircleLine style={{ marginRight: 5 }} onClick={() => removeFilter(filter["paramValue"])} />

            </div>
        </div>
    )
}

export default FilterEntry;
