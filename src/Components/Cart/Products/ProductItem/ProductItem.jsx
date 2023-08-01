import React, {useEffect} from 'react'
import s from "./ProductItem.module.scss"
import IMG from "./../../../../Images/unnamed.png"
import { TiDeleteOutline } from 'react-icons/ti';

function ProductItem(props) {
    let state = props.state;
    let count = React.createRef();
    //let summary = props.price * props.count;

    useEffect(() => {
        props.updateSummary(props.id);
    }, [])

    let onCountChange = () => {
        let cnt = count.current.value;
        let id = props.id;
        props.updateCount(cnt, id);
        props.updateResult();
    }

    return (
        <div className={s.product_item}>
            <div className={s.item}>
                <img src={IMG} alt="logo"/>
                <p>{props.name}</p>
            </div>
            <div className={s.count__input}>
                <input type="text" defaultValue={props.count} onBlur={onCountChange} ref={count}/>
                <label>т</label>
            </div>
            <div>
                <p>{props.price} ₽</p>
            </div>
            <div>
                <p>{props.priceWithoutVat} ₽</p>
            </div>
            <div>
                <p>{props.summary} ₽</p>
            </div>
            <div className="item__delete">
                <TiDeleteOutline />
            </div>
        </div>
    )
}



export default ProductItem;