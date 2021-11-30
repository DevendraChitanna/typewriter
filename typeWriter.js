const sentence = "hello there from lighthouse labs";
let time = 50
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, time += 50)
}

setTimeout(() => {
  console.log("\n")
}, time = (sentence.length * 50) + 50)


