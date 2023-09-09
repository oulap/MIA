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
ws = np.linspace( -1, 3, 100 )
fig, ax = plt.subplots()
ax.plot( ws, (5 - 4 * ws )**2 + (3 - 2 * ws )**2 )
ax.grid()
plt.tight_layout()
saveFigure( fig, f"optimizingQuadraticCurve.png" )

