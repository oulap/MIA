#
import numpy as np
np.set_printoptions( suppress=True )
from matplotlib import pyplot as plt
plt.ion()


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
X1, X2 = np.meshgrid( np.linspace( 0, 20, 21 ), np.linspace( 0, 20, 21 ), indexing='ij' )

#
exampleNames = [ 'translation_onlyDirection1', 
                 'translation', 
                 'translationAndScaling_onlyDirection1',
                 'everything_onlyDirection1',
                 'translationAndScaling',
                 'fullyAffine' ] 
for i, exampleName in enumerate( exampleNames ):
    if i == 0:
        A, t  = np.eye( 2 ), np.array( [ 23, 0 ] ).reshape( -1, 1 )
    elif i == 1:
        A, t  = np.eye( 2 ), np.array( [ 23, 6 ] ).reshape( -1, 1 )
    elif i == 2:
        A, t  = np.array( [ [ 1.4, 0 ], [ 0, 1 ] ] ), np.array( [ 23, 0 ] ).reshape( -1, 1 )
    elif i == 3:
        A, t  = np.array( [ [ 1.4, 0.5 ], [ 0, 1 ] ] ), np.array( [ 23, 0 ] ).reshape( -1, 1 )
    elif i == 4:
        A, t = np.array( [ [ 1.5, 0 ], [ 0, 0.7 ] ] ), np.array( [ 23, 6 ] ).reshape( -1, 1 )
    else:
        A, t  = np.array( [ [ 1.4, 0.5 ], [ 0.2, 0.9 ] ] ), np.array( [ 23, 6 ] ).reshape( -1, 1 )

    fig, ax = plt.subplots()
    plot_grid( ax, X1, X2, color='b' )
    Y1,Y2 = A @ np.array( [ X1.ravel(), X2.ravel() ] ) + t
    Y1, Y2 = Y1.reshape( X1.shape ), Y2.reshape( X1.shape )
    plot_grid( ax, Y1, Y2, color='r' )

    #
    plt.rcParams['text.usetex'] = True
    str1 = f"{A[0,0]} & {A[0,1]}"
    str2 = f"{A[1,0]} & {A[1,1]}"
    str3 = f"{t[0,0]}"
    str4 = f"{t[1,0]}"
    xxx = ax.text( t[0], t[1]-6, r"$\mathbf{A} = \left( \begin{array}{cc}" +str1 +r"\\" +str2 +r"\end{array}\right), \,\, \mathbf{t}=\left(\begin{array}{c}" +str3 + r"\\" +str4 + r"\end{array}\right)$", size=18 )

    ax.set_aspect( 'equal' )
    ax.set( xlim=[-1,65], ylim=[-10,30] )
    ax.axis( 'off' )
    fig.tight_layout()
    saveFigure( fig, exampleName + ".png" )






