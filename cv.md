# Konstantin Kozlov
__Junior Front-End Developer__
## Contacts

- __Email__ kozlovkv174@gmail.com
- __GitHub__ [EmeraldBoar](https://github.com/EmeraldBoar)
- __Telegram__  [@fariarbe](https://t.me/fariarbe)

## About me
Hello! I am a junior front-end developer. I have a weakness for high-quality and intuitive interfaces.

> "Bad programmers worry about the code. Good programmers worry about data structures and their relationships." [Linus Torvalds](https://en.wikipedia.org/wiki/Linus_Torvalds)


## Hard Skills

- __HTML__
- __CSS__
- __JavaScript__
- __Sass / Scss__
- __Git__
- __Gulp__
- __BEM__

## Code Example

```sh
function binarySearch (list, item) {
  let low = 0,
    high = list.length - 1,
    mid = Math.floor((low + high) / 2),
    guess = list[mid];
  while(low <= high){
    mid = low + high;
    guess = list[mid];
    if(guess === item){
      return mid;
    }
    if(guess > item){
      high = mid - 1;
    } else {
      low = mid +1;
    }
  }
  return 'Значения не существует'
};
```