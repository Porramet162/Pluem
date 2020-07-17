import Link from 'next/link'
const Footer = () => {

    return (

        <div>


            <div className="menu-page">
                <Link href="/index">
                    <a><button>Home</button></a>
                </Link>
                <Link href="/about">
                    <a><button>Page 2</button></a>
                </Link>
                <Link href="/about">
                    <a><button>Page 3</button></a>
                </Link>


                <a href="https://web.facebook.com/PluemPhuket/?ref=page_internal"><input type="button" value="Page.."></input></a>
            </div>
            <style jsx>{`
        
        .menu - page {
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
