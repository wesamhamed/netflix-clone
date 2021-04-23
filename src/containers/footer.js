import React from 'react';
import { Footer } from "../components";

export function FooterContainer() {
    return (
        <Footer>
            <Footer.Title>Question? Contact Us.</Footer.Title>
            <Footer.Break/>
            <Footer.Row>
                <Footer.Column>
                    <Footer.Link href="#">FAQ</Footer.Link>
                    <Footer.Link href="#">Investor Relations</Footer.Link>
                    <Footer.Link href="#">Ways to Watch</Footer.Link>
                    <Footer.Link href="#">Coporate Information</Footer.Link>
                    <Footer.Link href="#">Netflix Originals</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Link href="#">Help Center</Footer.Link>
                    <Footer.Link href="#">Jobs</Footer.Link>
                    <Footer.Link href="#">Cookie Preferences</Footer.Link>
                    <Footer.Link href="#">Legal Notices</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Link href="#">Help Center</Footer.Link>
                    <Footer.Link href="#">Jobs</Footer.Link>
                    <Footer.Link href="#">Cookie Preferences</Footer.Link>
                    <Footer.Link href="#">Legal Notices</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Link href="#">Account</Footer.Link>
                    <Footer.Link href="#">Media Center</Footer.Link>
                    <Footer.Link href="#">Terms of Use</Footer.Link>
                </Footer.Column>
            </Footer.Row>
            <Footer.Break/>
            <Footer.Text>Netflix Palestine Gaza</Footer.Text>
        </Footer>
    );
}