import React,{Component} from 'react';

// function Person(){

//     return(
//         <div>
//             <h2>I am person component</h2>
//         </div>

//     );
// }
// let Person = (props) =>{
//     return(
//         <div>
//             <h3>Name : {props.name } and Age: {props.age}  </h3>
//             <h4>Extra :{props.children} </h4>
//         </div>

//     );

// }

class Person extends Component{
    
    render(){
        return(
        <div>
            <h3>Name : {this.props.name } and Age: {this.props.age}  </h3>
            <h4>Extra :{this.props.children} </h4>
        </div>

       );

    }
}
export default Person;