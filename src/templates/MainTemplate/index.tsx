import { PropsWithChildren } from "react";
import { Container } from "../../components/Container";
import { Footer } from "../../components/Footer";
import { Logo } from "../../components/Logo";
import { Menu } from "../../components/Menu";



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