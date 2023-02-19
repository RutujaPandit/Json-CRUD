import React, { useState } from 'react'
import {Link,useNavigate} from 'react-router-dom'

const EmpCreate = () => {

    const [createFormData,setCreateFormData] = useState({
        id:'',
        name:'',
        email:'',
        phone:'',
        active:true,
        validation:''
    }
        )
        
        const navigate=useNavigate();
        const {id,name, email,phone,active,validation} =createFormData;

        const handleFormData = (e) =>{
           let newData={...createFormData,
            [e.target.name]:e.target.value
            }
            setCreateFormData(newData);
        }

        const handlesubmit = (e) =>{
            e.preventDefault();
            // console.log({id,name,email,phone,active});
            fetch('http://localhost:8000/employee',{
                method:"POST",
                headers:{"content-type":"application/json"},
                body: JSON.stringify(createFormData)})
                .then(res =>{
                    alert('Saved successfully.')
                    navigate('/');
                })
                .catch((err)=>console.log(err.message))
        }
    return (
        <>
            <div className="row">
                <div className="offset-lg-3 col-lg-6">
                    <form className="container" onSubmit={handlesubmit}>
                        <div className='card' style={{"textAlign":"left"}}>
                            <div className="card-title">
                                <h2>Employee Create</h2>
                            </div>
                            <div className='card-body'>

                                <div className='row'>
                                    <div className='col-lg-12'>
                                        <div className='form-group'>
                                            <label>ID</label>
                                            <input name='id' value={createFormData.id} disabled="disabled" className='form-control'></input>
                                        </div>
                                    </div>
                                </div>

                                <div className='col-lg-12'>
                                    <div className='form-group'>
                                        <label>NAME</label>
                                        <input name='name' value={createFormData.name} onChange={handleFormData} className='form-control'></input>
                                    </div>
                                </div>
                            

                            <div className='col-lg-12'>
                                <div className='form-group'>
                                    <label>Email</label>
                                    <input name='email' value={createFormData.email} onChange={handleFormData}className='form-control'></input>
                                </div>
                            </div>
                            <div className='col-lg-12'>
                            <div className='form-group'>
                                <label>Phone No</label>
                                <input name='phone' value={createFormData.phone} onChange={handleFormData}className='form-control'></input>
                            </div>
                        </div>

                        <div className='col-lg-12'>
                            <div className='form-check'>
                            <input name='active' value={createFormData.active} onChange={handleFormData} type='checkbox' className='form-check-input'></input>
                                <label className='form-check-label'>Is Active</label>
                             </div>
                        </div>
                        <div className='col-lg-12'>
                            <div className='form-group'>
                                <button className="btn btn-success" type="submit">Save</button>
                                <Link to="/" className = "btn btn-danger ">Back</Link>
                            </div>
                        </div>
                        </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default EmpCreate
