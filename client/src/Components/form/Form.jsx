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
import { SearchButton as BackButton } from "../SearchBar/SBStyles";

import Detail from "../detail/Detail";
import * as validations from "./validations";

import { postPoke, getTypes } from "../../Redux/Actions";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import {Link} from "react-router-dom"

const Form = (props) => {
     const [inputs, setInputs] = useState({
        nombre: "",
        imagen: "",
        types: [],
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
        types: false,
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
            if (element === "" || element === 0 ||element === []) {
                setErrorFlag((prevState) => ({ ...prevState, [key]: "empty" }));
            }
        }

        //validaciones

        if (inputs.nombre) {
            console.log(inputs.nombre)
            const pattern = /^[a-zA-Z]+$/;
            const isValidChar = pattern.test(inputs.nombre); //.test metodo para probar regex
            console.log(isValidChar)
            const isValidLength = inputs.nombre.length <= 20;
            if (!isValidChar || !isValidLength) {
                setErrorFlag(prevState => ({
                    ...prevState,
                    nombre: true,
                }));
                console.log("nombre is failing");

            }
        }
        if (inputs.types) {
            const isValidType = props.types.indexOf(inputs.types) >= 0;
            if (isValidType < 0) {
                setErrorFlag(prevState=>({
                    ...prevState,
                    types: true,
                }));
                console.log("Tipo is failing");
            }else{
                setErrorFlag(prevState=>({
                    ...prevState,
                    types: false,
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
                key !== "nombre" && key !=="types" && key !=="imagen"
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

        //¿Hay error?
        for (const key in errorFlag) {
            const element = errorFlag[key];
            if (element === true ||element === "empty" ) {
            console.log("Hay un error aborting");
            return null;
            }
        }

            postPoke(dispatch, inputs);
            setInputs({
                nombre: "",
                types: [],
                ataque: 0,
                defensa: 0,
                altura: 0,
                peso: 0,
                velocidad: 0,
                vida: 0,
                imagen: "",
            });
        alert("El pokemon ha sido creado con exito!");
    };

    return (<>
        <Wrapper>
            <FormContainer action="" onSubmit={handleSubmit}>
                <SubCont>
                    <FormLabel htmlFor="">Nombre: </FormLabel>
                    <FormInput
                        type="text"
                        value={inputs.nombre}
                        name="nombre"
                        onChange={handleInputChanges}
                    />
                    {validations.nameValidator(errorFlag)}

                    <br />
                    <FormLabel htmlFor="">Tipo: </FormLabel>
                    {/* <FormInput
                        type="text"
                        value={inputs.types}
                        name="types"
                        onChange={handleInputChanges}
                    /> */}

                    <SelectInput
                        name="types"
                        value={[inputs.types]}
                        onChange={handleInputChanges}
                    >
                        <option value="default" disabled defaultValue selected hidden>
                            Select Tipo
                        </option>
                        {OptionTipos}
                    </SelectInput>
                    {validations.tipeValidator(errorFlag)}
                    <br />
                    <FormLabel htmlFor="">Imagen URL: </FormLabel>
                    <FormInput
                        type="text"
                        value={inputs.imagen}
                        name="imagen"
                        onChange={handleInputChanges}
                    />
                    {validations.urlValidator(errorFlag)}
                    <br />
                    <FormLabel htmlFor="">Vida: </FormLabel>
                    <FormInput
                        type="number"
                        value={inputs.vida}
                        name="vida"
                        onChange={handleInputChanges}
                    />
                    {validations.numberValidator(errorFlag,"vida")}
                    <br />
                    <FormLabel htmlFor="">Velocidad: </FormLabel>
                    <FormInput
                        type="number"
                        value={inputs.velocidad}
                        name="velocidad"
                        onChange={handleInputChanges}
                    />
                    {validations.numberValidator(errorFlag,"velocidad")}
                </SubCont>
                <SubCont>
                    <FormLabel htmlFor="">Ataque: </FormLabel>
                    <FormInput
                        type="number"
                        value={inputs.ataque}
                        name="ataque"
                        onChange={handleInputChanges}
                    />
                    {validations.numberValidator(errorFlag,"ataque")}
                    <br />
                    <FormLabel htmlFor="">Defensa: </FormLabel>
                    <FormInput
                        type="number"
                        name="defensa"
                        value={inputs.defensa}
                        onChange={handleInputChanges}
                    ></FormInput>
                    {validations.numberValidator(errorFlag,"defensa")}
                    <br />
                    <FormLabel htmlFor="">Altura: </FormLabel>
                    <FormInput
                        value={inputs.altura}
                        type="number"
                        name="altura"
                        onChange={handleInputChanges}
                    />
                    {validations.numberValidator(errorFlag,"altura")}
                    <br />
                    <FormLabel htmlFor="">Peso: </FormLabel>
                    <FormInput
                        value={inputs.peso}
                        type="number"
                        name="peso"
                        onChange={handleInputChanges}
                    />
                    {validations.numberValidator(errorFlag,"peso")}
                    <br />
                    <FormButton type="submit">Crear Pokemon</FormButton>
                </SubCont>
            </FormContainer>
            <Link to="/Home"><BackButton>Back Home</BackButton></Link>
        </Wrapper>
        
        </>
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
