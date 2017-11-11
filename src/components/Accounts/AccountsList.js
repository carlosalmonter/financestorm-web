import React from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from "material-ui";
import withLoading from "../HOC/withLoading";

const AccountsList = ({ accountsData }) => (
  <div className="accounts__list">
    <Table selectable={true}>
      <TableHeader>
        <TableRow>
          <TableHeaderColumn>Name</TableHeaderColumn>
          <TableHeaderColumn>Balance</TableHeaderColumn>
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

export default withLoading(AccountsList);
