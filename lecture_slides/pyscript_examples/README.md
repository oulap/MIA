# Running python inside a presentation (or html)

[pyscript](https://pyscript.net/) is a fairly new project that allows you to run python inside an html. It's still in alpha, but might provide useful in the future. Also this is a bit easier when your familiar with python but not as familiar with javascript. The downside (at least at the moment) is that it takes a while to fire up the virtual environment and install the necessary packages when the html is opened. Also not all python packages are supported, see list [here](https://pyodide.org/en/stable/usage/packages-in-pyodide.html).

Anyway, I included a small example here to highlight how it might be used. To compile the markdown file into an html with pandoc call:

`pandoc -t revealjs -s pyscript_example.md -o pyscript_example.html -c ./utils/style.css -c https://pyscript.net/latest/pyscript.css --mathjax -f markdown-smart --highlight-style pygments`

Also you (proably) have to start a local server to get everything working nicely (see discussion [here](https://docs.pyscript.net/latest/tutorials/getting-started.html)). In order to do that call, inside the folder where the html is:

`python -m http.server 8080 --bind 127.0.0.1`

then open a browser and navigate to: 

http://localhost:8080/

and click on the presentation.

