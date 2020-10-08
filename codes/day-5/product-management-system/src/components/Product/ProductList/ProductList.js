import React from 'react'
import PropTypes from 'prop-types'
import ProductRow from '../ProductRow/ProductRow'

function ProductList({ productList, removeCallback }) {
    return (
        <div className='table-responsive'>
            <table className='table'>
                <thead style={{ backgroundColor: "burlywood" }}>
                    <tr>
                        <td>Image</td>
                        <td>Name</td>
                        <td>Code</td>
                        <td>Price</td>
                        <td>Rating</td>
                        <td>Update</td>
                        <td>Delete</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        productList.map(p => {
                            return <ProductRow
                                product={p}
                                key={p.productId}
                                remove={removeCallback} />
                        })
                    }
                </tbody>
            </table>
        </div >
    )
}

ProductList.propTypes = {
    productList: PropTypes.array.isRequired,
    removeCallback: PropTypes.func.isRequired
}

export default ProductList

