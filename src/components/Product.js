import  {useState} from 'react'

function Product({product}) {

    return (

        <>
            <div className="product">
           <h6>{product.title}</h6>
                <div className="price">${product.price}</div>
                <div className="actions">
                    <button>Sat</button>
                    <button>Satın Al</button>
                </div>
                <style jsx> {`
                .product {
                padding: 10px;
                background : #fff ;
                border: 1px solid #bbb;
                margin-bottom: 20px;
                }
                 `}</style>
        </div>
        </>
    )
}
export default Product
