import { useEffect, useState } from 'react';
import { FiCheck, FiEdit, FiTrash, FiX } from 'react-icons/fi';

const TabelaDeCadastros = ({ cadastros, onChangeOption }) => {
    const [tableDb, setTableDb] = useState(cadastros || []);

    // Update tableDb when cadastros changes
    useEffect(() => {
        if(cadastros !== undefined){
            setTableDb(cadastros);    
        }

    }, [cadastros]);

    // Log tableDb and cadastros for debugging
    useEffect(() => {
        console.log('tableDb: ', tableDb);
        console.log('cadastros: ', cadastros);
        console.log('storage db: ', JSON.parse(localStorage.getItem('db')));
    }, [tableDb]);

    const BtnContainer = () => {
        return (
            <div className='btn-container'>
                <button className='btn btn-primary' onClick={onChangeOption}>Cadastrar</button>
            </div>
        );
    };

    return (
        <div className='cadastros-table'>
            {tableDb && tableDb.length > 0 ? (
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Nome</th>
                            <th scope="col">E-mail</th>
                            <th scope="col">Administrador</th>
                            <th scope="col">Editar</th>
                            <th scope="col">Excluir</th>
                            <th className='sticky-col end-col' scope="col" style={{ width: '2%', textAlign: 'center' }}></th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableDb.map((object, index) => (
                            <tr key={index}>
                                <td data-label="nome">{object.NOME}</td>
                                <td data-label="email">{object.EMAIL}</td>
                                <td data-label="tipo">{object.ADMIN === true ? <FiCheck /> : <FiX />}</td>
                                <th className='sticky-col start-col' scope="row" style={{ textAlign: 'center' }}>
                                    <FiEdit className="icon" />
                                </th>
                                <th className='sticky-col end-col' scope="row" style={{ textAlign: 'center' }}>
                                    <FiTrash className="icon" />
                                </th>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <div className='sem-cadastros'>
                    <h4>Não existem cadastros</h4>
                    <BtnContainer />
                </div>
            )}
        </div>
    );
};

export default TabelaDeCadastros;