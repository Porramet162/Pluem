import React, { Component } from 'react'
import Header from '../components2/Header'
import Menu from '../components2/Menu'
import Aside from '../components/Aside'
import Footer from '../components2/Footer'

export default () => {
  return (

    <div className="container">
      <title>รายการอาหารแนะนำ</title>

      <Header />

      <Menu />

      <Footer />

      <style jsx global>{`
  body {
    margin: 0;
  }
  `}</style>
    </div>
  )
}