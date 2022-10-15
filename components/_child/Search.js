import React from 'react'

export default function Search() {
    return (
        <div className="mb-5">
            <div className="bg-[#fff] p-[30px]">
                <div className="input-group">
                    <input type="text" className="form-control p-4" placeholder="Keyword" />
                    <div className="input-group-append">
                        <span className="input-group-text bg-primaryColor border-primaryColor text-[#fff] rounded-none h-full">
                            <i className="ri-search-line" />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
