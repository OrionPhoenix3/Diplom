import { useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import Input from "./Input";
import { useFormik } from "formik";
import * as Yup from "yup";
import {useNavigate} from "react-router";
import app from "../../base";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { localStorageUserCreate as userCreate } from "../../utils/localStorageUtils";
import { withAuthorization } from "../../HOCs/withAuthorization";

const auth = getAuth(app); 

const Login = () => {
    const {setCurrentUser, setShowLoader} = useAuthContext()
    const [error, setError] = useState({login: null, password: null})
    const navigate = useNavigate();

    const {handleSubmit, handleChange, values, errors, touched, handleBlur, setStatus, status} = useFormik({
        initialValues: {
            login: "",
            password: "",
        },
        validationSchema: Yup.object({
            login: Yup.string()
                .email("login must be a valid: user@exemple.com")
                .required("Login is a required"),
            password: Yup.string()
                .min(6, "password mast be > 5 symbols")
                .max(15, "password mast be < 15 symbols")
                .matches(/^[\w.-]+$/, 'password can only contain latin letters, numbers, and symbols: "_", "-"')
                .required("Password is a required"),
        }),
        onSubmit: async ({login, password}) => {
            await signInWithEmailAndPassword(auth, login, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    if (user) {
                        setCurrentUser(user);
                        setShowLoader(true);
                        navigate("/home");
                        userCreate(JSON.stringify(user.uid));
                    }
                }).catch(err => {

                    if (err.message.includes("user")) {
                        setStatus({login: "User not found"})
                    }
                    if (err.message.includes("password")) {
                        setStatus({password: "Password not found"})
                    }
                })
                //     if (err.message === "auth/invalid-email" || err.message === "auth/user-not-found") {
                //         // setError({login: "User not found", ...password})
                //         setStatus({login: "User not found"})
                //     }
                //     if (err.message === "auth/invalid-password") {
                //         // setError({...login, password: "Password is invalid"})  
                //     }
                // })
        }
    })

    return (
        <form className="form" onSubmit={handleSubmit}>
            <Input name="login"
                   type="email"
                   placeholder="Login"
                   value={values.login}
                   onChange={handleChange}
                   onBlur={handleBlur}
                   touched={touched.login}
                   errors={error.login}
            />
            {status ? <p>{status.login}</p>: <></>}
            <Input name="password"
                   type="password"
                   placeholder="Password"
                   value={values.password}
                   onChange={handleChange}
                   onBlur={handleBlur}
                   touched={touched.password}
                   errors={error.password}
            />
            <button className="submit-btn" type="submit">Submit</button>
            <span className="register-btn" onClick={() => navigate("/register")}>dont have an account</span>
        </form>
    )
}

const LoginForm = withAuthorization(Login) 

export default LoginForm