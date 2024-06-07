export function isIsogram(str: string): boolean {
  let status = true;
  loop1:
  for (let i = 0; i < str.length; i++) {
    loop2:
    for (let j = i + 1; j < str.length; j++) {
      if (str[i].toLowerCase() === str[j].toLowerCase()) {
        status = false;
        break loop1;
      }
    }
  }
  return status;
}

console.log(isIsogram("Dermatoglyphics"));
