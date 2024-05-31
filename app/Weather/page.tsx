"use client";

import React from "react";
import SearchBar from "./components/searchbar";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import axios from "axios";

https: interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  grnd_level: number;
  humidity: number;
  temp_kf: number;
}

interface Clouds {
  all: number;
}

interface Wind {
  speed: number;
  deg: number;
  gust: number;
}

interface Rain {
  "3h": number;
}

interface Sys {
  pod: string;
}

interface WeatherData {
  dt: number;
  main: Main;
  weather: Weather[];
  clouds: Clouds;
  wind: Wind;
  visibility: number;
  pop: number;
  rain?: Rain;
  sys: Sys;
  dt_txt: string;
}

interface City {
  id: number;
  name: string;
  coord: {
    lat: number;
    lon: number;
  };
  country: string;
  population: number;
  timezone: number;
  sunrise: number;
  sunset: number;
}

interface WeatherApiResponse {
  cod: string;
  message: number;
  cnt: number;
  list: WeatherData[];
  city: City;
}

export default function Weather() {
  const queryClient = new QueryClient();
  const { isLoading, data } = useQuery<WeatherData>("repoData", async () => {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=Bergen&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}&cnt=56`
    );
    return data;
  });

  if (isLoading)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="animate-bounce">Loading...</p>
      </div>
    );

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex flex-col gap-4 bg-gray-100 min-h-screen">
        <SearchBar />
        <main className="px-3 max-w-7xl"></main>
      </div>
    </QueryClientProvider>
  );
}
