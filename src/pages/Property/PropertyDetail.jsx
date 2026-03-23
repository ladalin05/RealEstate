import React, { useState, useEffect  } from 'react';
import PropertyDetailSection from '../../components/Section/Property/PropertyDetailSection';
import { useFetchPropById } from '../../hooks/useFectData';
import { useLocation } from 'react-router-dom';
import '../../assets/styles/property_detail.css';
import '../../assets/styles/property.css';

// --------------------------------------------------------

const PropertyDetails = () => {
    
    const location = useLocation();
    const { propertyId } = location.state || {};
    const { property, propLoading, properror } = useFetchPropById(propertyId);
    const user = JSON.parse(localStorage.getItem("user"));

    // --- JSX RENDER START ---
    return (
        <>
            {/* LISTING DETAILS INFO STARTS */}
            {propLoading ? (
                <div className="spinner-container">
                    <div className="spinner-border text-primary" role="status" />
                </div>
            ) : properror ? (
                <div className="alert alert-danger">
                    Error loading property: {properror}
                </div>
            ) : property ? (
                <PropertyDetailSection user={user} properties={property} />
            ) : (
                <div className="text-center py-5">
                    <p className="text-muted">No properties found matching your criteria.</p>
                </div>
            )}
        </>
    );
};
export default PropertyDetails;