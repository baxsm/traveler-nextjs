import React from 'react'
import Image from 'next/image'

export default function Author() {

    const styles = {
        container: 'd-flex flex-column text-center bg-white mb-5 py-5 px-4 place-items-center',
        authorImage: 'img-fluid mx-auto mb-3 my-0 rounded-full',
        iconContainer: 'text-primaryColor px-2 hover:text-primaryDarkColor',

    }


    return (
        <div className={styles.container}>
            <div className='py-3'>
                <div className='h-[100px] w-[100px]'>
                    <Image src="https://res.cloudinary.com/demo/image/fetch/https://i.ibb.co/WgfkTmf/user.jpg" width={250} height={250} className={styles.authorImage} />
                </div>
            </div>
            <h3 className="text-primaryColor mb-3">John Doe</h3>
            <p className='mb-[1rem] text-[#656565]'>Conset elitr erat vero dolor ipsum et diam, eos dolor lorem, ipsum sit no ut est  ipsum erat kasd amet elitr</p>
            <div className="d-flex justify-content-center">
                <a className={styles.iconContainer} href="">
                    <i className="ri-facebook-fill"></i>
                </a>
                <a className={styles.iconContainer} href="">
                    <i className="ri-twitter-fill"></i>
                </a>
                <a className={styles.iconContainer} href="">
                    <i className="ri-instagram-line"></i>
                </a>
                <a className={styles.iconContainer} href="">
                    <i className="ri-linkedin-fill"></i>
                </a>
                <a className={styles.iconContainer} href="">
                    <i className="ri-youtube-fill"></i>
                </a>
            </div>
        </div>
    )
}
