const seasonOne = document.querySelector('.all-s1');
const seasonTwo = document.querySelector('.all-s2');

const aboutOne = document.querySelector('.about-s1');
const aboutTwo = document.querySelector('.about-s2');

function choice1(select) {
  if (select.options[select.selectedIndex].value === 's1') {
    seasonTwo.style.display = 'none';
    seasonOne.style.display = 'grid';
    aboutOne.style.display = 'block';
    aboutTwo.style.display = 'none';
  } else {
    seasonOne.style.display = 'none';
    seasonTwo.style.display = 'grid';
    aboutTwo.style.display = 'block';
    aboutOne.style.display = 'none';
  }
}


