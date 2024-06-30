import { View, Text, ScrollView } from "react-native";
import React from "react";
import Header from "../../components/Home/Header";
import Slider from "../../components/Home/Slider";
import Category from "../../components/Home/Category";
import PopularBusiness from "../../components/Home/PopularBusiness";

export default function home() {
  return (
    <ScrollView>

      {/* HEADER */}
      <Header />
    
      {/* SLIDER */}
      <Slider />

      {/* CATEGORY */}
      <Category />

      {/* POPULAR BUSINESS LIST */}
      <PopularBusiness />

      <View style={{height: 50}}></View>
    </ScrollView>
  );
}
