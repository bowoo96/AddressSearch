import React, { useState } from "react"
import axios from 'axios';
import ModalItem from "./ModalItem";

const Modal = (props) => {

  const [addressArray, setAddressArray] = useState([]);
  const [inputText, setInputText] = useState("");
  const [count, setCount] = useState(0);

  const addressInputHandler = (event) => {
    setInputText(event.target.value);
  }

  const kakaoMap = (event) => {
    event.preventDefault();
    axios({
      method: "GET",
      url: `https://dapi.kakao.com/v2/local/search/address.json?query=${inputText}&analyze_type=similar`,
      headers: { Authorization: "KakaoAK ac2309a70e95e1dcf29ce115b17a4500" }
    }).then((res) => {
      setCount(res.data.meta.total_count);
      setAddressArray(res.data.documents);
    })
  }

  return (
    <form onSubmit={kakaoMap}>
      <input onChange={addressInputHandler} />
      <button>검색</button>
      <p>총 {count}건</p>
      <ul>
        {addressArray.map((item, index) => (
          <ModalItem
            key={index}
            number={item.address ? item.address.main_address_no : ""}
            name={item.address ? item.address.address_name : item.address_name}
            road={item.road_address ? item.road_address.address_name : ""}
            clickData={(res) => props.addressData(res)}
          />
        ))}
      </ul>
    </form>
  )
}

export default Modal;