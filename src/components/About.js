import React from 'react'
import Talkies from './Talkies'

const aboutTitle = "Gauge Performance using Data"
const creatorTitle = "Meet the Creator"
const aboutContent = "Use the power of data. Utilize KPIs to your fitting. Using hypothetical data, get an overview on how your local service providers play in the market. This site is built using React to showcase the creator's skills in frontend engineering, and data analysis background in telecommunications. It is a prototype of tools needed for data driven solutions. Packed with powerful data charts and the capability to extract raw data for your own usage. Hypopthetical static data is used. "
const creatorContent = "Engr. Kirk Alyn Santos, ECT ventured in the world of Software Engineering because of his passion to build stuff. His main asset for developing and building tools and pipelines is the versatile language Python, with knowledge in its applications including building desktop apps, mysql connections, and even Artificial Intelligence. He then sailed the waters of web development to widen his skillset, building projects using the React Framework. This site channeled his telecommunications background, especially with his data-driven troubleshooting skills. He created this site as an example of a powerul tool used by telco engineers."
const expTitle = "Inhinyero Elektronika"
const expContent = 'Graduating with a Research Project Runner Up Award from Holy Angel University, Engr. Kirk "Kirky" Santos initially worked for two of the biggest and well-known service providers of the Philippines, including internship experience in a subsidiary or another big telco player. First fixing subscribers cable TV and internet, and then later on improving the mobile service experience of users from North Luzon using data-driven troubleshooting while applying a bit of Python coding and SQL. He then started to dwell deeper in studying in Python, which he was able to apply after moving to a Research and Development function, where he also did some NodeJS coding and SQL, while studying React further.'

const About = () => {
    return (
        <div>
            <div className="container-logo">
                <img src="/images/smartlogo.png" width="400" height="300" alt=""/>
                <img src="/images/globelogo.png" width="450" height="200" alt=""/>
            </div>
            <Talkies title={aboutTitle} content={aboutContent} />
            <div className="container-creator">
                <img src="/images/creator.png" width="250" height="250" alt=""/>
                <Talkies title={creatorTitle} content={creatorContent} />
            </div>  
            <div className="container-creator">
                <Talkies title={expTitle} content={expContent} />
                <img src="/images/ece.jpg" width="250" height="250" alt=""/>
            </div>
        </div>
    )
}

export default About
