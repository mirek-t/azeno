import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Login from '../Auth/Login';
import Register from '../Auth/Register';
import Header from '../Header/Header';
import Profile from '../Profile/Profile';

import Train from '../Train/Train';

import useCookie from './../../hooks/useCookie';

import { Container, Row, Col } from 'react-bootstrap';

import './App.scss';
import QuestionList from '../QuestionList/QuestionList';

function App() {
    const [cookie, setCookie] = useCookie('token_auth');

    return (
        <BrowserRouter>
            <Header />
            <Container>
                <Row>
                    <Col>
                        <Routes>
                            <Route path="/" element={<Link to="/profile">Profile</Link>} />
                            <Route path="/profile" element={<Profile />} />
                            <Route path="/train" element={<Train />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/register" element={<Register />} />
                            <Route path="/train/:id" element={<QuestionList />} />
                        </Routes>
                    </Col>
                </Row>
            </Container>
        </BrowserRouter>
    );
}
export default App;
