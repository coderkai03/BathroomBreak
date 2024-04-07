import {useState} from "react"

const Preview = ({name, handleClick}) => {
    return (
        <div onClick={handleClick} className="preview-div">
            <h1>{name}</h1>
        </div>
    )
}

export default Preview