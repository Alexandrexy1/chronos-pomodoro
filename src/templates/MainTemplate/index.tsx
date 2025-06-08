import { PropsWithChildren } from "react";
import { Container } from "../../components/Container";
import { Logo } from "../../components/Logo";
import { Menu } from "../../components/Menu";
import { Footer } from "../../components/Footer";



export function MainTemplate({ children }: PropsWithChildren) {
    return (
        <>
            <Container>
                <Logo />
            </Container>
            <Container>
                <Menu />
            </Container>
            {
                children
            }
            <Container>
                <Footer />
            </Container>
        </>
    )
}