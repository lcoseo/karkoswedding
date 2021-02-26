const words = new URLSearchParams(window.location.search);

const year = words.get('year');
const noun1 = words.get('noun-1');
const noun2 = words.get('noun-2');
const genderNoun = words.get('gNoun');
const adjective1 = words.get('adj-1');
const verbPast = words.get('verb-1');
const verbPresent = words.get('verb-2');
const collegeClass = words.get('colClass');
const noun3 = words.get('noun-3');
const adjective2 = words.get('adj-2');
const phrase1 = words.get('phrase-1');
const phrase2 = words.get('phrase-2');

const story = `<p>Peter and Lauren met in ${year}. They ended up in the same lab class at the University of Michigan. One day, Peter noticed that Lauren had a ${noun1}. He went up to her and asked “Excuse me, Miss. Would you fancy a ${noun2} with a ${genderNoun} such as myself?” She replied, “Not in your lifetime, pal.” He was ${adjective1}, but he didn’t give up! The next semester, he ${verbPast} into your computer and learned her class schedule so he could ${verbPresent} one of her classes. They somehow ended up in the same ${collegeClass} class. Peter was the only ${noun3} in the pole class so he attracted all of the females with his hot bod and sick skills. Lauren got extremely ${adjective2} so she walked over and started screaming ${phrase1} To which he replied, ${phrase2}. They have been in love ever since. </p>`;
// console.log(story);

// Grabbing the story element
const storyEl = document.getElementById('story');
// Populating the story element with the value of the story variable
storyEl.innerHTML = story;