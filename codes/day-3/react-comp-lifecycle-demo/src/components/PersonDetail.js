import React, { Component } from 'react'

export default class PersonDetail extends Component {
    constructor() {
        super()
        console.log('[PersonDetail] created')
    }
    render() {
        console.log('[PersonDetail] rendered')
        let { person, changePerson } = this.props;
        return (
            <div>
                Name:&nbsp;
                <input
                    type='text'
                    value={person.name}
                    name='name'
                    onChange={(e) => changePerson(person.id, 'name', e.target.value)}

                />
                <br />
                Number:&nbsp;
                <input
                    type='text'
                    value={person.mobile}
                    onChange={(e) => changePerson(person.id, 'mobile', parseInt(e.target.value))}
                />
                <br />
                <button>Update</button>
            </div>
        )
    }
    componentDidUpdate() {
        console.log('[PersonDetail] updated')
    }
    componentDidMount() {
        console.log('[PersonDetail] mounted')
    }
    componentWillUnmount() {
        console.log('[PersonDetail] unmounted')
    }
}
