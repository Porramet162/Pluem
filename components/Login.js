const Login = () => {
    return (

            <div className="login-form">
                <div className="box-title">
                <h3>Member Login</h3>
                </div>

                <form action="/action_page.php">
                    <input type="text" id="id" name="username" placeholder="Username" required />
                    <input type="text" id="pass" name="password" placeholder="Password" required /><br />
                    <input type="submit" value="Submit" />
                </form>
            

            <style jsx>{`
       
       .box-title {
        border-radius: 50px;
        display: inline-block;
        background-color: white;
        margin-bottom: 30px;
        padding: 10px;
        }

        .login-form {
            display: inline-block;
            justify-content: center;
            width: 300px;
            padding: 25px;
            margin-top: 10%;
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


        `}</style>

        </div>


    )
}
export default Login

