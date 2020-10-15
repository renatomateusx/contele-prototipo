import React, { useState, useEffect, useCallback } from 'react';
import { FlatList } from 'react-native';
import LazyGrid from '../components';
import { Container, Post, Header, Loading, Month, Day, HeaderDayWeek, DayWeek, HeaderContainer, 
    IconView, Footer, TotalFooter, TotalFooterPrice, TotalFooterPriceSimbol, ButtonSearch } from './styles';
import * as dataJSON from '../../server.json';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconFont from 'react-native-vector-icons/Fontisto';

Icon.loadFont();

export default function Feed({navigation}) {
    const [feed, setFeed] = useState([]);
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(0);
    const [viewable, setViewable] = useState([]);
    const [loading, setLoading] = useState(false);
    const [refreshing, setRefreshing] = useState(false);

    async function loadPage(pageNumber = page, shouldRefresh = false) {
        if (loading) return;
        setLoading(true);        
        const data = await dataJSON.default.feed;        
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

    return (
        <Container>
            <ScrollView>
                <Post>
                    <Header>
                        <HeaderContainer>
                            <Month>Setembro</Month>
                            <ButtonSearch>
                                <IconView><Icon name="search" size={30} color="gray" /></IconView>
                            </ButtonSearch>
                        </HeaderContainer>
                    </Header>
                    <HeaderDayWeek>
                        <Day>22</Day><DayWeek>SEXTA</DayWeek>
                    </HeaderDayWeek>
                    <LazyGrid
                        navigation={navigation}
                        title="Almoço Restaurante"
                        type="Alimentação"
                        price="26,00"
                    />
                    <LazyGrid
                        navigation={navigation}
                        title="Almoço Restaurante"
                        type="Alimentação"
                        price="326,00"
                    />
                </Post>

                <Post>
                    <HeaderDayWeek>
                        <Day>20</Day><DayWeek>QUARTA</DayWeek>
                    </HeaderDayWeek>
                    <LazyGrid
                        navigation={navigation}
                        title="Almoço Restaurante"
                        type="Alimentação"
                        price="26,00"
                        anulled="true"
                    />
                    <LazyGrid
                        navigation={navigation}
                        title="Almoço Restaurante"
                        type="Alimentação"
                        price="26,00"
                    />
                </Post>

                <Post>
                    <HeaderDayWeek>
                        <Day>14</Day><DayWeek>SEGUNDA</DayWeek>
                    </HeaderDayWeek>
                    <LazyGrid
                        navigation={navigation}
                        title="Almoço Restaurante"
                        type="Alimentação"
                        price="26,00"
                    />
                </Post>
                <Footer>
                    <TotalFooter>
                        TOTAL
                </TotalFooter>
                    <TotalFooterPriceSimbol>
                        R$
                    </TotalFooterPriceSimbol>
                    <TotalFooterPrice>
                        490,00
                </TotalFooterPrice>
                </Footer>
            </ScrollView>

        </Container>
    );
}