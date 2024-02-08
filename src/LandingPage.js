import HomeNavBar from './Components/HomeNavBar';
import HomeCarousel from './Components/HomeCarousel';
import HomeBody from './Components/HomeBody';



function LandingPage() {
  return (
    <div>
      <HomeNavBar />
      <HomeCarousel />
      <HomeBody />
    </div>
  );
}

export default LandingPage;