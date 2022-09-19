const ShapeLine = () =>{
    const shapeLargeDevice = "hidden md:block absolute -right-[8%] top-[10%] w-[81%] max-w-[58.75rem] -z-[1]"
    const shapeSmallDevice = "md:hidden absolute -right-[0] top-[8%] w-[93%] max-w-[21.42rem] -z-[1]"
    return(<>
        <div className={shapeLargeDevice}>
            <img src="/images/hero-line-shape-lg.png" alt="hero image small" className=" w-full"/>
            
        </div>
        <div className={shapeSmallDevice}>
            <img src="/images/hero-line-shape-mobile.png" alt="hero image small" className="w-full"/>
        </div>
    </>)
}

export default ShapeLine;
