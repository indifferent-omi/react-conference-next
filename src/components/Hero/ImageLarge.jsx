const HeroImageLarge = ({className}) =>{
    const classes = "relative md:absolute " + (className && " "+ className)
    return(<div className={classes}>
    <img src="/images/hero-image-large.png" alt="hero image small" className="w-full h-full md:h-auto object-cover rounded-[1.875rem] lg:rounded-[3.125rem]"/>
    <div className="absolute bottom-0 right-0 md:left-0 translate-y-[40%] md:-translate-x-[40%] w-[24%]">
        <img src="/images/hero-image-large-shape.png" alt="hero image shape" className="w-full"/>
    </div>
</div>)
}

export default HeroImageLarge;