import PageWrapper from '../../components/PageWrapper';
import ScheduleDetails from '../../containers/SheduleDetails';
import { getConferances, getScheduleDetails } from '../../data';

export default function ShedulePage({ conference }) {
  return (
    <PageWrapper>
      <ScheduleDetails conference={conference}/>
    </PageWrapper>
  )
}

// Fetch data at build time
export async function getStaticProps({ params }) {
  const data = (await getScheduleDetails(params.id) || []);
  return {
    props: {
      conference: data,
    },
  };
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
  const conferences = await getConferances();
  return {
    paths: conferences.map((el) => ({ params: { id: el.id.toString() } })),
    fallback: true,
  };
}