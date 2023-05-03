import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import { useNavigate } from 'react-router-dom';


function Contact() {

    let [name, setname] = useState();
    let [email, setemail] = useState();
    let [contact, setcontact] = useState();
    let [city, setcity] = useState();
    let [gender, setgender] = useState();
    let [address, setaddress] = useState();
    // const navigate = useNavigate();

    const passdata = () => {
        // e.preventDefult();
        axios.post('http://localhost/crud/contact.php', {
            name: name,
            email: email,
            contact: contact,
            city: city,
            gender: gender,
            address: address
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
                    <Nav className="me-auto">
                        <Nav.Link href="view">View contact</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            <h1 className='text-center mt-3 mb-4'>CONTACT INFORMATION</h1>
            <Form className='m-auto border border-dark rounded p-4 justify-content-center' style={{ width: '45rem' }}>
                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="name" placeholder="Enter name" onChange={(e) => setname(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={(e) => setemail(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Contact</Form.Label>
                    <Form.Control type="number" placeholder="Enter contact" onChange={(e) => setcontact(e.target.value)} />
                </Form.Group>

                <Form.Label>City</Form.Label>
                <Form.Select className='mb-3'>
                    <option selected disabled onChange={(e) => setcity(e.target.value)}>Select city</option>
                    <option value="surat">Surat</option>
                    <option value="rajkot">Rajkot</option>
                    <option value="mumbai">Mumbai</option>
                </Form.Select>

                <Form.Label>Gender</Form.Label>
                <div className='d-flex mb-2'>
                    <Form.Check type="radio" className='me-2' name="femal" onChange={(e) => setgender(e.target.value)} />
                    <Form.Label className='me-4'>Femal</Form.Label>

                    <Form.Check type="radio" className='me-2' name="femal" onChange={(e) => setgender(e.target.value)} />
                    <Form.Label className='me-4'>Male</Form.Label>

                </div>

                <Form.Group className="mb-3">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="address" className='mb-3' placeholder="Enter address" onChange={(e) => setaddress(e.target.value)} />
                </Form.Group>

                <button className="btn btn-primary d-flex m-auto" type='submit' onClick={passdata}>Submit</button>            </Form>

        </>
    )
}

export default Contact;