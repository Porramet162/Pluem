const Header = () => {
    return (
        <div>
            
            <div className="block-title">
                <h1 className="title1">เมนูแนะนำ</h1>
            </div>
            <p className="nameTitle">Bar & Restaurant</p>
            <style jsx>{`
        
        .block-title {
            border-radius: 10px;
            border-style: dashed;
            display: inline-block;
            background-color: #000000;
        }

        
        .title1 {
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

        
        `}</style>
        </div>


    )
}

export default Header

