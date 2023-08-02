import React from 'react'
import s from "./ClientData.module.scss"
import {BsArrowRight} from "react-icons/bs";

function ClientData(props) {
    let state= props.cartPage;
    let address = React.createRef();

    let onAddressChange = () => {
        debugger
        let temp = address.current.value;
        props.addressChange(temp);
    }

    return (
        <div className={s.cl_block}>
            <h3>1. Ваши данные</h3>
            <div className={s.cl_fields}>
                <div className={s.text_field_floating}>
                    <div className={s.text_field__item}>
                        <input className={s.text_field__input} type="number" id="name" defaultValue="7414003633" onChange={onAddressChange} ref={address}/>
                        <label className={s.text_field__label} htmlFor="name">ИНН, адрес или ОГРН*</label>
                    </div>
                </div>

                <div className={s.text_field_floating}>
                    <div className={s.text_field__item}>
                        <input className={s.text_field__input} type="name" id="name" defaultValue="Иванов Иван Иванович"/>
                        <label className={s.text_field__label} htmlFor="name">ФИО для связи*</label>
                    </div>
                </div>

                <div className={s.text_field_floating}>
                    <div className={s.text_field__item}>
                        <input className={s.text_field__input} type="name" id="name" defaultValue="+7 (586) 682-78-15"/>
                        <label className={s.text_field__label} htmlFor="name">Телефон</label>
                    </div>
                </div>

            </div>
        </div>
)
}

export default ClientData;