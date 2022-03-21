import React from 'react';
import SelectModule from '@/modules/SelectModule';

interface Props {}

const App: React.FC<Props> = () => {
  // const handleSelect = (value: any) => {
  //   console.log(value);
  // };

  return (
    <div style={{ margin: `40px` }}>
      {/* <ButtonModule /> */}
      {/* <div style={{ maxWidth: 500 }}>
        <AutoCompleteModule onSelect={handleSelect} />
      </div> */}
      {/* <div style={{ maxWidth: 400 }}>
        <InputModule />
      </div> */}
      <div style={{ width: 240 }}>
        <SelectModule />
      </div>
    </div>
  );
};

export default App;
