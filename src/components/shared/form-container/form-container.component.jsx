import React from 'react'
import './form-container.styles.scss'
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers'
import * as yup from "yup"
// Components
import Input from '../../fields/input/input.component'
import Textarea from '../../fields/textarea/textarea.component'
import Button from '../../fields/button/button.component'

const FormContainer = () => {
    const schema = yup.object().shape({
        email: yup.string().email('Invalid email format').required('Email is required'),
        message: yup.string().required('Message is required').min(10),
    });
    const { register, handleSubmit, errors } = useForm({ resolver: yupResolver(schema) });

    const onSubmit = data => alert(`Hi, Thank you for exploring this project! :D`)

    return(
        <div className="form-container">
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <Input label="Email" type="email" name="email" placeholder="e.g.: johndoe@hotmail.com" error={errors.email} register={register} />
                <Textarea label="Message" type="message" name="message" placeholder="Write something here and we'll write back" error={errors.message} register={register} />
                <Button spec={{color: 'secondary'}} type="submit" value="Submit"/>
            </form>
        </div>
    )
}

export default React.memo(FormContainer)