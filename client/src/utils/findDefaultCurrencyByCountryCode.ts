export const findDefaultCurrencyByCountryCode = async (countryCode: string) => {

    switch (countryCode) {
        case "US": // США
        case "PR": // Пуэрто-Рико
        case "GU": // Гуам
        case "UM": // Острова США
        case "VI": // Виргинские острова США
          return "USD";
    
        case "AT": // Австрия
        case "BE": // Бельгия
        case "FR": // Франция
        case "DE": // Германия
        case "ES": // Испания
        case "IT": // Италия
        case "NL": // Нидерланды
        case "PT": // Португалия
        case "FI": // Финляндия
        case "GR": // Греция
        case "IE": // Ирландия
        case "LU": // Люксембург
        case "SI": // Словения
        case "SK": // Словакия
        case "LT": // Литва
        case "LV": // Латвия
        case "EE": // Эстония
          return "EUR";
    
        case "GB": // Великобритания
          return "GBP";
    
        case "JP": // Япония
          return "JPY";
    
        case "CN": // Китай
          return "CNY";
    
        case "RU": // Россия
          return "RUB";
    
        case "CH": // Швейцария
        case "LI": // Лихтенштейн
          return "CHF";
    
        case "UA": // Украина
          return "UAH";
    
        // Прочие валюты
        case "AE": // ОАЭ
          return "AED";
        case "AF": // Афганистан
          return "AFN";
        case "AL": // Албания
          return "ALL";
        case "AM": // Армения
          return "AMD";
        case "AO": // Ангола
          return "AOA";
        case "AR": // Аргентина
          return "ARS";
        case "AU": // Австралия
          return "AUD";
        case "AZ": // Азербайджан
          return "AZN";
        case "BD": // Бангладеш
          return "BDT";
        case "BG": // Болгария
          return "BGN";
        case "BH": // Бахрейн
          return "BHD";
        case "BI": // Бурунди
          return "BIF";
        case "BN": // Бруней
          return "BND";
        case "BO": // Боливия
          return "BOB";
        case "BR": // Бразилия
          return "BRL";
        case "BW": // Ботсвана
          return "BWP";
        case "BY": // Беларусь
          return "BYN";
        case "CA": // Канада
          return "CAD";
        case "CD": // Конго
          return "CDF";
        case "CL": // Чили
          return "CLP";
        case "CO": // Колумбия
          return "COP";
        case "CR": // Коста-Рика
          return "CRC";
        case "CU": // Куба
          return "CUP";
        case "CZ": // Чехия
          return "CZK";
        case "DK": // Дания
          return "DKK";
        case "DO": // Доминикана
          return "DOP";
        case "DZ": // Алжир
          return "DZD";
        case "EG": // Египет
          return "EGP";
        case "ET": // Эфиопия
          return "ETB";
        case "GE": // Грузия
          return "GEL";
        case "GH": // Гана
          return "GHS";
        case "HK": // Гонконг
          return "HKD";
        case "HR": // Хорватия
          return "HRK";
        case "HU": // Венгрия
          return "HUF";
        case "ID": // Индонезия
          return "IDR";
        case "IL": // Израиль
          return "ILS";
        case "IN": // Индия
          return "INR";
        case "IQ": // Ирак
          return "IQD";
        case "IR": // Иран
          return "IRR";
        case "IS": // Исландия
          return "ISK";
        case "JO": // Иордания
          return "JOD";
        case "KE": // Кения
          return "KES";
        case "KG": // Кыргызстан
          return "KGS";
        case "KH": // Камбоджа
          return "KHR";
        case "KP": // Северная Корея
          return "KPW";
        case "KR": // Южная Корея
          return "KRW";
        case "KW": // Кувейт
          return "KWD";
        case "KZ": // Казахстан
          return "KZT";
        case "LA": // Лаос
          return "LAK";
        case "LB": // Ливан
          return "LBP";
        case "LK": // Шри-Ланка
          return "LKR";
        case "LY": // Ливия
          return "LYD";
        case "MA": // Марокко
          return "MAD";
        case "MD": // Молдова
          return "MDL";
        case "MG": // Мадагаскар
          return "MGA";
        case "MK": // Македония
          return "MKD";
        case "MN": // Монголия
          return "MNT";
        case "MU": // Маврикий
          return "MUR";
        case "MX": // Мексика
          return "MXN";
        case "MY": // Малайзия
          return "MYR";
        case "NO": // Норвегия
          return "NOK";
        case "NZ": // Новая Зеландия
          return "NZD";
        case "PL": // Польша
          return "PLN";
        case "RO": // Румыния
          return "RON";
        case "RS": // Сербия
          return "RSD";
        case "SA": // Саудовская Аравия
          return "SAR";
        case "SE": // Швеция
          return "SEK";
        case "SG": // Сингапур
          return "SGD";
        case "TH": // Таиланд
          return "THB";
        case "TR": // Турция
          return "TRY";
        case "VN": // Вьетнам
          return "VND";
        case "ZA": // Южная Африка
          return "ZAR";
    
        default:
          return "USD";
      };

  };