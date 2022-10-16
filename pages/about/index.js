import React from 'react'
import About from '../../components/About'
import Booking from '../../components/Booking'
import Banner from '../../components/Banner'
import Feature from '../../components/Feature'
import Format from '../../layout/format'
import Registration from '../../components/Registration'
import Team from '../../components/Team'

export default function index() {
  return (
    <Format title="About" selected="/about">
        <Banner pageTitle="About" />
        <Booking />
        <About />
        <Feature />
        <Registration />
        <Team />
    </Format>
  )
}
