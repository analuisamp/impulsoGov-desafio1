import Alunos from './Alunos'

const listaAlunos = [
  { nome: "José Alves Dos Santos", nota: 37 },
  { nome: "Anderson Da Silva", nota: 49 },
  { nome: "Maria Ferreira", nota: 68 },
  { nome: "Ana Oliveira", nota: 87 }
  ];
  

function App() {

  return (
    <Alunos listaAlunos={listaAlunos} />
  )
}

export default App