import React, { useState } from "react";
import axios, { HttpStatusCode } from "axios";
import { Button, Form } from "react-bootstrap";
import SpringConstants from "../constants/SpringConstants";

function SignUp(){
    const [user, setUser] = useState({
        username: '',
        password: '',
        rePassword: '',
        email: '',
        nickname: '',
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setUser({ ...user, [id]: value });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        Object.keys(user).forEach((key) => {
            formData.append(key, user[key]);
        });
        console.log(formData);
        axios.post(SpringConstants.server + '/api/auth/signup', formData)
        .then((res) => {   
            if (res.status === HttpStatusCode.Created){
                alert("가입 완료");
            }
        })
        .catch((err) => {
            console.log(err.response.data);
        });
    }

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="username">
                    <Form.Label>ID</Form.Label>
                    <Form.Control type="text" placeholder="ID" onChange={handleChange} autoComplete="username"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="password" onChange={handleChange} autoComplete="new-password"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="rePassword">
                    <Form.Label>rePassword</Form.Label>
                    <Form.Control type="password" placeholder="re-password" onChange={handleChange} autoComplete="new-password"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>email</Form.Label>
                    <Form.Control type="email" placeholder="email" onChange={handleChange} autoComplete="email"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="nickname">
                    <Form.Label>nickname</Form.Label>
                    <Form.Control type="text" placeholder="nickname" onChange={handleChange} autoComplete="nickname"/>
                </Form.Group>
                <Button type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default SignUp;