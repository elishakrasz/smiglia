import React from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import './layout.css'

export default ({children}) => (
  <div>
    <Navbar />
      {children}
    <Footer />
  </div>
)
