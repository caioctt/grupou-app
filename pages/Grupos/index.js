import React from 'react';
import { SafeAreaView, Image } from 'react-native';
import PercentageBar from '../../components/ExperienceBar/PercentageBar';
import Footer from '../../components/PageFooter/index';
import ButtonOutline from '../../components/ButtonOutlined/index'
import ProfilePic from '../../components/ProfileImage/index';

import {
    Scroll,
    Container,
    Box,
    ContainerTitleBox,
    TitleBox,
    Title,
    ImageContainer,
    SubTitle
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
              <SubTitle> AV1 </SubTitle>
              <ImageContainer>
                  <ProfilePic img={require('../../assets/profile_1.jpeg')}/>
                  <ProfilePic img={require('../../assets/profile_2.jpeg')}/>
                  <ProfilePic img={require('../../assets/profile_3.jpeg')}/>
                  <ProfilePic img={require('../../assets/profile_4.jpeg')}/>
                  <ProfilePic img={require('../../assets/profile_5.jpg')}/>
              </ImageContainer>
              <PercentageBar name = {"Tarefas Concluídas"} width = {98}/>
            </Box>

            <Box>
              <ContainerTitleBox>
                <TitleBox>
                   Fotografia
                </TitleBox>
                <ButtonOutline text = {"Ver mais"}/>
              </ContainerTitleBox>
              <SubTitle> AV1 </SubTitle>
              <ImageContainer>
                  <ProfilePic img={require('../../assets/profile_1.jpeg')}/>
                  <ProfilePic img={require('../../assets/profile_2.jpeg')}/>
                  <ProfilePic img={require('../../assets/profile_3.jpeg')}/>
                  <ProfilePic img={require('../../assets/profile_4.jpeg')}/>
                  <ProfilePic img={require('../../assets/profile_5.jpg')}/>
              </ImageContainer>
              <PercentageBar name = {"Tarefas Concluídas"} width = {65}/>
            </Box>

            <Box>
              <ContainerTitleBox>
                <TitleBox>
                   Webdesign
                </TitleBox>
                <ButtonOutline text = {"Ver mais"}/>
              </ContainerTitleBox>
              <SubTitle> AV1 </SubTitle>
              <ImageContainer>
                  <ProfilePic img={require('../../assets/profile_1.jpeg')}/>
                  <ProfilePic img={require('../../assets/profile_2.jpeg')}/>
                  <ProfilePic img={require('../../assets/profile_3.jpeg')}/>
                  <ProfilePic img={require('../../assets/profile_4.jpeg')}/>
                  <ProfilePic img={require('../../assets/profile_5.jpg')}/>
              </ImageContainer>
              <PercentageBar name = {"Tarefas Concluídas"} width = {82}/>
            </Box>
            
          </Container>
          <Footer />
        </Scroll>
     </SafeAreaView>
  );
}