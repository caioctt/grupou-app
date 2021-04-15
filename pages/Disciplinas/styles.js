import styled from 'styled-components/native';

export const Container = styled.View`
    height: auto;
    flex:1;
    flex-direction:column;
    align-items:center;
    padding:20px 15px 40px 15px;
    justify-content: space-around;
`;
export const BoxHalfTop = styled.View`
    width:96%;
    background-color:#fff;
    padding: 25px 25px 20px 30px;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    marginTop: 15px;
`;

export const BoxHalfBot = styled.View`
    width:96%;
    background-color:#eff1f5;
    padding: 10px 25px 20px 30px;
    border-bottom-right-radius: 20px;
    border-bottom-left-radius: 20px;
    marginBottom: 10px;
`;

export const Title = styled.Text`
    fontSize: 33px;
    color: #fff;
    alignSelf: flex-start;
    marginTop: 15px;
    marginBottom: 10px;
    marginLeft: 30px;
    fontWeight: bold;
`
export const ContainerTitleBox = styled.View`
    width:100%;
    flex-direction:row;
    align-items:center;
    justifyContent:space-between;
    marginBottom: 10px;
`

export const TitleBox = styled.Text`
    flex:1;
    fontSize: 20px;
    color: black;
`

export const Scroll = styled.ScrollView`
    background-color:#3ca1d6;
`;


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
    marginBottom: 28px;
    fontSize: 18px;
    alignSelf: flex-start;
    marginTop: 15px;
    marginBottom: 20px;
`;

export const SubTitle2 = styled.Text`
    color:#828282;
    fontSize: 16px;
    alignSelf: flex-start;
    marginBottom: 15px;
`;
