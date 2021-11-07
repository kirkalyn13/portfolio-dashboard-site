import Talkies from '../components/Talkies'

const kpiTitle = "Conduct Data-Driven Network Troubleshooting"
const kpiContent = "Monitor your Network's Service Quality and Performance from near real-time data trends using the Network KPI Monitoring Dashboard. Track KPI abnormalities immendiately to produce insights and derive conclusions regarding your Network's behavior."
const kpiTechs = "React | NodeJS | MySQL | ApexCharts"
const outagesTitle = "Keep an Eye Out for Outages"
const outagesContent = "With the Outage Monitoring feature of the Network KPI Monitoring Dashboard, you can immediately pin-point concerned links/nodes through the timely update of outage alarms, which comes with severity specifications."
const sitegeoTitle = "Find Serving Sites Near You"
const sitegeoContent = "Using the Site GeoMap App, Identify your possible serving site within your range. Packed with Site Information, including the availability of 2G, 3G, and 4G technologies. It is a powerful tool for service assurance and testing functions to easily identify concerned sites with service feedback issues."
const sitegeoTechs = "React | Firebase | LeafletJS"
const pingChatTitle = "Connect with your Network."
const pingChatContent = 'With the Ping Chat App, connect and collaborate with your colleagues within your "Local Area Network". Share updates, snippets, insights, and troubleshooting recommendations with this local chat app suited for your business needs, to deliver fast and quality telecommunications service to your subscribers.'
const pingChatTechs = " React | chatengine.io"
const scriptTitle = "Visualize Insights, Quickly"
const scriptContent = "The trends and insights you need for your endorsements or reports can now be automatically generated using the Open Signal Report Generator. With the script powered by Python, speed up your reporting with the automatic graph generation per region, complete with a summarized table with initial troubleshhoting insights."
const scriptTechs = "Python | Pandas | Matplotlib"
const emeterTitle = "Power Up your Devices Just Right"
const emeterContent = "Monitor DC and AC Metrics that power your devices and nodes. With the insightful Energy Meter Monitoring Dashboard, quickly capture power failures, and diagnose power discrepancies immediately once you monitor abnormalities."
const emeterTechs = "React | NodeJS | MySQL | ApexCharts"
const calculatorTitle = "Solve for your Network Values"
const calculatorContent = "With the simple Comms Calculator, just input your device metrics to determine various communications parameters easily. This could also be handy not just for quick calculations, but also for educational purposes."
const calculatorTechs = "React | TypeScript"
const emsTitle = "Manage your Equipment with Ease"
const emsContent = "With the Equipment Management System, monitor and audit your lab equipments and supplies. Complete dashboard and alerts to notify you for your currents pending equipment for calibration, to database extraction for reporting purposes."
const emsTechs = "React | NodeJS | MySQL | MaterialUI | ApexCharts"

const Projects = () => {
    return (
        <div>
            <div className="container-product">
                <img src="/images/kpi-sample.png" className="img-products" width="60%" height="350" position="sticky" alt=""/> 
                <Talkies title={kpiTitle} content={kpiContent} showTechs={true} techs={kpiTechs}/>
            </div>
            <div className="container-product">
                <img src="/images/outages-sample.png" className="img-products" width="60%" height="350" position="sticky" alt=""/> 
                <Talkies title={outagesTitle} content={outagesContent} showTechs={true} techs={kpiTechs}/>
            </div>
            <div className="container-product">
                <img src="/images/sitegeo_sample.png" className="img-products" width="60%" height="350" position="sticky" alt=""/> 
                <Talkies title={sitegeoTitle} content={sitegeoContent} showTechs={true} techs={sitegeoTechs}/>
            </div>
            <div className="container-product">
                <img src="/images/emeter_sample.png" className="img-products" width="60%" height="350" position="sticky" alt=""/> 
                <Talkies title={emeterTitle} content={emeterContent} showTechs={true} techs={emeterTechs}/>
            </div>
            <div className="container-product">
                <img src="/images/calculator-sample.png" className="img-products" width="60%" height="350" position="sticky" alt=""/> 
                <Talkies title={calculatorTitle} content={calculatorContent} showTechs={true} techs={calculatorTechs}/>
            </div>
            <div className="container-product">
                <img src="/images/ems-sample.png" className="img-products" width="60%" height="350" position="sticky" alt=""/> 
                <Talkies title={emsTitle} content={emsContent} showTechs={true} techs={emsTechs}/>
            </div>
            <div className="container-product">
                <img src="/images/os_genreport.png" className="img-products" width="60%" height="350" position="sticky" alt=""/>
                <Talkies title={scriptTitle} content={scriptContent} showTechs={true} techs={scriptTechs}/> 
            </div>
            <div className="container-product">
                <img src="/images/chat.png" className="img-products" width="60%" height="350" position="sticky" alt=""/> 
                <Talkies title={pingChatTitle} content={pingChatContent} showTechs={true} techs={pingChatTechs}/>
            </div>
        </div>
    )
}

export default Projects
