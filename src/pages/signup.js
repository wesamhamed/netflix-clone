import React, { useState, useContext } from 'react';
import { useHistory } from "react-router-dom";
import { FirebaseContext } from "../context/firebase";
import { HeaderContainer } from "../containers/header";
import { FooterContainer } from "../containers/footer";
import { Form } from "../components";
import * as ROUTES from "../constants/routes";



export default function SignUp() {
     const history = useHistory();
     const {firebase} =useContext(FirebaseContext);
     const [firstName,setFirstName] =useState("");
     const [lastName,setLastName] =useState("");
     const [email,setEmail] = useState("");
     const [password,setPassword] = useState("");
     const [error,setError] =useState("");
     const isInValid = firstName===""|| lastName==="" ||email ==="" ||password ==="";
    const handleSignUp =(event)=>{
        event.preventDefault();
        firebase
            .auth()
            .createUserWithEmailAndPassword(email,password)
            .then(({user})=>{
                user.updateProfile({
                    displayName:firstName,
                    photoURL:Math.floor(Math.random() * 5) + 1
                })
            })
            .then(()=>{
                history.push(ROUTES.BROWSE)
            }).catch(({message})=>{
                setFirstName("")
                setLastName("");
                setEmail("");
                setPassword("");
                setError(message)
            });
    }
    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign Up</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}
                    <Form.Base onSubmit={handleSignUp} method="POST">
                        <Form.Input
                            type="text"
                            placeholder="First Name"
                            value={firstName}
                            onChange={({target})=>setFirstName(target.value)}
                        />
                        <Form.Input
                            type="text"
                            placeholder="Last Name"
                            value={lastName}
                            onChange={({target})=>setLastName(target.value)}
                        />
                        <Form.Input
                            type="email"
                            placeholder="Email Address"
                            value={email}
                            onChange={({target})=>setEmail(target.value)}
                        />
                        <Form.Input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={({target})=>setPassword(target.value)}
                        />
                        <Form.Submit disabled={isInValid} type="submit">
                            Sign Up
                        </Form.Submit>
                        <Form.Text>
                            Already a user ?<Form.Link to={ROUTES.SIGN_UP}>Sign in now.</Form.Link>
                        </Form.Text>
                        <Form.TextSmall>
                            This is page protected by google reCAPTCHA to ensure you're not a bot.
                        </Form.TextSmall>
                    </Form.Base>
                </Form>
            </HeaderContainer>
            <FooterContainer/>
        </>
    );
}