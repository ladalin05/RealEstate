import React, { useState } from "react";
import { BannerSection } from "../components/Section/BannerSection";
import sectionImage from '../assets/images/breadcrumb.jpg';
import { SectionHeader } from "../components/Section/SectionHeader";
import CategoryItem from "../components/Card/CategoryItem";

// --- Main Component ---

const TypesPage = ({categories}) => {

    const {category, loading, error} = categories;

    // Suggested refinement for your return statement
    return (
        <div className="container-fluid">
            <BannerSection sectionImage={sectionImage} section_title="Types" currentPage="Types" />
            
            <section className="category-section py-5 py-md-6 bg-white">
                <div className="container">
                    {/* Add a header section for context */}
                    <div className="text-center mb-5">
                        <h2 className="display-6 fw-bold text-dark">Explore Categories</h2>
                        <p className="text-muted">Find exactly what you're looking for.</p>
                    </div>

                    <div className="row g-4"> {/* Use gap utilities for better spacing */}
                        {loading ? (
                            <div className="d-flex justify-content-center p-5">
                                <div className="spinner-border text-primary" role="status" />
                            </div>
                        ) : category?.length > 0 ? (
                            category.map((type_data) => (
                                <div key={type_data.id} className="col-lg-3 col-md-4 col-sm-6">
                                    {/* Ensure CategoryItem has a CSS class for hover effects */}
                                    <CategoryItem type={type_data} />
                                </div>
                            ))
                        ) : (
                            <div className="text-center text-muted">No categories available.</div>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TypesPage;