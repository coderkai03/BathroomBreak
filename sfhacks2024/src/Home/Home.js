import { useState } from "react"
import Preference from "./Preferences"

import police from "../civil-assets/police-pfp.png"
import firefighter from "../civil-assets/firefighter-pfp.png"
import emt from "../civil-assets/emt-pfp.png"


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
                <p className="p-desc">Looking to join law enforcement, emergency medical services, or firefighting?<br/><br/>
                Study smarter for your civil service exam with <b>SF Civil Pro!</b></p>
            </div>
            <div className="preferences-div">
                <h1 className="hear-from-us">Hear from our users</h1>
                <Preference role={"911 Dispatcher"} desc={"911 dispatchers are trained professionals who answer emergency calls, gather critical information, and coordinate the dispatch of emergency services to the scene of incidents."} imgFirst={true} imgurl={police} />
                <Preference role={"Firefighter"} desc={"Firefighter respond to emergencies, extinguishing fires, rescuing individuals from the destructive force of flames."} imgFirst={false} imgurl={firefighter} />
                <Preference role={"Social Worker"} desc={"911 dispatchers are trained professionals who answer emergency calls, gather critical information, and coordinate the dispatch of emergency services to the scene of incidents."} imgFirst={true} imgurl={emt} />
            </div>
        </div>
    )
}

export default Home