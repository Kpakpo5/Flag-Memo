export function getRandomItem (items: any[]) {
    const currentItemIndex = Math.floor(Math.random() * (items.length));
    const currentItem = items[currentItemIndex];
    return currentItem;
}

export function get3RandomItems (array: any[]) {
  // Fisher-Yates Shuffle
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

export function handleEmojiDisplay (percent: number, data:any) {
  if (percent < 30) {
    return data.mediocre;
  }
  else if (percent >= 30 && percent < 50) {
    return data.notBad;
  }
  else if (percent >= 50 && percent < 70) {
    return data.good;
  }
  else if (percent >= 70 && percent < 90) {
    return data.excellent;
  }
  else  return data.master;
 
}