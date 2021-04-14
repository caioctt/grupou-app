import styled from 'styled-components/native';


export const ExperienceContainer = styled.View`
    flex-direction: column;
    marginBottom:15px;
`;

export const ExperienceLine = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const Bar = styled.View`
    background-color: #e42d6b;
    width: ${props => props.width}%;
    height: 10px;
    borderRadius: 5px;
`;

export const ExperienceText = styled.Text`
    marginLeft: 10px;
    color: #e42d6b;
`;

export const ExperienceTitle = styled.Text`
    color:#828282;
    marginBottom: 5px;
    fontSize: 17px;
`;


// Percentage BAR

export const PercentageContainer = styled.View`
    flex-direction: column;
    marginBottom:15px;
`;

export const PercentageLine = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const YellowBar = styled.View`
    background-color: #f5931e;
    width: ${props => props.width-8}%;
    height: 10px;
    borderRadius: 5px;
`;

export const PercentageText = styled.Text`
    marginLeft: 10px;
    color: #f5931e;
`;

export const PercentageTitle = styled.Text`
    color:#828282;
    marginBottom: 5px;
    fontSize: 15px;
`;
