// pages

var introPage = $('.introPage')

var nextCellButton = $('.nextCellButton')
nextCellButton.show();

nextCellButton.click(function(){
  introPage.hide();
  cellPage.show();
});

var cellPage = $('.cellPage')
cellPage.hide();

var nextConsoleButton = $('.nextConsoleButton')
nextConsoleButton.show();

nextConsoleButton.click(function(){
  cellPage.hide();
  cellConsolePage.show();
});

//Cut the console cables
var cellConsolePage = $('.cellConsolePage')
cellConsolePage.hide();

var redButton = $('.redButton')
redButton.show();

var blueButton = $('.blueButton')
blueButton.show();

var whiteButton = $('.whiteButton')
whiteButton.show();

var blackButton = $('.blackButton')
blackButton.show();

redButton.click(function(){ // Wrong
  cellConsolePage.hide();
  missionFailurePage.show();
});

blueButton.click(function(){ //Correct button
  cellConsolePage.hide();
  hallwayPage.show();
});

whiteButton.click(function(){ // Wrong
  cellConsolePage.hide();
  missionFailurePage.show();
});

blackButton.click(function(){ // Wrong
  cellConsolePage.hide();
  missionFailurePage.show();
});

//Leave the hallway
var hallwayPage = $('.hallwayPage')
hallwayPage.hide();

var sheriffDoorButton = $('.sheriffDoorButton')
sheriffDoorButton.show();

sheriffDoorButton.click(function(){ // Wrong
  hallwayPage.hide();
  missionFailurePage.show();
});

var endDoorButton = $('.endDoorButton')
endDoorButton.show();

endDoorButton.click(function(){
  hallwayPage.hide();
  outsidePage.show();
});
//Choose street or alley
var outsidePage = $('.outsidePage')
outsidePage.hide();

var gangButton = $('.gangButton')
gangButton.show();

var mainButton = $('.mainButton')
mainButton.show();

gangButton.click(function(){
  outsidePage.hide();
  gangPage.show();
});

mainButton.click(function(){ // ADD MAIN STREET PAGE
  outsidePage.hide();
  mainPage.show();
});

//Gang Territory
var gangPage = $('.gangPage')
gangPage.hide();

var proceedGangButton = $('.proceedGangButton')
proceedGangButton.show();

proceedGangButton.click(function(){
  gangPage.hide();
  fightGangPage.show();
});

var safeGangPage = $('.safeGangPage')
safeGangPage.hide();

var fightGangPage = $('.fightGangPage')
fightGangPage.hide();

var counterAttackButton = $('.counterAttackButton')
counterAttackButton.show();

var blockButton = $('.blockButton')
blockButton.show();

counterAttackButton.click(function(){
  fightGangPage.hide();
  fightWinPage.show();
});

var fightWinPage = $('.fightWinPage')
fightWinPage.hide();

var proceedApartButton = $('.proceedApartButton')
proceedApartButton.show();

proceedApartButton.click(function(){
  fightWinPage.hide();
  theApartmentPage.show();
});

//At the apartment
var theApartmentPage = $('.theApartmentPage')
theApartmentPage.hide();

var logInButton = $('.logInButton')
logInButton.show();

logInButton.click(function(){
  theApartmentPage.hide();
  hackIntroPage.show();
});


//Hacking
var hackIntroPage = $('.hackIntroPage')
hackIntroPage.hide();

var proceedButton = $('.proceedButton')
proceedButton.show();

proceedButton.click(function(){
  hackIntroPage.hide();
  hackPromptPage.show();
});

var hackPromptPage = $('.hackPromptPage')
hackPromptPage.hide();

var hackSafeNodeButton = $('.hackSafeNodeButton')
hackSafeNodeButton.show();

hackSafeNodeButton.click(function(){
  hackPromptPage.hide();
  detectedSafeNodePage.show();
});

var detectedSafeNodePage = $('.detectedSafeNodePage')
detectedSafeNodePage.hide();
hackSafeNodeButton.show();

hackSafeNodeButton.click(function(){
  detectedSafeNodePage.hide();
  gameWinPage.show();
});

var gameWinPage = $('.gameWinPage')
gameWinPage.hide();

var sneakingOnesieButton = $('.sneakingOnesieButton')
sneakingOnesieButton.show();

sneakingOnesieButton.click(function(){
  gameWinPage.hide();
  toBeContinuedPage.show();
});

var missionFailurePage = $('.missionFailurePage')
missionFailurePage.hide();

var playAgainButton = $('.playAgainButton')
playAgainButton.show();

playAgainButton.click(function(){
  missionFailurePage.hide();
  cellPage.show();
});

var toBeContinuedPage = $('.toBeContinuedPage')
toBeContinuedPage.hide();
