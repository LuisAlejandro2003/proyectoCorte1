import { Link } from "react-router-dom";
import Logo from "../../assets/react.svg";
import styles from "../../assets/styles/Form.module.css";
import Label from "../atoms/Label";
import Input from "../atoms/Input";
import Boton from "../atoms/Boton";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
const FormBus= () => {
  const navigate = useNavigate();
  const Form = useRef();
  const endPoint = " http://34.225.239.102/api/autobus/register";
 
  const clickHandler = (e) => {
    e.preventDefault();
    const newForm = new FormData(Form.current);
    if(newForm.get("clave") === "" || newForm.get("placa") === "" || newForm.get("numasientos") === "" || newForm.get("fecha") === "" || newForm.get("tipo") === ""|| newForm.get("nombre") === ""){//el simbolo de pesos despues se nombra la variable
        alert("campos vacios");
     }else{
        
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        clave: newForm.get("clave"),
        placa: newForm.get("placa"),
        numasientos: newForm.get("numasientos"),
        fecha: newForm.get("fecha"),
        tipo: newForm.get("tipo"),
        nombre: newForm.get("nombre"),
        licencia: parseInt(10000 + Math.random() * 90000),
      }),
    };
    fetch(endPoint, options)
      .then((response) => response.json())
      .then((data) => {
        if(data.status === true){
            navigate("/Login");
          }
      });
    }
  };

  return (
    <form ref={Form} className={styles.formulario}>
      <img src={Logo} alt="Logotipo de la empresa"></img>
      <Label msn="Registrar Bus"></Label>
      <div>
        <Label msn="Clave autobus"></Label>
        <Input name={"clave"}></Input>
      </div>
      <div>
        <Label msn="Placa autobus"></Label>
        <Input name={"placa"}></Input>
      </div>
      <div>
        <Label msn="Numero de asientos"></Label>
        <Input name={"numasientos"}></Input>
      </div>
      <div>
        <Label msn="Fecha"></Label>
        <input type="date" name="fecha" />
      </div>
      <div>
        <Label msn="Tipo"></Label>
        <select name="tipo" id="tipo">
          <option value="Turismo">Turismo</option>
          <option value="Lujo">Lujo</option>
        </select>
      </div>
      <div>
        <Label msn="Nombre chofer"></Label>
        <Input name={"nombre"}></Input>
      </div>

      <div>
        <Boton
          largo
          type="button"
          onClick={clickHandler}
          className={styles.boton}
        >
          Registrar autobus
        </Boton>
      </div>
      <Link to="/Login">Salir</Link>
    </form>
  );
};

export default FormBus;
