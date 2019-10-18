function OpenVoteView() {
  //Look for the user in players  
  ui = SpreadsheetApp.getUi();
  var voteUi = HtmlService.createTemplateFromFile('VoteView')
    .evaluate()
    .setWidth(1600)
    .setHeight(1200);
  ui.showModalDialog(voteUi, "How enlightened do you think i am?");
}

function onOpen(){
  ui = SpreadsheetApp.getUi();
  var menu = ui.createMenu('HEDYT3');
  menu.addItem("Open",'OpenVoteView');
  menu.addToUi();
}

function initEnlightenment(info) {
  console.log(info);
}

function getEnlightenmentInfo() {
  var userMail = Session.getActiveUser().getEmail();
  var candidateMail = userMail; //set from request param if available

  var result = {
    "isSelf": candidateMail == userMail,
    "candidateMail": candidateMail,
    "enlightenmentLevel": 0, //number of votes
    "enlightenment": 0, //average vote
  };
  return result;
}
