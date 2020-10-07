import React, { Component } from 'react'
import PersonDetail from './PersonDetail'

export default class PersonData extends Component {
    constructor() {
        super()
        this.state = {
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
            ]
        }
        console.log('[PersonData] created')
    }
    render() {
        console.log('[PersonData] rendered')
        return (
            <div>
                <PersonDetail person={this.state.people[0]} />
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
