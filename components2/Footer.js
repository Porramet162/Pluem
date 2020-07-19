import Link from 'next/link'
const Footer = () => {

    return (

        <div>


            <div className="menu-page">
                <div className="botton-box">
                <a className="button" href="/index">
                    Home
                </a>
               
            </div>
            </div>
            <style jsx>{`
        
        .menu - page {
            display: block;
        align-items: flex-end;
        justify-content: center;
        background-color: rgb(245, 185, 19);
    }

        .button{
            border-radius: 8px;
        }

    
    `}</style>
        </div>
    )
}
export default Footer
