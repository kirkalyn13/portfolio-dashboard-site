import React from 'react'
import Talkies from '../components/Talkies'

const overviewTitle = "Site Overview"
const overviewContent = "Originally intended to be a Mobile Metrics Dashboard clone project, this React Web App was utilized as a portfolio site to exhibit Engr. Kirk Alyn Santos' Software Development projects, while showcasing his Data Analytics and Telecommunications background at the same time."
const backgroundTitle = "Into the Software Dev World"
const backgroundContent = "Engr. Kirk Alyn Santos, ECT ventured in the world of Software Engineering because of his passion to build stuff. His current main toolset for developing and building apps are React, NodeJS, MySQL, and Firebase. The versatile language Python is also his bread and butter for general applications, data analytics, mysql connections, and even a bit of Machine Learning/Artificial Intelligence. This site channeled his telecommunications background, especially with his data-driven troubleshooting skills. He created this site as an example of a powerul tool used by telco engineers."
const expTitle = "Inhinyero Elektronika"
const expContent = 'Graduating with a Research Project Runner Up Award from Holy Angel University, Engr. Kirk Alyn "Kirky" Santos initially worked for two of the biggest and well-known service providers of the Philippines, including internship experience in a subsidiary or another big telco player. First fixing subscribers cable TV and internet, and then later on improving the mobile service experience of users from North Luzon using data-driven troubleshooting while applying a bit of Python coding and SQL. He then started to dwell deeper in studying in Python, which he was able to apply after moving to a Software Engineer function on a Research and Development project, where he heavily did the system backend in Python, Node JS, and MySQL. He then started creating React projects for the research, and in other freelance gigs.'
const portfolioTechs = "React | ApexCharts"

const About = () => {
    return (
        <div>
            <Talkies title={overviewTitle} content={overviewContent} showTechs={true} techs={portfolioTechs}/>
            <div className="container-creator">
                <img src="/images/ece.jpg" width="250" height="250" alt=""/>
                <Talkies title={backgroundTitle} content={backgroundContent} />
            </div>  
            <div className="container-creator">
                <img src="/images/grad.jpg" width="250" height="250" alt=""/>
                <Talkies title={expTitle} content={expContent} />
            </div>
        </div>
    )
}

export default About
