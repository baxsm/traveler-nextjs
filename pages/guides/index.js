import React from 'react'
import Booking from '../../components/Booking'
import Banner from '../../components/Banner'
import Format from '../../layout/format'
import Team from '../../components/Team'

export default function index() {
  return (
    <Format title="Guides">
        <Banner pageTitle="Guides"/>
        <Booking />
        <Team />
    </Format>
  )
}
