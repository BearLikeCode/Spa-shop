import {useContext, useState} from 'react'
import fire from '../../config/fire'
import { useRouter } from 'next/router'
import {AuthContext} from "../../context/AuthContext";
import styles from './signupForm.module.scss'
import {Field, Form, Formik} from "formik";
import * as yup from 'yup';

const validationSchema = yup.object({
    username: yup.string().required('Please enter your username'),
    password: yup.string().required('Please enter your password'),
    passConf: yup.string().required('Please enter confirmed your password')
})

const SignupForm = () => {
    const router = useRouter()
    const { signupUser } = useContext(AuthContext)

    return (
        <Formik
            validationSchema={validationSchema}
            initialValues={{
                username: '',
                password: '',
                passConf: ''
            }}
            onSubmit={(values) => {
                signupUser(values.username, values.password, values.passConf)
                alert('Success')
                router.push('/')
            }}
        >
            {({errors, touched}) => (
                <Form>
                    <h1 className={styles.signupForm__title}>Create new user</h1>
                    <label htmlFor="username" className={styles.signupForm__label}>Email:{' '}
                        <Field
                            id="username"
                            name="username"
                            placeholder="username"
                            className={styles.signupForm__field}
                        />
                        </label>
                    <label htmlFor="password" className={styles.signupForm__label}>
                        Password:{' '}
                        <Field
                            id="password"
                            name="password"
                            placeholder="password"
                            className={styles.signupForm__field}
                        />
                    </label>
                    <label htmlFor="passwordConf" className={styles.signupForm__label}>
                        Password conf:{' '}
                        <Field
                            id="passConf"
                            name="passConf"
                            placeholder="password confirm"
                            className={styles.signupForm__field}
                        />
                    </label>
                    <button type="submit" className={styles.signupForm__btn}>Sign up</button>
                </Form>
            )}
        </Formik>
    )
}
export default SignupForm
