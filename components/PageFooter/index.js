import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

import{
    Container,
    ContactText,
    ContainerIcons,
} from './styles';

const Footer = () => {
  return (
    <Container>
      <ContactText>
        Contato
      </ContactText>
      <ContactText>
        grupou_contato@gmail.com
      </ContactText>
      <ContainerIcons>
        <View>
            <Image style={styles.IconSocials}
              source={require('../../assets/icones/logo_linkedin.png')}
            />
        </View>
        <View>
            <Image style={styles.IconSocials}
              source={require('../../assets/icones/logo_instagram.png')}
            />
        </View>
        <View>
            <Image style={styles.IconSocials}
              source={require('../../assets/icones/logo_facebook.png')}
            />
        </View>
      </ContainerIcons>
      <Image style={styles.LogoGrupou}
        source={require('../../assets/logo.png')}
      />
    </Container>
  );
}

export default Footer;

const styles = StyleSheet.create({
  LogoGrupou: {
    width: 260,
    height: 80,
  },
  IconSocials: {
    width: 60,
    height: 60,
  },
});
