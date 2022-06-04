import React, {useState, useEffect} from "react";
import axios from "axios";

const TableTasks = (props) => {

    const [rows, setRows] = useState([]); 
    const [btnDelete, setBtnDelete] = useState("");


    const [idTask, setIdTask] = useState('');
    const [subject, setSubject] = useState('');
    const [option, setOption] = useState([]);

    /**
     * Executes a database query before loading all content into the view.
     * useState is used to handle and capture events
     */
    useEffect (() => {
        const getSubjects = () => {
            axios.get(`http://127.0.0.1:3000/gettaskteach/${props.teach}`)
            .then((res) => {
                setRows(res.data);
             })
            .catch((err)=> console.error(err));
        }

        const modalOptions = () => {
            axios.get(`http://127.0.0.1:3000/getsubject/${props.teach}`)
            .then((res) => {
                setOption(res.data);
            })
            .catch((err)=> console.log(err));
        };
        modalOptions();

        getSubjects();
    }, []);

    const deleteTask = () => {
        axios.delete(`http://127.0.0.1:3000/deletetask/${btnDelete}`)
        .then((response) => {
            if (response.data[0].status === 1){
                document.getElementById('del-danger').style.display = "none";
                document.getElementById('del-success').style.display = "block";
            }else{
                document.getElementById('del-success').style.display = "none";
                document.getElementById('del-danger').style.display = "block";
            }
        })
        .catch((err) => console.error(err))

    }

    const getInfoTask = (id) => {
        axios.get(`http://127.0.0.1:3000/edittask/${id}`)
        .then((res) => {
            document.getElementById("editTitle").value = res.data[0].task_title;
            document.getElementById("editDescription").value = res.data[0].task_description;
            document.getElementById("getSub").value = res.data[0].task_subject_id;

        })
        .catch((err)=> console.error(err));

    }

    const update = () => {
        const sub = document.getElementById("getSub").value;
        const title = document.getElementById("editTitle").value;
        const desc =  document.getElementById("editDescription").value;

        const up_date = document.getElementById("up-date").value;
        const up_time = document.getElementById("up-time").value;
        const date_end = up_date.concat(" ",up_time,":00");

        axios.post(`http://127.0.0.1:3000/updatetask/${idTask}/${title}/${desc}/${date_end}/${sub}`)
        .then((res) => {
            document.getElementById("up-success").style.display = "block";
        })
        .catch((err)=> document.getElementById("del-danger").style.display = "block" );

    }



    return (
        
        <div className="row">
            <div className="alert alert-success" id="del-success" role="alert" style={{display: "none"}}>Se borro la tarea; presiona ctrl+r para recargar la tabla</div>
            <div className="alert alert-success" id="del-danger" role="alert" style={{display: "none"}}>Algo ha salido mal</div>
            
            <div className="alert alert-success" id="up-success" role="alert" style={{display: "none"}}>El registro se actualizo correctamente; presiona ctrl+r para recargar la tabla</div>

            <div className="card p-3">
                <div className="table-wrapper-scroll-y my-custom-scrollbar">
                    <table className="table mb-5">
                        <thead>
                            <tr>
                            <th scope="col">Materia</th>
                            <th scope="col">Tarea</th>
                            <th scope="col">Fecha de entrega: </th>
                            <th scope="col">Acciones </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                rows.map(item =>(
                                    <tr key={item.task_id} id={item.task_id}>
                                        <td>{item.task_title}</td>
                                        <td>{item.task_date_end}</td>
                                        <td>{item.sub_name}</td>
                                        <td>
                                            <button type="button" 
                                                    id={item.task_id} 
                                                    className="btn btn-primary btn-danger btn-sm"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#exampleModal"
                                                    onClick={(ev) => setBtnDelete(item.task_id)}
                                                    >
                                                <i className="bi bi-trash2"></i>
                                            </button>&nbsp;
                                            <button type="button" 
                                                    id={item.task_id} 
                                                    className="btn btn-primary btn-success btn-sm"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#updateModal"
                                                    
                                                    onClick={(ev) => { 
                                                        setIdTask(ev.currentTarget.id)
                                                        getInfoTask(ev.currentTarget.id)
                                                    }}
                                                    >
                                                <i className="bi bi-pencil-square"></i>
                                            </button>
                                        </td>
                                    </tr>
                                ))

                            }

                        </tbody>
                    </table>
                </div>
            </div>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Advertencia</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        ¿Estás seguro de que deseas borrar esta tarea?
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary btn-light" data-bs-dismiss="modal"> Cancelar </button>
                        <button type="button"
                                className="btn btn-primary btn-danger"
                                data-bs-dismiss="modal"
                                onClick={(ev) => deleteTask()}
                                > Borrar </button>
                    </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="updateModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Actualización de datos</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">

                    <form> 
                            <div className="row mb-3">
                                <label className="col-md-2 col-form-label">Clase: </label>
                                <div className="col-md-10">
                                <select className="form-select" id="getSub" onChange={(ev) => setSubject(ev.target.value)}>
                                        {
                                            <option value="x"> Selecciona una clase</option>
                                        }
                                        {
                                            option.map(item => (
                                                <option value={item.sub_id} key={item.sub_id}> {item.sub_name}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-md-2">
                                    <label>Titulo: </label>
                                </div>
                                <div className="col-md-10">
                                    <input  type="text" 
                                            className="form-control"
                                            id="editTitle"
                                            />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-md-4">
                                    <label>Descripción: </label>
                                </div>
                                <div className="col-md-8">
                                    <textarea   className="form-control" 
                                                id="editDescription"
                                                style={{height: "100px"}}
                                                placeholder="(opcional)"
                                                ></textarea>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="row mb-3">
                                    <label>Fecha y hora de entrega: </label>
                                </div>
                                <div className="col-md-6">
                                    <input  type="date"
                                            className="form-control"
                                            id="up-date"
                                            />
                                </div>
                                <div className="col-md-6">
                                    <input  type="time" 
                                            className="form-control"
                                            id="up-time"
                                            pattern="T[0-9]{2}:[0-9]"
                                            />
                                </div>
                            </div>
                        </form>

                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary btn-light" data-bs-dismiss="modal"> Cancelar </button>
                        <button type="button"
                                className="btn btn-primary btn-success"
                                data-bs-dismiss="modal"
                                onClick={(ev) => update()}
                                > Actulizar </button>
                    </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default TableTasks;