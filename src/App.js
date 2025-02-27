import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom'
import RoutesApp from './routes'
import { ToastContainer } from 'react-toastify'
import ApiProvider from './contexts/apiContext'
import ConstsProvider from './contexts/consts'

function App() {
  return (
    <BrowserRouter basename='/appresentacao'>
      <ApiProvider>
        <ConstsProvider>
          <RoutesApp/>
        </ConstsProvider>
      </ApiProvider>
      <ToastContainer
        position="bottom-right" // Set position to bottom right
        autoClose={5000} // Adjust as per your requirements
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </BrowserRouter>
  )
}

export default App
