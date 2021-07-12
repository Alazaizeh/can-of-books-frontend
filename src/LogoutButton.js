import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, Button } from 'react-bootstrap';
function LogoutButton() {
    const {
        isAuthenticated,
        logout,
    } = useAuth0();

    return isAuthenticated && (
        <Button onClick={() => {
            logout({ returnTo: window.location.origin });
        }} variant="danger">Log out</Button>
    );
}

export default LogoutButton;