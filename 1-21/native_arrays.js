const exampleSongData = require("./data/songs");

/**
 * Logs the longest song title.
 * @param {Object[]} songs - An array of songs.
 */
function printLongestSongTitle(songs) {
  // songs.sort((songA, songB) => songB.title.length - songA.title.length)
  // console.log(songs[0].title)
  // let longestSongLength = 0;
  // let longestSongTitle = '';
  // songs.forEach(song => {
  //   if (song.title.length > longestSongLength) {
  //     longestSongLength = song.title.length;
  //     longestSongTitle = song.title;
  //   }
  // })
  // return longestSongTitle;

  return songs.reduce((currSong, nextSong) => {
    return currSong.length > nextSong.title.length ? currSong : nextSong.title;
  }, '')
}

console.log('printLongestSongTitle: ', printLongestSongTitle(exampleSongData));