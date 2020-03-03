import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
`;

export const Header = styled.View`
  margin-bottom: 20px;
  align-items: center;
`;

export const Avatar = styled.Image`
  height: 100px;
  width: 100px;
  border-radius: 100px;
`;

export const Name = styled.Text`
  margin-top: 8px;
  font-size: 18px;
  font-weight: bold;
  color: #333;
`;

export const Bio = styled.Text`
  margin-top: 4px;
  font-size: 14px;
  color: #666;
  text-align: center;
`;

export const Loading = styled.ActivityIndicator.attrs({
  color: '#7159c1',
  size: 50,
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const Stars = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;

export const Starred = styled.View`
  background: #f5f5f5;
  padding: 10px 15px;
  flex-direction: row;
  border-radius: 4px;
  margin-bottom: 20px;
  align-items: center;
`;

export const OwnerAvatar = styled.Image`
  height: 42px;
  width: 42px;
  border-radius: 21px;
  background: #eee;
`;

export const Info = styled.View`
  flex: 1;
  margin-left: 10px;
`;

export const Title = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-size: 15px;
  font-weight: bold;
  color: #333;
`;

export const Author = styled.Text`
  font-size: 13px;
  color: #666;
  margin-top: 2px;
`;
