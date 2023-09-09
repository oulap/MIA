#
import numpy as np
np.set_printoptions( suppress=True )
from matplotlib import pyplot as plt
plt.ion()

#
def saveFigure( fig, fileName, useFullScreen=False ):
    plt.figure( fig )
    fig.show()
    if useFullScreen: plt.get_current_fig_manager().window.showMaximized()
    plt.pause(.1)  
    plt.savefig( fileName, bbox_inches='tight', dpi=fig.dpi )

# 
N1, M1 = 100, 5
N2, M2 = 100, 5
ns1 = np.arange( N1 ).reshape( -1, 1 )
ns2 = np.arange( N2 ).reshape( -1, 1 )
A1 = np.cos( np.pi / N1 * ( ns1 + .5 ) @ np.arange( M1 ).reshape( 1 , -1 ) ); A1[ : , 0 ] /= np.sqrt( 2 )
A2 = np.cos( np.pi / N2 * ( ns2 + .5 ) @ np.arange( M2 ).reshape( 1 , -1 ) ); A2[ : , 0 ] /= np.sqrt( 2 )

A = np.kron( A2, A1 )
fig, ax = plt.subplots( M1, M2 )
for m in range( M1*M2 ):
    ax.ravel( order='F' )[ m ].imshow( A[ :, m ].reshape( N1, N2, order='F' ), cmap="gray", vmin=-1, vmax=1, aspect="equal" )
    ax.ravel( order='F' )[ m ].axis( False )
#plt.tight_layout()
#plt.tight_layout( h_pad=0, w_pad=0 )

saveFigure( fig, f"DCT_2D.png" )
    


import sys
sys.exit()



#
fig, ax = plt.subplots()
ax.scatter( ns, t )
plt.xticks( [] )
plt.yticks( [] )
plt.xlabel( r"$\mathbf{x}$", fontsize=25 )
plt.ylabel( r"$t$", fontsize=25 )
#plt.tight_layout()
#saveFigure( fig, f"regression_trainingData.png" )

# Linear
A = np.hstack( ( ns**0, ns ) )
t_smooth = A @ np.linalg.solve( A.T @ A, A.T @ t )
l1 = ax.plot( ns, t_smooth, 'r', linewidth=2, linestyle="-." )

# DCT
A = np.cos( np.pi / N * ( ns + .5 ) @ np.arange( M ).reshape( 1 , -1 ) )
A[ : , 0 ] /= np.sqrt( 2 )
t_smooth = A @ np.linalg.solve( A.T @ A, A.T @ t )
l2 = ax.plot( ns, t_smooth, 'r', linewidth=2, linestyle="-." )
#plt.tight_layout()
#saveFigure( fig, f"regression_nonlinearFit.png" )
           
#
l1[0].set_visible( False )
l2[0].set_visible( False )
plt.tight_layout()
plt.draw()
saveFigure( fig, f"regression_trainingData.png" )

#
l1[0].set_visible( True )
# plt.tight_layout()
plt.draw()
saveFigure( fig, f"regression_linearFit.png" )

#
l1[0].set_visible( False )
l2[0].set_visible( True )
#plt.tight_layout()
plt.draw()
saveFigure( fig, f"regression_nonlinearFit.png" )
           
           
# Basis functions                      
fig, ax = plt.subplots()
ax.plot( ns, A )
plt.xticks( [] )
plt.yticks( [] )
plt.xlabel( r"$\mathbf{x}$", fontsize=25 )
plt.ylabel( r"$\phi_m(\mathbf{x})$", fontsize=25 )
plt.tight_layout()
saveFigure( fig, f"regression_nonLinearBasisFunctions.png" )

