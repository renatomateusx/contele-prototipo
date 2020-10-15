import styled from 'styled-components/native';
import {Animated} from 'react-native';
export const Container = styled.View`
`;
export const Small = styled.ImageBackground`
    width: 100%;
    background: #eee;    
`;
export const Original = styled.Image`
    width: 100%;    
`;

export const TopBox = styled.View`
    flex-direction: row;
    background: white;
    padding: 5px;    
    shadow-radius: 5px;
    shadow-color: black;
    shadow-offset: 1px 1px;
    opacity: ${props => props.anulled ? '0.5' : '1'}
`;

export const Box = styled.View`
    background: white;
    padding: 10px;
    width: 70%;    
`;
export const BoxPrice = styled.View`
    background: white;
    padding: 20px;
    width: 30%;
`;

export const MiniBox = styled.View`
    flex-direction: row;
    margin-bottom: -10px;
`;
export const Header = styled.Text`
    font-size: 18px;
    color: black;
    flex-direction: row;
    align-items: center;    
    text-decoration: ${props => props.anulled ? 'line-through' : 'none'}
    margin-bottom: 0px;
    margin-top: -10px;
`;
export const Body = styled.Text`
    font-size: 16px;
    align-items: center;
    flex-direction: row;
    margin-left: 5px;
    color: grey;
`;
export const Price = styled.Text`
    font-size: 18px;
    align-items: center;
    font-weight: bold;
    color: #6d6d6d;
`;

export const IconView =styled.View`
    border-radius: 10px;
    border: gray;
    padding: 2px;
`;
export const IconViewDollar =styled.View`
    border-radius: 20px;
    border: solid 2px ${props => props.anulled == true ? 'grey' : 'lightgreen'};
    padding: 2px;
    margin-right: 10px;
`;


export const ButtonAction = styled.TouchableOpacity`
    margin-top: 10px;    
`;


