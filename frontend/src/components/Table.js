import React from 'react';
import SearchHistory from './SearchHistory.js';

const Table = ({ caption, headers, tableData })=> {
  return(
    <table className="table-wrapper">
        <caption className="table-caption">{caption}</caption>
        <thead className="table-col-name">
          <tr>
            {headers.map((header, index) => {
              return(
                <th key={index}>{header}</th>
              )
            })}
          </tr>
        </thead>
        <tbody className="table-data">
          {tableData.map(data => {
            return(
              <SearchHistory history={data} key={data.id}/>
            )
          })}
        </tbody>
      </table>
  );
}

export default Table;