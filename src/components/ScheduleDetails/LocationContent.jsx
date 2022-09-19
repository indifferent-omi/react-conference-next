const LocationContent = ({ data }) => {

    return (
        <div className="py-4">
            <h1 className="text-lg">Location Content</h1>
            <div className="py-3">
                {
                    data && data.map(el => <div key={el.name}>
                        <p>Address: {el.address}</p>
                        <p>Country: {el.country.name}</p>
                    </div>)
                }
            </div>
        </div>
    )
}

export default LocationContent;