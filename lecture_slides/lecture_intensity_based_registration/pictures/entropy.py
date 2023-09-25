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
alphas = np.linspace( 0, 1, 100 )
fig, ax = plt.subplots()
eps = np.finfo(np.float64).eps
ax.plot( alphas, 
         -alphas * np.log( alphas + eps ) / np.log( 2 ) - (1-alphas) * np.log( 1-alphas + eps ) / np.log(2) 
       )
ax.grid()
ax.set_xlabel( r"$\alpha$", fontsize=20 )
ax.set_xticks( np.arange( 0, 1.1, .1 ) )
ax.set_xlim( 0, 1 )
ax.set_ylim( 0, 1 )

fig.tight_layout()
saveFigure( fig, "entropy.png" )

