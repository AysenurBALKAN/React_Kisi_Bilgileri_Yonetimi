import React from "react";
import { useContext ,useState,useEffect} from "react";
import { EmployeeContext } from "../contexts/EmployeeContext";
import { Button, Modal, OverlayTrigger,Tooltip } from "react-bootstrap";
import EditForm from "./EditForm";

const Employee = ({ employee }) => {

    const { deleteEmployee } = useContext(EmployeeContext);
    const [show, setShow] = useState(false)
    const handleClose=()=>setShow(false)
    const handleShow=()=>setShow(true)

    useEffect(()=>{
        handleClose()
    },[employee])
    
    return (
        <React.Fragment>

            <td>{employee.name}</td>
            <td>{employee.email}</td>
            <td>{employee.address}</td>
            <td>{employee.phone}</td>
            <td>
                <OverlayTrigger
                    overlay={
                        <Tooltip id={`tooltip-top`}>
                            Düzenle
                        </Tooltip>
                    }>
                      <button onClick={handleShow} className="btn text-warning btn-act" data-toggle="modal"><i className="material-icons" >&#xE254;</i></button>
                </OverlayTrigger>
                <OverlayTrigger
                    overlay={
                        <Tooltip id={`tooltip-top`}>
                            Sil
                        </Tooltip>
                    }>
                <button onClick={() => deleteEmployee(employee.id)} className="btn text-danger btn-act" data-toggle="modal"><i className="material-icons" >&#xE872;</i></button>
                </OverlayTrigger>
            </td>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header className="modal-header" closeButton>
                    <Modal.Title>
                         Kişi Bilgileri
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <EditForm  theEmployee={employee}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose} >
                        İptal

                    </Button>
                </Modal.Footer>
            </Modal>




        </React.Fragment>
    )
}
export default Employee;