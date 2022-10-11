import React from 'react'
import Image from 'next/image'

export default function About() {

    const styles = {
        wrapper: 'py-5',
        container: 'pt-5 grid place-items-center max-w-[540px] mx-auto my-0',
        mainRow: '',
        column: 'min-h-[500px]',
        imageContainer: 'mx-[2rem]',
        coverImageContainer: 'relative h-full',
        coverImage: 'absolute w-full h-full object-cover h-[500px]',
        contentContainer: 'mt-6',
        content: 'bg-[#fff] mt-[3rem] mx-[2rem] p-[1.5rem]',
        contentTitle: 'tracking-[5px] uppercase text-primaryColor font-[500] mb-[0.5rem]',
        contentSubtitle: 'mb-[1rem] font-[700] text-[calc(1.375rem+1.5vw)]',
        contentBrief: 'mb-[1rem] text-[#656565]',
        contentRow: 'flex flex-row mx-[-15px] mb-[2rem]',
        contentImageContainer: 'px-[15px] w-full',
        contentImage: 'w-full h-full object-cover',
        submitButton: 'px-[0.8rem] py-[0.5rem] bg-primaryColor text-[#fff]',
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.mainRow}>
                    <div className={styles.imageContainer}>
                        <div className={styles.coverImageContainer}>
                            <Image
                                width={500}
                                height={700}
                                layout='responsive'
                                className={styles.coverImage}
                                src={"https://res.cloudinary.com/demo/image/fetch/https://i.ibb.co/k5gZsxk/about.jpg"}
                            />
                        </div>
                    </div>
                    <div className={styles.contentContainer}>
                        <div className={styles.content}>
                            <h6 className={styles.contentTitle}>About Us</h6>
                            <h1 className={styles.contentSubtitle}>We Provide Best Tour Packages In Your Budget</h1>
                            <p className={styles.contentBrief}>Dolores lorem lorem ipsum sit et ipsum. Sadip sea amet diam dolore sed et. Sit rebum labore sit sit ut vero no sit. Et elitr stet dolor sed sit et sed ipsum et kasd ut. Erat duo eos et erat sed diam duo</p>
                            <div className={styles.contentRow}>
                                <div className={styles.contentImageContainer}>
                                    <Image
                                        width={800}
                                        height={400}
                                        layout='responsive'
                                        className={styles.contentImage}
                                        src={"https://res.cloudinary.com/demo/image/fetch/https://i.ibb.co/RD4ykWL/about-1.jpg"}
                                    />
                                </div>
                                <div className={styles.contentImageContainer}>
                                    <Image
                                        width={800}
                                        height={400}
                                        layout='responsive'
                                        className={styles.contentImage}
                                        src={"https://res.cloudinary.com/demo/image/fetch/https://i.ibb.co/tsZyx0n/about-2.jpg"}
                                    />
                                </div>
                            </div>
                            <a className={styles.submitButton}>Book Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
