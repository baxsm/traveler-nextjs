import React from 'react'
import Booking from '../../components/Booking'
import Banner from '../../components/Banner'
import Format from '../../layout/format'
import Contact from '../../components/Contact'

export default function index() {
    return (
        <Format title="Contact">
            <Banner pageTitle="Contact" />
            <Booking />
            <Contact />
        </Format>
    )
}
