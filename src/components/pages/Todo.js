import React, {useEffect, useState} from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';


const Todo = () => {

//get local storage data
const getLocalData = () => {
    const data = localStorage.getItem('items');
    if(data){
        return JSON.parse(data); //string to array
    }else{
        return [];
    }
}
// const notify = (props) => toast.info(props, {
//     position: "top-center",
//     autoClose: 5000,
//     hideProgressBar: false,
//     closeOnClick: true,
//     pauseOnHover: true,
//     draggable: true,
//     progress: undefined,
//     }); 

const [item, setItem] = useState(''); //play with current data
// const [items, setItems] = useState([]); //without localstorage data
const [items, setItems] = useState(getLocalData()); //get the localstoragge data
// const [isCheckedItem, setIsCheckedItem] = useState(false);
const [isSetItemId, setIsSetItemId] = useState('');
const [toggleEdit, setToggleEdit] = useState(false);

//add item to list
const addItem = (e) => {
    e.preventDefault();
    console.log(item);
    if(!item){

        // notify('Please enter a value');
        alert('Please enter a value');
    }
    else if(item && isSetItemId){
        //update item
        const updatedItems = items.map((elem)=>{
            if(elem.id === isSetItemId){
                return {...elem, value: item}; //ammend the tergeted item keeping the old data as same with spread operator(e.g. '...elem')
                
            }else{ 
                return elem;
            }
        });
        setItems(updatedItems); //
        setItem([]); //clear input
        setIsSetItemId(null);//clear ItemId
        setToggleEdit(false); //reset flag to false once item is updated
        // notify('Item updated successfully');
        alert('Item updated successfully');
    }else{
        //to get the unique id for different items
        const newItem = {
            id: Date.now(),
            value: item,
            check: false
        };
        setItems([...items, newItem]);
        setItem('');
        // notify('Item added successfully');
        alert('Item added successfully');
    }

}
//edit item
const editItem = (id) => {
    // console.log(id);
    setToggleEdit(true); //flag to convert text 'Add' -> 'Update'
    const newItems = items.find(item => item.id === id);
    // console.log(newItems);
    setItem(newItems.value);
    setIsSetItemId(id); //to use in addItem which is the common method for saving the item uodate
}

//delete item from list
const deleteItem = (id) => {
    
    setItems(items.filter(item => item.id !== id));
    // notify('Item deleted successfully'); 
    alert('Item deleted successfully'); 
}

const checkItem = (id) => {
    
    const updatedItems = items.map((elem)=>{
        if(elem.id === id && elem.check === false){
            // notify('Item checked successfully');
            alert('Item checked successfully');
            return {...elem, check: true}; //ammend the tergeted item keeping the old data as same with spread operator(e.g. '...elem')
            
        }else if(elem.id === id && elem.check === true){
            // notify('Item unchecked successfully');
            alert('Item unchecked successfully');
            return {...elem, check: false};
            
        }
        else{ 
            return elem;
        }
    });
    setItems(updatedItems); //
    
    // console.log(isCheckedItem);

}

//adding to local storage
const saveItems = () => {
    localStorage.setItem('items', JSON.stringify(items)); //array to string
}

//save to the local storage wherever te items are changed
useEffect(()=>{
    saveItems();
    // console.log(isCheckedItem);
}) //useEffect fires on items change here



  return (
    <>
    <div className="page-content page-container" id="page-content">

        <div className="padding"   style={{ marginTop: 50 }}>
            <div className="row container d-flex justify-content-center">
                <div className="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
  
                    <div className="card px-3 shadow ">
                        {/* <figure><img src="../../../public/todo.jpg"/></figure> */}
                        <div className="card-body">
                            <h4 className="card-title">📝 localStorage: Awesome Todo list</h4>
                            <form >
                            <div className="add-items d-flex"> 
                            <input type="text" name="items" value={item} className="form-control todo-list-input" placeholder="✍️What do you need to do today?" onChange={(e)=>setItem(e.target.value)}/> 
                            <button className="add btn btn-outline-info font-weight-bold todo-list-add-btn" onClick={addItem}>{ toggleEdit ? 'Update' : 'Add'}</button> </div>
                            </form>
                            <div className="list-wrapper">
                                <ul className="d-flex flex-column-reverse todo-list">
                                    {
                                        
                                        items.reverse().map((item) => (
                                            
                                        <li key={item.id}  className={item.check ? 'completed': ''}>
                                            <div className="form-check list-inline-item"> <label className="form-check-label"> 
                                            <input className="checkbox" type="checkbox" onChange={()=>checkItem(item.id)} checked={item.check ? 'checked': ''} /> {item.value} 
                                            <i className="input-helper"></i></label> </div>
                                            <div className='list-inline'>
                                             <i className="list-inline-item fa fa-edit" onClick={()=>editItem(item.id)}></i>
                                             <i className="list-inline-item mdi mdi-close-circle-outline" onClick={()=>deleteItem(item.id)}></i>
                                             </div>
                                        </li>
                                        )
                                        )
                                    }

                                    {/* <li className="completed">
                                        <div className="form-check"> <label className="form-check-label"> <input className="checkbox" type="checkbox" checked="" /> For what reason would it be advisable for me to think. <i className="input-helper"></i></label> </div> <i className="remove mdi mdi-close-circle-outline"></i>
                                    </li> */}
                                
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    {/* <ToastContainer /> */}
    </>
  )
};

export default Todo;
