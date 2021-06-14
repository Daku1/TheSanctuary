import React from 'react'
import './Hero.css'
import ScriptTag from 'react-script-tag'
function Hero() {
    return (
        <div className="hero-container">
            <div className="hero-content">
                <h1>100% of your money is used to save the Wildlife</h1>
                <form>
                    <ScriptTag
                        src="https://checkout.razorpay.com/v1/payment-button.js"
                        data-payment_button_id="pl_HMqh70HCMRUM41"
                        async
                    ></ScriptTag>
                </form>
                <h4 className="heading">
                    We are on a mission to save the animal Hunger by providing
                    nutritious meals as well has provide a better healthcare
                    with the support of a national network of donors just like
                    you.
                </h4>
            </div>
        </div>
    )
}

export default Hero
