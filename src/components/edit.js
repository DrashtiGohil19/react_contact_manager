import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Edit() {

    let [val,setval] = useState([]);
    const params = useParams();

    useEffect(()=>{
        axios.post(`http://localhost/crud/fillcontact.php/${params.id}`,
        {id:params.id})
            .then(function (response) {
                console.log(response.data);
                setval(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
    },[params.id]);

    const handleChange = (e)=>{
        setval({...val,[e.target.name]:e.target.value})
    }

    const handleEdit = () =>{
        axios.post("http://localhost/crud/editreact.php",{
            id:params.id,
            name:val.name,
            email:val.email,
            contact:val.contact,
            city:val.city,
            gender:val.gender,
            address:val.address

        })
            .then(function (response) {
                console.log(response);
                setval(response);
                window.location='/view';
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    return (
        <>
            <h1 className='text-center mt-3 mb-4'>EDIT CONTACT</h1>
            <Form className='m-auto border border-dark rounded p-4 mb-4 justify-content-center' style={{ width: '45rem' }}>
                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="name" placeholder="Enter name"  name="name"  onChange={handleChange} value={val.name}/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email"  name="email" value={val.email} onChange={handleChange}/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Contact</Form.Label>
                    <Form.Control type="number" placeholder="Enter contact" value={val.contact}  name="contact" onChange={handleChange}/>
                </Form.Group>

                <Form.Label>City</Form.Label>
                <Form.Select className='mb-3' value={val.city}>
                    <option disabled>Select city</option>
                    <option value="surat">Surat</option>
                    <option value="rajkot">Rajkot</option>
                    <option value="mumbai">Mumbai</option>
                </Form.Select>

                <Form.Label>Gender</Form.Label>
                <div className='d-flex mb-2' value={val.gender}>
                    <Form.Check type="radio" className='me-2'  name="femal"  />
                    <Form.Label className='me-4'>Femal</Form.Label>

                    <Form.Check type="radio" className='me-2'  name="femal"  />
                    <Form.Label className='me-4'>Male</Form.Label>

                </div>

                <Form.Group className="mb-3">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="address" className='mb-3' value={val.address} placeholder="Enter address" name="address" onChange={handleChange}/>
                </Form.Group>

                <button className="btn btn-primary d-flex m-auto" onClick={handleEdit}>Submit</button>
            </Form>

        </>
    )
}
export default Edit;