const characters = [
  {
    name: 'Alice',
    image: 'img/characters/alice.jpg',
    set: 'Battle of Legends, Volume 1',
  },
  {
    name: 'King Arthur',
    image: 'img/characters/king-arthur.jpg',
    set: 'Battle of Legends, Volume 1',
  },
  {
    name: 'Medusa',
    image: 'img/characters/medusa.jpg',
    set: 'Battle of Legends, Volume 1',
  },
  {
    name: 'Sinbad',
    image: 'img/characters/sinbad.jpg',
    set: 'Battle of Legends, Volume 1',
  },
  {
    name: 'Bigfoot',
    image: 'img/characters/bigfoot.jpg',
    set: 'Robin Hood vs. Bigfoot',
  },
  {
    name: 'Robin Hood',
    image: 'img/characters/robin-hood.jpg',
    set: 'Robin Hood vs. Bigfoot',
  },
  {
    name: 'Bruce Lee',
    image: 'img/characters/bruce-lee.jpg',
    set: 'Bruce Lee',
  },
  {
    name: 'InGen',
    image: 'img/characters/ingen.jpg',
    set: 'Jurassic Park - Ingen vs. Raptors',
  },
  {
    name: 'Raptors',
    image: 'img/characters/raptors.jpg',
    set: 'Jurassic Park - Ingen vs. Raptors',
  },
  {
    name: 'Dracula',
    image: 'img/characters/dracula.jpg',
    set: 'Cobble & Fog',
  },
  {
    name: 'Invisible Man',
    image: 'img/characters/invisible-man.jpg',
    set: 'Cobble & Fog',
  },
  {
    name: 'Jekyll & Hyde',
    image: 'img/characters/jekyll-and-hyde.jpg',
    set: 'Cobble & Fog',
  },
  {
    name: 'Sherlock Holmes',
    image: 'img/characters/sherlock-holmes.jpg',
    set: 'Cobble & Fog',
  },
  {
    name: 'Angel',
    image: 'img/characters/angel.jpg',
    set: 'Buffy the Vampire Slayer',
  },
  {
    name: 'Buffy (Xander)',
    image: 'img/characters/buffy.jpg',
    set: 'Buffy the Vampire Slayer',
  },
  {
    name: 'Spike',
    image: 'img/characters/spike.jpg',
    set: 'Buffy the Vampire Slayer',
  },
  {
    name: 'Willow',
    image: 'img/characters/willow.jpg',
    set: 'Buffy the Vampire Slayer',
  },
  {
    name: 'Beowulf',
    image: 'img/characters/beowulf.jpg',
    set: 'Little Red Riding Hood vs. Beowulf',
  },
  {
    name: 'Little Red Riding Hood',
    displayName: 'Little Red',
    image: 'img/characters/little-red.jpg',
    set: 'Little Red Riding Hood vs. Beowulf',
  },
  {
    name: 'Deadpool',
    image: 'img/characters/deadpool.jpg',
    set: 'Deadpool',
  },
  {
    name: 'Achilles',
    image: 'img/characters/achilles.jpg',
    set: 'Battle of Legends, Volume 2',
  },
  {
    name: 'Bloody Mary',
    image: 'img/characters/bloody-mary.jpg',
    set: 'Battle of Legends, Volume 2',
  },
  {
    name: 'Sun Wukong',
    image: 'img/characters/sun-wukong.jpg',
    set: 'Battle of Legends, Volume 2',
  },
  {
    name: 'Yennenga',
    image: 'img/characters/yennenga.jpg',
    set: 'Battle of Legends, Volume 2',
  },
  {
    name: 'Luke Cage',
    image: 'img/characters/luke-cage.jpg',
    set: 'Redemption Row',
  },
  {
    name: 'Ghost Rider',
    image: 'img/characters/ghost-rider.jpg',
    set: 'Redemption Row',
  },
  {
    name: 'Moon Knight',
    image: 'img/characters/moon-knight.jpg',
    set: 'Redemption Row',
  },
  {
    name: 'Daredevil',
    image: 'img/characters/daredevil.jpg',
    set: "Hell's Kitchen",
  },
  {
    name: 'Elektra',
    image: 'img/characters/elektra.jpg',
    set: "Hell's Kitchen",
  },
  {
    name: 'Bullseye',
    image: 'img/characters/bullseye.jpg',
    set: "Hell's Kitchen",
  },
  {
    name: 'T. Rex',
    image: 'img/characters/trex.jpg',
    set: 'Jurassic Park - Sattler vs. T-Rex',
  },
  {
    name: 'Dr. Sattler',
    image: 'img/characters/sattler.jpg',
    set: 'Jurassic Park - Sattler vs. T-Rex',
  },
  {
    name: 'Houdini',
    image: 'img/characters/houdini.jpg',
    set: 'Houdini vs. The Genie',
  },
  {
    name: 'The Genie',
    image: 'img/characters/genie.jpg',
    set: 'Houdini vs. The Genie',
  },
  {
    name: 'Squirrel Girl',
    image: 'img/characters/squirrel-girl.jpg',
    set: 'Teen Spirit',
  },
  {
    name: 'Cloak & Dagger',
    image: 'img/characters/cloak-and-dagger.jpg',
    set: 'Teen Spirit',
  },
  {
    name: 'Ms. Marvel',
    image: 'img/characters/ms-marvel.jpg',
    set: 'Teen Spirit',
  },
  {
    name: 'Black Widow',
    image: 'img/characters/black-widow.jpg',
    set: 'For King and Country',
  },
  {
    name: 'Black Panther',
    image: 'img/characters/black-panther.jpg',
    set: 'For King and Country',
  },
  {
    name: 'Winter Soldier',
    image: 'img/characters/winter-soldier.jpg',
    set: 'For King and Country',
  },
  {
    name: 'Spider-Man',
    image: 'img/characters/spider-man.jpg',
    set: 'Brains and Brawn',
  },
  {
    name: 'She-Hulk',
    image: 'img/characters/she-hulk.jpg',
    set: 'Brains and Brawn',
  },
  {
    name: 'Doctor Strange',
    image: 'img/characters/doctor-strange.jpg',
    set: 'Brains and Brawn',
  },
  {
    name: 'Nikola Tesla',
    image: 'img/characters/nikola-tesla.jpg',
    set: 'Unmatched Adventures - Tales to Amaze',
  },
  {
    name: 'Dr. Jill Trent',
    image: 'img/characters/dr-jill-trent.jpg',
    set: 'Unmatched Adventures - Tales to Amaze',
  },
  {
    name: 'Golden Bat',
    image: 'img/characters/golden-bat.jpg',
    set: 'Unmatched Adventures - Tales to Amaze',
  },
  {
    name: 'Annie Christmas',
    image: 'img/characters/annie-christmas.jpg',
    set: 'Unmatched Adventures - Tales to Amaze',
  },
]

export default characters
