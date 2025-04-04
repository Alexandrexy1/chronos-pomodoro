import { Container } from "./components/Container";
import { CountDown } from "./components/CountDown";
import { Menu } from "./components/Menu";
import { Logo } from "./components/Logo";

import "./styles/global.css";
import "./styles/theme.css";
import { Input } from "./components/Input";


export function App() {
    return (
        <>
            <Container>
                <Logo/>
            </Container>
            <Container>
                <Menu/>
            </Container>
            <Container>
                <CountDown/>
            </Container>
            <Container>
                <form action="" className="form">
                    <div className="formRow">
                        <Input type="text" id="myInput" placeholder="Defina um horário" />
                    </div>
                    <div className="formRow">
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="formRow">
                        <p>Ciclos</p>
                        <p>0 0 0 0 0 0 0 0</p>
                    </div>
                    <div className="formRow">
                        <button>Enviar</button>
                    </div>
                </form>
            </Container>
        </>
    )
}