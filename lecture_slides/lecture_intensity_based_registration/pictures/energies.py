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
CT, MR = plt.imread( "CT.png" ), plt.imread( "MR.png" )
CT, MR = CT[ 70 : 70+256, 55 : 55+256, 0 ], MR[ 70 : 70+256, 55 : 55+256, 0 ]
CT = 1040 / .388  * CT - 1000  # 0 -> -1000 (air) and 0.388 -> 40 (brain tissue)
MR *= 1068 

#
MRnoisy = MR + np.random.standard_normal( (256,256) ) * 100
MRnoisy[ MRnoisy < 0 ] = 0

#
MRnoisyAndRescaled = 0.3 * MR + np.random.standard_normal( (256,256) ) * 30
MRnoisyAndRescaled[ MRnoisyAndRescaled < 0 ] = 0
if False:
    fig, ax = plt.subplots( 1, 2 )
    ax[0].imshow( MR, cmap='gray', vmin=MR.min(), vmax=MR.max() )
    ax[1].imshow( MRnoisyAndRescaled, cmap='gray', vmin=MR.min(), vmax=MR.max() )

#
if False:
    h,e = np.histogram( MR.ravel(), 32, density=True )
    binCenters = ( e[ 1: ] + e[ :-1 ] ) / 2
    fig, ax = plt.subplots()
    #ax.bar( binCenters, h )
    ax.bar( np.arange( h.size ), h )



#
binnedMR = np.ones( (256,256) )
binnedMR[ MR < 200 ] = 0
binnedMR[ MR > 500 ] = 2
if False:
    fig, ax = plt.subplots( 1, 2 )
    ax[0].imshow( MR, cmap='gray' )
    ax[1].imshow( binnedMR, cmap='gray' )

#
binnedCT  = np.ones( (256,256) )
binnedCT[ CT < -500 ] = 0
binnedCT[ CT > 500 ] = 2
if False:
    fig, ax = plt.subplots( 1, 2 )
    ax[0].imshow( CT, cmap='gray'  )
    ax[1].imshow( binnedCT, cmap='gray' )



fixed = MR
moving = CT
#moving = MRnoisy
moving = MRnoisyAndRescaled

if False:
    fixed = binnedMR
    moving = binnedCT


#
from collections import namedtuple
Scenario = namedtuple( 'Scenario', [ 'name', 'fixed', 'moving', 'criterion' ] )
scenarios = [ Scenario( 'MR_MR_ssd', MR, MRnoisy, 'ssd' ),
              Scenario( 'MR_MRscaled', MR, MRnoisyAndRescaled, None ),
              Scenario( 'MR_CT_3bins', binnedMR, binnedCT, 'entropy' ),
              Scenario( 'MR_CT_entropy', MR, CT, 'entropy' ),
              Scenario( 'MR_CT_mi', MR, CT, 'mi' ) 
              ]

columnNumber = 200
gap = 30
figI, axI = plt.subplots()
fig1D, ax1D = plt.subplots( 2, 1 )
figS, axS = plt.subplots()
figH = plt.figure()
axH = figH.add_subplot( projection='3d' )
figMovingH, axMovingH = plt.subplots()
figFixedH, axFixedH = plt.subplots()
figE, axE = plt.subplots()
figs = [ figI, fig1D, figS, figH, figMovingH, figFixedH, figE ]
axs = [ axI, ax1D[0], ax1D[1], axS, axH, axMovingH, axFixedH, axE ]
for fig in figs: fig.tight_layout()

# translations = np.linspace( -160, 160, 20 )
#translations = np.arange( -50, 50+1 ) / 50 * 160
translations = np.arange( -160, 160+1, 2 )


