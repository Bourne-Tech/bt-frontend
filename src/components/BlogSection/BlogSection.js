import React from 'react'
import blogs from '../../api/blogs'



const BlogSection = (props) => {

    return (
        <section className="blog pt-125 pb-55">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 mx-auto">
                        <div className="sectionTitle text-center mb-60">
                            <span className="sectionTitle__small justify-content-center">
                                {/* <i className="fa-solid fa-heart btn__icon"></i> */}
                                words from our leaders
                            </span>
                            <h2 className="sectionTitle__big">What Our CEO Says</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {blogs.slice(0, 3).map((blog, Bitem) => (
                        <div className={blog.col} key={Bitem}>
                            <div className={`blogBlock ${blog.styleClass} mb-60`}>
                                <figure className="blogBlock__figure">
                                    <img src={blog.screens} alt="Gainioz Blog" className="blogBlock__figure__image" />
                                </figure>
                                <div className="blogBlock__content">
                                    <div className="blogBlock__header">
                                        {/* <span className="blogBlock__tag tag mb-20">{blog.thumb}</span> */}
                                        <h2 className="blogBlock__heading heading text-uppercase mb-20">
                                            {blog.title}</h2>
                                    </div>
                                    <div className="blogBlock__body mb-30">
                                        <p className="blogBlock__text text">
                                            {blog.description}
                                        </p>
                                    </div>
                                    <div className="blogBlock__meta">
                                        {/* <p className="row justify-content-center"><b>{blog.author}</b></p> */}
                                        <ul className="blogBlock__meta__list">
                                            <li>
                                                {/* <img className="blogBlock__metaUser__thumb" src={blog.authorImg} alt="Gainioz User" /> */}
                                                <span className="blogBlock__metaUser__name">{blog.author}</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default BlogSection;