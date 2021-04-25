import React,{useState} from 'react';
import { HeaderContainer } from "../containers/header";
import { FooterContainer } from "../containers/footer";
import { Form } from "../components";


export default function SignIn() {

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [error,setError]=useState("");
    const isInValid = email === ""||password === "";
    const handleSignIn =(event)=>{
        event.preventDefault();
    }
    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign In</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}
                    <Form.Base onSubmit={handleSignIn} method="POST">
                        <Form.Input
                            type="email"
                            placeholder="Email Address"
                            value={email}
                            onChange={({target})=>setPassword(target.value)}
                        />
                        <Form.Input
                            type="password"
                            placeholder="Password"
                            value={password}
                            autocomplete="off"
                            onChange={({target})=>setEmail(target.value)}
                        />
                        <Form.Submit disabled={isInValid} type="submit">
                            Sign In
                        </Form.Submit>
                    </Form.Base>
                    <Form.Text>
                        New to netflix? <Form.Link to="/signup">Sign up Now.</Form.Link>
                    </Form.Text>
                    <Form.TextSmall>
                        This is page protected by google reCAPTCHA to ensure you're not a bot.
                    </Form.TextSmall>
                </Form>
            </HeaderContainer>
            <FooterContainer/>
        </>
    );
}