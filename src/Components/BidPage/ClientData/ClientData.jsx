
import React, {useEffect, useState} from 'react'
import s from "./ClientData.module.scss"
import {AiOutlineMinus, AiOutlinePlus} from "react-icons/ai";
import {logDOM} from "@testing-library/react";
import InputMask from "react-input-mask";


function ClientData(props) {
    let state= props.cartPage;
    const [isAddressActive, setAddress] = useState(false);
    const [isNameActive, setName] = useState(false);
    const [isPhoneActive, setPhone] = useState(false);

    useEffect(() => {
        if(state.clientData.address !== ""){
            setAddress(true);
        }
        if(state.clientData.fullName !== ""){
            setName(true);
        }
        if(state.clientData.phone !== ""){
            setPhone(true);
        }
    });

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
    let onPhoneChange = ({ target: { value } }) => {
        console.log("change")
        //let temp3 = phone.current.value;
        props.phoneChange(value);
    }

    let onAddressLeave = () => {
        if(state.clientData.address === ""){
            setAddress(false);
        }
    }
    let onNameLeave = () => {
        if(state.clientData.fullName === ""){
            setName(false);
        }
    }
    let onPhoneLeave = () => {
        console.log("leave")
        console.log(isPhoneActive)
        console.log(state.clientData.phone)
        if(state.clientData.phone === "(+7) ___ ___ ____" || state.clientData.phone === ""){
            setPhone(false);
        }
    }
    /*window.onload = function(){
        document.querySelector('#phone').onkeydown = function(e){
            inputphone(e,document.querySelector('#phone'))
        }

        function inputphone(e, phone){
            function stop(evt) {
                evt.preventDefault();
            }
            let key = e.key, v = phone.value, not = key.replace(/([0-9])/, 1)

            if(not == 1 || 'Backspace' === not){
                if('Backspace' != not){
                    if(v.length < 3 || v ===''){phone.value= '+7('}
                    if(v.length === 6){phone.value= v +')'}
                    if(v.length === 10){phone.value= v +'-'}
                    if(v.length === 13){phone.value= v +'-'}
                }
            }else{stop(e)}  }

    }*/

    return (
        <div className={s.cl_block}>
            <h3>1. Ваши данные</h3>
            <div className={s.cl_fields}>
                {isAddressActive ?
                    (
                        <div className={s.text_field_floating}>
                            <div className={s.text_field__item}>
                                <input className={s.text_field__input}
                                       type="number"
                                       id="address"
                                       defaultValue={state.clientData.address}
                                       onChange={onAddressChange}
                                       ref={address}
                                       onBlur={onAddressLeave} autoFocus
                                       />
                                <label className={s.text_field__label} htmlFor="address">ИНН, адрес или ОГРН*</label>
                            </div>
                        </div>
                    )
                    :
                    (
                        <div className={s.text_field_empty} onClick={() => setAddress(true)} >
                            <div className={s.text_field__item_empty}>
                                <label>ИНН, адрес или ОГРН*</label>
                            </div>
                        </div>
                    )
                }

                {isNameActive ?
                    (
                        <div className={s.text_field_floating}>
                            <div className={s.text_field__item}>
                                <input className={s.text_field__input}
                                       type="name"
                                       id="name"
                                       defaultValue={state.clientData.fullName}
                                       onChange={onFullNameChange}
                                       ref={fullName}
                                       onBlur={onNameLeave} autoFocus />
                                <label className={s.text_field__label} htmlFor="name">ФИО для связи*</label>
                            </div>
                        </div>
                    )
                    :
                    (
                        <div className={s.text_field_empty} onClick={() => setName(true)} >
                            <div className={s.text_field__item_empty}>
                                <label>ФИО для связи*</label>
                            </div>
                        </div>
                    )
                }

                {isPhoneActive ?
                    (
                        <div className={s.text_field_floating}>
                            <div className={s.text_field__item}>
                                {/*<input className={s.text_field__input}
                                       defaultValue={state.clientData.phone}
                                       onChange={onPhoneChange}
                                       ref={phone}
                                       onBlur={onPhoneLeave} autoFocus
                                       type="text"
                                       name="phone"
                                       id="phone"
                                       placeholder="+7(000)000-00-00"
                                       />*/}

                                    <PhoneInput
                                        value={state.clientData.phone}
                                        onChange={onPhoneChange}
                                        onPhoneLeave={onPhoneLeave}
                                    >
                                    </PhoneInput>


                                <label className={s.text_field__label} htmlFor="phone">Телефон</label>
                            </div>
                        </div>
                    )
                    :
                    (
                        <div className={s.text_field_empty} onClick={() => setPhone(true)} >
                            <div className={s.text_field__item_empty}>
                                <label>Телефон</label>
                            </div>
                        </div>
                    )
                }
                {/*<input
                       type="tel"
                       id="phone1"
                       name="phone1"
                       onChange={onPhoneChange}
                       ref={phone}
                       onBlur={onPhoneLeave} autoFocus
                       placeholder="+7(___)___-__-__"
                       maxLength="16"
                />*/}



            </div>
        </div>
)
}
function PhoneInput(props) {
    return (
        <div className={s.text_field__input} tabIndex="1" onBlur={props.onPhoneLeave}>
            <InputMask
                mask='(+7) 999 999 9999'
                value={props.value}
                onChange={props.onChange}>
            </InputMask>
        </div>

    );
}


export default ClientData;