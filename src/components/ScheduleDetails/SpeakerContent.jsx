import UserCard from '../Cards/UserCard';

const SpeakerContent = ({ data }) =>{
    
    return(
        <>
        {
           data && data.map(el => <UserCard data={el} key={el.id} className="mb-10"/>)
        }
        </>
    )
}

export default SpeakerContent;