import React from 'react';
import { Navbar } from '../components';
import Login from '../components/Login/Login';
import { Footer } from '../container';

function LoginPage() {
    return (
        <div>
            <Navbar />
            <Login />
            <Footer />
        </div>
    );
}

export default LoginPage;
