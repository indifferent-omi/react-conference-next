const UserCard = ({ data,className }) =>{
    // console.log(data)
    let classes = "flex bg-white pl-4 py-4 pr-7 items-center rounded-sm" + " "+className
    return(
        <div className={classes}>
            <div className="min-w-[8.75rem] max-w-[8.75rem]">
                <img src={data.image.url} alt="" className="w-full rounded-sm"/>
            </div>
            <div className="pl-8">
                <div className="flex justify-between items-center pb-3">
                    <h3>{data.name}</h3>
                   {data.company && <p className="text-2xs text-black-opacity-6">
                    Company Name
                    </p>}
                    
                </div>
                <p className="2xs pr-4">{data.about.slice(0,100)}</p>
            </div>
        </div>
    )
}

export default UserCard;