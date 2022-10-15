import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay } from 'swiper';
import { carouselData } from './_data/CarouselData';
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
                                <SwiperSlide key={index}>
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
        <div className="relative">
            <div className="relative">
                <Image
                    width={500}
                    height={270}
                    layout='responsive'
                    src={data.source}
                    className="object-cover"
                />
            </div>
            <div className="grid place-items-center justify-center absolute top-0 left-0 right-0 bottom-0 bg-backgroundLightBlack">
                <div className="p-3 flex flex-col place-items-center justify-center text-center max-w-[900px]">
                    <h4 className="text-[#fff] uppercase mb-3 text-[18px] font-[600] bLG:text-[1.5rem]">{data.title}</h4>
                    <h1 className="mb-3 font-[700] text-[#fff] text-[30px] bLG:text-[4rem]">{data.header}</h1>
                    <a className="bg-primaryColor py-[0.375rem] px-[0.75rem] mt-2 text-[#fff] bLG:py-[1rem] bLG:px-[3rem]">Book Now</a>
                </div>
            </div>
        </div>
    )
}
