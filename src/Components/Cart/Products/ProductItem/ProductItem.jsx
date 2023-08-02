import React, {useEffect} from 'react'
import s from "./ProductItem.module.scss"
import IMG from "./../../../../Images/unnamed.png"
import { TiDeleteOutline } from 'react-icons/ti';

function ProductItem(props) {
    let state = props.state;
    let count = React.createRef();

    useEffect(() => {
        props.updateSummary(props.id);
    }, [])

    let onCountChange = () => {
        debugger
        let cnt = count.current.value;
        let id = props.id;
        props.updateCount(cnt, id);
        props.updateResult();
        props.countTonn();
    }

    let onDeleteProduct = () => {
        props.deleteProduct(props.id);
        props.updateResult();
        props.countTonn();
    }

    function numberWithSpaces(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }

    let price = numberWithSpaces(props.price);
    let priceWithoutVat = numberWithSpaces(props.priceWithoutVat);
    let summary = numberWithSpaces(props.summary);

    return (
        <div className={s.product_item}>
            <div className={s.item}>
                <img src={IMG} alt="logo"/>
                <p>{props.name}</p>
            </div>
            <div className={s.count__input}>
                <input key={props.id} type="number" defaultValue={props.count} onBlur={onCountChange} ref={count} />
                <label>т</label>
                </div>
            <div>
                <p>{price} ₽</p>
            </div>
            <div>
                <p>{priceWithoutVat} ₽</p>
            </div>
            <div>
                <p>{summary} ₽</p>
            </div>
            <div className="item__delete">
                <TiDeleteOutline onClick={onDeleteProduct}/>
            </div>
        </div>
    )
}



export default ProductItem;