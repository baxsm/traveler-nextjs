import React from 'react'
import { featureData } from './_data/FeatureData'

export default function Feature() {

    const styles = {
        wrapper: 'pb-5 mt-[2rem]',
        container: 'container mx-auto my-0',
        mainRow: 'flex flex-col gap-[1.5rem] place-items-center justify-center mx-auto my-0 bXL:flex-row',
        elementContainer: '',
        contentContainer: 'flex flex-row gap-[1rem]',
        iconContainer: 'flex justify-center place-items-center h-full w-[14rem] bg-primaryColor',
        icon: 'text-[#fff] font-[900] text-[2rem] p-[1.5rem]',
        content: '',
        title: 'font-[500] text-[1.25rem] mb-[0.5rem] mt-0 align-left',
        subTitle: 'm-0 text-[#656565]',
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.mainRow}>
                    {
                        featureData.map((item, index) => {
                            return (
                                <div className={styles.elementContainer} key={index}>
                                    <div className={styles.contentContainer}>
                                        <div className={styles.iconContainer}>
                                            <i className={styles.icon + " " + item.icon}></i>
                                        </div>
                                        <div className={styles.content}>
                                            <h5 className={styles.title}>{item.title}</h5>
                                            <p className={styles.subTitle}>{item.subTitle}</p>
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
