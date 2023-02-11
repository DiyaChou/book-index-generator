# Book Index Generator

This is a Node.js program that reads the pages of a book and creates an index of words, giving a list of pages on which each word is present.

## Requirements

    Node.js and npm must be installed on your computer.

## Usage

1. Clone this repository to your local machine using **git clone https://github.com/DiyaChou/book-index-generator.git**.
2. Navigate to the repository directory using **cd book-index-generator**.
3. Install the required dependencies using **npm install**.
4. Create a directory named pages in the root of the repository.
5. Add the pages of your book to the pages directory. The pages should be named as **page1.txt**, **page2.txt**, and so on.
6. Create a text file named **exclude-words.txt** in the root of the repository. Add the words that you want to exclude from the index to this file, one word per line.
7. Run the program using **node index.js**.
8. The program will create an index file named **index.txt** in the root of the repository. The index will contain a list of words and the pages on which each word is present.

## Features

    The program removes words that appear in the exclude-words.txt file from the index.
    The program outputs the index to a file named index.txt.
    The words and page numbers in the index are sorted alphabetically and in ascending order, respectively.
