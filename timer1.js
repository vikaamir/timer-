time = process.argv.slice(2);

for (let sound of time){
  sound = Number(sound)
  if (sound < 0 || typeof sound != "number") {
    continue 
  } else {
  setTimeout(() => {
    process.stdout.write('\x07');
  }, sound * 1000);
}
};
