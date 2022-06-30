import React, { useState, useEffect } from "react";

const Partner = (props) => {

  const [isNumber, setIsNumber] = useState("");
  const [isRoad, setIsRoad] = useState("");

  const ModalHandler = () => {
    props.showFlag(true);
  };

  useEffect(() => {
    if (props.addressData === undefined) return
    if (props.addressData.road === "") {
      setIsRoad(props.addressData.name);
      setIsNumber(props.addressData.number);
    } else {
      setIsRoad(props.addressData.road);
      setIsNumber(props.addressData.number);
    }
  }, [props.addressData]);

  return (
    <div>
      <input placeholder="사업장 소재지" onClick={ModalHandler} defaultValue={isNumber} />
      <button onClick={ModalHandler}>주소 찾기</button><br />
      <input defaultValue={isRoad} /><br />
      <input />
    </div>
  )
}

export default Partner;