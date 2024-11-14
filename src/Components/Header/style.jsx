import styled from "styled-components";

export const Cabecalho = styled.header`
padding: 27px 99px 27px 99px;
height: 8.5rem;

display: flex;
justify-content: space-between;
align-items: center;

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
}

a{
    text-decoration: none;
    color: #1E3932;
}

a:hover{
    border-bottom: 2px solid #1E3932;
}
`;