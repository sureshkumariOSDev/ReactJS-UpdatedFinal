import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
    state = {
        hasError: false
    }
    // static getDerivedStateFromError(error) {
    //     console.log(error)
    //     console.log('[EB] getDerivedStateFromError caught error and setting state')
    //     return {
    //         hasError: true
    //     }
    // }
    componentDidCatch(error, info) {
        console.log('[EB] caught error')
        // this.setState({
        //     hasError: true
        // }, () => {
        //     console.log(this.state)
        // })
        console.log(error)
        console.log(info)
    }
    render() {
        console.log('[EB] renderded')

        if (this.state.hasError) {
            return <span>Error Occurred</span>
        } else {
            return this.props.children
        }
    }
}
