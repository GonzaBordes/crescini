import borderFlagImg from '../assets/img/border-flag.png'

import { useState,useRef } from "react"
import { Link } from 'react-scroll'

export const Header = () => {

    const [expandNav, setExpandNav] = useState(false)
    const burgerRef = useRef(null)

    const handleClick = () => {
        setExpandNav(!expandNav)
    }

    const closedNav = () => {
        setExpandNav(false)
    }

  return (
    <header>
        <div className="container">
            <h1>Best crackers in the market</h1>
            <nav className={expandNav ? 'expand' : ''}>
                <ul>
                    <li>
                        <Link href='#' to='crackers' spy={true} smooth={true} offset={-200} duration={850} onClick={closedNav}>Our Products</Link>
                    </li>
                    <li>
                        <Link href='#' to='more-info' spy={true} smooth={true} offset={-200} duration={850} onClick={closedNav}>More info</Link>
                    </li>
                    <li>
                        <Link href='#'  to='faq' spy={true} smooth={true} offset={-200} duration={850} onClick={closedNav}><abbr title="Frequent asked questions">FAQ</abbr></Link>
                    </li>
                    <li>
                        <Link href='#' to='contact' spy={true} smooth={true} offset={-200} duration={850} onClick={closedNav}>Contact Us</Link>
                    </li>
                </ul>
            </nav>
            <span onClick={handleClick} ref={burgerRef} className={expandNav ? 'burger-container clicked' : 'burger-container' }>
                <span className="burger-line"></span>
            </span>
        </div>
        <img src={borderFlagImg} alt="" className="border-flag" />
    </header>
  )
}
