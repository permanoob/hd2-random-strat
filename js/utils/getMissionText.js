const getMissionText = () => {
  if (missionCounter === 1) {
    return 'Diff: 3, Mission: 1 -- Main: 1-2, Optional: 2';
  }
  if (missionCounter === 2) {
    return 'Diff: 3, Mission: 2 -- Main: 1-2, Optional: 2';
  }
  if (missionCounter === 3) {
    return 'Diff: 4, Mission: 1 -- Main: 1-2, Optional: 3';
  }
  if (missionCounter === 4) {
    return 'Diff: 4, Mission: 2 -- Main: 1-2, Optional: 3';
  }
  if (missionCounter === 5) {
    return 'Diff: 5, Mission: 1 -- Main: 1-2, Optional: 3';
  }
  if (missionCounter === 6) {
    return 'Diff: 5, Mission: 2 -- Main: 1-2, Optional: 3';
  }
  if (missionCounter === 7) {
    return 'Diff: 5, Mission: 3 -- Main: 1-2, Optional: 3';
  }
  if (missionCounter === 8) {
    return 'Diff: 6, Mission: 1 -- Main: 2-3, Optional: 3-4';
  }
  if (missionCounter === 9) {
    return 'Diff: 6, Mission: 2 -- Main: 2-3, Optional: 3-4';
  }
  if (missionCounter === 10) {
    return 'Diff: 6, Mission: 3 -- Main: 2-3, Optional: 3-4';
  }
  if (missionCounter === 11) {
    return 'Diff: 7, Mission: 1 -- Main: 3, Optional: 4';
  }
  if (missionCounter === 12) {
    return 'Diff: 7, Mission: 2 -- Main: 3, Optional: 4';
  }
  if (missionCounter === 13) {
    return 'Diff: 7, Mission: 3 -- Main: 3, Optional: 4';
  }
  if (missionCounter === 14) {
    return 'Diff: 8, Mission: 1 -- Main: 3-4, Optional: 4';
  }
  if (missionCounter === 15) {
    return 'Diff: 8, Mission: 2 -- Main: 3-4, Optional: 4';
  }
  if (missionCounter === 16) {
    return 'Diff: 8, Mission: 3 -- Main: 3-4, Optional: 4';
  }
  if (missionCounter === 17) {
    return 'Diff: 9, Mission: 1 -- Main: 3-4, Optional: 5';
  }
  if (missionCounter === 18) {
    return 'Diff: 9, Mission: 2 -- Main: 3-4, Optional: 5';
  }
  if (missionCounter === 19) {
    return 'Diff: 9, Mission: 3 -- Main: 3-4, Optional: 5';
  }
  if (missionCounter === 20) {
    return 'Diff: 10, Mission: 1 -- Main: 3-4, Optional: 5';
  }
  if (missionCounter === 21) {
    return 'Diff: 10, Mission: 2 -- Main: 3-4, Optional: 5';
  }
  if (missionCounter === 22) {
    return 'Redemption... -- Main: 3-4, Optional: 5';
  }
};
