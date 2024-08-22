import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { LoginContext } from "../context/LoginContextProvider";

function Login() {
    const [user, setUser] = useState({
        username: '',
        password: '',
    });

    const { login } = useContext(LoginContext);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setUser({ ...user, [id]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        login(user);
    };

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="username">
                    <Form.Label>ID</Form.Label>
                    <Form.Control type="text" placeholder="ID" onChange={handleChange} autoComplete="username" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="password" onChange={handleChange} autoComplete="password" />
                </Form.Group>
                <Button type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default Login;