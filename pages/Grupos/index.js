import React from 'react';
import { SafeAreaView, Image } from 'react-native';
import PercentageBar from '../../components/ExperienceBar/PercentageBar';
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

export default function Grupos()  {
  return (
     <SafeAreaView>
        <Scroll>
          <Image source={require('../../assets/grafismos/grafismo_background.png')}
              style={{marginTop:200, height:900, width:800, resizeMode:'stretch', position: 'absolute'}}
          />
          <Container>
            <Title>
              Grupos
            </Title>
            <Box>
              <ContainerTitleBox>
                <TitleBox>
                   Gestão do Design
                </TitleBox>
                <ButtonOutline text = {"Ver mais"}/>
              </ContainerTitleBox>
              <>
                  <Image source={require('../../assets/icones/faces_avaliacao/icone_face_1.png')}></Image>
              </>
              <PercentageBar name = {"Tarefas Concluídas"} width = {98}/>
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
