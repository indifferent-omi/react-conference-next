const OrganiserContent = ({ data }) =>{
    return(
        <div className="py-2">
        <h1 className="text-lg">Organizer Info</h1>
        <div className="py-6">
        {
            data ? <p>{data.name}</p>: null
        }
        </div>
        </div>
    )
}

export default OrganiserContent;