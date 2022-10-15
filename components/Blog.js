import React from 'react'
import BlogPost from './BlogPost'
import { blogPostData } from './_data/BlogPostData'

export default function Blog() {

    const styles = {
        wrapper: 'container-fluid py-5',
        container: 'container pt-5 pb-3',
        headerContainer: 'text-center mb-3 pb-3',
        headerTitle: 'text-primaryColor uppercase tracking-[5px]',

    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.headerContainer}>
                    <h6 className={styles.headerTitle}>Our Blog</h6>
                    <h1>Latest From Our Blog</h1>
                </div>
                <div className="row pb-3">
                    {
                        blogPostData.map((item, index) => {
                            return (
                                <div className="col-lg-4 col-md-6 mb-4 pb-2" key={index}>
                                    <BlogPost item={item}/>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
