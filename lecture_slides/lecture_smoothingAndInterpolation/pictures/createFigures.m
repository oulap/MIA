%
close all
clear all

% 
for degrees = [ 0 2 ]
  x = [ 1 2 3 ]';
  y = [ 2 1 3 ]';
  %Phi = [ x.^0 x.^1 x.^2 ];
  Phi = x.^[ 0 : degrees ]
  xForPictures = [ 0 : .1 : 4 ]';
  %PhiForPictures = [ xForPictures.^0 xForPictures.^1 xForPictures.^2 ];
  PhiForPictures = xForPictures.^[ 0 : degrees ] 

  %
  f = figure( 'color', 'w' );
  l = plot( xForPictures, PhiForPictures )
  set( l, 'LineWidth', 1 )
  set( gca, 'LineWidth', 1 )
  writeFigure( f, '.', [ 'Phi_' num2str( degrees(end) ) ] )
  
  %
  beta = ( Phi' * Phi  ) \ ( Phi' * y )
  H = Phi * ( ( Phi' * Phi  ) \ Phi' ) 
  yhat = Phi * beta
  f = figure( 'color', 'w' );
  l = plot( xForPictures, PhiForPictures * beta );
  set( l, 'LineWidth', 1, 'color', 'r' )
  hold on
  s1 = scatter( x, y );
  set( s1, 'marker', 'o', 'MarkerEdgeColor', 'b', 'MarkerFaceColor', 'b' )
  set( s1, 'LineWidth', 2 )
  s2 = scatter( x, yhat )
  set( s2, 'marker', '+', 'MarkerEdgeColor', 'r', 'MarkerFaceColor', 'r' )
  set( s2, 'LineWidth', 2 )
  set( gca, 'LineWidth', 1 )
  writeFigure( f, '.', [ 'fit_' num2str( degrees(end) ) ] )

end

