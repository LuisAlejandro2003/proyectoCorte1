import { Link } from "react-router-dom";
import styles from "../../assets/styles/Form.module.css";
import Logo from "../../assets/react.svg";
import Boton from "../atoms/Boton";
import Label from "../atoms/Label";
import Input from "../atoms/Input";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const FormRegisterUser = () => {

const navigate = useNavigate();
  const Form = useRef();
  const endPoint = 'http://34.225.239.102/api/registrar/usuario'



  const clickHandler = (e) => {
    e.preventDefault();
    const newForm = new FormData(Form.current);

    if(newForm.get("nombre") === "" || newForm.get("usuario") === "" || newForm.get("correo") === "" || newForm.get("contrasenia") === ""){//el simbolo de pesos despues se nombra la variable
        alert("campos vacios");
     }else{
        
    const options = {

      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nombre: newForm.get("nombre"),
        usuario: newForm.get("usuario"),
        correo: newForm.get("correo"),
        contrasenia: newForm.get("contrasenia"),
      }),
    };
    fetch(endPoint, options)
      .then((response) => response.json())
      .then((data) => {
        alert(JSON.stringify(data));
        if(data.status === true){
            navigate("/Login");
          }else{
            alert("No se agrego")
          }
      });
    }
  };
  return (
    <form ref={Form} className={styles.formulario}>
      <img src={Logo} alt="Logotipo de la empresa"></img>
      <Label msn="Crear cuenta"></Label>
      <div>
        <Label msn="Nombre"></Label>
        <Input name={"nombre"}></Input>
      </div>

      <div>
        <Label msn="Usuario"></Label>
        <Input name={"usuario"}></Input>
      </div>

      <div>
        <Label msn="Correo"></Label>
        <Input name={"correo"}></Input>
      </div>

      <div>
        <Label msn="password"></Label>
        <input type="password" name="contrasenia" className={styles.password} />
      </div>

      <div>
        <Boton
             negro
             largo
             type="button"
             onClick={clickHandler}
             className={styles.boton}
        >
          Crear cuenta
        </Boton>
      </div>
      <Link to="/Login">Salir</Link>
    </form>
  );
};

export default FormRegisterUser;
