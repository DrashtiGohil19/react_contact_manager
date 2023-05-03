import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Registration() {

    let [name, setname] = useState();
    let [email, setemail] = useState();
    let [password, setpassword] = useState();

    const passdata = () => {
        axios.post('http://localhost/crud/register.php', {
            name: name, email: email, password: password
        })
            .then(function (response) {
                // handle success
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home"></Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="contact">Add contact</Nav.Link>
                        <Nav.Link href="view">View contact</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            <h1 className="text-center mt-3">REGISTRATION PAGE</h1>

            <form className="container mt-5 border border-dark rounded p-5 col-7 m-auto" encType="multipart/form-data">
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="name" className="form-control" name="name" required onChange={(e) => setname(e.target.value)} placeholder="Enter name"></input>
                </div>

                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" className="form-control" name="email" required onChange={(e) => setemail(e.target.value)} placeholder="Enter email"></input>
                </div>

                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" name="password" required onChange={(e) => setpassword(e.target.value)} placeholder="Enter password"></input>
                </div>
                <button name="save" className="btn btn-primary d-flex justify-content-center" onClick={passdata}>Register</button>

            </form>

        </>
    )
}

export default Registration;