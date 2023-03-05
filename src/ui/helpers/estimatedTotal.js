import { useSelector } from "react-redux";

export const estimatedTotal = (shipping, discount = 0, tax) => {
    
    const {coffeeArray} = useSelector((state) => state.shopCart);

    var total = 0;
    coffeeArray.map(e => total += (e.price * e.quantity));
    
    const totShip = total * shipping;
    const totDisc = total * discount;
    const totTax = total * tax;

    const estTot = total + totShip - totDisc + totTax; 


    return{

        total,
        estTot,
        totShip,
        totDisc,
        totTax

    }
}