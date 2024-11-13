import styled from "styled-components";

export const Main = styled.main`
padding: 113px;
height: 100vh;
display: flex;
justify-content: space-between;
align-items: center;
background-color: #1E3932;
gap: 55px;

.info{
    width: 600px;
    color: #FFFFFF;

    .preparacao{
        font: 700 1.5rem "Inter", sans-serif;
    }

    h2{
        font: 400 4rem "Poppins", sans-serif;
    }

    p{
        font: 400 1.5rem "Poppins", sans-serif;
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
    }
}
`;