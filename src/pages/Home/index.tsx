
import { MainTemplate } from "../../templates/MainTemplate";
import { Container } from "../../components/Container";
import { CountDown } from "../../components/CountDown";
import { Form } from "../../components/Form";
import { useEffect } from "react";

export function Home() {
    useEffect(() => {
    document.title = 'Chronos Pomodoro';
    }, []);

    return (
        <MainTemplate>
            <Container>
                <CountDown />
            </Container>
            <Container>
                <Form/>
            </Container>
        </MainTemplate>
    );
}