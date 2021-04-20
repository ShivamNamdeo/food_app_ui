import styled from "styled-components";

export const HomeFlex = styled.View`
	flex:1;
	background-color:#f8f8f8;
	
`;

export const HeaderTop = styled.View`
	flex-direction:row;
	justify-content:space-between;
	align-items:center;
	padding:16px;
`;

export const SearchTop = styled.View`
	flex-direction:row;
	justify-content:space-between;
	align-items:center;
	padding:12px;
	background-color:#f0f3f5;
	align-self:center;
	border-radius:33px;
	flex:1;
	margin-right:10px;
`;





export const HeaderButton = styled.TouchableOpacity`
	padding:16px;
	background-color:#fff;
	border-radius:20px;
`;

export const HeaderHeading= styled.Text`
	color:#444;
	font-size:20px;
	font-family:Poppins-Bold;
`;

export const SearchInput = styled.TextInput`
	padding:8px;
	background-color:#f0f3f5;
	border-radius:25px;
	flex:1;
	color:#000;
	font-family:Poppins-Regular;
`;

export const FoundText = styled.Text`
	padding-left:20px;
	color:#444;
	font-size:30px;
	font-family:Poppins-Bold;
`;

export const DataBox = styled.View`
	flex:1;
	flex-direction:row;
	flex-wrap:wrap;
	align-items:flex-start;
	padding:12px;
`;

export const ItemFood = styled.TouchableOpacity`
	padding:12px;
	align-items:center;	
	width:50%;
	background-color:#fff;
	border-width:2px;
	border-color:#f0f3f5;
	border-radius:30px;
`;


export const Title = styled.Text`
	color:#444;
	font-size:16px;
	font-family:Poppins-Bold;
	text-align:center;
`;

export const SubTitle = styled.Text`
	color:#666;
	font-size:14px;
	font-family:Poppins-Medium;
	text-align:center;
`;


export const Img = styled.Image`
	width:130px;
	height:130px;
	border-radius:33px;
`;

export const PriceText = styled.Text`
	color:#666;
	font-size:18px;
	font-family:Poppins-Medium;
	text-align:center;
`;

export const CaloriesText = styled.Text`
	color:#F9D71C;
	font-size:18px;
	font-family:Poppins-Medium;
	text-align:center;
`;

export const OrderImg = styled.Image`
	width:150px;
	height:150px;
	border-radius:33px;
	align-self:center;
`;

export const Row = styled.View`
	flex-direction:row;
	align-items:center;
	align-self:center;
	justify-content:space-between;
	background-color:#F9D71C;
	padding:4px;
	border-radius:25px;
	width:30%;
`;

export const OrderRow = styled.View`
	flex-direction:row;
	justify-content:center;
	align-items:center;

`;

export const DetailsBox = styled.View`
	padding:8px;
	align-items:flex-start;
`;

export const OrderSubTitle = styled.Text`
	color:#666;
	font-size:14px;
	font-family:Poppins-Regular;
`;

export const OrderBox = styled.View`
	background-color:#fff;
	padding:10px;
	margin:4px;
	border-radius:30px;
`;

export const OrderButton =styled.View`
	padding:10px;
	padding-left:16px;
	padding-right:16px;

	background-color:#F9D71C;
	align-self:flex-end;
	border-radius:33px;
	margin:5px;
`;