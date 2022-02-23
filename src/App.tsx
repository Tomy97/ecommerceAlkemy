import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./Layout/Layout";
import Login from "./Views/Login";
import 'bootstrap/dist/css/bootstrap.min.css';

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
