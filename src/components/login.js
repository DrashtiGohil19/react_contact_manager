import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Link } from "react-router-dom";
import { useState } from 'react';

function Login() {

    let [email, setemail] = useState();
    let [password, setpassword] = useState();
    let [Err, setErr] = useState();

    const passdata = () => {
    
        if (!email || !password) {
            setErr("All field are required for log in !");
        } else {
            axios.post('http://localhost/crud/loginreact.php', {
                email: email, password: password
            })
                .then(response => {
                    if(response.data === 'Success')
                    {
                        window.location = '/contact';
                    }else
                    {
                        setErr('Enter correct email and password !');
                    }
                })
                
        }
    }
    return (
        <>
            <form className="m-auto mt-5 justify-content-center border border-dark p-4 rounded" style={{ width: '28rem', height: '20rem' }}>
                <div>
                    <div className='d-flex '>
                        <h5 className="mb-4">Log In</h5>
                        <span style={{ color: "red" }} className='ms-5'>{Err}</span>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email address</label>
                        <input type="email" className="form-control" required onChange={(e) => setemail(e.target.value)} placeholder="Enter email address"></input>
                    </div>
                    <div className="mb-4">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control" required onChange={(e) => setpassword(e.target.value)} placeholder="Enter Password"></input>
                    </div>

                    <div className='d-flex justify-content-center'>
                        <button className="btn btn-primary me-5" onClick={passdata}>Log in</button>
                        <Link to="registration">Click for register</Link>
                        
                    </div>
                </div>
            </form>
        </>
    )
}

export default Login;