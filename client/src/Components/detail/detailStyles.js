import styled from "styled-components";

export const DetailDiv = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-evenly;
    width: 65vw;
    background-color: #d0d0d0;
    border-radius: 10px;
    margin-top: 15px;
    margin-left: 15px;
    margin-right: 15px;
    padding-top: 15px;
    /* background-color: #f2f2f2; */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    height: 80vh
`;

export const ImgNameDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 500px;
`;

export const PokemonName = styled.h2`
    font-size: 24px;
`;

export const Img = styled.img`
    border-radius: 50%;
    border-color: #333;
    border-width: 2px;
    border-style: solid;
`;

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const InfoTag = styled.h2`
    margin: 5px 0;
    font-size: 18px;
`;

export const ValorTag = styled.span`
    font-size: 16px
    `;