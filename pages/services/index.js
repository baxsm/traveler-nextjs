import React from 'react'
import Booking from '../../components/Booking'
import Banner from '../../components/Banner'
import Format from '../../layout/format'
import Services from '../../components/Services'
import Testimonial from '../../components/Testimonial'

export default function index() {
  return (
    <Format title="Services" selected="/services">
        <Banner pageTitle="Services"/>
        <Booking />
        <Services />
        <Testimonial />
    </Format>
  )
}
