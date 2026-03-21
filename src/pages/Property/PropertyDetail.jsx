import React, { useState, useEffect  } from 'react';
import ReportModal from '../../components/Modals/ReportModal';
import ShareModal from '../../components/Modals/ShareModal';
import { Image } from '../../components/GeneralComponent';
import { useLocation } from 'react-router-dom';
import { formatPrice } from '../../services/functionService';
import PropertyCard from '../../components/Card/PropertyCard';
import '../../assets/styles/property_detail.css';
import { useFetchPropById } from '../../hooks/useFectData';
import PropDetail from './PropDetail';

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
                <PropDetail user={user} properties={property} />
            ) : (
                <div className="text-center py-5">
                    <p className="text-muted">No properties found matching your criteria.</p>
                </div>
            )}
        </>
    );
};
export default PropertyDetails;