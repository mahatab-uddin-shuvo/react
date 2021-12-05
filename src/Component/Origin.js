import React from 'react'
import Proptypes from 'prop-types'
const Origin = (props)=>{
    return(
        <p>You are from {props.country}</p>
    )
}

Origin.prototype = {
    country: Proptypes.string.isRequired
}

export default Origin;
