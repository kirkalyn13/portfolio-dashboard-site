import React from 'react'
import Talkies from '../components/Talkies'

const aboutTitle = "Gauge Performance using Data"
const aboutContent = "Use the power of data. Utilize KPIs to your fitting. Using hypothetical data, get an overview on how your local service providers play in the market. "

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
