import styled from "styled-components";

export const Cabecalho = styled.header`
padding: 27px 99px 27px 99px;
height: 8.5rem;

display: flex;
justify-content: space-between;
align-items: center;

@media (min-width: 320px) and (max-width: 440px){
    padding: 0;
    height: 4rem;
}

img{
    @media (min-width: 320px) and (max-width: 440px){
        height: 60px;
    }
}

nav{
    width: 30rem;
}

ul{
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;
}

li{
    list-style: none;
    font: 400 1.5rem "Poppins", sans-serif;

    @media (min-width: 320px) and (max-width: 440px){
        font-size: 1rem;
    }
}

a{
    text-decoration: none;
    color: #1E3932;
}

a:hover{
    border-bottom: 2px solid #1E3932;
}
`;