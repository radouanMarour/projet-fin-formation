import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import { Link } from 'react-router-dom';
import Logout from './Logout';

function AdminSidebar() {

    return (
        <aside>
            <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey='0'>
                    <Accordion.Header><Link to="/admin">Home</Link></Accordion.Header>
                </Accordion.Item>
                <Accordion.Item eventKey='1'>
                    <Accordion.Header>Stock Management</Accordion.Header>
                    <Accordion.Body>
                        <Link to="add-quantity">Add new Quantity</Link>
                        <Link to="#">List Quantities</Link >
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='2'>
                    <Accordion.Header>User Management</Accordion.Header>
                    <Accordion.Body>
                        <Link to="new-user">Add User</Link>
                        <Link to="users">List Users</Link >
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='3'>
                    <Accordion.Header>Deliveries Management</Accordion.Header>
                    <Accordion.Body>
                        <Link to="#">Add Dilevery</Link >
                        <Link to="#">List Dileveries</Link >
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='4'>
                    <Accordion.Header>Order Management</Accordion.Header>
                    <Accordion.Body>
                        <Link to="#">List Orders</Link >
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='5'>
                    <Accordion.Header>Payment Management</Accordion.Header>
                    <Accordion.Body>
                        <Link to="#">Add Payment</Link >
                        <Link to="#">List Dileveries</Link >
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <Logout />
        </aside>
    )
}

export default AdminSidebar