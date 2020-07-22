import React, { Component } from 'react'
import Header from '../components/Header'
import Menu from '../components/Menu'
import Aside from '../components/Aside'
import Footer from '../components/Footer'

import Head from 'next/head'
import db from '../firebase'
export default function Home() {
  const add = () => {
    db.collection("users")
      .add({
        first: "Ada",
        last: "Lovelace",
        born: 1815
      })
      .then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      })
  };
  return (
    <div className="container">
      <button onClick={() => add()}>Add</button>

    <Header />

    <Menu />

    <Aside />

    <Footer />

    <style jsx global>{`
body {
margin: 0;
}
`}</style>
</div >
)
}