for scenario in scenarios:
    fixed = scenario.fixed
    moving = scenario.moving
    name = scenario.name
    criterion = scenario.criterion

    energies = []
    for translation in translations:
        for ax in axs: ax.clear()
        
        saveFigures = True if ( ( translation % 20 ) == 0 ) else False
        fileNameBase = f"{name}_translation{translation}"

        #
        from scipy.ndimage import map_coordinates
        X1, X2 = np.meshgrid( np.arange( 256 ), np.arange( 256  ), indexing='ij' )
        resampledMoving = map_coordinates( moving, [ X1+translation, X2 ], cval=moving.min(), order=0 )

        #
        axI.set_xlim( [0, 256*2-1 + gap ] )
        axI.set_ylim( [0, 255] )
        axI.imshow( fixed, cmap='gray', extent=[0,255,0,255] )
        if name == 'MR_MRscaled':
            axI.imshow( resampledMoving, cmap='gray', extent=[256+gap,256+gap+255, 0, 255],
                        vmin=fixed.min(), vmax=fixed.max() )
        else:
            axI.imshow( resampledMoving, cmap='gray', extent=[256+gap,256+gap+255, 0, 255] )
        axI.axis( False )
        if saveFigures: saveFigure( figI, fileNameBase + "_images.png" )
        l = axI.plot( [ columnNumber ]*2, [ 0, 255 ], 'b' )
        l = axI.plot( [ 256+gap+columnNumber ]*2, [ 0, 255 ], 'r' )
        if saveFigures: saveFigure( figI, fileNameBase + "_images_withLines.png" )

        #
        fixed1D = fixed[ :, columnNumber ]
        resampledMoving1D = resampledMoving[ :, columnNumber ]
        ax1D[ 0 ].plot( fixed1D, 'b' )
        ax1D[ 0 ].grid()
        ax1D[ 1 ].plot( resampledMoving1D, 'r' )
        ax1D[ 1 ].grid()
        if name == 'MR_MRscaled': ax1D[1].set_ylim( ax1D[0].get_ylim() )
        if name == 'MR_MR_ssd': ax1D[0].set_ylim( ax1D[1].get_ylim() )
        if saveFigures: saveFigure( fig1D, fileNameBase + "_1Dsignals.png" )

        #
        if criterion == 'ssd':
            squaredDifferences = ( fixed - resampledMoving )**2
            axS.imshow( squaredDifferences, cmap='gray' )
            axS.axis( False )
            if saveFigures: saveFigure( figS, fileNameBase + "_squaredDifferences.png" )
            
            energy = squaredDifferences.sum()
            
        elif criterion == 'entropy' or criterion == 'mi':
            # Joint histogram
            numberOfBins = 3 if (name == 'MR_CT_3bins') else 16

            if numberOfBins == 3:
                H = np.histogram2d( fixed1D.ravel(), resampledMoving1D.ravel(), bins=numberOfBins )[0]
            else:
                H = np.histogram2d( fixed.ravel(), resampledMoving.ravel(), bins=numberOfBins )[0]
            x,y = np.meshgrid( np.arange( numberOfBins ) -.5, np.arange( numberOfBins ) -.5, indexing='ij' )
            z = np.zeros_like( H )
            if numberOfBins == 3:
                color = [ 'm', 'c', 'y' ]*3
            else: 
                color = 'm'
            axH.bar3d( x.ravel(), y.ravel(), z.ravel(), .9, .9, H.ravel(), shade=True,
                      color=color )
            #ax.view_init( -36, 26, 0 )
            axH.azim=-36
            axH.elev=26
            plt.draw()
            if numberOfBins == 3:
                axH.set_xticks(  np.arange( numberOfBins ) )
                axH.set_yticks(  np.arange( numberOfBins ) )
                axH.set_zlim( 0, 120 )
            else:
                axH.set_xlim( 0, numberOfBins-1 )
                axH.set_ylim( 0, numberOfBins-1 )
                axH.set_zlim( 0, 35000 )

            axH.set_xlabel( r'$f$', fontsize=20, color='b' )
            axH.set_ylabel( r'$m$', fontsize=20, color='r' )
            if saveFigures: saveFigure( figH, fileNameBase + "_jointHistogram.png" )

            
            eps = np.finfo(np.float64).eps
            if criterion == 'entropy':
                H /= H.sum()
                energy = - ( H * np.log( H + eps ) ).sum()
            else:
                # marginals
                fixedH, movingH = H.sum( axis=1 ), H.sum( axis=0 )

                axFixedH.bar( np.arange( numberOfBins ), fixedH )
                axFixedH.set_xlabel( r'$f$', fontsize=20, color='b' )
                if saveFigures: saveFigure( figFixedH, fileNameBase + "_fixedMarginalHistogram.png" )

                axMovingH.bar( np.arange( numberOfBins ), movingH )
                axMovingH.set_xlabel( r'$m$', fontsize=20, color='r' )
                if saveFigures: saveFigure( figMovingH, fileNameBase + "_movingMarginalHistogram.png" )

                H /= H.sum()
                fixedH /= fixedH.sum()
                movingH /= movingH.sum()
                energy = - ( H * np.log( H + eps ) ).sum() \
                        + ( fixedH * np.log( fixedH + eps ) ).sum() \
                        + ( movingH * np.log( movingH + eps ) ).sum()


        #
        if criterion is not None: energies.append( energy )
        for fig in figs: fig.canvas.draw()
        #plt.pause( 1.0 )


    if len( energies ):
        axE.plot( translations, energies )
        axE.grid()
        saveFigure( figE, f"{name}_{criterion}_trajectory.png" )

















