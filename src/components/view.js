import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { RiDeleteBin6Line, RiEditFill } from "react-icons/ri";
import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function View() {

    const [view, setview] = useState([]);

    useEffect(() => {
        viewdata();
    });

    const viewdata = async () => {

    await axios.get('http://localhost/crud/view.php')
            .then(function (response) {
                // handle success
                console.log(response.data.result);
                setview(response.data.result);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }

    const deletid = (c_id) => {
        axios.delete(`http://localhost/crud/delete.php?id=${c_id}`)
        .then(function (response) {
            // handle success
            console.log(response);
            viewdata();
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
                    {/* <Navbar.Brand href=""></Navbar.Brand> */}
                    <Nav className="me-auto">
                        <Nav.Link href="/">Log out</Nav.Link>   
                    </Nav>
                </Container>
            </Navbar>


            <Container>
                <h1 className='text-center mt-3 mb-4'>VIEW CONTACT INFO</h1>
                <Table striped='columns' bordered className='text-center border border-dark m-auto table table-success'>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Contact</th>
                            <th>City</th>
                            <th>Gender</th>
                            <th>Address</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            view.map((data, index) => {
                                return (
                                    <>
                                        <tr key={index}>
                                            <td>{data.id}</td>
                                            <td>{data.name}</td>
                                            <td>{data.email}</td>
                                            <td>{data.contact}</td>
                                            <td>{data.city}</td>
                                            <td>{data.gender}</td>
                                            <td>{data.address}</td>
                                            <td><Link to={`/edit/${data.id}`}><RiEditFill></RiEditFill></Link></td>
                                            <td><button onClick={()=>deletid(data.id)} style={{border:"none"}}><RiDeleteBin6Line></RiDeleteBin6Line></button></td>
                                        </tr>
                                    </>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </Container>
        </>
    )
}
export default View;