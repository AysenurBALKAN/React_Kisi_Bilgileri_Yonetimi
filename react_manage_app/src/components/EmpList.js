
import { useContext, useEffect, useState } from "react";
import Employee from "./Employee";
import { EmployeeContext } from "../contexts/EmployeeContext";
import { Button, Modal, Alert } from "react-bootstrap";
import AddForm from "./AddForm";
import Pagination from "./Pagination";
const EmpList = () => {

    const { sorted } = useContext(EmployeeContext)
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)
    const [currentPage, setCurrentPage] = useState(1)
    const [employeesPerPage] = useState(2)
    const [showAlert, setShowAlert] = useState(false);


    const handleShowAlert = () => {
        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false);
        }, 3000);

    };

    useEffect(() => {

        handleClose();
        return () => {
            handleShowAlert();
        }
    }, [sorted])

    const indexOfLastEmployee = currentPage * employeesPerPage;
    const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
    const currentEmployees = sorted.slice(indexOfFirstEmployee, indexOfLastEmployee);
    const totalPagesNum = Math.ceil(sorted.length /employeesPerPage)

    return (
        <>
            <div className="table-title" >
                <div className="row">
                    <div className="col-sm-6">
                        <h2>Kişi <b>Listesi</b></h2>
                    </div>
                    <div className="col-sm-6">
                        <Button onClick={handleShow} className="btn btn-success text-white" data-toggle="modal"><i className="material-icons">&#xE147;</i> <span>Yeni Kişi Ekle</span></Button>
                    </div>
                </div>
            </div>

            <Alert show={showAlert} variant="success">
                Yeni Kişi Listesi Güncellendi
            </Alert>
            <table className="table table-striped table-hover">
                <thead >
                    <tr>
                        <th>İsim</th>
                        <th>Email</th>
                        <th>Adres</th>
                        <th>Telefon</th>
                        <th>İşlemler</th>
                    </tr>
                </thead>
                <tbody>
                    {currentEmployees.map((employee) => (
                        <tr key={employee.id}>
                            <Employee employee={employee} />
                        </tr>
                    ))}
                </tbody>
            </table>
            <Pagination 
            pages={totalPagesNum} 
            setCurrentPage={setCurrentPage}
            currentEmployees={currentEmployees}
            sorted={sorted}
            />
            <Modal show={show} onHide={handleClose}>
                <Modal.Header className="modal-header" closeButton>
                    <Modal.Title>
                      Yeni Kişi Ekle
                    </Modal.Title>

                </Modal.Header>
                <Modal.Body>
                    <AddForm />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        İptal

                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default EmpList;
