import React, { Component } from 'react'
import Header from '../components/Header'

export default () => {
  return (
    <div className="container">
      <Header />


      <div className="section">
        <div className="photo">
          <img className="img-circle"
            src="https://scontent.fbkk4-3.fna.fbcdn.net/v/t31.0-8/28336058_2001303203452107_9222223734920963819_o.jpg?_nc_cat=109&_nc_sid=09cbfe&_nc_eui2=AeFUk0zgFfsLJH_RgccIdfLrhUIi-nPI3kOFQiL6c8jeQ8iVCgtdV02UdCgF3jJUZ2frMx0HmJ7XfMP-RBsOnsXa&_nc_oc=AQkTrFZgWyZ6sMkHEkganrwkPRfKj8gehVRExD_JUD2rluWwMSpLtQufglNG0Nh4Ac0&_nc_ht=scontent.fbkk4-3.fna&oh=13c351e7c913b4cd8a2635c389342364&oe=5F1A8051"
            alt="Girl in a jacket" width="430" height="450" />
        </div>
      </div>

      <aside>
        <div>
          <div className="detail">
            ร้านอาหารและเครื่องดื่ม พร้อมดนตรีสด <br />
              เวลาเปิด : 17:00 - 00:00 น. <br />
                (ปิดทุกวันสำคัญทางศาสนา และวันหยุดนักขัตฤกษ์)
            </div>
        </div>
        <div>
          <div className="login">
            <form action="/action_page.php">
              <h3>Member Login</h3>
              <label for="id">ID:</label><br />
              <input type="text" id="id" name="id" placeholder="Your ID" /><br />
              <label for="lname">Password:</label><br />
              <input type="text" id="pass" name="pass" placeholder="Your password" /><br /><br />
              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>

        <div className="facebook ">
          <ul>
            <li><a href="https://web.facebook.com/PluemPhuket/?ref=page_internal" target="_blank"><i
              className="fa fa-facebook"></i></a>
            </li>
          </ul>
        </div>
      </aside>


      <footer>
        <marquee>
          <font size="4" color="red">ช่วงนี้ร้านมีโปรโมชั่นพิเศษ ลด 20% ทั้งอาหารและเครื่องดื่ม!!! </font>
        </marquee>
        <div className="menu-page">
          <input type="button"
            onclick="window.location.href='https://web.facebook.com/PluemPhuket/?ref=page_internal'" value="Page 1" />
          <input type="button"
            onclick="window.location.href='https://web.facebook.com/PluemPhuket/?ref=page_internal'" value="Page 2" />
          <input type="button"
            onclick="window.location.href='https://web.facebook.com/PluemPhuket/?ref=page_internal'" value="Page 3" />
        </div>
      </footer>
  <style jxs>{`
  body {
    margin: 0;
  }
  
  .main {
    height: 700px;
    width: 100%;
    background-color: gold;
    text-align: center;
    margin: 0, auto;
    margin-left: auto;
  }

.container{
    height: 700px;
    width: 100%;
    background-color: gold;
    text-align: center;
    margin: 0, auto;
    margin-left: auto;
}

/* div {
    display: block;
} */

/*-------------------------------------------Layout------------------------------------------------*/
.header {
    display: block;
    margin-top: 10px;
}

.section {
    height: 70%;
    width: 50%;
    float: left;
}


.aside {
    height: 70%;
    width: 50%;
    flex-direction: column;
    align-content: center;
    float: right;
}

.footer {
    height: 10%;
    width: 100%;
    float: inline-end;
}



.block-title {
    border-radius: 10px;
    border-style: dashed;
    display: inline-block;
    background-color: #000000;
}

.title1 {
    display: inline;
    background-color: black;
    color: white;
    font-family: cursive;

}

.title2 {
    display: inline;
    background-color: rgb(245, 158, 45);
    border-radius: 8%;
    color: black;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

.nameTitle {
    background-color: rgb(245, 185, 19);
    color: rgb(0, 0, 0);
    display: block;
}

.photo {
    margin-top: 10px;
    /* justify-content: center;
    align-items: center; */
}

.img-circle {
    border-radius: 50%;
}



/*ปุมลิงค์ Facebook*/
/*---------------------------------------------------------------------------------------------*/
.facebook {
    display: inline-flex;
    margin-bottom: 25px;
    margin-top: 10px;
    background-color: rgb(77, 137, 247);
    border-radius: 30px;
}

.facebook ul {
    display: flex;
    padding: 10px;
    margin: 10px;
}

.facebook ul li {
    list-style: none;
    margin: 0 10px;
}

.facebook ul li .fa {
    color: #000000;
    font-size: 25px;
    line-height: 50px;
    transition: .5s;
}

.facebook ul li .fa:hover {
    color: #ffffff;
}

.facebook ul li a {
    position: relative;
    display: block;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: white;
    text-align: center;
    transition: 0.5s;
    transform: translate(0, 0px);
    box-shadow: 0px 7px 5px rgba(0, 0, 0, 0.5);
}

.facebook ul li a:hover {
    transform: rotate(0deg) skew(0deg) translate(0, -10px);
}

.facebook ul li:nth-child(1) a:hover {
    background-color: #3b5999;
}

/*-----------------------------------------------------------------------------------*/

.detail {
    display: inline-flex;
    color: #ffffff;
    background-color: rgb(245, 185, 19);
    padding: 25px;
    border-color: rgb(254, 255, 255);
    border-style: solid;
    border-radius: 12px;
    /* margin-top: 40px; */
}

.login {
    display: inline-flex;
    justify-content: center;
    width: 300px;
    padding: 25px;
    background-color: rgb(225, 232, 235);
    margin-top: 20px;
    margin-bottom: 20px;

}

.clearfix {
    clear: both;
}

.menu-page {
    display: block;
    align-items: flex-end;
    justify-content: center;
    background-color: rgb(245, 185, 19);
}

.item {
    color: black;
    background-color: rgb(231, 247, 10);
    font-size: 15px;
    box-sizing: border-box;
    padding: 14px 20px;
}

.item:hover {
    color: aliceblue;
    background-color: rgba(0, 0, 0, 0.1);
}
  `}</style>
    </div>


  )
}