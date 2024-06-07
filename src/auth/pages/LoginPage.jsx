import { Formik, Form, Field, ErrorMessage } from "formik";
import React, { useState } from "react";
import { RiErrorWarningLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { startLogin } from "../../store/slices/thunks";
import { useForm } from "../hooks/useForm";
import { AuthLayout } from "../layout/AuthLayout";
import { TiDeleteOutline } from "react-icons/ti";
import { Loading } from "../../netflixClon/components/Loading/Loading";

export const LoginPage = () => {
  const dispatch = useDispatch();
  const { errorMessage } = useSelector((state) => state.auth);
  const [isLoading, setIsLoading] = useState(false);

  const { formState, email, password } = useForm({
    email: "",
    password: "",
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <AuthLayout>
        <Formik
          validate={(valores) => {
            let errores = {};

            if (!valores.email) {
              errores.email = "Por favor ingresa un correo electronico.";
            } else if (
              !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
                valores.email
              )
            ) {
              errores.email = "El correo es invalido.";
            }

            if (!valores.password) {
              errores.password = "Por favor ingresa una contraseña.";
            } else if (!/^\S{8,}$/.test(valores.password)) {
              errores.password =
                "La contraseña debe tener al menos 8 caracteres.";
            }

            return errores;
          }}
          onSubmit={(valores, { resetForm }) => {
            dispatch(
              startLogin({
                email: "rafaeldeoleo14@gmail.com",
                password: 23867459,
              })
            );
            console.log("Login success!!!");
            resetForm();
          }}
          initialValues={{ ...formState }}
        >
          {({ errors }) => (
            <Form action="" className="input-container">
              <div className="text-white text-3xl font-bold">Inicia sesión</div>

              <div>
                <Field
                  type="email"
                  placeholder="Email"
                  name="email"
                  className={`${errors.email ? "errorEmail" : ""}`}
                />

                <ErrorMessage
                  name="email"
                  component={() => (
                    <div>
                      <p className="text-red-600 text-xs flex align-middle content-center gap-2">
                        <TiDeleteOutline color="#eb3942" size={16} />
                        {"  "}
                        {errors.email}
                      </p>
                    </div>
                  )}
                />
              </div>

              <div className="input-container">
                <Field
                  type="password"
                  placeholder="Contraseña"
                  name="password"
                  className={`${errors.password ? "errorPassword" : ""}`}
                />

                <ErrorMessage
                  name="password"
                  component={() => (
                    <div>
                      <p className="text-red-600 text-xs flex align-middle content-center gap-2">
                        <TiDeleteOutline color="#eb3942" size={16} />{" "}
                        {errors.password}
                      </p>
                    </div>
                  )}
                />
              </div>

              {!!errorMessage ? (
                <div className="alert">
                  <p>
                    <RiErrorWarningLine size={25} color={"white"} />
                    {"  "}
                    {errorMessage}
                  </p>
                </div>
              ) : (
                <></>
              )}

              <div className="button-container">
                <button type="submit">Iniciar sesión</button>
                <p>O</p>
                <div
                  onClick={() => {
                    setIsLoading(true);
                    setTimeout(() => {
                      dispatch(
                        startLogin({
                          email: "rafaeldeoleo14@gmail.com",
                          password: 23867459,
                        })
                      );
                      setIsLoading(false);
                    }, 2000);
                  }}
                  className="login-code"
                >
                  <p>Ingresar como invitado</p>
                </div>
              </div>
            </Form>
          )}
        </Formik>

        <div className="info-container">
          <Link to={"/auth/login"}>¿Olvidaste la contraseña?</Link>
        </div>

        <div className="info-container-2">
          <p>
            ¿Primera vez en Netflix?{" "}
            <Link to={"/auth/login"}>Suscríbete ahora.</Link>{" "}
          </p>

          <p className="second">
            Esta página está protegida por Google reCAPTCHA para comprobar que
            no eres un robot.
          </p>
        </div>
      </AuthLayout>
    </>
  );
};
