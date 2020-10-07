import React, { memo } from 'react'

function PersonTable({ people, selectPerson }) {
    console.log('[PersonTable] rendered')
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

 export default memo(PersonTable);

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
