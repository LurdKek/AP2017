<h1>Aaal righty - Here's my checkbox snake-game. Enjoy!</h1>
<b>Click here to play:</b>https://lurdkek.github.io/AP2017/miniex07/

![screenshot](https://github.com/LurdKek/AP2017/blob/gh-pages/miniex07/Capture07.PNG?raw=true);

So yeah, a snake-game made on checkboxes. The process was simple in theory, but kind of difficult to actually make work.
First i coded a snake-game using rects, rows and collums (following Shiffman as well). Then I added a layer of checkboxes and a RGB threshold reader, that covnerts all white pixels on the standard-canvas to "checked boxes" in my "checkbox-canvas".
Checkboxes are made using the .dom library.

A <b>HUGE</b> thanks to <i>Duendue</i> for helping me debugging the code - couldn't have done it without him.

<b><h3>OBS!:</h3> Due to some problems with the reading of the threshold, the snake has become four-checkboxes large. It is possible to "go-over-the.-edge" with half of the snakes body. See it as a challange, when some of the food also appears to be half.-shown on the edge of the game-screen</b>.
