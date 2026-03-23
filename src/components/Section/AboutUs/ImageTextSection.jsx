import React from 'react';

export const ImageTextSection = ({ content, image, bgColor = 'white', reverse = false }) => {
    const bgClass = bgColor === 'cb' ? 'bg-light-blue' : 'bg-white';

    return (
        <section className={`py-5 ${bgClass}`}>
            <div className="container">
                <div className="row align-items-center">
                    {/* Image Column */}
                    <div className={`col-lg-6 ${reverse ? 'order-lg-2' : 'order-lg-1'}`}>
                        <img src={image} alt="About Us" className="img-fluid rounded shadow" />
                    </div>
                    
                    {/* Text Column */}
                    <div className={`col-lg-6 ${reverse ? 'order-lg-1' : 'order-lg-2'}`}>
                        <div className="p-lg-4 res-box">
                            <div dangerouslySetInnerHTML={{ __html: content }} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};