
import { BrowserRouter, Route, Routes, useLocation } from "react-router";
import { Home } from "../../pages/Home";
import { NotFound } from "../../components/NotFound";
import { useEffect } from "react";
import { AboutPomodoro } from "../../pages/AboutPomodoro";

function ScrollToTop() {
    const { pathname } = useLocation();
    
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [pathname])

    return null;
}

export function MainRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="/about-pomodoro" element={ <AboutPomodoro/> } />
                <Route path="*" element={ <NotFound /> } />       
            </Routes>
            <ScrollToTop />
        </BrowserRouter>
    )
}