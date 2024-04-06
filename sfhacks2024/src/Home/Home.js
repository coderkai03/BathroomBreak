import { useState } from "react"
import Preference from "./Preferences"

import police from "../civil-assets/police-pfp.png"


const Home = () => {
    const [showFact, setShowFact] = useState(false)
    const [disableBtn, setDisableBtn] = useState(false)

    const handleFact = () => {
        setShowFact(true)
        setDisableBtn(true)
    }

    return (
        <div className="body-div">
            <div className="welcome-div">
                <img
                className="home-img"
                src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/9tuoj3v0ff5-8%3A7?alt=media&token=d84848fe-ea23-4b2e-a466-994afa09da2d"/>
                <p className="p-desc">Welcome to <b>Bathroom Break</b>, your ultimate destination for finding restrooms in <b>San Francisco</b> with ease.<br/><br/>Our interactive map and resources hub provide wheelchair-friendly routes and valuable information for disabled individuals to navigate the city confidently.</p>
            </div>
            <div className="preferences-div">
                <h1>What's in your bathroom?</h1>
                <Preference role={"Police"} desc={"arrests people"} imgFirst={true} imgurl={police} />
            </div>
        </div>
    )
}

export default Home