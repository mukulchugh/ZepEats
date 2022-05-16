import React, { useEffect, useState } from "react";
import { ScrollView, Alert, ActivityIndicator } from "react-native";
import HeaderTabs from "../components/HeaderTabs";
import Screen from "../components/Screen";
import Categories from "../components/Categories";
import SearchBar from "../components/SearchBar";
import RestaurantItem from "../components/RestaurantItem";
import tailwind from "tailwind-react-native-classnames";
import { localRestaurants } from "../data/localRestaurants";
import colors from "../configs/colors";

const YELP_API_KEY =
  "38rUDcrFlHVoVmjRbHjAMJNAkwlUYGYlAssuV5Dm9r1y6zZMc9_8WODO5JBst7RGK2WDzIhvayGgZJtfxCByfuMB9cA0mBlaXUx61mTNJaM5x4gPwgE1akpP60mCYnYx";

const HomeScreen = () => {
  const [restaurantData, setRestaurantData] = useState(localRestaurants);
  const [city, setCity] = useState("San Francisco");
  const [activeTab, setActiveTab] = useState("Delivery");
  const [loading, setLoading] = useState(false);

  const getRestaurantsFromYelp = () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };
    setLoading(true);
    return fetch(yelpUrl, apiOptions)
      .then((res) => res.json())
      .then((json) => {
        setLoading(false);
        if (json.error) return Alert.alert("Sorry", json.error.description);
        setRestaurantData(
          json?.businesses?.filter((business) =>
            business.transactions.includes(activeTab.toLowerCase())
          )
        );
      });
  };

  useEffect(() => {
    getRestaurantsFromYelp();
  }, [city, activeTab]);

  return (
    <Screen style={tailwind`bg-white flex-1`}>
      <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <SearchBar setCity={setCity} city={city} />
      <ScrollView style={tailwind`flex-1`} showsVerticalScrollIndicator={false}>
        <Categories />
        {loading && (
          <ActivityIndicator
            size="large"
            color={colors.primary}
            style={tailwind`mt-2 mb-6`}
          />
        )}
        <RestaurantItem restaurantData={restaurantData} />
      </ScrollView>
    </Screen>
  );
};

export default HomeScreen;
