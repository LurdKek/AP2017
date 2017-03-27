<h1>Aaal righty - Here's my checkbox snake-game. Enjoy!</h1>
<b>Click here to play:</b>https://lurdkek.github.io/AP2017/miniex07/

![screenshot](https://github.com/LurdKek/AP2017/blob/gh-pages/miniex07/Capture07.PNG?raw=true);

So yeah, a snake-game made on checkboxes. The process was simple in theory, but kind of difficult to actually make work.
First i coded a snake-game using rects, rows and collums (following Shiffman as well). Then I added a layer of checkboxes and a RGB threshold reader, that covnerts all white pixels on the standard-canvas to "checked boxes" in my "checkbox-canvas".
Checkboxes are made using the .dom library.

A <b>HUGE</b> thanks to <i>Duendue</i> for helping me debugging the code - couldn't have done it without him.

<b><h3>OBS!:</h3> Due to some problems with the reading of the threshold, the snake has become four-checkboxes large. It is possible to "go-over-the.-edge" with half of the snakes body. See it as a challange, when some of the food also appears to be half.-shown on the edge of the game-screen</b>.


<h2>Objects & p5.DOM</h2>
Onjects is a very nice thing to use in javascript. It help organise the variables and also makes the overview of the code even more readable. Also objects and classes/constructor functions in seperate files helps to this overview even more, and is very easy to use once taught.

Objects in itself isn't something I like to use that mutch, but sometimes, when only using an "object" once, it can be usefull.
Otherwise i tend to use classes/constructor functions, a because they add a lot of funtionability and the possibility to add behaviors and variables in a more dynamic way than objects does. The fact that objects are classified as a (meta)variable and constructor functions are more like a (meta)function which can also be pushed/sliced into/from arrays gives the use of constructor functions one more advatage over objects. But for simple, quick coding, objects are easy to use, but then again so are constructor functions/classes it's just another syntax being used.

The p5.dom library is a fine library, but I think it holds too many limitations in regard of style. If you want to change this you have to use css (and even then it is limited) and thenn you might as well just implement the HTML elements using html and css in the .index file. So DoM is good if you want to add something quick, but it is also very flawed and Limited. And as Mick points out in his miniEx, there are better ways and libraries to implement html into p5.
