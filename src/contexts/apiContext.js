import { React, createContext, useState, useEffect } from 'react'

export const ApiContext = createContext({})

function ApiProvider({children}){

    	// retorna array com dados cadastrados
		const loadCadastros = async () => {

		}

		//Adiciona novo objeto
		const addCadastro = async (cadastro) => {

		}

		//Edita objeto
		const editCadastro = async (cadastro) => {

		  }
		  
		//Deleta objeto
		const deleteCadastro = async (cadastro) => {

		}

    return(
        <ApiContext.Provider
          value={{
            loadCadastros,
            addCadastro,
            editCadastro,
            deleteCadastro,
          }}
        >
          {children}
        </ApiContext.Provider>
      )



}



export default ApiProvider

