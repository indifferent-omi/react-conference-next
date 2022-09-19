import PageWrapper from '../components/PageWrapper';
import HeroSection from '../containers/Hero';
import ScheduleSection from '../containers/Schedule/Schedule';
import { getConferances } from "../data";
import { getThemes } from "../data/theme";


export default function Home(props) {
  return (
  <PageWrapper gradient={true}>
    <HeroSection/>
    <ScheduleSection data={props.conferences} themes={props.themes}/>
  </PageWrapper>
  )
}

export async function getStaticProps(){
  const conferences = (await getConferances() || []);
  const themes = (await getThemes() || []);
  return{
    props: {
      conferences,
      themes
    }
  }
}

