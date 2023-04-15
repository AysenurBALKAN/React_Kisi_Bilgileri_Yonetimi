import { Button, Form } from "react-bootstrap";
import { EmployeeContext } from "../contexts/EmployeeContext";
import { useContext, useState } from "react";

const EditForm = ({theEmployee}) => {

    const { editEmployee } = useContext(EmployeeContext);

    const employee=theEmployee;
    const id=employee.id;

     const [name, setName] = useState(employee.name);
     const [email, setEmail] = useState(employee.email)
     const [address, setAddress] = useState(employee.address)
     const [phone, setPhone] = useState(employee.phone)

    const EditEmployee ={id,name,email,address,phone};

    const handleSubmit = (e) => {
        e.preventDefault();
        editEmployee(id,EditEmployee);
    }
    

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="İsim"
                    name="name"
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                    required
                    style={{marginBottom:"10px"}}/>
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    
                    required
                    style={{marginBottom:"10px"}}/>
            </Form.Group>
            <Form.Group>
                <Form.Control
                    as="textarea"
                    placeholder="Adres"
                    name="address"
                    value={address}
                    onChange={(e)=>setAddress(e.target.value)}
                    rows={3}
                    style={{marginBottom:"10px"}}/>
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Telefon"
                    name="phone"
                    value={phone}
                    onChange={(e)=>setPhone(e.target.value)}
                    style={{marginBottom:"10px"}}/>
            </Form.Group>
            <Button variant="success"  style={{width:"100%"}} type="submit" block  >Kişiyi Düzenle </Button>
        </Form>
    );
}
export default EditForm;