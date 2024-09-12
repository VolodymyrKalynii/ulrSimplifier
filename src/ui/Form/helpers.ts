import * as Yup from 'yup';
import { FormType } from './Form.types';

export const validationSchema = Yup.object<FormType>().shape({
    url: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required').matches(/^[A-Za-z0-9_-]+$/, 'Is not in correct format')
});
