import { React, createContext, useState, useEffect } from 'react'

import api, { config } from '../services/api'

const ApiContext = () => {

    	// retorna array com dados cadastrados
		const loadCadastros = async () => {
			/* try {
				const apiClientCode = localStorage.getItem('clientCode')
				if (apiClientCode && apiClientCode.toLowerCase() !== 'todos') {
					let params = {
						codigo: apiClientCode
					}
		
					let config = {
						params: params
					}
		
					const response = await api.get('taxas', config)
					return response.data
				} else {
					console.log('Invalid client code:', apiClientCode)
					return []
				}
			} catch (error) {
				console.error('Error fetching taxas:', error)
				if (error.response.status === 401) {
					logout()
					return
				}
				return []
			} finally {
				setIsLoadingTaxes(false)
			} */
		}

		//Adiciona novo objeto
		const addCadastro = async (cadastro) => {
			/* try {
				const apiClientCode = localStorage.getItem('clientCode')
				if (apiClientCode && apiClientCode.toLowerCase() !== 'todos') {
					let body = tax
					const response = await api.post('taxas', body)
					console.log('response:', response)
				} else {
					console.log('Invalid client code:', apiClientCode)
				}
			} catch (error) {
				toast.alert('Erro ao cadastrar taxa')
				console.error('Error adding tax:', error)
				if (error.response.status === 401) {
					logout()
					return
				}
			} finally {
				toast.success('Taxa cadastrada com sucesso')
				setIsLoadingTaxes(false)
			} */
		}

		//Edita objeto
		const editCadastro = async (cadastro) => {
			/* try {
			  const apiClientCode = tax.CLICODIGO
			  if (apiClientCode !== 'todos' && apiClientCode !== 'TODOS' && apiClientCode !== undefined) {
				let body = JSON.stringify(tax)
		  
				const response = await fetch('https://app.salvalucro.com.br/api/v1/taxas', {
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
				  	toast.success('Taxa alterada com sucesso!')
				} else {
					toast.dismiss()
				  	toast.error('Erro ao alterar taxa!')
				}
			  } else {
				return []
			  }
			} catch (error) {
			  console.error('Error updating tax:', error)
			  toast.dismiss()
			  toast.error('Erro ao alterar taxa!')
			  if (error.response.status === 401) {
				logout()
				return
			}
			} finally {
			  setIsLoadingTaxes(false)
			} */
		  }
		  
		//Deleta objeto
		const deleteCadastro = async (cadastro) => {
/* 			setIsLoadingTaxes(true)
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
			} */
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



export default ApiCalls

