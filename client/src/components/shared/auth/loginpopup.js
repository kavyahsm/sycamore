import React,{useState} from 'react'
import { FiLogOut } from "react-icons/fi";
import { Modal, Button } from 'antd';

export default function Loginpopup({children}) {

const [visible, setVisible] = useState(false)

    const showModal = () => {
        setVisible(true);
      };
    
     const handleOk = e => {
        console.log(e);
        setVisible(false);

      };
    
     const handleCancel = e => {
        console.log(e);
        setVisible(false);

      };

    return (
        <>
        <small style={{cursor:"pointer"}} onClick={()=>showModal()}><FiLogOut/>&nbsp;login</small>
     
        <Modal
          title="User Login"
          visible={visible}
          onOk={()=>handleOk()}
          onCancel={()=>handleCancel()}
        >
          {children}
        </Modal>
      </>
    )
}
