# mineparkour-club-hax
Snippets of code for "hacking" mineparkour.club - a really broken web game I play when I'm bored in school  
https://mineparkour.club/

# how to use
- open the developer tools tab in your browser (Chromium browsers use F12 shortcut for dev tools)
- open console
- paste the code
- done!

# guides
## player
- You can access some of the player data with `controls.getObject()`
### speed
- you can access the player's speed using global `speed` variable
- default value is `80`
- *NOTE*: the resulting speed is ***NOT*** frame-rate indepentent!
## end box
- the AABB (axis aligned bounding box) of the end block is called `end`
  - members:
    - `min`
    - `max`
- you can calculate the center point by adding `min` and `max` components and dividing by two  
`(end.min.x + end.max.x) / 2`
## coins
- you can change the number of coins to arbitrary number using global variable `coins`
## skins
- use `chooseSkin(...)` function to set any skin
- the argument is name of the skin from the shop, for exaple: `chooseSkin('god')`
