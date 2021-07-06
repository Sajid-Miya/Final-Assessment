var customName = document.getElementById('name');
var randomize = document.querySelector('.random');
var story = document.querySelector('.story');

function randomValueFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// 2. RAW TEXT STRINGS

var storyText = "It was 40 °C outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";
var insertX = ['Obama', 'Oli', 'Trump'];
var insertY = ['the soup kitchen', 'Disneyland', 'the White House'];
var insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];


// 3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION

function result() {
  var newStory = storyText;
  var xItem = randomValueFromArray(insertX);
  var yItem = randomValueFromArray(insertY);
  var zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(/:insertx:/g, xItem).replace(/:inserty:/g, yItem).replace(/:insertz:/g, zItem);

  if (customName.value !== '') {
    var name = customName.value;
    name = name.charAt(0).toUpperCase() + name.slice(1);
    console.log(name);
    newStory = newStory.replace(/Bob/g, name);
  }


  story.textContent = newStory;
  story.style.visibility = 'visible';
}

randomize.addEventListener('click', result);