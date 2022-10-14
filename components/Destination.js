import React from 'react'
import Image from 'next/image'

export default function Destination() {

    const styles = {
        wrapper: 'py-5',
        container: 'pt-5 pb-3',
        headerContainer: 'text-center mb-3 pb-3',
        tile: 'text-primary text-uppercase leading-[5px]',
        subTitle: '',
        card: '',
        cardContent: 'overflow-hidden',
        content: 'text-[#fff]',
        contentTitle: 'text-[#fff]',
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.headerContainer}>
                    <h6 className={styles.title}>Destination</h6>
                    <h1 className={styles.subTitle}>Explore Top Destination</h1>
                </div>
                <div className={styles.mainRow}>
                    <div className={styles.card}>
                        <div className={styles.cardContent}>
                            <Image className={styles.image} width={500} height={500} src="" alt=""/>
                            <a className={styles.content} href="">
                                <h5 className={styles.contentTitle}>United States</h5>
                                <span className={styles.contentSubTitle}>100 Cities</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
