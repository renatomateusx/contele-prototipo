import React, { useState, useEffect, useCallback } from 'react';
import { FlatList } from 'react-native';
import LazyGrid from '../components';
import {
    Container, Post, Header, Loading, Month, Day, HeaderDayWeek, DayWeek, HeaderContainer,
    IconView, HeaderTotal, TotalHeader, TotalHeaderPrice, TotalHeaderPriceSimbol, ButtonEdit,
    ButtonBack, MiniBox, Price, IconViewDollar, BoxDay, BoxCalendar, BoxIconCalendar,
    CalendarLocal, CalendarHora, ImageNota, ImageNotaSRC
} from './styles';
import * as dataJSON from '../../server.json';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconFont from 'react-native-vector-icons/MaterialCommunityIcons';
import IconDollar from 'react-native-vector-icons/Feather';

Icon.loadFont();
IconFont.loadFont();
IconDollar.loadFont();

export default function DetailSpend({ navigation }) {
    const [feed, setFeed] = useState([]);
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(0);
    const [viewable, setViewable] = useState([]);
    const [loading, setLoading] = useState(false);
    const [refreshing, setRefreshing] = useState(false);

    async function loadPage(pageNumber = page, shouldRefresh = false) {
        if (loading) return;
        setLoading(true);
        const response = await dataJSON;
        const data = await dataJSON.default.feed;
        console.log(data);
        setLoading(false);

        setFeed(shouldRefresh ? data : [feed, data]);
    }

    async function refreshList() {
        setRefreshing(true);
        await loadPage(1, true);
        setRefreshing(false);
    }

    useEffect(() => {
        loadPage();
    }, []);

    const handleViewableChanged = useCallback(({ changed }) => {
        setViewable(changed.map(({ item }) => item.id));
    }, []);

    const backButton = () => {
        navigation.navigate('Contele');
    }

    return (
        <Container>
            <ScrollView>
                <Post>
                    {/* <Header>
                        <HeaderContainer>
                            <ButtonBack onPress={backButton}>
                                <IconView><Icon name="arrow-back" size={30} color="gray" /></IconView>
                            </ButtonBack>
                            <ButtonEdit>
                                <IconView><Icon name="edit" size={30} color="gray" /></IconView>
                            </ButtonEdit>
                        </HeaderContainer>
                    </Header> */}
                    <HeaderTotal>
                        <HeaderContainer>
                            <ButtonBack onPress={backButton}>
                                <IconView><Icon name="arrow-back" size={30} color="gray" /></IconView>
                            </ButtonBack>
                            <ButtonEdit>
                                <IconView><Icon name="edit" size={30} color="gray" /></IconView>
                            </ButtonEdit>
                        </HeaderContainer>
                        <TotalHeader>
                            <TotalHeaderPriceSimbol>
                                R$
                            </TotalHeaderPriceSimbol>
                            <TotalHeaderPrice>
                                26,00
                            </TotalHeaderPrice>
                        </TotalHeader>
                    </HeaderTotal>

                </Post>
                <Post>
                    <HeaderDayWeek>
                        <IconFont name="calendar-blank" size={30} color="gray" /><Day>14/09/19</Day>
                    </HeaderDayWeek>
                    <LazyGrid
                        title="Almoço Restaurante"
                        type="Alimentação"
                        price=""
                    />
                    <MiniBox>
                        <IconViewDollar><IconDollar name="dollar-sign" size={20} color="#44db81" /></IconViewDollar>
                        <Price>Reembolsável</Price>
                    </MiniBox>
                    <BoxDay>
                        <BoxIconCalendar><IconFont name="calendar-check" size={30} color="grey" /></BoxIconCalendar>
                        <BoxCalendar>
                            <CalendarLocal>Contele Filial de Santos - SP</CalendarLocal>
                            <CalendarHora>14/09/19 - 13h50</CalendarHora>
                        </BoxCalendar>
                    </BoxDay>
                </Post>
                <ImageNota>
                    <ImageNotaSRC
                        source={require('../../assets/nf.jpg')}
                    />
                </ImageNota>

            </ScrollView>

        </Container>
    );
}