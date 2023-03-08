//This functions sets the localStorage info to make persistent data.

export const setLocalStorage = (coffeeArray) => {

    localStorage.setItem('coffeeArray', JSON.stringify(coffeeArray));

}