import styled from "styled-components";

export const Main = styled.main`
padding: 145px;
height: 100vh;
display: flex;
justify-content: space-between;
align-items: center;
gap: 180px;

.info{
    width: 634px;

    .preparacao{
        font: 700 1.5rem "Inter", sans-serif;
        color: #1E3932;
    }

    h2{
        font: 400 4rem "Poppins", sans-serif;
        color: #1E3932;
    }

    p{
        font: 400 1.5rem "Poppins", sans-serif;
        color: #1E3932;
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

    button:hover{
    background-color: #03643c;
}

}
`;