import Cadastrar from '../../components/Cadastrar'
import TabelaDeCadastros from '../../components/TabelaDeCadastros'
import './home.scss'

const Home = () => {

    return(
        <div className='app-page home-page'>
            <TabelaDeCadastros cadastros={[]}/>
            <Cadastrar/>
        </div>
    )
}

export default Home