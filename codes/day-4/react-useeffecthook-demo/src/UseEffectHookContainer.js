import React, { Component } from 'react'
import UseEffectHook from './UseEffectHook'

export default class UseEffectHookContainer extends Component {
    state = {
        name: '',
        randomValue: null,
        showChild: true
    }
    changeNameHandler = (newName) => {
        this.setState({ name: newName })
    }
    changeRandomValueHandler = (newValue) => {
        this.setState({ randomValue: newValue })
    }
    changeShowChildHandler = () => {
        this.setState(ps => {
            return {
                showChild: !ps.showChild
            }
        })
    }
   
    componentDidUpdate(){
        //fetching
        //style
        //listeners       
    }
    render() {
        
        return (
            <div>
                <div>
                    Random Value:&nbsp; <input type='text' value={this.state.randomValue} onChange={(e) => this.changeRandomValueHandler(e.target.value)} />
                </div>
                <button onClick={this.changeShowChildHandler}>
                    {
                        `${this.state.showChild ? 'hide child' : 'show child'}`
                    }
                </button>
                {
                    this.state.showChild &&
                    (<div>
                        Name:&nbsp; <input type='text' value={this.state.name} onChange={(e) => this.changeNameHandler(e.target.value)} />
                        <br />
                        <UseEffectHook name={this.state.name} />
                    </div>
                    )
                }
            </div>
        )
    }
}
