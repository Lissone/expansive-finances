import logoImg from '../../assets/logo.svg'

import { Container, Content, Logo } from './style'

export function Header() {
  return (
    <Container>
      <Content>
        <Logo>
          <img src={logoImg} alt="expansive-finances" />
          <h1>Expansive finances</h1>
        </Logo>
        <button type="button">
          Nova transação
        </button>
      </Content>
    </Container>
  )
}