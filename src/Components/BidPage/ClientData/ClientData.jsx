import React from 'react'
import s from "./ClientData.module.scss"

function ClientData(props) {
    let state= props.cartPage;
    let address = React.createRef();
    let fullName = React.createRef();
    let phone = React.createRef();

    let onAddressChange = () => {
        let temp = address.current.value;
        props.addressChange(temp);
    }
    let onFullNameChange = () => {
        let temp2 = fullName.current.value;
        props.fullNameChange(temp2);
    }
    let onPhoneChange = () => {
        let temp3 = phone.current.value;
        props.phoneChange(temp3);
    }

    return (
        <div className={s.cl_block}>
            <h3>1. Ваши данные</h3>
            <div className={s.cl_fields}>
                <div className={s.text_field_floating}>
                    <div className={s.text_field__item}>
                        <input className={s.text_field__input} type="number" id="name" defaultValue={state.clientData.address} onChange={onAddressChange} ref={address}/>
                        <label className={s.text_field__label} htmlFor="name">ИНН, адрес или ОГРН*</label>
                    </div>
                </div>

                <div className={s.text_field_floating}>
                    <div className={s.text_field__item}>
                        <input className={s.text_field__input} type="name" id="name" defaultValue={state.clientData.fullName} onChange={onFullNameChange} ref={fullName} />
                        <label className={s.text_field__label} htmlFor="name">ФИО для связи*</label>
                    </div>
                </div>

                <div className={s.text_field_floating}>
                    <div className={s.text_field__item}>
                        <input className={s.text_field__input} type="name" id="name" defaultValue={state.clientData.phone} onChange={onPhoneChange} ref={phone}/>
                        <label className={s.text_field__label} htmlFor="name">Телефон</label>
                    </div>
                </div>

            </div>
        </div>
)
}

export default ClientData;