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
import nibabel as nib
fileName = '/home/koen/data/IXI/T1/IXI371-IOP-0970-T1.nii.gz'
img = nib.load( fileName )
data = img.get_fdata()

#
histogram, edges = np.histogram( data.ravel(), bins=1024 )
binCenters = ( edges[ 1: ] + edges[ :-1 ] ) / 2
binWidth = edges[ 1 ] - edges[ 0 ]

#
fig1, ax1 = plt.subplots()
ax1.bar( binCenters, histogram, width=binWidth )
ax1.set_ylim( 0, histogram[1:].max() )  # clip the entry for background
ax1.set_xlim( 0, data.max() )
ax1.grid()

#
cumulativeHistogram = histogram.copy()
for i in range( 1, histogram.size ):
    cumulativeHistogram[ i ] += cumulativeHistogram[ i-1 ]
    
# Let's locate the 98th percentile
percentile = 98
targetCount = percentile / 100 * data.size
binNumber = (cumulativeHistogram > targetCount ).nonzero()[0][0]
robustMax = binCenters[ binNumber ]

#
fig2, ax2 = plt.subplots()
ax2.bar( binCenters, cumulativeHistogram, width=binWidth )
ax2.set_xlim( 0, data.max() )
ax2.grid()
l1 = ax2.plot( [0, robustMax ], [ targetCount ]*2, '-.r' )
l2 = ax2.plot( [ robustMax ]* 2, [ 0, targetCount ], '-.r' )
t1 = ax2.text( robustMax, -0.1*ax2.get_ylim()[1], f"{round( robustMax )}", 
               horizontalalignment='center', color='r', fontweight='bold' )
t2 = ax2.text( -.1*binCenters[-1], targetCount, f"{percentile}%",
               verticalalignment='center', color='r', fontweight='bold' )

#l[0].remove()
l = ax1.plot( [ robustMax ]* 2, ax1.get_ylim(), '-.r' )
t = ax1.text( robustMax, -0.1*ax1.get_ylim()[1], f"{round( robustMax )}", 
              horizontalalignment='center', color='r', fontweight='bold' )

l = ax1.plot( [ data.max()*.998 ]* 2, ax1.get_ylim(), '-.b' )
t = ax1.text( data.max(), -0.1*ax1.get_ylim()[1], f"{round( data.max() )}", 
              horizontalalignment='center', color='b', fontweight='bold' )

#
import os
fileNameBase = os.path.splitext( os.path.split( fileName )[1] )[0]
fig1.tight_layout()
saveFigure( fig1, fileNameBase + '_histogram.png' )
fig2.tight_layout()
saveFigure( fig2, fileNameBase + '_cumulativeHistogram.png' )

import os
os.system( f"freeview {fileName}" )

