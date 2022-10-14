import React from 'react'

export default function Registration() {

    const styles = {
        wrapper: 'container-fluid bg-registration py-5 my-[90px] mx-0',
        container: 'container py-5',
        mainRow: 'row align-items-center',
        leftContainer: 'col-lg-7 mb-5 mb-lg-0 px-[15px]',
        headerContainer: 'mb-4',
        headerTitle: 'text-primaryColor uppercase tracking-[5px]',
        headerSubtitle: 'text-[#fff]',
        headerSubtitleSpan: 'text-primaryColor',
        brief: 'text-[#fff] pb-[1rem]',
        contentList: 'list-inline text-[#fff] m-0',
        iconContainer: 'py-2 flex place-items-center',
        listIcon: 'ri-check-line text-primaryColor mr-3 text-[1.2rem] font-[900]',
        rightContainer: 'col-lg-5',
        card: 'card border-0',
        cardHeader: 'card-header bg-primaryColor text-center p-4',
        cardHeaderButton: 'text-[#fff] m-0',
        cardBody: 'card-body rounded-bottom bg-[#fff] p-5',
        cardInputContainer: 'form-group',
        inputElement: 'form-control p-4',
        selectElement: 'custom-select px-4 h-[47px]',
        signUpButton: 'btn text-[#fff] bg-primaryColor hover:bg-primaryDarkColor hover:text-[#fff] btn-block py-3 w-full',
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.mainRow}>
                    <div className={styles.leftContainer}>
                        <div className={styles.headerContainer}>
                            <h6 className={styles.headerTitle}>Mega Offer</h6>
                            <h1 className={styles.headerSubtitle}>
                                <span className={styles.headerSubtitleSpan}>
                                    30% OFF
                                </span>
                                &nbsp;For Honeymoon
                            </h1>
                        </div>
                        <p className={styles.brief}>
                            Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo dolor lorem ipsum ut sed eos,
                            ipsum et dolor kasd sit ea justo. Erat justo sed sed diam. Ea et erat ut sed diam sea ipsum est
                            dolor
                        </p>
                        <ul className={styles.contentList}>
                            <li className={styles.iconContainer}>
                                <i className={styles.listIcon} />
                                Labore eos amet dolor amet diam
                            </li>
                            <li className={styles.iconContainer}>
                                <i className={styles.listIcon} />
                                Etsea et sit dolor amet ipsum
                            </li>
                            <li className={styles.iconContainer}>
                                <i className={styles.listIcon} />
                                Diam dolor diam elitripsum vero.
                            </li>
                        </ul>
                    </div>
                    <div className={styles.rightContainer}>
                        <div className={styles.card}>
                            <div className={styles.cardHeader}>
                                <h1 className={styles.cardHeaderButton}>Sign Up Now</h1>
                            </div>
                            <div className={styles.cardBody}>
                                <form>
                                    <div className={styles.cardInputContainer}>
                                        <input type="text" className={styles.inputElement} placeholder="Your name" required="required" />
                                    </div>
                                    <div className={styles.cardInputContainer}>
                                        <input type="email" className={styles.inputElement} placeholder="Your email" required="required" />
                                    </div>
                                    <div className={styles.cardInputContainer}>
                                        <select className={styles.selectElement} defaultValue={"0"}>
                                            <option value="0">Select a destination</option>
                                            <option value="1">destination 1</option>
                                            <option value="2">destination 2</option>
                                            <option value="3">destination 3</option>
                                        </select>
                                    </div>
                                    <div>
                                        <button className={styles.signUpButton} type="submit">Sign Up Now</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
