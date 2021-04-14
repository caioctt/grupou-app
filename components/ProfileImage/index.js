import React from "react";
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
