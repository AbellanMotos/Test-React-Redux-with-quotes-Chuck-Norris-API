import React from 'react'
import addQuote from '../actions/quote'

function loadQuote() {
    return <div>
        <button onClick={addQuote}>
            Vamos Chuck!
        </button>
    </div>
}

export default loadQuote