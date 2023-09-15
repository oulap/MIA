#
import numpy as np
np.set_printoptions( suppress=True )
from matplotlib import pyplot as plt
import matplotlib.patches as patches
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
for flip in [ False, True ]:
    fig, ax = plt.subplots()
    ax.set_aspect( 1 )
    ax.set_xlim( xmin=-1.2, xmax=1.5 )
    ax.set_ylim( ymin=-1.3, ymax=1.3 )
    ax.axis( False )

    color = 'b'  
    arrowProps = dict( head_width=.05, head_length=.1, fc=color, ec=color )
    textProps = dict( fontsize=10, c=color )
    a1 = ax.arrow( 0, 0, 1, 0, **arrowProps )
    a2 = ax.arrow( 0, 0, 0, 1, **arrowProps )
    #t1 = ax.text( 1, -.1, r"$\mathbf{r}_1 = ( r_{1,1}, r_{2,1} )^T$", fontsize=20 )
    t1 = ax.text( 1.05, -.1, r"$\mathbf{e}_1 = ( 1, 0 )^T$", **textProps )
    #t2 = ax.text( -.1, 1.13, r"$\mathbf{e}_2 = ( 0, 1 )^T$", **textProps )
    #t2 = ax.text( .07, 1.1, r"$\mathbf{e}_2 = ( 0, 1 )^T$", **textProps )
    t2 = ax.text( .0, 1.14, r"$\mathbf{e}_2 = ( 0, 1 )^T$", **textProps )

    color = 'r'
    arrowProps = dict( head_width=.05, head_length=.1, fc=color, ec=color )
    textProps = dict( fontsize=10, c=color )
    alpha = 20 / 180 * np.pi
    R = np.array( [ [ np.cos( alpha ), -np.sin( alpha ) ], [ np.sin( alpha ), np.cos( alpha ) ] ] )
    a1 = ax.arrow( 0, 0, R[0,0], R[1,0], **arrowProps )
    t1 = ax.text( R[0,0], R[1,0]+.1, r"$\mathbf{r}_1 = ( r_{1,1}, r_{2,1} )^T$", **textProps )
    kw = dict(arrowstyle="Simple, tail_width=0.5, head_width=4, head_length=4", color=color )
    c1 = patches.FancyArrowPatch( (0.7, 0), (0.7 * np.cos(alpha), 0.7 * np.sin( alpha ) ),
                                  connectionstyle=f"angle3,angleA=90,angleB={90+alpha/np.pi*180}", **kw)
    ax.add_patch( c1 )
    if not flip:
        a2 = ax.arrow( 0, 0, R[0,1], R[1,1], **arrowProps )
        t2 = ax.text( R[0,1]-.35, R[1,1]+.15, r"$\mathbf{r}_2 = ( r_{1,2}, r_{2,2} )^T$", **textProps )
        c2 = patches.FancyArrowPatch( (0, 0.7), (-0.7 * np.sin(alpha), 0.7 * np.cos( alpha ) ),
                                      connectionstyle=f"angle3,angleA=180,angleB={180+alpha/np.pi*180}", **kw)
        ax.add_patch( c2 )
    else:
        a2 = ax.arrow( 0, 0, -R[0,1], -R[1,1], **arrowProps )
        t2 = ax.text( -R[0,1]-.3, -R[1,1]-.15, r"$\mathbf{r}_2 = ( r_{1,2}, r_{2,2} )^T$", **textProps )
        # c2 = patches.FancyArrowPatch( (0, 0.7), (0.7 * np.sin(alpha), -0.7 * np.cos( alpha ) ),
        #                              connectionstyle=f"angle3,angleA=180,angleB={180+alpha/np.pi*180}", **kw)
        # ax.add_patch( c2 )
        
    fig.tight_layout()
    saveFigure( fig, f"rotationConstraints_flip{flip}.png" )




