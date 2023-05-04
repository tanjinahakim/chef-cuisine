import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';


const Register = () => {
    const {createUser,updated}= useContext(AuthContext);
    const [error, setError] = useState('');

    const handleRegister = event =>{
        event.preventDefault();
        setError('');
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        if(password.length<6)
        {
            setError('Password must be at least 6 characters');
            return;
        }
        console.log(name,photo,email,password);
        // Signed In
        createUser(email,password)
        .then(result=>{
            const createdUser = result.user;
            console.log(createdUser);
            updated(createdUser,name,photo)
            
            setError('');
            event.target.reset();
        })
        .catch(error =>console.log(error))
    }

    return (
       <Container>
        <h2 className='text-center'>Please Register</h2>
            
            <Form onSubmit={handleRegister} className="shadow-lg p-5 rounded mx-auto my-3 w-50">
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Your Name" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPhoto">
                    <Form.Label>Photo Url</Form.Label>
                    <Form.Control type="text" name='photo' placeholder="Photo URL" required/>
                </Form.Group >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Accept Terms and Conditions" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Register
                </Button>
                <Form.Text>
                    {error}
                </Form.Text>
                <Form.Group>
                <Form.Text className="text-muted">
                    Already Have an Account? <Link to={'/login'}>Login</Link>
                    </Form.Text>
                </Form.Group>
            </Form>
     </Container>
       
    );
};

export default Register;