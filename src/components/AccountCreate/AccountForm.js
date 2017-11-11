import React from 'react';
import { MenuItem, Paper, RaisedButton, SelectField, TextField } from 'material-ui';
import PropTypes from 'prop-types';
import * as _ from 'lodash';
import config from '../../config/config';

const AccountForm = ({
  accountType,
  onAccountNameInputChange,
  onAccountTypeChange,
  onAccountSubmit,
}) => (
  <div className="accounts-create__form">
    <Paper>
      <div className="accounts-create__form__row">
        <TextField
          hintText="Name"
          onChange={onAccountNameInputChange}
        />
      </div>
      <div className="accounts-create__form__row">
        <SelectField
          floatingLabelText="Account Type:"
          value={accountType}
          onChange={onAccountTypeChange}
        >
          {
            config.ACCOUNT_TYPES.map(item => (
              <MenuItem key={item} value={item} primaryText={_.upperFirst(item)} />
            ))
          }
        </SelectField>
      </div>
      <div className="accounts-create__form__row">
        <RaisedButton label={'Create Account'} onClick={onAccountSubmit} />
      </div>
    </Paper>
  </div>
);

AccountForm.propTypes = {
  accountType: PropTypes.string.isRequired,
  onAccountNameInputChange: PropTypes.func.isRequired,
  onAccountTypeChange: PropTypes.func.isRequired,
  onAccountSubmit: PropTypes.func.isRequired,
};

export default AccountForm;
