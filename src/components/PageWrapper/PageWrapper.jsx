const PageWrapper = ({gradient,children})=>{
    const gradientBackground = "bg-cover bg-no-repeat bg-center gradient-bg"
    return(
        <div className={gradient && gradientBackground}>
            {children}
        </div>
    )
}

export default PageWrapper;