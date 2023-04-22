export const nameValidator = (errorFlag) =>{
if (errorFlag.nombre ==="empty") return <p>Campo obligatorio.</p>
if (errorFlag.nombre ===false) return <p>Nombre Invalido. No se permiten caracteres especiales o numericos.</p>
}

export const urlValidator= (errorFlag)=>{
    if (errorFlag.imagen ==="empty") return <p>Campo obligatorio.</p>
    if (errorFlag.imagen ===false) return <p>Url Invalida.</p>
}

export const tipeValidator= (errorFlag)=>{
    if (errorFlag.inputTipo ==="empty") return <p>Campo obligatorio.</p>
    if (errorFlag.inputTipo ===false) return <p>Tipo Invalido.</p>
}

export const numberValidator = (event,flag,flagFunct)=>{
    const input = event.target.value;
    if (input <=0 ) {
        flagFunct({...flag, [flag.inputName]: true})
        return null 
    }
    const inputName= event.target.name
    const pattern = /^\d+$/;
    const isValidChar= pattern.test(input);
    const moreThanValid = input < 500
if (!isValidChar || !moreThanValid) {
    flagFunct({...flag, [flag.inputName]: true})
    return null 
}
}