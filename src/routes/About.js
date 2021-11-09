import React from 'react'
import Talkies from '../components/Talkies'
import Creator from '../components/Creator'

const creatorTitle = "Engr. Kirk Alyn Limbitco Santos, ECT"
const creatorOverview = "Licensed Electronics Engineer with Python and Javascript skills, with Research and Development and Telecomms Experience."
const creatorContent = "He is passionate in building cool stuff and feeding his mind with technology-related topics, which led him to the amazing world of Software Development. He is dedicated in helping his friends and colleagues in building the apps or tools they need for their respective purpose. A team-player, wherein he would do whatever it takes to reach the goal."
const creatorContacts = "0961 359 8877 | 0927 405 5567 | kirkalyn13@gmail.com | https://www.linkedin.com/in/kirk-alyn-santos-ece-ect-b35541149/"
const creatorToolset = " React | Python | NodeJS | MySQL | Firebase"
const overviewTitle = "Site Overview"
const overviewContent = "Originally intended to be a Mobile Metrics Dashboard clone project, this React Web App was utilized as a portfolio site to exhibit Engr. Kirk Alyn Santos' Software Development projects, while showcasing a bit his Data Analytics and Telecommunications background at the same time."
const backgroundTitle = "Into the Software Dev World"
const backgroundContent = "Engr. Kirk Alyn Santos, ECT ventured in the world of Software Engineering because of his passion to build stuff. His current main toolset for developing and building apps are React, NodeJS, MySQL, and Firebase. The versatile language Python is also his bread and butter for general applications, data analytics, mysql connections, and even a bit of Machine Learning/Artificial Intelligence. This site channeled his telecommunications background, especially with his data-driven troubleshooting skills. He created this site as an example of a powerful tool used by telco engineers."
const expTitle = "Inhinyero Elektronika"
const expContent = 'Graduating with a Research Project Runner Up Award from Holy Angel University, Engr. Kirk Alyn "Kirky" Santos initially worked for two of the biggest and well-known service providers of the Philippines, including internship experience in a subsidiary or another big telco player. First fixing subscribers cable TV and internet, and then later on improving the mobile service experience of users from North Luzon using data-driven troubleshooting while applying a bit of Python coding and SQL. He then started to dwell deeper in studying in Python, which he was able to apply after moving to a Software Engineer function on a Research and Development project, where he heavily did the system backend in Python, Node JS, and MySQL. He then started creating React projects for the research, and in other freelance gigs.'
const portfolioTechs = "React | ApexCharts"

const About = () => {
    return (
        <div>
            <div className="container-creator">
                <img src="/images/creator.png" width="30%" height="30%" alt=""/>
                <Creator name={creatorTitle} overview={creatorOverview} content={creatorContent} techs={creatorToolset} contacts={creatorContacts} />
            </div>  
            <Talkies title={overviewTitle} content={overviewContent} showTechs={true} techs={portfolioTechs}/>
            <div className="container-creator">
                <img src="/images/ece.jpg" width="15%" height="15%" alt=""/>
                <Talkies title={backgroundTitle} content={backgroundContent} />
            </div>  
            <div className="container-creator">
                <img src="/images/grad.jpg" width="15%" height="15%" alt=""/>
                <Talkies title={expTitle} content={expContent} />
            </div>
        </div>
    )
}

export default About
