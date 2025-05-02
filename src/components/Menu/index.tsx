import { HouseIcon, HistoryIcon, SettingsIcon, SunIcon } from "lucide-react";
import styles from  "./styles.module.css";
import { useState, useEffect } from "react";

type AvaiableThemes = "dark" | "light";

export function Menu() {
    const [theme, setTheme] = useState<AvaiableThemes>("dark");

    function handleThemeChange(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
        event.preventDefault();

        setTheme(prevTheme => {
            const nextTheme = prevTheme === "dark" ? "light" : "dark";
            return nextTheme;
        }); 
    }

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme])

    return (
        <div className={ styles.menu }>
            <a href="#" className={ styles.menuLink } 
                aria-label="Ir para a Home" 
                title="Ir para a Home">
                <HouseIcon/>
            </a>
            <a href="#" className={ styles.menuLink } 
                aria-label="Ir para o Histórico" 
                title="Ir para o Histórico">
                <HistoryIcon/>
            </a>
            <a href="#" className={ styles.menuLink } 
                aria-label="Ir para as Configurações" 
                title="Ir para as Configurações">
                <SettingsIcon/>
            </a>
            <a href="#" className={ styles.menuLink } 
                aria-label="Mudar tema do Site" 
                title="Mudar tema do Site"
                onClick={ handleThemeChange }>
                <SunIcon/>
            </a>
        </div>
    )
}
