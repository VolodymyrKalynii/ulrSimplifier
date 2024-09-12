import React, { FC } from 'react';
import { Form, ErrorMessage, Field } from 'formik';
import { ContentProps } from './Content.types';

import styles from './Content.module.scss';

export const Content: FC<ContentProps> = ({disabled}) => (
    <Form className={styles.form}>
        <label className={styles.fieldSet}>
            <Field placeholder='Input long url' disabled={disabled} name='url' type="text" />
            <ErrorMessage name="url" />
        </label>
        <button type="submit" disabled={disabled}>
            Submit
        </button>
    </Form>
);