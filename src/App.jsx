import React from 'react';
import HeaderNavbar from './components/HeaderNavbar';
import NewsCarousel from './components/NewsCarousel';
import SalaryTable from './components/SalaryTable';
import './App.css';

function App() {
  // Dados fictícios para o Carrossel
  const carouselSlides = [
    {
      id: 1,
      titulo: 'Campanha Salarial 2026/2027',
      descricao: 'Confira as propostas aprovadas em assembleia e o progresso das negociações da categoria de TI.',
      imagem: 'https://picsum.photos/1200/400?random=1',
      link: '#campanha',
    },
    {
      id: 2,
      titulo: 'Novos Conveniados de TI',
      descricao: 'Descontos exclusivos em certificações, cursos de extensão e pós-graduações para associados.',
      imagem: 'https://picsum.photos/1200/400?random=2',
      link: '#convenios',
    },
    {
      id: 3,
      titulo: 'Clube de Benefícios & Lazer',
      descricao: 'Acesso a redes credenciadas de saúde, lazer e assistência jurídica integral.',
      imagem: 'https://picsum.photos/1200/400?random=3',
      link: '#beneficios',
    },
  ];

  // Dados fictícios para a Tabela de Pisos Salariais
  const salaryData = [
    {
      id: 1,
      cargo: 'Desenvolvedor Junior',
      nivel: 'Junior',
      salario: 4200,
      cargaHoraria: '40 horas semanais',
      reajuste: '7.5%',
      beneficios: 'Vale Refeição, Plano de Saúde, Seguro de Vida',
      observacoes: 'Piso válido para contratações CLT na Bahia a partir de Jan/2026.',
    },
    {
      id: 2,
      cargo: 'Desenvolvedor Pleno',
      nivel: 'Pleno',
      salario: 6800,
      cargaHoraria: '40 horas semanais',
      reajuste: '8.0%',
      beneficios: 'Vale Refeição, Auxílio Home Office, Plano de Saúde Integral',
      observacoes: 'Inclui adicional noturno para escalas de sobreaviso.',
    },
    {
      id: 3,
      cargo: 'Analista de Suporte',
      nivel: 'Pleno',
      salario: 4500,
      cargaHoraria: '44 horas semanais',
      reajuste: '7.5%',
      beneficios: 'Vale Transporte, Vale Refeição, Plano Odontológico',
      observacoes: 'Possibilidade de escala 12x36 sob acordo coletivo.',
    },
    {
      id: 4,
      cargo: 'DBA (Administrador de Banco de Dados)',
      nivel: 'Sênior',
      salario: 9500,
      cargaHoraria: '40 horas semanais',
      reajuste: '8.5%',
      beneficios: 'PLR, Vale Refeição, Auxílio Creche, Seguro de Vida',
      observacoes: 'Valor base para profissionais com certificações vigentes.',
    },
    {
      id: 5,
      cargo: 'Engenheiro DevOps',
      nivel: 'Sênior',
      salario: 10200,
      cargaHoraria: '40 horas semanais',
      reajuste: '8.5%',
      beneficios: 'Auxílio Educação, Home Office, Plano de Saúde e Odonto',
      observacoes: 'Carga horária flexível conforme CCT vigente.',
    },
  ];

  return (
    <div className="App bg-light min-vh-100">
      {/* 1. Componente Navbar */}
      <HeaderNavbar />

      {/* 2. Componente Carrossel */}
      <NewsCarousel slides={carouselSlides} />

      {/* 3. Componente Tabela de Pisos Salariais */}
      <SalaryTable salaryData={salaryData} />

      {/* Rodapé Simples */}
      <footer className="text-center py-4 bg-dark text-white mt-auto">
        <small>© 2026 SINDADOS-BA - Sindicato dos Trabalhadores em TI da Bahia</small>
      </footer>
    </div>
  );
}

export default App;