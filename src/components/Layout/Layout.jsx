import Header from "../Header";

const Layout = ({children})=>{
    return(
        <div className="relative">
            <Header/>
            {children}
        </div>
    )
}

export default Layout;