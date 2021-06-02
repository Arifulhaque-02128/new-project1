import React from 'react';
import Navbar from '../Components/Marko/Navbar/Navbar';
import Footer from '../Components/Marko/Footer/Footer';
import Header from '../Components/ProductRoadmap/Header/Header';
import Requests from '../Components/ProductRoadmap/Feature/Requests';
import UpcomingFeatures from '../Components/ProductRoadmap/Feature/UpcomingFeatures';
import FeatureForm from '../Components/ProductRoadmap/Feature/FeatureForm';

const roadmap = () => {
    return (
        <div >
            <Navbar />
            <div style={{ width: "80vw", paddingBottom: "3rem", margin: "2rem auto"}}>
                <Header />
                <Requests />
                <UpcomingFeatures />
            </div>
            <div style={{ backgroundColor: "#E5F5FF", padding: "1vw 10vw" }}>
                <FeatureForm />
            </div>
            <Footer />
        </div>
    );
};

export default roadmap;