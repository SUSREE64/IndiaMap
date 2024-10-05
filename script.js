// This is script file
// States consts
// Object with All the states and UT details
const StateData = {
  telengana: {
    stateName: "Telengana",
    Capital: "Hyderabad",
    Language: "Telugu",
    Area: "1,12,077",
    symbol :"TelenganaSeal.svg",
  },
  andhra: {
    stateName: "Andhra Pradesh",
    Capital: "Amaravathi",
    Language: "Telugu",
    Area : "1,62,975",
    symbol :"ApSeal.svg",

  },
  rajasthan: {
    stateName: "Rajasthan",
    Capital: "Jaipur",
    Language: "Hindi",
    Area: "3,42,239",
    symbol :"RajasthanSeal.svg",
  },
  tamilnadu: {
    stateName: "Tamilnadu",
    Capital: "Chennai",
    Language: "Tamil",
    Area : "1,30,058",
    symbol :"TamilnaduSeal.svg",
  },
  kerala: {
    stateName: "Kerala",
    Capital: "Thiruvananthapuram",
    Language: "Malayalam",
    Area : "38,863",
    symbol :"KeralaSeal.png",
  },
  karnataka: {
    stateName: "Karnataka",
    Capital: "Bengaluru",
    Language: "Kannada",
    Area : "1,91,791",
    symbol :"KarnatakaSeal.svg",
  },
  gujarat: {
    stateName: "Gujarat",
    Capital: "Gandhinagar",
    Language : "Gujarati",
    Area: "1,96,024",
    symbol :"GujaratSeal.svg",
  },
  maharastra: {
    stateName: "Maharastra",
    Capital: "Mumbai",
    Language : "Marathi",
    Area: "3,07,713",
    symbol :"MaharastraSeal.png",
  },
  mp: {
    stateName: "Madhya Pradesh",
    Capital: "Bhopal",
    Language: "Hindi",
    Area : "3,08,252",
    symbol :"MPSeal.png",
  },
  chhatish: {
    stateName: "Chattisgarh",
    Capital: "Raipur",
    Language : "Hindi",
    Area : "1,35,192",
    symbol :"ChattishSeal.png",
  },
  odisha: {
    stateName: "Odisha",
    Capital: "Bhubaneshwar",
    Language: "Odia",
    Area : "1,55,707",
    symbol :"OdishaSeal.png",
  },
  wb: {
    stateName: "West Bengal",
    Capital: "Kolkata",
    Language : "Bengali",
    Area : "88,752",
    symbol :"WbSeal.svg",
  },
  up: {
    stateName: "Uttar Pradesh",
    Capital: "Lucknow",
    Language : "Hindi",
    Area : "2,40,928",
    symbol :"UpSeal.svg",

  },
  bihar: {
    stateName: "Bihar",
    Capital: "Patna",
    Language: "Hindi - Maithili",
    Areas : "94,163",
    symbol :"BiharSeal.svg",
  },
  jarkhand: {
    stateName: "Jarkhand",
    Capital: "Ranchi",
    Language : "Hindi",
    Area : "79,716",
    symbol :"JarkhandSeal.svg",
  },
  puducherry: {
    stateName: "Puducherry(UT)",
    Capital: "Pondicherry",
    Language: "Tamil",
    Area : "479",
    symbol :"PuducherrySeal.png",
  },
  mizoram: {
    stateName: "Mizoram",
    Capital: "Aizwal",
    Language : "Lushai - Mizo",
    Area : "21,081",
    symbol :"MizoramSeal.png",
  },
  punjab: {
    stateName: "Punjab",
    Capital: "Chandigarh",
    Language : "Punjabi-Hindi",
    Area : "50,362",
    symbol :"PunjabSeal.svg",

  },
  haryana: {
    stateName: "Haryana",
    Capital: "Chandigarh",
    Language : "Hindi",
    Area : "44,212",
    symbol :"HaryanaSeal.png",
  },
  uttarakhand: {
    stateName: "Uttarakhand",
    Capital: "Dehradun",
    Language : "Hindi",
    Area : "53,483",
    symbol :"UttarakhandSeal.svg",
  },
  himachal: {
    stateName: "Himachal Pradesh",
    Capital: "Shimla",
    Language : "Hindi",
    Area : "55,673",
    symbol :"HimachalSeal.svg",
  },
  jk: {
    stateName: " Jammu & Kashmir(UT)",
    Capital: "Srinagar",
    Language : "Kashimiri-Hindi-Dogri",
    Area : "55,538",
    symbol :"JKSeal.svg",
  },
  chandigarh: {
    stateName : "Chandigarh(UT)",
    Capital : "Chandigarh(UT)",
    Language : "Hindi",
    Area : "114",
    symbol :"ChandigarhSeal.svg",
  },
  assam : {
    stateName : "Assam",
    Capital : "Dispur",
    Language : "Assamese_Boro",
    Area : "78,428",
    symbol :"AssamSeal.svg",
  },
  goa :{
    stateName : "Goa",
    Capital : "Panaji",
    Language: "Konkani",
    Area : "3,702",
    symbol :"GoaSeal.svg",
  },
  meghalaya : {
    stateName : "Meghalaya",
    Capital : "Shillong",
    Language : "Khasi-Pnar-Gari",
    Area : "22,429",
    symbol :"MeghalayaSeal.svg",
  },
  sikkim : {
    stateName : "Sikkim",
    Capital : "Gangtok",
    Language : "Sikkimess-Bhutia",
    Area : "7,096",
    symbol :"SikkimSeal.svg",
  },
  arunachal : {
    stateName : "Arunachal Pradesh",
    Capital : "Itanagar",
    Language : "English-Nyishi-Adi",
    Area : "83,743",
    symbol :"ArunachalSeal.svg",
  },
  nagaland : {
    stateName : "Nagaland",
    Capital: " Kohima",
    Language : "Nagamese",
    Area : "16,579",
    symbol :"NagalandSeal.svg",

  },
  manipur : {
    stateName : "Manipur",
    Capital: "Imphal",
    Language: "Manipuri",
    Area : "22,327",
    symbol :"ManipurSeal.svg",
  },
  tripura : {
    stateName : "Tripura",
    Capital : "Agartala",
    Language: "Bengali-Kokborok",
    Area : "10,491",
    symbol :"TripuraSeal.svg",
  },
  ladakh : {
    stateName : "Ladakh(UT)",
    Capital : "Leh",
    Language : "Ladakhi",
    Area : " 59,146",
    symbol :"LadakhSeal.png",
  },
  delhi : {
    stateName : "New Delhi(UT)",
    Capital : "New Delhi",
    Language : "Hindi",
    Area : "1,483",
    symbol :"DelhiSeal.svg",
  },
  andaman: {
    stateName : "Andaman & Nicobar (UT)",
    Capital : "Sri Vijay Puram",
    Language : "Hindi-English",
    Area : "8,249",
    symbol :"AndamanSeal.svg",
  },
  lakshadweep: {
    stateName : "Lakshadweep(UT)",
    Capital : "Kavaratti",
    Language : "Malayalam-Jeseri-Mahl",
    Area : "32",
    symbol :"LakshadweepSeal.png",
  },
  diu : {
    stateName : "Dara-Nagar-Haveli-Daman-Diu (UT)",
    Capital : "Daman",
    Language : "Gujarati-Hindi-English-Portuguese",
    Area : "38",
    symbol :"DadraSeal.svg",
  },

  dadra : {
    stateName : "Dara-Nagar-Haveli-Daman-Diu (UT)",
    Capital : "Daman",
    Language : "Gujarati-Hindi-English-Portuguese",
    Area : "111",
    symbol :"DadraSeal.svg",
  },
  
  daman : {
    stateName : "Dara-Nagar-Haveli-Daman-Diu (UT)",
    Capital : "Daman",
    Language : "Gujarati-Hindi-English-Portuguese",
    Area : "72",
    symbol :"DadraSeal.svg",
  },

};
const statesList = Object.keys(StateData); // List of all the States and UTs 
const states_el = document.querySelectorAll("rect"); // States marked with brown rectangle
const statesText_el = document.querySelectorAll("text");// States Name Text Elements. 
// Adding styles to all text elements
for (i = 0; i < statesText_el.length; i++) {
 
  statesText_el[i].classList.add("textStyle");
} 
// All States Loop -- Adding styling and event lisners. 
for (let i = 0; i < states_el.length; i++) {
  states_el[i].classList.add("states_squares");
  let st_id = states_el[i].attributes[0].nodeValue;
  let st_el = `${st_id}_text`;
  let st_textObj = document.getElementById(st_el);
  let st_name = StateData[st_id].stateName;
  //console.log(st_id, st_el, st_name);
  states_el[i].addEventListener("mouseenter", () => state_info(st_id)());
  states_el[i].addEventListener("mouseenter", () => {st_textObj.innerHTML = st_name; });
  states_el[i].addEventListener("mouseleave", () => {st_textObj.innerHTML = "";  });
}

