import React, { useState } from 'react';

import {
    PercentageContainer,
    PercentageText,
    PercentageTitle,
    PercentageLine,
    YellowBar,
} from './styles';

export default function PercentageBar(props) {
    return(
        <PercentageContainer>
            <PercentageTitle>
                {props.name}
            </PercentageTitle>
                <PercentageLine>
                    <YellowBar width={props.width} />
                    <PercentageText>
                        {props.width+"%"}
                    </PercentageText>
                </PercentageLine>
        </PercentageContainer>
    )
}