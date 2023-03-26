
import { Formik, Form, Field, ErrorMessage } from 'formik'
import React, { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { startRegister } from '../../store/slices/thunks'
import { useForm } from '../hooks/useForm'
import { AuthLayout } from '../layout/AuthLayout'
import {RiErrorWarningLine} from 'react-icons/ri'

export const RegisterPage = () => {

  const dispatch = useDispatch();
  const {status, errorMessage} = useSelector(state => state.auth)

  const isChecking = useMemo(()=> status === 'checking' , [status])

  const {formState} = useForm({
    displayName: '',
    email: '',
    password: ''
  })  

  return (
    <>
    
      <AuthLayout>

        <Formik 
        validate={(valores)=>{

          let errores = {}

          if(!valores.displayName){
            errores.displayName = 'Por favor ingresa un nombre';
          }else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.displayName)){
            errores.displayName = 'El nombre solo puede contener letras y espacios.'
          }

          if(!valores.email){
            errores.email = 'Por favor ingresa un correo electronico.';
          }else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.email)){
            errores.email = 'El correo es invalido.'
          }

          if(!valores.password){
            errores.password = 'Por favor ingresa un contraseña.';
          }else if(!/^\S{8,}$/.test(valores.password)){
            errores.password = 'La contraseña debe tener al menos 8 caracteres.'
          }

          return errores

        }}

        onSubmit={(valores, {resetForm})=>{
          console.log('Enviado!!!!')
          dispatch(startRegister({...valores}))
          resetForm()
        }} 

        initialValues={{...formState}}
        >

            {({errors})=> (
              
                <Form className='input-container' noValidate>

                  <div className='text-white text-4xl font-bold'>
                    Registrar
                  </div>

                  <div>

                    <Field 
                    type="text" 
                    placeholder='Nombre' 
                    name='displayName' 
                    />

                    <ErrorMessage name='displayName' 
                    component={()=> (<p className='text-red-600 text-xs'>{errors.displayName}</p>)}/>
                    
                  </div>

                  <div>

                    <Field 
                    type="email" 
                    placeholder='Email' 
                    name='email' 
                    />

                    <ErrorMessage name='email' 
                    component={()=> (<p className='text-red-600 text-xs'>{errors.email}</p>)}/>

                  </div>

                  <div>

                    <Field 
                    type="password" 
                    placeholder='Contraseña' 
                    name='password' 
                    />

                    <ErrorMessage name='password' 
                    component={()=> (<p className='text-red-600 text-xs'>{errors.password}</p>)}/>

                  </div>

                  {
                    !!errorMessage ?

                    (<div className='alert'>
                      <p><RiErrorWarningLine size={25} color={'white'}/> {errorMessage}</p>
                    </div>) 

                    : <></>
                  }

                  <div className='button-container'>
                    <button disabled={isChecking} type='submit'>Registrarse</button>
                  </div>

                </Form>

            )}

        </Formik>

        <div className='info-container'>
          <Link to={'/auth/register'}>Necesitas ayuda?</Link>
        </div>

        <div className='info-container-2'>

          <p>Ya tienes cuenta? <Link to={'/auth/login'}>Entrar ahora</Link> </p>

          <p className='second'>This page is protected by Google reCAPTCHA to ensure you're not a bot.</p>

        </div>


      </AuthLayout>
    
    
    </>
  )
}
