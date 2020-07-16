
const Menu = () => {
    return (
        <div className="section">
            <div className="box">
                <img className="photo"
                    src="https://food.mthai.com/app/uploads/2017/01/iStock-499980014.jpg"
                    alt="Girl in a jacket" width="300" height="250" />
                <br />กุ้งแช่น้ำปลา
            </div>
            <div className="box">
                <img className="photo"
                    src="https://scontent.fbkk4-1.fna.fbcdn.net/v/t1.0-9/105632019_2646423458940075_2681868553642531959_o.jpg?_nc_cat=111&_nc_sid=8bfeb9&_nc_eui2=AeHUGpObgUm9BCec0Piw6EvvJbpAfS0Ir7klukB9LQivuc8j64Dn2AENjYbTKuMNryg5D6m0y-r2AFyEzApFbouN&_nc_oc=AQmeLRXOhrhsFWs-ifGv61IsyAKDjT-O1CRr11bkydlGdH4TdYd5_CAvntUGlDcAH_A&_nc_ht=scontent.fbkk4-1.fna&oh=3e0b19b5cab477d34e04e6bc2fb17fca&oe=5F33C78B"
                    alt="Girl in a jacket" width="300" height="250" />
                <br />หมูคั่วเกลือ
            </div>
            <div className="box">
                <img className="photo"
                    src="https://scontent.fbkk3-1.fna.fbcdn.net/v/t1.0-9/105484652_2646423678940053_5426239147239342380_o.jpg?_nc_cat=101&_nc_sid=8bfeb9&_nc_eui2=AeFzfaFEbUxwnyx52RDfx6ZSxKRw2Mo56xXEpHDYyjnrFT7cO9SfFYtrq3pdMENe9ITqlEFZP4zshxzmB2sKgk52&_nc_oc=AQnzS7ASl6CN75QiP9okd-3JhpLB4a_t53I9TZkcWGyht2PgONO99bDDDMwNZgzUYvU&_nc_ht=scontent.fbkk3-1.fna&oh=1b8b9a436e7f76614e1f67415d317846&oe=5F35AC03"
                    alt="Girl in a jacket" width="300" height="250" />
                <br />ลาบหมู
            </div>
            <style jsx>{`
        
        .section {
            height: 70%;
            width: 100%;
            display: block;
            background-color: gold;
            
        }
        .box {
            display: inline-block;
            margin-top: 10px;
            margin-right: 40px;
            width: 350px;
            height: 300px;
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
            
        }

    
    `}</style>
        </div>
    )


}
export default Menu



