import styled from 'styled-components';

export const Container = styled.ScrollView.attrs(() => ({
  horizontal: true,
  contentContainerStyle: {
    marginTop: 20,
    marginBottom: 20,
    paddingLeft: 16,
  },
}))`
  background-color: #1e222b;
`;

export const Option = styled.TouchableOpacity`
  width: 80px;
  margin-right: 16px;
  align-items: center;
`;

export const Image = styled.Image``;

export const Label = styled.Text`
  color: #fff;
  font-weight: bold;
  margin-top: 8px;
  font-size: 14px;
  text-align: center;
`;
