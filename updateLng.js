const request = require("request");
const fs = require("fs");
const ko = "./src/locales/default.ko.json";
const en = "./src/locales/default.en.json";

const SHEET_ID = "";
const GOOGLE_API_KEY = "";

const options = {
  uri: `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/main?key=${GOOGLE_API_KEY}`,
};

request.get(options, (e, r, b) => {
  const responseParsing = JSON.parse(r.body);
  const rowData = responseParsing.values;
  console.log(r);
  let ko_KO = {},
    en_EN = {};

  rowData.map((v) => {
    en_EN = { ...en_EN, [v[0]]: v[1] };
    ko_KO = { ...ko_KO, [v[0]]: v[2] };
  });

  fs.writeFileSync(en, JSON.stringify(en_EN));
  fs.writeFileSync(ko, JSON.stringify(ko_KO));
});
