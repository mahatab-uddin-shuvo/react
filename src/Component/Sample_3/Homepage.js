import React from 'react'
import Content from './Content';
import Footer from './Footer';
import Header from './Header';

const Homepage = ()=> {

    const handleSomething = (param) => {
        console.log(param)
    }
    return (
        <div style ={{border:'1px solid green', height: '780px'}}>
            <div className="row"> 
            </div>
            <h4 style={{paddingLeft:'10px'}}>Homepage</h4>
            <Header onSomething={handleSomething} />
            <Content />
            <Footer />
        </div>
    )
}



export default Homepage;

