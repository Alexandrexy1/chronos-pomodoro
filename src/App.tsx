import { Container } from "./components/Container";
import { CountDown } from "./components/CountDown";
import { Menu } from "./components/Menu";
import { Logo } from "./components/Logo";
import { Footer } from "./components/Footer";
import { Input } from "./components/Input";
import { Cycles } from "./components/Cycles";
import { Button } from "./components/Button";

import { PlayCircleIcon, StopCircleIcon } from "lucide-react";

import "./styles/global.css";
import "./styles/theme.css";

export function App() {
    return (
        <>
            <Container>
                <Logo />
            </Container>
            <Container>
                <Menu />
            </Container>
            <Container>
                <CountDown />
            </Container>
            <Container>
                <form action="" className="form">
                    <div className="formRow">
                        <Input type="text" id="myInput" placeholder="Defina um horário" />
                    </div>
                    <div className="formRow">
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <Cycles/>
                    <div className="formRow">
                        <Button icon={<PlayCircleIcon />} />
                        <Button icon={<StopCircleIcon />} color="red" />
                    </div>
                </form>
            </Container>
            <Container>
                <Footer />
            </Container>
        </>
    )
}