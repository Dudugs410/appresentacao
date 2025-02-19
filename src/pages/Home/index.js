import { useContext, useState } from 'react';
import Cadastrar from '../../components/Cadastrar';
import TabelaDeCadastros from '../../components/TabelaDeCadastros';
import './home.scss';
import { ConstsContext } from '../../contexts/consts'; // Correct import

const Home = () => {
    const { db, setDb } = useContext(ConstsContext); // Access db from context
    const [option, setOption] = useState(null);

    return (
        <div className='app-page home-page'>
            <div className='home-page-content'>
                <h2>Title</h2>
                {option === 0 && (
                    <Cadastrar
                        onClose={() => { setOption(null); }}
                        onUpdate={() => {setDb(JSON.parse(localStorage.getItem('db')))}}
                    />
                )}
                <TabelaDeCadastros
                    cadastros={db}
                    onChangeOption={() => { setOption(0); }}
                />
            </div>
        </div>
    );
};

export default Home;