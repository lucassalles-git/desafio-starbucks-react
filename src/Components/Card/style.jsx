import styled from "styled-components";

export const Section = styled.section`
    margin: 150px 0 47px 466px;
    height: 120px;
    width: 400px;

    display: flex;
    gap: 33px;

    @media (min-width: 320px) and (max-width: 440px){
        margin: 0;
        width: 100vw;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
    }

    img{
        position: relative;
        z-index: 1;
        height: 130px;
        transition: all 0.4s;

        @media (min-width: 320px) and (max-width: 440px){
            height: 100px;
        }
    }
    img:hover{
        transform: rotate(12deg);
        transition: all 0.4s;
    }

`;