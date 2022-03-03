import logoImg from '../../assets/logo.svg'

import { Container, Content, Logo } from './styles'

interface HeaderProps {
  onOpenNewTransactionModal: () => void
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <Logo>
          <img src={logoImg} alt="expansive-finances" />
          <h1>Expansive finances</h1>
        </Logo>
        <button type="button" onClick={onOpenNewTransactionModal}>
          Nova transação
        </button>
      </Content>
    </Container>
  )
}