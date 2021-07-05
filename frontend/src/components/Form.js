import React, { useState } from 'react';
import FormDataService from "../services/serviceForm";

export default function Form(props) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const submit = (e) => {
        e.preventDefault();
        if(!firstName || !lastName || !email || !password) alert("Some Fields cannot be blank");
        else {
            var data={
                firstName:firstName,
                lastName:lastName,
                email:email,
                password:password,
                city:null,
                state:null,
                country:null
            }
            console.log(data);
            FormDataService.createForm(data);
            setFirstName("");
            setLastName("");
            setEmail("");
            setPassword("");
            alert("Form Successfully Submited");
        }
    }
    return (
        <div className="container w-50 py-5">
            <h3 className="text-center">
                Form
            </h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label for="firstname" className="form-label">First Name</label>
                    <input type="text" value={firstName} onChange={(e) => { setFirstName(e.target.value) }}
                    className="form-control" id="firstname" />
                </div>
                <div className="mb-3">
                    <label for="lastname" className="form-label">Last Name</label>
                    <input type="text" value={lastName} onChange={(e) => { setLastName(e.target.value) }}
                    className="form-control" id="lastname" />
                </div>
                <div className="mb-3">
                    <label for="email" className="form-label">Email address</label>
                    <input type="email" value={email} onChange={(e) => { setEmail(e.target.value) }}
                     className="form-control" id="email" />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" value={password} onChange={(e) => { setPassword(e.target.value) }}
                    className="form-control" id="exampleInputPassword1" />
                </div>
                <select className="form-select form-select-lg mb-3">
                    <option selected>City</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                <select className="form-select form-select-lg mb-3">
                    <option selected>State</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                <select className="form-select form-select-lg mb-3">
                    <option selected>Country</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}
