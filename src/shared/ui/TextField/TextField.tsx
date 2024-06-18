import { FC } from 'react';
// eslint-disable-next-line import/named
import MUITextField, { TextFieldProps } from '@mui/material/TextField';

export const TextField: FC<TextFieldProps> = (props) => {
  return <MUITextField {...props} variant="outlined" />;
};
