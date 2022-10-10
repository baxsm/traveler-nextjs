import React from 'react'
import { useState, useEffect } from 'react';

export default function NavBar() {

    const styles = {
        container: 'mt-[1rem] pl-[1rem] pr-[1rem] pb-[1rem]',
        navbar: 'flex flex-wrap justify-between place-items-center',
        navbarBrand: '',
        logo: 'text-[2.2rem] font-[700] text-primaryColor',
        logoSpan: 'text-darkColor',
        navBarToggleButton: 'text-[1.5rem] text-[#787878] p-0 m-0 hover:text-darkColor bLG:hidden',
        navBarToggleMenuIcon: 'ri-menu-2-fill ',
        navbarMenuContainer: 'basis-[100%] pt-[0.5rem] pb-[1rem] pl-[2rem] pr-[2rem] hidden bLG:block',
        navbarMenu: 'nav__list flex flex-col gap-[1.2rem]',
        navLink: 'hover:text-primaryColor font-[500]',
        dropMenuContainer: '',
        dropMenu: 'hidden',
    }

    useEffect(() => {
        function resetClass() {
            document.querySelectorAll('.nav__list a').forEach(e => {
                e.classList.remove('active__link');
            });
        }

        resetClass();
        document.querySelectorAll('.nav__list a')[0].classList.add('active__link');

        document.querySelectorAll('.nav__list a').forEach(e => {
            e.addEventListener('click', () => {
                resetClass();
                e.classList.add("active__link");
            });
        });

        document.querySelector('#navbar__toggle').addEventListener('click', () => {
            document.querySelector('#navbar__menu').classList.toggle('show__navbar');
        })

    }, [])

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <nav className={styles.navbar}>
                    <a className={styles.navbarBrand}>
                        <h1 className={styles.logo}>
                            <span className={styles.logoSpan}>
                                TRAVEL
                            </span>
                            ER
                        </h1>
                    </a>
                    <button type="button" className={styles.navBarToggleButton} id="navbar__toggle">
                        <i className={styles.navBarToggleMenuIcon}></i>
                    </button>
                    <div className={styles.navbarMenuContainer} id="navbar__menu">
                        <div className={styles.navbarMenu}>
                            <a className={styles.navLink}>Home</a>
                            <a className={styles.navLink}>About</a>
                            <a className={styles.navLink}>Services</a>
                            <a className={styles.navLink}>Tour Packages</a>
                            <div className={styles.dropMenuContainer}>
                                <a className={styles.dropMenuToggle} id="dropmenu__toggle">
                                    Pages
                                </a>
                                <div className={styles.dropMenu}>
                                    <a className={styles.navDropLink}>Blog Grid</a>
                                    <a className={styles.navDropLink}>Blog Detail</a>
                                    <a className={styles.navDropLink}>Destination</a>
                                    <a className={styles.navDropLink}>Travel Guides</a>
                                    <a className={styles.navDropLink}>Testimonial</a>
                                </div>
                            </div>
                            <a className={styles.navLink}>Contact</a>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}
