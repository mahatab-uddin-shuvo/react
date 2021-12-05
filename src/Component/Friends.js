import React from 'react';
import PropTypes from 'prop-types';


const Friends = (props) =>{
    return (
        <ul>
            {props.friends.map((friend,index) => {
                return<li key={index}>{friend}</li>
            })}
        </ul>
    )

}

Friends.prototype = {
    friends: PropTypes.array.isRequired
}

export default Friends;