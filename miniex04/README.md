<b><h1> Trees & Tullips </h1></b>
Assignment mini_ex04 for Aesthetic Programming course at AU

<b><h2> About </b></h2>
<i>Trees & Tulips</i> is an attempt to demonstrate input- and output mechanisms in javascript; also referred to as cybernetics.
Cybernetics is the function of input and feedback, in biological, organic beings as well as computational or mechanical artefacts or mechanisms. I attempt to show this in this work by mirroring a natural cybernetics-process - i.e. the process of plants drawing nutrients from the earth thus growing, or dying, if there are not enough neutrients - onto a artificial, algorithmic cybernetics-process (or - function). 

<b><h3> Construction </h3></b>
The cybernetics asttempted to be presented here is made by constructor-functions (i.e. Tree and Tulip <b>(and be OBS that the .js-codes are in speerate files for the sake of overview)</b>) made into an array. When the UP- or DOWN-arrow is pressed it pushes a new object into the constructor-array /that I just mentioned). 

On top of that, I mapped the colour of the ground to the number of objects <b>(in this referred to <i>i</i> and <i>t</i> in the loop-functions)</b>. I also mapped the transparanzy of the alpha-channels on the tree-tops and flower-tops to the colour of the ground, here representing the amount of nutrients in the earth, to represent the withering of leaves/flowers (exept the stems of the flowers) im accordance with the earth turning grayer (because plants can't thrive without enough nutrients). When the transparancy (in my code named through a variable <i>"lifespan</i>) reaches a certain low-point it is sliced() away from the constructor array.  Thus, this becomes a self-containing environment through a cybernetic feedback-loop: When the tulips or trees dies because of lack of neutrients, the colour of the ground turns browner due to the mapping of <i>i+t</i> (if confused look at the code for reference).
