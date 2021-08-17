import React, { useState, useEffect } from 'react';
import FormDataService from "../services/serviceForm.js";
import * as ReactBootStrap from "react-bootstrap";

export default function FormData() {
    const [forms, setForms] = useState([])

    async function retrieveForms() {
        await FormDataService.getAll()
            .then(response => {
                setForms(response.data.formsList);
            })
            .catch(e => {
                console.log(e);
            });
    };

    const renderForms = (form, index) => {
        return (
            <tr key={index}>
                <td>{form.firstname}</td>
                <td>{form.lastname}</td>
                <td>{form.email}</td>
                <td>{form.password}</td>
                <td>{form.city}</td>
                <td>{form.state}</td>
                <td>{form.country}</td>
                <td>{form.date}</td>
            </tr>
        )
    }
    useEffect(() => {
        retrieveForms();
    }, []);
    return (
        <div>
            <h2 className="text-center">Admin Page</h2>
            <ReactBootStrap.Table striped bordered hover>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Country</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {forms.map(renderForms)}
                </tbody>
            </ReactBootStrap.Table>
        </div>
    )
}
