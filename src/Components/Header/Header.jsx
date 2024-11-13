import { Link } from "react-router-dom"
import { Cabecalho } from "./style"

export default function Header() {
    return (
        <Cabecalho>
            <img src="/src/assets/image/logo 2.png" alt="logomarca" />

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