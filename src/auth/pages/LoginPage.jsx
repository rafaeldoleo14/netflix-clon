import { Formik, Form, Field, ErrorMessage } from 'formik'
import React from 'react'
import { RiErrorWarningLine } from 'react-icons/ri'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { startLogin } from '../../store/slices/thunks'
import { useForm } from '../hooks/useForm'
import { AuthLayout } from '../layout/AuthLayout'

export const LoginPage = () => {

  const dispatch = useDispatch();
  const {status, errorMessage} = useSelector(state => state.auth);

  const {formState,email, password} = useForm({
    email: '',
    password: ''
  })

  return (
    
    <>

      <AuthLayout>

        <Formik 

          validate={(valores)=>{

          let errores = {}

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

          dispatch(startLogin({...valores}))
          console.log('Login success!!!')
          resetForm()

        }}
        
        initialValues={{...formState}}
        >

            {({errors})=> (

              <Form action="" className='input-container'>

              <div className='text-white text-4xl font-bold'>
                Ingresar
              </div>

              <div>

                <Field type="email" placeholder='Email' name='email'/>

                <ErrorMessage name='email' 
                component={()=> (<p className='text-red-600 text-xs'>{errors.email}</p>)}/>

              </div>

              <div className='input-container'>

                <Field type="password" placeholder='Contraseña' name='password'/>

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
                <button type='submit'>Entrar</button>
              </div>

              </Form>

            )}
            
        </Formik>

        <div className='info-container'>
          <Link to={'/auth/login'}>Necesitas ayuda?</Link>
        </div>

        <div className='info-container-2'>

          <p>Nuevo en neflix? <Link to={'/auth/register'}>Registrarse ahora</Link> </p>

          <p className='second'>This page is protected by Google reCAPTCHA to ensure you're not a bot.</p>

        </div>
        
      </AuthLayout>  
  
    </>

  )
}
