import React from 'react'
import Talkies from '../components/Talkies'

const aboutTitle = "Catch a Glimpse: Web Apps and Data"
const aboutContent = "A glimpse of some of the first ever projects built by Kirk: A Mobile Metrics Dashboard and Insights clone website which serves as a tool for data analytics for telco engineers, utilizing network KPIs to your fitting. Using hypothetical data, get an overview on how your local service providers play in the market."

const Overview = () => {
    return (
        <>
        <div className="container-logo">
            <img src="/images/smartlogo.png" width="400" height="300" alt=""/>
            <img src="/images/globelogo.png" width="400" height="200" alt=""/>
        </div>
        <Talkies title={aboutTitle} content={aboutContent} />
        </>
    )
}

export default Overview
