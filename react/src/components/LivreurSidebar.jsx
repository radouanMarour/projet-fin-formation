import React from 'react'
// import { Link } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion'

function LivreurSidebar() {
    return (
        <aside>
            <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey='0'>
                    <Accordion.Header>Home</Accordion.Header>
                </Accordion.Item>
                <Accordion.Item eventKey='1'>
                    <Accordion.Header>Dilevery Management</Accordion.Header>
                    <Accordion.Body>
                        <a href="aa">List Deliveries</a>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <div className="logout">
                <button>Logout</button>
            </div>
        </aside>
    )
}

export default LivreurSidebar