import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "@/firebase";
import { FadeLoader } from "react-spinners";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'white',
  border: '2px solid #000',
  boxShadow: 24,
  p: 3,
  display: 'flex',
  flexDirection: 'column',
  gap: '15px',


};

export default function MyModal({openModal, handleCloseModal, selectedRow}) {
  const [item, setItemName] = useState("");
  const [quantity, setQuantity] = useState('');
  const [department, setDepartment] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  async function handleSaveInformation() {
    const docRef = doc(db, 'inventory', `${selectedRow}`);
    await updateDoc(docRef, {
      itemName: item[0].toUpperCase() + item.slice(1),
      quantity: quantity,
      department: department[0].toUpperCase() + department.slice(1),
    })
    handleCloseModal();
  }

  useEffect(() => {
    async function fetchData() {
      if(openModal){
        const docRef = doc(db, 'inventory', `${selectedRow}`);
        const docSnap = await getDoc(docRef);
        if(docSnap.exists()) {
          setItemName(docSnap.data().itemName);
          setDepartment(docSnap.data().department);
          setQuantity(docSnap.data().quantity);
          setIsLoading(false);
        }else{
          console.log('No such document!');
        }
      }
    }
    fetchData();
  },[openModal, setIsLoading, setItemName, setDepartment, setQuantity, selectedRow]);

  return (
    <Modal open={openModal} 
    onClose={handleCloseModal}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description">
      <Box sx={style}>
        
        <FadeLoader color="#212121" loading={isLoading}/>
        <TextField id='itemName'
          value={item}
          label='Name of Item'
          onChange={(e) => setItemName(e.target.value)}
        />
        <TextField id="department"
          label='Department'
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        />
        <TextField id='quantity'
          label='Quantity'
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          type='number'
        /> 
        <Box sx={{display: 'flex', justifyContent: 'flex-end'}}>
            <Button variant="contained"
                onClick={handleCloseModal}
                disabled={isLoading}
                sx={{mr: '10px', 
                backgroundColor: 'white', color: 'red', border: '0.5px solid red', 
                '&:hover': { backgroundColor: '#d11919', color: 'white'
              }}}
            >
              Exit Without Saving
            </Button>
            <Button variant="outlined"
            onClick={handleSaveInformation}
            disabled={isLoading}
            sx={{backgroundColor: '#2686ed', color: 'white', border: '0.5px solid #0459b5', 
              '&:hover' : {backgroundColor: '#2774e8'}
            }}
            >
              Save & Exit ✅
            </Button>
        </Box>
      </Box>
    </Modal>
  )
}
