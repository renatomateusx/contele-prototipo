import styled from 'styled-components/native';

export const Container = styled.View`
    background: #f6f8fb;
`;
export const Nothing = styled.View``;
export const Post = styled.View`
    margin-top: 1px;
`;

export const Header = styled.View`
    padding: 15px;
    flex-direction: row;
    align-items: center;
`;
export const HeaderContainer = styled.View`
    flex-direction: row;
`;
export const HeaderDayWeek = styled.View`
    padding: 15px;
    flex-direction: row;
    align-items: center;
`;

export const Month = styled.Text`
    font-size: 27px;
    align-items:center;
    color: #566475;
    font-weight: bold;
    width: 90%
`;
export const IconView =styled.View`
    border-radius: 10px;    
    padding: 2px;    
`;
export const Day = styled.Text`
    font-size: 22px;
    align-items:center;
    color: #b0bcc6;
    font-weight: bold;
`;
export const DayWeek = styled.Text`
    font-size: 12px;
    align-items:center;
    margin-left: 5px;
    bottom: -4px;
    color: #bac5ce;
    
`;

export const Avatar = styled.Image`
    width: 32px;
    height: 32px;
    border-radius: 16px;
    margin-right: 10px;
`;

export const Name = styled.Text`
    font-weight: 600;
`;

export const Description = styled.Text`
    padding: 15px;
    line-height: 18px;
`;

export const Loading = styled.ActivityIndicator.attrs({
    size: 'small',
    color: '#999'
})`
    margin: 30px 0;
`;

export const Footer = styled.View`
    min-height: 150px;
    flex-direction: row;
    background: #dce4f0;
`;
export const TotalFooter = styled.Text`
    font-size: 20px;
    width: 60%;
    color: #9dadb8;
    opacity: 0.6;
    padding: 15px;
    font-weight: bold;
    margin-top: 10px;
`;
export const TotalFooterPriceSimbol = styled.Text`
    font-size: 15px;
    color: #0f3a57;
    opacity: 0.6;
    margin-right: -10px;
    margin-left: 1px;
    margin-top: 30px;
    font-weight: bold;
`;
export const TotalFooterPrice = styled.Text`
    font-size: 30px;    
    color: #0f3a57;
    opacity: 0.6;
    padding: 15px;
    font-weight: bold;
`;

export const ButtonSearch = styled.TouchableOpacity``;