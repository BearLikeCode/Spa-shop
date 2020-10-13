import {useContext} from 'react'
import { useRouter } from 'next/router'
import {AuthContext} from "../../context/authContext";
import styles from './signupForm.module.scss'
import {Field, Form, Formik} from "formik";
import * as yup from 'yup';

const validationSchema = yup.object({
    name: yup.string().required('Please enter your username'),
    email: yup.string().required('Please enter your mail'),
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
                name: '',
                email: '',
                password: '',
                passConf: ''
            }}
            onSubmit={(values) => {
                signupUser(values.name, values.email, values.password, values.passConf, values.file)
                alert('Success')
                router.push('/')
            }}
        >
            {({errors, touched, setFieldValue}) => (
                <Form>
                    <h1 className={styles.signupForm__title}>Create new user</h1>
                    <label htmlFor="name" className={styles.signupForm__label}>Name:{' '}
                        <Field
                            id="name"
                            name="name"
                            placeholder="name"
                            className={styles.signupForm__field}
                        />
                    </label>
                    <label htmlFor="username" className={styles.signupForm__label}>Email:{' '}
                        <Field
                            id="email"
                            name="email"
                            placeholder="email"
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
                    <label htmlFor="file" className={styles.signupForm__label}>
                        Select image
                        <input id="file" name="file" type="file" onChange={(event) => {
                            setFieldValue("file", event.currentTarget.files[0]);
                        }} className={styles.signupForm__field}/>
                    </label>
                    <button type="submit" className={styles.signupForm__btn}>Sign up</button>
                </Form>
            )}
        </Formik>
    )
}
export default SignupForm
