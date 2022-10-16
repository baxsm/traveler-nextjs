import About from '../components/About'
import Booking from '../components/Booking'
import Feature from '../components/Feature'
import BannerCarousel from '../components/BannerCarousel'
import Format from '../layout/format'
import Destination from '../components/Destination'
import Services from '../components/Services'
import Packages from '../components/Packages'
import Registration from '../components/Registration'
import Team from '../components/Team'
import Testimonial from '../components/Testimonial'
import Blog from '../components/Blog'
import { useEffect } from 'react'

export default function Home() {

  useEffect(function mount() {
    const scrollUpButton = document.getElementById('scroll-up');

    function onScroll() {
      if (this.scrollY >= 200) {
        scrollUpButton.classList.add('show-scroll');
      }
      else {
        scrollUpButton.classList.remove('show-scroll');
      }
    }
    window.addEventListener("scroll", onScroll);

    return function unMount() {
      window.removeEventListener("scroll", onScroll);
    };
  });

  
  return (
    <Format title="Home" selected="/">
      <BannerCarousel></BannerCarousel>
      <Booking></Booking>
      <About></About>
      <Feature></Feature>
      <Destination></Destination>
      <Services></Services>
      <Packages></Packages>
      <Registration></Registration>
      <Team></Team>
      <Testimonial></Testimonial>
      <Blog></Blog>
    </Format>
  )
}
