import React, { Component } from 'react'
import Header from '../components/Header'
import Menu from '../components/Menu'
import Aside from '../components/Aside'
import Footer from '../components/Footer'

export default () => {
    return (
        
        <div className="container">
        
            <Header />

            <Menu />

            <Aside />

            <Footer />
            <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <style jxs>{`
  body {
    margin: 0;
  }
  `}</style>
        </div>
    )
}