import React, { useEffect, useState } from "react";
import { PropertySection } from '../../components/Section/PropertySection';
import { useFetchProperty} from "../../hooks/useFectProperty";
import { BannerSection } from "../../components/Section/BannerSection";
import { FilterSection } from "../../components/Section/FilterSection";
import sectionImage from '../../assets/images/breadcrumb.jpg';
import { useLocation } from "react-router-dom";

// --- Main Component ---

const PropertyListPage = ({properties}) => {
    const { property, propLoading, properror } = properties;
    const [propertyData, setPropertyData] = useState([]);
    const [filters, setFilters] = useState({ search_text: "", purpose: "", type_id: "", location_id: "", bedrooms: "", bathrooms: "", furnishing: "", verified: "",  price_range: "",  });
    const location = useLocation();
    const { filtterData } = location.state || {};

     useEffect(() => {
        if (!property) return;
        const combinedFilters = {
            ...filters,
            ...filtterData
        };
        const cleanFilters = Object.fromEntries(
            Object.entries(combinedFilters).filter(
                ([_, value]) =>
                    value !== "" &&
                    value !== null &&
                    value !== undefined &&
                    value !== "All"
            )
        );
        let filtered = [...property];
        Object.entries(cleanFilters).forEach(([key, value]) => {
            filtered = filtered.filter((prop) => {
                const propValue = prop[key];
                if (typeof propValue === "string") {
                    return (propValue || "")
                        .toLowerCase()
                        .includes((value || "").toLowerCase());
                }
                if (typeof propValue === "number") {
                    return propValue === Number(value);
                }
                if (typeof propValue === "boolean") {
                    return propValue === Boolean(value);
                }
                return propValue === value;
            });
        });

        setPropertyData(filtered);

    }, [property, filters, filtterData]);

    return (
        <div className="container-fluid property-page-container">
            <BannerSection sectionImage={sectionImage} section_title="Property" currentPage="Property" />
            <div className="row">
                {/* Sidebar (4 cols) */}
                <div className="col-lg-4 col-md-12 mb-4">
                    <FilterSection filters={filters} setFilters={setFilters} />
                </div>
                {/* Content (8 cols) */}
                <div className="col-lg-8 col-md-12">
                    <PropertySection list={propertyData} propLoading={propLoading} />
                </div>
            </div>
        </div>
    );
};

export default PropertyListPage;