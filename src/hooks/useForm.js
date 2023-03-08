import { useEffect, useMemo, useState } from 'react';

//This hook was extracted from internet

export const useForm = ( initialForm = {}, formValidations = {}) => {
  
    const [ formState, setFormState ] = useState( initialForm ); // I'm using useState hook here to set the initial value
    const [ formValidation, setFormValidation ] = useState({}); // In this case i'm not going to use this validations

    useEffect(() => {
        createValidators();
    }, [ formState ])

    useEffect(() => {
        setFormState( initialForm );
         //We update the inital form everytime it updates
    }, [initialForm])

    const isFormValid = useMemo( () => {

        for (const formValue of Object.keys( formValidation )) {
            if ( formValidation[formValue] !== null ) return false;
        }

        return true;
    }, [ formValidation ])


    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({  //Everytime that the entry changes it sets again with the proper values.
            ...formState,
            [ name ]: value
        });
    }

    const onResetForm = () => {
        setFormState( initialForm ); // Reseting the form to the initial State
    }

    const createValidators = () => {
        
        const formCheckedValues = {};
        
        for (const formField of Object.keys( formValidations )) {
            const [ fn, errorMessage ] = formValidations[formField];

            formCheckedValues[`${ formField }Valid`] = fn( formState[formField] ) ? null : errorMessage;
        }

        setFormValidation( formCheckedValues );
    }


    //Functions and variables exporting

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,

        ...formValidation,
        isFormValid
    }
}