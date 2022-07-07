
 
// const li1 = document.getElementById('li1');
// li1.addEventListener('click', onclick);
// function onclick(event) {
//     event.target.style.backgroundColor = 'hsl(217, 12%, 63%)';
//     event.target.style.color = 'hsl(0, 0%, 100%)';
// }

const button = document.querySelector('.submit');
button.addEventListener('click', printPage);
function printPage(){
   const card = document.getElementById('ratingCard');
    card.style.display = 'none';
    const card1 = document.getElementById('card1');
    card1.style.display = 'block';

}

const list = document.querySelectorAll('li');
current_rating = document.querySelector('.rating-desc');
list.forEach((listIterm, i) => {
    listIterm.onclick = function () {
        let current_iterm = i + 1;
        current_rating.innerText = `You selected ${current_iterm} out of 5`;

        list.forEach((listIterm, j) => {
            listIterm.style.backgroundColor = 'hsl(213, 19%, 18%)';
                listIterm.style.color = 'hsl(217, 12%, 63%)';
            if(current_iterm >= j+1) {
                listIterm.style.backgroundColor = 'hsl(217, 12%, 63%)';
                listIterm.style.color = 'hsl(0, 0%, 100%)';
            }else {
                console.log("hello bibi");
    
            }
        })
    }
})




 

