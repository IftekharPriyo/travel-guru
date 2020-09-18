import React, { useContext, useState } from 'react';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import './Auth.css'
import HeaderTypeTwo from '../HeaderTypeTwo/HeaderTypeTwo';
import google from '../../Icon/google.png'
import fb from '../../Icon/fb.png'
import TextField from '@material-ui/core/TextField';
import { createUserWithEmailAndPassword, handleFbSignIn, handleGoogleSignIn, initializeLoginFrameWork, signInWithEmailAndPassword } from './LoginManager';


const Auth = () => {

    const [newUser, setNewUser] = useState(true);
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        photo: ''
    })



    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } }


    //Initialization of firebase
    initializeLoginFrameWork();


    //Google Sign In handler
    function googleSignIn() {
        handleGoogleSignIn()
            .then(res => {
                handleResponse(res,true)
            })
    }


    //Facebook Sign In handler
    function fbSignIn() {
        handleFbSignIn()
            .then(res => {
               handleResponse(res,true)
            })
    }

    //handleresponse
    const handleResponse = (res, redirect) =>{
        setUser(res);
        setLoggedInUser(res);
        if(redirect){
            history.replace(from);
        }
      }


    //Submit Button Handler
    const handleSubmit = (event) => {
        if (newUser && user.email && user.password) {
            createUserWithEmailAndPassword(user.name, user.email, user.password)
                .then(res => {
                    handleResponse(res,true)
                })

        }

        if (!newUser && user.email && user.password) {
            signInWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    handleResponse(res,true)
                })
        }
        event.preventDefault();

    }


    //Email and password validation
    const handleBlur = (event) => {
        let isFieldValid = true;
        if (event.target.name === "email") {
            isFieldValid = /\S+@\S+\.\S+/.test(event.target.value);
        }
        if (event.target.name === "password") {
            const isPasswordValid = event.target.value.length > 6;
            const passwordHasNumber = /\d{1}/.test(event.target.value);
            isFieldValid = isPasswordValid && passwordHasNumber;

        }
        if (isFieldValid) {
            const newUserInfo = { ...user }
            if(event.target.name==="firstName"){
                newUserInfo.displayName = event.target.value
            }
            newUserInfo[event.target.name] = event.target.value
            setUser(newUserInfo)
        }

    }

    return (

        <div>
            <HeaderTypeTwo></HeaderTypeTwo>
            <div className="row">
                <div className="col-lg-4 col-sm-2"></div>
                <div className="col-lg-4 col-sm-8 login-form">
                    <Form onSubmit={handleSubmit}>
                        <p style={{ color: 'black', textAlign: 'center', fontWeight: 'bold' }}>
                            {newUser ? "Create an Account" : "Log In"}
                        </p>
                        <Form.Group controlId="formBasicEmail">
                
                            {newUser && <TextField id="standard-basic"  onBlur={handleBlur} type="text" name="firstName" placeholder="Your First Name" />} <br/>
                            
                            {newUser && <TextField id="standard-basic" onBlur={handleBlur} type="text" name="lastName" placeholder="Your Last Name" />} <br/>
                            
                            <TextField id="standard-basic" type="email" name="email" onBlur={handleBlur} placeholder="Enter email" required /> <br/>
        
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword"> 
                            <TextField id="standard-basic" type="password" onBlur={handleBlur} name="password" placeholder="Password" required /> <br/>
                        </Form.Group>
                       
                    </Form>
                    <div className="row justify-content-center">
                    <input style={{  padding: '10px 8px 10px 8px' }} onClick={handleSubmit} type="submit" value={newUser ? "Create an account" : "Login"} /> <br /><br />
                </div><br/>
                <p style={{ color: 'black' }} >{!newUser ? "Don't have an account?" : "Already Have an Account?"} <span className="toggle" onClick={() => setNewUser(!newUser)} >{!newUser ? 'Sign Up' : 'Login'}</span></p>
                <button style={{ backgroundColor: 'white' }} onClick={googleSignIn} > <img style={{ height: '20px', width: '20px' }} src={google} alt='google' ></img> Continue With Google</button>
                <hr />
                <button style={{ backgroundColor: 'white' }} onClick={fbSignIn}><img style={{ height: '20px', width: '20px' }} src={fb} alt='facebook'></img>  Continue With Facebook</button>
                </div>
                <div className="col-lg-4 col-sm-2"></div>
            </div>

            <br />

            



        </div>
    );
};
export default Auth;