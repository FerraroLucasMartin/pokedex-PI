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
import { Link } from "react-router-dom";

const Form = (props) => {
    const [inputs, setInputs] = useState({
        nombre: "",
        imagen: "",
        types: "default",
        ataque: 0,
        defensa: 0,
        altura: 0,
        peso: 0,
        velocidad: 0,
        vida: 0,
    });
    const [errorFlag, setErrorFlag] = useState({
        nombre: "empty",
        imagen: "empty",
        types: "empty",
        ataque: "empty",
        defensa: "empty",
        altura: "empty",
        peso: "empty",
        velocidad: "empty",
        vida: "empty",
    });

    const dispatch = useDispatch();

    useEffect(() => {
        getTypes(dispatch);
    }, []);

    const typesArray = props.types[0] || [];
    const OptionTipos = typesArray.map((element) => {
        return <option key={element.nombre} value={element.nombre}>{element.nombre}</option>;
    });

    function handleInputChanges(e) {

        setInputs({ ...inputs, [e.target.name]: e.target.value.toLowerCase() })

        console.log([e.target.name] + e.target.value )

        if (e.target.name === "nombre") {

            console.log(inputs.nombre);

            const pattern = /^[a-zA-Z]+$/;
            const isValidChar = pattern.test(e.target.value); //.test metodo para probar regex
            console.log(isValidChar);
            const isValidLength = inputs.nombre.length <= 20;

            if (!isValidChar || !isValidLength) {
                setErrorFlag((prevState) => ({
                    ...prevState,
                    nombre: true,
                }));
                console.log("nombre is failing");
            } else {
                setErrorFlag((prevState) => ({
                    ...prevState,
                    nombre: false,
                }));
            }
        }

        if (e.target.name === "types") {
            const isValidType = props.types.indexOf(inputs.types) >= 0;
            if (isValidType < 0) {
                setErrorFlag((prevState) => ({
                    ...prevState,
                    types: true,
                }));
                console.log("Tipo is failing");
            } else {
                setErrorFlag((prevState) => ({
                    ...prevState,
                    types: false,
                }));
            }
        }

        if (e.target.name === "imagen") {
            const pattern = /^(ftp|http|https):\/\/[^ "]+$/;
            console.log(e.target.value);
            const isValidUrl = pattern.test(e.target.value);
            console.log(isValidUrl);
            if (!isValidUrl) {
                setErrorFlag((prevState) => ({
                    ...prevState,
                    imagen: true,
                }));
                console.log("imagen is failing");
            } else {
                setErrorFlag((prevState) => ({
                    ...prevState,
                    imagen: false,
                }));
            }
        }

        if (
            e.target.name !== "nombre" &&
            e.target.name !== "types" &&
            e.target.name !== "imagen"
        ) {
            let pattern = /^\d+$/;
            let isValidChar = pattern.test(e.target.value);
            let moreThanValid = e.target.value < 500;
            if (!isValidChar || !moreThanValid) {
                setErrorFlag((prevState) => ({
                    ...prevState,
                    [e.target.name]: true,
                }));
                console.log(e.target.name + " is failing");
            } else {
                setErrorFlag((prevState) => ({
                    ...prevState,
                    [e.target.name]: false,
                }));
            }
        }


    }

    const handleSubmit = (event) => {
        event.preventDefault();
   
        const isFailing = Object.values(errorFlag).some(
            (val) => val === "empty" || val === true
        );
        
        if (isFailing) {
            alert("Error al crear Pokemon, revisa los Inputs");
            return null;
        }
        else {
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
            setErrorFlag({
                nombre: "empty",
                imagen: "empty",
                types: "empty",
                ataque: "empty",
                defensa: "empty",
                altura: "empty",
                peso: "empty",
                velocidad: "empty",
                vida: "empty",
            }
            )
            alert("El pokemon ha sido creado con exito!");
        }
    };

    return (
        <>
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
                        <SelectInput
                            name="types"
                            value={inputs.types}
                            onChange={handleInputChanges}
                        >
                            <option
                                value="default"
                                disabled
                                defaultValue
                                // selected
                                hidden
                            >
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
                        {validations.numberValidator(errorFlag, "vida")}
                        <br />
                        <FormLabel htmlFor="">Velocidad: </FormLabel>
                        <FormInput
                            type="number"
                            value={inputs.velocidad}
                            name="velocidad"
                            onChange={handleInputChanges}
                        />
                        {validations.numberValidator(errorFlag, "velocidad")}
                    </SubCont>
                    <SubCont>
                        <FormLabel htmlFor="">Ataque: </FormLabel>
                        <FormInput
                            type="number"
                            value={inputs.ataque}
                            name="ataque"
                            onChange={handleInputChanges}
                        />
                        {validations.numberValidator(errorFlag, "ataque")}
                        <br />
                        <FormLabel htmlFor="">Defensa: </FormLabel>
                        <FormInput
                            type="number"
                            name="defensa"
                            value={inputs.defensa}
                            onChange={handleInputChanges}
                        ></FormInput>
                        {validations.numberValidator(errorFlag, "defensa")}
                        <br />
                        <FormLabel htmlFor="">Altura: </FormLabel>
                        <FormInput
                            value={inputs.altura}
                            type="number"
                            name="altura"
                            onChange={handleInputChanges}
                        />
                        {validations.numberValidator(errorFlag, "altura")}
                        <br />
                        <FormLabel htmlFor="">Peso: </FormLabel>
                        <FormInput
                            value={inputs.peso}
                            type="number"
                            name="peso"
                            onChange={handleInputChanges}
                        />
                        {validations.numberValidator(errorFlag, "peso")}
                        <br />
                        <FormButton type="submit">Crear Pokemon</FormButton>
                    </SubCont>
                </FormContainer>
                <Link to="/Home">
                    <BackButton>Back Home</BackButton>
                </Link>
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
