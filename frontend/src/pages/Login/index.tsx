import * as S from './styles'

export default function Login() {
    return (
        <S.Form id="login-form">
          <h1>Login</h1>
          <div className="form-inputs">
              <label htmlFor="username"></label>
              <input id="username" type="text" name="username" placeholder="E-mail ou Nome de Usuário"/>
              <label htmlFor="password"></label>
              <input id="password" type="text"  name="password" placeholder="Senha"/>
          </div>
          <button type="submit" form="login-form" value="Submit">LOGIN</button>
          <S.AccountInfo>
            <span className="forgot-password">
              <a href='/'>ESQUECEU A SENHA?</a>
            </span>
            <span className="create-account">
              <strong>Não Possui conta? </strong> 
              <a href='/'>Crie A Sua</a>
            </span>
          </S.AccountInfo>
        </S.Form>
    )
}