"use client"
import {Button, TextField} from '@mui/material';
import { collection, addDoc } from 'firebase/firestore';
import {auth, db} from '../../firebase';
import { useState } from 'react';



const StyledSearchField = {
    backgroundColor: 'white', 
    display: 'flex', 
    justifyContent: 'center', 
    width: '80%', 
    gap: '10px', 
    alignItems: 'center',
}
const StyledButton = {
  flex: '0 0 auto',
  bgcolor: 'green', 
  borderRadius: '20px', 
  height: '2.5rem', 
  color: 'white',
  '&:hover': {
    backgroundColor: '#38c914',
    color: 'white',
  },
}

export default function SearchField() {
  const [item, setItemName] = useState({
    itemName: '',
    department: '',
    quantity: 1,
  });

  // Add Item to firebase
  async function handleAddItem(e){
    e.preventDefault();
    await addItemToInventory(item);
    setItemName({itemName: '', department: '', quantity: 1});
  }


  return (
    <form style={StyledSearchField} onSubmit={handleAddItem}>
            <TextField id='searchItem' 
            label='e.g: Chicken, Salt, Pepper,...' 
            required
            value={item.itemName}
            onChange={(e) => setItemName({...item, itemName: e.target.value})}
            sx={{ flex: 3,'& .MuiOutlinedInput-root': { borderRadius: '20px', borderColor: 'black'} }}
            />
            <TextField id='department'
            label='Department' 
            required
            value={item.department}
            onChange={(e) => setItemName({...item, department: e.target.value})}
            sx={{flex: 2, '& .MuiOutlinedInput-root': { borderRadius: '20px', borderColor: 'black'} }}
            />
            <TextField id="quantity"
            label='Quantity' 
            required
            type='number'
            value={item.quantity}
            onChange={(e) => setItemName({...item, quantity: e.target.value }) }
            sx={{ flex: 1,'& .MuiOutlinedInput-root': { borderRadius: '20px', borderColor: 'black' } }}
            />

            <Button sx={StyledButton} type='submit'>
              Add to Inventory
            </Button>
      </form>
  )
}

export async function addItemToInventory(item) {
  const userId = auth.currentUser.uid;
  const userInventoryRef = collection(db, 'users', userId, 'inventory');
  try {
  await addDoc(userInventoryRef, {
    itemName: item.itemName[0].toUpperCase() + item.itemName.slice(1),  // Capitalize first letter
    department: item.department[0].toUpperCase() + item.department.slice(1), // Capitalize first letter
    quantity: item.quantity,
    createdAt: new Date(),
  });
  }catch(err){
    console.error('Error adding document: ', err);
  }
}