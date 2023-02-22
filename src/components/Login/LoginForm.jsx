import { useForm } from "react-hook-form"
import React from "react";


const LoginForm = (props) => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }


    return <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input placeholder="Логин" {...register("login")} />
            <input placeholder="Пароль" {...register("password")} />
            <div>
                <input type="checkbox" {...register("rememberMe")} /> Запомнить меня
            </div>
            <input type="submit" />
        </form>
    </div>
}

export default LoginForm;