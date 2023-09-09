% 
close all
clear all

%
%intensities = [ -2.5 : .01 : 2.5 ];
intensities = [ -2 -1.5 -1 -.5 0 .5 1 1.5 2 ];
x = abs( intensities );
cubicBSpline = ( 2/3 - x.^2 + x.^3/2 ) .* ( x < 1 ) + ...
               ( 2 - x ).^3 / 6 .* ( x >= 1 ) .* ( x < 2 );  % Eq (6) in UnserSPM1999

%               
figure( 'color', 'w' )
plot( intensities, cubicBSpline )
grid


%
in1D = round( cubicBSpline * 50 );
in1D = in1D( 2 : end-1 )

in2D = in1D' * in1D

%
figure( 'color', 'w' )
image( in2D / max( in2D(:) ) * 256)
colorbar

%
figure( 'color', 'w' )
bar( in1D )
tmp = getframe( gcf );
imwrite( tmp.cdata, 'in1D.png' );


%
figure( 'color', 'w' )
bar3( in2D )
tmp = getframe( gcf );
imwrite( tmp.cdata, 'in2D.png' );


