import { useEffect, useMemo, useState } from 'react';

//Este Hook personalizado fue extraído de Internet

export const useForm = ( initialForm = {}, formValidations = {}) => {
  
    const [ formState, setFormState ] = useState( initialForm ); // Uso un state para setear el estado inicial del formulario
    const [ formValidation, setFormValidation ] = useState({}); // En este caso no usé las validaciones

    useEffect(() => {
        createValidators();
    }, [ formState ])

    useEffect(() => {
        setFormState( initialForm ); //Actualizamos el InitialForm cada vez que este mismo cambie
    }, [initialForm])

    const isFormValid = useMemo( () => {

        for (const formValue of Object.keys( formValidation )) {
            if ( formValidation[formValue] !== null ) return false;
        }

        return true;
    }, [ formValidation ])


    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({  //Cada vez que cambia la entrada, el FormState se actualiza con los valores correspondientes
            ...formState,
            [ name ]: value
        });
    }

    const onResetForm = () => {
        setFormState( initialForm ); //Se vuelve el formulario a su estado inicial
    }

    const createValidators = () => {
        
        const formCheckedValues = {};
        
        for (const formField of Object.keys( formValidations )) {
            const [ fn, errorMessage ] = formValidations[formField];

            formCheckedValues[`${ formField }Valid`] = fn( formState[formField] ) ? null : errorMessage;
        }

        setFormValidation( formCheckedValues );
    }


    //Exportación de las funciones y variables

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,

        ...formValidation,
        isFormValid
    }
}