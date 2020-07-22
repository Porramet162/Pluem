import React, { Component } from 'react'
import Login from '../components/Login'

export default () => {
  return (

    <div className="container">
      <title>Login</title>
        
        <Login />


      <style jsx global>{`
  body {
    margin: 0;
  }

  .container{
    height: 700px;
    width: 1350px;
    background: none;
    background-color: black;
    background-image: url('https://scontent.fbkk4-1.fna.fbcdn.net/v/t1.0-9/65005526_2351377551778002_3462667492336336896_o.jpg?_nc_cat=107&_nc_sid=8bfeb9&_nc_eui2=AeFpTHIT9rUX16BoDumM_7kXOtSdvLa6zP461J28trrM_i7pstHFrtQBloLSSdKfPlfXl5kKDaj5bNuEPTPbFicd&_nc_ohc=70LGK83ObZ8AX-9n9Ns&_nc_ht=scontent.fbkk4-1.fna&oh=6dd56af7aecec71bb5fe5bbf4aa84846&oe=5F3BC755');
    background-position: center;
    background-repeat: no-repeat;
    background-size: 80%;
  }

  `}</style>

    </div>
  )
}