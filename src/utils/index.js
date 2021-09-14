export function getRandomItem (items) {
    const currentItemIndex = Math.floor(Math.random() * (items.length));
    console.log(currentItemIndex);
    const currentItem = items[currentItemIndex];
    return currentItem;
}