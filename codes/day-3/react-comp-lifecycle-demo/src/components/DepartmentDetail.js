import React, { Component } from 'react'

export default class DepartmentDetail extends Component {
    constructor() {
        super()
        this.state = {
            x: 0
        }
        console.log('[DepartmentDetail] created')
    }
    static getDerivedStateFromProps(newProps, initialState) {
        console.log('[DepartmentDetail] getDerivedStateFromProps')
        return {
            x: initialState.x + newProps.data
        };
    }
    shouldComponentUpdate(newProps, newState) {
        console.log('[DepartmentDetail] should update????')
        // console.log(newProps)
        // console.log(this.props)
        if (this.props.dept === newProps.dept)
            return false;
        else
            return true;
    }
    render() {
        console.log('[DepartmentDetail] rendered')
        let { dept, changeDept } = this.props;
        return (
            <div>
                Name:&nbsp;
                <input
                    type='text'
                    value={dept.name}
                    name='name'
                    onChange={(e) => changeDept(dept.id, 'name', e.target.value)}

                />                
            </div>
        )
    }
    componentDidUpdate() {
        console.log('[DepartmentDetail] updated')
    }
    componentDidMount() {
        console.log('[DepartmentDetail] mounted')
    }
    componentWillUnmount() {
        console.log('[DepartmentDetail] unmounted')
    }
}
