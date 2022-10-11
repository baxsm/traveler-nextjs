import React from 'react'

export default function TopBar() {

    const styles = {
        wrapper: 'hidden bLG:block',
        container: 'mt-[1rem] text-[#656565]',
        row: 'flex place-items-center justify-between',
        dataContainer: 'flex justify-center text-[1rem] gap-[0.5rem]',
        content: 'flex pl-[2.5rem] gap-[1rem] justify-center place-items-center',
        socialContainer: 'pr-[2.5rem]',
        socials: 'flex gap-[2rem] justify-center place-items-center',
        social: 'text-[1rem] text-primaryColor hover:text-primaryDarkColor'
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.row}>
                    <div className={styles.contentWrapper}>
                        <div className={styles.content}>
                            <p className={styles.dataContainer}>
                                <i className="ri-mail-fill"></i>
                                info@example.com
                            </p>
                            <p className={styles.contentDivider}>|</p>
                            <p className={styles.dataContainer}>
                                <i className="ri-phone-fill"></i>
                                +92 123 1234567
                            </p>
                        </div>
                    </div>
                    <div className={styles.socialContainer}>
                        <div className={styles.socials}>
                            <a className={styles.social} href="">
                                <i className="ri-facebook-fill"></i>
                            </a>
                            <a className={styles.social} href="">
                                <i className="ri-twitter-fill"></i>
                            </a>
                            <a className={styles.social} href="">
                                <i className="ri-linkedin-fill"></i>
                            </a>
                            <a className={styles.social} href="">
                                <i className="ri-instagram-line"></i>
                            </a>
                            <a className={styles.social} href="">
                                <i className="ri-youtube-fill"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
