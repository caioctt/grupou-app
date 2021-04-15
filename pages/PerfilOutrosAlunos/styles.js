import styled from 'styled-components/native';

export const Box = styled.View`
    width:96%;
    background-color:#fff;
    padding: 0px 25px 0px 30px;
    border-radius: 20px;
    marginTop: 15px;
`;

export const Box2 = styled.View`
    width:96%;
    background-color:#fff;
    padding: 10px 5px 30px 20px;
    border-radius: 20px;
    marginBottom: 10px;
    marginTop: 15px;
`;

export const ContainerTitleBox = styled.View`
    width: 410px
    flexDirection:row;
    alignItems:flex-start;
    justifyContent: flex-start
    alignSelf:center;
    marginTop: 15px;
    
`
export const ContainerHeader = styled.View`
    width: 410px
    flexDirection:row;
    alignItems:flex-start;
    justifyContent: flex-start
    alignSelf:center;
    marginTop: 30px;
    border-bottom-width:1px;
    border-bottom-color: #a0a0a0 
`

export const SkillBox = styled.View`
    background-color: #279CDB;
    padding: 10px 15px 10px 15px;
    width:auto;
    borderRadius: 5px;
    marginRight: 10px;
    marginBottom: 5px;
    marginTop: 5px;
`;

export const SkillBoxContainer = styled.View`
    flexWrap: wrap;
    flex-direction:row;
    width: 100%;
`;

export const SkillBoxText = styled.Text`
    color: #FFF;
    fontSize: 16px;
    fontWeight: bold;
`;

export const SubTitle = styled.Text`
    color:#828282;
    fontSize: 14px;
`;

export const TitleBox = styled.Text`
    fontSize: 22px;
    color: black;
    alignSelf: flex-start;
    marginLeft: 20px;
    marginBottom:5px;
`
export const TitleBox2 = styled.Text`
    fontSize: 22px;
    color: black;
    alignSelf: flex-start;
    marginLeft: 15px;
    marginBottom:20px;
`

export const SubTitleBox = styled.View`
    width:130px
    alignSelf: flex-start;
    justifyContent: flex-start;
    alignItems:flex-start;
`

export const ProfileImage = styled.Image`
    height: 110px;
    width: 110px;
    marginTop: 20px;
    borderRadius: 55px;
    alignItems:flex-start;
    justifyContent: flex-start;
`;
export const Button = styled.TouchableOpacity`
  width:200px;
  height: 60px;
  background-color: ${props => props.invert ? "#fff" : "#ae1b73"};
  border:1px solid #ae1b73;
  border-radius:5px;
  justify-content:center;
  align-items:center;
  margin-right:${props => props.invert ? "10px" : "0px"};
`

export const ButtonText = styled.Text`
  color:${props => props.invert ? "#ae1b73" : "#fff"};
  font-size:16px;
  font-weight:bold;
`
export const ContainerButtons = styled.View`
  flexDirection:row;
  alignItems: center;
  justifyContent: center;
  margin-top:40px;
`