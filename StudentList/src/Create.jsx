import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Create = () => {
    const [values, setValues] = useState({
        name: '',
        email: '',
    });
    
    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();
        // iniciamos la llamada a los datos
        axios
            .post('http://localhost:8081/Student/', values)
            .then(() => {
                // aplicamos el navigate para retornar a Home
            // console.log(res);
            navigate('/Home')
            })
            .catch((err) => console.log(err));
    };
    return (
        <div className='d-flex vh-100 bg-primary justify-content-center aling-items-center'>
            <div className='position-absolute top-50 start-50 translate-middle w-50 bg-white rounded p-3'>
                <form onSubmit={handleSubmit}>
                    <div className='d-flex justify-content-between align-items-center'>
                        <h2>Add Student</h2>
                        <Link
                            to='/Home'
                            className='btn btn-success'>
                            Return Home
                        </Link>
                    </div>

                    <div className='mb-2'>
                        <label htmlFor=''>Name</label>
                        <input
                            type='text'
                            placeholder='Enter Name'
                            className='form-control'
                            onChange={(e) =>
                                setValues({ ...values, name: e.target.value })
                            }
                        />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor=''>Email</label>
                        <input
                            type='text'
                            placeholder='Enter Email'
                            className='form-control'
                            onChange={(e) =>
                                setValues({ ...values, email: e.target.value })
                            }
                        />
                    </div>
                    <button className='btn btn-success'>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Create;
