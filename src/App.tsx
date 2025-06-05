import { TaskContextProvider } from "./contexts/TaskContext/TaskContextProvider";
import { Home } from "./pages/Home";

import "./styles/global.css";
import "./styles/theme.css";
import { MessagesContainer } from "./components/MessagesContainer";
import { BrowserRouter, Route, Routes } from "react-router";
import { NotFound } from "./components/NotFound";

export function App() {
    return( 
        <TaskContextProvider>
            <MessagesContainer>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={ <Home /> } />
                    

                        <Route path="*" element={ <NotFound /> } />
                       
                    </Routes>
                </BrowserRouter>
            </MessagesContainer>
        </TaskContextProvider>
    );
}
