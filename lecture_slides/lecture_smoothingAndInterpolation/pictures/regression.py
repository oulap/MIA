#
import numpy as np
np.set_printoptions( suppress=True )
from matplotlib import pyplot as plt
plt.ion()
plt.rcParams['text.usetex'] = True

#
def saveFigure( fig, fileName, useFullScreen=False ):
    plt.figure( fig )
    fig.show()
    if useFullScreen: plt.get_current_fig_manager().window.showMaximized()
    plt.pause(.1)  
    plt.savefig( fileName, bbox_inches='tight', dpi=fig.dpi )

# 
N, M = 20, 3
ns = np.arange( N ).reshape( -1, 1 )
t = -np.cos( ns/N * np.pi * 1.0 ) + np.random.standard_normal( (N,1) ) * .2

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

