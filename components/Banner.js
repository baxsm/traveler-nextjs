import React from 'react'

export default function Banner({ pageTitle }) {

    const styles = {
        wrapper: 'container-fluid page-header',
        container: 'container',
        content: 'd-flex flex-column align-items-center justify-content-center min-h-[400px]',
        title: 'display-4 text-[#fff] uppercase font-[600]',
        dataContainer: 'd-inline-flex text-[#fff]',
        iconContainer: 'flex flex-row justify-center m-0 place-items-center leading-[0] px-[0.8rem]',
        leftIcon: 'ri-arrow-right-s-line font-[900] text-[1.2rem]',
        rightIcon: 'ri-arrow-right-s-line ml-[-0.75rem] font-[900] text-[1.2rem]',

    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h3 className={styles.title}>{pageTitle}</h3>
                    <div className={styles.dataContainer}>
                        <p className="m-0 uppercase"><a className="text-[#fff] hover:text-[#fff] hover:underline" href="">Home</a></p>
                        <div className={styles.iconContainer}>
                            <i className={styles.leftIcon}></i>
                            <i className={styles.rightIcon}></i>
                        </div>
                        <p className="m-0 uppercase">{pageTitle}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
