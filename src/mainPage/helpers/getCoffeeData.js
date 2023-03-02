import axios from 'axios'
const url = 'https://api.sampleapis.com/coffee/hot'

export const getCoffeeData = async() =>{
    
    const {data} = await axios.get(url);
    

    const coffees = data.map(e => (
        {
            id: e.id,
            id_name : e.title.split(' ').join(''), 
            name : e.title,
            description : e.description,
            ingredients : e.ingredients,
        }
    ))

    return coffees;
}