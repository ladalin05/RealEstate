import { useEffect, useState } from 'react'
import { getContact, getMenu } from '../core/api/MainApi';

export const useFetchMenu = () => {
    const [menu, setMenu] = useState(null);
    const [menuLoading, setMenuLoading] = useState(true);
    const [menuError, setMenuError] = useState(null);
    useEffect(() => {
        const fetchMenu = async () => {
            try {
                const data = await getMenu();
                setMenu(data.data.menus);
            } catch (error) {
                console.error('Error ', error.message);
            } finally {
                setMenuLoading(false);
            }
        }

        fetchMenu();
    },[])

    return {menu, menuLoading, menuError};
}


export const useFetchContact = () => {
    const [contact, setContact] = useState(null);
    const [contactLoading, setContactoading] = useState(true);
    const [contactError, setContactError] = useState(null);
    useEffect(() => {
        const fetchContact = async () => {
            try {
                const data = await getContact();
                setContact(data.user_info);
            } catch (error) {
                console.error('Error ', error.message);
            } finally {
                setContactoading(false);
            }
        }

        fetchContact();
    }, [])

    return {contact, contactLoading, contactError};
}


