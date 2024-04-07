import {useState} from "react"

const Preview = ({name, desc}) => {
    return (
        <div className="preview-div">
            <h1>{name}</h1>
            <p>{desc}</p>
        </div>
    )
}

export default Preview