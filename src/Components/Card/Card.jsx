import { Link } from "react-router-dom"
import { Section } from "./style"
import copoLaranja from "../../assets/image/laranja.png"
import copoVermelho from "../../assets/image/vermelho.png"
import copoAmarelo from "../../assets/image/amarelo.png"

export default function Card(){
    return(
        <Section className="section-copos">
                    <div><Link to="/"><img src={copoLaranja} alt="Copo Laranja" /></Link></div>
                    <div><Link to="/Home2"><img src={copoVermelho} alt="Copo Vermelho" /></Link></div>
                    <div><Link to="/Home3"><img src={copoAmarelo} alt="Copo Amarelo" /></Link></div>
                </Section>
    )
}