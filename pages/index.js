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

            <style jxs>{`
  body {
    margin: 0;
  }
  `}</style>
        </div>
    )
}