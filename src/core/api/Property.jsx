import  API from "./API";


export const getProperty = async () => {
    try {
        const respone = await API.get('/property')
        return respone;
    } catch(error) {
        console.error('Error', error.message);
    }

}

export const getPropertyByID = async (id) => {
    try {
        const respone = await API.get(`/property/detail/${id}`)
        return respone.data;
    } catch(error) {
        console.error('Error', error.message);
    }

}

export const hanfavourite = async (dataFavorit) => {
    try {
        const respone = await API.post('/property/favourite', dataFavorit)
        return respone.data
    } catch(error) {
        console.error('Error', error.message)
    }
}

export const getFilterData = async () => {
    try {
        const respone = await API.get('/filter_data')
        return respone.data 
    } catch (error) {
        console.error('Error', error.message)
    }
}

export const getPropertyByCity = async () => {
    try {
        const respone = await API.get('/property/get-by-city')
        return respone.data 
    } catch (error) {
        console.error('Error', error.message)
    }
}