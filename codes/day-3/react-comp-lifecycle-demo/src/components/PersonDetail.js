import React, { Component, PureComponent } from 'react'

export default class PersonDetail extends Component {
    constructor() {
        super()
        this.state = { y: 0 }
        console.log('[PersonDetail] created')
    }
    static getDerivedStateFromProps(newProps, initialState) {
        return null;
    }
    // shouldComponentUpdate(newProps, newState) {
    //     console.log('[PersonDetail] should update????')
    //     // console.log(newProps)
    //     // console.log(this.props)
    //     if (this.props.person.id === newProps.person)
    //         return false;
    //     else
    //         return true;
    // }
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
    getSnapshotBeforeUpdate(oldProps, oldState) {
        return {
            x_pos: 10,
            y_pos: 30
        }
    }
    componentDidUpdate(oldProps, oldState, snapshot) {
        console.log(snapshot)
        // this.props.id!==oldProps.id || this.state.personData===null
        // console.log('[PersonDetail] updated')
        // fetch('htp....').then(resp => this.setState({ personData: resp.json() })).catch((e) => console.log(e))
    }
    componentDidMount() {
        console.log('[PersonDetail] mounted')
    }
    componentWillUnmount() {
        console.log('[PersonDetail] unmounted')
    }
}
