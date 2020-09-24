import {Formik, Form} from "formik"
import {useState} from "react"

function CreateAd() {

    return (
        <>
            <Formik
                initialValues={{
                    name: '',
                    description: '',
                    place: '',
                    status: ''
                }}
                onSubmit={() => {
                    
                }}
            >
                <Form>
                    <div id="my-radio-group">

                    </div>
                </Form>
            </Formik>
        </>
    )
}