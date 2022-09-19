import UserCard from '../Cards/UserCard';

const SpeakerContent = ({ data }) =>{
    
    return(
        <div>
        {
           data && data.map(el => <UserCard data={el} key={el.id} className="mb-10"/>)
        }
        </div>
    )
}

export default SpeakerContent;