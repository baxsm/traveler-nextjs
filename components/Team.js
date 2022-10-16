import React from 'react'
import Image from 'next/image'
import { teamData } from './_data/TeamData'

export default function Team() {
    const styles = {
        wrapper: 'container-fluid',
        container: 'container pt-5 pb-3',
        headerWrapper: 'text-center mb-3 pb-3',
        headerTitle: 'text-primaryColor uppercase tracking-[5px]',
        cardContainer: 'col-lg-3 col-md-4 col-sm-6 pb-2',
        content: 'team-item bg-white mb-4',
        teamContent: 'team-img relative overflow-hidden',
        teamImg: 'img-fluid w-100',
        buttonContainer: 'btn btn-outline-primary btn-square',
        teamFooter: 'text-center py-4',
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.headerWrapper}>
                    <h6 className={styles.headerTitle}>Guides</h6>
                    <h1>Our Travel Guides</h1>
                </div>
                <div className="row">
                    {
                        teamData.map((item, index) => {
                            return (
                                <div className={styles.cardContainer} key={index}>
                                    <div className={styles.content}>
                                        <div className={styles.teamContent}>
                                            <Image className={styles.teamImg} width={1000} height={1000} src={item.imageSrc} alt="" />
                                            <div className="team-social">
                                                <a className={styles.buttonContainer} target="_blank" href="https://twitter.com">
                                                    <i className="fab ri-twitter-fill px-[10px]" />
                                                </a>
                                                <a className={styles.buttonContainer} target="_blank" href="https://facebook.com">
                                                    <i className="fab ri-facebook-fill px-[10px]" />
                                                </a>
                                                <a className={styles.buttonContainer} target="_blank" href="https://instagram.com">
                                                    <i className="fab ri-instagram-line px-[10px]" />
                                                </a>
                                                <a className={styles.buttonContainer} target="_blank" href="https://linkedin.com">
                                                    <i className="fab ri-linkedin-fill px-[10px]" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className={styles.teamFooter}>
                                            <h5 className="text-truncate">{item.name}</h5>
                                            <p className="m-0">{item.designation}</p>
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
