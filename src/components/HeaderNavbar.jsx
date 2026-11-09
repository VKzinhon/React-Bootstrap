import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Container, Button } from 'react-bootstrap';

const HeaderNavbar = () => {
  // Estado para controlar a autenticação do usuário
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userProfile] = useState({ name: 'Cauã Maia' });

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  return (
    <Navbar expand="lg" variant="dark" style={{ backgroundColor: '#001d85' }} sticky="top">
      <Container fluid className="px-3">
        {/* Logo oficial do SINDADOS-BA via URL */}
        <Navbar.Brand href="#home" className="d-flex align-items-center">
          <img
            src="https://sindadosba.org.br/wp-content/uploads/2024/05/sindados-400-1.png"
            alt="SINDADOS BAHIA"
            height="50"
            className="d-inline-block align-top me-2"
          />
        </Navbar.Brand>

        {/* Botão Hambúrguer para Mobile */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Conteúdo Navegável da Navbar */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-lg-center gap-1">
            <Nav.Link href="#home" className="active text-white">Home</Nav.Link>
            
            <NavDropdown title="Institucional" id="institucional-dropdown" menuVariant="dark">
              <NavDropdown.Item href="#sobre">Sobre o Sindicato</NavDropdown.Item>
              <NavDropdown.Item href="#diretoria">Diretoria</NavDropdown.Item>
              <NavDropdown.Item href="#estatuto">Estatuto</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Convênios" id="convenios-dropdown" menuVariant="dark">
              <NavDropdown.Item href="#saude">Planos de Saúde</NavDropdown.Item>
              <NavDropdown.Item href="#educacao">Parcerias Educacionais</NavDropdown.Item>
              <NavDropdown.Item href="#lazer">Clube de Benefícios</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#acordos" className="text-white">Acordos</Nav.Link>

            <NavDropdown title="Associe-Se" id="associe-dropdown" menuVariant="dark">
              <NavDropdown.Item href="#como-filiar">Como se filiar</NavDropdown.Item>
              <NavDropdown.Item href="#fichas">Ficha de Inscrição</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Empresas" id="empresas-dropdown" menuVariant="dark">
              <NavDropdown.Item href="#homologacao">Homologação</NavDropdown.Item>
              <NavDropdown.Item href="#contribuicao">Contribuição Sindical</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Privacidade" id="privacidade-dropdown" menuVariant="dark">
              <NavDropdown.Item href="#lgpd">LGPD</NavDropdown.Item>
              <NavDropdown.Item href="#politica">Política de Privacidade</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Contato" id="contato-dropdown" menuVariant="dark">
              <NavDropdown.Item href="#fale-conosco">Fale Conosco</NavDropdown.Item>
              <NavDropdown.Item href="#localizacao">Localização</NavDropdown.Item>
            </NavDropdown>

            {/* Estado do Usuário / Ações de Autenticação */}
            <div className="d-flex align-items-center ms-lg-3 mt-3 mt-lg-0 gap-2">
              {isLoggedIn ? (
                <>
                  <span className="text-white fw-semibold me-2">
                    Olá, {userProfile.name}!
                  </span>
                  <Button variant="outline-light" size="sm" onClick={handleLogout}>
                    Sair
                  </Button>
                </>
              ) : (
                <>
                  <Button variant="light" size="sm" onClick={handleLogin}>
                    Login
                  </Button>
                  <Button variant="success" size="sm" href="#associe-se">
                    Seja Sócio
                  </Button>
                </>
              )}
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HeaderNavbar;