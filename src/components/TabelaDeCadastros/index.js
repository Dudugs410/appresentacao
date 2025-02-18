import { FiEdit, FiPlus, FiTrash, FiX } from 'react-icons/fi'

const TabelaDeCadastros = (cadastros) => {
    return(
        <div className='cadastros-table'>
            { ((cadastros && cadastros.length > 0)) && 
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                            <th className='det-th-global sticky-col end-col' scope="col" style={{ width: '2%', textAlign: 'center' }}></th>
                        </tr>
                    </thead>
                    <tbody>
                        {cadastros.map((object, index) => (
                            <tr key={index} className="det-tr-global tr-taxas">
                                <th className='sticky-col start-col' scope="row" style={{ textAlign: 'center' }}>
                                    <FiEdit className="icon" />
                                </th>
                                <td className="det-td-vendas-global" data-label="BADDESCRICAO">{object.BADDESCRICAO}</td>
                                <td className="det-td-vendas-global" data-label="nomeAdquirente">{object.ADQUIRENTE.nomeAdquirente}</td>
                                <td className="det-td-vendas-global" data-label="MODDESCRICAO">{object.MODDESCRICAO}</td>
                                <th className='sticky-col end-col' scope="row" style={{ textAlign: 'center' }}>
                                    <FiTrash className="icon" />
                                </th>
                            </tr>
                        ))}
                    </tbody>
                </table>
            }
        </div>
    )
}

export default TabelaDeCadastros