import { Formik, Form, Field } from 'formik'
import fire from '../../config/fire'
import styles from './createAdForm.module.scss'
import * as yup from 'yup'
import { useState } from 'react'
import moment from 'moment'

const validationSchema = yup.object({
    nameAd: yup.string().required('Please enter Advertisement name'),
    descriptionAd: yup
        .string()
        .required('Please enter Advertisement description'),
    placeAd: yup.array().required('Please '),
    statusAd: yup.string().required('Please enter Advertisement status'),
})

function CreateAdForm() {
    const [defPlaceAd, setDefPlaceAd] = useState(['Google'])
    const [defStatusAd, setDefStatusAd] = useState('Public')

    return (
            <Formik
                validationSchema={validationSchema}
                initialValues={{
                    nameAd: '',
                    descriptionAd: '',
                    placeAd: '',
                    statusAd: '',
                }}
                onSubmit={(values) => {
                    fire.firestore()
                        .collection('ads')
                        .add({ ...values, dateCreate: moment().unix() })
                    alert('Success')
                }}
            >
                {({ errors, touched }) => (
                    <Form className={styles.form}>
                        <label htmlFor="nameAd" className={styles.label}>
                            Advertisment name:
                            <Field
                                id="nameAd"
                                name="nameAd"
                                placeholder="Advertisment name"
                                className={styles.field}
                            />
                            {errors.nameAd && touched.nameAd ? (
                                <div>{errors.nameAd}</div>
                            ) : null}
                        </label>
                        <label htmlFor="descriptionAd" className={styles.label}>
                            Advertisment description:
                            <Field
                                id="descriptionAd"
                                name="descriptionAd"
                                placeholder="Advertisment description"
                                className={styles.field}
                            />
                            {errors.descriptionAd && touched.descriptionAd ? (
                                <div>{errors.descriptionAd}</div>
                            ) : null}
                        </label>
                        <label>
                            <div id="checkbox-group">
                                Select place of advertisment:
                            </div>
                            <div role="group" aria-labelledby="checkbox-group">
                                <label className={styles.labelCheckbox}>
                                    Google
                                    <Field
                                        type="checkbox"
                                        name="placeAd"
                                        value="Google"
                                        className={styles.fieldCheckbox}
                                    />
                                </label>
                                <label className={styles.labelCheckbox}>
                                    Facebook
                                    <Field
                                        type="checkbox"
                                        name="placeAd"
                                        value="Facebook"
                                        className={styles.fieldCheckbox}
                                    />
                                </label>
                                <label className={styles.labelCheckbox}>
                                    Instagram
                                    <Field
                                        type="checkbox"
                                        name="placeAd"
                                        value="Instagram"
                                        className={styles.fieldCheckbox}
                                    />
                                </label>
                                <label className={styles.labelCheckbox}>
                                    Youtube
                                    <Field
                                        type="checkbox"
                                        name="placeAd"
                                        value="Youtube"
                                        className={styles.fieldCheckbox}
                                    />
                                </label>
                                <label className={styles.labelCheckbox}>
                                    Baners
                                    <Field
                                        type="checkbox"
                                        name="placeAd"
                                        value="Baners"
                                        className={styles.fieldCheckbox}
                                    />
                                </label>
                                <label className={styles.labelCheckbox}>
                                    TV
                                    <Field
                                        type="checkbox"
                                        name="placeAd"
                                        value="TV"
                                        className={styles.fieldCheckbox}
                                    />
                                </label>
                            </div>
                        </label>
                        <div id="my-radio-group">Select status:</div>
                        <div role="group" aria-labelledby="my-radio-group">
                            <label>
                                <Field
                                    type="radio"
                                    name="statusAd"
                                    value="Public"
                                />
                                Public
                            </label>
                            <label>
                                <Field
                                    type="radio"
                                    name="statusAd"
                                    value="Draft"
                                />
                                Draft
                            </label>
                        </div>
                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
    )
}

export default CreateAdForm
