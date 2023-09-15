#
import numpy as np
np.set_printoptions( suppress=True )
from matplotlib import pyplot as plt
plt.ion()
plt.rcParams['text.usetex'] = True


#
def plot_grid( ax, X1, X2, **kwargs ):
    for i in range(X1.shape[0]):
        ax.plot(X1[i,:], X2[i,:], **kwargs)
    for i in range(X1.shape[1]):
        ax.plot(X1[:,i], X2[:,i], **kwargs)
        
#
def saveFigure( fig, fileName, useFullScreen=False ):
    plt.figure( fig )
    fig.show()
    if useFullScreen: plt.get_current_fig_manager().window.showMaximized()
    plt.pause(.1)  
    plt.savefig( fileName, bbox_inches='tight', dpi=fig.dpi )


#
img = plt.imread( "pexels-polina-tankilevitch-3905773.jpg" )
img = img[ 100:650, 400:900 ]


for i in range( 3 ):

    fig, ax = plt.subplots()
    ax.imshow( img, extent=(0,img.shape[1]-1,0,img.shape[0]-1) )
    ax.axis( False )

    color = [0,0,0]  
    arrowProps = dict( head_width=10, head_length=20, fc=color, ec=color )
    a1 = ax.arrow( 0, 0, 500, 0, **arrowProps )
    a2 = ax.arrow( 0, 0, 0, 550, **arrowProps )
    t1 = ax.text( 500, 0-40, r"$x_1$", fontsize=20 )
    t2 = ax.text( 0-60, 550, r"$x_2$", fontsize=20 )

    if i == 0:
        fig.tight_layout()
        saveFigure( fig, "world.png" )
        continue
    elif i == 1:  
        N1, N2 = 10, 10
        alpha = 20 / 180 * np.pi
        A = np.array( [ [ np.cos( alpha ), -np.sin( alpha ) ], [ np.sin( alpha ), np.cos( alpha ) ] ] )
        t  = np.array( [ 130, -20 ] ).reshape( -1, 1 )
    else:
        #N1, N2 = 20, 25
        N1, N2 = 20, 20
        #alpha = -15 / 180 * np.pi
        alpha = -15 / 180 * np.pi
        A = np.array( [ [ np.cos( alpha ), -np.sin( alpha ) ], [ np.sin( alpha ), np.cos( alpha ) ] ] )
        A[ :, 0 ] *= -1
        #t  = np.array( [ -55, 80 ] ).reshape( -1, 1 )
        t  = np.array( [ 400, -15 ] ).reshape( -1, 1 )
        
    #
    X1, X2 = np.meshgrid( np.linspace( 0, 450, N1 ), np.linspace( 0, 500, N2 ), indexing='ij' )

    color = [ .7 ]*3 
    Y1,Y2 = A @ np.array( [ X1.ravel(), X2.ravel() ] ) + t
    Y1, Y2 = Y1.reshape( X1.shape ), Y2.reshape( X1.shape )
    plot_grid( ax, Y1, Y2, color=color )

    origin = np.array( [ ( X1[1,0]-X1[0,0] ) /2, ( X2[0,1]-X2[0,0] ) /2 ] ).reshape(-1,1)
    Y1,Y2 = A @ np.array( [ X1.ravel() + origin[0,0], X2.ravel() + origin[1,0] ] ) + t
    Y1, Y2 = Y1.reshape( X1.shape ), Y2.reshape( X1.shape )
    ax.scatter( Y1[:-1,:-1], Y2[:-1,:-1], color=color, s=plt.rcParams['lines.markersize'] * 1.0 )


    color = [ 0, 0, 0.8 ]
    arrowProps = dict( head_width=10, head_length=20, fc=color, ec=color )
    mappedOrigin = A @ origin + t

    tmp = A @ np.array( [ 500-30, 0 ] ).reshape(-1,1)
    a1 = ax.arrow( mappedOrigin[0,0], mappedOrigin[1,0], tmp[0,0], tmp[1,0], **arrowProps )
    tmp += mappedOrigin
    t1 = ax.text( tmp[0,0], tmp[1,0]-40, r"$v_1$", fontsize=20, color=color )

    tmp = A @ np.array( [ 0, 550-30 ] ).reshape(-1,1)
    a2 = ax.arrow( mappedOrigin[0,0], mappedOrigin[1,0], tmp[0,0], tmp[1,0], **arrowProps )
    tmp += mappedOrigin
    t2 = ax.text( tmp[0,0]-60, tmp[1,0], r"$v_2$", fontsize=20, color=color )


    fig.tight_layout()
    saveFigure( fig, f"voxel_example{i}.png" )
    
