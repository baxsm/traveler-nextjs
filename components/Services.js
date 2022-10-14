import React from 'react'
import { servicesData } from './_child/ServicesData'

export default function Services() {

    const styles = {
        wrapper: 'container-fluid py-5',
        container: 'container pt-5 pb-3',
        header: 'text-center mb-3 pb-3',
        title: 'text-primaryColor uppercase tracking-[5px]',
        subTitle: '',
        mainRow: 'row',
        element: 'col-lg-4 col-md-6 mb-4',
        content: 'service-item bg-white text-center mb-2 py-5 px-4',
        contentIcon: 'mx-auto mb-4',
        contentTitle: 'mb-2',
        contentSubTitle: 'm-0',
    }

    
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h6 className={styles.title}>Services</h6>
                    <h1 className={styles.subTitle}>Tours & Travel Services</h1>
                </div>
                <div className={styles.mainRow}>
                    {
                        servicesData.map((item, index) => {
                            return (
                                <div className={styles.element} key={index}>
                                    <div className={styles.content}>
                                        <i className={styles.contentIcon + " " + item.icon}></i>
                                        <h5 className={styles.contentTitle}>{item.title}</h5>
                                        <p className={styles.contentSubTitle}>{item.subTitle}</p>
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
