import React from "react"
import Logo from "../../assets/svg/site-logo.svg"
import HamburgerIcon from "../../assets/svg/hamburger-icon.svg"
const listItemStyle = "mx-3 text-xs font-medium"
const listLinkStyle = "px-6"
const menuItems = [
    {
        label:"About Us",
        link:"/#",
    },
    {
        label:"What We do",
        link:"/#",
    },
    {
        label:"Blog",
        link:"/#",
    },
    {
        label:"Say hi",
        link:"/#",
    }
]
const Header = () => {
    return(
        <header className="absolute top-0 left-0 w-full pt-7 pb-7 z-50">
            <div className="container">
                <div className="flex justify-between items-center">
                    <a href="#" className="w-[8.5394rem]">
                        <Logo/>
                    </a>
                    <ul className="hidden lg:flex list-none">
                        {React.Children.toArray(menuItems.map(({label,link})=>{
                            return(
                                <li className={listItemStyle}>
                                    <a href={link} className={listLinkStyle}>{label}</a>
                                </li>
                            )
                        }))}
                    </ul>
                    
                    <a href="#">
                        <HamburgerIcon/>
                    </a>
                </div>
            </div>
        </header>
    )
}

export default Header;