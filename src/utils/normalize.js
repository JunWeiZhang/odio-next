import Countries from "@config/countries/list";
import iso from "@config/countries/iso";

export const countries = countriesArray => {
  const countries = countriesArray.filter(e => Countries.indexOf(e.name) > -1);

  for (let i = 0; i < countries.length; i++) {
    for (let j = 0; j < iso.length; j++) {
      if (countries[i].name === iso[j].name) {
        countries[i]["iso"] = iso[j].code;
      }
    }
  }

  return countries;
};

export const stations = stationsArray => {
  for (let i = 0; i < stationsArray.length; i++) {
    for (let j = 0; j < iso.length; j++) {
      if (stationsArray[i].country === iso[j].name) {
        stationsArray[i]["iso"] = iso[j].code;
      }
    }
  }

  return stationsArray;
};
