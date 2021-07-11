import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Card, Spinner } from "react-bootstrap";
const Profile = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return <div style={{ margin: "50px auto", width: "100px" }}>
            <span>Loading...</span>
            <Spinner animation="border" role="status">
                <span className="visually-hidden"></span>
            </Spinner>
        </div>
    }

    return (
        isAuthenticated && (

            <Card style={{ background: "#e9ecef" }} >
                <Card.Img style={{ width: '14rem', margin: "10px auto", borderRadius: "50%" }} variant="top" src={user.picture} alt={user.name} />
                <Card.Body>
                    <Card.Title style={{ fontSize: "24px" }}>{user.name}</Card.Title>
                    <Card.Text style={{ fontSize: "20px" }}>
                        {user.email}
                    </Card.Text>
                    <Card.Text style={{ fontSize: "14px" }}>
                        {"Logged in : " + user.updated_at.match(/\d{2}:\d{2}:\d{2}/).join(" ") + " GMT"}
                    </Card.Text>
                </Card.Body>
            </Card>

        )
    );
};

export default Profile;
