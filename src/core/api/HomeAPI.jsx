import API from "./API";

export const getCategory = async () => {
    try{
        const respones = await API.get('/category');
        return respones;
    } catch(error) {
        console.error('Error is', error.message);
    }
}