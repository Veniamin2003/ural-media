import React from 'react'
import s from "./Select.module.scss"

function SelectItem(props) {
    return (
        <div className={s.item} onClick={() => props.onValueChanged(props.city, props.id)}>
            <div className={s.item_two}>
                {props.city}
            </div>

        </div>
    )
}

export default SelectItem;