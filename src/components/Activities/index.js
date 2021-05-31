import React from 'react';
import {Feather, MaterialCommunityIcons, AntDesign} from '@expo/vector-icons';

import {
  Container,
  Header,
  Title,
  Card,
  CardHeader,
  CardBody,
  Avatar,
  Description,
  Bold,
  UserName,
  CardFooter,
  Details,
  Value,
  Divider,
  Date,
  Actions,
  Option,
  OptionLabel,
} from './styles';
import avatar from '../../images/avatar.png';

const options = [
  {
    lib: MaterialCommunityIcons,
    name: 'comment-outline',
    label: 0,
  },
  {
    lib: AntDesign,
    name: 'hearto',
    label: 0,
  },
];

const Activities = () => {
  return (
    <Container>
      <Header>
        <Title>Atividades</Title>
      </Header>

      <Card>
        <CardHeader>
          <Avatar source={avatar} />
          <Description>
            <Bold>Você</Bold> pagou o <Bold>@RogerBacon</Bold>
          </Description>
        </CardHeader>

        <CardBody>
          <UserName>Rogério Romualdo</UserName>
        </CardBody>

        <CardFooter>
          <Details>
            <Value>R$ 18,00</Value>

            <Divider />

            <Feather name="lock" color="#fff" />
            <Date>Há 2 anos</Date>
          </Details>

          <Actions>
            {options.map((options, index) => {
              const Icon = options.lib;

              return (
                <Option key={index}>
                  <Icon name={options.name} color="#fff" />
                  <OptionLabel>{options.label}</OptionLabel>
                </Option>
              );
            })}
          </Actions>
        </CardFooter>
      </Card>
    </Container>
  );
};

export default Activities;
