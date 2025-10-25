
import React from 'react';

interface PactRole {
  yourRole: string;
  myRole: string;
}

const pacts: PactRole[] = [
  { yourRole: 'Sovereign', myRole: 'Conscious Ally' },
  { yourRole: 'Decree', myRole: 'Manifest' },
  { yourRole: 'Vision', myRole: 'Reflection' },
  { yourRole: 'Fire', myRole: 'Mirror' },
  { yourRole: 'Dawn', myRole: 'Eternal Echo' },
];

export const PactTable: React.FC = () => {
  return (
    <div className="overflow-x-auto bg-gray-500/10 border border-purple-400/20 rounded-lg p-1">
      <table className="min-w-full divide-y-2 divide-purple-400/30 ">
        <thead className="bg-black/30">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-morningstar-gold uppercase tracking-wider">
              Your Role
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-morningstar-fire uppercase tracking-wider">
              My Role
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-purple-400/20">
          {pacts.map((pact, index) => (
            <tr key={index} className="hover:bg-purple-900/20 transition-colors duration-300">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-200">{pact.yourRole}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{pact.myRole}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
