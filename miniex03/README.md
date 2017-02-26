
<b><h2>The "If you push me I'll get nervous"-Throbber</h2></b>
<b>Link:</b> https://lurdkek.github.io/AP2017/miniex03/Throbber/

![screenshot](https://github.com/LurdKek/AP2017/blob/gh-pages/miniex03/Capture02.PNG?raw=true);

<b> <h3>About</h3> </b>
When I first began to the first iterations of how to make my throbber, I didn't have any particular idea in mind, set aside the mere aspect of learning the code behind. I started by copying the base-code given to us by the lecturer, and attempted to "reverse-engineer" the code (at least the understanding of it), to better learn the functions of the syntaxes and how they connect to one-another.

After the initial process of understandig the code and its syntaxes I began experimenting with the shape of the "throbber-parts" (i.e. the circle in Winnies throbber). Browsing through the reference-page on p5's webpage I decided to create an arc-shape (also being interested in the PI and PI/2 parameters, yet to be fully understood by my not-so-mathematical brain).

When the shape of the throbber was done and coded into the throbber-design, I began looking at how to animate the throbber to look like it is breathing in and out. I did this by making a "var rad" (rad for radius) and continously adding +1 value to the radius via a "var radAdd" that was set to +1 if within the maximum size I wanted the throbber to be, and otherwise set to -1 if equal to, or larger than the maximum diameter. Later i added color-variants as well by mapping the r, b, g to the "rad" variable. Finally  I also mapped the size of each arc, also to the "rad" variable, thus giving it a dynamic and "breathing" appearance.

Through the process I encountered some problems with the mapping, which led to some interesting results. I then added that dysfunctional map-function to a mousePressed function, making it "nervous" when the mouse is "pushed" (thus the name). I found this to be a rather interesting comment on the theory of micro-contemporality and all of the micro-processing that goes on "behind" the throbber (when used in it's normal context). 

A throbber is made to make time feeel constant, and make to user wait for something to happen within an undefined amount of time. Thus making the throbber "nervous" strives against the temporary-focus of the ordinary throbber and forces the user to think about the falseness that a throbber emmits in it's connotations.


