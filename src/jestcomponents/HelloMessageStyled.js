import React from 'react';
import styled from 'styled-components';

const HelloMessageStyled = (prop) => {
	<Container>Hello {prop.name} </Container>
}
export default HelloMessageStyled;


export const Container = styled.span`
  background: ${props => props.theme.background};
  color: ${props => props.theme.text};
`;

//https://github.com/skidding/react-mock/tree/master/packages/state