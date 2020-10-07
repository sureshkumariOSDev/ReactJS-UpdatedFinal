import React, { Component } from 'react'
import PersonDeail from './PersonDetail';

export default class UserInput extends Component {
    constructor() {
        super();
        console.log('[UI] created')
    }

    state = {
        person: {
            firstName: '',
            lastName: ''
        },
        loading: true,
        x: 10
    }
    updateFirstNameHandler = (firstName) => {
        //console.log(firstName)          
        //this.state.person.firstName = firstName;
        // let copyOfPerson = Object.create({}, this.state.person);
        let copyOfPerson = { ...this.state.person };
        //this.state.person = {firstName:'', lastName:''}
        //copyOfPerson = {firstName:firstName, lastName:''}        
        copyOfPerson.firstName = firstName;
        //this.state.person = {firstName:firstName, lastName:''} 
        //this.state.person = copyOfPerson; 

        this.setState({
            person: copyOfPerson,
            loading: false
        })
        setTimeout(() => {
            console.log(this.state.person)
        }, 2000);
        console.log(this.state)
    }
    updateLastNameHandler = (lastName) => {
        //  console.log(lastName)
        //this.state.person.lastName = lastName;
        let copyOfPerson = { ...this.state.person };
        copyOfPerson.lastName = lastName;
        this.setState(
            {
                person: copyOfPerson,
                loading: false
            },
            () => {
                console.log(this.state)
            });

    }
    render() {
        console.log('[UI] rendered');
        return (
            <div>
                <button onClick={() => this.updateFirstNameHandler('joydip')}>Change</button>
                <br/>
                <PersonDeail
                    loadingStatus={this.state.loading}
                    personInfo={this.state.person}
                    updateFirstNameCallback={this.updateFirstNameHandler}
                    updateLastNameCallback={this.updateLastNameHandler}
                /></div>);
    }
}