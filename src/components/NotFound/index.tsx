import { MainTemplate } from "../../templates/MainTemplate";
import { Container } from "../Container";
import { GenericHtml } from "../GenericHtml";
import { Heading } from "../Heading";

export function NotFound() {
    return(
        <MainTemplate>
            <Container>
                <GenericHtml>
                    <Heading>404 - Página não encontrada 🚀</Heading>
                
                    <p>
                        Opa! Parece que a página que você está tentando acessar não existe.
                        Talvez ela tenha tirado férias, resolvido explorar o universo ou
                        perdido em algum lugar entre dois buracos negros. 💫
                    </p>
                    <p>
                        Mas calma, você não está perdido no espaço (ainda). Dá pra você voltar
                        em segurança para a <a href="#">página principal</a> ou {' '}
                        <a href="#">para o histórico</a> - ou pode ficar por aqui e fingir que
                        achou uma página secreta que só os exploradores mais legais conseguem  acessar. 🧭⏳
                    </p>

                </GenericHtml>
            </Container>
        </MainTemplate>
)
}