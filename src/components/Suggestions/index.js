import React from 'react';

import {Container, Option, Image, Label, LabelContainer} from './styles';
import img1 from '../../images/01.png';
import img2 from '../../images/02.png';
import img3 from '../../images/03.png';
import img4 from '../../images/04.png';
import img5 from '../../images/05.png';
import img6 from '../../images/06.png';
import img7 from '../../images/07.png';
import {View} from 'react-native';

const items = [
  {
    image: img1,
    label: 'Recarga',
  },
  {
    image: img2,
    label: 'Uber',
  },
  {
    image: img3,
    label: 'Ônibus',
  },
  {
    image: img4,
    label: 'TV',
  },
  {
    image: img5,
    label: 'Doações',
  },
  {
    image: img6,
    label: 'Código de Barras',
  },
  {
    image: img7,
    label: 'FAQ',
  },
];

const Suggestions = () => {
  return (
    <Container>
      {items.map((item, index) => (
        <Option key={index}>
          <Image source={item.image} />
          <LabelContainer>
            <Label>{item.label}</Label>
          </LabelContainer>
        </Option>
      ))}
    </Container>
  );
};

export default Suggestions;
