import instaLogo from '../assets/img/insta-icon.svg'
import facebookLogo from '../assets/img/facebook-icon.svg'
import linkedinLogo from '../assets/img/icon-linkedin.svg'
import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export const Footer = () => {
    gsap.registerPlugin(ScrollTrigger)
    const footerRef = useRef(null)

    useEffect(() => {
        const footer = footerRef.current
        const footerLinks = footer.querySelectorAll('.footer-links a')
        const winoupLink = footer.querySelectorAll('.footer-copyright span:last-of-type')
        
        gsap.set(footerLinks,{y: '80%', opacity: 0})

        ScrollTrigger.create({
          trigger: footer,
          start: "top 80%",
          onEnter: function() {
            gsap.to(footerLinks, { y: 0, opacity:1, duration: 1, stagger: 0.1, ease: 'Power4.easeOut' });
            gsap.fromTo(winoupLink, {opacity:0},{opacity:1, duration: 1, delay: .6})
          }
        });
    }, []);

  return (
    <footer ref={footerRef}>
        <div className="footer-links">
            <a href="#">
                <img src={facebookLogo} alt="" />
            </a>
            <a href="#">
                <img src={instaLogo} alt="" />
            </a>
            <a href="#">
                <img src={linkedinLogo} alt="" />
            </a>
        </div>
        <div className="footer-copyright">
            <span>©Criscini's Foods. All rights reserved.</span>
            <span>Developed by <a href="#">Winoup</a></span>
        </div>
    </footer>
  )
}
