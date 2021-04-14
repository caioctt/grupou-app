import React from 'react';

import {
    ExperienceContainer,
    ExperienceText,
    ExperienceTitle,
    ExperienceLine,
    Bar,
} from './styles';

export default function ExperienceBar(props) {
    return(
        <ExperienceContainer>
            <ExperienceTitle>
                {props.name}
            </ExperienceTitle>
                <ExperienceLine>
                    <Bar width={props.width*10 * 90/100} />
                    <ExperienceText>
                        {props.width}
                    </ExperienceText>
                </ExperienceLine>
        </ExperienceContainer>
    )
}