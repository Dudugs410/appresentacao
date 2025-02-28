import { useEffect } from 'react'
import '../Cadastrar/cadastrar.scss'
import './excluir.scss'

const Excluir = ({ object, onClose, onUpdate, onDelete }) => {

    const handleDelete = () => {
        onDelete(object)      
        onUpdate()
        onClose()
      }

    const handleCancel = () => {
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
    )
}

export default Excluir