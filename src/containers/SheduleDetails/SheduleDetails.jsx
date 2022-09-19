import SheduleDetailsAccordion from '../../components/ScheduleDetails/ScheduleDetailsAccordion';
import SheduleDetailsTab from '../../components/ScheduleDetails/ScheduleDetailsTab';
const SheduleDetails = ({ conference }) => {
  return (
    <div className="container pt-[14.1875rem] pb-[9.5rem]">
      <div className="mb-10">
        <h2 className='mb-3'>
          Conference info
        </h2>
        <p className='text-black-opacity-6'>Lorem uis diam turpis quam id fermentum.In quis diam turpis quam id fermentum.</p>
      </div>
      <SheduleDetailsTab data={conference}/>
      <SheduleDetailsAccordion data={conference}/>
    </div>
  )
}

export default SheduleDetails;
