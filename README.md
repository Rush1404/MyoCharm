# MyoCharm
Have you ever had any foot or arm pain? Wondering if it is something serious? Look no further! With MyoCharm you can easily check whether you are healthy or have diseases like myopathy and neuropathy.

## Inspiration
We were inspired to do this project because of how many people have neuropathy and myopathy which are muscular diseases without even knowing. We saw this as an opportunity to help the neuropathy and myopathy community have a more successful future.
## What it does
Myocharm has both a hardware and software component where the hardware can measure the nerve signals and record it, to be used and interpreted to figure out if someone is likely to have myopathy or neuropathy.
## How we built it
For Myocharm we used arduino parts with three electrodes and record them as csv files. We then converted them to wav files which are audio files, then into a spectrogram which is a png picture of a graph. We used this spectrogram to create and train a machine learning model in python using tenserflow and other libraries which can predict with a 97% accuracy whether or not someone have myopathy, neurapathy or neither. We then connected all of this to a website using Flask. The website was made with React, which includes html, css, js, and xml. 
## Challenges we ran into
One of our biggest challenges was implementing flask to connect the backend python machine learning model to the react front-end website. This was especially difficult as none of us were experienced with Flask at all. As well as originally creating the model was difficult with tensorflow and keras. We were also challenged with the front-end to make it look good and perform the funcitons that it needs to perform.
## Accomplishments that we're proud of
Our biggest accomplishments were creating the machine learning model but especially connecting it to the front-end with flask. As well as creating a a good looking website that does it's job effectively. This project was the biggest project our team has created and we pushed our limits to its bounds. 
## What we learned
How to create a machine learning model using tensorflow and keras, then implementing it using Flask. Creating a website using React, js, html, css, and xml.
## What's next for MyoCharm
Our next steps will be to create a more accurate model, with a minimum of 99% accuracy. Along with that, we plan to add more muscular diseases to train out model with so that our project can be used for more than just myopathy and neuropathy. Creating a website with multiple tabs is a big next step for us as well.

Made by **Baron, Rushabh, Jerry, and Fayez**
