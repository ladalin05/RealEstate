import React, { useEffect, useState } from "react";
import { PropertySection } from '../../components/Section/PropertySection';
import { useFetchProperty} from "../../hooks/useFectProperty";
import { BannerSection } from "../../components/Section/BannerSection";
import { FilterSection } from "../../components/Section/FilterSection";
import sectionImage from '../../assets/images/breadcrumb.jpg';

// --- Main Component ---

const PropertyListPage = ({properties}) => {
    const { property, propLoading, properror } = properties;
    const [propertyData, setPropertyData] = useState([]);
    const [filters, setFilters] = useState({ search_text: "", purpose: "", type_id: "", location_id: "", bedrooms: "", bathrooms: "", furnishing: "", verified: "",  price_range: "",  });
    
    useEffect(() => {
        if (property) {
            setPropertyData(property);
        }
    }, [property]);

    useEffect(() => {
        Object.entries(filters).forEach(([key, value]) => {
            let properties = property || [];
            if(value !== ""){
                if(value !== "All"){
                    properties = properties.filter((prop) => (typeof prop[key] === "string" ? (prop[key] || "").toLowerCase() : (prop[key] || null)) === (typeof value === "string" ? (value || "").toLowerCase() :  (value || null)) )
                }
                setPropertyData(properties);
            }
        });
    }, [filters]);


    return (
        <div className="homepage-content">
            <BannerSection sectionImage={sectionImage} section_title="Property" currentPage="Property" />
            <div className="row justify-content-center">
                <div className="col-3  py-5">
                    <FilterSection filters={filters} setFilters={setFilters} />
                </div>
                <div className="col-7">
                    <PropertySection title="Property List" list={propertyData} propLoading={propLoading}
                    sectionClass="latest-property-section" paginationClass="vfx-latest-property-pagination" />
                </div>
                
            </div>
        </div>
    );
};

export default PropertyListPage;