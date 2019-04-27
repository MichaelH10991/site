// calculating the value of PI

function calcPI(iterations) {
  let pi = 0,
    divisor = 1

  for (i = 0; i <= iterations; i++) {
    pi = pi + 4 / divisor - 4 / (divisor + 2)
    divisor += 4
  }
  document.getElementById("output1").value = pi.toFixed(10)
}

// hacky implementation of the fib sequence
function getFibList(n = document.getElementById("fib_iterations").value) {
  console.log(n)
  if (isNaN(n) || n <= 0) {
    console.log("triggered")
    document.getElementById("output1").value = "Enter positive number!"
  }
  let a = 0,
    b = 1,
    sum = 0,
    fibList = []

  for (i = 0; i < n; i++) {
    sum = a + b
    a = b
    b = sum
    fibList[i] = sum
  }
  document.getElementById("output1").value = fibList.join(", ")
}

let mLText =
  "My dear old ~ sat me down to hear some words of wisdom 1. Give a man a ~ and you ~ him for a  day ~ a man to ~ and he'll ~ forever 2. He who ~ at the right time can ~ again 3. Always wear ~ ~ in case you're in a ~ 4. Don't use your ~ to wipe your ~ Always have a clean ~ with you"

let mLArray = mLText.split(" ")

let inputArray = []

function madLibGenerator() {
  createInputArray()
  console.log(inputArray)
  if (checkForMissingInput()) {
    document.getElementById("output1").value = "Enter all the vaues u numpty!"
  } else {
    createMLSentence()
  }
}

function createInputArray() {
  for (i = 0; i <= 13; i++) {
    inputArray[i] = document.getElementById("i" + i).value
  }
}

function checkForMissingInput() {
  let defaultArrayValues = [
    "Person",
    "Noun",
    "Verb",
    "Adjective",
    "Plural Verb",
    "Body Part",
    "Event"
  ]

  for (i = 0; i < inputArray.length; i++) {
    // if it returns -1 we know that they havent changed one of the defaults
    if (defaultArrayValues.indexOf(inputArray[i]) > -1) {
      return true
    }
  }
  return false
}

function createMLSentence() {
  for (i = 0; i < mLArray.length; i++) {
    let matchIndex = mLArray.indexOf("~")
    mLArray[matchIndex] = inputArray[i]
  }
  document.getElementById("output1").value = mLArray.join(" ")
}
