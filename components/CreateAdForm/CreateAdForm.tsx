import {Formik, Form,Field} from "formik"
import {useState} from "react"
import styles from './createAdForm.scss'

function CreateAdForm() {
    return (
        <>
            <Formik
                initialValues={{
                    nameAd: '',
                    descriptionAd: '',
                    place: '',
                    status: ''
                }}
                onSubmit={(values) => {
                    console.log(values)
                }}
            >
                {({ submitForm }) => (
                    <Form>
                        <label htmlFor="nameAd">Advertisment name
                            <Field id="nameAd" name="nameAd" placeholder="Advertisment name" />
                        </label>
                        <label htmlFor="descriptionAd">Advertisment description
                            <Field id="descriptionAd" name="descriptionAd" placeholder="Advertisment description" />
                        </label>
                        <label>
                        <div id="checkbox-group">Select place of advertisment</div>
                            <div role="group" aria-labelledby="checkbox-group">
                                <label>Google
                                <Field type="checkbox" name="checked" value="Google" />
                                </label>
                                <label>Facebook
                                <Field type="checkbox" name="checked" value="Facebook" />
                                </label>
                                <label>Instagram
                                <Field type="checkbox" name="checked" value="Instagram" />
                                </label>
                                <label>Youtube
                                <Field type="checkbox" name="checked" value="Youtube" />
                                </label>
                                <label>Baners
                                <Field type="checkbox" name="checked" value="Baners" />
                                </label>
                                <label>TV
                                <Field type="checkbox" name="checked" value="TV" />
                                </label>
                            </div>
                            <div id="my-radio-group">Select status:</div>
                            <div role="group" aria-labelledby="my-radio-group">
                                <label>
                                <Field type="radio" name="picked" value="Public" />
                                Public
                                </label>
                                <label>
                                <Field type="radio" name="picked" value="Draft" />
                                Draft
                                </label>
                            </div>
                        </label>
                        <button
                            type="submit"
                        >
                            Submit
                        </button>
                    </Form>
                )}
            </Formik>
        </>
    )
}

export default CreateAdForm;