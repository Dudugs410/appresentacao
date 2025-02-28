import { React, createContext, useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import api from '../services/api'

export const ApiContext = createContext({})

function ApiProvider({children}){

    	// retorna array com dados cadastrados
      const loadCadastros = async () => {
        try {
          const token = localStorage.getItem('token')
          if (token) {
            const response = await api.get('cadastros')
            return response.data
          }
      
          const db = localStorage.getItem('db')
          if (db) {
            return JSON.parse(db)
          }
      
          return []
        } catch (error) {
          console.error('Error fetching cadastros:', error)
          return []
        }
      }

		//Adiciona novo objeto
		const addCadastro = async (cadastro) => {
			try {
        const token = localStorage.getItem('token')
        if (token) {
					let body = cadastro
					const response = await api.post('cadastros', body)
					console.log('response:', response)
          return
        }

        const dbTemp = localStorage.getItem('db')
        if(dbTemp){
          const db = JSON.parse(dbTemp)

          let cadastroTemp = cadastro

          const maxId = db.reduce((max, item) => (item.ID > max ? item.ID : max), -1)
          const newId = maxId + 1

          cadastroTemp.ID = newId
        
          db.push(cadastro)
        
          localStorage.setItem('db', JSON.stringify(db))
          toast.success('Registro cadastrado com sucesso')
        }
			} catch (error) {
				toast.alert('Erro ao cadastrar registro')
				console.error('Error adding cadastro:', error)
			}
		}

		//Edita objeto
		const editCadastro = async (cadastro) => {
			try {
        const token = localStorage.getItem('token')
        if (token) { 
          let body = JSON.stringify(cadastro)
          const response = await fetch('*endereço da api*', {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: body,
          })
        
          const responseData = await response.json()
          console.log('response: ', responseData)
          if (response.ok) {
            toast.dismiss()
              toast.success('Registro alterado com sucesso!')
          } else {
            toast.dismiss()
              toast.error('Erro ao alterar registro!')
          }
          return
        }

        const dbTemp = localStorage.getItem('db')

        if(dbTemp){
          const db = JSON.parse(dbTemp)
  
          const index = db.findIndex((item) => item.ID === cadastro.ID)
        
          if (index !== -1) {
            db[index] = cadastro // Replace the old object with the updated one
            toast.success('Registro Editado com Sucesso!')
          } else {
              console.log('objeto não encontrado')
          }
          localStorage.setItem('db', JSON.stringify(db))
        }
			} catch (error) {
			  console.error('Erro ao editar registro:', error)
			  toast.dismiss()
			  toast.error('Erro ao alterar registro!')
			}
		}
		  
		//Deleta objeto
		const deleteCadastro = async (cadastro) => {
			try {		
        const token = localStorage.getItem('token')
        if (token) { 
          let body = cadastro
					api.delete('cadastro', {
						headers: {
							'Content-Type': 'application/json'
						},
						data: body
					})
					.then(response => {
						console.log('response: ', response)
						toast.dismiss()
						toast.success('registro deletado com sucesso!')
					})
					.catch(error => {
						console.log('error: ', error)
						toast.dismiss()
						toast.error('Erro ao deletar registro!')
					})
        }

        const dbTemp = localStorage.getItem('db')

        if(dbTemp){
          const db = JSON.parse(dbTemp)

          console.log('ID do objeto a ser deletado: ', cadastro.ID)
        
          const index = db.findIndex((item) => item.ID === cadastro.ID)
        
          if (index !== -1) {
            db.splice(index, 1)
            toast.success('Registro Deletado com sucesso')
          }
          
          console.log('newDb', db)
          localStorage.setItem('db', JSON.stringify(db))
        
        }
			} catch (error) {
				console.error('Error fetching cadastros:', error)
				return
			}
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



//////////////
/*
		  
		//Deleta Taxa
		const deleteTax = async (tax) => {
			setIsLoadingTaxes(true)
			console.log(tax)
			try {
				const apiClientCode = localStorage.getItem('clientCode')
				if(apiClientCode !== 'todos' && apiClientCode !== 'TODOS' && apiClientCode !== undefined) {
					let body = tax
					api.delete('taxas', {
						headers: {
							'Content-Type': 'application/json'
						},
						data: body
					})
					.then(response => {
						console.log('response: ', response)
						toast.dismiss()
						toast.success('Taxa deletada com sucesso!')
					})
					.catch(error => {
						console.log('error: ', error)
						toast.dismiss()
						toast.error('Erro ao deletar taxa!')
					})
				} else {
					return []
				}
				setIsLoadingTaxes(false)
			} catch (error) {
				console.error('Error fetching vendas:', error)
				setIsLoadingTaxes(false)
				if (error.response.status === 401) {
					logout()
					return
				}
				return
			}
		} */