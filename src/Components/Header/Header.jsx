import { Link } from "react-router-dom"
import { Cabecalho } from "./style"
import logoStarbucks from "/src/assets/image/logo.png"

export default function Header() {
    return (
        <Cabecalho>
            <img src={logoStarbucks} alt="logomarca" />

            <nav>
                <ul>
                    <li><Link to="/" >Home</Link></li>
                    <li><Link to="/Novidades" >Novidades</Link></li>
                    <li><Link to="/Sobre" >Sobre</Link></li>
                </ul>
            </nav>
        </Cabecalho>
    )
}