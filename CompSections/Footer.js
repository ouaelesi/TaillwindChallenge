import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faPhone , faEnvelope , faMapMarker} from '@fortawesome/free-solid-svg-icons'
library.add(fab)

const Footer = () => {
    return ( 
        <footer className="bg-gray-100 w-full">
            <div className="grid grid-row md:grid-cols-4 grid-cols-2 md:gap-4 gap-y-4 px-6 md:px-24 py-20 ">
                <div> 
                    <h1 className="text-blue-500 font-bold text-lg mb-5">Building Rs</h1>
                    <p className="text-gray-500 text-sm mb-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore e
                    </p>
                    <div className="grid grid-flow-row grid-cols-5 w-4/6 text-gray-500">
                        <div> <FontAwesomeIcon icon={['fab', 'facebook-f']} /></div>
                        <div> <FontAwesomeIcon icon={['fab', 'twitter']} /></div>
                        <div> <FontAwesomeIcon icon={['fab', 'instagram']} /></div>
                        <div> <FontAwesomeIcon icon={['fab', 'linkedin-in']} /></div>
                        <div> <FontAwesomeIcon icon={['fab', 'whatsapp']} /></div>
                    </div>
                </div>
                <div> 
                <h1 className="font-bold mb-5">Quick Access</h1>
                            <ul className="text-gray-500 text-sm">
                                <li>Home</li>
                                <li>About Us</li>
                                <li>Property</li>
                                <li>Agent</li>
                                <li>Testimonial</li>
                            </ul>
                </div>
                <div> 
                <h1 className="font-bold mb-5">Services</h1>
                            <ul className="text-gray-500 text-sm">
                                <li>Help Center</li>
                                <li>Rant</li>
                                <li>Buy</li>
                                <li>Sell</li>
                                <li>Contact Us</li>
                            </ul>
                </div>
                <div> 
                <h1 className="font-bold mb-5">Contact Us</h1>
                            <ul className="text-gray-500 text-sm">
                                <li className="my-2"><FontAwesomeIcon icon={faPhone} size="lg" className="mr-2"/> +9222 5411 441</li>
                                <li className="my-2"><FontAwesomeIcon icon={faEnvelope} size="lg" className="mr-2"/> designershazid@gmail.com</li>
                                <li className="my-2"><FontAwesomeIcon icon={faMapMarker} size="lg" className="mr-2 "/> 311 Ambarkhana , 2/A Pollobi road,syllhet</li>
                            </ul>
                </div>
            </div>
            <div className="bg-blue-500 text-white font-thin p-4 text-center">
                Copyright &copy; 2021 All Rights Reserved
            </div>

        </footer>
     );
}
 
export default Footer;