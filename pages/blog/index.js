import React from 'react'
import Booking from '../../components/Booking'
import Banner from '../../components/Banner'
import Format from '../../layout/format'
import Search from '../../components/_child/Search'
import Author from '../../components/_child/Author'
import Category from '../../components/_child/Category'
import RecentPost from '../../components/_child/RecentPost'
import Tags from '../../components/_child/Tags'
import Image from 'next/image'
import { blogPostData } from '../../components/_data/BlogPostData'
import Blog from '../../components/Blog'
import Pagination from '../../components/_child/Pagination'

export default function index() {
    return (
        <Format title="Blog">
            <Banner pageTitle="Blog" />
            <Booking />
            <div className="container-fluid py-5">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="row pb-3">
                                <Blog isBlogDetailed={true}/>
                                <div className="col-12">
                                    <Pagination />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mt-5 mt-lg-0">
                            <Author />
                            <Search />
                            <Category />
                            <RecentPost />
                            <Tags />
                        </div>
                    </div>
                </div>
            </div>
        </Format>
    )
}
