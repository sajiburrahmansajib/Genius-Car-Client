import React from 'react';

const BannerItem = ({ slide }) => {
    const { image, id, prev, next } = slide
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className='carousel-img'>
                <img src={image} alt="" className="w-full" />
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
                <h1 className='font-bold text-6xl text-white'>
                    Affordable <br />
                    Price for Car <br />
                    Servicing
                </h1>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 w-2/5 left-24 top-1/2">
                <p className='text-white text-xl' >
                    There are many variations of passages of  available, but the majority have suffered alteration in some form.
                </p>
            </div>
            <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 left-24 top-3/4">
                <button className="btn rounded-lg btn-warning mr-5">Discover More</button>
                <button className="btn rounded-lg btn-outline btn-secondary">Latest Project</button>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-12">
                <a href={`#slide${prev}`} className="btn btn-circle mr-4 hover:bg-orange-500">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle hover:bg-sky-700">❯</a>
            </div>
        </div>
    );
};

export default BannerItem;