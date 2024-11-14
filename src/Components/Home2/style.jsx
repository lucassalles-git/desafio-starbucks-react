import styled from "styled-components";

export const Main = styled.main`
height: 100vh;
display: flex;
justify-content: space-between;

.section-one{
    width: 860px;

    .info{
    margin: 106px 0 0 116px;
    height: 52vh;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
h2{
    font: 400 4rem "Inter", sans-serif;
    color: #000000CC;
}

.paragrafo{
    height: 85px;
    width: 44.3rem;
    display: flex;
    justify-content: space-between;

    p{
        font: 400 4rem "Poppins", sans-serif;
    }

    h1{
        display: flex;
        align-items: center;
        height: 100%;
        font: 700 6rem "Poppins", sans-serif;
        color: #037143;
    }

}

p{
    width: 46rem;
    font: 400 1.5rem "Poppins", sans-serif;
}

button{
    width: 293px;
    height: 64px;
    border: none;
    border-radius: 30px;
    background-color: #037143;
    color: #FFFFFF;

    font: 700 1.5rem "Inter", sans-serif; 
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
    background-color: #97090C;

    position: relative;

    img{
        position: absolute;
        top: -80px;
        left: 50px;
    }
}
`;