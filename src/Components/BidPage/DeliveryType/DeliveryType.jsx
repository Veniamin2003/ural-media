import React, {useState} from 'react'
import s from "./DeliveryType.module.scss"
import {AiFillCheckCircle} from "react-icons/ai";
import DeliveryTModal from "../DeliveryTModal/Modal/DeliveryTModal";
import DeliveryTModalContainer from "../DeliveryTModal/Modal/DeliveryTModalContainer";

function ClientData(props) {
    let state= props.cartPage;

    const [modalActive, setModalActive] = useState(false);

    let openModal = () => {
        setModalActive(true);
    }

    return (
        <div className={s.dl_block}>
            <h3>2. Способ получения</h3>
            <div className={s.dl_field}>
                <div className={s.content_block}>
                    <div className={s.content}>
                        <div className={s.dl_type_block}>
                            <div className={s.dl_type}>
                                <p>{state.currentDeliveryType}</p>
                                <AiFillCheckCircle className={s.icon}/>
                            </div>
                            <div onClick={openModal} className={s.change}>Изменить</div>
                        </div>
                        <div className={s.dl_type_second}>
                            <div>
                                {state.companyName}
                            </div>
                            <div>
                                {state.companyAddress}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <DeliveryTModalContainer active={modalActive} setActive={setModalActive}/>
        </div>
    )
}

export default ClientData;