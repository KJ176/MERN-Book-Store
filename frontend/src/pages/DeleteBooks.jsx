import React,{useState} from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useParams,useNavigate } from 'react-router-dom';

const DeleteBooks = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {id} = useParams();
  const handleDeleteBook = () =>{
    setLoading(true);
    axios.delete(`http://localhost:5555/books/${id}`)
      .then(()=>{
        setLoading(false);
        navigate('/')
      })
      .catch((error)=>{
        setLoading(false);
        alert(`Please check console for error`);
        console.log(error);
      })
  }
  return (
    <div className='p-4 '>
      <BackButton />
      <h1 className='text-3x1 my-4'>Delete Book</h1>
      {loading ? <Spinner /> : ''}
      <div className='flex flex-col items-center border-2 border-sky-400 rounded-x1 w-[600px] p-8 mx-auto'>
        <h3 className='text-2x1'>Are you sure you want to delete?</h3>
        <button className='p-4 bg-red-600 text-white m-8 w-full' onClick={handleDeleteBook}>
          Yes, delete it!
        </button>
      </div>
    </div>
  )
}

export default DeleteBooks