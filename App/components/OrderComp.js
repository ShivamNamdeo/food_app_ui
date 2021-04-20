import React from 'react'
import {View,Text,ScrollView} from "react-native";
import {HomeFlex,HeaderTop,HeaderButton,HeaderHeading,SearchInput,Row,OrderBox,OrderButton,OrderRow,CaloriesText,OrderSubTitle, DetailsBox,PriceText,FoundText,DataBox,OrderImg,ItemFood,SubTitle,Title} from "../styles/Styles"
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Feather from 'react-native-vector-icons/Feather';

function OrderComp({route,navigation}) {

	const {item} = route.params;

	return (



		<HomeFlex>

			<HeaderTop>
				<HeaderButton onPress={()=>navigation.goBack()}>
				 <Ionicons name="chevron-back" size={30} color="#000" />
				</HeaderButton>

				<HeaderHeading>Order Food</HeaderHeading>

				<HeaderButton>
				 <Feather name="shopping-bag" size={30} color="#000" />
				</HeaderButton>


			</HeaderTop>
			
				<OrderImg source={{uri:item.img}}/>


			<Row>

				 <AntDesign name="minus" size={25} color="#000" />
				 <HeaderHeading>1</HeaderHeading>
				 <AntDesign name="plus" size={25} color="#000" />
			</Row>


			<OrderBox>


			<HeaderTop>
				<HeaderHeading>{item.title}</HeaderHeading>
				<PriceText>{item.price}</PriceText>

			</HeaderTop>

			


			<DetailsBox>
				<HeaderHeading>Details</HeaderHeading>
				<OrderSubTitle>{item.subtitle}</OrderSubTitle>
				<OrderSubTitle>{item.details}</OrderSubTitle>


			</DetailsBox>


			<HeaderTop>
				<CaloriesText>{item.calories} Calories</CaloriesText>
				<Row style={{backgroundColor:"#fff",width:"25%"}}>
					<Title>{item.rating}</Title>
					 <Ionicons name="star" size={20} color="#F9D71C" />
				</Row>
			</HeaderTop>


			</OrderBox>

			<OrderButton>
				<Title style={{color:"#fff"}}>Order Now</Title>

			</OrderButton>

		</HomeFlex>
	)
}

export default OrderComp;