# Lecture slides

Each set of slides are in their own folder, e.g., *lecture_intensity_based_registration**. Inside the folder you will typically find two files and a subfolder called media. The media folder includes figures and other media that are needed for the slides. The two files are:
- <lecture_name>.md: the markdown/html source for the slides. This will be converted to a webpage (html) using [pandoc](https://pandoc.org/) and [revealjs](https://revealjs.com/).
- utils.js: certain javascript utilities for plotting arrows, lines, and setting up animations.

Additionally there are two important files inside the stylesheet/ folder. [style.css](stylesheet/style.css) defines font size, colors, etc. for the presentations, and [leader-line.min.js](stylesheet/leader-line.min.js) is used for setting up arrows and lines. The arrow plotting utilities are taken from [here](https://github.com/anseki/leader-line). 

To compile the markdown file call:
´pandoc -t revealjs -s lecture_non_linear_deformations.md -o lecture_non_linear_deformations.html -c ../stylesheet/style.css -A utils.js --mathjax´

If you want to compile a standalone website (the you can for example put on a stick and present from there) call:
´pandoc -t revealjs -s lecture_non_linear_deformations.md -o lecture_non_linear_deformations_standalone.html -c ../stylesheet/style.css -A utils.js --mathjax --embed-resources --standalone´

For examples of how to create slides in revealjs see example presentation [here](https://revealjs.com/?demo) and the source [here](https://github.com/hakimel/reveal.js/blob/master/demo.html)

