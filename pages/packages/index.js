import React from 'react'
import Booking from '../../components/Booking'
import Banner from '../../components/Banner'
import Format from '../../layout/format'
import Packages from '../../components/Packages'
import Destination from '../../components/Destination'

export default function index() {
  return (
    <Format title="Packages" selected="/packages">
        <Banner pageTitle="Packages"/>
        <Booking />
        <Packages />
        <Destination />
    </Format>
  )
}
