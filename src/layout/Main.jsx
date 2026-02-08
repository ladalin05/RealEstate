import React, { useEffect, useState, useContext } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useFetchContact, useFetchMenu } from '../hooks/useFectMain'; 
import { isLoggedIn } from '../core/api/authApi';
import HomePage from '../pages/Home';
import LoginPage from '../pages/Auth/Login';
import RegisterPage from '../pages/Auth/Register';
import PropertyDetailsPage from '../pages/Property/PropertyDetail';
import PropertyListPage from '../pages/Property/PropertyList';
import ContactUsPage from '../pages/ContactUs';
import '../assets/styles/global.css';
import TypesPage from '../pages/Types';
import AboutUsPage from '../pages/AboutUs';
import { useFetchCategory } from '../hooks/useFetchHome';
import { useFetchProperty } from '../hooks/useFectProperty';

const Main = ({menu}) => {
    const [isHeaderFixed, setIsHeaderFixed] = useState(false);
    const categories = useFetchCategory();
    const properties = useFetchProperty();
    const contact_info = useFetchContact(); 

    useEffect(() => {
        const onScroll = () => setIsHeaderFixed(window.scrollY > 70);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);



    const headerStyle = { position: isHeaderFixed ? 'fixed' : 'relative' };

    return (
        <div className='container-fluid py-1' style={{padding: '0px'}} >
            <header className='header' style={headerStyle}>
                <Header navigationLinks={menu} isLoggedIn={isLoggedIn()} />
            </header>
            <main className='main'>
                <Routes>
                    {/* Home is protected: only accessible if logged in */}
                    <Route path='/' element={<HomePage properties={properties} categories={categories} /> } />
                    <Route path='/home' element={<HomePage properties={properties} categories={categories} /> } />
                    <Route path='/properties' element={<PropertyListPage properties={properties} /> } />
                    <Route path='/types' element={<TypesPage categories={categories}  /> } />
                    <Route path='/about-us' element={<AboutUsPage /> } />
                    <Route path='/contact-us' element={<ContactUsPage contact_info={contact_info} /> } />

                    <Route path='/property-detail' element={<PropertyDetailsPage /> } />

                    {/* Auth routes only accessible if NOT logged in */}
                    <Route path='/login' element={<LoginPage /> } />
                    <Route path='/register' element={<RegisterPage />  } />
                </Routes>
            </main>

            {/* Optional footer */}
            <Footer />
        </div>
    );
};

export default Main;
