import React, {useState, useEffect} from 'react';

import axios from 'axios';

const stTasks = (props) => {

    const [rows, setRows] = useState([]);
    const [rowsTaskEnd, setRowsTaskEnd] = useState([]);

    const [taskID, setTaskID] = useState("");

    useEffect (() => {
        const getMyTasks = () => {
            axios.get(`http://127.0.0.1:3000/getmytask/${props.student}`)
            .then((res) => {
                setRows(res.data);
             })
            .catch((err)=> console.error(err));
        }
        const getMyTaskEnd = () => {
            axios.get(`http://127.0.0.1:3000/getmytaskend/${props.student}`)
            .then((res) => {
                setRowsTaskEnd(res.data);
             })
            .catch((err)=> console.error(err));
        }
        getMyTasks();
        getMyTaskEnd();
    }, []);

    const sendTask = () => {
        const file = document.getElementById('formFileMultiple').files;

        if (file[0].name !== ""){

            axios.post(`http://127.0.0.1:3000/sendmytask/${taskID}/${props.student}/1/${file[0].name}`)
            .then((res) => {
                document.getElementById('up-success').style.display = "block";
            })
            .catch((err)=> {
                console.error(err)
                document.getElementById('up-danger').style.display = "block";
            });
            

        }else{
            document.getElementById('up-success').style.display = "none";
            document.getElementById('up-danger').style.display = "block";
        }
    }

    return(
        <section className="section dashboard">
            <div className="row">
                <section className="vh-100">
                    <div className="container py-5 h-100">
                        <div className="row d-flex h-100">
                            <div className="col-md-12">
                                <div className="alert alert-success" id="up-success" role="alert" style={{display: "none"}}>Tarea enviada; presiona ctrl+r para recargar la tabla</div>
                                <div className="alert alert-success" id="up-danger" role="alert" style={{display: "none"}}>Algo ha salido mal</div>
            
                                <div className="card">
                                    <div className="card-header p-3">
                                        <h5 className="mb-0"><i className="fas fa-tasks me-2"></i>Tareas pendientes</h5>
                                    </div>
                                    <div className="card-body" data-mdb-perfect-scrollbar="true">
                        
                                        <table className="table mb-0">
                                            <thead>
                                            <tr>
                                                <th scope="col">Entrega</th>
                                                <th scope="col">Clase</th>
                                                <th scope="col">Titulo</th>
                                                <th scope="col">Descripción</th>
                                                <th scope="col">Acciones</th>
                                            </tr>
                                            </thead>
                                            <tbody id="myTable">
                                                {

                                                    rows.map(item => (
                                                        <tr key={item.id_task}>
                                                        <td scope="col">{item.date}</td>     
                                                        <td scope="col">{item.subject}</td>
                                                        <td scope="col">{item.title}</td>
                                                        <td scope="col">{item.description}</td>
                                                        <td scope="col">
                                                            <button type="button"
                                                                    id={item.id_task}
                                                                    onClick={(ev) => {
                                                                        setTaskID(ev.currentTarget.id)
                                                                        document.getElementById('formFileMultiple').value = "";
                                                                    }}
                                                                    className="btn btn-primary btn-sm btn-ligth" 
                                                                    data-bs-toggle="modal" 
                                                                    data-bs-target="#exampleModal">
                                                                    <i className="bi bi-box-seam"></i>
                                                                    &nbsp; Entregar
                                                            </button>
                                                        </td>
                                                    </tr>
                                                    ))

                                                }
                                            </tbody>
                                        </table>
                                        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div className="modal-dialog modal-xl" role="document">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h5 className="modal-title" id="exampleModalLabel">Raccoon EDU | Mis tareas</h5>
                                                        <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                                                            <span aria-hidden="true">&times;</span>
                                                        </button>
                                                    </div>
                                                    <div className="modal-body ">
                                                        <h4>Entregar tarea</h4>
                                                        <input  className="form-control" 
                                                                type="file"
                                                                id="formFileMultiple" multiple />
                                                        <div className="modal-footer">
                                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                                            <button type="button" 
                                                                    data-bs-dismiss="modal"
                                                                    className="btn btn-primary"
                                                                    onClick={() => sendTask()}
                                                            > Entregar</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> {/*End modal*/}
                                    </div>
                                </div>

                                <div className="card">
                                    <div className="card-header p-3">
                                        <h5 className="mb-0"><i className="fas fa-tasks me-2"></i>Tareas entregadas</h5>
                                    </div>
                                    <div className="card-body" data-mdb-perfect-scrollbar="true">
                        
                                        <table className="table mb-0">
                                            <thead>
                                            <tr>
                                                <th scope="col">Entregado el: </th>
                                                <th scope="col">Materia</th>
                                                <th scope="col">Tarea</th>
                                                <th scope="col">Calificado</th>
                                                <th scope="col">Puntación</th>
                                            </tr>
                                            </thead>
                                            <tbody id="myTable">
                                                {
                                                    rowsTaskEnd.map(items => (
                                                        <tr key={items.task_id}>
                                                            <td scope="col">{items.date}</td>
                                                            <td scope="col">{items.subject}</td>
                                                            <td scope="col">{items.title}</td>
                                                            <td scope="col">{(items.status_score === 0)? "No calificado" :"Calificado"}</td>
                                                            <td scope="col">{items.score}</td>
                                                        </tr>  
                                                    ))
                                                }
                                              
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
      </section>
    );
}


export default stTasks;