import Arrow  from "../../assets/svg/arrow-corner.svg"
import HeroImageLarge from "../../components/Hero/ImageLarge";
import HeroImageSmall from "../../components/Hero/ImageSmall";
import ScrollDownIcon from "../../assets/svg/scroll-down-indecator.svg"
import ShapeLine from "../../components/Hero/ShapeLine";

const smallImageStyle = "md:bottom-[5%] lg:bottom-[11%] xl:bottom-0 left-0 3xl:left-[-6%] 2xl:left-[-3%] w-[34%] lg:w-[29%] xl:w-[30%] 2xl:w-[25%] min-w-[10rem] md:mt-0 mt-[1.875rem]"
const largeImageStyle = "md:bottom-[44%] lg:bottom-[30%] 2xl:bottom-0  right-0 xl:right-[0%] 2xl:right-[-2%] 3xl:right-[-6%] 3xl:w-[41.6%] 2xl:w-[37.6%] xl:w-[35.6%] lg:w-[34%] md:w-[34%] mt-[1.875rem] md:mt-0 md:h-[auto] h-[327px]"



// right: -15%;
// top: 8%;
// width: 81%;
// z-index: -1;
// }
const HeroSection = () => {
    return(
        <div className="relative pt-[6.25rem] pb-[10.625rem] overflow-hidden">
            <div className="container relative pt-[6.25rem] md:pb-[15.25rem] xl:pb-[14rem] 2xl:pb-[7.125rem]">
                
                <div className="md:max-w-[62%] md:text-right">
                    <h1 className="mb-6 text-right"> 
                    <div className="relative inline-block">
                        React   
                        <img src='/images/title-shape.png' className="absolute top-0 left-0 -translate-y-[56%] -translate-x-[56%] w-[22%]"/>
                    </div>  <br/> 
                    Conference</h1>
                        <div className="2xl:max-w-32/1 ml-auto">
                            <p>Lorem uis diam turpis quam id fermentum.In quis diam turpis quam id fermentum..id fermentum.In quis diam turpis quam id fermentum.</p>
                            <div className="mt-5 text-center md:text-right">
                                <a href="" className="btn-w-icon">Buy Tickets <Arrow className="ml-2"/></a>
                            </div>
                            <div className="h-[153px] hidden md:flex items-center justify-end">
                                <a href="" className="inline-flex items-center -rotate-90"> <ScrollDownIcon className="rotate-90 mr-2 "/><span className="">Scroll Down</span></a>
                            </div>
                        </div>
                </div>
                <HeroImageLarge  className={largeImageStyle}/>
                <HeroImageSmall className={smallImageStyle}/>
                <ShapeLine/>
            </div>
        </div>
    )
}

export default HeroSection;