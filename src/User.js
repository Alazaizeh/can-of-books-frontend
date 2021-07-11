import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import BestBooks from "./BestBooks"
import Login from './Login';
function Profile() {
    const { isAuthenticated } = useAuth0();

    return isAuthenticated ? <BestBooks /> : <Login />;
}

export default Profile;
