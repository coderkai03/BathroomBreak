import { useState } from "react"
import Preview from "./CardPreview"
import { useHistory } from "react-router-dom";

const Study = () => {
    
    return (
        <div>
          <Preview name={"Police codes"} desc={"Descriptions"}/>
          <Preview name={"Medical procedures"} desc={"Descriptions"}/>
          <Preview name={"SF Penal codes"} desc={"Descriptions"}/>
        </div>
    )
}

export default Study