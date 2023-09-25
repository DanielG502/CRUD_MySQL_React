import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const Read = () => {
    const { ID } = useParams();
    const [Student, setStudent] = useState([]);
    useEffect(() => {
        axios
            .get('http://localhost:8081/Read/' + ID)
            .then((res) => {
                // console.log(res);
                setStudent(res.data[0]);
            })
            .catch((err) => console.log(err));
    }, []);
    return (
        <div className='d-flex vh-100 bg-primary justify-content-center aling-items-center'>
            <div className='position-absolute top-50 start-50 translate-middle w-50 bg-white rounded p-3'>
                <div className='p-2'>
                    <h1>Student Details</h1>
                    {/* para evitar este codigo podemos ir a la linea donde esta setStudent(res.data); y agregarle un [0]
                    quedaria asi setStudent(res.data[0]);*/}
                    {/* o dejarlo asi como este de abajo*/}
                    {/* {Student && Student[0] && ( */}
                    <div>
                        <h2>ID: {Student.ID}</h2>
                        <h2>Name: {Student.Name}</h2>
                        <h2>Email: {Student.Email}</h2>
                    </div>
                    {/* )} */}
                </div>
                <Link
                    to={`/Home`}
                    className='btn btn-primary me-2'>
                    Return Home
                </Link>
                <Link
                    to={`/Edit/${Student.ID}`}
                    className='btn btn-info'>
                    Edit
                </Link>
            </div>
        </div>
    );
};
export default Read;
