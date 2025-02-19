import { useState } from 'react';
import './cadastrar.scss';

const Cadastrar = ({ onClose, onUpdate }) => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [isAdmin, setIsAdmin] = useState(false); // Default is false

    const handleCadastro = (e) => {
        e.preventDefault(); // Prevent form submission
        console.log({ nome, email, isAdmin }); // Log the form data (for testing)
        let newCadastro = {
            NOME: nome,
            EMAIL: email,
            ADMIN: isAdmin
        }

        let db = JSON.parse(localStorage.getItem('db'))
        
        if(db && db.length > 0){
            db.push(newCadastro)
        } else {
            db = []
            db.push(newCadastro)

        }

        localStorage.setItem('db', JSON.stringify(db))
        
        onUpdate()
        onClose(); // Close the form
    };

    const handleCancel = () => {
        onClose(); // Close the form
    };

    return (
        <div className='form-container'>
            <h1 className='h1-global'>Cadastrar</h1>
            <form className='form-cadastro'>
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
                    <button type="submit" className="btn btn-primary" onClick={handleCadastro}>Cadastrar</button>
                    <button className="btn btn-danger" onClick={handleCancel}>Cancelar</button>
                </div>
            </form>
        </div>
    );
};

export default Cadastrar;