import {useContext} from 'react'
import { useRouter } from 'next/router'
import {AuthContext} from "../../context/AuthContext";
import * as yup from 'yup'
import {Form, Formik, Field} from "formik";

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
                    <h1>Login</h1>
                    <label htmlFor="email">
                        Email
                        <Field
                            id="email"
                            name="email"
                            placeholder="email"
                        />
                        {(errors.email && touched.email) && <p>{errors.email}</p>}
                    </label>
                    <label htmlFor="password">
                        Password
                        <Field
                            id="password"
                            name="password"
                            placeholder="password"
                        />
                        {(errors.password && touched.password) && <p>{errors.password}</p> }
                    </label>
                    <button type="submit">Login</button>
                </Form>
            )}
        </Formik>
    )
}
export default LoginForm
