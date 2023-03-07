import { useSelector } from "react-redux";

export const setLocalStorage = (coffeeArray) => {

    localStorage.setItem('coffeeArray', JSON.stringify(coffeeArray));
    console.log('local storage set');
}