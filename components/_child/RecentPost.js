import React from 'react'
import Image from 'next/image'
import { blogPostData } from '../_data/BlogPostData'

export default function RecentPost() {
    return (
        <div className="mb-5">
            <h4 className="uppercase mb-4 tracking-[5px]">Recent Post</h4>
            {
                blogPostData.map((item, index) => {
                    return (
                        <div className="d-flex align-items-center text-decoration-none bg-white mb-3 cursor-pointer" key={index}>
                            <Image className="img-fluid" src={item.blog100} width={150} height={150} alt="" />
                            <div className="pl-3">
                                <h6 className="m-1 hover:text-primaryDarkColor">{item.title}</h6>
                                <small className='uppercase hover:text-darkColor'>{item.dateAdded.split(',')[1]} {item.dateAdded.split(',')[0]}, {item.yearAdded}</small>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
