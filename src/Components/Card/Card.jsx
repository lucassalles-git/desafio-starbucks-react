import { Link } from "react-router-dom"
import { Section } from "./style"

export default function Card(){
    return(
        <Section className="section-copos">
                    <div><Link to="/"><img src="/src/assets/image/laranja.png" alt="Suco de Laranja" /></Link></div>
                    <div><Link to="/Home2"><img src="/src/assets/image/vermelho.png" alt="Suco de Morango" /></Link></div>
                    <div><Link to="/Home3"><img src="/src/assets/image/amarelo.png" alt="Suco de Maracuja" /></Link></div>
                </Section>
    )
}