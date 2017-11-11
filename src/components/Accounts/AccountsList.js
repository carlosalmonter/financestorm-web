import React from 'react';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui';
import PropTypes from 'prop-types';
import withLoading from '../HOC/withLoading';
import config from '../../config/config';

const AccountsList = ({ accountsData }) => (
  <div className="accounts__list">
    <Table selectable>
      <TableHeader>
        <TableRow>
          {
            config.ACCOUNTS_LIST_COLUMNS.map(columnName => (
              <TableHeaderColumn key={columnName}>{columnName}</TableHeaderColumn>
            ))
          }
        </TableRow>
      </TableHeader>
      <TableBody>
        {
          accountsData.map(accountData => (
            <TableRow key={accountData.id}>
              <TableRowColumn>{ accountData.name }</TableRowColumn>
              <TableRowColumn>{ accountData.balance }</TableRowColumn>
            </TableRow>
          ))
        }
      </TableBody>
    </Table>
  </div>
);

AccountsList.propTypes = {
  accountsData: PropTypes.arrayOf(PropTypes.object),
};

AccountsList.defaultProps = {
  accountsData: [],
};

export default withLoading(AccountsList);