const state_info = (text) => () => {
  getDetail(text);
};
// Union Territory loop
const ut_el = document.querySelectorAll("circle"); // All UTs with blue circles. 
for (let i = 0; i < ut_el.length; i++) {
  let st_ut = ut_el[i].attributes[0].nodeValue;
  let u_el = `${st_ut}_text`;
  let ut_textObj = document.getElementById(u_el);
  let ut_name = StateData[st_ut].stateName;
  ut_el[i].classList.add("ut_circles");
  ut_el[i].addEventListener("mouseenter", () => state_info(st_ut)())
  ut_el[i].addEventListener("mouseenter", () => {ut_textObj.innerHTML = ut_name; });
  ut_el[i].addEventListener("mouseleave", () => {ut_textObj.innerHTML = "";  });
}
// const score_el = document.getElementById("Score");
// const guessState_el = document.getElementById("guessState");
// const button_el = document.getElementById("gamebutton");
// const telengana_el = document.getElementById("telengana");
// const telenganatext_el = document.getElementById("telengana_text");
// const andhra_el = document.getElementById("andhra");
// const andhratext_el = document.getElementById("andhra_text");
// const tamilnadu_el = document.getElementById("tamilnadu");
// const tamilnadutext_el = document.getElementById("tamilnadu_text");
// const kerala_el = document.getElementById("kerala");
// const keralatext_el = document.getElementById("kerala_text");
// const rajasthan_el = document.getElementById("rajasthan");
// const rajasthantext_el = document.getElementById("rajasthan_text");
// const karnataka_el = document.getElementById("karnataka");
// const karnatakatext_el = document.getElementById("karnataka_text");
// const maharastra_el = document.getElementById("maharastra");
// const maharastratext_el = document.getElementById("maharastra_text");
// const gujarat_el = document.getElementById("gujarat");
// const gujarattext_el = document.getElementById("gujarat_text");
// const mp_el = document.getElementById("mp");
// const mptext_el = document.getElementById("mp_text");
// const up_el = document.getElementById("up");
// const uptext_el = document.getElementById("up_text");
// const wb_el = document.getElementById("wb");
// const wbtext_el = document.getElementById("wb_text");
// const odisha_el = document.getElementById("odisha");
// const odishatext_el = document.getElementById("odisha_text");
// const bihar_el = document.getElementById("bihar");
// const bihartext_el = document.getElementById("bihar_text");
// const jarkhand_el = document.getElementById("jarkhand");
// const jarkhandtext_el = document.getElementById("jarkhand_text");
// const chhattish_el = document.getElementById("chhatish");
// const chhattishtext_el = document.getElementById("chhatish_text");
// const puducherry_el = document.getElementById("puducherry");
// const puducherrytext_el = document.getElementById("puducherry_text");
// const mizoram_el = document.getElementById("mizoram");
// const mizoramtext_el = document.getElementById("mizoram_text");
// const punjab_el = document.getElementById("punjab");
// const punjabtext_el = document.getElementById("punjab_text");
// const haryana_el = document.getElementById("haryana");
// const haryanaext_el = document.getElementById("haryana_text");
// const uttarakhand_el = document.getElementById("uttarakhand");
// const uttarakhandtext_el = document.getElementById("uttarakhand_text");
// const himachal_el = document.getElementById("himachal");
// const himachaltext_el = document.getElementById("himachal_text");
// const jk_el = document.getElementById("jk");
// const jktext_el = document.getElementById("jk_text");
// const chandigarh_el = document.getElementById("chandigarh");
// const chandigarhtext_el = document.getElementById("chandigarh_text");
// const assam_el = document.getElementById("assam");
// const assamtext_el = document.getElementById("assam_text");
// const goa_el = document.getElementById("goa");
// const goaext_el = document.getElementById("goa_text");
// // const meghalaya_el = document.getElementById("meghalaya");
// // const meghalayatext_el = document.getElementById("meghalaya_text");

// Functions

function getDetail(stateid) {
  // console.log("received", stateid);
  stateName_el.innerHTML = `State : ${StateData[stateid].stateName}`;
  stateCapital_el.innerHTML = `Capital : ${StateData[stateid].Capital}`;
  stateLanguage_el.innerHTML = `Language : ${StateData[stateid].Language}`;
  stateArea_el.innerHTML = `Area(sq Km) : ${StateData[stateid].Area}`;
  const path = "-indiamap/src/StateSymbols";
  stateSymbol_el.src = `${path}/${StateData[stateid].symbol}`;

}

const infoBox_el = document.getElementById("infoBox");
const stateName_el = document.getElementById("stateName");
const stateCapital_el = document.getElementById("stateCapital");
const stateLanguage_el = document.getElementById("stateLanguage");
const stateArea_el = document.getElementById("stateArea");
const stateSymbol_el = document.getElementById("symbolPic")




