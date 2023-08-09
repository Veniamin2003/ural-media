import React, {useEffect, useState} from 'react'
import s from "./Select.module.scss"
import {IoIosArrowUp} from "react-icons/io";
import {IoIosArrowDown} from "react-icons/io";
import {AiOutlineSearch} from "react-icons/ai";
import SelectItem from "./SelectItem";

function Select (props) {
    debugger
    let state = props.state;
    const [isSelectActive, setSelect] = useState(false);

    let searchQuery = React.createRef();

    let onValueChanged = (city, id) => {
        props.updateCurrentDelivery(id);
    }
    let onSearchChange = () => {
        let temp = searchQuery.current.value;
        props.updateSearchQuery(temp);
    }

    return (
        <div>
            {isSelectActive
                ?
                (
                    <div>
                        <div className={s.select_block_active} onClick={()=>{setSelect(false)}}>
                            <div className={s.header}>
                                <div>{state.temporaryDelivery.city !== "" ? state.temporaryDelivery.city : "Город"}</div>
                                <div>
                                    <IoIosArrowUp/>
                                </div>
                            </div>
                        </div>

                        <div className={s.second_block}>
                            <div className={s.search}>
                                <div className={s.search_block}>
                                    <input type="text"
                                           placeholder="Поиск"
                                           onChange={onSearchChange}
                                           ref={searchQuery}
                                           className={s.input}
                                    />
                                    <div className={s.search_icon}>
                                        <AiOutlineSearch/>
                                    </div>
                                </div>
                            </div>
                            <div className={s.select_items}>
                                <div className={s.content}>
                                    <div  className={s.content_item}>
                                        {state.sortedDeliveryCities.map(el => <SelectItem id={el.id} city={el.city} cost={el.cost}
                                                                                    onValueChanged={onValueChanged}/>)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                )
                :
                (
                    <div className={s.select_block} onClick={()=>{setSelect(true)}}>
                        <div className={s.header}>
                            <div>{state.temporaryDelivery.city !== "" ? state.temporaryDelivery.city : "Город"}</div>
                            <div>
                                <IoIosArrowDown />
                            </div>
                        </div>
                    </div>
                )
            }
        </div>

    )
}

export default Select;