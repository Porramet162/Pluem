const Footer = () => {
    
    return (
        
        <div>
            
            <marquee direction="right">
                <font size="4" color="red">ช่วงนี้ร้านมีโปรโมชั่นพิเศษ ลด 20% ทั้งอาหารและเครื่องดื่ม!!! </font>
            </marquee>

            <div className="menu-page">
            <a href="http://www.google.com"><input type="button" value="Page 1"></input></a>
            <a href="http://www.google.com"><input type="button" value="Page 2"></input></a>
            <a href="http://www.google.com"><input type="button" value="Page 3"></input></a>  
            </div>
        </div>
    )
}
export default Footer

const style = () => {
    return (
        <style jsx>{`
        

            .menu - page {
                display: block;
            align-items: flex-end;
            justify-content: center;
            background-color: rgb(245, 185, 19);
        }

        
        `}</style>
    )
}
