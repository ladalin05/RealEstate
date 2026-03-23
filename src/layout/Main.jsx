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
import TypesPage from '../pages/Types';
import AboutUsPage from '../pages/AboutUs';
import { useFetchCategory } from '../hooks/useFetchHome';
import { useFectPropertyByCity, useFetchProperty } from '../hooks/useFectProperty';
import '../assets/styles/layout.css';
import '../assets/styles/global.css';

const Main = ({ menu }) => {
    const [isHeaderFixed, setIsHeaderFixed] = useState(false);
    const categories = useFetchCategory();
    const properties = useFetchProperty();
    const contact_info = useFetchContact();
    const city_property = useFectPropertyByCity();

    useEffect(() => {
        const onScroll = () => {
            // Threshold increased for a smoother visual "pop"
            setIsHeaderFixed(window.scrollY > 100);
        };
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);
    return (
        <div className="site-wrapper">
            <header className={`main-header ${isHeaderFixed ? 'header-sticky' : ''}`}>
                <Header navigationLinks={menu} isLoggedIn={isLoggedIn()} />
            </header>
            
            <main className="content-area min-vh-100">
                <Routes>
                    <Route path='/' element={<HomePage properties={properties} categories={categories} city_property={city_property} />} />
                    <Route path='/home' element={<HomePage properties={properties} categories={categories} city_property={city_property} />} />
                    <Route path='/properties' element={<PropertyListPage properties={properties} />} />
                    <Route path='/types' element={<TypesPage categories={categories} />} />
                    <Route path='/about-us' element={<AboutUsPage />} />
                    <Route path='/contact-us' element={<ContactUsPage contact_info={contact_info} />} />
                    <Route path='/property-detail' element={<PropertyDetailsPage />} />
                    <Route path='/login' element={<LoginPage />} />
                    <Route path='/register' element={<RegisterPage />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
};

export default Main;
