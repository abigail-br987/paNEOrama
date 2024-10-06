interface DataItem {
    [key: number]: string | number | undefined;
  }
  
  interface Data {
    data: DataItem[];
  }
  
  export const formatData = (data: Data | null): JSX.Element[] | null => {
    if (!data?.data) return null;
  
    return data.data.map((item, index) => (
      <tr
        key={index}
        className={`border border-gray-300 ${index % 2 === 0 ? 'bg-gray-100 bg-opacity-80' : 'bg-white bg-opacity-80'}`}
      >
        {[1, 2, 3, 5, 6, 7, 8, 9].map(key => (
          <td key={key} className="px-4 py-1 border border-gray-300">
            {item[key]}
          </td>
        ))}
      </tr>
    ));
  };
  
  export const headers = [
    'Full Name',
    'Rise Time (UT)',
    'Transit Time (UT)',
    'Max.time observable (hh:mm)',
    'Set Time (UT)',
    'Right Ascension (apparent)',
    'Declination (apparent)',
    'Visual Magnitude',
  ];
  