import React, { useState } from 'react';
import FormDataService from "../services/serviceForm";

export default function Form(props) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState("");
    const [selectedState, setSelectedState] = useState("");
    const [selectedCity, setSelectedCity] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if (!firstName || !lastName || !email || !password || !selectedCity || !selectedCountry || !selectedState) alert("Some Fields cannot be blank");
        else {
            var data = {
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password,
                city: selectedCity,
                state: selectedState,
                country: selectedCountry
            }
            console.log(data);
            FormDataService.createForm(data);
            setFirstName("");
            setLastName("");
            setEmail("");
            setPassword("");
            setSelectedCity("");
            setSelectedState("");
            setSelectedCountry("");
            alert("Form Successfully Submited");
        }
    }

    const countries = {
        India: ["Maharashtra", "Delhi", "Karnataka"],
        Usa: ["Hawaii", "Ohio", "Washington", "California", "Indiana", "Florida"],
    };

    const states2 = {

        Maharashtra: ["Mumbai", "Pune", "Nashik", "M1", "M2", "M3"],
        Delhi: ["NewDelhi", "JantarMantar"],
        Karnataka: ["Bangalore", "Anekal", "KSR"],
        Hawaii: ["Hawi", "Hilo", "Honolulu"],
        Ohio:["Columbus", "Akron", "Kent", "Youngstown"],
        Washington:["Seattle", "Olympia", "Everett"],
        California:["Los Angeles", "San Diego", "Fresno"],
        Indiana:["Bloomington", "Gary"],
        Florida:["Miami", "Tampa"],
    }

    const countryList = Object.keys(countries).map(key => ({
        name: key
    }));

    function handleCountrySelect(e) {
        const countrySel = e.target.value;
        const cstateSel = countrySel !== "" ? countries[countrySel] : [];
        setSelectedCountry(countrySel);
        setSelectedState("");
        setSelectedCity("");
        setStates(cstateSel)
    }

    function handleStateSelect(e) {
        const stateSel = e.target.value;
        const scitiesSel = stateSel !== "" ? states2[stateSel] : [];
        setSelectedState(stateSel);
        setSelectedCity("");
        setCities(scitiesSel);
    }

    function handleCitySelect(e) {
        const citySel = e.target.value;
        setSelectedCity(citySel);
    }

    return (
        <div className="container w-50 py-5">
            <h3 className="text-center">
                Form
            </h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="firstname" className="form-label">First Name</label>
                    <input type="text" value={firstName} onChange={(e) => { setFirstName(e.target.value) }}
                        className="form-control" id="firstname" />
                </div>
                <div className="mb-3">
                    <label htmlFor="lastname" className="form-label">Last Name</label>
                    <input type="text" value={lastName} onChange={(e) => { setLastName(e.target.value) }}
                        className="form-control" id="lastname" />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" value={email} onChange={(e) => { setEmail(e.target.value) }}
                        className="form-control" id="email" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" value={password} onChange={(e) => { setPassword(e.target.value) }}
                        className="form-control" id="exampleInputPassword1" />
                </div>
                <select name="country" className="form-select form-select-lg mb-3" value={selectedCountry} onChange={e => handleCountrySelect(e)}>
                    <option value="">Select the country</option>
                    {countryList.map((country, key) => (
                        <option key={key} value={country.name}>
                            {country.name}
                        </option>
                    ))}
                </select>
                <select name="state" className="form-select form-select-lg mb-3" value={selectedState} onChange={e => handleStateSelect(e)}>
                    <option value="">Select the State</option>
                    {states.map((state, key) => (
                        <option key={key} value={state}>
                            {state}
                        </option>
                    ))}
                </select>
                <select name="city" className="form-select form-select-lg mb-3" value={selectedCity} onChange={(e) => handleCitySelect(e)}>
                    <option value="">Select the City</option>
                    {cities.map((city, key) => (
                        <option key={key} value={city}>
                            {city}
                        </option>
                    ))}
                </select>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}
