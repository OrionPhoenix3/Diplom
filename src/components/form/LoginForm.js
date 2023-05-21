import {useContext, useState} from "react";
import Input from "./Input";
import {useFormik} from "formik";
import * as Yup from "yup";
import {useNavigate} from "react-router";
import {AuthContext} from "../../context/AuthContext";
import app from "../../base";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";


const auth = getAuth(app); 

const LoginForm = () => {
    const {setCurrentUser} = useContext(AuthContext)
    const [error, setError] = useState({login: null, password: null})
    const navigate = useNavigate();

    const {handleSubmit, handleChange, values, errors, touched, handleBlur} = useFormik({
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
                        navigate("/home");
                        localStorage.setItem("user", JSON.stringify(user.uid))
                        localStorage.setItem("showLoader", true)
                    }
                }).catch(err => {
                    if (err.message === "auth/invalid-email" || err.message === "auth/user-not-found") {
                        setError({login: "User not found", ...password}) 
                    }
                    if (err.message === "auth/invalid-password") {
                        setError({...login, password: "Password is invalid"})  
                    }
                })
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
export default LoginForm