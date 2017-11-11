import React from 'react';
import { DatePicker, MenuItem, Paper, RaisedButton, SelectField, TextField } from 'material-ui';
import PropTypes from 'prop-types';
import * as _ from 'lodash';
import config from '../../config/config';

const TransactionForm = ({
  userData,
  accounts,
  transactionType,
  accountId,
  tagId,
  onDescriptionChange,
  onTypeChange,
  onAccountChange,
  onTagChange,
  onAmountChange,
  onDateChange,
  onTransactionSubmit,
}) => (
  <div className="transactions-create__form">
    <Paper>
      <div className="transactions-create__form__row">
        <TextField
          hintText="Description"
          onChange={onDescriptionChange}
        />
      </div>
      <div className="transactions-create__form__row">
        <SelectField
          floatingLabelText="Type:"
          value={transactionType}
          onChange={onTypeChange}
        >
          {
            config.TRANSACTION_TYPES.map(item => (
              <MenuItem key={item} value={item} primaryText={_.upperFirst(item)} />
            ))
          }
        </SelectField>
      </div>
      <div className="transactions-create__form__row">
        <DatePicker hintText="Date" onChange={onDateChange} />
      </div>
      <div className="transactions-create__form__row">
        <TextField
          hintText="Amount"
          onChange={onAmountChange}
        />
      </div>
      <div className="transactions-create__form__row">
        <SelectField
          floatingLabelText="Tag:"
          value={tagId}
          onChange={onTagChange}
        >
          {
            userData.tags.map(tag => (
              <MenuItem key={tag.id} value={tag.id} primaryText={_.upperFirst(tag.name)} />
            ))
          }
        </SelectField>
      </div>
      <div className="transactions-create__form__row">
        <SelectField
          floatingLabelText="Account:"
          value={accountId}
          onChange={onAccountChange}
        >
          {
            accounts.map(account => (
              <MenuItem
                key={account.id}
                value={account.id}
                primaryText={_.upperFirst(account.name)}
              />
            ))
          }
        </SelectField>
      </div>
      <div className="transactions-create__form__row">
        <RaisedButton label={'Create Transaction'} onClick={onTransactionSubmit} />
      </div>
    </Paper>
  </div>
);

TransactionForm.propTypes = {
  userData: PropTypes.shape().isRequired,
  accounts: PropTypes.arrayOf(PropTypes.object).isRequired,
  transactionType: PropTypes.string.isRequired,
  accountId: PropTypes.number.isRequired,
  tagId: PropTypes.number.isRequired,
  onDescriptionChange: PropTypes.func.isRequired,
  onTypeChange: PropTypes.func.isRequired,
  onAccountChange: PropTypes.func.isRequired,
  onTagChange: PropTypes.func.isRequired,
  onAmountChange: PropTypes.func.isRequired,
  onDateChange: PropTypes.func.isRequired,
  onTransactionSubmit: PropTypes.func.isRequired,
};

export default TransactionForm;
