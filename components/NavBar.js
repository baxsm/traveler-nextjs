import { data } from 'autoprefixer';
import Link from 'next/link';
import React from 'react'
import { useState, useEffect } from 'react';
import { navList } from './_data/NavList';

export default function NavBar() {

    const styles = {
        wrapper: 'bLG:h-[3.3rem]',
        container: 'p-[1rem] bLG:relative bLG:top-[0.5rem] bg-[#fff] bLG:ml-auto bLG:mr-auto bLG:left-[0] bLG:inset-x-0 bLG:ml-[2rem] bLG:mr-[2rem] bLG:p-[1rem] bXL:ml-[6rem] bXL:mr-[6rem] z-10',
        navbar: 'flex flex-wrap justify-between place-items-center bLG:flex-nowrap ',
        navbarBrand: 'bLG:ml-[2rem]',
        logo: 'text-[2.2rem] font-[700] text-primaryColor',
        logoSpan: 'text-darkColor',
        navBarToggleButton: 'text-[1.5rem] text-[#787878] p-0 m-0 hover:text-darkColor bLG:hidden',
        navBarToggleMenuIcon: 'ri-menu-2-fill ',
        navbarMenuContainer: 'basis-[100%] pt-[0.5rem] bLG:pb-[1rem] pl-[2rem] pr-[2rem] bLG:block bLG:basis-0 bLG:p-[1rem]',
        navBarhideMenu: 'basis-[100%] pt-[0.5rem] pb-[1rem] pl-[2rem] pr-[2rem] bLG:block bLG:basis-0 bLG:p-[1rem] hidden bLG:block',
        navbarMenu: 'nav__list flex flex-col bLG:flex-row bLG:justify-center bLG:place-items-center bLG:gap-[2rem]',
        navLink: 'hover:text-primaryColor font-[500] pb-[1.2rem] bLG:pb-0 bLG:whitespace-nowrap',
        dropMenuContainer: '',
        dropMenuToggle: 'hover:text-primaryColor font-[500] pb-[1rem] flex place-items-center gap-[0.2rem] bLG:pb-0',
        navDropLink: 'pl-[1rem] pb-[0.6rem] hover:text-primaryColor hover:bg-hoverLight whitespace-nowrap bLG:p-[0.5rem]',
        dropIconShow: 'ri-arrow-down-s-fill text-[0.6rem]',
        dropIconHide: 'ri-arrow-up-s-fill text-[0.6rem]',
        navDropMenu: 'flex flex-col pb-[0.4rem] bLG:absolute bLG:bg-[#fff] bLG:top-[5rem] bLG:right-[4.2rem] bLG:p-[0.5rem]',
        hideDropMenu: 'flex flex-col pb-[0.4rem] bLG:absolute bLG:bg-[#fff] bLG:top-[5rem] bLG:right-[4.2rem] bLG:p-[0.5rem] hidden'
    }

    const [navMenuActive, setNavMenuActive] = useState(null);
    const [dropMenuActive, setDropMenuActive] = useState(null);

    const toggleNavMenuActive = () => {
        if (navMenuActive) {
            setNavMenuActive(null);
        }
        else {
            setNavMenuActive('show')
        }
    }

    const toggleDropMenuActive = () => {
        if (dropMenuActive) {
            setDropMenuActive(null);
        }
        else {
            setDropMenuActive('show')
        }
    }

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
                        <i className={styles.navBarToggleMenuIcon} onClick={toggleNavMenuActive}></i>
                    </button>

                    <div className={navMenuActive ? styles.navbarMenuContainer : styles.navBarhideMenu} id="navbar__menu">
                        <div className={styles.navbarMenu}>
                            {navList.map((item, index) => {
                                if (item.dropdown == 0) {
                                    return (
                                        <Link href={item.href} key={index}>
                                            <a className={styles.navLink}>{item.name}</a>
                                        </Link>
                                    )
                                }
                                else if (item.dropdown == 1) {
                                    return (
                                        <Link href={item.href} key={index}>
                                            <a className={styles.dropMenuToggle} onClick={toggleDropMenuActive}>
                                                {item.name}
                                                <i className={dropMenuActive ? styles.dropIconHide : styles.dropIconShow}></i>
                                            </a>
                                        </Link>
                                    )
                                }
                                else {
                                    return (
                                        <div className={dropMenuActive ? styles.navDropMenu : styles.hideDropMenu} key={index}>
                                            {
                                                item.data.map((dropdownItem, dropIndex) => {
                                                    return (
                                                        <Link href={dropdownItem.href} key={dropIndex}>
                                                            <a className={styles.navDropLink}>{dropdownItem.name}</a>
                                                        </Link>
                                                    )
                                                })
                                            }
                                        </div>
                                    )
                                }
                            })}
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}
