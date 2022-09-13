import { Link } from 'react-router-dom';
import * as S from './styles'

export default function Register() {

    return (
        <S.Form id="register-form">
          <h1>Criar Conta</h1>
          <div className="form-inputs">
              <label htmlFor="username"/>
              <input id="username" type="text" name="username" placeholder="E-mail"/>
              <label htmlFor="password"/>
              <input id="password" type="password"  name="password" placeholder="Senha"/>
          </div>
          <button type="submit" form="register-form" value="Submit">CRIAR CONTA</button>
          <S.AccountInfo>
            <span className="agreement-info">
              Ao criar uma conta, você declara que possui mais de 16 anos de idade e está de acordo com os 
              <Link to='/'> Termos de serviço</Link>
              {" & "}
              <Link to='/'>Política de Privacidade</Link>
            </span>
            <span className="login-info">
              <strong>Já possui uma conta? </strong> 
              <Link to='/login'>Login</Link>
            </span>
          </S.AccountInfo>
        </S.Form>
    )
}