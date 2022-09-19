const SponsorContent = ({ data }) =>{

    return(
        <div className="py-3">
        <h1 className="text-lg">Sponsors</h1>
        <ul className="pt-3">
            {
               data && data.map(el => <li key={el.name}>{el.name}</li>)
            }
        </ul>
        </div>
    )
}

export default SponsorContent;