export const findTimeZoneByCountryCode = async (countryCode: string) => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  const getLastSunday = (year: number, month: number): Date => {
    const lastDayOfMonth = new Date(year, month + 1, 0);
    const dayOfWeek = lastDayOfMonth.getDay();
    const offset = dayOfWeek === 0 ? 0 : 7 - dayOfWeek;
    return new Date(year, month, lastDayOfMonth.getDate() - offset);
  };

  const summerTimeStart = getLastSunday(currentYear, 2);
  const winterTimeEnd = getLastSunday(currentYear, 9);

  if (currentDate >= summerTimeStart && currentDate < winterTimeEnd) {
    // Летнее время | Summer Time

    switch (countryCode) {
      case "AQ": //	Antarctica
        return "UTC-12";

      case "AS": //	American Samoa
      case "NU": //	Niue
        return "UTC-11";

      case "CK": //	Cook Islands
      case "PF": //	French Polynesia
        return "UTC-10";

      case "PN": //	Pitcairn
        return "UTC-8";

      case "BZ": //	Belize
      case "CR": //	Costa Rica
      case "GT": //	Guatemala
      case "HN": //	Honduras
      case "MX": //	Mexico
      case "NI": //	Nicaragua
      case "SV": //	El Salvador
        return "UTC-6";

      case "CO": //	Colombia
      case "EC": //	Ecuador
      case "JM": //	Jamaica
      case "KY": //	Cayman Islands
      case "PA": //	Panama
      case "PE": //	Peru
        return "UTC-5";

      case "AG": //	Antigua and Barbuda
      case "AI": //	Anguilla
      case "AW": //	Aruba
      case "BB": //	Barbados
      case "BL": //	Saint Barthélemy
      case "BO": //	Bolivia
      case "BQ": //	Bonaire, Sint Eustatius and Saba
      case "BS": //	Bahamas
      case "CA": //	Canada
      case "CU": //	Cuba
      case "CW": //	Curaçao
      case "DM": //	Dominica
      case "DO": //	Dominican Republic
      case "GD": //	Grenada
      case "GP": //	Guadeloupe
      case "GY": //	Guyana
      case "HT": //	Haiti
      case "KN": //	Saint Kitts and Nevis
      case "LC": //	Saint Lucia
      case "MF": //	Saint Martin (French part)
      case "MQ": //	Martinique
      case "MS": //	Montserrat
      case "PR": //	Puerto Rico
      case "SX": //	Sint Maarten (Dutch part)
      case "TC": //	Turks and Caicos Islands
      case "TT": //	Trinidad and Tobago
      case "US": //	United States of America
      case "VC": //	Saint Vincent and the Grenadines
      case "VE": //	Venezuela, Bolivarian Republic of
      case "VG": //	Virgin Islands (British)
      case "VI": //	Virgin Islands (U.S.)
        return "UTC-4";

      case "AR": //	Argentina
      case "BM": //	Bermuda
      case "BR": //	Brazil
      case "CL": //	Chile
      case "FK": //	Falkland Islands (Malvinas)
      case "GF": //	French Guiana
      case "PY": //	Paraguay
      case "SR": //	Suriname
      case "UY": //	Uruguay
        return "UTC-3";

      case "GS": //	South Georgia and the South Sandwich Islands
      case "PM": //	Saint Pierre and Miquelon
        return "UTC-2";

      case "CV": //	Cabo Verde
      case "GL": //	Greenland
        return "UTC-1";

      case "BF": //	Burkina Faso
      case "CI": //	Côte d'Ivoire
      case "GH": //	Ghana
      case "GM": //	Gambia
      case "GN": //	Guinea
      case "GW": //	Guinea-Bissau
      case "IS": //	Iceland
      case "LR": //	Liberia
      case "MA": //	Morocco
      case "ML": //	Mali
      case "MR": //	Mauritania
      case "SH": //	Saint Helena, Ascension and Tristan da Cunha
      case "SL": //	Sierra Leone
      case "SN": //	Senegal
      case "ST": //	Sao Tome and Principe
      case "TG": //	Togo
        return "UTC+0";

      case "DZ": //	Algeria
      case "AO": //	Angola
      case "BJ": //	Benin
      case "CD": //	Congo, Democratic Republic
      case "CF": //	Central African Republic
      case "CG": //	Congo
      case "CM": //	Cameroon
      case "EH": //	Western Sahara
      case "FO": //	Faroe Islands
      case "GA": //	Gabon
      case "GB": //	United Kingdom of Great Britain
      case "GG": //	Guernsey
      case "GQ": //	Equatorial Guinea
      case "IE": //	Ireland
      case "IM": //	Isle of Man
      case "JE": //	Jersey
      case "NE": //	Niger
      case "NG": //	Nigeria
      case "PT": //	Portugal
      case "TD": //	Chad
      case "TN": //	Tunisia
        return "UTC+1";

      case "AL": // 	Albania
      case "AD": //	Andorra
      case "AT": //	Austria
      case "BA": //	Bosnia and Herzegovina
      case "BE": //	Belgium
      case "BI": //	Burundis
      case "BV": //	Bouvet Island
      case "BW": //	Botswana
      case "CH": //	Switzerland
      case "CZ": //	Czechia
      case "DE": //	Germany
      case "DK": //	Denmark
      case "ES": //	Spain
      case "FR": //	France
      case "GI": //	Gibraltar
      case "HR": //	Croatia
      case "HU": //	Hungary
      case "IT": //	Italy
      case "LI": //	Liechtenstein
      case "LS": //	Lesotho
      case "LU": //	Luxembourg
      case "LY": //	Libya
      case "MC": //	Monaco
      case "ME": //	Montenegro
      case "MK": //	North Macedonia
      case "MT": //	Malta
      case "MW": //	Malawi
      case "MZ": //	Mozambique
      case "NA": //	Namibia
      case "NL": //	Netherlands, Kingdom of the
      case "NO": //	Norway
      case "PL": //	Poland
      case "RS": //	Serbia
      case "RW": //	Rwanda
      case "SD": //	Sudan
      case "SE": //	Sweden
      case "SI": //	Slovenia
      case "SJ": //	Svalbard and Jan Mayen
      case "SK": //	Slovakia
      case "SM": //	San Marino
      case "SS": //	South Sudan
      case "SZ": //	Eswatini
      case "VA": //	Holy See
      case "ZA": //	South Africa
      case "ZM": //	Zambia
      case "ZW": //	Zimbabwe
        return "UTC+2";

      case "AX": // Aland Islands
      case "BG": //	Bulgaria
      case "BH": //	Bahrain
      case "BY": //	Belarus
      case "CY": //	Cyprus
      case "DJ": //	Djibouti
      case "EE": //	Estonia
      case "EG": //	Egypt
      case "ER": //	Eritrea
      case "ET": //	Ethiopia
      case "FI": //	Finland
      case "GR": //	Greece
      case "IL": //	Israel
      case "IQ": //	Iraq
      case "JO": //	Jordan
      case "KE": //	Kenya
      case "KM": //	Comoros
      case "KW": //	Kuwait
      case "LB": //	Lebanon
      case "LT": //	Lithuania
      case "LV": //	Latvia
      case "MD": //	Moldova, Republic of
      case "MG": //	Madagascar
      case "PS": //	Palestine, State of
      case "QA": //	Qatar
      case "RO": //	Romania
      case "RU": //	Russian Federation
      case "SA": //	Saudi Arabia
      case "SO": //	Somalia
      case "SY": //	Syrian Arab Republic
      case "TR": //	Türkiye
      case "TZ": //	Tanzania, United Republic of
      case "UA": //	Ukraine
      case "UG": //	Uganda
      case "YE": //	Yemen
      case "YT": //	Mayotte
        return "UTC+3";

      case "IR": //	Iran
        return "UTC+3:30";

      case "AE": //	United Arab Emirates
      case "AM": //	Armenia
      case "AZ": //	Azerbaijan
      case "GE": //	Georgia
      case "MU": //	Mauritius
      case "OM": //	Oman
      case "RE": //	Réunion
      case "SC": //	Seychelles
      case "TF": //	French Southern Territories
        return "UTC+4";

      case "AF": // 	Afghanistan
        return "UTC+4:30";

      case "KZ": //	Kazakhstan
      case "MV": //	Maldives
      case "PK": //	Pakistan
      case "TJ": //	Tajikistan
      case "TM": //	Turkmenistan
      case "UZ": //	Uzbekistan
        return "UTC+5";

      case "IN": //	India
      case "LK": //	Sri Lanka
        return "UTC+5:30";

      case "NP": //	Nepal
        return "UTC+5:45";

      case "BD": //	Bangladesh
      case "BT": //	Bhutan
      case "IO": //	British Indian Ocean Territory
      case "KG": //	Kyrgyzstan
        return "UTC+6";

      case "CC": //	Cocos (Keeling) Islands
      case "MM": //	Myanmar
        return "UTC+6:30";

      case "CX": //	Christmas Island
      case "ID": //	Indonesia
      case "KH": //	Cambodia
      case "LA": //	Lao People's Democratic Republic
      case "TH": //	Thailand
      case "VN": //	Viet Nam
        return "UTC+7";

      case "BN": //	Brunei Darussalam
      case "HK": //	Hong Kong
      case "MN": //	Mongolia
      case "MO": //	Macao
      case "MY": //	Malaysia
      case "PH": //	Philippines
      case "SG": //	Singapore
      case "TW": //	Taiwan, Province of China
        return "UTC+8";

      case "CN": //	China
      case "JP": //	Japan
      case "KP": //	Korea, Democratic People's Republic of
      case "KR": //	Korea, Republic of
      case "PW": //	Palau
      case "TL": //	Timor-Leste
        return "UTC+9";

      case "GU": //	Guam
      case "MP": //	Northern Mariana Islands
      case "PG": //	Papua New Guinea
        return "UTC+10";

      case "AU": //	Australia
      case "FM": //	Micronesia, Federated States
      case "NC": //	New Caledonia
      case "SB": //	Solomon Islands
      case "VU": //	Vanuatu
        return "UTC+11";

      case "FJ": //	Fiji
      case "KI": //	Kiribati
      case "MH": //	Marshall Islands
      case "NF": //	Norfolk Island
      case "NR": //	Nauru
      case "TV": //	Tuvalu
      case "UM": //	United States Minor Outlying Islands
      case "WF": //	Wallis and Futuna
        return "UTC+12";

      case "NZ": //	New Zealand
      case "TK": //	Tokelau
      case "TO": //	Tonga
      case "WS": //	Samoa
        return "UTC+13";

      default:
        return "UTC+1";
    }
  } else {
    // Базовое / Зимнее время | Base / Winter Time

    switch (countryCode) {
      case "AQ": //	Antarctica
        return "UTC-12";

      case "AS": //	American Samoa
      case "NU": //	Niue
        return "UTC-11";

      case "CK": //	Cook Islands
      case "PF": //	French Polynesia
        return "UTC-10";

      case "PN": //	Pitcairn
        return "UTC-8";

      case "BZ": //	Belize
      case "CR": //	Costa Rica
      case "GT": //	Guatemala
      case "HN": //	Honduras
      case "MX": //	Mexico
      case "NI": //	Nicaragua
      case "SV": //	El Salvador
        return "UTC-6";

      case "BS": //	Bahamas
      case "CA": //	Canada
      case "CO": //	Colombia
      case "CU": //	Cuba
      case "EC": //	Ecuador
      case "HT": //	Haiti
      case "JM": //	Jamaica
      case "KY": //	Cayman Islands
      case "PA": //	Panama
      case "PE": //	Peru
      case "TC": //	Turks and Caicos Islands
      case "US": //	United States of America
        return "UTC-5";

      case "AG": //	Antigua and Barbuda
      case "AI": //	Anguilla
      case "AW": //	Aruba
      case "BB": //	Barbados
      case "BL": //	Saint Barthélemy
      case "BM": //	Bermuda
      case "BO": //	Bolivia
      case "BQ": //	Bonaire, Sint Eustatius and Saba
      case "CL": //	Chile
      case "CW": //	Curaçao
      case "DM": //	Dominica
      case "DO": //	Dominican Republic
      case "GD": //	Grenada
      case "GP": //	Guadeloupe
      case "GY": //	Guyana
      case "KN": //	Saint Kitts and Nevis
      case "LC": //	Saint Lucia
      case "MF": //	Saint Martin (French part)
      case "MQ": //	Martinique
      case "MS": //	Montserrat
      case "PR": //	Puerto Rico
      case "SX": //	Sint Maarten (Dutch part)
      case "TT": //	Trinidad and Tobago
      case "VC": //	Saint Vincent and the Grenadines
      case "VE": //	Venezuela, Bolivarian Republic of
      case "VG": //	Virgin Islands (British)
      case "VI": //	Virgin Islands (U.S.)
        return "UTC-4";

      case "AR": //	Argentina
      case "BR": //	Brazil
      case "FK": //	Falkland Islands (Malvinas)
      case "GF": //	French Guiana
      case "PM": //	Saint Pierre and Miquelon
      case "PY": //	Paraguay
      case "SR": //	Suriname
      case "UY": //	Uruguay
        return "UTC-3";

      case "GL": //	Greenland
      case "GS": //	South Georgia and the South Sandwich Islands
        return "UTC-2";

      case "CV": //	Cabo Verde
        return "UTC-1";

      case "BF": //	Burkina Faso
      case "CI": //	Côte d'Ivoire
      case "FO": //	Faroe Islands
      case "GB": //	United Kingdom of Great Britain
      case "GG": //	Guernsey
      case "GH": //	Ghana
      case "GM": //	Gambia
      case "GN": //	Guinea
      case "GW": //	Guinea-Bissau
      case "IE": //	Ireland
      case "IM": //	Isle of Man
      case "IS": //	Iceland
      case "JE": //	Jersey
      case "LR": //	Liberia
      case "ML": //	Mali
      case "MR": //	Mauritania
      case "PT": //	Portugal
      case "SH": //	Saint Helena, Ascension and Tristan da Cunha
      case "SL": //	Sierra Leone
      case "SN": //	Senegal
      case "ST": //	Sao Tome and Principe
      case "TG": //	Togo
        return "UTC+0";

      case "AL": // Albania
      case "DZ": //	Algeria
      case "AD": //	Andorra
      case "AO": //	Angola
      case "AT": //	Austria
      case "BA": //	Bosnia and Herzegovina
      case "BE": //	Belgium
      case "BJ": //	Benin
      case "BV": //	Bouvet Island
      case "CD": //	Congo, Democratic Republic
      case "CF": //	Central African Republic
      case "CG": //	Congo
      case "CH": //	Switzerland
      case "CM": //	Cameroon
      case "CZ": //	Czechia
      case "DE": //	Germany
      case "DK": //	Denmark
      case "EH": //	Western Sahara
      case "ES": //	Spain
      case "FR": //	France
      case "GA": //	Gabon
      case "GI": //	Gibraltar
      case "GQ": //	Equatorial Guinea
      case "HR": //	Croatia
      case "HU": //	Hungary
      case "IT": //	Italy
      case "LI": //	Liechtenstein
      case "LU": //	Luxembourg
      case "MA": //	Morocco
      case "MC": //	Monaco
      case "ME": //	Montenegro
      case "MK": //	North Macedonia
      case "MT": //	Malta
      case "NE": //	Niger
      case "NG": //	Nigeria
      case "NL": //	Netherlands, Kingdom of the
      case "NO": //	Norway
      case "PL": //	Poland
      case "RS": //	Serbia
      case "SE": //	Sweden
      case "SI": //	Slovenia
      case "SJ": //	Svalbard and Jan Mayen
      case "SK": //	Slovakia
      case "SM": //	San Marino
      case "TD": //	Chad
      case "TN": //	Tunisia
      case "VA": //	Holy See
        return "UTC+1";

      case "AX": // 	Aland Islands
      case "BG": //	Bulgaria
      case "BI": //	Burundi
      case "BW": //	Botswana
      case "EE": //	Estonia
      case "CY": //	Cyprus
      case "EG": //	Egypt
      case "FI": //	Finland
      case "GR": //	Greece
      case "IL": //	Israel
      case "LB": //	Lebanon
      case "LS": //	Lesotho
      case "LT": //	Lithuania
      case "LV": //	Latvia
      case "LY": //	Libya
      case "MD": //	Moldova, Republic of
      case "MW": //	Malawi
      case "MZ": //	Mozambique
      case "NA": //	Namibia
      case "PS": //	Palestine, State of
      case "RO": //	Romania
      case "RW": //	Rwanda
      case "SD": //	Sudan
      case "SS": //	South Sudan
      case "SZ": //	Eswatini
      case "UA": //	Ukraine
      case "ZA": //	South Africa
      case "ZM": //	Zambia
      case "ZW": //	Zimbabwe
        return "UTC+2";

      case "BH": //	Bahrain
      case "BY": //	Belarus
      case "DJ": //	Djibouti
      case "ER": //	Eritrea
      case "ET": //	Ethiopia
      case "IQ": //	Iraq
      case "JO": //	Jordan
      case "KE": //	Kenya
      case "KM": //	Comoros
      case "KW": //	Kuwait
      case "MG": //	Madagascar
      case "QA": //	Qatar
      case "RU": //	Russian Federation
      case "SA": //	Saudi Arabia
      case "SO": //	Somalia
      case "SY": //	Syrian Arab Republic
      case "TR": //	Türkiye
      case "TZ": //	Tanzania, United Republic of
      case "UG": //	Uganda
      case "YE": //	Yemen
      case "YT": //	Mayotte
        return "UTC+3";

      case "IR": //	Iran
        return "UTC+3:30";

      case "AE": //	United Arab Emirates
      case "AM": //	Armenia
      case "AZ": //	Azerbaijan
      case "GE": //	Georgia
      case "MU": //	Mauritius
      case "OM": //	Oman
      case "RE": //	Réunion
      case "SC": //	Seychelles
      case "TF": //	French Southern Territories
        return "UTC+4";

      case "AF": // 	Afghanistan
        return "UTC+4:30";

      case "KZ": //	Kazakhstan
      case "MV": //	Maldives
      case "PK": //	Pakistan
      case "TJ": //	Tajikistan
      case "TM": //	Turkmenistan
      case "UZ": //	Uzbekistan
        return "UTC+5";

      case "IN": //	India
      case "LK": //	Sri Lanka
        return "UTC+5:30";

      case "NP": //	Nepal
        return "UTC+5:45";

      case "BD": //	Bangladesh
      case "BT": //	Bhutan
      case "IO": //	British Indian Ocean Territory
      case "KG": //	Kyrgyzstan
        return "UTC+6";

      case "CC": //	Cocos (Keeling) Islands
      case "MM": //	Myanmar
        return "UTC+6:30";

      case "CX": //	Christmas Island
      case "ID": //	Indonesia
      case "KH": //	Cambodia
      case "LA": //	Lao People's Democratic Republic
      case "TH": //	Thailand
      case "VN": //	Viet Nam
        return "UTC+7";

      case "BN": //	Brunei Darussalam
      case "CN": //	China
      case "HK": //	Hong Kong
      case "MN": //	Mongolia
      case "MO": //	Macao
      case "MY": //	Malaysia
      case "PH": //	Philippines
      case "SG": //	Singapore
      case "TW": //	Taiwan, Province of China
        return "UTC+8";

      case "JP": //	Japan
      case "KP": //	Korea, Democratic People's Republic of
      case "KR": //	Korea, Republic of
      case "PW": //	Palau
      case "TL": //	Timor-Leste
        return "UTC+9";

      case "AU": //	Australia
      case "GU": //	Guam
      case "MP": //	Northern Mariana Islands
      case "PG": //	Papua New Guinea
        return "UTC+10";

      case "FM": //	Micronesia, Federated States
      case "NC": //	New Caledonia
      case "NF": //	Norfolk Island
      case "SB": //	Solomon Islands
      case "VU": //	Vanuatu
        return "UTC+11";

      case "FJ": //	Fiji
      case "KI": //	Kiribati
      case "MH": //	Marshall Islands
      case "NR": //	Nauru
      case "NZ": //	New Zealand
      case "TV": //	Tuvalu
      case "UM": //	United States Minor Outlying Islands
      case "WF": //	Wallis and Futuna
        return "UTC+12";

      case "TK": //	Tokelau
      case "TO": //	Tonga
      case "WS": //	Samoa
        return "UTC+13";

      default:
        return "UTC+1";
    }
  }
};
