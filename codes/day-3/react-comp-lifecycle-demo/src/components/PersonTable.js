import React from 'react'

export default function PersonTable({ people, selectPerson }) {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Mobile</td>
                        <td>Select Person</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        people.map((p, index) => {
                            return (
                                <tr key={p.id}>
                                    <td>{p.name}</td>
                                    <td>{p.mobile}</td>
                                    <td><button onClick={() => selectPerson(p.id)}>Select</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

/**
 * {
 *   type:'tr',
 *   key:
 *   ref:
 *   props:{
 *     p:{}
 *     children:['td','td']
 *   }
 * }
 */
