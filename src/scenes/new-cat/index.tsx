import React, { useCallback, useMemo } from 'react';
import * as yup from 'yup';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
} from '@material-ui/core';

import { Input } from '../../components/form/input';
import { FORM_FIELDS, FORM_LABELS } from '../../constants/labels';
import { useForm } from 'react-hook-form';
import { useStyles } from '../../theme';

interface NewCatFormValues {
  name: string;
  color: string;
  breed: string;
  description: string;
  dateOfBirth: Date;
}

const useYupValidationResolver = (validationSchema: {
  validate: (arg0: any, arg1: { abortEarly: boolean }) => any;
}): any =>
  useCallback(
    async (data: any) => {
      try {
        const values = await validationSchema.validate(data, {
          abortEarly: false,
        });

        return {
          values,
          errors: {},
        };
        // eslint-disable-next-line unicorn/catch-error-name
      } catch (errors) {
        return {
          values: {},
          errors: errors.inner.reduce(
            (allErrors: any, currentError: any) => ({
              ...allErrors,
              [currentError.path]: {
                type: currentError.type ?? 'validation',
                message: currentError.message,
              },
            }),
            {},
          ),
        };
      }
    },
    [validationSchema],
  );

export const NewCat: any = () => {
  const classes = useStyles();
  const validationSchema = useMemo(
    () =>
      yup.object<NewCatFormValues>().shape({
        name: yup.string().required(),
        color: yup.string().required(),
        breed: yup.string().required(),
        description: yup.string().required(),
        dateOfBirth: yup.date().required(),
      }),
    [],
  );

  const resolver = useYupValidationResolver(validationSchema);

  const { handleSubmit, register, errors } = useForm<NewCatFormValues>({
    resolver,
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    defaultValues: {
      name: '',
      color: '',
      breed: '',
      description: '',
      dateOfBirth: undefined,
    },
  });

  return (
    <Card className={classes.formCard}>
      <form onSubmit={handleSubmit((data): any => console.log(data))}>
        <CardHeader title='Create New Cat' />
        <CardContent>
          <Input
            name={FORM_FIELDS.NAME}
            label={FORM_LABELS.NAME}
            setRef={register}
            error={errors.name}
          />
          <Input
            name={FORM_FIELDS.COLOR}
            label={FORM_LABELS.COLOR}
            setRef={register}
            error={errors.color}
          />
          <Input
            name={FORM_FIELDS.BREED}
            label={FORM_LABELS.BREED}
            setRef={register}
          />
          <Input
            name={FORM_FIELDS.DESCRIPTION}
            label={FORM_LABELS.DESCRIPTION}
            setRef={register}
          />
          <Input
            name={FORM_FIELDS.DATE_OF_BIRTH}
            label={FORM_LABELS.DATE_OF_BIRTH}
            setRef={register}
            type='date'
          />
        </CardContent>
        <CardActions>
          <Button type='submit' size='large' color='primary'>
            Create Cat
          </Button>
        </CardActions>
      </form>
    </Card>
  );
};
