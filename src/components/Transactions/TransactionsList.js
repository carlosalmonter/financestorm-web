import React from 'react';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui';
import PropTypes from 'prop-types';
import withLoading from '../HOC/withLoading';
import config from '../../config/config';

const TransactionsList = ({ transactionsData }) => (
  <div className="transactions__list">
    <Table selectable>
      <TableHeader>
        <TableRow>
          {
            config.TRANSACTIONS_LIST_COLUMNS.map(columnName => (
              <TableHeaderColumn key={columnName}>{columnName}</TableHeaderColumn>
            ))
          }
        </TableRow>
      </TableHeader>
      <TableBody>
        {
          transactionsData.map(transactionData => (
            <TableRow key={transactionData.id}>
              <TableRowColumn>{ transactionData.description }</TableRowColumn>
              <TableRowColumn>{ transactionData.type }</TableRowColumn>
              <TableRowColumn>{ transactionData.amount }</TableRowColumn>
              <TableRowColumn>{ transactionData.date }</TableRowColumn>
              <TableRowColumn>{ transactionData.tag.name }</TableRowColumn>
              <TableRowColumn>{ transactionData.account.name }</TableRowColumn>
              <TableRowColumn>{ transactionData.date }</TableRowColumn>
            </TableRow>
          ))
        }
      </TableBody>
    </Table>
  </div>
);

TransactionsList.propTypes = {
  transactionsData: PropTypes.arrayOf(PropTypes.object),
};

TransactionsList.defaultProps = {
  transactionsData: [],
};

export default withLoading(TransactionsList);
