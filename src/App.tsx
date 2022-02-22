import React from 'react';
import logo from './logo.svg';
import {Counter} from './features/counter/Counter';
import './App.css';
import 'react-bootstrap'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./Layout/Layout";
import Login from "./Views/Login";

function App() {
    return (
        <div className="App">
            <Layout>
                <BrowserRouter>
                    <Routes>
                        <Route path="login" element={<Login/>}/>
                    </Routes>
                </BrowserRouter>
            </Layout>
        </div>
    );
}

export default App;
