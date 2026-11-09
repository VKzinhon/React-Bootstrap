import React, { useState } from 'react';
import { Table, Form, Button, Modal, Container, Card, Badge } from 'react-bootstrap';

const SalaryTable = ({ salaryData }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRole, setSelectedRole] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Filtragem dinâmica de cargos baseada na pesquisa do utilizador
  const filteredData = salaryData.filter((item) =>
    item.cargo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleOpenModal = (role) => {
    setSelectedRole(role);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedRole(null);
  };

  return (
    <Container className="my-5">
      <Card className="shadow-sm border-0">
        <Card.Header style={{ backgroundColor: '#001d85' }} className="text-white py-3">
          <h4 className="m-0 fw-bold">Pisos Salariais da Categoria de TI (2026/2027)</h4>
        </Card.Header>
        <Card.Body className="p-4">
          {/* Campo de Busca / Filtro */}
          <Form className="mb-4">
            <Form.Group controlId="searchRole">
              <Form.Label className="fw-semibold">Filtrar por Cargo:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Digite o cargo (ex.: Desenvolvedor, DevOps, DBA)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </Form.Group>
          </Form>

          {/* Tabela Responsiva */}
          <Table striped bordered hover responsive className="align-middle">
            <thead className="table-dark">
              <tr>
                <th>Cargo</th>
                <th>Nível</th>
                <th>Piso Salarial (R$)</th>
                <th className="text-center">Ação</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.length > 0 ? (
                filteredData.map((item) => (
                  <tr key={item.id}>
                    <td className="fw-semibold">{item.cargo}</td>
                    <td>
                      <Badge bg="secondary">{item.nivel}</Badge>
                    </td>
                    <td>{item.salario.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                    <td className="text-center">
                      <Button
                        variant="primary"
                        size="sm"
                        onClick={() => handleOpenModal(item)}
                      >
                        Ver Detalhes/Carga Horária
                      </Button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center text-muted py-3">
                    Nenhum cargo encontrado para "{searchTerm}".
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        </Card.Body>
      </Card>

      {/* Modal de Detalhes */}
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton style={{ backgroundColor: '#001d85' }} className="text-white">
          <Modal.Title>Detalhes do Cargo</Modal.Title>
        </Modal.Header>
        {selectedRole && (
          <Modal.Body className="p-4">
            <h5 className="fw-bold text-primary mb-3">{selectedRole.cargo} - {selectedRole.nivel}</h5>
            <p><strong>Piso Salarial Atual:</strong> {selectedRole.salario.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
            <p><strong>Carga Horária Semanal:</strong> {selectedRole.cargaHoraria}</p>
            <p><strong>Reajuste Aplicado:</strong> {selectedRole.reajuste}</p>
            <p><strong>Benefícios Obrigatórios:</strong> {selectedRole.beneficios}</p>
            <p className="text-muted mb-0"><small>{selectedRole.observacoes}</small></p>
          </Modal.Body>
        )}
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default SalaryTable;