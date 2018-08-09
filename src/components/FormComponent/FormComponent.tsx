import * as React from "react";
import "./FormComponent.css";


const FormComponent = ({ onValidate }: any) => {

    const submitToValidate = (event: any) => {
        event.preventDefault()
        onValidate(event.target.user.value, event.target.pass.value);
    }

    return (
        <section>
            <form onSubmit={submitToValidate}>
                <div><input name="user" type="text" /></div>
                <div><input name="pass" type="password" /></div>
                <div><button type="submit">Entrar</button></div>
            </form>
        </section>
    )
}

export default FormComponent;