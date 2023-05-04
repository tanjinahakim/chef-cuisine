import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import {  Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { FaGithub, FaGoogle } from 'react-icons/fa';


const Login = () => {
    const {signIn,handleGoogleLogin,handleGitHubLogin}=useContext(AuthContext);
    const [loading,setLoading]=useState(false)
    const navigate = useNavigate();
    const location = useLocation();
    const from =location.state?.from?.pathname || '/home';

    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email,password);
        signIn(email,password)
        .then(result=>{
            const loggedUser = result.user;
            navigate(from, {replace:true});
            // console.log(loggedUser);
            event.target.reset();
        })
        .catch(error => console.log(error))
    }
    const  googleLoginHandler = () =>{
        setLoading(true);
        handleGoogleLogin()
        .then(result=>{
            setLoading(false)
            navigate('/home')

        })
        .catch(err=>{
            setLoading(false)
        })

    }
    const handleGithubSign = () =>{
        setLoading(true);
        handleGitHubLogin()
        .then(result=>{
            setLoading(false)
            navigate('/home')

        })
        .catch(err=>{
            setLoading(false)
        })
    }
    return (
        <Container>
            <Form onSubmit={handleLogin} className=" shadow-lg p-5 rounded mx-auto my-5 w-50">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
                <Form.Group>
                <Form.Text className="text-muted">
                    Don't Have an Account? <Link to={'/register'}>Register</Link>
                    </Form.Text>
                </Form.Group>
                <div className='container my-5 responsive d-grid gap-2 col-12  mx-auto'>
                <Button onClick={googleLoginHandler} variant="outline-primary " size='sm' className='fw-semibold'><FaGoogle></FaGoogle> Continue with Google</Button>
                <Button onClick={handleGithubSign} className=' px-5 fw-semibold ' variant="outline-dark" size='sm'><FaGithub></FaGithub> Login with Github</Button>
                </div>

            </Form>
        </Container>
    );
};

export default Login;