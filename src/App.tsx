import React from 'react';
import ButtonAnt from './components/General/ButtonAnt';
import DividerAnt from './components/Layout/DividerAnt';
import ParagraphAnt from './components/General/TypographyAnt/ParagraphAnt';
import TextAnt from './components/General/TypographyAnt/TextAnt';
import TitleAnt from './components/General/TypographyAnt/TitleAnt';

interface Props {}

const App: React.FC<Props> = () => {
  return (
    <>
      <ButtonAnt />
      <TitleAnt />
      <ParagraphAnt />
      <TextAnt />
      <DividerAnt />
    </>
  );
};

export default App;
