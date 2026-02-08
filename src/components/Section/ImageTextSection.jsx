import React from 'react';

export const ImageTextSection = ({ content, image, bgColor = 'white', reverse = false, isVideo = false }) => {
    
    // Determine the order of columns based on the 'reverse' prop
    const firstCol = (
        <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
            <div className="about-text res-box">
                <div dangerouslySetInnerHTML={{ __html: content }} />
            </div>
        </div>
    );

    const secondCol = (
        <div className="col-lg-6 col-md-12">
            {isVideo ? (
                <div className="popup-vid p-2 border rounded shadow-sm"> 
                    <img src={image} alt="content-img" className="popup-img img-fluid rounded" /> 
                    <div className="video-overlay"><i className="fa fa-play-circle fa-3x"></i></div>
                </div>
            ) : (
                <img src={image} alt="content-img" className="img-fluid rounded shadow-sm" />
            )}
        </div>
    );
    
    const bgClass = bgColor === 'cb' ? 'bg-light-blue' : 'bg-white';

    return (
        <div className={`about-section pt-5 pb-5 ${bgClass}`}>
            <div className="container">
                <div className="row align-items-center">
                    {reverse ? [firstCol, secondCol] : [secondCol, firstCol]}
                </div>
            </div>
        </div>
    );
};