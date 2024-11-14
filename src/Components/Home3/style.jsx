import styled from "styled-components";

export const Main = styled.main`
height: 100vh;
display: flex;
justify-content: space-between;

@media (min-width: 320px) and (max-width: 425px){
    display: flex;
    flex-direction: column;
}

.section-one{
    width: 860px;

    .info{
    margin: 106px 0 0 116px;
    height: 52vh;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (min-width: 320px) and (max-width: 425px){
        margin: 0 0 40px 0;
        height: 21rem;
        width: 100vw;

        display: flex;
        flex-direction: column;
        align-items: center;

        text-align: center;
    }
    
h2{
    font: 400 4rem "Inter", sans-serif;
    color: #000000CC;

    @media (min-width: 320px) and (max-width: 425px){
        font-size: 1.5rem;
    }
}

.paragrafo{
    height: 85px;
    width: 44.3rem;
    display: flex;
    justify-content: space-between;

    @media (min-width: 320px) and (max-width: 425px){
        height: 40px;
        width: 274px;
        display: flex;
        align-items: center;
    }

    p{
        font: 400 4rem "Poppins", sans-serif;

        @media (min-width: 320px) and (max-width: 425px){
            font-size: 2rem;
        }
    }

    h1{
        display: flex;
        align-items: center;
        height: 100%;
        font: 700 6rem "Poppins", sans-serif;
        color: #037143;

        @media (min-width: 320px) and (max-width: 425px){
            font-size: 2.1rem;
        }
    }

}

p{
    width: 46rem;
    font: 400 1.5rem "Poppins", sans-serif;

    @media (min-width: 320px) and (max-width: 425px){
        font-size: 0.9rem;
        text-align: justify;
        width: 17rem;
    }
}

button{
    width: 293px;
    height: 64px;
    border: none;
    border-radius: 30px;
    background-color: #037143;
    color: #FFFFFF;

    font: 700 1.5rem "Inter", sans-serif; 

    @media (min-width: 320px) and (max-width: 425px){
        width: 130px;
        height: 40px;

        font-size: 0.9rem;
    }
}

button:hover{
    background-color: #03643c;
}
}
}
.section-two{
    margin-top: 386px;
    width: 580px;
    border-radius: 100% 0 0 0;
    background-color: #DECD13;

    position: relative;

    @media (min-width: 320px) and (max-width: 425px){
        margin: 100px auto;
        width: 220px;
        height: 300px;
        border-radius: 100%;
    }

    img{
        position: absolute;
        top: -80px;
        left: 50px;

        @media (min-width: 320px) and (max-width: 425px){
            position: relative;
            height: 200px;
            margin: auto;
            top: -30%;
            left: 6.5%;
        }
    }
}
`;