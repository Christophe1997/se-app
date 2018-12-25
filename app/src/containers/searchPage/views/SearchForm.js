import React from 'react';
import {Field, reduxForm} from 'redux-form';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import DeleteIcon from '@material-ui/icons/Delete';
import {fetchPatient} from "../actions";

/**
 * @param{Object} values: keys = [name, gender, visitCardNumber, outpatientNumber, admissionNumber]
 */

const NAME_MIN_LENGTH = 2;
const NAME_MAX_LENGTH = 10;
const VISIT_CARD_NUMBER_MIN_LENGTH = 2;
const VISIT_CARD_NUMBER_MAX_LENGTH = 20;
const OUTPATIENT_NUMBER_MIN_LENGTH = 2;
const OUTPATIENT_NUMBER_MAX_LENGTH = 20;
const ADMISSION_NUMBER_MIN_LENGTH = 2;
const ADMISSION_NUMBER_MAX_LENGTH = 20;

const validate = values => {
  const errors = {};
  if (values.name !== undefined) {
    if (values.name.length > NAME_MAX_LENGTH) {
      errors.name = `姓名长度不能超过${NAME_MAX_LENGTH}`;
    } else if (values.name.length < NAME_MIN_LENGTH) {
      errors.name = `姓名长度不能少于${NAME_MIN_LENGTH}`;
    }
  }

  if (values.visitCardNumber !== undefined) {
    if (values.visitCardNumber.length > VISIT_CARD_NUMBER_MAX_LENGTH) {
      errors.visitCardNumber = `就诊卡号不能超过${VISIT_CARD_NUMBER_MAX_LENGTH}位`;
    } else if (values.visitCardNumber.length < VISIT_CARD_NUMBER_MIN_LENGTH) {
      errors.visitCardNumber = `就诊卡号不能少于${VISIT_CARD_NUMBER_MIN_LENGTH}位`;
    }
  }

  if (values.outpatientNumber !== undefined) {
    if (values.outpatientNumber.length > OUTPATIENT_NUMBER_MAX_LENGTH) {
      errors.outpatientNumber = `门诊号不能超过${OUTPATIENT_NUMBER_MAX_LENGTH}位`;
    } else if (values.outpatientNumber.length < OUTPATIENT_NUMBER_MIN_LENGTH) {
      errors.outpatientNumber = `门诊号不能少于${OUTPATIENT_NUMBER_MIN_LENGTH}`;
    }
  }

  if (values.admissionNumber !== undefined) {
    if (values.admissionNumber.length > ADMISSION_NUMBER_MAX_LENGTH) {
      errors.admissionNumber = `住院号不能超过${ADMISSION_NUMBER_MAX_LENGTH}`;
    } else if (values.admissionNumber.length < ADMISSION_NUMBER_MIN_LENGTH) {
      errors.admissionNumber = `住院号不能少于${ADMISSION_NUMBER_MIN_LENGTH}`;
    }
  }

  return errors
};

const warn = values => {
};

const textField = ({label, input, meta: {touched, invalid, error}, ...custom}) => (
  <TextField
    label={label}
    placeholder={label}
    error={touched && invalid}
    helperText={touched && error}
    {...input}
    {...custom}
  />
);

const radioField = ({input, ...rest}) => (
  <FormControl>
    <RadioGroup row={true} {...input} {...rest}>
      <FormControlLabel value="female" control={<Radio/>} label="女"/>
      <FormControlLabel value="male" control={<Radio/>} label="男"/>
    </RadioGroup>
  </FormControl>
);


const SearchForm = ({handleSubmit, pristine, reset, submitting}) => (
  <form onSubmit={handleSubmit}>
    <div>
      <Field name="name" label="姓名" component={textField}/>
    </div>
    <br/>
    <div>
      <Field name="visitCardNumber" label="就诊卡号" component={textField}/>
    </div>
    <br/>
    <div>
      <Field name="outpatientNumber" label="门诊号" component={textField}/>
    </div>
    <br/>
    <div>
      <Field name="admissionNumber" label="住院号" component={textField}/>
    </div>
    <br/>
    <div>
      <Field name="gender" component={radioField}>
        <Radio value="female" label="女"/>
        <Radio value="male" label="男"/>
      </Field>
    </div>
    <br/>
    <div>
      <Button variant="contained" color="primary" type="submit" disabled={submitting}>
        <SearchIcon/>
        查询
      </Button>
      <Button variant="contained" color="primary" type="button" disabled={pristine || submitting} onClick={reset}>
        <DeleteIcon/>
        清除输入
      </Button>
    </div>
  </form>
);

export default reduxForm({
  form: 'SearchForm',
  validate,
  warn,
  onSubmit: (data, dispatch) => dispatch(fetchPatient(data))
})(SearchForm)