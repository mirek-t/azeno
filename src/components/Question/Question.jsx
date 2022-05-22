import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';

function Question() {
    const [question] = useState('Czy w JS wszystko jest obiektem?');
    const [answer] = useState(
        'Z technicznego punktu widzenia: nie. Typy proste są opakowywane obiektami.'
    );

    const [toggle, setToggle] = useState(false);

    function handleAnswer() {
        setToggle(true);
    }

    return (
        <Card onClick={handleAnswer}>
            <Card.Header as="h5">Javascript</Card.Header>
            <Card.Body>
                <Card.Text>{!toggle ? question : answer}</Card.Text>
                {toggle && (
                    <>
                        <Button variant="primary">Wiedziałem</Button>
                        <Button variant="primary">Nie byłem pewny</Button>
                        <Button variant="primary">Nie wiedziałem</Button>
                    </>
                )}
            </Card.Body>
        </Card>
    );
}

export default Question;
