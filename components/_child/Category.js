import React from 'react'

export default function Category() {

    const styles = {
        listContainer : 'mb-3 d-flex justify-content-between align-items-center place-items-center',
        listCount: 'badge badge-primary badge-pill',
        iconContainer: 'text-darkColor flex place-items-center hover:text-primaryDarkColor',
        rightIcon: 'ri-arrow-drop-right-line text-primaryColor mr-2 text-[1.5rem] leading-[0] font-[400]',
    }

    return (
        <div className="mb-5">
            <h4 className="uppercase mb-4 tracking-[5px]">Categories</h4>
            <div className="bg-[#fff] p-[30px]">
                <ul className="list-inline m-0 categoryLink">
                    <li className={styles.listContainer}>
                        <a className={styles.iconContainer}><i className={styles.rightIcon}></i><span>Web Design</span></a>
                        <span className={styles.listCount}>150</span>
                    </li>
                    <li className={styles.listContainer}>
                        <a className={styles.iconContainer}><i className={styles.rightIcon}></i><span>Web Development</span></a>
                        <span className={styles.listCount}>131</span>
                    </li>
                    <li className={styles.listContainer}>
                        <a className={styles.iconContainer}><i className={styles.rightIcon}></i><span>Online Marketing</span></a>
                        <span className={styles.listCount}>78</span>
                    </li>
                    <li className={styles.listContainer}>
                        <a className={styles.iconContainer}><i className={styles.rightIcon}></i><span>Keyword Research</span></a>
                        <span className={styles.listCount}>56</span>
                    </li>
                    <li className="d-flex justify-content-between align-items-center">
                        <a className={styles.iconContainer} ><i className={styles.rightIcon}></i><span>Email Marketing</span></a>
                        <span className={styles.listCount}>98</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}
