import {useState} from "react"

const Preview = ({name, desc, handleClick}) => {
    return (
        <div onClick={handleClick} className="preview-div">
            <h1>{name}</h1>
            <p>{desc}</p>
        </div>
    )
}

export default Preview