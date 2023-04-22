import React from "react";
import { useState, useEffect } from "react";

import {
    FormContainer,
    FormTitle,
    FormLabel,
    FormInput,
    FormButton,
    Wrapper,
    SubCont,
    SelectInput,
} from "./FormStyles";
import Detail from "../detail/Detail";
import * as validations from "./validations";

import { postPoke, getTypes } from "../../Redux/Actions";
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

    const dispatch = useDispatch();

    useEffect(() => {
        getTypes(dispatch);
    }, []);

    const typesArray = props.types[0] || [];
    const OptionTipos = typesArray.map((element) => {
        return <option value={element.nombre}>{element.nombre}</option>;
    });

    function handleInputChanges(e) {
        setInputs({ ...inputs, [e.target.name]: e.target.value });
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        //chequeo si estan vacios.

        for (const key in inputs) {
            const element = inputs[key];
            if (element === "" || element === 0) {
                setErrorFlag((prevState) => ({ ...prevState, [key]: "empty" }));
                console.log("entra");
            }
        }

        if (inputs.nombre) {
            console.log(inputs.nombre)
            const pattern = /^[a-zA-Z]+$/;
            const isValidChar = pattern.test(inputs.nombre); //.test metodo para probar regex
            const isValidLength = inputs.nombre.length <= 11;
            if (!isValidChar || isValidLength) {
                setErrorFlag(prevState => ({
                    ...prevState,
                    nombre: true,
                }));
                console.log("nombre is failing");

            }
        }
        if (inputs.inputTipo) {
            const isValidType = props.types.indexOf(inputs.inputTipo) >= 0;
            if (isValidType < 0) {
                setErrorFlag(prevState=>({
                    ...prevState,
                    inputTipo: true,
                }));
                console.log("Tipo is failing");
            }else{
                setErrorFlag(prevState=>({
                    ...prevState,
                    inputTipo: false,
                }));
            }
        }
        if (inputs.imagen) {
            const pattern = /^(ftp|http|https):\/\/[^ "]+$/;
            const isValidUrl = pattern.test(inputs.imagen);
            if (!isValidUrl) {
                setErrorFlag(prevState=>({
                    ...prevState,
                    imagen: true,
                }));
                console.log("imagen is failing");
            }
        }

        for (const key in inputs) {
            const element = inputs[key];
            if (
                key !== "nombre" && key !=="inputTipo" && key !=="imagen"
            ) {
                let pattern = /^\d+$/;
                let isValidChar = pattern.test(element);
                let moreThanValid = element < 500;
                if (!isValidChar || !moreThanValid) {
                    setErrorFlag(prevState=>({ ...prevState, [key]: true }));
                    console.log(key + " is failing");
                }
            }
        }

        for (const key in errorFlag) {
            const element = errorFlag[key];
            console.log(element)
            if (element === true ||element === "empty" ) {
            console.log("hay un error aborting");
            return null;
            }
        }

        //     postPoke(dispatch, inputs);
        //     setInputs({
        //         nombre: "",
        //         inputTipo: "",
        //         ataque: 0,
        //         defensa: 0,
        //         altura: 0,
        //         peso: 0,
        //         velocidad: 0,
        //         vida: 0,
        //         imagen: "",
        //     });
        alert("final");
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
                    {/* <FormInput
                        type="text"
                        value={inputs.inputTipo}
                        name="inputTipo"
                        onChange={handleInputChanges}
                    /> */}

                    <SelectInput
                        name="inputTipo"
                        value={inputs.inputTipo}
                        onChange={handleInputChanges}
                    >
                        <option value="default" disabled defaultValue selected hidden>
                            Select Tipo
                        </option>
                        {OptionTipos}
                    </SelectInput>
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

export const mapDispatchToProps = {
    getTypes,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
