'use client'
import { Formik, FormikHelpers } from 'formik';
import React, { useState, FC } from 'react';
import { getShortenUrl } from '@/services';

import { Content } from './components/Content';
import { validationSchema } from './helpers';
import { FormProps, FormType } from './Form.types';


export const Form:FC<FormProps> = ({setShortenUrl}) => {
    const [disabled, setDisabled] = useState(false);

    const onSubmit = (values: FormType, formikHelpers: FormikHelpers<FormType>) => {
        setDisabled(true);

        getShortenUrl({url: values.url}).then((shortUrl) => {
            setShortenUrl(shortUrl);
        }).finally(() => {
            formikHelpers.resetForm();
            setDisabled(false);
        });
    }
    return (
        <div>
            <Formik<FormType> initialValues={{ url: '' }} validationSchema={validationSchema} onSubmit={onSubmit}>
                <Content disabled={disabled}/>
            </Formik>
        </div>
    );
}
