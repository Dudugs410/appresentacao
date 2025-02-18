import './cadastrar.scss'

const Cadastrar = () => {

    return(
        <div className='form-container'>
            <h1 className='h1-global'>Cadastrar</h1>
            <form className='form-cadastro'>
                <div class="mb-3">
                    <label for="exampleInputName1" class="form-label">Nome</label>
                    <input type="text" class="form-control" id="exampleInputName1" aria-describedby="nameHelp"/>
                    <div id="nameHelp" class="form-text">identificação do cadastro</div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    <div id="emailHelp" class="form-text">Seu E-mail</div>
                </div>
                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                    <label class="form-check-label" for="exampleCheck1">Admin</label>
                </div>
                <button type="submit" class="btn btn-primary">Cadastrar</button>
            </form>
        </div>
    )
}

export default Cadastrar