import { connect } from 'react-redux'
import React from 'react'
import LoadQuotes from './addquotes'

function Quotes(props){
    console.log(props);
    return <div>

        <h1>Chuck dice que</h1>
             <LoadQuotes />
                  {props.quote.map((q, i) => <p {...q} key={i}>{q.text} </p>)}
    </div>
}



function mapStateToProps(state){
    console.log(state);
    return {
        quote: state.quotes.quotes
    }
}

const connection = connect(
    mapStateToProps
)

export default connection(Quotes)