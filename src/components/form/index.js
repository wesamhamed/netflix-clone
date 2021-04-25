import React from 'react';
import { Container, Error, Base, Link, Title, Text, TextSmall, Input, Submit } from "./styles/form";

export default function Form({ children, ...restProps }) {
    return (
        <Container {...restProps}>{children}</Container>
    );
}
Form.Error = function ErrorForm({ children, ...restProps }) {
    return (
        <Error {...restProps}>{children}</Error>
    );
}
Form.Base = function BaseForm({ children, ...restProps }) {
    return (
        <Base {...restProps}>{children}</Base>
    );
}
Form.Title = function TitleForm({ children, ...restProps }) {
    return (
        <Title {...restProps}>{children}</Title>
    );
}
Form.Text = function TextForm({ children, ...restProps }) {
    return (
        <Text {...restProps}>{children}</Text>
    );
}
Form.TextSmall = function TextSmallForm({ children, ...restProps }) {
    return (
        <TextSmall {...restProps}>{children}</TextSmall>
    );
}
Form.Link = function LinkForm({ children, ...restProps }) {
    return (
        <Link {...restProps}>{children}</Link>
    );
}
Form.Input = function InputForm({ children, ...restProps }) {
    return (
        <Input {...restProps}>{children}</Input>
    );
}
Form.Submit = function SubmitForm({ children, ...restProps }) {
    return (
        <Submit {...restProps}>{children}</Submit>
    );
}