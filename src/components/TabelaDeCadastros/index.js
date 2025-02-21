import { useEffect, useState } from 'react';
import { FiCheck, FiEdit, FiPlus, FiTrash, FiX } from 'react-icons/fi';

import './tabelaDeCadastros.scss'

const TabelaDeCadastros = ({ cadastros, option, onChangeOption, onAddNew, onEdit, onDelete, }) => {
    const [tableDb, setTableDb] = useState(cadastros || []);

    // Update tableDb when cadastros changes
    useEffect(() => {
        console.log('option: ', option)
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
                {
                    option !== 0 ?
                        <button 
                            className='btn btn-primary' 
                            onClick={onChangeOption} 
                        >
                            <FiPlus/> Novo
                        </button>       
                    
                    :
                        <></>
                }
            </div>
        );
    };

    const handleEdit = (obj) => {
        onEdit()
    }

    return (
        <div className='cadastros-table'>
            <BtnContainer />
            {tableDb && tableDb.length > 0 ? (
                <table className="table table-striped table-hover">
                    <thead className='table-primary'>
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
                                <td data-label="tipo">{object.ADMIN === true ? <FiCheck style={{ color: 'green'}}/> : <FiX style={{ color: 'red'}}/>}</td>
                                <th className='sticky-col start-col btn-table' scope="row" style={{ textAlign: 'center' }} onClick={handleEdit}>
                                    <FiEdit className="icon" style={{color: 'blue'}}/>
                                </th>
                                <th className='sticky-col end-col btn-table' scope="row" style={{ textAlign: 'center' }}>
                                    <FiTrash className="icon btn-table" style={{color: 'red'}}/>
                                </th>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <div className='sem-cadastros'>
                    <h4>Não existem cadastros</h4>
                </div>
            )}
        </div>
    );
};

export default TabelaDeCadastros;