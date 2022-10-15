import React from 'react'
import Image from 'next/image'

export default function CommentList() {

    const styles = {
        authorImage: 'img-fluid mx-auto mb-3 my-0',
        authorName: 'text-primaryColor hover:text-primaryDarkColor hover:underline',
        commentText: 'text-[#656565] mb-[1rem]',
    }

    return (
        <div className="bg-[#fff] p-[30px] mb-[30px]">
            <h4 className="uppercase mb-4 tracking-[5px]">3 Comments</h4>
            <div className="media mb-4">
                <div className='pr-4 pt-1'>
                    <div className='h-[45px] w-[45px]'>
                        <Image src="https://res.cloudinary.com/demo/image/fetch/https://i.ibb.co/WgfkTmf/user.jpg" width={250} height={250} className={styles.authorImage} />
                    </div>
                </div>
                <div className="media-body">
                    <h6><a className={styles.authorName}>John Doe</a> <small><i>01 Jan 2022</i></small></h6>
                    <p className={styles.commentText}>Diam amet duo labore stet elitr invidunt ea clita ipsum voluptua, tempor labore
                        accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed sed eirmod ipsum.
                        Gubergren clita aliquyam consetetur sadipscing, at tempor amet ipsum diam tempor
                        consetetur at sit.</p>
                    <button className="btn btn-sm btn-outline-primary">Reply</button>
                </div>
            </div>
            <div className="media">
                <div className='pr-4 pt-1'>
                    <div className='h-[45px] w-[45px]'>
                        <Image src="https://res.cloudinary.com/demo/image/fetch/https://i.ibb.co/WgfkTmf/user.jpg" width={250} height={250} className={styles.authorImage} />
                    </div>
                </div>
                <div className="media-body">
                    <h6><a className={styles.authorName}>John Doe</a> <small><i>01 Jan 2022</i></small></h6>
                    <p className={styles.commentText}>Diam amet duo labore stet elitr invidunt ea clita ipsum voluptua, tempor labore
                        accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed sed eirmod ipsum.
                        Gubergren clita aliquyam consetetur sadipscing, at tempor amet ipsum diam tempor
                        consetetur at sit.</p>
                    <button className="btn btn-sm btn-outline-primary">Reply</button>
                    <div className="media mt-4">
                        <div className='pr-4 pt-1'>
                            <div className='h-[45px] w-[45px]'>
                                <Image src="https://res.cloudinary.com/demo/image/fetch/https://i.ibb.co/WgfkTmf/user.jpg" width={250} height={250} className={styles.authorImage} />
                            </div>
                        </div>
                        <div className="media-body">
                            <h6><a className={styles.authorName}>John Doe</a> <small><i>01 Jan 2022</i></small></h6>
                            <p className={styles.commentText}>Diam amet duo labore stet elitr invidunt ea clita ipsum voluptua, tempor
                                labore accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed sed
                                eirmod ipsum. Gubergren clita aliquyam consetetur sadipscing, at tempor amet
                                ipsum diam tempor consetetur at sit.</p>
                            <button className="btn btn-sm btn-outline-primary">Reply</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
