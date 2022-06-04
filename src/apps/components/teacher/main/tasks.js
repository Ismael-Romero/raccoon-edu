import React, {useState,useEffect} from 'react';

import axios from 'axios';


const FormTask = (props) => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [pre_date, setPre_Date] = useState('');
    const [pre_hour, setPre_hour] = useState('');
    const [subject, setSubject] = useState('');
    const [option, setOption] = useState([]);
    

    /**
     * Executes a database query before loading all content into the view.
     * Two useState are used to handle and capture events
     */
    useEffect (() => {
        const getSubjects = () => {
            axios.get(`http://127.0.0.1:3000/getsubject/${props.teach}`)
            .then((res) => {
                setOption(res.data);
            })
            .catch((err)=> console.log(err));
        };
        getSubjects();
    }, []);


    const handleSubmitNewTask = (event) => {
        event.preventDefault();
        const date_end = pre_date.concat(" ",pre_hour,":00");

        if (subject.length !== 0 && title.length !== 0){
            if(pre_date.length !== 0 && pre_hour.length !== 0){
                axios.post(`http://127.0.0.1:3000/newtask/${title}/${description}/${date_end}/${subject}`)
                .then( (res) => {
                    if (res.data.status === 1){
                        clearBox();
                        messageError(["Tarea enviada a sus alumnos exitosamente. presione Ctrl+R para recargar la tabla.","",""], [true, false, false]);
                    }else{
                        messageError(["","","Ha ocurrido un error en la RED"], [false, false, true]);
                    }
                })
                .catch( (err) => {
                    console.log(err);
                })
            }else {
                messageError(["","Especifique una fecha y hora valida",""], [false, true, false]);
            }
        } else {
            messageError(["","Especifique un titulo y/o selecione una materia",""], [false, true, false]);
        }
    }

    const messageError = (msg, _status) => {
        document.getElementById('msg-success').innerText = msg[0];
        document.getElementById('msg-warning').innerText = msg[1];
        document.getElementById('msg-danger').innerText = msg[2];

        document.getElementById('msg-success').style.display = (_status[0]) ? "block" : "none";
        document.getElementById('msg-warning').style.display = (_status[1]) ? "block" : "none";
        document.getElementById('msg-danger').style.display = (_status[2]) ? "block" : "none";
    }

    const clearBox = () => {
        document.getElementById("t-opt").value = "x";
        document.getElementById("t-title").value = "";
        document.getElementById("t-desc").value = "";
        document.getElementById("t-date").value = "";
        document.getElementById("t-time").value = "";
        setTitle('');
        setDescription('');
        setPre_Date('');
        setPre_hour('');
    }
    
    return(
        <div className="col-md-12">
            <div className="card p-3">
                <div className="card-header mb-3">
                    <h5> Gestor de tareas</h5>
                </div>

                <div className="row">
                    <div className="col-md-8">
                        <form onSubmit={handleSubmitNewTask}> 
                            <div className="row mb-3">
                                <label className="col-md-2 col-form-label">Clase: </label>
                                <div className="col-md-10">
                                    <select className="form-select" id="t-opt" onChange={(ev) => setSubject(ev.target.value)}>
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
                                            id="t-title"
                                            value={title}
                                            onChange={(ev) => setTitle(ev.target.value)}
                                            />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-md-2">
                                    <label>Descripción: </label>
                                </div>
                                <div className="col-md-10">
                                    <textarea   className="form-control" 
                                                id="t-desc"
                                                style={{height: "100px"}}
                                                value={description}
                                                onChange={(ev) => setDescription(ev.target.value)}
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
                                            id="t-date"
                                            value={pre_date}
                                            onChange={(ev) => {setPre_Date(ev.target.value)}}
                                            />
                                </div>
                                <div className="col-md-6">
                                    <input  type="time" 
                                            className="form-control"
                                            id="t-time"
                                            pattern="T[0-9]{2}:[0-9]"
                                            value={pre_hour}
                                            onChange={(ev)=>{setPre_hour(ev.target.value)}}
                                            />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-md-10"></div>
                                <div className="col-md-2">
                                    <button type="submit" className="btn btn-primary">Enviar</button>
                                </div>
                            </div>
                        </form>
                        <div className="alert alert-success" id="msg-success" role="alert" style={{display: "none"}}></div>
                        <div className="alert alert-warning" id="msg-warning" role="alert" style={{display: "none"}}></div>
                        <div className="alert alert-danger" id="msg-danger" role="alert" style={{display: "none"}}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FormTask;