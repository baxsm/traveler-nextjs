import React from 'react'
import Image from 'next/image'
import { packagesData } from './_data/PackagesData'

export default function Packages() {

    const styles = {
        wrapper: 'container-fluid',
        container: 'container pt-5 pb-3',
        header: 'text-center mb-3 pb-3',
        title: 'text-primaryColor uppercase tracking-[5px]',
        subTitle: '',
        mainRow: 'row',
        element: 'col-lg-4 col-md-6 mb-4',
        contentContainer: 'package-item bg-[#fff] mb-2',
        contentImage: 'img-fluid',
        content: 'p-4',
        iconsContainer: 'd-flex justify-between mb-3 text-[#656565]',
        iconWrapper: 'm-0 flex place-items-center justify-center',
        icon1: 'ri-map-pin-fill text-primaryColor mr-2',
        icon2: 'ri-calendar-todo-fill text-primaryColor mr-2',
        icon3: 'ri-user-fill text-primaryColor mr-2',
        contentTitle: 'h5 text-decoration-none hover:text-primaryDarkColor',
        priceWrapper: 'border-top mt-4 pt-4',
        priceContainer: 'd-flex justify-between place-items-center',
        priceIcon: 'ri-star-fill mr-2 text-primaryColor',
    }


    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h6 className={styles.title}>Packages</h6>
                    <h1 className={styles.subTitle}>Perfect Tour Packages</h1>
                </div>
                <div className={styles.mainRow}>
                    {
                        packagesData.map((item, index) => {
                            return (
                                <div className={styles.element} key={index}>
                                    <div className={styles.contentContainer}>
                                        <Image className={styles.contentImage} width={1000} height={700} src={item.imageSrc} alt="" />
                                        <div className={styles.content}>
                                            <div className={styles.iconsContainer}>
                                                <small className={styles.iconWrapper}>
                                                    <i className={styles.icon1} />
                                                    {item.location}
                                                </small>
                                                <small className={styles.iconWrapper}>
                                                    <i className={styles.icon2} />
                                                    {item.duration} days
                                                </small>
                                                <small className={styles.iconWrapper}>
                                                    <i className={styles.icon3} />
                                                    {item.capacity} {item.capacity > 1 ? "Persons" : "Person"}
                                                </small>
                                            </div>
                                            <a className={styles.contentTitle}>{item.title}</a>
                                            <div className={styles.priceWrapper}>
                                                <div className={styles.priceContainer}>
                                                    <h6 className="m-0 flex place-items-center justify-center">
                                                        <i className={styles.priceIcon} />
                                                        {item.averageReview}
                                                        <small>&nbsp;({item.totalReview})</small>
                                                    </h6>
                                                    <h5 className="m-0">${item.price}</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
