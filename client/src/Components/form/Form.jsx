import React from "react";
import { useState } from "react";

import {
    FormContainer,
    FormTitle,
    FormLabel,
    FormInput,
    FormButton,
    Wrapper,
    SubCont,
} from "./FormStyles";
import Detail from "../detail/Detail";
import * as validations from "./validations";

import { postPoke } from "../../Redux/Actions";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";

const Form = (props) => {
    const [inputs, setInputs] = useState({
        nombre: "",
        imagen: "",
        inputTipo: "",
        ataque: 0,
        defensa: 0,
        altura: 0,
        peso: 0,
        velocidad: 0,
        vida: 0,
    });
    const [errorFlag, setErrorFlag] = useState({
        nombre: false,
        imagen: false,
        inputTipo: false,
        ataque: false,
        defensa: false,
        altura: false,
        peso: false,
        velocidad: false,
        vida: false,
    });

    function handleInputChanges(e) {
        setInputs({ ...inputs, [e.target.name]: e.target.value });
    }

    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();

        //chequeo si estan vacios.
        for (const key in inputs) {
            const element = inputs[key];
            if (!element || element < 0) {
                setErrorFlag({ ...errorFlag, [errorFlag.key]: true });
                console.log(key + "is empty")
            }
        }

        if (inputs.nombre) {
            const pattern = /^[a-zA-Z]+$/;
            const isValidChar = pattern.test(inputs.nombre); //.test metodo para probar regex
            const isValidLength = inputs.nombre.length <= 11;
            if (!isValidChar || isValidLength) {
                setErrorFlag({
                    ...errorFlag,
                    [errorFlag.nombre]: true,
                });
                console.log("nombre is failing");
                return null;
            }
        }
        if (inputs.inputTipo) {
            const isValidType = props.types.indexOf(inputs.inputTipo)>= 0;
            if (isValidType < 0) {
                setErrorFlag({
                    ...errorFlag,
                    [errorFlag[inputs.inputTipo]]: true,
                });
                console.log("Tipo is failing");
                return null;
            }
        }
        if (inputs.imagen) {
            const pattern = /^(ftp|http|https):\/\/[^ "]+$/;
            const isValidUrl = pattern.test(inputs.imagen);
            if (!isValidUrl) {
                setErrorFlag({
                    ...errorFlag,
                    [errorFlag.imagen]: true,
                });
                console.log("imagen is failing");
            }
        }

        for (const key in inputs) {
            const element = inputs[key];
            if (
                key === "ataque" ||
                "defensa" ||
                "altura" ||
                "peso" ||
                "velocidad" ||
                "vida"
            ) {
                let pattern = /^\d+$/;
                let isValidChar = pattern.test(element);
                let moreThanValid = element < 500;
                if (!isValidChar || !moreThanValid) {
                    setErrorFlag({ ...errorFlag, [key]: true });
                    console.log(key + "is failing");
                }
            }
        }

        for (const key in errorFlag) {
            const element = errorFlag[key];
            if (element === true) return null;
        }

        postPoke(dispatch, inputs);
        setInputs({
            nombre: "",
            inputTipo: "",
            ataque: 0,
            defensa: 0,
            altura: 0,
            peso: 0,
            velocidad: 0,
            vida: 0,
            imagen: "",
        });
        alert("Pokemon Succesfully Created");
    };

    return (
        <Wrapper>
            {/* <FormTitle>Crea tu Pokemon</FormTitle> */}
            <FormContainer action="" onSubmit={handleSubmit}>
                <SubCont>
                    <FormLabel htmlFor="">Nombre: </FormLabel>
                    <FormInput
                        type="text"
                        value={inputs.nombre}
                        name="nombre"
                        onChange={handleInputChanges}
                    />
                    {/* { inputs.name.length > 12 && <p>Nombre demasiado Largo</p>} */}

                    <br />
                    <FormLabel htmlFor="">Tipo: </FormLabel>
                    <FormInput
                        type="text"
                        value={inputs.inputTipo}
                        name="inputTipo"
                        onChange={handleInputChanges}
                    />
                    {/* { inputs.pais.length > 30 && <p>Nombre u Pais demasiado largo</p>} */}
                    <br />
                    <FormLabel htmlFor="">Imagen URL: </FormLabel>
                    <FormInput
                        type="text"
                        value={inputs.imagen}
                        name="imagen"
                        onChange={handleInputChanges}
                    />
                    <br />
                    <FormLabel htmlFor="">Vida: </FormLabel>
                    <FormInput
                        type="number"
                        value={inputs.vida}
                        name="vida"
                        onChange={handleInputChanges}
                    />
                    <br />
                    <FormLabel htmlFor="">Velocidad: </FormLabel>
                    <FormInput
                        type="number"
                        value={inputs.velocidad}
                        name="velocidad"
                        onChange={handleInputChanges}
                    />
                </SubCont>
                <SubCont>
                    <FormLabel htmlFor="">Ataque: </FormLabel>
                    <FormInput
                        type="number"
                        value={inputs.ataque}
                        name="ataque"
                        onChange={handleInputChanges}
                    />
                    <br />
                    <FormLabel htmlFor="">Defensa: </FormLabel>
                    <FormInput
                        type="number"
                        name="defensa"
                        value={inputs.defensa}
                        onChange={handleInputChanges}
                    ></FormInput>
                    <br />
                    <FormLabel htmlFor="">Altura: </FormLabel>
                    <FormInput
                        value={inputs.altura}
                        type="number"
                        name="altura"
                        onChange={handleInputChanges}
                    />
                    {/* {inputs.numeroCamiseta < 0 && <p>El numero de camiseta tiene que ser mayor a 0</p>} */}
                    <br />
                    <FormLabel htmlFor="">Peso: </FormLabel>
                    <FormInput
                        value={inputs.peso}
                        type="number"
                        name="peso"
                        onChange={handleInputChanges}
                    />
                    <br />
                    <FormButton type="submit">Crear Pokemon</FormButton>
                </SubCont>
            </FormContainer>
        </Wrapper>
    );
};
export const mapStateToProps = (state) => {
    return {
        types: state.types,
    };
};

export default connect(mapStateToProps, null)(Form);
