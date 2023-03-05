import axios from 'axios'
const url = 'https://api.sampleapis.com/coffee/hot'

export const getCoffeeData = async() =>{
    
    try {

        const {data} = await axios.get(url);
        const prices = [1, 1.25, 2, 1.50, 2.50, 2.75, 1.75, 2.25, 3, 3.50, 1, 1.25, 2, 1.50, 2.50, 2.75, 1.75, 2.25, 3, 3.50]
        
    
        const coffees = data.map(e => (
    
            {
                id: e.id,
                id_name : e.title.split(/[ :-]/).join(''), 
                name : e.title,
                price : (e.id <= prices.length) ? prices[e.id - 1] : 2,
                description : e.description,
                ingredients : e.ingredients,
                quantity : 0,
            }
        ))
    
        return coffees;
        
    } catch (error) {

        console.log(error);
        return [];
    }
}