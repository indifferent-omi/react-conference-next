const HeroImageSmall = ({className}) =>{
    const classes = "relative md:absolute" + (className && " "+ className)
    return(<div className={classes}>
    <img src="/images/hero-image-small.png" alt="hero image small" className="w-full"/>
    <div className="absolute bottom-0 right-0 translate-y-[40%] translate-x-[40%] -z-10 w-[58%]">
        <img src="/images/hero-image-small-shape.png" alt="hero image shape" className="w-full"/>
    </div>
</div>)
}

export default HeroImageSmall;