import React from 'react'
import Talkies from './Talkies'

const aboutTitle = "Gauge Performance using Data"
const creatorTitle = "Meet the Creator"
const aboutContent = "Use the power of data. Utilize KPIs to your fitting. Using hypothetical data, get an overview on how your local service providers play in the market. This site is built using React to showcase the creator's skills in frontend engineering, and data analysis background in telecommunications. It is a prototype of tools needed for data driven solutions. Packed with powerful data charts and the capability to extract raw data for your own usage. Hypopthetical static data is used. "
const creatorContent = "Engr. Kirk Alyn Santos, ECT ventured in the world of Software Engineering because of his passion to build stuff. His main asset for developing and building tools and pipelines is the versatile language Python, with knowledge in its applications including building desktop apps, mysql connections, and even Artificial Intelligence. He then sailed the waters of web development to widen his skillset, building projects using the React Framework. This site channeled his telecommunications background, especially with his data-driven troubleshooting skills. He created this site as an example of a powerul tool used by telco engineers."

const About = () => {
    return (
        <div>
            <div className="container-logo">
                <img src="/images/smartlogo.png" width="400" height="300" alt=""/>
                <img src="/images/globelogo.png" width="450" height="200" alt=""/>
            </div>
            <Talkies title={aboutTitle} content={aboutContent} />
            <div className="container-creator">
                <img src="/images/creator.png" width="200" height="200" alt=""/>
                <Talkies title={creatorTitle} content={creatorContent} />
            </div>  
        </div>
    )
}

export default About
