import { createFormHook } from '@tanstack/react-form';

import {
  PhoneField,
  Select,
  SubscribeButton,
  TextArea,
  TextField,
} from '../components/form-components';
import { fieldContext, formContext } from './form-context';

export const { useAppForm } = createFormHook({
  fieldComponents: {
    TextField,
    PhoneField,
    Select,
    TextArea,
  },
  formComponents: {
    SubscribeButton,
  },
  fieldContext,
  formContext,
});
