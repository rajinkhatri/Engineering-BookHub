import React, { useState, useEffect } from "react";

const FacultyCard = ({ faculty }) => {

    const facultyname = faculty.name;
    // const facultyimage = faculty.image;
    const DeleteFaculty = async (event) => {

        // const facultyname = document.getElementsByClassName('card-title').value;
    
        console.log(facultyname)
    
        event.preventDefault();
    
        try {
            const response = await fetch('http://127.0.0.1:8000/del-faculty/', {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    facultyname: facultyname,
                    //  facultyimage: facultyimage,
                }),
            });
    
            const data = await response.json();
    
            if (data.success) {
                console.log('faculty has been deleted');
                window.location.reload(false)
            }
            else {
                console.log('couldnot be deleted');
                // alert('the username or password is incorrect');
            }
        }
        catch (error) {
            console.error('error authenticating:', error);
        }
    };

    return (
        <div className="card" >
            <img src={faculty.image} alt="faculty" className="img-thumbnail" />
            <div className="card-body">
                <h5 className="card-title">{faculty.name}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#"  className="btn btn-primary" >Edit </a>
                <a href="#" className="btn btn-primary" onClick={DeleteFaculty}>Delete</a>
            </div>
        </div>
        // <div className="faculty-card card">
        //     <img src={faculty.image} alt="faculty" className="img-thumbnail" />
        //     <h3 className="card-title">{faculty.name}</h3>
        //     <button data-toggle="modal" data-target="editModal" className="btn btn-dark">Edit</button>
        //     <button className="btn btn-dark" onSubmit={DeleteFaculty}>Delete</button>
        // </div>
    )
}



const HomePageee = () => {

    const [facultyList, setFacultyList] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/get-faculty/')
            .then(response => response.json())
            .then(data => setFacultyList(data))
            .catch(error => console.error('Error reading faculty data', error))
    }, [])


    const [facultyname, setFacultyname] = useState('');
    const [facultyimage, setfacultyimage] = useState('');

    console.log(facultyname, facultyimage);

    const AddFaculty = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('http://127.0.0.1:8000/add-faculty/', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    facultyname: facultyname,
                    facultyimage: facultyimage,
                }),
            });

            const data = await response.json();

            if (data.success) {
                console.log('new faculty added');
                window.location.reload(false)
            }
            else {
                console.log('not added');
                // alert('the username or password is incorrect');
            }
        }
        catch (error) {
            console.error('error authenticating:', error);
        }
    };

    return (
        <div className="container">
            <h1 style={{marginLeft:"200px"}}>welcome to main page of Engineering-Bookhub</h1>
            <form onSubmit={AddFaculty}>
                <div className="form-group ">
                    <label htmlFor="facultyname" className="label"></label>
                    <input type="text" name="facultyname" id="email" placeholder="Facultyname" className="form-control username-form" onChange={(e) => setFacultyname(e.target.value)} />

                    <label htmlFor="facultyimage" className="label"></label>
                    <input type="file" name="facultyimage" id="facultyimage" placeholder="Upload Image" className="form-control password-form" onChange={(e) => setfacultyimage(e.target.value)} />

                </div>
                <button type="submit" className="login-btn btn btn-primary">Add Books</button>
            </form>


            {facultyList.map(faculty => (
                <FacultyCard key={faculty.name} faculty={faculty}  />
            ))}
        </div>
    )
}

export default HomePageee;


// const EditFaculty = ({ faculty, onSave, onCancel }) => {
//     return (
//         <div className="modal fade" id="editModal" tabIndex="-1" role="dialog" aria-labelledby="editModalLabel"
//             aria-hidden="true">
//             <div className="modal-dialog" role="document">
//                 <div className="modal-content">
//                     <div className="modal-header">
//                         <h5 className="modal-title" id="editModalLabel">Edit Faculty</h5>
//                         <button type="button" className="close" data-dismiss="modal" aria-label="Close">
//                             <span aria-hidden="true">×</span>
//                         </button>
//                     </div>
//                     <div className="modal-body">
//                         <form onSubmit={(e) => { e.preventDefault(); onSave(); }}>
//                             <input type="hidden" name="facultyIdEdit" id="facultyIdEdit" value={faculty.id} />
//                             <div className="form-group">
//                                 <label htmlFor="facultyNameEdit">Edit Faculty's Name</label>
//                                 <input type="text" className="form-control" id="facultyNameEdit" name="facultyNameEdit"
//                                     value={faculty.name} onChange={(e) => faculty.setName(e.target.value)} />
//                             </div>

//                             <div className="form-group">
//                                 <label htmlFor="facultyImageEdit">Edit Faculty's Image URL</label>
//                                 <input type="text" className="form-control" id="facultyImageEdit" name="facultyImageEdit"
//                                     value={faculty.image} onChange={(e) => faculty.setImage(e.target.value)} />
//                             </div>
//                             <div className="modal-footer">
//                                 <button type="button" className="btn btn-dark" data-dismiss="modal" onClick={onCancel}>Close</button>
//                                 <button type="submit" className="btn btn-success">Save changes</button>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }