// "use client";

// import React from "react";
// import SearchBar from "../components/Weather-components/searchbar";
// import { QueryClient, QueryClientProvider, useQuery } from "react-query";
// import axios from "axios";
// import { format } from "date-fns";
// import { parseISO } from "date-fns/fp";
// import Container from "../components/Weather-components/container";
// import { convertKelvinToCelsius } from "../utils/convertKelvinToCelsius";
// import WeatherIcon from "../components/Weather-components/weatherIcon";

// interface Weather {
//   id: number;
//   main: string;
//   description: string;
//   icon: string;
// }

// interface Main {
//   temp: number;
//   feels_like: number;
//   temp_min: number;
//   temp_max: number;
//   pressure: number;
//   sea_level: number;
//   grnd_level: number;
//   humidity: number;
//   temp_kf: number;
// }

// interface Clouds {
//   all: number;
// }

// interface Wind {
//   speed: number;
//   deg: number;
//   gust: number;
// }

// interface Rain {
//   "3h": number;
// }

// interface Sys {
//   pod: string;
// }

// interface WeatherData {
//   dt: number;
//   main: Main;
//   weather: Weather[];
//   clouds: Clouds;
//   wind: Wind;
//   visibility: number;
//   pop: number;
//   rain?: Rain;
//   sys: Sys;
//   dt_txt: string;
//   list: WeatherData[];
// }

// interface City {
//   id: number;
//   name: string;
//   coord: {
//     lat: number;
//     lon: number;
//   };
//   country: string;
//   population: number;
//   timezone: number;
//   sunrise: number;
//   sunset: number;
// }

// interface WeatherApiResponse {
//   cod: string;
//   message: number;
//   cnt: number;

//   city: City;
// }

// export default function WeatherPage() {
//   const queryClient = new QueryClient();
//   const { isLoading, data } = useQuery<WeatherData>("repoData", async () => {
//     const { data } = await axios.get(
//       `https://api.openweathermap.org/data/2.5/forecast?q=Bergen&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}&cnt=56`
//     );
//     return data;
//   });

//   const firstData = data?.list[0];

//   if (isLoading)
//     return (
//       <div className="flex items-center justify-center min-h-screen">
//         <p className="animate-bounce">Loading...</p>
//       </div>
//     );

//   return (
//     <QueryClientProvider client={queryClient}>
//       <div className="flex flex-col gap-4 bg-gray-100 min-h-screen">
//         <SearchBar />
//         <main className="px-3 max-w-7xl mx-auto flex flex-col gap-9 w-full pb-10 pt-4">
//           <section className="space-y-4">
//             <div className="space-y-2">
//               <h2 className="flex gap-1 text-2xl items-end">
//                 <p>{format(parseISO(firstData?.dt_txt ?? ""), "EEEE")}</p>
//                 <p className="text-lg">
//                   {format(parseISO(firstData?.dt_txt ?? ""), "dd.MM.yyyy")}
//                 </p>
//               </h2>
//               <Container className="gap-10 px-6 items-center">
//                 <div className="flex flex-col px-4">
//                   <span className="text-5xl">
//                     {convertKelvinToCelsius(firstData?.main.temp ?? 296.37)}°
//                   </span>
//                   <p className="text-xs space-x-1 whitespace-nowrap">
//                     <span>Feels like</span>
//                     <span>
//                       {convertKelvinToCelsius(firstData?.main.feels_like ?? 0)}°
//                     </span>
//                   </p>
//                   <p className="text-xs space-x-2">
//                     <span>
//                       {convertKelvinToCelsius(firstData?.main.temp_min ?? 0)}°↓{" "}
//                     </span>
//                     <span>
//                       {" "}
//                       {convertKelvinToCelsius(firstData?.main.temp_max ?? 0)}°↑
//                     </span>
//                   </p>
//                 </div>
//                 <div className="flex gap-10 sm:gap-16 overflow-x-auto w-full justify-between pr-3">
//                   {data?.list.map((d, i) => (
//                     <div
//                       key={i}
//                       className="flex flex-col justify-between gap-2 items-center text-xs font-semibold"
//                     >
//                       <p className="whitespace-nowrap">
//                         {format(parseISO(d.dt_txt), "h:mm a")}
//                       </p>
//                       <p>
//                         <WeatherIcon iconName={d.weather[0].icon} />
//                         {convertKelvinToCelsius(firstData?.main.temp ?? 0)}°
//                       </p>
//                     </div>
//                   ))}
//                 </div>
//               </Container>
//             </div>
//           </section>
//           <section></section>
//         </main>
//       </div>
//     </QueryClientProvider>
//   );
// }
