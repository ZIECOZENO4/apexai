import React from 'react';

const MyfxbookWidget: React.FC = () => {
  return (
    <div>
      <iframe
        src="https://widgets.myfxbook.com/widgets/market-volatility.html?symbols=8,47,9,10,1234,11,103,12,46,1245,6,13,14,15,17,18,7,2114,19,20,21,22,1246,23,1,1233,107,24,25,4,2872,137,48,1236,1247,2012,2,1863,3240,26,49,27,28,2090,131,5,29,5779,31,34,3,36,37,38,2076,40,41,42,43,45,3005,3473,50,2115,2603,2119,1815,2521,51,5435,5079,1893&type=0"
        width="100%"
        height="150vh"
        frameBorder="0"
      ></iframe>
      </div>
  );
};

export default MyfxbookWidget;
