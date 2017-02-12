'use strict';

const User = function (name, email) {
  this.name = name;
  this.email = email;
  this.runs = [];
};

const Run = function (date, distance, timeTaken) {
  this.date = date;
  this.distance = distance;
  this.timeTaken = timeTaken;
};

User.prototype.totalDistance = function () {
  let runs = this.runs;
  let max = runs.length;
  let result = 0;
  for (let i = 0; i < max; i++) {
    result += runs[i].distance;
  } return result;
};

User.prototype.totalTime = function () {
  let runs = this.runs;
  let max = runs.length;
  let result = 0;
  for (let i = 0; i < max; i++) {
    result += runs[i].timeTaken;
  } return result;
};

User.prototype.longestRun = function () {
  let runs = this.runs;
  let max = runs.length;
  let result = runs[0].distance;
  for (let i = 0; i < max; i++) {
    let current = runs[i].distance;
    if (result < current) {
      result = current;
    }
  } return result;
};

User.prototype.averageSpeed = function () {
  return this.totalDistance() / this.totalTime();
};

const mcFaceRuns = new User('Person McFace', 'wdi@personmcface.com');

mcFaceRuns.runs.push(new Run('2015-05-25', 1200, 600));
mcFaceRuns.runs.push(new Run('2015-05-25', 1400, 800));
mcFaceRuns.runs.push(new Run('2015-05-25', 1600, 400));

// User.prototype.totalDistance = function () {
//   let result = 0;
//   for (let i = 0; i < this.runs.length; i++) {
//     result += this.runs[i].distance;
//   } return result;
// };

module.exports = mcFaceRuns;

// In node, use like so:
//
//    const runTracker = require('./lib/runs');
//    let mcFace = new runTracker.User('Person McFace', 'wdi@personmcface.com');
