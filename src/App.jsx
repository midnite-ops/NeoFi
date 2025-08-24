import './App.css'
import Hero from './components/Hero'
import Partners from './components/Partners'
import Features from './components/Features'
import Testimonial from './components/Testimonial'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import Layout from './layout'

function App() {

  return (
      <Layout>
        <Hero />
        <Partners />
        <Features />
        <Testimonial />
        <FAQ />
        <Footer />
      </Layout>
  )
}

export default App
