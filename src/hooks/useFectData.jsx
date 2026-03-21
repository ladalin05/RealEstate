import React, { useEffect, useState } from 'react'
import { getPropertyByID } from '../core/api/Property';


export const useFetchPropById = (propertyId) => {
    const [property, setProperty] = useState(null);
    const [propLoading, setPropLoading] = useState(true);
    const [propError, setPropError] = useState(null);

    useEffect(() => {
        if (!propertyId) return;

        const fetchProp = async () => {
            try {
                setPropLoading(true);

                const data = await getPropertyByID(propertyId);
                setProperty(data);

            } catch (error) {
                console.error("Error:", error.message);
                setPropError(error.message);
            } finally {
                setPropLoading(false);
            }
        };

        fetchProp();
    }, [propertyId]); // dependency added

    return { property, propLoading, propError };
};
