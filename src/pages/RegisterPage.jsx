import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import useAuth from "../hooks/useAuth"

const RegisterPage = () => {
    const { reset, handleSubmit, register } = useForm()
    const { registerUser} = useAuth()

    const submit = data => {
    registerUser(data)
    reset({ // Reseteamos a cero.
        name: "",
        email: "",
        password: ""
    })
    }

    return (
    <div className="register-position">
        
            <div className="register-bg-foto">
            <div>
            <img className="register-image-musico" src='/images/musico-foto.jpg' alt=""/>
            </div>
            </div>

            <div className="register-fondo">

        <div>
            <img className="register-image-fondo" src='/images/fondo.png' alt=""/>
        
            <div  className="register-reg">

            <h2 className="register">Register</h2>
        </div>

        <article className="register-info">
            
            <div>
            <form onSubmit={handleSubmit(submit)}>
            
                <div className="register-email">
                    <label htmlFor="email">Email</label>
                    <input {...register("email")}type="email" id="email" />
                </div>

                <div className="register-name">
                    <label htmlFor="name">Name</label>
                    <input {...register("name")}type="text" id="name" />
                </div>

                <div className="register-password">
                    <label htmlFor="password">Password</label>
                    <input {...register("password")} type="password" id="password" />
                    <button className="register-btn">Submit</button>
                </div>
                
            </form>
            <p className="register-reg-go">Are you register? <Link to="/auth/login">Go to login</Link></p>
        </div>
        </article>
        </div>
        </div>
    </div>
    )
}

export default RegisterPage