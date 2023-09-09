function writeFigure( figureHandle, basedir, namebase )
%

tmp = getframe( figureHandle ); 
imwrite( tmp.cdata, [ basedir '/' namebase '.png' ] );
