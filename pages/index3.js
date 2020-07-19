import React, { Component } from 'react'
import Header from '../components3/Header'
import Menu from '../components3/Menu'
import Footer from '../components2/Footer'

export default () => {
    return (

        <div className="container">
            <title>บรรยากาศร้าน</title>

            <Header />

            <Menu />

            <Footer />

            <style jsx global>{`
  body {
    margin: 0;
  }
  .container{
    height: 530px;
  }
  `}</style>
        </div>
    )
}