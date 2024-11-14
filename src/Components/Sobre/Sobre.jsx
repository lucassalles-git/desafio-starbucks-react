import { Main } from "./style"
import Loja from "../../assets/image/loja.png"

export default function Sobre(){
    return(
        <Main>
            <img src={Loja} alt="Primeira loja da StarBucks" />
            <section className="info">
                <p className="preparacao">PREPARAÇÃO</p>
                <h2>Níveis de torra</h2>
                <p>Qual a torra que prefere? Starbucks® Torra Clara, Torra Média ou Torra Escura? Estas sãos as torras que fazem parte dos níveis de torra Starbucks®</p>

                <button>SAIBA MAIS</button>
            </section>
        </Main>
    )
}