import './App.css';
import Partner from './components/Partner';
import Modal from './components/Modal';
import React, { useState } from "react";

function App() {

  const [isSearch, setIsSearch] = useState(false);
  const [addressData, setAddressData] = useState();

  const ShowHandler = (res) => {
    setIsSearch(res);
  }

  const addressDataHandler = (res) => {
    setAddressData(res)
    setIsSearch(res.show);
  }

  return (
    <div>
      {isSearch && <Modal addressData={addressDataHandler} />}
      <Partner showFlag={ShowHandler} addressData={addressData} />
    </div>
  );
}

export default App;