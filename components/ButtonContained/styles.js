import styled from 'styled-components/native';

const TouchableOpacity = styled.TouchableOpacity`
  background: #a61967;
  justify-content: center;
  align-items: center;
  border-radius: 4px;

  border-radius: 5px;
  justify-content: center;
  align-items: center;

  flex: 1;
  height: 60px;
  margin: 8px;

  margin-right: ${(props) => props.marginRight};
`;

const Text = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: 700;
`;