import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

const Header = ({searchChange, searchfield}) => {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand className="mr-auto" href="#">Ricky Morty Show</Navbar.Brand>
            <Form className={'ml-2'} inline>
                <FormControl type="text" placeholder="Search Name.." onChange={searchChange} value={searchfield}/>
            </Form>
        </Navbar>

    );
}

export default Header;

