import { HouseIcon, HistoryIcon, SettingsIcon, SunIcon, MoonIcon } from "lucide-react";
import styles from  "./styles.module.css";
import { useState, useEffect } from "react";
import { Link } from "react-router";

type AvaiableThemes = "dark" | "light";

export function Menu() {
    const [theme, setTheme] = useState<AvaiableThemes>(() => {
        const storageTheme = localStorage.getItem("theme") as AvaiableThemes || "dark";
        return storageTheme;
    });

    const nextThemeIcon = {
        dark: <SunIcon />,
        light: <MoonIcon />
    }

    function handleThemeChange(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
        event.preventDefault();

        setTheme(prevTheme => {
            const nextTheme = prevTheme === "dark" ? "light" : "dark";
            return nextTheme;
        }); 
    }

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme])

    return (
        <div className={ styles.menu }>
            <Link 
                to="/" className={ styles.menuLink } 
                aria-label="Ir para a Home" 
                title="Ir para a Home">
                <HouseIcon/>
            </Link>
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
                { nextThemeIcon[theme] }
            </a>
        </div>
    )
}
