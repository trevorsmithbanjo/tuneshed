import React from 'react';
import logo from './logo.svg';
import { AppContainer, Heading, Box, BodyText } from './App.styles';

const App = () => {
  return (
    <AppContainer>
      <Heading>Hello world!</Heading>
      <Box>
        <BodyText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur,
          cupiditate perferendis accusamus exercitationem, ipsa numquam iure
          reprehenderit ut similique quos tenetur assumenda, velit consectetur
          sapiente cum. Aspernatur consectetur dolores accusantium.
        </BodyText>
      </Box>
    </AppContainer>
  );
};

export default App;
