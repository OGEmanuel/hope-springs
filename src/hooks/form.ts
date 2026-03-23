import { createFormHook } from '@tanstack/react-form';

import {
  PhoneField,
  Select,
  SubscribeButton,
  TextArea,
  TextField,
  UploadFileField,
} from '../components/form-components';
import { fieldContext, formContext } from './form-context';

export const { useAppForm } = createFormHook({
  fieldComponents: {
    TextField,
    PhoneField,
    Select,
    TextArea,
    UploadFileField,
  },
  formComponents: {
    SubscribeButton,
  },
  fieldContext,
  formContext,
});
