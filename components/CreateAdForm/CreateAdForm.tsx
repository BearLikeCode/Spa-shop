import {Formik, Form,Field} from "formik"
import fire from '../../config/fire'
import styles from './createAdForm.module.scss'

function CreateAdForm() {
    return (
        <>
            <Formik
                initialValues={{
                    nameAd: '',
                    descriptionAd: '',
                    placeAd: '',
                    statusAd: ''
                }}
                onSubmit={(values) => {
                    event.preventDefault();
                    fire.firestore()
                        .collection('ads')
                        .add({...values});
                    alert('Success')

                }}
            >
                {({ submitForm }) => (
                    <Form className={styles.form}>
                        <label htmlFor="nameAd" className={styles.label}>Advertisment name:
                            <Field id="nameAd" name="nameAd" placeholder="Advertisment name" className={styles.field}/>
                        </label>
                        <label htmlFor="descriptionAd" className={styles.label}>Advertisment description:
                            <Field id="descriptionAd" name="descriptionAd" placeholder="Advertisment description" className={styles.field}/>
                        </label>
                        <label>
                        <div id="checkbox-group">Select place of advertisment:</div>
                            <div role="group" aria-labelledby="checkbox-group">
                                <label className={styles.labelCheckbox}>Google
                                <Field type="checkbox" name="placeAd" value="Google" className={styles.fieldCheckbox} />
                                </label>
                                <label className={styles.labelCheckbox}>Facebook
                                <Field type="checkbox" name="placeAd" value="Facebook" className={styles.fieldCheckbox} />
                                </label>
                                <label className={styles.labelCheckbox}>Instagram
                                <Field type="checkbox" name="placeAd" value="Instagram" className={styles.fieldCheckbox} />
                                </label>
                                <label className={styles.labelCheckbox}>Youtube
                                <Field type="checkbox" name="placeAd" value="Youtube" className={styles.fieldCheckbox} />
                                </label>
                                <label className={styles.labelCheckbox}>Baners
                                <Field type="checkbox" name="placeAd" value="Baners" className={styles.fieldCheckbox} />
                                </label>
                                <label className={styles.labelCheckbox}>TV
                                <Field type="checkbox" name="placeAd" value="TV" className={styles.fieldCheckbox} />
                                </label>
                            </div>
                            <div id="my-radio-group">Select status:</div>
                            <div role="group" aria-labelledby="my-radio-group">
                                <label>
                                <Field type="radio" name="statusAd" value="Public" />
                                Public
                                </label>
                                <label>
                                <Field type="radio" name="statusAd" value="Draft" />
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