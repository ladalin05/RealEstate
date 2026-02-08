import React from 'react'
import  API  from './API'

export const getMenu = async () => {
    try {
        const respone =  await API.get('/menus')
        return respone;
        
    } catch (error) {
        console.error('Error ', error.message())
    }
}


export const getContact = async () => {
    try {
        const respone = await API.get('/get-contact')
        return respone.data;
    } catch(error) {
        console.error('Error', error.message);
    }
}