import { formatData } from './FormatTable';
import React from 'react';

interface TableRow {
  [key: string]: any;
}
interface TableData {
  data: TableRow[];
}
interface ObservableNEASTableProps {
  data: TableData | null;
  headers: string[];
}

function ObservableNEASTable({ data, headers }: ObservableNEASTableProps) {
  if (!data || !data.data) return null;

  return (
    <table className="min-w-full overflow-x-auto max-w-full mt-3">
      <thead>
        <tr>
          {headers.map(
            (header: string, index: React.Key | null | undefined) => (
              <th
                key={index}
                className="px-3 py-2 border border-gray-300 text-left text-gray-500 uppercase bg-white"
              >
                {header.split(' ').map((word, i) => (
                  <React.Fragment key={i}>
                    {i > 0 && <br />} {word}
                  </React.Fragment>
                ))}
              </th>
            )
          )}
        </tr>
      </thead>
      <tbody>{formatData(data)}</tbody>
    </table>
  );
}

export default ObservableNEASTable;
