import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const Edit = () => {
    const { ID } = useParams();
    // const [Student, setStudent] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get('http://localhost:8081/Read/' + ID)
            .then((res) => {
                // console.log(res);
                setValues({
                    ...values,
                    name: res.data[0].Name,
                    email: res.data[0].Email,
                });
            })
            .catch((err) => console.log(err));
    }, []);

    const [values, setValues] = useState({
        name: '',
        email: '',
    });
    const handleUpdate = (event) => {
        event.preventDefault();
        axios
            .put('http://localhost:8081/Edit/' + ID, values)
            .then(() => {
                // console.log(res);
                navigate('/Home');
            })
            .catch((err) => console.log(err));
    };
    return (
        <div className='d-flex vh-100 bg-primary justify-content-center aling-items-center'>
            <div className='position-absolute top-50 start-50 translate-middle w-50 bg-white rounded p-3'>
                <form onSubmit={handleUpdate}>
                    <div className='d-flex justify-content-between align-items-center'>
                        <h2>Update Student</h2>
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
                            value={values.name}
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
                            value={values.email}
                        />
                    </div>
                    <button className='btn btn-success'>Update</button>
                </form>
            </div>
        </div>
    );
};

export default Edit;
