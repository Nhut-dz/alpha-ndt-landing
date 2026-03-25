import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Partners from './components/Partners'
import WhyChooseUs from './components/WhyChooseUs'
import Blog from './components/Blog'
import Careers from './components/Careers'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Partners />
        <WhyChooseUs />
        <Blog />
        <Careers />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}
