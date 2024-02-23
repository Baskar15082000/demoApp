import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { FaRegShareSquare } from "react-icons/fa";
 

const ShareModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Button onClick={showModal} style={{backgroundColor:"red"}}>
        <FaRegShareSquare  style={{color:"white"}}/>
      </Button>
      <Modal
        visible={isModalOpen}
        footer={null}
        closeIcon={null}
        onCancel={handleCancel}
        style={{marginTop:"100%"}}
        className="custom-modal" 
      >
        <div className="modal-content">
         <div style={{color:"white" ,padding:" .5rem 0 .5rem 0" }}>Share</div>
         <div style={{color:"white",padding:" .5rem 0 .5rem 0",borderBottom:"solid gray 1px"}}>Do you want this card or entire gallery ?</div>
         <div style={{color:"#1890ff",padding:" .5rem 0 .5rem 0",borderBottom:"solid gray 1px"}}>Only this card</div>
         <div style={{color:"#1890ff",padding:" .5rem 0 .5rem 0",borderBottom:"solid gray 1px"}}>Entire Magazine</div>
          <div style={{color:"white",padding:" .5rem 0 0 0"}} onClick={handleCancel}>Cancel</div>
        </div>
      </Modal>
    </div>
  );
};

export default ShareModal;
