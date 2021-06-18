import Talkies from './Talkies'

const sitegeoTitle = "Find Serving Sites Near You"
const sitegeoContent = "Using the Site GeoMap App, Identify your possible serving site within your range. Packed with Site Information, including the availability of 2G, 3G, and 4G technologies. It is a powerful tool for service assurance and testing functions to easily identify concerned sites with service feedback issues."
const pingChatTitle = "Connect with your Network."
const pingChatContent = 'With the Ping Chat App, connect and collaborate with your colleagues within your "Local Area Network". Share updates, snippets, insights, and troubleshooting recommendations with this local chat app suited for your business needs, to deliver fast and quality telecommunications service to your subscribers.'


const Products = () => {
    return (
        <div>
            <div className="container-product">
                <img src="/images/sitegeo_sample.png" className="img-products" width="70%" height="450" position="sticky" alt=""/> 
                <Talkies title={sitegeoTitle} content={sitegeoContent} />
            </div>
            <div className="container-product">
                <Talkies title={pingChatTitle} content={pingChatContent} />
                <img src="/images/chat.png" className="img-products" width="70%" height="450" position="sticky" alt=""/> 
            </div>
        </div>
    )
}

export default Products
