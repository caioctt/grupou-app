import React from "react";
import image from "../../assets/profile_1.jpeg"
import {
    ImageAvatar,
    Container
} from "./styles"
  
 export default function ProfilePic(props) {
    return (
      <Container>
        <ImageAvatar source={props.img}/>
      </Container>
    );
  };
