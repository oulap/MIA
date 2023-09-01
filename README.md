# Medical Image Analysis (Aalto NBE-E4010, DTU 22525)
Lecture notes, slides, and exercises for the Medical Image Analysis course at Aalto University and Technical University of Denmark



# Exercise Guide
Below is a guide on how to create a python environment with all necessary packages, how to use jupyter notebook to carry out the exercises and how to report the results in a pdf document.

1. Download conda
     - Go to https://conda.io/projects/conda/en/latest/user-guide/install/download.html
     - download and install conda on your machine
3. Create a virtual environment with conda
     - Download the environment.yml from this repo. It contains instructions for a virtual environment called env_mia.
     - Windows: open Anaconda prompt, MacOS/Linux: open terminal
     - type: conda env create -f <path_to_file>/environment.yml
     - type: conda activate env_mia
5. Create jupyter kernel and open a notebook
     - type: python -m ipykernel install --user --name=mia
     - type: juypter notebook
     - jupyter opens in your browser and you can edit and create your local notebooks here
     - make sure to select the correct kernel "mia", that you just created, under Kernel > Change kernel
7. Export code and comment sections of notebook to pdf
     - Simplest option: print an html version of the notebook. In the open jupyter notebook, click File > Print Preview. A new html page opens, which you can print to pdf from your browser.
     - If you have Latex locally installed on your machine: Under File > Download as > ... are also more options to export the notebook. You can use the option File > Download as > PDF via Latex. This will look slightly nicer. You might need to install additional latex packages.
     - An even more advanced version would be to download the notebook as Latex code (File > Download as > Latex (.tex)). This is useful if you want to create the rest of the report in latex and embed the code in your .tex file. Again, you need Latex installed on your machine to use this option
     - Finally, save the pdf and submit the report on your university's course site
