const exampleSongData = require("./data/songs");

// Problem #17
/**
 * Finds the album with the longest average song runtime.
 * @param {Object[]} songs - An array of songs.
 * @returns {string} The name of the album with the longest average song runtime.
 */

function findAlbumWithLongestAverageRuntime(songs) {
  const albumAverageRuntime = {};
  let albumName = "";
  let longestAvgRuntime = 0;

  songs.forEach((song) => {
    // Create and update your albumAverageRuntime object - Gather your data***
    if (!albumAverageRuntime[song.album]) {
      // Create key values
      albumAverageRuntime[song.album] = {
        totalRuntime: song.runtimeInSeconds,
        songCount: 1,
        avgRuntime: song.runtimeInSeconds,
      };
    } else {
      // Update object
      albumAverageRuntime[song.album].totalRuntime += song.runtimeInSeconds;
      albumAverageRuntime[song.album].songCount++;
      // Get the average from our object's values
      albumAverageRuntime[song.album].avgRuntime = +(
        albumAverageRuntime[song.album].totalRuntime /
        albumAverageRuntime[song.album].songCount
      ).toFixed(2);
    }
    // Update avgRuntime object if the the average is greater than longestAvgRuntime
    if (albumAverageRuntime[song.album].avgRuntime > longestAvgRuntime) {
      // Update the longestAvgRuntime variable
      longestAvgRuntime = albumAverageRuntime[song.album].avgRuntime;
      // Update albumName variable
      albumName = song.album;
    }
  });

  return albumName;
}
