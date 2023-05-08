import PropTypes from "prop-types";

const Alunos = ({ listaAlunos, titulo }) => {
    listaAlunos.sort((a, b) => a.nome.localeCompare(b.nome));

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <h2>{titulo}</h2>
            {listaAlunos.map((aluno) => (
                <span
                    key={aluno.nome}
                    style={{
                        color: aluno.nota >= 50 ? "green" : "red",
                        margin: "10px auto",
                        textAlign: "center"
                    }}
                >
                    {aluno.nome}
                </span>
            ))}
        </div>
    );
};

Alunos.propTypes = {
    listaAlunos: PropTypes.arrayOf(
        PropTypes.shape({
            nome: PropTypes.string.isRequired,
            nota: PropTypes.number.isRequired
        })
    ).isRequired,
    titulo: PropTypes.string.isRequired
    };

export default Alunos;