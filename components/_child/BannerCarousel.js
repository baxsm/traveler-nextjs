import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay } from 'swiper';
import { carouselData } from './CarouselData';
import Image from 'next/image';


export default function BannerCarousel() {

    const styles = {

    }

    //SwiperCore.use([Autoplay])

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={100}
                    loop={true}
                    autoplay={{
                        delay: 2000
                    }}
                >
                    {
                        carouselData.map((item, index) => {
                            return (
                                <SwiperSlide>
                                    <Slide data={item}></Slide>
                                </SwiperSlide>
                            )
                        })
                    }

                </Swiper>
            </div>
        </div>
    )
}

function Slide({ data }) {
    return (
        <div className="carousel-item">
            <Image 
                layout='fill'
                src={data.source}
                className={"object-contain w-full relative h-max"}
            />
            <div className="grid place-items-center justify-center relative">
                <div className="p-3 flex flex-col place-items-center justify-center">
                    <h4 className="text-[#fff] uppercase mb-3">{data.title}</h4>
                    <h1 className="mb-3">{data.header}</h1>
                    <a className="bg-primaryColor py-3 px-5 mt-2">Book Now</a>
                </div>
            </div>
        </div>
    )
}
