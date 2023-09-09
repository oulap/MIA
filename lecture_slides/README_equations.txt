To get gorgeous transparent renderings of all your equations at the correct size, 

  cp /usr/share/doc/packages/latex2html/dot.latex2html-init ~/.latex2html-init

and set MATH_SCALE_FACTOR to a large value (I used 3.79).

Then run latex2html on the entire book:

  latex2html mia

and open mia/index.html in a browser (I used chrome). Find any equation you're interested in, 
right click -> "copy image", and paste directly into libreoffice. 

If equations are too big, decrease MATH_SCALE_FACTOR.


