import React from 'react';;
import Hero from './components/Hero';

function LandingPage() {
  return (
    <>
      <main>
        <Hero />
      </main>
      <footer>
        <p className="footer-text">&copy; {new Date().getFullYear()} Your Company Name. All rights reserved by Anisur Rahman.</p>
      </footer>
    </>
  );
}

export default LandingPage;