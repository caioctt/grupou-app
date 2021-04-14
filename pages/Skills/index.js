import React from 'react';
import { SafeAreaView, Image } from 'react-native';
import ExperienceBar from '../../components/ExperienceBar/index';
import Footer from '../../components/PageFooter/index';
import ButtonOutline from '../../components/ButtonOutlined/index'

import {
    Scroll,
    Container,
    Box,
    ContainerTitleBox,
    TitleBox,
    Title,
    SkillBoxContainer,
    SkillBox,
    SkillBoxText,
} from './styles';

export default function Skill()  {
  return (
     <SafeAreaView>
        <Scroll>
          <Image source={require('../../assets/grafismos/grafismo_background.png')}
              style={{marginTop:200, height:900, width:800, resizeMode:'stretch', position: 'absolute'}}
          />
          <Container>
            <Title>
              Skills
            </Title>
            <Box>
              <ContainerTitleBox>
                <TitleBox>
                    Minhas hard skills
                </TitleBox>
                <ButtonOutline text = {"Editar"}/>
              </ContainerTitleBox>
              <ExperienceBar name = {"HTML"} width = {9.2}/>
              <ExperienceBar name = {"Prototipação"} width = {8.8}/>
              <ExperienceBar name = {"HTML"} width = {9.2}/>
              <ExperienceBar name = {"Prototipação"} width = {9}/>
              <ExperienceBar name = {"HTML"} width = {9.5}/>
              <ExperienceBar name = {"Prototipação"} width = {8}/>
              <ExperienceBar name = {"HTML"} width = {7.1}/>
              <ExperienceBar name = {"Prototipação"} width = {5}/>
            </Box>
            <Box>
              <ContainerTitleBox>
                <TitleBox>
                    Minhas soft skills
                </TitleBox>
                <ButtonOutline text = {"Editar"}/>
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
              </SkillBoxContainer>
            </Box>
            <Box>
              <ContainerTitleBox>
                <TitleBox>
                    Minhas hard skills de interesse
                </TitleBox>
                <ButtonOutline text = {"Editar"}/>
              </ContainerTitleBox>
              <SkillBoxContainer>
                <SkillBox>
                    <SkillBoxText>
                        C#
                    </SkillBoxText>
                </SkillBox>
                <SkillBox>
                    <SkillBoxText>
                        Ilustração
                    </SkillBoxText>
                </SkillBox>
                <SkillBox>
                    <SkillBoxText>
                        Vetorização
                    </SkillBoxText>
                </SkillBox>
                <SkillBox>
                    <SkillBoxText>
                        Manipulação de Imagens
                    </SkillBoxText>
                </SkillBox>
                <SkillBox>
                    <SkillBoxText>
                        C++
                    </SkillBoxText>
                </SkillBox>
                <SkillBox>
                    <SkillBoxText>
                        HTML
                    </SkillBoxText>
                </SkillBox>
                <SkillBox>
                    <SkillBoxText>
                        Prototipagem
                    </SkillBoxText>
                </SkillBox>
              </SkillBoxContainer>
            </Box>
          </Container>
          <Footer />
        </Scroll>
     </SafeAreaView>
  );
}
