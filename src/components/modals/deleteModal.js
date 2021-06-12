import React,{useState} from 'react'
import { Modal, Button, message } from 'antd';


const DeleteNote = ({isModalVisible,handleCancel,deleteOk}) => {
   
    

    return (
        <Modal title="Delete Note" visible={isModalVisible} onOk={deleteOk} onCancel={handleCancel}>
            
             <div>
                 <p>Are you sure you want to delete this note?</p>
             </div>
      </Modal>
    )
}

export default DeleteNote
