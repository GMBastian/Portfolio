import Sidebar from "../sidebar/Sidebar"
import "./navbar.scss"
import { motion } from "framer-motion"

const Navbar =() => {
    return(
        <div className="navbar">
            {/* Sidebar */}
            <Sidebar/>
            <div className="wrapper">
                <motion.span initial={{opacity:0, scale:0.5}} animate={{opacity:1, scale:1}} transition={{duration: 0.5}}>George Mohan Bastiampillai</motion.span>
                <div className="social">
                    <a href="#"><img src="public/facebook.png" alt="Facebook"/></a>
                    <a href="#"><img src="public/instagram.png" alt="Facebook"/></a>
                    <a href="#"><img src="public/youtube.png" alt="Facebook"/></a>
                    <a href="#"><img src="public/dribbble.png" alt="Facebook"/></a>
                </div>
            </div>
        </div>
    )
}

export default Navbar