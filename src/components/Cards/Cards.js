import React from 'react'
import './Cards.css'
import front1 from '../../images/front1.jpg'
import front2 from '../../images/front2.jpg'
import front3 from '../../images/front3.jpg'

function Cards() {
    return (
        <div className="card-container">
            <div className="card-heading">WORKS</div>
            <ul className="card-wrapper">
                <li className="card">
                    <img src={front1} alt="image1" className="image-wrapper" />
                    <div className="text-wrapper">
                        <h2>
                            CENTRE FOR WILDLIFE REHABILITATION AND
                            CONSERVATION(CWRC)
                        </h2>
                        <p>
                            Located near Kaziranga National Park in Assam, this
                            is the only facility in India where orphaned and/or
                            injured wild animals of several species are
                            hand-raised and/or treated and subsequently returned
                            to the wild.
                        </p>
                    </div>
                </li>

                <li className="card">
                    <div className="text-wrapper">
                        <h2>MITHAPUR CORAL REEF RECOVERY PROJECT</h2>
                        <p>
                            Launched in 2008, the Coral Reef Recovery Project
                            seeks to develop and implement appropriate
                            strategies for the conservation of the Mithapur
                            Reef, situated 12 kilometres south of the Gulf of
                            Kachchh in Gujarat.
                        </p>
                    </div>
                    <img src={front3} alt="image3" className="image-wrapper" />
                </li>
                <li className="card">
                    <img src={front2} alt="image2" className="image-wrapper2" />

                    <div className="text-wrapper">
                        <h2>GREATER MANAS RECOVERY PROJECT Wildlife</h2>
                        <p>
                            Wildlife Trust of India's The Greater Manas
                            Conservation Project aims on bringing back past
                            glory of Manas landscape by restoring the ecological
                            functionality of the landscape through implementing
                            multifaceted actions.
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Cards
