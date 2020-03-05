import React, { Component } from 'react';


class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ageCount: 0
        }
    }
    handleClick = () => {
        this.setState({
            ageCount: this.state.ageCount +1
        })
    }
    render(){
        const {firstName, lastName, age, haircolor} = this.props;
        const Button = props => {
            return (
                <button onClick = {this.handleClick}> Birthday button for {firstName} {lastName}</button> 
            );
        }
        let newAge = age + this.state.ageCount
        return(
            <div>
                <h1>{lastName}, {firstName}</h1>
                <p>Age: {newAge}</p>
                <p>Hair Color: {haircolor}</p>
                <Button handleClick={this.handleClick}></Button>
            </div>
  
        );
    }
}

export default PersonCard;
