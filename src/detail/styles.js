import styled from 'styled-components/native';

export const Container = styled.View`
    background: #f6f8fb;    
    margin-top: 0px;
`;
export const Nothing = styled.View``;
export const Post = styled.View`
    margin-top: 1px;
    background: white;
    
`;

export const Header = styled.View`
    padding: 15px;
    flex-direction: row;
    align-items: center;
    background: #dce4f0;    
    elevation: 3;    
    margin-bottom: 0px;    
`;
export const HeaderContainer = styled.View`
    flex-direction: row;
    background: #dce4f0;
    width: 100%;
`;
export const HeaderDayWeek = styled.View`
    padding: 15px;
    margin-bottom: -10px;
    flex-direction: row;
    align-items: center;
    background: white;
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
    color: #657282;
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

export const HeaderTotal = styled.View`
    min-height: 150px;
    flex-direction: row;
    background: #dce4f0;
    margin-top: 0px;
    border: #dce4f0;
    
`;
export const TotalHeader = styled.Text`
    font-size: 20px;    
    color: #9dadb8;
    opacity: 0.6;
    padding: 15px;
    position: absolute;
    right: 5px;
    font-weight: bold;
    margin-top: 50px;
`;
export const TotalHeaderPriceSimbol = styled.Text`
    position: absolute;
    top: -10px;
    font-size: 15px;
    color: #0f3a57;
    opacity: 0.6;
    margin-right: -10px;
    margin-left: 1px;
    margin-top: 0px;
    font-weight: bold;
`;
export const TotalHeaderPrice = styled.Text`
    font-size: 30px;    
    color: #0f3a57;
    opacity: 0.6;
    padding: 15px;
    font-weight: bold;
`;

export const ButtonEdit = styled.TouchableOpacity`    
    position: absolute;
    right: 10px;    
    top: 10px;
`;
export const ButtonBack = styled.TouchableOpacity`
    flex: 1;
    position: absolute;
    left: 5px;
    top: 10px;
`;

export const BoxPrice = styled.View`
    background: white;
    padding: 20px;    
`;

export const MiniBox = styled.View`
    background: white;
    flex-direction: row;
    margin-bottom: 0px;    
    padding: 15px;
`;
export const Price = styled.Text`
    font-size: 18px;
    align-items: center;
    font-weight: bold;
    color: lightgreen;
`;
export const IconViewDollar =styled.View`
    border-radius: 20px;
    border: solid 2px lightgreen;
    padding: 2px;
    margin-right: 10px;
`;

export const TextReturn = styled.Text`        
    padding: 2px;    
    color: lightgreen;
    font-size: 20px;
`;

export const BoxDay = styled.View`
    background: white;
    border-radius: 9px;
    border: lightgrey;
    padding: 10px;
    margin-right: 15px;
    margin-left: 15px;
    flex-direction: row;
`;
export const BoxCalendar = styled.View`    
    margin-left: 10px;
`;
export const BoxIconCalendar = styled.View`    
    margin-top: 5px;
`;
export const CalendarLocal = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: #123d59;
`;
export const CalendarHora = styled.Text`
    font-size: 12px;
    font-weight: 200;
    color: grey;
`;

export const ImageNota = styled.View`
    border-radius: 9px;
    width: 90%;
    height: 200px;
    margin-top: 10px;
    align-items: center;
    align-self: center;
`;

export const ImageNotaSRC = styled.Image`
border-radius: 9px;
    padding: 15px;
    width: 100%;
    height: 100%;
    align-items: center;    
    align-self: center;
`;