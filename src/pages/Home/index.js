import { useContext, useState } from 'react';
import Cadastrar from '../../components/Cadastrar';
import TabelaDeCadastros from '../../components/TabelaDeCadastros';
import './home.scss';
import { ConstsContext } from '../../contexts/consts'; // Correct import
import Editar from '../../components/Editar';

const Home = () => {
    const { db, setDb, editObj, setEditObj } = useContext(ConstsContext); // Access db from context
    const [option, setOption] = useState(null)
    const [modalEdit, setModalEdit] = useState(false)

    return (
        <div className='app-page home-page'>
            <div className='home-page-content'>
                <h2>Menu de Cadastros</h2>
                {option === 0 && (
                    <Cadastrar
                        onClose={() => { setOption(null); }}
                        onUpdate={() => {setDb(JSON.parse(localStorage.getItem('db')))}}
                    />
                )}
                {modalEdit && 
                    <Editar object={editObj}/>
                }
                <TabelaDeCadastros
                    cadastros={db}
                    option={option}
                    onChangeOption={() => { setOption(0); }}
                    onEdit={()=>{setModalEdit(true)}}
                />
            </div>
        </div>
    );
};

export default Home;