import React from 'react';
import hero from './../../../../assets/hero.svg';
import s1 from './../../../../assets/s1.svg';
import s2 from './../../../../assets/s2.svg';
import s3 from './../../../../assets/s3.svg';
import s4 from './../../../../assets/s4.svg';
import method from './../../../../assets/method.svg';
import tutoring from './../../../../assets/layout.png';
import PartnerImage from './../../../../assets/partnerImage.svg';

function Hero() {
  return (
    <>
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Country's #1 Tutor Matching & Learning Platform</h1>
            <p>Hire a conversant tutor to make your children's learning fun, comprehensive & easier.</p>
            <div className="search-bar">
              <div className="search-input"><marquee className="marquee" behavior="scroll" direction="left"> Very faster get your home master</marquee></div>
              <button>Find Tutor</button>
            </div>
          </div>
          <div className="hero-image">
            <img src={hero} alt="Tutor teaching student" />
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-wrapper">
          <div className="cta-text1 cta-width ">
            <span className="highlight">Want to Become</span> 
            <h2>TUTOR</h2>
          </div>
          <div className="cta-text2 cta-width ">
            <span className="be-text1">Be a master</span>
            <span className="be-text2">to grow faster</span>
          </div>
          <div className="cta-text3 cta-width">
            <a href="#" className="cta-button">Sign Up</a>
          </div>
        </div>
        
        <div className="category-section">
          <div className="category-header">
            <h2>Tutoring Categories</h2>
            <a href="#" className="see-all-btn">See All</a>
          </div>
          <div className="category-grid">
            <div className="category-item">
              <img src={s1} alt="Crafting" />
              <h3>Crafting</h3>
            </div>
            <div className="category-item">
              <img src={s2} alt="className 6" />
              <h3>className 6</h3>
            </div>
            <div className="category-item">
              <img src={s3} alt="German" />
              <h3>German</h3>
            </div>
            <div className="category-item">
              <img src={s4} alt="Scout Tutoring" />
              <h3>Scout Tutoring</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="connect-section">
        <h2>The ways <span>Parents/Students</span> can connect with us</h2>
        <div className="steps-container">
          <div className="step">
            <div className="icon">👤</div>
            <h3>Create Profile</h3>
            <p>Create a profile to get more learning benefits from website.</p>
          </div>
          <div className="step">
            <div className="icon">📝</div>
            <h3>Submit Requirements</h3>
            <p>Fill up expected tutor requirements & submit the request.</p>
          </div>
          <div className="step">
            <div className="icon">📄</div>
            <h3>Get Tutors' CV</h3>
            <p>On requirements, we will provide some expert tutors' CVs.</p>
          </div>
          <div className="step">
            <div className="icon">✅</div>
            <h3>Select Your Tutor</h3>
            <p>Evaluate tutors & start learning with your favorite one.</p>
          </div>
        </div>
      </section>

      <section className="testimonial-section">
        <h3 className="faces-title"> —— SOME HAPPY FACES</h3>
        <h2 className="section-title">Real Happy Parents, Real Stories</h2>
        <div className="testimonial-container">
          <div className="testimonial-box">
            <p className="quote">
              "Tuition Terminal" services are really helpful to working ladies like me. They are so expertise at their ways of rendering services. Their tutors are very punctual & obedient to their responsibilities. I am pleased with the professionalism of their work. I suggest that anybody who needs a smart & expert home tutor feel free to contact with them.
            </p>
            {/* <p className="author"> – Shafkat Volly<br><span>Entrepreneur</span></p> */}
            <p className="author">hello world</p>
          </div>
          <div className="cta-box">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/UofYd0qj8-Q?si=gxM-jFfyZRuzEpRE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </div>
      </section>

      <section>
        <div className="tutoring-container">
          <h2 className="title">Tutoring Method</h2>
          <img className="tutoring-image" src={method} alt="Tutoring Method" />
        </div>
      </section>

      <section className="connect-flow">
        <div className="container">
          <h2 className="flow-title">The ways Tutors can connect with us</h2>
          <div className="flow-steps">
            <div className="step-box">
              <div className="icon-circle">👤➕</div>
              <h3>Create Profile</h3>
              <p>Create your profile in minutes with sign up information.</p>
            </div>
            <div className="step-box">
              <div className="icon-circle">📄</div>
              <h3>Complete Your Profile</h3>
              <p>Make your profile at least 80% to get fast responses.</p>
            </div>
            <div className="step-box">
              <div className="icon-circle">💼</div>
              <h3>Apply For Tuition Job</h3>
              <p>Visit "Job Board" daily & apply for desired tuition jobs.</p>
            </div>
            <div className="step-box">
              <div className="icon-circle">💻👤</div>
              <h3>Start Tutoring</h3>
              <p>Be confident in the first meet & start tutoring.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="happy-tutors-section">
        <p className="section-subtitle">-- SOME HAPPY FACES</p>
        <h2 className="section-title">Real Happy Tutors, Real Stories</h2>
        <div className="container">

          <div className="testimonial-card">
            <div className="testimonial-content">
              <p>Tuition Terminal is an outstanding platform. It's incredible how smoothly and neatly the entire communication process has been carried out. I'm really satisfied with their services. Their ways to interact with the stakeholders are astounding as well. Anybody who needs "Tuition Job" can connect with them spontaneously as they are so much friendly.</p>
              <p className="tutor-name">- Parisha Mehtaj</p>
              <p className="tutor-university">University of Dhaka</p>
            </div>
            <div className="testimonial-image">
              <img src={tutoring} alt="Parisha Mehtaj" />
            </div>
          </div>
          <div className="slider-dots">
            <span className="dot active"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>
      </section>

      <section className="affiliate-section">
        <div className="container">
          <div className="affiliate-content-wrapper">
            <div className="affiliate-text-content">
              <h2 className="affiliate-title">Affiliate <span className="highlight">Partner</span></h2>
              <p className="affiliate-description">
                Tuition Terminal's Affiliate Program is a fantastic method for extra earnings. Everyone is eligible for this opportunity, including housewives, students, & employees. Be a Affiliate Partner with us & start earnings.
              </p>
              <a href="#" className="join-button">Join Now</a>
            </div>
            <div className="affiliate-image-container">
              <img src={PartnerImage} alt="Affiliate Illustration" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
