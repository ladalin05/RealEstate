import React, { useState, useEffect  } from 'react';
import ReportModal from '../../components/Modals/ReportModal';
import ShareModal from '../../components/Modals/ShareModal';
import { Image } from '../../components/GeneralComponent';
import { useLocation } from 'react-router-dom';
import { formatPrice } from '../../services/functionService';
import PropertyCard from '../../components/Card/PropertyCard';
import '../../assets/styles/property_detail.css';
import { useFetchPropById } from '../../hooks/useFectData';

// --------------------------------------------------------

const PropDetail = ({properties, user}) => {
    // --- JSX RENDER START ---
    const { gallery_images, latest_list, property, related_list } = properties;
    const user_image = user?.avatar.replace("http://127.0.0.1:8000/storage", '');
    const handleReportSubmit = (e) => {
        e.preventDefault();
        alert('Report Submitted (Placeholder)');
    };
    console.log(properties);

    return (
        <>
        <div className="property-details-wrap mt-5">
            <div className="single-property-details py-4">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 col-lg-12 ">
                            {/* Property Header (Main Image) */}
                            <div> 
                                <Image type_image={property.image ? `storage/`+property.image : null }  defaultImage={'http://127.0.0.1:8000/upload/placeholder_img.jpg'} type_name={property.title} className={"img-fluid w-100 rounded"} />
                            </div>

                            {/* Property Title, Location, Price, and Actions */}
                            <div className="listing-desc-wrap mt-4">
                                <div className="list-details-wrap">
                                    <div id="description" className="list-details-section">
                                        <div className="row">
                                            <div className="float-start col-8">
                                                <h2 className="h3 mb-1">
                                                    {property.title}
                                                    {/* Purpose Tag (Rent/Sale) */}
                                                    <span className={`badge ms-2 ${property.purpose === 'Rent' ? 'bg-primary' : 'bg-success'}`}>
                                                        {property.purpose === 'Rent' ? 'Rent' : 'Sale'}
                                                    </span>
                                                    {/* Verified Icon */}
                                                    {property.verified === 'YES' && (
                                                        <i className="fa fa-check-circle text-primary ms-2" title="Verified"></i>
                                                    )}
                                                </h2>
                                                <p className="text-muted mb-2">
                                                    <i className="fa fa-map-marker me-1"></i>
                                                    {property.location_name || property.address}
                                                </p>
                                                {/* Report and Share Buttons */}
                                                <div className="mt-2">
                                                    <ul className="list-inline mb-0">
                                                        <li className="list-inline-item">
                                                            {/* Using data-bs-toggle for Bootstrap Modal */}
                                                            <button className="btn btn-sm btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#vfx-report-popup">
                                                                <i className="fa fa-book me-1"></i>Reports
                                                            </button>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <button className="btn btn-sm btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#vfx-social-media-popup">
                                                                <i className="fa fa-share-alt me-1"></i>Share
                                                            </button>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            {/* Property Price */}
                                            <div className="text-end col-3">
                                                <h3 className="text-primary mb-0">
                                                    {formatPrice(property.price)}
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="listing-desc-wrap mt-4">
                                <div className="list-details-wrap">

                                    {/* PROPERTY DESCRIPTION / INFO */}
                                    <div id="description" className="list-details-section">
                                        <h4 className="pb-2">Property Information</h4>
                                        <div className="overview-content">
                                            <p dangerouslySetInnerHTML={{ __html: property.description.replace(/, /g, "<br />") }} />
                                            <p className="mt-3" style={{color: '#606060'}} >
                                                <b>Address</b> : {property.address}
                                            </p>
                                        </div>

                                        {/* LOCATION MAP */}
                                        <div className="mt-4" >
                                            <h5 className="list-subtitle pb-2">Location</h5>
                                            <div className="ratio ratio-16x9" style={{ '--bs-aspect-ratio': '50%' }}>
                                                <iframe title="Property Location Map" width="100%" height="350" style={{ border: 0 }}
                                                    loading="lazy" allowFullScreen referrerPolicy="no-referrer-when-downgrade"
                                                    src={`https://maps.google.com/maps?q=${property.latitude},${property.longitude}&hl=en&z=14&output=embed`}
                                                ></iframe>
                                            </div>
                                        </div>
                                    </div>

                                    {/* PROPERTY GALLERY */}
                                    <div id="gallery" className="list-details-section">
                                        <h4 className="pb-2">Property Gallery</h4>
                                        {/* Simplified Carousel structure for React/Bootstrap integration */}
                                        <div id="propertyGalleryCarousel" className="carousel slide" data-bs-ride="carousel">
                                            {/* Indicators */}
                                            <div className="carousel-indicators">
                                                {gallery_images.map((img, i) => (
                                                    <button key={img.id} type="button" data-bs-target="#propertyGalleryCarousel" data-bs-slide-to={i}
                                                        className={i === 0 ? 'active' : ''} aria-current={i === 0 ? 'true' : 'false'} aria-label={`Slide ${i + 1}`}
                                                    ></button>
                                                ))}
                                            </div>
                                            {/* Slides */}
                                            <div className="carousel-inner">
                                                {gallery_images.map((img, i) => (
                                                    <div key={img.id} className={`carousel-item ${i === 0 ? 'active' : ''}`}>
                                                        <Image type_image={img.image.replace("upload/placeholder_img.jpg", '') ? `storage/`+img.image : null }  defaultImage={'http://127.0.0.1:8000/upload/placeholder_img.jpg'} type_name={`Gallery slide ${i + 1}`} className={"d-block w-100"} />
                                                    </div>
                                                ))}
                                            </div>
                                            {/* Controls */}
                                            <button className="carousel-control-prev" type="button" data-bs-target="#propertyGalleryCarousel" data-bs-slide="prev">
                                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                                <span className="visually-hidden">Previous</span>
                                            </button>
                                            <button className="carousel-control-next" type="button" data-bs-target="#propertyGalleryCarousel" data-bs-slide="next">
                                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                                <span className="visually-hidden">Next</span>
                                            </button>
                                        </div>
                                    </div>

                                    {/* CORE PROPERTY DETAILS */}
                                    <div className="list-details-section">
                                        <h4 className=" pb-2">Property Details</h4>
                                        <ul className="list-unstyled-2 row g-2">
                                            <li className="col-6">Type : <span>{property.type_name}</span></li>
                                            <li className="col-6">Purpose : <span>{property.purpose}</span></li>
                                            <li className="col-6">Bedrooms: <span>{property.bedrooms}</span></li>
                                            <li className="col-6">Bathrooms: <span>{property.bathrooms}</span></li>
                                            <li className="col-6">Area: <span>{property.area}</span></li>
                                            <li className="col-6">Furnishing: <span>{property.furnishing}</span></li>
                                        </ul>
                                    </div>

                                    {/* AMENITIES */}
                                    {property.amenities != null && (
                                        <div className="list-details-section">
                                            <h4 className="pb-2">Amenities</h4>
                                            <ul className="list-unstyled-2 row row-cols-md-3 g-2">
                                                {property.amenities.split(',').map((amenity, index) => (
                                                    <li key={index} className="col"><i className="fa fa-check text-success me-1"></i>{amenity}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                    
                                    {/* FEATURES */}
                                    {property.features != null && (
                                        <div className="list-details-section">
                                            <h4 className="pb-2">Features</h4>
                                            <ul className="list-unstyled-2 row row-cols-md-3 g-2">
                                                {property.features.split(',').map((feature, index) => (
                                                    <li key={index} className="col"><i className="fa fa-check text-success me-1"></i>{feature}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {/* FLOOR PLAN IMAGE */}
                                    {property.floor_plan_image && (
                                        <div id="floor_plan" className="list-details-section">
                                            <h4 className="pb-2">Floor Plan Image</h4>
                                            <div className="text-center">
                                                <Image type_image={property.floor_plan_image || null }  defaultImage={'http://127.0.0.1:8000/upload/placeholder_img.jpg'} type_name={"Floor Plan"} className={"img-fluid w-100"} />
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* SIDEBAR RIGHT (Placeholder for an included component) */}
                        <div className="col-xl-4 col-lg-12">
                            <div className="card p-3 d-flex mb-4 flex-row align-items-center shadow-sm">
                                <div className="user-avatar-placeholder me-3">
                                    <Image type_image={user_image ? user.avatar : null} efaultImage={'https://img.freepik.com/premium-vector/user-icon-icon_1076610-59410.jpg'} className={"rounded-circle m-auto w-100 border border-secondary"} />
                                </div>
                                <div className="user-name-text">
                                    <h5 className="mb-0">Viavi Webtech</h5>
                                </div>
                            </div>
                            <div className="latest-property-section">
                                <h2>Latest Property</h2>
                                {latest_list.map((latest) => (
                                    <article key={latest.id} className="property-card">
                                        <div className="property-image-container">
                                                <Image type_image={latest.image ? `storage/`+latest.image : null }  defaultImage={'http://127.0.0.1:8000/upload/placeholder_img.jpg'} type_name={latest.title} style={{width: "45%", height: "auto",}} className={"property-image rounded"} />
                                            
                                            <div className="property-details ms-3">
                                                <span className={`property-category-tag `}>
                                                    {latest.category}
                                                </span>
                                                <h3 className="property-title">{latest.title}</h3>
                                                <p className="property-location">
                                                    <i className="fas fa-map-marker-alt"></i> {latest.location || latest.address}
                                                </p>
                                                <div className="property-price-tag">{formatPrice(property.price)}</div>
                                            </div>
                                        </div>
                                        <hr className="card-separator" />
                                    </article>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* LISTING DETAILS INFO ENDS */}

            {/* SIMILAR LISTING STARTS */}
            <div className="similar-listing-wrap bg-white py-4 mt-3">
                <div className="container">
                    <div className="col-12 px-0">
                        <div className="similar-listing">
                            <div className="section-title pb-2 mb-3">
                                <h2 className="h4">Similar Properties</h2>
                            </div>

                            <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4">
                                {related_list.map((related) => (
                                    <div key={related.id} className="col-lg-4 col-md-6 col-sm-12" >
                                        <PropertyCard property={related} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Bottom Banner Placeholder */}
                    {/* <div className="container py-3"><div className="row"><div className="col-12 text-center">... Banner Content ...</div></div></div> */}
                </div>
            </div>
            {/* SIMILAR LISTING ENDS */}

            {/* MODAL SECTIONS (Rending Modals at the component's top level for access) */}
            <ReportModal onSubmit={handleReportSubmit} propertyId={property.id} />
            <ShareModal propertyTitle={property.title} propertyUrl={`/properties/${property.slug}/${property.id}`} />
        </div>
        </>
    );
};
export default PropDetail;