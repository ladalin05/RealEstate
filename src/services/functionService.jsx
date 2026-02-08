import React, { useState } from "react";
import { getPropertyByID, hanfavourite } from '../core/api/Property';



export const formatPrice = (p) => {
    const currencySymbol = '$'; 
    return `${currencySymbol}${new Intl.NumberFormat().format(p)}`;
};


export const showProperty = async (propertyId, navigate) => {
      try {
          const result = await getPropertyByID(propertyId);
          if (result.success) {
            navigate("/property-detail", { state: { propertyData: result } });
          }
      } catch (error) {
        console.error(error);
      }
}

export const handleFavourit = async (propertyId, setIsFavourite, isFavourite) => {
    try {
        const user = JSON.parse(localStorage.getItem("user"));
        setIsFavourite(!isFavourite);
        const dataFavorit = {user_id: user.id, post_id: propertyId};
        const favourite = await hanfavourite(dataFavorit);
        if(!favourite.success) {
          setIsFavourite(!isFavourite);
        }
        return isFavourite;
    } catch (error) {
      console.error(error);
    }
}
