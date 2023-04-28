import React from 'react'
import GlobalStyle from './styles/global'
// eslint-disable-next-line
import { Header, Buy, Experience, Materials, Testimonials, Footer } from './components/index'


const App = () => {
  return (
      <>
      <Header />
      <Buy />
      <Experience/>
      <Materials />
      <Testimonials />
      <Footer />
      <GlobalStyle />
      </>
  )
}

export default App
