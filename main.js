

const button = document.querySelector('.submit');
button.addEventListener('click', printPage);
function printPage(){
   const card = document.getElementById('ratingCard');
    card.style.display = 'none';
    const card1 = document.getElementById('card1');
    card1.style.display = 'block';

}

const setSelectedRating = current_iterm => {
    current_rating = document.querySelector('.rating-desc');
    current_rating.innerText = `You selected ${current_iterm} out of 5`;
}

const resetListItemRating = listIterm => {
    listIterm.style.backgroundColor = 'hsl(213, 19%, 18%)';
    listIterm.style.color = 'hsl(217, 12%, 63%)';
}

const paintRating = (list,current_iterm) => {
    list.forEach((listIterm, j) => {
        resetListItemRating(listIterm);
        if(current_iterm >= j+1) {
            listIterm.style.backgroundColor = 'hsl(217, 12%, 63%)';
            listIterm.style.color = 'hsl(0, 0%, 100%)';
        }
    })
}

const registerListItemOnClickHandler = () => {
const list = document.querySelectorAll('li');
list.forEach((listIterm, i) => {
    listIterm.onclick = function () {
        let current_iterm = i + 1;
        setSelectedRating(current_iterm);
        paintRating(list,current_iterm);
    }
})
}

registerListItemOnClickHandler();


 

