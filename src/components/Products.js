import Talkies from './Talkies'

const kpiTitle = "Conduct Data-Driven Network Troubleshooting"
const kpiContent = "Monitor your Network's Service Quality and Performance from near real-time data trends using the Network KPI Monitoring Dashboard. Track KPI abnormalities immendiately to produce insights and derive conclusions regarding your Network's behavior."
const outagesTitle = "Keep an Eye Out for Outages"
const outagesContent = "With the Outage Monitoring feature of the Network KPI Monitoring Dashboard, you can immediately pin-point concerned links/nodes through the timely update of outage alarms, which comes with severity specifications."
const sitegeoTitle = "Find Serving Sites Near You"
const sitegeoContent = "Using the Site GeoMap App, Identify your possible serving site within your range. Packed with Site Information, including the availability of 2G, 3G, and 4G technologies. It is a powerful tool for service assurance and testing functions to easily identify concerned sites with service feedback issues."
const pingChatTitle = "Connect with your Network."
const pingChatContent = 'With the Ping Chat App, connect and collaborate with your colleagues within your "Local Area Network". Share updates, snippets, insights, and troubleshooting recommendations with this local chat app suited for your business needs, to deliver fast and quality telecommunications service to your subscribers.'
const scriptTitle = "Visualize Insights, Quickly"
const scriptContent = "The trends and insights you need for your endorsements or reports can now be automatically generated using the Open Signal Report Generator. With the script powered by Python, speed up your reporting with the automatic graph generation per region, complete with a summarized table with initial troubleshhoting insights."
const emeterTitle = "Power Up your Devices Just Right"
const emeterContent = "Monitor DC and AC Metrics that power your devices and nodes. With the insightful Energy Meter Monitoring Dashboard, quickly capture power failures, and diagnose power discrepancies immediately once you monitor abnormalities."
const calculatorTitle = "Solve for your Network Values"
const calculatorContent = "With the simple Comms Calculator, just input your device metrics to determine various communications parameters easily. This could also be handy not just for quick calculations, but also for educational purposes."

const Products = () => {
    return (
        <div>
            <div className="container-product">
                <img src="/images/kpi-sample.png" className="img-products" width="60%" height="350" position="sticky" alt=""/> 
                <Talkies title={kpiTitle} content={kpiContent} />
            </div>
            <div className="container-product">
                <img src="/images/outages-sample.png" className="img-products" width="60%" height="350" position="sticky" alt=""/> 
                <Talkies title={outagesTitle} content={outagesContent} />
            </div>
            <div className="container-product">
                <img src="/images/sitegeo_sample.png" className="img-products" width="60%" height="350" position="sticky" alt=""/> 
                <Talkies title={sitegeoTitle} content={sitegeoContent} />
            </div>
            <div className="container-product">
                <img src="/images/emeter_sample.png" className="img-products" width="60%" height="350" position="sticky" alt=""/> 
                <Talkies title={emeterTitle} content={emeterContent} />
            </div>
            <div className="container-product">
                <img src="/images/calculator-sample.png" className="img-products" width="60%" height="350" position="sticky" alt=""/> 
                <Talkies title={calculatorTitle} content={calculatorContent} />
            </div>
            <div className="container-product">
                <img src="/images/os_genreport.png" className="img-products" width="60%" height="350" position="sticky" alt=""/>
                <Talkies title={scriptTitle} content={scriptContent} /> 
            </div>
            <div className="container-product">
                <img src="/images/chat.png" className="img-products" width="60%" height="350" position="sticky" alt=""/> 
                <Talkies title={pingChatTitle} content={pingChatContent} />
            </div>
        </div>
    )
}

export default Products
