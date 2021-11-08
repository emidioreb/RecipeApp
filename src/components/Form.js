import React from 'react';
import { useHistory } from 'react-router';
import Input from './Input';
import useLogin from '../hooks/useLogin';
import { saveToken, emailToken } from '../localStorage';

function Form() {
  const { password, setPassword, mail, setMail } = useLogin();

  const isEmailValid = (email) => {
    const regexEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regexEmail.test(email) === true;
  };

  const minPassWord = 6;
  const { push } = useHistory();

  const toMeals = () => {
    saveToken();
    emailToken(mail);
    push('/comidas');
  };

  return (
    <form>
      <Input
        type="text"
        testId="email-input"
        info={ mail }
        handleChange={ setMail }
      />
      <Input
        type="password"
        testId="password-input"
        info={ password }
        handleChange={ setPassword }
      />
      <button
        type="button"
        data-testid="login-submit-btn"
        disabled={ !isEmailValid(mail) || password.length <= minPassWord }
        onClick={ toMeals }
      >
        Entrar
      </button>
    </form>
  );
}

export default Form;
