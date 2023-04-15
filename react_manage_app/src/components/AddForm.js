import { Button, Form} from "react-bootstrap";
import { EmployeeContext } from "../contexts/EmployeeContext";
import { useContext, useState } from "react";

const AddForm = () => {

    const { addEmployee } = useContext(EmployeeContext);
    

    const [newEmployee, setNewEmployee] = useState({ name: "", email: "", address: "", phone: "" })

    const { name, email, address, phone } = newEmployee;

    const onInputChange = (e) => {
        setNewEmployee({ ...newEmployee, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addEmployee(name, email, address, phone)
    }

 
    return (
<>
       
        <Form onSubmit={handleSubmit}>

            <Form.Group>
            
                <Form.Control
                    type="text"
                    placeholder="İsim"
                    name="name"
                    value={name}
                    onChange={e => onInputChange(e)}
                    required
                 style={{marginBottom:"10px"}}/>
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={e => onInputChange(e)}
                    required
                    style={{marginBottom:"10px"}}/>
            </Form.Group>
            <Form.Group>
                <Form.Control
                    as="textarea"
                    placeholder="Adres"
                    name="address"
                    value={address}
                    onChange={e => onInputChange(e)}
                    rows={3}
                    style={{marginBottom:"10px"}}/>
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Telefon"
                    name="phone"
                    value={phone}
                    onChange={e => onInputChange(e)}

                    style={{marginBottom:"10px"}}/>
            </Form.Group>
            <Button variant="success" style={{width:"100%"}} type="submit" block  >Yeni Kişi Ekle </Button>
        </Form>
        </>
    );
}
export default AddForm;