import { Link } from 'react-router-dom';
import * as S from './styles'

export default function Login() {

    return (
      <S.Form id="login-form">
          <h1>Login</h1>
          <div className="form-inputs">
              <label htmlFor="username"/>
              <input id="username" type="text" name="username" placeholder="E-mail ou Nome de Usuário"/>
              <label htmlFor="password"/>
              <input id="password" type="password" name="password" placeholder="Senha"/>
          </div>
          <button type="submit" form="login-form" value="Submit">LOGIN</button>
          <S.AccountInfo>
            <span className="forgot-password">
              <Link to='/'>ESQUECEU A SENHA?</Link>
            </span>
            <span className="create-account">
              <strong>Não Possui conta? </strong> 
              <Link to='/register'>Crie A Sua</Link>
            </span>
          </S.AccountInfo>
        </S.Form>
    )
}