const ScheduleContent = ({ data }) => {
    console.log('schedule', data)
    return (
        <div className="py-4">
            <h1 className="text-lg">Schedule Description</h1>
            <ul className="py-3">
                {
                    data ? data.map((el,i) => <li key={el.day}>
                       {`${i + 1}.`} {el.description}
                    </li>):null
                }
            </ul>
        </div>
    )
}

export default ScheduleContent;