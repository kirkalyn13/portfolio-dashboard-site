import Talkies from './Talkies'

const productsTitle = "Find Serving Sites Near You"
const productsContent = "Using the Site GeoMap App, Identify your possible serving site within your range. Packed with Site Information, including the availability of 2G, 3G, and 4G technologies. It is a powerful tool for service assurance and testing functions to easily identify concerned sites with service feedback issues."

const Products = () => {
    return (
        <div>
            <img src="/images/sitegeo_sample.png" className="img-products" width="90%" height="600" position="sticky" alt=""/> 
            <Talkies title={productsTitle} content={productsContent} />
        </div>
    )
}

export default Products
