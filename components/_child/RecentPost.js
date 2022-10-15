import React from 'react'
import Image from 'next/image'
import { blogPostData } from '../_data/BlogPostData'

export default function RecentPost() {
    return (
        <div class="mb-5">
            <h4 class="uppercase mb-4 tracking-[5px]">Recent Post</h4>
            {
                blogPostData.map((item, index) => {
                    return (
                        <div class="d-flex align-items-center text-decoration-none bg-white mb-3 cursor-pointer" key={index}>
                            <Image class="img-fluid" src={item.blog100} width={100} height={100} alt="" />
                            <div class="pl-3">
                                <h6 class="m-1 hover:text-primaryDarkColor">{item.title}</h6>
                                <small className='uppercase hover:text-darkColor'>{item.dateAdded.split(',')[1]} {item.dateAdded.split(',')[0]}, {item.yearAdded}</small>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
