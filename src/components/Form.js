import React, { useContext } from 'react';
import Input from './Input';
import Context from '../context/Context';

function Form() {
  const { password, setPassword, mail, setMail } = useContext(Context);

  return (
    <form>
      <Input
        type="text"
        data-testid="email-input"
        info={ mail }
        handleChange={ setMail }
      />
      <Input
        type="text"
        data-testid="password-input"
        info={ password }
        handleChange={ setPassword }
      />
      <button type="button" data-testid="login-submit-btn">
        Entrar
      </button>
    </form>
  );
}

export default Form;
