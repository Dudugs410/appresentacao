import { useEffect, useState } from 'react'
import '../Cadastrar/cadastrar.scss'
import './excluir.scss'
import { toast } from 'react-toastify'
import { TbColumnInsertLeft } from 'react-icons/tb';

const Excluir = ({ object, onClose, onUpdate }) => {
    const [nome, setNome] = useState(object.NOME)
    const [email, setEmail] = useState(object.EMAIL)
    const [isAdmin, setIsAdmin] = useState(object.ADMIN)
    const ID = object.ID

    const handleDelete = () => {

        console.log('ID do objeto a ser deletado: ', ID)

        let newDb = JSON.parse(localStorage.getItem('db'));
      
        const index = newDb.findIndex((item) => item.ID === ID);
      
        if (index !== -1) {
          newDb.splice(index, 1)
          toast.success('Registro Deletado com sucesso')
        }
        
        console.log('newDb', newDb)
        localStorage.setItem('db', JSON.stringify(newDb))
      
        onUpdate()
        onClose()
      };

    const handleCancel = () => {

        //fecha o componente de edição

        onClose()
    }

    useEffect(()=>{
        console.log('obj a ser deletado: ', object)
    },[])

    return (
        <div className='excluir-container'>
            <div className='confirmar-exclusão'>
                <h1 className='h1-global'>Confirmar Exclusão</h1>
                <h5 style={{textAlign: 'center'}}>Tem certeza que deseja excluir o registro selecionado?</h5>
                <div className='text-container'>
                    <p style={{textAlign: 'center'}}>nome: <b>{object.NOME}</b></p>
                    <p style={{textAlign: 'center'}}>e-mail: <b>{object.EMAIL}</b></p>
                    {object.ADMIN ? 
                        <p style={{textAlign: 'center'}}>
                            tipo: <b>Administrador</b>
                        </p>
                        :
                        <p style={{textAlign: 'center'}}>
                            tipo: <b>Usuário Comum</b>
                        </p>
                    }
                </div>
                <div className='btn-container'>
                    <button className='btn btn-danger' onClick={handleDelete}>Sim</button>
                    <button className='btn btn-secondary' onClick={handleCancel}>Não</button>
                </div>
            </div>
        </div>
    );
};

export default Excluir;