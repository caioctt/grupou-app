import React from "react";
import { Botao, BotaoTexto } from "./styles";

const ButtonOutline = ({ text }) => {
  return (
                <Botao>
                    <BotaoTexto>
                        {text}
                    </BotaoTexto>
                </Botao>
  );
};

export default ButtonOutline;


