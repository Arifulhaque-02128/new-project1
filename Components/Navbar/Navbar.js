import React from 'react';

const Navbar = () => {

    return (
        <nav className="container d-flex justify-content-between py-4">
            <h4 className="text-info"> TODO APP </h4>
            <div>
                <a href="/api/login" className="btn btn-success mx-3">Login</a>
                <a href="/api/logout" className="btn btn-danger mx-3">Logout</a>
            </div>
        </nav>
    );
};

export default Navbar;