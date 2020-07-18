import Link from 'next/link'
const Footer = () => {

    return (

        <div>

            <marquee direction="left">
                <font size="4" color="red">มาก่อน 21:00 น. โปรโมชั่น 199.- !!! </font>
            </marquee>

            <div className="menu-page">
                <Link  href="/index2">
                    <a><button>Page 1</button></a>
                </Link>
                <Link  href="/about">
                    <a><button>Page 2</button></a>
                </Link>
                <Link  href="/about">
                    <a><button>Page 3</button></a>
                </Link>
                

                <a href="https://web.facebook.com/PluemPhuket/?ref=page_internal"><input type="button" value="Page .."></input></a>
                
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
