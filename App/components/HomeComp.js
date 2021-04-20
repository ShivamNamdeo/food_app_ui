import React from 'react'
import {View,Text,ScrollView,StatusBar} from "react-native";
import {HomeFlex,HeaderTop,HeaderButton,HeaderHeading,SearchInput,SearchTop,CaloriesText,PriceText,FoundText,DataBox,Img,ItemFood,SubTitle,Title} from "../styles/Styles"
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';


function HomeComp({navigation}) {

const data_list = [
  {
    id: '1',
    title: 'Oni Sandwish',
    subtitle: 'Spicy Chicken Sandwich',
    calories: '78',
    price:'$9.10',
    rating:'2.6',
    details:'Chicken Dimsum Recipe is the delicious evening snack during the winters and mansoons.',
    img:"https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX8737164.jpg",
  },
  {
    id: '2',
    title: 'Dan Noodles',
    subtitle: 'Spicy Chicken Noodles',
    calories: '78',
    price:'$10.9',
    rating:'4.6',
        details:'Chicken Dimsum Recipe is the delicious evening snack during the winters and mansoons.',

    img:"https://image.freepik.com/free-photo/spaghetti-dish-white-background_45583-1180.jpg",
  },
  {
    id: '3',
    title: 'Egg Pasta',
    subtitle: 'Spicy Chicken Pasta',
    calories: '78',
    price:'$10',
    rating:'3.6',
        details:'Chicken Dimsum Recipe is the delicious evening snack during the winters and mansoons.',

    img:"https://as1.ftcdn.net/jpg/02/51/80/38/500_F_251803861_515ErQL6HZHZ5mr7g5RITtT9NdGHTorO.jpg",
  },
  {
    id: '4',
    title: 'Egg Pasta',
    subtitle: 'Spicy Chicken Pasta',
    calories: '78',
    price:'$10',
    rating:'4.4',
    details:'Chicken Dimsum Recipe is the delicious evening snack during the winters and mansoons.',
    img:"https://as1.ftcdn.net/jpg/02/51/80/38/500_F_251803861_515ErQL6HZHZ5mr7g5RITtT9NdGHTorO.jpg",
  },
  {
    id: '5',
    title: 'Egg Pasta',
    subtitle: 'Spicy Chicken Pasta',
    calories: '78',
    price:'$10',
    rating:'2.6',
    details:'Chicken Dimsum Recipe is the delicious evening snack during the winters and mansoons.',

    img:"https://as1.ftcdn.net/jpg/02/51/80/38/500_F_251803861_515ErQL6HZHZ5mr7g5RITtT9NdGHTorO.jpg",
  },
  {
    id: '6',
    title: 'Egg Pasta',
    subtitle: 'Spicy Chicken Pasta',
    calories: '78',
    price:'$10',
    rating:'2.6',
    details:'Chicken Dimsum Recipe is the delicious evening snack during the winters and mansoons.',
    img:"https://as1.ftcdn.net/jpg/02/51/80/38/500_F_251803861_515ErQL6HZHZ5mr7g5RITtT9NdGHTorO.jpg",
  },
  {
    id: '7',
    title: 'Egg Pasta',
    subtitle: 'Spicy Chicken Pasta',
    calories: '78',
    price:'$10',
    rating:'2.6',
    details:'Chicken Dimsum Recipe is the delicious evening snack during the winters and mansoons.',

    img:"https://as1.ftcdn.net/jpg/02/51/80/38/500_F_251803861_515ErQL6HZHZ5mr7g5RITtT9NdGHTorO.jpg",
  },
  {
    id: '8',
    title: 'Egg Pasta',
    subtitle: 'Spicy Chicken Pasta',
    calories: '78',
    price:'$10',
    rating:'2.6',
    details:'Chicken Dimsum Recipe is the delicious evening snack during the winters and mansoons.',

    img:"https://as1.ftcdn.net/jpg/02/51/80/38/500_F_251803861_515ErQL6HZHZ5mr7g5RITtT9NdGHTorO.jpg",
  },
];

	return (
		<HomeFlex>

		 <StatusBar backgroundColor="#fff" barStyle="dark-content"/>


		<ScrollView>


			<HeaderTop>
				<HeaderButton>
				 <Ionicons name="chevron-back" size={30} color="#000" />
				</HeaderButton>

				<HeaderHeading>Search Food</HeaderHeading>

				<HeaderButton>
				 <Feather name="shopping-bag" size={30} color="#000" />
				</HeaderButton>


			</HeaderTop>
			


			<HeaderTop>
			<SearchTop>
				<AntDesign name="search1" size={30} color="#000" />
				<SearchInput
					placeholder="Spice Food"
					
				/>

			</SearchTop>

			<HeaderButton style={{backgroundColor:"#F9D71C"}}>
				 <AntDesign name="setting" size={30} color="#000" />
			</HeaderButton>

			</HeaderTop>


			<FoundText>Found 80 Results</FoundText>

			<DataBox>
				{
                		data_list.map((item) => (
                		  		<ItemFood key={item.id} onPress={()=>navigation.navigate("Order",{item:item})}>	
                		  			<Img  source={{uri:item.img}}/>
                		  			<Title >{item.title} </Title>
                		  			<SubTitle> {item.subtitle}</SubTitle>
                		  			<PriceText>{item.price}</PriceText>
                		  			<CaloriesText>{item.calories} Calories</CaloriesText>
								</ItemFood>
                		))
          		}

          	</DataBox>

         </ScrollView>
		</HomeFlex>
	)
}

export default HomeComp;