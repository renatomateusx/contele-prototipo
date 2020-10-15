import React, { useEffect, useState } from 'react';
import {
    Container, Box, Header, Body, MiniBox, Price,
    IconView, TopBox, BoxPrice, IconViewDollar, ButtonAction
} from './styles';
import { ScrollView, FlatList } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DetailSpend from '../detail';
import { navigation } from '../navigation';
import { NavigationActions } from 'react-navigation';
import IconDollar from 'react-native-vector-icons/Feather';
Icon.loadFont();
IconDollar.loadFont();
export default function LazyGrid({
    navigation,
    title,
    type,
    price,
    anulled
}) {

    useEffect(() => {
        console.log(navigation);
    });

    const onPress = () => {
        navigation.navigate('Detail');
    }


    return (
        <Container anulled={anulled}>
            <ButtonAction anulled={anulled}
                onPress={onPress}
            >
                <TopBox anulled={anulled}>
                    <Box>
                        <Header anulled={anulled}>{title}</Header>
                        <MiniBox>
                            <IconView><Icon name="restaurant" size={15} color="#9dadb8" /></IconView>
                            <Body>{type}</Body>
                        </MiniBox>
                    </Box>
                    <BoxPrice>
                        <MiniBox>
                            {price.length > 0 && (<IconViewDollar><IconDollar name="dollar-sign" size={20} color={anulled ? 'grey' : '#44db81'} /></IconViewDollar>)}
                            <Price>{price}</Price>
                        </MiniBox>

                    </BoxPrice>
                </TopBox>
            </ButtonAction>
        </Container>
    );
}