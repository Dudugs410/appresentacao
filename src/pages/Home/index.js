import { useContext, useEffect, useState } from 'react';
import Cadastrar from '../../components/Cadastrar';
import TabelaDeCadastros from '../../components/TabelaDeCadastros';
import './home.scss';
import { ConstsContext } from '../../contexts/consts'; // Correct import
import Editar from '../../components/Editar';
import Excluir from '../../components/Excluir';
import { ApiContext } from '../../contexts/apiContext';

const Home = () => {
    const { loadCadastros, addCadastro, editCadastro, deleteCadastro } = useContext(ApiContext)
    const { db, setDb, editObj, deleteObj } = useContext(ConstsContext); // Access db from context
    const [option, setOption] = useState(null)

    let dbTemp = []

    useEffect(()=>{
        dbTemp = loadCadastros()
        
    },[])

    useEffect(()=>{
        if(dbTemp.length > 0){
            setDb(dbTemp)
        }
    },[dbTemp])

    return (
        <div className='app-page home-page'>
            <div className='home-page-content'>
                <h2>Menu de Cadastros</h2>
                {option === 0 && (
                    <Cadastrar
                        onClose={() => { setOption(null) }}
                        onUpdate={() => {setDb(JSON.parse(localStorage.getItem('db')))}}
                        onCadastro={addCadastro}
                    />
                )}
                {option === 1 && 
                    <Editar 
                        object={editObj}
                        onClose={() => { setOption(null) }}
                        onUpdate={() => {setDb(JSON.parse(localStorage.getItem('db')))}}
                        onEdit={editCadastro}
                    />
                }
                {option === 2 &&
                    <Excluir
                        object={deleteObj}
                        onClose={() => { setOption(null) }}
                        onUpdate={() => {setDb(JSON.parse(localStorage.getItem('db')))}}
                        onDelete={deleteCadastro}
                    />
                }
                <TabelaDeCadastros
                    cadastros={db}
                    option={option}
                    onChangeOption={() => { setOption(0) }}
                    onEdit={() => { setOption(1) }}
                    onDelete={() => { setOption(2) }}
                />
            </div>
        </div>
    );
};

export default Home;