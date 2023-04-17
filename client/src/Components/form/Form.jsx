import React from "react";
import { useDispatch } from "react-redux";
import {
    FormContainer,
    FormTitle,
    FormLabel,
    FormInput,
    FormButton,
    Wrapper
} from "./FormStyles";

const Form = () => {
    const [inputs, setInputs] = React.useState({
        nombre: "",
        tipo: "",
        Ataque: 0,
        defensa: 0,
        altura: 0,
        peso: 0,
        velocidad: 0,
        vida: 0,
        imagen: "",
    });

    function handleInputChanges(e) {
        setInputs({ ...inputs, [e.target.name]: e.target.value });
    }

    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        //validaciones
        //dispatch de accion post
    };

    return (
        <Wrapper>
            <FormContainer>
                <FormTitle>Crea tu Pokemon</FormTitle>

                <form action="" onSubmit={handleSubmit}>
                    <FormLabel htmlFor="">Nombre: </FormLabel>
                    <FormInput
                        type="text"
                        value={inputs.nombre}
                        name="nombre"
                        onChange={handleInputChanges}
                    />
                    {/* { inputs.name.length > 30 && <p>Nombre u Pais demasiado largo</p>} */}

                    <FormLabel htmlFor="">Tipo: </FormLabel>
                    <FormInput
                        type="text"
                        value={inputs.tipo}
                        name="tipo"
                        onChange={handleInputChanges}
                    />
                    {/* { inputs.pais.length > 30 && <p>Nombre u Pais demasiado largo</p>} */}

                    <FormLabel htmlFor="">Ataque: </FormLabel>
                    <FormInput
                        type="number"
                        value={inputs.ataque}
                        name="ataque"
                        onChange={handleInputChanges}
                    />
                    <FormLabel htmlFor="">Defensa: </FormLabel>
                    <FormInput
                        type="number"
                        name="defensa"
                        value={inputs.defensa}
                        onChange={handleInputChanges}
                    ></FormInput>

                    <FormLabel htmlFor="">Altura: </FormLabel>
                    <FormInput
                        value={inputs.altura}
                        type="number"
                        name="altura"
                        onChange={handleInputChanges}
                    />
                    {/* {inputs.numeroCamiseta < 0 && <p>El numero de camiseta tiene que ser mayor a 0</p>} */}

                    <FormLabel htmlFor="">Peso: </FormLabel>
                    <FormInput
                        value={inputs.peso}
                        type="number"
                        name="peso"
                        onChange={handleInputChanges}
                    />

                    <FormLabel htmlFor="">Velocidad: </FormLabel>
                    <FormInput
                        type="number"
                        value={inputs.velocidad}
                        name="velocidad"
                        onChange={handleInputChanges}
                    />

                    <FormLabel htmlFor="">Vida: </FormLabel>
                    <FormInput
                        type="number"
                        value={inputs.vida}
                        name="vida"
                        onChange={handleInputChanges}
                    />

                    <FormLabel htmlFor="">Imagen URL: </FormLabel>
                    <FormInput
                        type="text"
                        value={inputs.imagen}
                        name="imagen"
                        onChange={handleInputChanges}
                    />

                    <FormButton type="submit">Crear Pokemon</FormButton>
                </form>
            </FormContainer>
        </Wrapper>
    );
};

export default Form;
