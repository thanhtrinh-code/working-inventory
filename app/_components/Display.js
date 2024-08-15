"use client"
import { Paper, TableContainer, Table, TableBody, TableHead, TableRow, TableCell, Box, TablePagination, Checkbox } from "@mui/material";
import { useEffect, useState } from "react";

import {collection, deleteDoc, onSnapshot, query, doc } from 'firebase/firestore';
import {db} from '../../firebase';
import EmptyData from "./EmptyData";
import Loading from "./Loading";
import { toast } from "react-toastify";
import TableHeader from "../_table/TableHeader";
import TableCard from "../_table/TableCard";
import MyModal from "./MyModal";
import RecipeGenerator from "../_RecipeGenerator/RecipeGenerator";
import MyTableBody from "../_table/MyTableBody";


const columns = [
    {id: 'checkbox', label: '', minWidth: 5},
    {id: 'itemName', label: 'Item Name', minWidth: 80},
    {id: 'quantity', label: 'Quantity', minWidth: 50},
    {id: 'department', label: 'Department', minWidth: 80},
    {id: 'action', label: '', minWidth: 30},
];

const StyledColumnsAndGenerator = {
  display: 'flex', 
  alignItems: 'center', 
  justifyContent: 'flex-end', 
  height: '56vh', 
  gap: '5px'
}
const StyledTable = {
  width: '70%', 
  overflow: 'hidden', 
  display: 'flex', 
  border: '1px solid black', 
  flexDirection: 'column',
  height: '100%', 
  // bgcolor: 'tomato'
};
export default function Display() {
    const [page, setPage] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [rowsPerPage, setRowsPerPage] = useState(6);
    const [rows, setRows] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [selectedRow, setSelectedRow] = useState(null);
    const [search, setSearch] = useState('');
    const [displayRecipe, setDisplayRecipe] = useState(false);
    const handleCloseModal = () => setOpenModal(false);

    const [selectedItems, setSelectedItems] = useState({});
    const [prevSelectedItems, setPrevSelectedItems] = useState([]);

    function handleSelectedItems(e, itemName) {
        setSelectedItems((prev) => ({...prev, [itemName]: e.target.checked }));
    }
    function handleOpenModal (rowId){
      setSelectedRow(rowId);
      setOpenModal(true);
    }
    function handleChangePage(e, newPage) {
        setPage(newPage);
    }
    function handleChangeRowsPerPage(event) {
        setRowsPerPage(+event.target.value);
        setPage(0);
    }
    function handleDisplayRecipe(){
      const prevItems = Object.keys(selectedItems).filter(key => selectedItems[key]);
      setPrevSelectedItems(prevItems);
      if(!displayRecipe){
        setDisplayRecipe(recipe => !recipe);
      }else{
        setDisplayRecipe(true);
      }
    }
    const handleDeletePage = async (id) => {
      try {
        await deleteDoc(doc(db, 'inventory', id));
        toast.success('Document deleted successfully');
      } catch (error) {
        toast.error('Error deleting document');
      }
    };
  // Read data from firebase
  useEffect(() => {
    const q = query(collection(db, 'inventory'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let data = [];
      querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
      });
      setRows(data);
      setIsLoading(false);
    })
    return () => unsubscribe();
  }, [setRows, setIsLoading, openModal]);
  const emptyData = rows.length === 0;
  return (
    <Box sx={StyledColumnsAndGenerator}>
        <RecipeGenerator displayRecipe={displayRecipe} 
        handleDisplayRecipe={handleDisplayRecipe}
        prevSelectedItems={prevSelectedItems}
        />


    <Paper sx={StyledTable}>
      <TableContainer sx={{maxHeight: '100%', border: '1px solid black', flex: '1 1 auto'}}>
        <Table stickyHeader aria-label = 'sticky table'> 
          <TableHead>
            <TableHeader columns={columns} search={search} setSearch={setSearch}/>
          </TableHead>
          {isLoading ? <Loading/>: 
          emptyData ? <EmptyData/> : (
            <MyTableBody rows={rows} page={page}
            rowsPerPage={rowsPerPage} search={search} 
            handleSelectedItems={handleSelectedItems}
            handleOpenModal={handleOpenModal}
            handleDeletePage={handleDeletePage}
            selectedItems={selectedItems}
            />
            )}
        </Table>
      </TableContainer>
      <TablePagination
        component='div'
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        rowsPerPageOptions={[]}
        sx={{alignSelf: 'flex-end' }}
      />
    </Paper>
    <MyModal openModal={openModal} handleCloseModal={handleCloseModal} selectedRow={selectedRow}/>
    </Box>
  )
}
