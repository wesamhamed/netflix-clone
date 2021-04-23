import React from 'react';
import jumboData from "../fixtures/jumbo.json";
import { Jumbotron } from '../components';

export function JumbotronContainer() {

    return (
        <Jumbotron.Container>
            {
                jumboData.map((item) => (
                    <Jumbotron key={item.key} direction={item.direction}>
                        <Jumbotron.Pane>
                            <Jumbotron.Title>{item.title}</Jumbotron.Title>
                            <Jumbotron.SubTitle>{item.subtitle}</Jumbotron.SubTitle>
                            <Jumbotron.Title>{item.title}</Jumbotron.Title>
                        </Jumbotron.Pane>
                        <Jumbotron.Pane>
                            <Jumbotron.Image src={item.image} alt={item.alt} />
                        </Jumbotron.Pane>
                    </Jumbotron>
                ))
            }
        </Jumbotron.Container>
    );
}