import Link from 'next/link'
const Footer = () => {

    return (

            <div className="menu-page">

            {/* <marquee direction="left"> */}
                มาก่อน 21:00 น. โปรโมชั่น 199.- !!! 
            {/* </marquee> */}
                {/* <Link  href="/index2">
                    <a><button>Page 1</button></a>
                </Link>
                <Link  href="/about">
                    <a><button>Page 2</button></a>
                </Link>
                <Link  href="/about">
                    <a><button>Page 3</button></a>
                </Link>
                

                <a href="https://web.facebook.com/PluemPhuket/?ref=page_internal"><input type="button" value="Page .."></input></a>
                 */}
            

            <style jsx>{`
        
        .menu-page {
            color: red;
            height: 20px;
            margin-top: 10%;
            display: block;
            align-items: flex-end;
            justify-content: center;
            background-color: rgb(245, 185, 19);
            }

        
        `}</style>

        </div>
    )
}
export default Footer