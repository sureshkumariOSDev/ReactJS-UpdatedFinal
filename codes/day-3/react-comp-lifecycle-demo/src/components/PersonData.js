import React, { Component } from 'react'
import DepartmentDetail from './DepartmentDetail'
import PersonDetail from './PersonDetail'
import PersonTable from './PersonTable'

export default class PersonData extends Component {
    constructor() {
        super()
        this.state = {
            selectedPerson: null,
            people: [
                {
                    id: 1,
                    name: 'anil',
                    mobile: 9090909090
                },
                {
                    id: 2,
                    name: 'sunil',
                    mobile: 9090909091
                },
                {
                    id: 3,
                    name: 'mahesh',
                    mobile: 9090909092
                }
            ],
            departments: [
                {
                    id: 1,
                    name: 'HR'
                },
                {
                    id: 2,
                    name: 'Training'
                }
            ]
        }
        console.log('[PersonData] created')
    }

    updatePersonDataHandler = (personId, propertyName, propertyValue) => {
        let found = this.state.people.find((p) => p.id === personId);
        let foundIndex = this.state.people.findIndex((p) => p.id === personId);
        let copyOfPeople = [...this.state.people];
        let copyOfFound = { ...found };
        copyOfFound[propertyName] = propertyValue;
        copyOfPeople[foundIndex] = copyOfFound;
        this.setState({
            people: copyOfPeople
        }, () => {
            console.log(this.state.people)
        })
    }

    selectPersonHandler = (personId) => {
        console.log('logged')
        let found = this.state.people.find(p => p.id === personId)
        this.setState({
            selectedPerson: found
        }, () => {
            console.log(this.state.selectedPerson)
        })
    }
    changeDeptHandler = (deptid, propertyName, propertyValue) => {
        let found = this.state.departments.find((d) => d.id === deptid);
        let foundIndex = this.state.people.findIndex((d) => d.id === deptid);
        let copyOfDepts = [...this.state.departments];
        let copyOfFound = { ...found };
        copyOfFound[propertyName] = propertyValue;
        copyOfDepts[foundIndex] = copyOfFound;
        this.setState({
            departments: copyOfDepts
        }, () => {
            console.log(this.state.departments)
        })
    }
    render() {
        console.log('[PersonData] rendered')
        return (
            <div>
                {/* <button onClick={() => this.updatePersonDataHandler(1, 'name', 'joydip')}>Change</button> */}
                <PersonTable people={this.state.people} selectPerson={this.selectPersonHandler} />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <DepartmentDetail
                    dept={this.state.departments[0]}
                    changeDept={this.changeDeptHandler} />
                <br />
                <br />
                {
                    this.state.selectedPerson !== null &&
                    (<PersonDetail person={this.state.selectedPerson} changePerson={this.updatePersonDataHandler} />)
                }

            </div>
        )
    }
    componentDidUpdate() {
        console.log('[PersonData] updated')
    }
    componentDidMount() {
        console.log('[PersonData] mounted')
    }
    componentWillUnmount() {
        console.log('[PersonData] unmounted')
    }
}
