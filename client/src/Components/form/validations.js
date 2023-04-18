export const nameValidator = (event,flag, flagFunct) =>{
    const input = event.target.value;
    if (input === "") {
        flagFunct({...flag, [flag.inputName]: true})
        return null 
    }
    const inputName= event.target.name
    console.log(inputName)
    const pattern = /^[a-zA-Z]+$/;
    const isValidChar= pattern.test(input); //.test metodo para probar regex
    const isValidLength = input.length <= 11
if (!isValidChar || isValidLength) {
    flagFunct({...flag, [flag.inputName]: true})
    return null 
}
}

export const urlValidator= (event,flag,flagFunct)=>{
    const input = event.target.value;
    if (input === "") {
        flagFunct({...flag, [flag.inputName]: true})
        return null 
    }
    const inputName= event.target.name
    const pattern = /^(ftp|http|https):\/\/[^ "]+$/;
    const isValidUrl = pattern.test(input)
    if(!isValidUrl) {
        flagFunct({...flag, [flag.inputName]: true})
        return null 
    }
}

export const tipeValidator= (event,types,flag,flagFunct)=>{
    const input = event.target.value;
    if (input === "") {
        flagFunct({...flag, [flag.inputName]: true})
        return null 
    }
    const inputName= event.target.name
    const isValidType = types.indexOf(input)
    if(isValidType < 0) {
        flagFunct({...flag, [flag.inputName]: true})
        return null 
    }
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