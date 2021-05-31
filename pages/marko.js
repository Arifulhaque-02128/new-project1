import React from 'react';
import Navbar from '../Components/Marko/Navbar/Navbar';
import Footer from '../Components/Marko/Footer/Footer';
import Founder from '../Components/Marko/Founder/Founder';
import JoinBeta from '../Components/Marko/JoinBeta/JoinBeta';
import BookCall from '../Components/Marko/BookCall/BookCall';
import Header from '../Components/Marko/Header/Header';
import Customers from '../Components/Marko/Customers/Customers';

const marko = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <Customers />
            {/* <Founder /> */}
            <JoinBeta />
            {/* <BookCall /> */}
            <Footer />
        </div>
    );
};

export default marko;