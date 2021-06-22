import Talkies from './Talkies'

const sitegeoTitle = "Find Serving Sites Near You"
const sitegeoContent = "Using the Site GeoMap App, Identify your possible serving site within your range. Packed with Site Information, including the availability of 2G, 3G, and 4G technologies. It is a powerful tool for service assurance and testing functions to easily identify concerned sites with service feedback issues."
const pingChatTitle = "Connect with your Network."
const pingChatContent = 'With the Ping Chat App, connect and collaborate with your colleagues within your "Local Area Network". Share updates, snippets, insights, and troubleshooting recommendations with this local chat app suited for your business needs, to deliver fast and quality telecommunications service to your subscribers.'
const scriptTitle = "Visualize Insights, Quickly"
const scriptContent = "The trends and insights you need for your endorsements or reports can now be automatically generated using the Open Signal Report Generator. With the script powered by Python, speed up your reporting with the automatic graph generation per region, complete with a summarized table with initial troubleshhoting insights."

const Products = () => {
    return (
        <div>
            <div className="container-product">
                <img src="/images/sitegeo_sample.png" className="img-products" width="60%" height="350" position="sticky" alt=""/> 
                <Talkies title={sitegeoTitle} content={sitegeoContent} />
            </div>
            <div className="container-product">
                <img src="/images/chat.png" className="img-products" width="60%" height="350" position="sticky" alt=""/> 
                <Talkies title={pingChatTitle} content={pingChatContent} />
            </div>
            <div className="container-product">
                <img src="/images/os_genreport.png" className="img-products" width="60%" height="350" position="sticky" alt=""/>
                <Talkies title={scriptTitle} content={scriptContent} /> 
            </div>
        </div>
    )
}

export default Products
