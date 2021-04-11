# Mischievous Algorithm by Aleksandra Medina
## IM Capstone Seminar Fall 2020 / Spring 2021

Welcome to my **Capstone Seminar** repository. Here I have posted work throughout the year and 
documented my process.




My capstone project is a networked program that gives instructions to two or more users, working real-time to create a collaborative drawing. However, there is a twist. An additional ‘hidden’ player is the Mischievous Algorithm, built by me, which introduces uncertainty by bringing new elements or changes into the users’ work. While there is no limit to how many users can participate at any given time, two seems to be the ideal number, otherwise the process becomes frustrating. The project has been optimized to be remotely accessed from a personal laptop. However, ideally it consists of two iPads and two Apple pencils to ease the drawing process and give users more control. On these iPads, accessed through a link hosted on a service called Ngrok, users are presented with an interface similar to Windows Paint, but built using p5.js. Ngrok is a cloud- based service that accepts traffic on a public address, relayed through an Ngrok tunnel running on the host’s personal machine. P5.js is an open-source JavaScript library for creative coding. The Mischievous Algorithm interface has three parts: a set of instructions, a canvas for drawing and a minimal tool set derived from common drawing apps, which includes a color picker, the ability to change brush size and an eraser.


Initially, there was an idea to also include a simple messaging functionality – just enough to create a feeling of collaboration but not enough to erase the uncertainty. However, user testing revealed that the messaging functionality became too distracting and, since its core purpose was lifting some of the uncertainty, the messaging functionality was easily replaced by giving clear instructions before users access the canvas. Thus, the decision was made to clearly explain to users the presence of the third mischievous player in the initial instructions, otherwise users kept thinking there was a glitch and would continuously refresh the page. While revealing the essence of the project implies a conceptual tradeoff, it actually aids the experience by putting the user in a mindset to
be more playful, open-minded and receptive. It is important to keep the complete interface as simple and familiar as possible to avoid frustrations and be able to focus on the relationship between the users and the algorithm. While users are interacting with each other through the canvas, on the backend, there is the Mischievous Algorithm that changes the users’ work in ways that only a computer could do.


<b>This archive includes:</b>
- [Code](https://github.com/aleksandramedina/Capstone-Seminar/tree/master/Code)
- [Interface](https://github.com/aleksandramedina/Capstone-Seminar/tree/master/Interface)
- Showcase video
- [A directory of user generated works](https://github.com/aleksandramedina/Capstone-Seminar/tree/master/User%20Experiences%20in%20Images)
- [Final paper](https://github.com/aleksandramedina/Capstone-Seminar/blob/master/Spring%20Final%20Essay.pdf)
- [Midterm paper](https://github.com/aleksandramedina/Capstone-Seminar/blob/master/Final%20essay.pdf)
- [Final presentation](https://drive.google.com/file/d/13XnPaBymQs86RYKgt7d_oWtucJH_aW7n/view?usp=sharing)
- [Midterm presentation](https://drive.google.com/file/d/1G-5sHaPmxv36_BUBpYBu9zGmHpBIAWCZ/view?usp=sharing)
- Weekly reflection blogs
