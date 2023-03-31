// This is temp data for the table above
const breakdown1 = [
  {
    id: 1,
    name: "MetroList",
    tracked: "$4000.00",
    budget: "$4000.00",
    percCompl: "0%",
    remaning: "$4000.00",
    excess: "$4000.00",
  },
];

export default function DashboardTable() {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="-mx-4 mt-8 flow-root sm:mx-0">
        <table className="min-w-full divide-y divide-gray-300">
          <thead>
            <tr>
              <th
                scope="col"
                className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
              >
                Income
              </th>
              <th
                scope="col"
                className="hidden px-3 py-3.5 text-right text-sm font-semibold text-gray-900 sm:table-cell"
              >
                Tracked
              </th>
              <th
                scope="col"
                className="hidden px-3 py-3.5 text-right text-sm font-semibold text-gray-900 sm:table-cell"
              >
                Budget
              </th>
              <th
                scope="col"
                className="py-3.5 pl-3 pr-4 text-right text-sm font-semibold text-gray-900 sm:pr-0"
              >
                % Complete
              </th>
              <th
                scope="col"
                className="py-3.5 pl-3 pr-4 text-right text-sm font-semibold text-gray-900 sm:pr-0"
              >
                Remaning
              </th>
              <th
                scope="col"
                className="py-3.5 pl-3 pr-4 text-right text-sm font-semibold text-gray-900 sm:pr-0"
              >
                Excess
              </th>
            </tr>
          </thead>
          <tbody>
            {breakdown1.map((breakdown1) => (
              <tr key={breakdown1.id} className="border-b border-gray-200">
                <td className="py-4 pl-4 pr-3 text-sm sm:pl-0">
                  <div className="font-medium text-gray-900">
                    {breakdown1.name}
                  </div>
                </td>
                <td className="hidden px-3 py-4 text-right text-sm text-gray-500 sm:table-cell">
                  {breakdown1.tracked}
                </td>
                <td className="hidden px-3 py-4 text-right text-sm text-gray-500 sm:table-cell">
                  {breakdown1.budget}
                </td>
                <td className="py-4 pl-3 pr-4 text-right text-sm text-gray-500 sm:pr-0">
                  {breakdown1.percCompl}
                </td>
                <td className="py-4 pl-3 pr-4 text-right text-sm text-gray-500 sm:pr-0">
                  {breakdown1.remaning}
                </td>
                <td className="py-4 pl-3 pr-4 text-right text-sm text-gray-500 sm:pr-0">
                  {breakdown1.excess}
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th
                scope="row"
                colSpan={1}
                className="hidden pl-4 pr-3 pt-4 text-right text-sm font-semibold text-gray-900 sm:table-cell sm:pl-0"
              >
                Total
              </th>
              <th
                scope="row"
                className="pl-6 pr-3 pt-4 text-left text-sm font-semibold text-gray-900 sm:hidden"
              >
                Total
              </th>
              <td className="pl-3 pr-4 pt-4 text-right text-sm font-semibold text-gray-900 sm:pr-0">
                $4000.00
              </td>
              <td className="pl-3 pr-4 pt-4 text-right text-sm font-semibold text-gray-900 sm:pr-0">
                $4000.00
              </td>
              <td className="pl-3 pr-4 pt-4 text-right text-sm font-semibold text-gray-900 sm:pr-0">
                $4000.00
              </td>
              <td className="pl-3 pr-4 pt-4 text-right text-sm font-semibold text-gray-900 sm:pr-0">
                $4000.00
              </td>
              <td className="pl-3 pr-4 pt-4 text-right text-sm font-semibold text-gray-900 sm:pr-0">
                $4000.00
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}
