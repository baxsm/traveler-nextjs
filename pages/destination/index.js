import React from 'react'
import Booking from '../../components/Booking'
import Banner from '../../components/Banner'
import Format from '../../layout/format'
import Destination from '../../components/Destination'

export default function index() {
  return (
    <Format title="Destination">
        <Banner pageTitle="Destination"/>
        <Booking />
        <Destination />
    </Format>
  )
}
