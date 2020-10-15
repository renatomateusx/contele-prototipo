import React, { useState, useEffect, useCallback } from 'react';
import { FlatList } from 'react-native';
import LazyImage from '../components';
import { Container, Post, Header, Avatar, Name, Description, Loading } from './styles';
import * as dataJSON from '../../server.json';
export default function Feed() {
    const [feed, setFeed] = useState([]);
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(0);
    const [viewable, setViewable] = useState([]);
    const [loading, setLoading] = useState(false);
    const [refreshing, setRefreshing] = useState(false);
    
    async function loadPage(pageNumber = page, shouldRefresh = false) {
        if (pageNumber === total) return;
        if (loading) return;

        setLoading(true);

        const response = dataJSON;        
        const totalItems = response.feed.length;
        const data = await response.feed;
        console.log(data);
        setLoading(false);
        setTotal(Math.floor(totalItems / 4));
        setPage(pageNumber + 1);

        setFeed(shouldRefresh ? data : [...feed, ...data]);
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
    },[]);

    return (
        <Container>
            <FlatList
                key="list"
                data={feed}
                keyExtractor={item => String(item.id)}
                onViewableItemsChanged={handleViewableChanged.current}
                viewabilityConfig={{
                    viewAreaCoveragePercentThreshold: 10,
                }}
                showsVerticalScrollIndicator={false}
                onRefresh={refreshList}
                refreshing={refreshing}
                onEndReachedThreshold={0.7} //Quando ler um percentual daquele componente (image, no caso) ele irá trocar o blur pela imagem carregada
                onEndReached={() => loadPage()}
                ListFooterComponent={loading && <Loading />}
                renderItem={({ item }) => (
                    <Post>
                        <Header>
                            <Avatar source={{ uri: item.author.avatar }} />
                            <Name>{item.author.name}</Name>
                        </Header>

                        <LazyImage
                            aspectRatio={item.aspectRatio}
                            shouldLoad={true}
                            smallSource={{ uri: item.small }}
                            source={{ uri: item.image }}
                        />

                        <Description>
                            <Name>{item.author.name}</Name> {item.description}
                        </Description>
                    </Post>
                )}
            />
        </Container>
    );
}