import React from 'react'
import Image from 'next/image'
import Booking from '../../components/Booking'
import Banner from '../../components/Banner'
import Format from '../../layout/format'
import Author from '../../components/_child/Author'
import Search from '../../components/_child/Search'
import Category from '../../components/_child/Category'
import RecentPost from '../../components/_child/RecentPost'
import Tags from '../../components/_child/Tags'
import CommentList from '../../components/_child/CommentList'
import CommentForm from '../../components/_child/CommentForm'
import { blogPostData } from '../../components/_data/BlogPostData'

export default function index() {

    const styles = {
        wrapper: 'container-fluid py-5',
        container: 'container py-5',
    }

    return (
        <Format title="Single" selected="/single" isDropDown={true}>
            <Banner pageTitle="Single"/>
            <Booking />
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="pb-3">
                                <div className="blog-item">
                                    <div className="relative">
                                        <img className="img-fluid w-100" src={blogPostData[0].imageSrc} alt="" />
                                        <div className="blog-date">
                                            <h6 className="font-weight-bold mb-[-0.3rem]">01</h6>
                                            <small className="text-[#fff] uppercase">Jan</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-[#fff] mb-3 p-[30px]">
                                    <div className="d-flex mb-3">
                                        <a className="text-primaryColor hover:text-primaryDarkColor uppercase text-decoration-none">Admin</a>
                                        <span className="text-primaryColor px-2">|</span>
                                        <a className="text-primaryColor hover:text-primaryDarkColor uppercase text-decoration-none">Tours & Travel</a>
                                    </div>
                                    <h2 className="mb-3 font-[700]">Dolor justo sea kasd lorem clita justo diam amet</h2>
                                    <p className='mb-[1rem] text-[#656565]'>Sadipscing labore amet rebum est et justo gubergren. Et eirmod ipsum sit diam ut
                                        magna lorem. Nonumy vero labore lorem sanctus rebum et lorem magna kasd, stet
                                        amet magna accusam consetetur eirmod. Kasd accusam sit ipsum sadipscing et at at
                                        sanctus et. Ipsum sit gubergren dolores et, consetetur justo invidunt at et
                                        aliquyam ut et vero clita. Diam sea sea no sed dolores diam nonumy, gubergren
                                        sit stet no diam kasd vero.</p>
                                    <p className='mb-[1rem] text-[#656565]'>Voluptua est takimata stet invidunt sed rebum nonumy stet, clita aliquyam dolores
                                        vero stet consetetur elitr takimata rebum sanctus. Sit sed accusam stet sit
                                        nonumy kasd diam dolores, sanctus lorem kasd duo dolor dolor vero sit et. Labore
                                        ipsum duo sanctus amet eos et. Consetetur no sed et aliquyam ipsum justo et,
                                        clita lorem sit vero amet amet est dolor elitr, stet et no diam sit. Dolor erat
                                        justo dolore sit invidunt.</p>
                                    <h4 className="mb-3 font-[500]">Est dolor lorem et ea</h4>
                                    <img className="img-fluid w-50 float-left mr-4 mb-2" src={blogPostData[1].imageSrc} />
                                    <p className='mb-[1rem] text-[#656565]'>Diam dolor est labore duo invidunt ipsum clita et, sed et lorem voluptua tempor
                                        invidunt at est sanctus sanctus. Clita dolores sit kasd diam takimata justo diam
                                        lorem sed. Magna amet sed rebum eos. Clita no magna no dolor erat diam tempor
                                        rebum consetetur, sanctus labore sed nonumy diam lorem amet eirmod. No at tempor
                                        sea diam kasd, takimata ea nonumy elitr sadipscing gubergren erat. Gubergren at
                                        lorem invidunt sadipscing rebum sit amet ut ut, voluptua diam dolores at
                                        sadipscing stet. Clita dolor amet dolor ipsum vero ea ea eos. Invidunt sed diam
                                        dolores takimata dolor dolore dolore sit. Sit ipsum erat amet lorem et, magna
                                        sea at sed et eos. Accusam eirmod kasd lorem clita sanctus ut consetetur et. Et
                                        duo tempor sea kasd clita ipsum et.</p>
                                    <h5 className="mb-3">Est dolor lorem et ea</h5>
                                    <img className="img-fluid w-50 float-right ml-4 mb-2" src={blogPostData[2].imageSrc} />
                                    <p className='mb-[1rem] text-[#656565]'>Diam dolor est labore duo invidunt ipsum clita et, sed et lorem voluptua tempor
                                        invidunt at est sanctus sanctus. Clita dolores sit kasd diam takimata justo diam
                                        lorem sed. Magna amet sed rebum eos. Clita no magna no dolor erat diam tempor
                                        rebum consetetur, sanctus labore sed nonumy diam lorem amet eirmod. No at tempor
                                        sea diam kasd, takimata ea nonumy elitr sadipscing gubergren erat. Gubergren at
                                        lorem invidunt sadipscing rebum sit amet ut ut, voluptua diam dolores at
                                        sadipscing stet. Clita dolor amet dolor ipsum vero ea ea eos. Invidunt sed diam
                                        dolores takimata dolor dolore dolore sit. Sit ipsum erat amet lorem et, magna
                                        sea at sed et eos. Accusam eirmod kasd lorem clita sanctus ut consetetur et. Et
                                        duo tempor sea kasd clita ipsum et. Takimata kasd diam justo est eos erat
                                        aliquyam et ut.</p>
                                </div>
                            </div>
                            <CommentList />
                            <CommentForm />
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
