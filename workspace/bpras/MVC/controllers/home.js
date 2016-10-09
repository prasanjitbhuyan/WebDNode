var template = require('../views/template-main');  
var test_data = require('../model/test-data');  
exports.get = function(req, res) {  
  var teamlist = test_data.teamlist;
  var strTeam = "",
    i = 0;
  for (i = 0; i < teamlist.count;) {
    strTeam = strTeam + "<li>" + teamlist.teams[i].country + "</li>";
    i = i + 1;
  }
  strTeam = "<ul>" + strTeam + "</ul>";
  res.writeHead(200, {
    'Content-Type': 'text/html'
  });
  console.log("IN Controller get both Model and view -process the Model data and send to view");
  res.write(template.build("Test web page on node.js", "Hello there", "<p>The teams in Group " + teamlist.GroupName + " for Euro 2012 are:</p>" + strTeam));
  res.end();
};
