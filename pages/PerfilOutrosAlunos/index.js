import React from 'react';
import { SafeAreaView, Image, View } from 'react-native';
import PercentageBar from '../../components/ExperienceBar/PercentageBar';

import {
    Scroll,
    Container,
    Box,
    ContainerTitleBox,
    TitleBox,
    Title,
    ImageContainer,
    SubTitle,
    ProfileImage
} from './styles';

export default function PerfilOutrosAlunos()  {
    return (
        <View>
            <Container>
                <ProfileImage source={require('../../assets/profile_3.jpeg')}/>
            </Container>
        </View>
    );
}

