const colorsArr = ['green', 'red', 'rgba(133,122,200)', '#f15025']; 

const btn = document.getElementById('btn');  
const color = document.querySelector('.color');  

btn.addEventListener('click', () => {   
  const randomNumber = getRanNum(); 
  console.log(randomNumber);
  document.body.style.backgroundColor = colorsArr[randomNumber];
  color.textContent = colorsArr[randomNumber]

}); 



function getRanNum(){
  return Math.floor(Math.random() * colorsArr.length); 
}

// Math.floor() = round down to closet integer 