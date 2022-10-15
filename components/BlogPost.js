import React from 'react'
import Image from 'next/image'

export default function BlogPost({ item }) {

    const styles = {
        blogItem: 'blog-item',
        itemHeader: 'relative',
        image: 'img-fluid w-full',
        blogDate: 'blog-date gap-[0.8rem]',
        content: 'bg-[#fff] p-4',

    }


    return (
        <div className={styles.blogItem}>
            <div className={styles.itemHeader}>
                <Image className={styles.image} width={500} height={350} src={item.imageSrc} alt="" />
                <div className={styles.blogDate}>
                    <h6 className="font-bold mb-[-1rem]">{item.dateAdded.split(',')[0]}</h6>
                    <small className="text-[#fff] uppercase">{item.dateAdded.split(',')[1]}</small>
                </div>
            </div>
            <div className={styles.content}>
                <div className="d-flex mb-2">
                    <a className="text-primaryColor uppercase text-decoration-none">{item.author}</a>
                    <span className="text-primaryColor px-2">|</span>
                    <a className="text-primaryColor uppercase text-decoration-none">{item.category}</a>
                </div>
                <a className="h5 m-0 text-decoration-none hover:text-primaryDarkColor">{item.title}</a>
            </div>
        </div>
    )
}
