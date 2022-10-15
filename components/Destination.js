import React from 'react'
import Image from 'next/image'
import { destinationData } from './_data/DestinationData'

export default function Destination() {

    const styles = {
        wrapper: 'py-5 container-fluid',
        container: 'container pt-5 pb-3',
        headerContainer: 'text-center mb-3 pb-3',
        title: 'text-primaryColor uppercase tracking-[5px]',
        subTitle: '',
        mainRow: 'row',
        card: 'col-lg-4 col-md-6 mb-4',
        cardContent: 'destination-item relative overflow-hidden mb-2',
        image: 'img-fluid',
        content: 'destination-overlay text-[#fff] decoration-none',
        contentTitle: 'text-[#fff]',
        contentSubTitle: 'text-[#fff]',
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.headerContainer}>
                    <h6 className={styles.title}>Destination</h6>
                    <h1 className={styles.subTitle}>Explore Top Destination</h1>
                </div>
                <div className={styles.mainRow}>
                    {
                        destinationData.map((item, index) => {
                            return (
                                <div className={styles.card} key={index}>
                                    <div className={styles.cardContent}>
                                        <Image className={styles.image} height={1200} width={2000} src={item.imageSrc} alt="" />
                                        <a className={styles.content}>
                                            <h5 className={styles.contentTitle}>{item.title}</h5>
                                            <span className={styles.contentSubTitle}>{item.subTitle}</span>
                                        </a>
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
