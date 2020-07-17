const Aside = () => {
    return (

        <div>
            <div className="detail">
                ร้านอาหารและเครื่องดื่ม พร้อมดนตรีสด <br />
                เวลาเปิด : 17:00 - 00:00 น. <br />
                (ปิดทุกวันสำคัญทางศาสนา และวันหยุดนักขัตฤกษ์)
            </div>

            <div className="login-form">
                <h3>Member Login</h3>
                <form action="/action_page.php">
                    <input type="text" id="id" name="username" placeholder="Username" required />
                    <input type="text" id="pass" name="password" placeholder="Password" required /><br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
            <div>
                <div className="facebook ">
                    <ul>
                        <li><a href="https://web.facebook.com/PluemPhuket/?ref=page_internal" target="_blank">
                            <fa className="fa fa-facebook"></fa></a>
                        </li>
                    </ul>
                </div>
            </div>


            <style jsx>{`
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        
        div {
            display: block;
        }

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
        
        

        .login-form {
            display: inline-block;
            justify-content: center;
            width: 300px;
            padding: 25px;
            background-color: rgb(225, 232, 235);
            margin-top: 20px;
            margin-bottom: 20px;
        }

        .login-form h3{
            margin: 10px 0;
            text-align: center;
            color: black;
            font-style: inherit;
            font-size: 20px;
            padding: 5px 0 5px 0;
        }
        
        .login-form input[type="password"],
        .login-form input[type="text"]{
            width: 100%;
            padding: 10px;
            border: 1px solid #ddd;
            margin-bottom: 15px;
            box-sizing: border-box;
        }
        .login-form input[type="submet"]{
            width: 100%;
            padding: 15px;
            background-color: #535b63;
            border: 0;
            box-sizing: border-box;
            cursor: pointer;
            font-weight: bold;
            color: #fff;
        }

        
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
          

        `}</style>

        </div>


    )
}
export default Aside

