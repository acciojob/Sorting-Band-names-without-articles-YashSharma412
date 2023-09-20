//your code here
let mp = {};
let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];
// console.log(arr);
let articleLessArray = [];
let articleLessItem = [];

let regexp = /\bthe\b|\ban\b|\ba\b/gi;
for(let i=0; i<touristSpots.length; i++){
	articleLessItem = touristSpots[i].replace(regexp, "").trim();
	articleLessItem = articleLessItem.replace(/  /g, " ");
	articleLessArray.push(articleLessItem);
	mp[articleLessItem]=touristSpots[i];
}
// console.log(articleLessArray);
articleLessArray.sort();
// console.log(articleLessArray);
let ans = [];
// for(let i in articleLessArray){
// 	ans.push(mp[articleLessArray[i]]);
// }
for(let i of articleLessArray){
	ans.push(mp[i]);
}

let band_list_container = document.getElementById("band");
for(let band of ans){
	let li_band = document.createElement("li");
	li_band.innerText = band;
	band_list_container.appendChild(li_band);
}







