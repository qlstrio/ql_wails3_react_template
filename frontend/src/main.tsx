import ReactDOM from 'react-dom/client'
import { HashRouter, Routes, Route } from "react-router-dom";
import App from './App'
import Page1 from "./PageOne";
import './style.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <HashRouter basename={"/"}>
        {/* The rest of your app goes here */}
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/page1" element={<Page1 />} />
            {/* more... */}
        </Routes>
    </HashRouter>
);