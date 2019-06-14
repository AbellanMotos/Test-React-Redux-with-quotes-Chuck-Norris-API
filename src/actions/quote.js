import store from '../store'

const API_URL = 'https://api.chucknorris.io/jokes/random'

async function addQuote(text){
    let quote = await fetch(API_URL)
    let data = await quote.json()

    let myActionChuck = {
        type: 'addQuote',
        text: data.value,
        id: data.id
        }
    
    store.dispatch(myActionChuck)
}


export default addQuote
