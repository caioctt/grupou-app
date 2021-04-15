import React from 'react';
import { SafeAreaView, Image, View } from 'react-native';
import ButtonOutline from '../../components/ButtonOutlined';
import ExperienceBar from '../../components/ExperienceBar/index';

import {
    Box,
    Box2,
    ContainerTitleBox,
    ContainerHeader,
    TitleBox,
    TitleBox2,
    SubTitleBox,
    SubTitle,
    ProfileImage,
    SkillBoxContainer,
    SkillBox,
    SkillBoxText,
    Button,
    ButtonText,
    ContainerButtons
} from './styles';

export default function PerfilOutrosAlunos()  {
    return (
        <SafeAreaView>

            <ContainerHeader>
                <ProfileImage source={require('../../assets/profile_3.jpeg')}/>
                <Box2>
                    <ContainerTitleBox>
                        <TitleBox>
                            Gabriela Silva
                        </TitleBox>
                    </ContainerTitleBox>
                    <SubTitleBox>
                        <SubTitle>Está no seu grupo de Gestão do Design </SubTitle>
                    </SubTitleBox>
                </Box2>   
            </ContainerHeader>

            <Box>
              <ContainerTitleBox>
                <TitleBox2>
                    Hard skills
                </TitleBox2>
              </ContainerTitleBox>
                <ExperienceBar name = {"HTML"} width = {9.2}/>
                <ExperienceBar name = {"Prototipação"} width = {8.8}/>
                <ExperienceBar name = {"HTML"} width = {9.2}/>
                <ExperienceBar name = {"Prototipação"} width = {9}/>
            </Box>
            <Box>
              <ContainerTitleBox>
                <TitleBox>
                    Soft skills
                </TitleBox>
              </ContainerTitleBox>
              <SkillBoxContainer>
                <SkillBox>
                    <SkillBoxText>
                        Liderança
                    </SkillBoxText>
                </SkillBox>
                <SkillBox>
                    <SkillBoxText>
                        Empatia
                    </SkillBoxText>
                </SkillBox>
                <SkillBox>
                    <SkillBoxText>
                        Gestão de Conflitos
                    </SkillBoxText>
                </SkillBox>
                <SkillBox>
                    <SkillBoxText>
                        Comunicação
                    </SkillBoxText>
                </SkillBox>
              </SkillBoxContainer>
            </Box>
            <ContainerButtons>
                <Button
                onPress={() => { handleSignIn() }}
                >
                <ButtonText>Entrar</ButtonText>
                </Button>
            </ContainerButtons>
        </SafeAreaView>
    );
}

