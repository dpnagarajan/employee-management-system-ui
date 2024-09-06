import React, { useState } from 'react'
import EmployeeService from '../services/EmployeeService';

const AddEmployee = () => {
    const [Employee, setEmployee] = useState(
        {
            id:"",
            firstName:"",
            lastName:"",
            emailId:"",
        }
    );
    
    const handdleChange = (e) => {
        const value = e.target.value;
        setEmployee({...Employee, [e.target.name]: value });
    };

    const saveEmployee = (e) => {
        e.preventDefault();
        EmployeeService.saveEmployee(Employee)
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });

    };

    return (
        <div className='flex max-w-2xl mx-auto shadow-md border-b'>
        <div className='px-8 py-8'>
            <div className='font-thin text-xl tracking-normal'>
                <h1> Add New Employee</h1>
            </div>
            <div className='items-center justify-center h-14 w-full my-4'>
                <label className='block text-green-800'>First Name</label>
                <input  
                type='text'
                name='firstName'
                onChange={(e)=> handdleChange(e)}
                value={Employee.firstName}
                        className='h-0 w-96 border  px-2 py-4'></input>
            </div>
            <div className='items-center justify-center h-14 w-full my-4'>
                <label className='block text-green-800'>Last Name</label>
                <input  
                type='text'
                name='lastName'
                onChange={(e)=> handdleChange(e)}
                value={Employee.lastName}
                        className='h-0 w-96 border  px-2 py-4'></input>
            </div>
            <div className='items-center justify-center h-14 w-full my-4'>
                <label className='block text-green-800'>Email</label>
                <input  
                type='email'
                name='emailId'
                onChange={(e)=> handdleChange(e)}
                value={Employee.emailId}
                        className='h-0 w-96 border  px-2 py-4'></input>
            </div>
            <div className='items-center justify-center h-14 w-full my-4 space-x-4'>
                <button onClick={saveEmployee} className='rounded text-red-700 text-pretty font-serif bg-green-400 hover:bg-green-900 px-2 py-2'> 
                    Save</button>
                <button className='rounded text-white text-pretty font-serif bg-green-400 hover:bg-red-600 px-2 py-2'> 
                    Clear</button>
            </div>
        </div>
        
        </div>
    )
}

export default AddEmployee;
