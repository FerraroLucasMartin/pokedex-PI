import styled from "styled-components"

const ErrorMsg= styled.p`
margin-top: 1%;
margin-bottom: -4%;
color: red;
`

export const nameValidator = (errorFlag) =>{
if (errorFlag.nombre ==="empty") return <ErrorMsg>Campo obligatorio.</ErrorMsg>
if (errorFlag.nombre ===true) return <ErrorMsg> No se permiten caracteres especiales o numericos.</ErrorMsg>
}

export const urlValidator= (errorFlag)=>{
    if (errorFlag.imagen ==="empty") return <ErrorMsg>Campo obligatorio.</ErrorMsg>
    if (errorFlag.imagen ===true) return <ErrorMsg>Url Invalida.</ErrorMsg>
}

export const tipeValidator= (errorFlag)=>{
    if (errorFlag.types ==="empty") return <ErrorMsg>Campo obligatorio.</ErrorMsg>
    if (errorFlag.types ===true) return <ErrorMsg>Tipo Invalido.</ErrorMsg>
}

export const numberValidator = (errorFlag,input)=>{
    if (errorFlag[input] ==="empty") return <ErrorMsg>Campo obligatorio.</ErrorMsg>
    if (errorFlag[input] ===true) return <ErrorMsg>Coloca un valor entre 1 y 500</ErrorMsg>
}