import React from 'react'
import Booking from '../../components/Booking'
import Banner from '../../components/Banner'
import Format from '../../layout/format'
import Testimonial from '../../components/Testimonial'

export default function index() {
  return (
    <Format title="Testimonial">
        <Banner pageTitle="Testimonial"/>
        <Booking />
        <Testimonial />
    </Format>
  )
}
