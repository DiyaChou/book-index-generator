const fs = require("fs");

let pages = [];
let excludedWords = [];

// Read all pages of the book
fs.readdir("pages", (err, files) => {
  if (err) throw err;

  files.forEach((file, index) => {
    fs.readFile(`pages/${file}`, "utf8", (err, data) => {
      if (err) throw err;
      let pageNumber = parseInt(file.replace(/[^0-9]/g, ""), 10);
      pages.push({ number: pageNumber, content: data });
      if (pages.length === files.length) readExcludedWords();
    });
  });
});

// Read the list of words to be excluded from the index
function readExcludedWords() {
  fs.readFile("exclude-words.txt", "utf8", (err, data) => {
    if (err) throw err;
    excludedWords = data.split("\n");
    createIndex();
  });
}

// Create an index of words and their page references
function createIndex() {
  let index = {};

  pages.forEach((page) => {
    let words = page.content.split(/\b/);
    words.forEach((word) => {
      word = word.toLowerCase().replace(/[^a-z]+/g, "");
      if (word === "" || excludedWords.includes(word)) return;
      if (!index[word]) index[word] = [];
      if (!index[word].includes(page.number)) index[word].push(page.number);
    });
  });

  // Sort the words in the index alphabetically
  let sortedIndex = {};
  Object.keys(index)
    .sort()
    .forEach((word) => {
      sortedIndex[word] = index[word];
    });

  // Output the index with the requested text at the top to a file
  let output = "Word : Page Numbers\n-------------------\n";
  Object.keys(sortedIndex).forEach((word) => {
    let pages = sortedIndex[word].sort().join(",");
    output += `${word}: ${pages}\n`;
  });

  fs.writeFile("index.txt", output, "utf8", (err) => {
    if (err) throw err;
    console.log("Index has been saved to index.txt");
  });
}
