import React from 'react'
import Accordion from 'react-bootstrap/Accordion'

function ClientSidebar() {
    return (
        <aside>
            <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey='0'>
                    <Accordion.Header>Home</Accordion.Header>
                </Accordion.Item>
                <Accordion.Item eventKey='1'>
                    <Accordion.Header>Order Management</Accordion.Header>
                    <Accordion.Body>
                        <a href="#">Add Orders</a>
                        <a href="#">List Orders</a>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='2'>
                    <Accordion.Header>Reclame</Accordion.Header>
                </Accordion.Item>
            </Accordion>
            <div className="logout">
                <button>Logout</button>
            </div>
        </aside>
    )
}

export default ClientSidebar