const Footer = () => {
    return (
        <div>
            <marquee direction="right">
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
