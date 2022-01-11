/*
* Advent of code - Day 1 - https://adventofcode.com/2021/day/1
*/
import fetch from 'node-fetch'
import fs from 'fs'

const measurements = fs.readFileSync('dayonedata.txt').toString().split("\n").map(Number);
let increases = 0;

const totalIncreasesInMeasurement = () => {
  for (let i = 1; i < measurements.length; i++) {
    let prev = measurements[i - 1]
    let cur = measurements[i]
    if (cur > prev) {
      increases++;
    }
  }
  return increases
}

const totalIncreasesInMeasureWindows = () => {
  for (let i = 3; i < measurements.length; i++) {
    let prev = (
      measurements[i - 1] + 
      measurements[i - 2] + 
      measurements[i - 3] 
    )

    let cur = (
      measurements[i] + 
      measurements[i - 1] + 
      measurements[i - 2]
    )

    if (cur > prev) {
      increases++;
    }
  }
  return increases;
}

console.log(totalIncreasesInMeasurement())
console.log(totalIncreasesInMeasureWindows())
