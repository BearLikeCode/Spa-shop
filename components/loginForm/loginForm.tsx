import {useContext} from 'react'
import { useRouter } from 'next/router'
import {AuthContext} from "../../context/authContext";
import * as yup from 'yup'
import {Form, Formik, Field} from "formik";
import styles from './loginForm.module.scss';

const validationSchema = yup.object({
    email: yup.string().required('Please enter your email'),
    password: yup.string().required('Please enter your password')
})

const LoginForm = () => {
    const { loginUser } = useContext(AuthContext)
    const router = useRouter()
    return (
        <Formik
            validationSchema={validationSchema}
            initialValues={{
                email: '',
                password: ''
            }}
            onSubmit={(values) => {
                loginUser(values.email, values.password)
                alert('Success')
                router.push('/')
            }}
        >
            {({errors, touched}) => (
                <Form>
                    <h1 className={styles.loginForm__title}>Login</h1>
                    <label htmlFor="email" className={styles.loginForm__label}>
                        Email
                        <Field
                            id="email"
                            name="email"
                            placeholder="email"
                            className={styles.loginForm__field}
                        />
                        {(errors.email && touched.email) && <p className={styles.loginForm__error}>{errors.email}</p>}
                    </label>
                    <label htmlFor="password" className={styles.loginForm__label}>
                        Password
                        <Field
                            id="password"
                            name="password"
                            placeholder="password"
                            className={styles.loginForm__field}
                        />
                        {(errors.password && touched.password) && <p className={styles.loginForm__error}>{errors.password}</p> }
                    </label>
                    <button type="submit" className={styles.loginForm__btn}>Login</button>
                </Form>
            )}
        </Formik>
    )
}
export default LoginForm
