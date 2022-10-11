import About from '../components/About'
import Booking from '../components/Booking'
import BannerCarousel from '../components/_child/BannerCarousel'
import Format from '../layout/format'

export default function Home() {
  return (
    <Format title="Home">
      <BannerCarousel></BannerCarousel>
      <Booking></Booking>
      <About></About>
    </Format>
  )
}
