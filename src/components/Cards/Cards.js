import React from 'react'
import './Cards.css'

function Cards() {
    return (
        <div className="card-container">
            <div className="card-heading">WORKS</div>
            <ul className="card-wrapper">
                <li className="card">
                    <div className="bgimg"></div>
                    <h2>
                        CENTRE FOR WILDLIFE REHABILITATION AND
                        CONSERVATION(CWRC)
                    </h2>
                    <p>
                        Located near Kaziranga National Park in Assam, this is
                        the only facility in India where orphaned and/or injured
                        wild animals of several species are hand-raised and/or
                        treated and subsequently returned to the wild.
                    </p>
                </li>
                <li className="card">
                    <h2>MITHAPUR CORAL REEF RECOVERY PROJECT</h2>
                    <p>
                        Launched in 2008, the Coral Reef Recovery Project seeks
                        to develop and implement appropriate strategies for the
                        conservation of the Mithapur Reef, situated 12
                        kilometres south of the Gulf of Kachchh in Gujarat.
                    </p>
                </li>
                <li className="card">
                    <h2>GREATER MANAS RECOVERY PROJECT Wildlife</h2>
                    <p>
                        Launched in 2008, the Coral Reef Recovery Project seeks
                        to develop and implement appropriate strategies for the
                        conservation of the Mithapur Reef, situated 12
                        kilometres south of the Gulf of Kachchh in Gujarat.
                    </p>
                </li>
            </ul>
        </div>
    )
}

export default Cards
