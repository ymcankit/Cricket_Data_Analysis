/* -------------- STAGE 1 ------------ */

// JavaScript code JavaScript is better suited for web scrapping because a JavaScript code runs inside the browser. So, it becomes easier for that.
 
//------- 1.a Interaction Code ------ //

navigate('https://stats.espncricinfo.com/ci/engine/records/team/match_results.html?id=14450;type=tournament');
collect(parse());

// what I'm saying in my collector is go to that page and then collect parse. Now when you say parse, it is going to execute all this code present in parser code. Now once again this is a JavaScript code, where I am locating the engineTable table, then I am going into tbody and then tr. And this one is an array. So if you go through this array one by one, you'll be able to get all these records, so and that's exactly what I'm doing here.


//------- 1.b Parser Code ------------//
//Step1: create an array to store all the records
let matchSummary = []

//Step2: Selecting all rows we need from target table
const allRows = $('table.engineTable > tbody > tr.data1');

//Step3: Looping through each rows and get the data from the cells(td)
 allRows.each((index, element) => {
 		const tds = $(element).find('td');   //find the td
		matchSummary.push({
              'team1':  $(tds[0]).text(),
              'team2':  $(tds[1]).text(),
              'winner':  $(tds[2]).text(),
              'margin':  $(tds[3]).text(),
              'ground': $(tds[4]).text(),
              'matchDate': $(tds[5]).text(),
              'scorecard':   $(tds[6]).text() 
		})   
 })


// step4: Finally returning the data
return {
  "matchSummary": matchSummary
};