import React from 'react'
import {useState} from 'react';
import {Card} from "react-bootstrap"


export default function Files() {
    const [files, setFiles] = useState([]);
    const onInputChange = (e) => {
               setFiles(e.target.files)
            };
    // const onSubmit = (e) => {
    //            e.preventDefault();
    //           const data = new FormData();
                
    //           for(let i = 0; i < files.length; i++) {
    //           data.append('file', files[i]);
    //           }
    return (
        <div>
            <Card className="filescard" style={{ width: '100%' }}>
                <Card.Header>Files</Card.Header>
                <Card.Body>
                        <form method="post" action="#" id="#" >
                        <div className="form-group files">
                            <label>Upload Your File </label>
                            <input type="file"
                                onChange={onInputChange}
                                className="form-control"
                                multiple/>
                        </div>

                        <button className="btn">Submit</button>
                        </form>
                </Card.Body>
            </Card> 
        </div>
    )
}

// export default Files

// import {useState} from 'react';
// import axios from 'axios';
// import { toast} from 'react-toastify';
// import './Files.css';

// export const Files= ({onSuccess}) => {
//     const [files, setFiles] = useState([]);

//     const onInputChange = (e) => {
//         setFiles(e.target.files)
//     };

//     const onSubmit = (e) => {
//         e.preventDefault();

//         const data = new FormData();

//         for(let i = 0; i < files.length; i++) {
//             data.append('file', files[i]);
//         }

//         axios.post('//localhost:8000/upload', data)
//             .then((response) => {
//                 toast.success('Upload Success');
//                 onSuccess(response.data)
//             })
//             .catch((e) => {
//                 toast.error('Upload Error')
//             })
//     };

//     return (
//         <form method="post" action="#" id="#" onSubmit={onSubmit}>
//             <div className="form-group files">
//                 <label>Upload Your File </label>
//                 <input type="file"
//                        onChange={onInputChange}
//                        className="form-control"
//                        multiple/>
//             </div>

//             <button>Submit</button>
//         </form>
//     )
// };