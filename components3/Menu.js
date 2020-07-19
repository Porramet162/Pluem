
const Menu = () => {
    return (
        <div className="section">
            <div className="box">
                <img className="photo"
                    src="https://scontent.fbkk4-3.fna.fbcdn.net/v/t1.0-9/25396168_1970308313218263_4754239645146458270_n.jpg?_nc_cat=109&_nc_sid=e3f864&_nc_eui2=AeG-ZXqmZU1ne2g9Ebuz4AkO6Seqz0KXRUDpJ6rPQpdFQNZTLhxiI7QrELuqGHkbyl7oqVto6pEYPi4o2_SkGbVP&_nc_ohc=xPZleYpAxdEAX-dGVUr&_nc_ht=scontent.fbkk4-3.fna&oh=6c5a99612be286c2702c3065d9d32f5a&oe=5F3AE7D3"
                    alt="Girl in a jacket"  />
                    <a className="button" href="">
                    ภายในร้าน
                </a>
                <br />
            </div>
            <div className="box">
                <img className="photo"
                    src="https://scontent.fbkk3-1.fna.fbcdn.net/v/t1.0-9/71043535_2419886348260455_2864973486873378816_o.jpg?_nc_cat=101&_nc_sid=8bfeb9&_nc_eui2=AeE5fiq31j0znyEtGGjmXEgErnnjqrYpeaWueeOqtil5pSIXQS5ijZRKSkPa6dr_ntPJFTYM39umFBQezaTZF04o&_nc_ohc=_bC56_DjqkMAX8J9Y8M&_nc_ht=scontent.fbkk3-1.fna&oh=b062debdb7c925886b20fd439fe3335a&oe=5F39B1A3"
                    alt="Girl in a jacket"  />
                    <a className="button" href="">
                    ปีใหม่
                </a>
                <br />
            </div>
            <div className="box">
                <img className="photo"
                    src="https://scontent.fbkk4-2.fna.fbcdn.net/v/t1.0-9/59393005_2318162781766146_251869745664491520_o.jpg?_nc_cat=110&_nc_sid=8bfeb9&_nc_eui2=AeGWPnv4zhKMiSqRLe4X1agMeYfystXswXV5h_Ky1ezBdZOLh7ahqHEH9DzdWwFh6oEyFVDu8yKekdZHuyMA8H85&_nc_ohc=iLJ8JxaunQkAX_cSpZS&_nc_ht=scontent.fbkk4-2.fna&oh=f4c1d941497d3d0601aab1a03a119791&oe=5F3BAAEB"
                    alt="Girl in a jacket"  />
                     <a className="button" href="">
                    สงกรานต์
                </a>
                <br />
            </div>


            <style jsx>{`
        
        .section {
            height: 100%;
            width: 100%;
            display: block;
            background-color: gold;
            
        }
        .box {
            display: inline-block;
            
            margin: 30px 20px;
            width: 400px;
            height: 360px;
            border-radius: 8px;
            box-shadow: 0 0 6px 0 rgba(0,0,0,.15);
            overflow: hidden;
            cursor: pointer;
            align-items: center;
            transition: all .4s;
            transform: scale(1);
            background-color: rgb(245, 185, 19);
        }
        .box:hover {
            transform: scale(1.1);
         }
        .photo {
            display: inline;
            width: 350px;
            height: 300px;
            
        }

    
    `}</style>
        </div>
    )


}
export default Menu



