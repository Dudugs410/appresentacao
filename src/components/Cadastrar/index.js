import { useContext, useState } from 'react'
import './cadastrar.scss'
import { ApiContext } from '../../contexts/apiContext'

const Cadastrar = ({ onClose, onUpdate, onCadastro }) => {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [isAdmin, setIsAdmin] = useState(false)
    const [errors, setErrors] = useState({}) // To store validation errors

    const validateEmail = (email) => {
        // Simple email validation regex
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return regex.test(email)
    }

    const validateForm = () => {
        const newErrors = {}

        if (!nome.trim()) {
            newErrors.nome = 'Nome é obrigatório'
        }

        if (!email.trim()) {
            newErrors.email = 'Email é obrigatório'
        } else if (!validateEmail(email)) {
            newErrors.email = 'Email inválido'
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0 // Return true if no errors
    }

    const handleCadastro = (e) => {
        e.preventDefault()

        if (!validateForm()) {
            return // Stop submission if validation fails
        }

        console.log({ nome, email, isAdmin })

        let newCadastro = {
            NOME: nome,
            EMAIL: email,
            ADMIN: isAdmin,
        }

        onCadastro(newCadastro)
        onUpdate()
        onClose()
    }

    const handleCancel = () => {
        onClose()
    }

    return (
        <div className='form-container'>
            <h1 className='h1-global'>Cadastrar</h1>
            <form className='form-cadastro'>
                <div className="mb-3">
                    <label htmlFor="exampleInputName1" className="form-label">Nome</label>
                    <input
                        type="text"
                        className={`form-control ${errors.nome ? 'is-invalid' : ''}`}
                        id="exampleInputName1"
                        aria-describedby="nameHelp"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />
                    {errors.nome && <div className="invalid-feedback">{errors.nome}</div>}
                    <div id="nameHelp" className="form-text">Identificação do cadastro</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                    <input
                        type="email"
                        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                    <div id="emailHelp" className="form-text">Seu E-mail</div>
                </div>
                <div className="mb-3 form-check">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        id="exampleCheck1"
                        checked={isAdmin}
                        onChange={(e) => setIsAdmin(e.target.checked)}
                    />
                    <label className="form-check-label" htmlFor="exampleCheck1">Admin</label>
                </div>
                <div className='btn-container' style={{ display: 'inline-flex', gap: '5px' }}>
                    <button type="submit" className="btn btn-primary" onClick={handleCadastro}>Cadastrar</button>
                    <button className="btn btn-danger" onClick={handleCancel}>Cancelar</button>
                </div>
            </form>
        </div>
    )
}

export default Cadastrar