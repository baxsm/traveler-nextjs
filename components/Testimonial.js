import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from "swiper"
import SwiperCore, { Autoplay } from 'swiper';
import { testimonialData } from './_data/TestimonialData'

export default function Testimonial() {

    const styles = {
        wrapper: 'container-fluid py-5',
        container: 'container py-5',
        headerContainer: 'text-center mb-3 pb-3',
        headerTitle: 'text-primaryColor uppercase tracking-[5px]',
        cardContainer: 'text-center pb-4',
        image: 'img-fluid mx-auto w-full h-full',
        contentContainer: 'testimonial-text bg-[#fff] p-4 mt-[-3rem]',
        carouselContainer: 'testimonial-carousel swiper'
    }

    SwiperCore.use([Autoplay])


    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.headerContainer}>
                    <h6 className={styles.headerTitle}>Testimonial</h6>
                    <h1>What Our Clients Say</h1>
                </div>
                <Swiper
                    slidesPerView={3}
                    centeredSlides={true}
                    spaceBetween={30}
                    loopFillGroupWithBlank={true}
                    grabCursor={true}
                    pagination={{
                        clickable: true,
                        dynamicBullets: true,
                        dynamicMainBullets: 4,
                    }}
                    autoplay={{
                        delay: 4000
                    }}
                    breakpoints= {{
                        0: {
                            slidesPerView: 1,
                            dynamicBullets: false,
                        },
                        768: {
                            slidesPerView: 3,
                            dynamicBullets: true,
                        }
                    }}
                    loop={true}
                    modules={[Pagination]}
                    className={styles.carouselContainer}
                >
                    {
                        testimonialData.map((item, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <div className={styles.cardContainer}>
                                        <Image className={styles.image} width={100} height={100} src={item.imageSrc} />
                                        <div className={styles.contentContainer}>
                                            <p className="mt-5 mb-[1rem] text-[#656565]">{item.brief}</p>
                                            <h5 className="text-truncate">{item.name}</h5>
                                            <span className="text-[#656565]">{item.profession}</span>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
        </div>
    )
}
