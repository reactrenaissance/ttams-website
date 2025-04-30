
import React, { useState } from 'react';

const TariffTables = ({ data, defaultDuration = '', hideDropdown = false }) => {
  const [selectedDuration, setSelectedDuration] = useState(defaultDuration);

  const durationLabels = {
    '50': '50 minutes',
    '90': '90 minutes',
    '120': '2 hours',
    '150': '2.5 hours',
    '180': '3 hours',
  };

  const handleChange = (e) => {
    setSelectedDuration(e.target.value);
  };

  return (
    <div className="tariff-page">
      {!hideDropdown && (
        <>
          <h2>Choose session length</h2>
          <select value={selectedDuration} onChange={handleChange}>
            <option value="">-- Select --</option>
            {Object.keys(data).map((duration) => (
              <option key={duration} value={duration}>
                {durationLabels[duration] || duration + ' min'}
              </option>
            ))}
          </select>
        </>
      )}

      {selectedDuration && data[selectedDuration] && (
        <div>
          <h3>{data[selectedDuration].title}</h3>

          {/* Mediation style: has .tables array */}
          {data[selectedDuration].tables?.map ? (
            data[selectedDuration].tables.map((table, index) => (
              <div key={index} className="overflow-x-auto mb-8">
                <h4>{table.title}</h4>
                <table className="w-full border text-sm">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border px-2 py-1">Wage Bracket</th>
                      {table.headers.map((header, i) => (
                        <th key={i} className="border px-2 py-1">{header}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {table.rows.map((row, i) => (
                      <tr key={i}>
                        <td className="border px-2 py-1 font-medium">{row.bracket}</td>
                        {row.data.map((cell, j) => (
                          <td key={j} className="border px-2 py-1">{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))
          ) : (
            // Counselling style: has .headers and .rows directly
            <div className="overflow-x-auto">
              <table className="w-full border text-sm mb-12">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border px-2 py-1">Sessions</th>
                    {data[selectedDuration].headers.map((header, i) => (
                      <th key={i} className="border px-2 py-1">{header}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {data[selectedDuration].rows.map((row, i) => (
                    <tr key={i}>
                      <td className="border px-2 py-1 font-medium">{row.sessions}</td>
                      {row.data.map((cell, j) => (
                        <td key={j} className="border px-2 py-1">{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default TariffTables;
