import { Link } from "react-router-dom";
import Logo from "../../assets/react.svg";
import styles from "../../assets/styles/Form.module.css";
import Label from "../atoms/Label";
import Input from "../atoms/Input";
import Boton from "../atoms/Boton";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
const FormLogin = () => {
  const navigate = useNavigate();
  const Form = useRef();
  const endPoint = "http://34.225.239.102/api/iniciar";

  const clickHandler = (e) => {
    e.preventDefault();
    const newForm = new FormData(Form.current);
    if(newForm.get("usuario") === "" || newForm.get("contrasenia") === ""){
      alert("campos vacios");
   }else{
      
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        usuario: newForm.get("usuario"),
        contrasenia: newForm.get("contrasenia"),
      }),
    };

    fetch(endPoint, options)
      .then((response) => response.json())
      .then((data) => {
        if(data.status === true){
          navigate("/Bus");
        }else{
          alert("Datos incorrectos")
        }
      });
    }
  };

  return (
    <form ref={Form} className={styles.formulario}>
      <img src={Logo} alt="Logotipo de la empresa"></img>
      <label htmlFor="Tittle" className={styles.label}>
        Iniciar sesion
      </label>
      <div>
        <Label msn="Usuario"></Label>
        <Input name={"usuario"}></Input>
      </div>
      <div>
        <Label msn="Contraseña"></Label>
        <input type="password" name="contrasenia" className={styles.password} />
      </div>
      <div>
        <Boton
          largo
          type="button"
          onClick={clickHandler}
          className={styles.boton}
        >
          Iniciar sesion
        </Boton>
      </div>
      <Link to="/Register">Registrate</Link>
    </form>
  );
};

export default FormLogin;
