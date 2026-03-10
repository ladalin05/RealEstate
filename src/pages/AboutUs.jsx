import React, { useState } from "react";
import { BannerSection } from "../components/Section/BannerSection";
import sectionImage from '../assets/images/breadcrumb.jpg';
import { ImageTextSection } from "../components/Section/ImageTextSection";
import '../assets/styles/about_us.css'

// --- Main Component ---

const AboutUsPage = () => {
    const data = {
            content1: "<h3>Welcome to Viavi Real Estate</h3><p>Welcome to Viavi Real Estate, where we turn houses into homes and dreams into reality. This Viavi Real Estate Portal is designed to make property management and browsing a breeze, offering a robust set of features tailored to the needs of today’s real estate market.<br /><br />At Viavi Real Estate, our unwavering commitment lies in crafting unparalleled real estate journeys. Our seasoned professionals, armed with extensive market knowledge, walk alongside you through every phase of your property endeavor. We prioritize understanding your unique aspirations, tailoring our expertise to match your vision.<br /><br />Discover your dream home effortlessly. Explore diverse properties and expert guidance for a seamless buying experience.</p>",
            image1: "http://127.0.0.1:8000/upload/placeholder_img.jpg",

            content2: "<h3>Discover What Sets Our Real Estate Expertise Apart</h3><p>Welcome to Viavi Real Estate, where we turn houses into homes and dreams into reality. This Viavi Real Estate Portal is designed to make property management and browsing a breeze, offering a robust set of features tailored to the needs of today’s real estate market.<br /><br />At Viavi Real Estate, our unwavering commitment lies in crafting unparalleled real estate journeys. Our seasoned professionals, armed with extensive market knowledge, walk alongside you through every phase of your property endeavor. We prioritize understanding your unique aspirations, tailoring our expertise to match your vision.<br /><br />Discover your dream home effortlessly. Explore diverse properties and expert guidance for a seamless buying experience.</p>",
            image2: "http://127.0.0.1:8000/upload/placeholder_img.jpg",

            siteName: "VFX Realty", 
            currencyCode: "USD" 
        };

    return (
        <div className="container-fluid">
            <BannerSection sectionImage={sectionImage} section_title="About Us" currentPage="About Us" />
            
            <div className="about-page bg-white">
                <ImageTextSection content={data.content1} image={data.image1} reverse={false} bgColor="white" />
                <ImageTextSection content={data.content2} image={data.image2} reverse={true} bgColor="cb" />

                {/* Call to Action Section */}
                <section className="py-5 bg-light">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8 text-center">
                                <h3 className="mb-4 fw-bold">List Your Properties on {data.siteName}!</h3>
                                <a href="/signup" className="btn btn-warning btn-lg px-5">Join Now</a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default AboutUsPage;