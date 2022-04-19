import "./Register.css";
import "./Login.css";
import { UserIcon, MailIcon } from "@heroicons/react/solid";
import {
    MapIcon,
    DeviceMobileIcon,
    LockClosedIcon,
} from "@heroicons/react/outline";
import Select from "react-select";
import { useState } from "react";
import { useAuth } from "../context/Auth.provider";
import { useNavigate } from "react-router-dom";

const dummy = [
    { value: "neel", label: "neel" },
    { value: "kenil", label: "kenil" },
    { value: "axit", label: "axit" },
    { value: "dhruvin", label: "dhruvin" },
];

const Register = ({ value })=> {
    const { registerUser } = useAuth();

    const [st, setSt] = useState("");
    const [district, setDistrict] = useState("");
    const [taluko, setTaluko] = useState("");
    const [village, setVillage] = useState("");

    const navigate = useNavigate();

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const user = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value,
        };
        registerUser(user);
        navigate("/login");
    };

    return (
        <>
            {value === "English" ? (
                <div>
                    <div className="registeration-page">
                        <form className="form" onSubmit={handleFormSubmit}>
                            <h1>Registeration Form</h1>
                            <div className="input-group">
                                <UserIcon className="icon" height={"20px"} />
                                <input type="text" className="input" required name="name"/>
                                <label className="placeholder">Name</label>
                            </div>
                            <div className="input-group">
                                <DeviceMobileIcon
                                    className="icon"
                                    height={"20px"}
                                />
                                <input type="tel" className="input" required />
                                <label className="placeholder">Mobile No</label>
                            </div>
                            <div className="input-group">
                                <MailIcon className="icon" height={"20px"} />
                                <input
                                    type="email"
                                    className="input"
                                    required
                                    name="email"
                                />
                                <label className="placeholder">Email</label>
                            </div>
                            <div className="input-group">
                                <MapIcon className="icon" height={"20px"} />
                                <Select
                                    // className="placeholder"
                                    onChange={(option) => setSt(option)}
                                    options={dummy}
                                    value={st}
                                />
                            </div>
                            <div className="input-group">
                                <MapIcon className="icon" height={"20px"} />
                                <Select
                                    // className="placeholder"
                                    onChange={(option) => setDistrict(option)}
                                    options={dummy}
                                    value={district}
                                />
                            </div>
                            <div className="input-group">
                                <MapIcon className="icon" height={"20px"} />
                                <Select
                                    // className="placeholder"
                                    onChange={(option) => setTaluko(option)}
                                    options={dummy}
                                    value={taluko}
                                />
                            </div>
                            <div className="input-group">
                                <MapIcon className="icon" height={"20px"} />
                                <Select
                                    // className="placeholder"
                                    onChange={(option) => setVillage(option)}
                                    options={dummy}
                                    value={village}
                                />
                            </div>
                            <div className="input-group">
                                <LockClosedIcon
                                    className="icon"
                                    height={"20px"}
                                />
                                <input
                                    type="password"
                                    className="input"
                                    required
                                    name="password"
                                />
                                <label className="placeholder">Password</label>
                            </div>
                            <div className="input-group">
                                <LockClosedIcon
                                    className="icon"
                                    height={"20px"}
                                />
                                <input
                                    type="password"
                                    className="input"
                                    required
                                />
                                <label className="placeholder">
                                    Confirm Password
                                </label>
                            </div>
                            <div>
                                <input type="checkbox" />
                                <label>*Accept term and condition</label>
                            </div>
                            <button className="btn">Register</button>
                        </form>
                    </div>
                </div>
            ) : (
                <div>
                    <div className="registeration-page">
                        <form className="form">
                            <h1>રજીસ્ટર ફોર્મ</h1>
                            <div className="input-group">
                                <UserIcon className="icon" height={"20px"} />
                                <input type="text" className="input" required />
                                <label className="placeholder">નામ</label>
                            </div>
                            <div className="input-group">
                                <DeviceMobileIcon
                                    className="icon"
                                    height={"20px"}
                                />
                                <input type="tel" className="input" required />
                                <label className="placeholder">
                                    મોબાઇલ નંબર
                                </label>
                            </div>
                            <div className="input-group">
                                <MailIcon className="icon" height={"20px"} />
                                <input
                                    type="email"
                                    className="input"
                                    required
                                />
                                <label className="placeholder">ઈમેલ</label>
                            </div>
                            <div className="input-group">
                                <MapIcon className="icon" height={"20px"} />
                                <Select
                                    // className="placeholder"
                                    onChange={(option) => setSt(option)}
                                    options={dummy}
                                />
                            </div>
                            <div className="input-group">
                                <MapIcon className="icon" height={"20px"} />
                                <Select
                                    // className="placeholder"
                                    onChange={(option) => setDistrict(option)}
                                    options={dummy}
                                />
                            </div>
                            <div className="input-group">
                                <MapIcon className="icon" height={"20px"} />
                                <Select
                                    // className="placeholder"
                                    onChange={(option) => setTaluko(option)}
                                    options={dummy}
                                />
                            </div>
                            <div className="input-group">
                                <MapIcon className="icon" height={"20px"} />
                                <Select
                                    // className="placeholder"
                                    onChange={(option) => setVillage(option)}
                                    options={dummy}
                                    styles={{ width: "100px" }}
                                />
                            </div>
                            <div className="input-group">
                                <LockClosedIcon
                                    className="icon"
                                    height={"20px"}
                                />
                                <input
                                    type="password"
                                    className="input"
                                    required
                                />
                                <label className="placeholder">પાસવર્ડ</label>
                            </div>
                            <div className="input-group">
                                <LockClosedIcon
                                    className="icon"
                                    height={"20px"}
                                />
                                <input
                                    type="password"
                                    className="input"
                                    required
                                />
                                <label className="placeholder">
                                    નક્કી પાસવર્ડ
                                </label>
                            </div>
                            <div>
                                <input type="checkbox" />
                                <label>*ટર્મ અને શરત સ્વીકારો</label>
                            </div>
                            <button className="btn">રજીસ્ટર</button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}

export default Register;