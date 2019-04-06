// // dependencies
let path = require("path");

let dragQueens = require("../data/drag_queens.js");
// need to pull in drag queens
// need to allow for adding new drag queen and showing drag queen entries
// need to add to drag queens from user input

// using let dragQueens above to use the path to the friend.js
module.exports = function(app) {
  app.get("/api/dragQueenList", function(req, res) {
    res.json(dragQueens);
  });
  // console.log("DRAG QUEEN ARRAY", dragQueens[0]);

  // add new drag queen entry
  app.post("/api/dragQueenList", function(req, res) {
    // capture the user input object
    let userInput = req.body;

    // console.log('userInput = ' + JSON.stringify(userInput));
    let userResponses = userInput.scores;
    // console.log("userResponses = " + userResponses);

    // set match variables
    let matchName = "";
    let matchImage = "";
    // make the initial value big for comparison between scores
    let totalDifference = 100;

    // loop through drag queens in list
    for (var i = 0; i < dragQueens.length; i++) {
      // compute difference for each question to find match against responses
      let diff = 0;
      for (let j = 0; j < userResponses.length; j++) {
        diff += Math.abs(dragQueens[i].scores[j] - userResponses[j]);
      }
      console.log("diff = " + diff);

      // lowest different is match
      if (diff < totalDifference) {
        totalDifference = diff;
        matchName = dragQueens[i].name;
        matchImage = dragQueens[i].photo;
      }
    }
    // adds user to drag queen list
    dragQueens.push(userInput);

    // send match response
    res.json({ status: "OK", matchName: matchName, matchImage: matchImage });
  });
};
