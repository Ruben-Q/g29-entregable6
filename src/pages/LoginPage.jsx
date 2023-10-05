import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const LoginPage = () => {

    const { register, reset, handleSubmit } = useForm()   
    const { loginUser } = useAuth()

    const submit = data => {
    loginUser(data)
    reset({ // Reseteamos a cero.
        email: "",
        password: ""
    })
    }

    return (
        <div className="login-position">
            
            <div className="loging-bg-foto">
            <div>
            <img className="login-image-musico" src='/images/musico-foto.jpg' alt=""/>
            </div>
            </div>

        <div className="loging-fondo" >

        <div>
            <img className="loging-image-fondo" src='/images/fondo.png' alt=""/>      
        
        <div className="login-log">
        
            <h2 className="loging">Login</h2>
        </div>

        <article className="loging-info">
        
            <div >
            <form onSubmit={handleSubmit(submit)}>
                
                <div className="login-email" >
                    <label htmlFor="email">Email</label>
                    <input {...register("email")} type="email" id="email" />
                </div>
                
                <div className="login-pasword">
                    <label htmlFor="password">Password</label>
                    <input {...register("password")} type="password" id="password" />
                    <button className="login-btn">Submit</button>
                </div >

            </form>
            <p className="login-haveAcoun-go">Do you have an account? <Link to="/auth/register">Go to register</Link></p>
            </div>

        </article>
        </div>
    </div>
        </div>

    
    );
};

export default LoginPage 