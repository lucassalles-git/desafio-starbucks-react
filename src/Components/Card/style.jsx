import styled from "styled-components";

export const Section = styled.section`
    margin: 150px 0 47px 466px;
    height: 120px;
    width: 400px;

    display: flex;
    gap: 33px;

    img{
        position: relative;
        z-index: 1;
        height: 130px;
        transition: all 0.4s;
    }
    img:hover{
        transform: rotate(12deg);
        transition: all 0.4s;
    }

`;