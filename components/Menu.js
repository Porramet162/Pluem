const Menu = () => {
    return (
        <div className="section">
            <div className="photo">
                <img className="img-circle"
                    src="https://scontent.fbkk4-3.fna.fbcdn.net/v/t31.0-8/28336058_2001303203452107_9222223734920963819_o.jpg?_nc_cat=109&_nc_sid=09cbfe&_nc_eui2=AeFUk0zgFfsLJH_RgccIdfLrhUIi-nPI3kOFQiL6c8jeQ8iVCgtdV02UdCgF3jJUZ2frMx0HmJ7XfMP-RBsOnsXa&_nc_oc=AQkTrFZgWyZ6sMkHEkganrwkPRfKj8gehVRExD_JUD2rluWwMSpLtQufglNG0Nh4Ac0&_nc_ht=scontent.fbkk4-3.fna&oh=13c351e7c913b4cd8a2635c389342364&oe=5F1A8051"
                    alt="Girl in a jacket" width="430" height="450" />
            </div>
        </div>
    )
}
export default Menu

const style = () => {
    return (
        <style jsx>{`
            .section {
                height: 70%;
                width: 50%;
                float: left;  
            }

            .photo {
                margin-top: 10px;
            }

            .img-circle {
                border-radius: 50%;
            }

        `}</style>
    )
}