import styled from "styled-components";

export const Main = styled.main`
padding: 113px;
height: 100vh;
display: flex;
justify-content: space-between;
align-items: center;
background-color: #1E3932;

@media (min-width: 320px) and (max-width: 440px){
    padding: 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 4rem;
}

.info{
    width: 600px;
    color: #FFFFFF;

    @media (min-width: 320px) and (max-width: 440px){
        padding: 0 5px;
        height: 16rem;
        width: 100vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;

        text-align: center;
       
    }

    .preparacao{
        font: 700 1.5rem "Inter", sans-serif;

        @media (min-width: 320px) and (max-width: 440px){
        font-size: 1.4rem;
    }
    }

    h2{
        font: 400 4rem "Poppins", sans-serif;

        @media (min-width: 320px) and (max-width: 440px){
        font-size: 2.1rem;
    }
    }

    p{
        font: 400 1.5rem "Poppins", sans-serif;

        @media (min-width: 320px) and (max-width: 440px){
        font-size: 0.9rem;
    }
    }

    button{
        margin-top: 40px;
        width: 18.4rem;
        height: 4rem;
        border: none;
        border-radius: 1.9rem;
        background-color: #037143;

        font: 700 1.5rem "Inter", sans-serif;
        color: #FFFFFF;

        @media (min-width: 320px) and (max-width: 440px){
        margin: 0;
        width: 13rem;
        height: 3.5rem;
        font-size: 1rem;
    }
    }

    button:hover{
    background-color: #03643c;
}
}

img{
    @media (min-width: 320px) and (max-width: 440px){
        width: 300px;
        height: 250px;
    }
}
`;