import React from 'react'

export default function CommentForm() {
    return (
        <div className="bg-[#fff] mb-3 p-[30px]">
            <h4 className="-uppercase mb-4 tracking-[5px]">Leave a comment</h4>
            <form>
                <div className="form-group">
                    <label for="name">Name *</label>
                    <input type="text" className="form-control" id="name"/>
                </div>
                <div className="form-group">
                    <label for="email">Email *</label>
                    <input type="email" className="form-control" id="email"/>
                </div>
                <div className="form-group">
                    <label for="website">Website</label>
                    <input type="url" className="form-control" id="website"/>
                </div>

                <div className="form-group">
                    <label for="message">Message *</label>
                    <textarea id="message" cols="30" rows="5" className="form-control"></textarea>
                </div>
                <div className="form-group mb-0">
                    <input type="submit" value="Leave a comment" className="bg-primaryColor hover:bg-primaryDarkColor text-[#fff] font-weight-semi-bold py-2 px-3"/>
                </div>
            </form>
        </div>
    )
}
