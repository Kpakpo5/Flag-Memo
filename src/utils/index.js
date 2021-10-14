export function getRandomItem (items) {
    const currentItemIndex = Math.floor(Math.random() * (items.length));
    console.log(currentItemIndex);
    const currentItem = items[currentItemIndex];
    return currentItem;
}

export function get3RandomItems (array) {
    function shuffledArray(array) {
        let currentIndex = array.length, randomIndex;
        while (currentIndex !== 0) {
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
          [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
        } 
        return array;
      }
    const randomItems = shuffledArray(array).slice(1,4);
    return randomItems;
}