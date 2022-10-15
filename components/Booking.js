import React from 'react'

export default function Booking() {

    const styles = {
        wrapper: 'mt-5 bLG:relative bLG:place-items-center bLG:top-[-6.5rem] bLG:mx-auto bLG:my-0 bLG:z-10 bLG:max-w-[990px] bXL:max-w-[1140px]',
        container: '',
        dataContainer: 'p-[2rem] grid place-items-center bg-[#fff] my-[3rem] mx-[2rem] bSM:mx-[8rem] booking__shadow bLG:mx-[2rem] bXL:mx-[0.8rem]',
        columnContainer: 'flex flex-col gap-[1rem] place-items-center justify-center w-full bLG:flex-row bLG:gap-[2rem]',
        column: 'w-full',
        form: 'flex flex-col gap-[1rem] place-items-center justify-center bLG:flex-row bLG:gap-[2rem]',
        elementWrapper: 'w-full',
        element: 'w-full',
        selectElement: 'w-full h-[47px] mb-0 px-[1rem] h-[3rem] booking__border bg-[transparent] bLG:w-[9.3rem] bXL:w-[11.5rem]',
        dateElementWrapper: '',
        dateElement: 'w-full p-[1.5rem] px-[1.3rem] booking__border h-[3rem] bLG:w-[9.3rem] bXL:w-[11.5rem]',
        buttonElement: 'w-full py-[0.6rem] px-[0.75rem] bg-primaryColor border border-primaryColor text-[#fff] m-0 text-center select-none font-[400] hover:bg-[#669928] hover:border-[#5f8f25] bLG:py-[0.7rem] bLG:px-[2rem]',
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.dataContainer}>
                    <div className={styles.columnContainer}>
                        <div className={styles.column}>
                            <div className={styles.form}>
                                <div className={styles.elementWrapper}>
                                    <div className={styles.element}>
                                        <select className={styles.selectElement} defaultValue={"1"}>
                                            <option value="1">Destination</option>
                                            <option value="2">Destination 1</option>
                                            <option value="3">Destination 2</option>
                                            <option value="4">Destination 3</option>
                                        </select>
                                    </div>
                                </div>
                                <div className={styles.elementWrapper}>
                                    <div className={styles.element}>
                                        <div className={styles.dateElementWrapper} id="date1">
                                            <input type="text" className={styles.dateElement} placeholder="Depart Date"/>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.elementWrapper}>
                                    <div className={styles.element}>
                                        <div className={styles.dateElementWrapper} id="date2">
                                            <input type="text" className={styles.dateElement} placeholder="Return Date" />
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.elementWrapper}>
                                    <div className={styles.element}>
                                        <select className={styles.selectElement} defaultValue={"0"}>
                                            <option value="0">Duration</option>
                                            <option value="1">Duration 1</option>
                                            <option value="2">Duration 2</option>
                                            <option value="3">Duration 3</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.column}>
                            <button className={styles.buttonElement} type="submit">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
