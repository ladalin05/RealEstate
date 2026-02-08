import React, { useState } from "react";
import { BannerSection } from "../components/Section/BannerSection";
import sectionImage from '../assets/images/breadcrumb.jpg';
import { SectionHeader } from "../components/Section/SectionHeader";
import CategoryItem from "../components/Card/CategoryItem";

// --- Main Component ---

const TypesPage = ({categories}) => {

    const {category, loading, error} = categories;

    return (
        <div className="homepage-content">
            <BannerSection sectionImage={sectionImage} section_title="Types" currentPage="Types" />
            <div className="vfx-team-section-area bg-light py-5">
                <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="row justify-content-center">
                            { loading ? (
                                <div className="spinner-border text-primary "  style={{ width: '3rem', height: '3rem', borderWidth: '0.35rem' }}  role="status" >
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            ) : !error && category && category.length > 0 ? (
                                category.map((type_data) => (
                                    <div key={type_data.id} className="col-lg-3 col-md-6 col-sm-12" >
                                        <CategoryItem key={type_data.id} type={type_data} />
                                    </div>
                                ))
                            ) : (
                                !loading && !error && <p>No categories found.</p>
                            )}
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default TypesPage;