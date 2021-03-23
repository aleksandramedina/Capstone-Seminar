### Progress, March 23


### Code progress

**Implementing Perlin noise:**

1. https://editor.p5js.org/aaronsherwood/sketches/RIN11cy7d
2. https://editor.p5js.org/aaronsherwood/sketches/STglbE09r
3. https://editor.p5js.org/aaronsherwood/sketches/9sp-2FCgR


**Troubleshooting with Jack:**

Introducing more and more difficult "painting tools" had broken my networking system. One of the things that seemed to not be working was when I was manually changing the output color. After a lot of debugging, we realized it was because the color picker defined color as #hex, while when I was defining a random() color, it was generated as a RGB. After we introduced ``colorvalue = color(random (255),random (255),random (255)).toString('#rrggbbaa');`` the issue was fixed!

### User testing

**My mother**
![flower](/media/puke.png)

![boat](/media/laiva.png)


**Luize**
![car](/media/car.png)


**Learnings:**

I am very, very happy to see that both users genuinely enjoyed the experience and were smiling and laughing throughout – this was the main purpose of the project! No one felt frustrated, instead they felt delightfully challenged. While Luīze gave me some more technical suggestions, it was interesting to see that both my mother and her suggested the same few things, which I will definitely include:
1.	Divide the instructions so that the user can first familiarize themselves with the game and then read the drawing instructions while on the canvas page
2.	Add a ‘conclusion’ to the game
3.	After explaining to them the end product, both of them suggested introducing a way that the algorithm could ‘announce’ itself to the user, whenever it interferes.


**Next to do:**
1. Implement the system for randomness
2. Implement the 'introduction' of the algorithm
3. Small canvas fixes based on feedback

