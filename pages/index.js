import About from '../components/About'
import Booking from '../components/Booking'
import Feature from '../components/Feature'
import BannerCarousel from '../components/BannerCarousel'
import Format from '../layout/format'
import Destination from '../components/Destination'
import Services from '../components/Services'

export default function Home() {
  return (
    <Format title="Home">
      <BannerCarousel></BannerCarousel>
      <Booking></Booking>
      <About></About>
      <Feature></Feature>
      <Destination></Destination>
      <Services></Services>
    </Format>
  )
}
