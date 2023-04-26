// Importing images
import crispbreadImg from '../assets/img/crispbread.webp'
import ricecrackersImg from '../assets/img/rice-crackers.webp'
import borderFlagImg from '../assets/img/border-flag.png'
// Importing packages
import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import emailjs from 'emailjs-com'


export const MainContent = () => {

  // EmailJs submit
  const [submittedForm, setSubmitForm] = useState(false)

  const submitForm = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_t9ikrth','template_f2zi7gn',e.target,'DnndFsOvzJDaQfV_W')
    .then(r =>{
      setSubmitForm(true)
    })
  }

  // Register scrollTrigger plugin so we can run it
  gsap.registerPlugin(ScrollTrigger)

  // Element Refs
  const mainRef = useRef(null)
  const heroRef = useRef(null)
  const crackersRef = useRef(null)
  const moreInfoRef = useRef(null)
  const faqRef = useRef(null)
  const contactRef = useRef(null)

  // Accordion toggle function
  const toggleAccordion = (e) => {
    e.target.parentNode.classList.toggle('show')
  }

  // UseEffect
  useEffect(() => {

    // --- GSAP ANIMATIONS ----------------------------------------   

    // Split every heading letter and putting a span wrapping it
    const headings = document.querySelectorAll('h2, #hero p:first-of-type');

    headings.forEach(heading => {
      let chars = heading.textContent.split("");
      heading.innerHTML = "";
      chars.forEach(char => {
        heading.innerHTML += `<span style="display:inline-block;" class="char">${char}</span>`;
      });
    });

    // Animate each heading letter using ScrollTrigger
    gsap.utils.toArray("h2, #hero p:first-of-type").forEach(function(heading) {
      var letters = heading.querySelectorAll("span");
    
      // Set initial position of each letter
      gsap.set(letters, { y: '100%' });
    
      ScrollTrigger.create({
        trigger: heading,
        start: "top 80%",
        onEnter: function() {
          gsap.to(letters, { y: 0, duration: 1, stagger: 0.02, ease: 'Power4.easeOut' });
        }
      });
    }); 

    gsap.fromTo('#hero p:last-of-type',{y: '150%', opacity: 0},{opacity:1, delay: .5, y: 0, duration: 1.6, ease:'Power4.easeOut'})

    // CRACKER SECTION ANIMATIONS
    const activateActiveElements = mainRef.current.querySelectorAll('#crackers h3, .middle-description p')

    activateActiveElements.forEach(element => {
      ScrollTrigger.create({
        trigger: element,
        start: "top center",
        end: "bottom center",
        onEnter: () => {
          element.classList.add("active");
        },
      });
    });

    // Convert both crackers elements into an array
    const crackers = gsap.utils.toArray('#crackers img');

    // Loop through each box and apply a ScrollTrigger animation
    crackers.forEach(cracker => {
      gsap.fromTo(cracker, {scale:0,},{scale:.85,ease:"elastic.out(1, 1.4)",duration: 1,scrollTrigger: {
          trigger: cracker,
        },
      }
      
      );
    });

  }, []);

  

  return (
    <main ref={mainRef}>
        <section ref={heroRef} id="hero">
          <div className="container">
            <h2>Enjoy your meals</h2>
            <p>Enjoy crescini's</p>
            <p>Our gluten free crispbread is light and airy, making it the perfect guilt-less snack.</p>
          </div>         
        </section>
        <section ref={crackersRef} id="crackers">
          <div className="container">
            <h2>Our crackers</h2>
            <article id="rice-crackers">
              <h3>Rice crackers</h3>
              <ul>
                <li>
                  <div className="list-dot"></div>
                  <p>Fat free</p> 
                </li>
                <li>
                  <div className="list-dot"></div>
                  <p>Cholesterol free</p></li>
                <li>
                  <div className="list-dot"></div>
                  <p>Non-gmo</p>
                </li>
                <li>
                  <div className="list-dot"></div>
                  <p>Lactose free</p>
                </li>
              </ul>
              <picture>
                <img src={ricecrackersImg} alt="Rice crackers package" />
              </picture>
            </article>
            <article id="crispbread">
              <h3>Crispbread</h3>
              <ul>
                <li>
                  <div className="list-dot"></div>
                  <p>Bake no fry</p>  
                </li>
                <li>
                  <div className="list-dot"></div>
                  <p>No artificial flavors</p>
                </li>
                <li>
                  <div className="list-dot"></div>
                  <p>No colors from artificial sources</p>
                </li>
                <li>
                  <div className="list-dot"></div>
                  <p>No corn high fructose</p>
                </li>
              </ul>
              <picture>
                <img src={crispbreadImg} alt="Crispbread package" />
              </picture>
            </article>
          </div>
        </section>
        <section ref={moreInfoRef} id='more-info' className="middle-description">
            <h2>A little more about us</h2>
            <div className="container">
            <p>This crunchy, light and fluffy crispbread is free of preservatives, GMOs and wheat, making it a greatgluten free and is lactose free for any intolerance of cow milk it's an excellent option for snacktime or meal time.</p>  
            </div>
            <img src={borderFlagImg} alt="" /> 
          </section>
        <section ref={faqRef} id="faq">
          <div className="container">
            <h2><abbr title="Frequent asked questions">Faq</abbr></h2>
            <div className="faq-box show">
              <h3 onClick={toggleAccordion} className="faq-question">What ingredients do the products have?</h3>
              <p className="faq-answer">The ingredients are white rice, salt and sugar.</p>
            </div>
            <div className="faq-box">
              <h3 onClick={toggleAccordion} className="faq-question">Where can i get the products?</h3>
              <p className="faq-answer">Text us 754 314 7560 or WhatsApp.</p>
            </div>
          </div>
        </section>
        <section ref={contactRef} id="contact">
          <div className="container">
            <h2>Contact us</h2>
            <form onSubmit={submitForm}>
              <label htmlFor="name">Name</label>
              <input placeholder='Your name' id='name' name='name' type="text" />
              <label htmlFor="email">Email</label>
              <input placeholder='Your email' id='email' name='email' type="email" />
              <label htmlFor="message">Message</label>
              <input placeholder='Your message' name='message' id='message' type="text" />
              { submittedForm ? <span className='submission-span'>Message received with succes! thank you for getting in contact</span> : null}
              <input type="submit" value={'Send'} />
            </form>
          </div>
        </section>
    </main>
  )
}
