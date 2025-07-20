import React from 'react'
import {assets} from '../assets/assets'
import { useState } from 'react'

const Login = () => {

    const [state,setState] = useState('Admin')

  return (
    <form className='min-h-[80vh] flex items-center'>
        <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-[#5E5E5E] text-sm shadow-lg'>
            <p><span> {state} </span> Iniciar Sesión</p>
            <div>
                <p>Email</p>
                <input type="email" required/>
            </div>
            <div>
                <p>Contraseña</p>
                <input type="password" required/>
            </div>
        </div>
        <button>
            Iniciar Sesión
        </button>
    </form>
  )
}

export default Login