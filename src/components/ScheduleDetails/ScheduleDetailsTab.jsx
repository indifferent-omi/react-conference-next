import { useState } from "react";
import DragableNav from "../DragableNav";
import LocationContent from "./LocationContent";
import OrganiserContent from "./OrganiserContent";
import ScheduleContent from "./ScheduleContent";
import SpeakerContent from "./SpeakerContent";
import SponsorContent from "./SponsorContent";
const tabNavData = ["Organizer", "Speakers", "Location", "Schedule", "Sponsors"]
const SheduleDetailsTab = ({data}) =>{

    const [navKey, setNavKey] = useState(0);
    const handleKeyClick = (id) => {
      setNavKey(id)
    }
    return(
    <div className="hidden lg:flex">
        <div className='w-1/4'>
          <DragableNav tabNavItems={tabNavData} onKeyClick={handleKeyClick} activeItem={navKey} />
        </div>
        <div className="pt-2 px-12 w-3/4">
          <div className='bg-water px-8 py-8 rounded-sm'>
            {navKey === 0 && <OrganiserContent data={data.organizer} />}
            {navKey === 1 && <SpeakerContent data={data.speakers} />}
            {navKey === 2 && <LocationContent data={data.locations} />}
            {navKey === 3 && <ScheduleContent data={data.schedules} />}
            {navKey === 4 && <SponsorContent data={data.sponsors} />}
          </div>
        </div>
      </div>
    )
}

export default SheduleDetailsTab;
