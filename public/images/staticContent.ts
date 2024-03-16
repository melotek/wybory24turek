import { IOkręgWyborczy } from "@/types";

const okregiWyborczePowiat: IOkręgWyborczy[] = [
    {
      nr: 1,
      zasieg: "gmina miejska Turek",
      liczbaMandatow: 6
    },
    {
      nr: 2,
      zasieg: "gmina miejsko-wiejska Tuliszków",
      liczbaMandatow: 3
    },
    {
        nr:3,
        zasieg: "gmina wiejska Turek",
        liczbaMandatow: 3
    },
    {
        nr: 4,
        zasieg:"gmina wiejska Brudzew , gmina miejsko‑wiejska Dobra , gmina wiejska Przykona , gmina wiejska Władysławów",
        liczbaMandatow: 6
    }, 
    {
        nr: 5,
        zasieg: "gmina wiejska Kawęczyn, gmina wiejska Malanów",
        liczbaMandatow: 3
    }
];

 const categoryInstrucitons = [
    "Edukacja i kultura",
    "Bezpieczeństwo i porządek publiczny",
    "Zdrowie i opieka społeczna",
    "Infrastruktura i transport",
    "Środowisko i ochrona przyrody",
    "Gospodarka i rozwój lokalny",
  ];

  const okregiWyborczeGmina: IOkręgWyborczy[] = [
    {
      nr: 1,
      zasieg: "Adama Mickiewicza, Braci Pietrzaków, Działkowa, Elizy Orzeszkowej, Felicjana Sławoja Składkowskiego, Gwarna, Gorzelniana, Jana Matejki, Juliusza Słowackiego, Kaliska, Komunalna, Konińska, Krótka, Leona Lubomira Kruszyńskiego, Łagodna, Łączna, Mariana Cieplaka, Marii Konopnickiej, Miła, Miłosna, Miodowa, Młodych, Muchlińska, Nastrojowa, Ogrodowa, Owocowa, Piwna, Plac Henryka Glicensteina, Plac Zacisze, Południowa, Promienna, Przyjemna, Rajska, Sielska, Spokojna, Sportowa, Spółdzielców, Stanisława Kączkowskiego, Stefana Żeromskiego, Stylowa, Szeroka, Szkolna, Św. Floriana, Tadeusza Kościuszki, Tomiły Składkowskiej, Urocza, Warzywna, Wąska, Wesoła, Zabawna, Zgodna, Zielona",
      liczbaMandatow: 5
    },
    {
      nr: 2,
      zasieg: "3 Maja, Akacjowa, Aleja Jana Pawła II, Aleja Józefa Piłsudskiego, Braci Marszlów, Browarna, Brzozowa, Bursztynowa, Cicha, Czysta, Dębowa, Dobrska, Dobrska Szosa, Dworcowa, Feliksa Nowowiejskiego, Folwarczna, Fryderyka Chopina, Graniczna, Grażyny Bacewicz, Henryka Wieniawskiego, Ignacego Paderewskiego, Jacka Kaczmarskiego, Jacka Malczewskiego, Jaśminowa, Jęczmienna, Józefa Brandta, Józefa Chełmońskiego, J. Mehoffera, Karola Kurpińskiego, Karola Szymanowskiego, Kasztanowa, Kazimierza Serockiego, Kazimierza Sosnkowskiego, Klonowa, Kolejowa, Kolska, Kopalniana, Krzysztofa Komedy, Krzysztofa Pendereckiego, Ks. Florczaka, Kwiatowa, Leona Wyczółkowskiego, Leśna, Lniana, Lucjana Żeligowskiego, Ludomira Różyckiego, Łąkowa, Makowa, Malinowa, Marka Grechuty, Michała Kleofasa Ogińskiego, Morelowa, Niepodległości, Nowa, Oliwkowa, Orzechowa, os. Osiedle Miranda, Osiedle Uniejowskie, Parkowa, Perłowa, Piaskowa, Piękna, Piotra Michałowskiego, Plac Henryka Sienkiewicza, Plac Kilińskiego, Plac Wojska Polskiego, Poduchowne, Północna, Pszeniczna, Radosna, Różana, Rubinowa, Sezamowa, Słoneczna, Stanisława Moniuszki, Szafirowa, Tamka, Torowa, Wincentego Milewskiego, Wiśniowa, Witolda Lutosławskiego, Władysława Podkowińskiego, Władysława Żeleńskiego, Wojciecha Kossaka, Zdrojki Lewe, Zdrojki Prawe, Zdrojowa",
      liczbaMandatow: 5
    },
    {
        nr:3,
        zasieg: "650‑lecia, Adama Asnyka, Aleja NSZZ Solidarność, Aleksandra Fredry, Andrzeja Kmicica, Armii Krajowej, Bolesława Chrobrego, Bolesława Prusa, Eugeniusza Kwiatkowskiego, Franciszka Stawickiego, Gabriela Narutowicza, Generała Mieczysława Smorawińskiego, Generała Stanisława Maczka, gen. Stanisława Sosabowskiego, Generała Władysława Andersa, Górnicza, Henryka Sucharskiego, Ignacego Łukasiewicza, Inwestycyjna, Jana Kochanowskiego, Jana Skrzetuskiego, Jana Sobieskiego, Jarosława Dąbrowskiego, Jedwabnicza, Juliana Ordona, Juliana Tuwima, Kazimierza Wielkiego, Kolska Szosa, Korytkowska, Królowej Jadwigi, Legionów Polskich, Marii Dąbrowskiej, Marii Skłodowskiej‑Curie, Michała Wołodyjowskiego, Mieszka Pierwszego, Mikołaja Kopernika, pl. Plac Zawiszy Czarnego, Polskiej Organizacji Wojskowej, Przemysłowa, Racławicka, Stanisława Staszica, Stefana Czarnieckiego, Stefana Starzyńskiego, Tadeusza Kutrzeby, Uniejowska, Władysława Broniewskiego, Władysława Jagiełły, Władysława Łokietka, Władysława Reymonta, Władysława Sikorskiego, Wschodnia, Zapałczana, Żwirki i Wigury",
        liczbaMandatow: 5
    },
    {
        nr: 4,
        zasieg:"Cisowa, Emilii Plater, Grunwaldzka, Iglasta, Ignacego Daszyńskiego, Ignacego Mościckiego, Jałowcowa, Jodłowa, Kardynała Stefana Wyszyńskiego, Kazimierza Pułaskiego, Konstantego Ildefonsa Gałczyńskiego, Końcowa, Księdza Dominika Jędrzejewskiego, Macieja Rataja, mjr. Hubala, Modrzewiowa, Obrońców Westerplatte, os. Osiedle Wyzwolenia, Podchorążych, Polna, Powstańców Warszawy, Powstańców Wielkopolskich, Romualda Traugutta, Skwer Jana Pawła II, Sosnowa, Stanisława Wojciechowskiego, Świerkowa, Św. Barbary, Wincentego Witosa, Władysława Raczkiewicza",
        liczbaMandatow: 6
    }
];


  export {okregiWyborczePowiat, categoryInstrucitons, okregiWyborczeGmina}