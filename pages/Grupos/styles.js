import styled from 'styled-components/native';

export const Container = styled.View`
    height: auto;
    flex:1;
    flex-direction:column;
    align-items:center;
    padding:20px 15px 40px 15px;
    justify-content: space-around;
`;

export const Box = styled.View`
    width:96%;
    background-color:#fff;
    padding: 25px 25px 20px 30px;
    border-radius: 20px;
    marginBottom: 10px;
    marginTop: 15px;
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
`

export const TitleBox = styled.Text`
    flex:1;
    fontSize: 20px;
    color: black;
`

export const Scroll = styled.ScrollView`
    background-color:#3ca1d6;
`;

export const ImageContainer = styled.View`
    flexWrap: wrap;
    flex-direction:row;
    width: 100%;
`;

export const SubTitle = styled.Text`
    color:#828282;
    marginBottom: 28px;
    fontSize: 18px;
`;

