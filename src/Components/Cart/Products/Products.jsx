import React, {useEffect} from 'react'
import s from "./Products.module.scss"
import ProductItem from "./ProductItem/ProductItem";

function Products(props) {
    let state = props.cartPage;

    useEffect(() => {
        props.createCopyCities();
    }, [])

    let updateCount = (count, id) => {
        props.updateCount(count, id);
    }
    let updateSummary = (id) => {
        props.updateSummary(id);
    }
    let updateResult = () => {
        props.updateResult();
    }
    let deleteProduct = (id) => {
        props.deleteProduct(id);
    }
    let countTonn = () => {
        props.countTonn();
    }

    return (
        <div className={s.product_block}>
            <div className={s.header_items}>
                <p>Наименование товара</p>
                <p>Количество</p>
                <p>С НДС (1 т)</p>
                <p>Без НДС (1 т)</p>
                <p>Сумма</p>
            </div>

            {state.products.map(el => <ProductItem id={el.id} name={el.name} count={el.count}
                                                   measure={el.measure} price={el.price}
                                                   priceWithoutVat={el.priceWithoutVat} summary={el.summary}
                                                   updateCount={updateCount} updateSummary={updateSummary}
                                                   updateResult={updateResult} deleteProduct={deleteProduct} countTonn={countTonn}/>)}
        </div>

    )
}



export default Products;