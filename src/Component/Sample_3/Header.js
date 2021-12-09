import React from 'react'

const Header = ({onSomething}) =>{
    let data = 'bla bla'
    return (
        <div style={{margin:'10px', border:'1px solid red'}}>
            <h5 style={{textAlign:'center'}} onClick={() => onSomething(data)}>Header</h5>
        </div>
    )
}



export default Header

