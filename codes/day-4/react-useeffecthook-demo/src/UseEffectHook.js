import React, { useEffect } from 'react'

export default function UseEffectHook({ name }) {
    console.log('[UseEffectHook] rendered')

    //componentDidUpdate/getDerivedStateFromProps
    /*
        function useEffect(callback,deps?){ 
            if(deps === null){
                cleanUp = callBack() 
                cleanUp()
            }
            if(deps.length===0){
                
            }
        }
    */
    useEffect(() => {
        console.log('this hook runs always')
        return () => {
            console.log('this hook runs always..use for clean up every time')
        }
    })

    //shouldComponentUpdate
    useEffect(() => {
        console.log('this hook runs when name changes')
        return () => {
            console.log('this hook runs name changes..use for clean up only when necessary')
        }
    }, [name])

    //componentDidMount
    useEffect(() => {
        console.log('this hook runs only once..when mounted')
    }, [])

    // componentWillUnmount
    useEffect(() => {
        return () => {
            console.log('this hook runs only once..when dismounted')
        }
    }, [])

    return (
        <div>
            Name&nbsp;{name}
        </div>
    )
}
