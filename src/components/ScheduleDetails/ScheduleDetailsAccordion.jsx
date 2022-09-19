import { useState } from "react";
import DragableAccordion from "../DragableAccordion";
import LocationContent from "./LocationContent";
import OrganiserContent from "./OrganiserContent";
import ScheduleContent from "./ScheduleContent";
import SpeakerContent from "./SpeakerContent";
import SponsorContent from "./SponsorContent";
const SheduleDetailsAccordion = ({data}) =>{
  const accordionData = [
    {
      value: "Organizer",
      content: <OrganiserContent data={data.organizer}/>
    },
    {
      value: "Speakers",
      content: <SpeakerContent data={data.speakers}/>
    },
    {
      value: "Locations",
      content: <LocationContent data={data.locations}/>
    },
    {
      value: "Schedules",
      content: <ScheduleContent data={data.schedules}/>
    },
    {
      value: "Sponsors",
      content: <SponsorContent data={data.sponsors}/>
    }]
    return(
      <div className='lg:hidden'>
        <DragableAccordion tabAccordionItems={accordionData} />
      </div>
    )
}

export default SheduleDetailsAccordion;
