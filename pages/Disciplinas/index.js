import React from 'react';
import { SafeAreaView, Image } from 'react-native';
import Footer from '../../components/PageFooter/index';
import ButtonOutline from '../../components/ButtonOutlined/index'

import {
    Scroll,
    Container,
    BoxHalfTop,
    BoxHalfBot,
    ContainerTitleBox,
    TitleBox,
    Title,
    SkillBoxContainer,
    SkillBox,
    SkillBoxText,
    SubTitle,
    SubTitle2
} from './styles';
import PercentageBar from '../../components/ExperienceBar/PercentageBar';

export default function Disciplinas()  {
  return (
     <SafeAreaView>
        <Scroll>
          <Image source={require('../../assets/grafismos/grafismo_background.png')}
              style={{marginTop:200, height:900, width:800, resizeMode:'stretch', position: 'absolute'}}
          />
          <Container>
            <Title>
                Disciplinas
            </Title>
            <BoxHalfTop>
              <ContainerTitleBox>
                <TitleBox>
                    Gestão do Design
                </TitleBox>                
              </ContainerTitleBox>
              <ContainerTitleBox>
                <SubTitle2>Professor(a): Marcelo Alvarenga </SubTitle2>
              </ContainerTitleBox>

              <SubTitle2>Skills </SubTitle2>

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
            </BoxHalfTop>
            <BoxHalfBot>
            <ContainerTitleBox>
                <SubTitle>Atividade ativa </SubTitle>
                <ButtonOutline text = {"Acessar Grupo"}/>
                </ContainerTitleBox>
                <PercentageBar name = {"Tarefas Concluídas"} width = {98}/>
            </BoxHalfBot>

            <BoxHalfTop>
              <ContainerTitleBox>
                <TitleBox>
                    Gestão do Design
                </TitleBox>                
              </ContainerTitleBox>
              <ContainerTitleBox>
                <SubTitle2>Professor(a): Marcelo Alvarenga </SubTitle2>
              </ContainerTitleBox>

              <SubTitle2>Skills </SubTitle2>

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
            </BoxHalfTop>
            <BoxHalfBot>
            <ContainerTitleBox>
                <SubTitle>Atividade ativa </SubTitle>
                <ButtonOutline text = {"Acessar Grupo"}/>
                </ContainerTitleBox>
                <PercentageBar name = {"Tarefas Concluídas"} width = {42}/>
            </BoxHalfBot>

            <BoxHalfTop>
              <ContainerTitleBox>
                <TitleBox>
                    Gestão do Design
                </TitleBox>                
              </ContainerTitleBox>
              <ContainerTitleBox>
                <SubTitle2>Professor(a): Marcelo Alvarenga </SubTitle2>
              </ContainerTitleBox>

              <SubTitle2>Skills </SubTitle2>

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
            </BoxHalfTop>
            <BoxHalfBot>
            <ContainerTitleBox>
                <SubTitle>Atividade ativa </SubTitle>
                <ButtonOutline text = {"Acessar Grupo"}/>
                </ContainerTitleBox>
                <PercentageBar name = {"Tarefas Concluídas"} width = {77}/>
            </BoxHalfBot>

          </Container>
          <Footer />
        </Scroll>
     </SafeAreaView>
  );
}
