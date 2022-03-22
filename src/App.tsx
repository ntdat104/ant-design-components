import React from 'react';
import AutoCompleteAntd from './components/AntDesign/AutoCompleteAntd';
import ConfirmModalAntd from './components/AntDesign/ConfirmModalAntd';

interface Props {}

const App: React.FC<Props> = () => {
  return (
    <div style={{ margin: `40px` }}>
      <AutoCompleteAntd onSelect={(value: any) => console.log(value)} />
      <ConfirmModalAntd visible={true} title={`Test`}>
        <p>{`abcabcabcabcabcbacbacb`}</p>
      </ConfirmModalAntd>
    </div>
  );
};

export default App;
