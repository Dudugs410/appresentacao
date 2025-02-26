import { useEffect, useState } from 'react';
import '../Cadastrar/cadastrar.scss';
import './editar.scss'
import { toast } from 'react-toastify'

const Editar = ({ object, onClose, onUpdate, onEdit }) => {
    const [nome, setNome] = useState(object.NOME)
    const [email, setEmail] = useState(object.EMAIL)
    const [isAdmin, setIsAdmin] = useState(object.ADMIN)
    const ID = object.ID

    const handleSave = () => {

        let editObj = {
            NOME: nome,
            EMAIL: email,
            ADMIN: isAdmin,
            ID: ID,
          };

        onEdit(editObj)
        onUpdate();
        onClose();

      };

    const handleCancel = () => {

        //fecha o componente de edição

        onClose()
    }

    useEffect(()=>{
        console.log('obj a ser editado: ', object)
    },[])

    return (
        <div className='editar-container'>
            <form className='form-edit'>
                <h1 className='h1-global'>Editar Cadastro</h1>
                <div className="mb-3">
                    <label htmlFor="exampleInputName1" className="form-label">Nome</label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleInputName1"
                        aria-describedby="nameHelp"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)} // Update nome state
                    />
                    <div id="nameHelp" className="form-text">Identificação do cadastro</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} // Update email state
                    />
                    <div id="emailHelp" className="form-text">Seu E-mail</div>
                </div>
                <div className="mb-3 form-check">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        id="exampleCheck1"
                        checked={isAdmin} // Bind to isAdmin state
                        onChange={(e) => setIsAdmin(e.target.checked)} // Update isAdmin state
                    />
                    <label className="form-check-label" htmlFor="exampleCheck1">Admin</label>
                </div>
                <div className='btn-container' style={{ display: 'inline-flex', gap: '5px' }}>
                    <button type="submit" className="btn btn-primary" onClick={handleSave}>Salvar</button>
                    <button className="btn btn-danger" onClick={handleCancel}>Cancelar</button>
                </div>
            </form>
        </div>
    );
};

export default Editar;