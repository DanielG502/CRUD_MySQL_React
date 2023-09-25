import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
    const [data, setData] = useState([]);

    // validamos la conexion nos debe de retornar un log con los datos de la tabla Student
    useEffect(() => {
        axios
            .get('http://localhost:8081/')
            .then((res) => setData(res.data))
            .catch((err) => console.log(err));
    }, []);

    const handleDelete = (id) => {
        axios
            .delete('http://localhost:8081/Delete/' + id)
            .then(() => {
                location.reload();
            })
            .catch((err) => console.log(err));
    };
    return (
        <div className='d-flex vh-100 bg-primary justify-content-center aling-items-center'>
            <div className='position-absolute top-50 start-50 translate-middle w-50 bg-white rounded p-3'>
                <h2>Student List</h2>
                <div className='d-flex justify-content-end'>
                    <Link
                        to='/Create'
                        className='btn btn-success'>
                        Create +
                    </Link>
                </div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((student, index) => {
                            return (
                                <tr key={index}>
                                    <td>{student.ID}</td>
                                    <td>{student.Name}</td>
                                    <td>{student.Email}</td>
                                    <td>
                                        <Link
                                            to={`/Read/${student.ID}`}
                                            className='btn btn-sm btn-info'>
                                            Read
                                        </Link>
                                        <Link
                                            to={`/Edit/${student.ID}`}
                                            className='btn btn-sm btn-primary mx-2'>
                                            Edit
                                        </Link>
                                        <button
                                            onClick={() =>
                                                handleDelete(student.ID)
                                            }
                                            className='btn btn-sm btn-danger'>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
export default Home;
