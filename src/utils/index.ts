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
    console.log(randomItems);
    return randomItems;
}

export function handleEmojiDisplay (result: number, data) {
  if (result < 2) {
    return data.worst;
  }
  else if (result >= 2 && result < 5) {
    return data.bad;
  }
  else if (result >= 5 && result < 8) {
    return data.mediocre;
  }
  else if (result >= 8 && result < 10) {
    return data.almost;
  }
  else if (result >= 10 && result < 14) {
    return data.good;
  }
  else if (result >= 14 && result < 17) {
    return data.veryGood;
  }
  else if (result >= 17 && result < 21) {
    return data.excellent;
  }
  else if (result === 21) {
    return data.perfect;
  }
}