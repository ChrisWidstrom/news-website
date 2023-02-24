import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Business from '../pages/Business';
import Entertainment from '../pages/Entertainment';
import Health from '../pages/Health';


export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}> 
                    <Route path="business" element={<Business />} />
                    <Route path="entertainment" element={<Entertainment />} />
                    <Route path="health" element={<Health />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}