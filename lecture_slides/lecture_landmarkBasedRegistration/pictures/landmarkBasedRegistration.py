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
if False:
    import nibabel as nib
    #fileName1 = '/home/koen/data/IXI/T1/IXI425-IOP-0988-T1.nii.gz'
    fileName1 = '/home/koen/data/IXI/T1/IXI371-IOP-0970-T1.nii.gz'
    #fileName2 = '/home/koen/data/IXI/T1/IXI378-IOP-0972-T1.nii.gz'
    #fileName2 = '/home/koen/data/IXI/T1/IXI371-IOP-0970-T1.nii.gz'
    fileName2 = '/home/koen/data/IXI/T1/IXI331-IOP-0892-T1.nii.gz'
    img1 = nib.load( fileName1 )
    img2 = nib.load( fileName2 )
    data1 = img1.get_fdata()
    data2 = img2.get_fdata()

    #
    im1 = np.flipud( data1[ :, :, 50 ].T )
    im2 = np.flipud( data2[ :, :, 50 ].T )

    im1[ im1 > 6000 ] = 6000
    im2[ im2 > 6000 ] = 6000

    plt.imsave( "IXI371-IOP-0970-T1_slice50.png", im1, cmap="gray" )
    plt.imsave( "IXI331-IOP-0892-T1_slice50.png", im2, cmap="gray" )
else:
    im1 = plt.imread( "IXI371-IOP-0970-T1_slice50.png" )[ :, :, 0 ]
    im2 = plt.imread( "IXI331-IOP-0892-T1_slice50.png" )[ :, :, 0 ]

#
if False:
    fig, ax = plt.subplots( 1, 2 )
    ax[ 0 ].imshow( im1, cmap="gray" )
    ax[ 0 ].grid()
    ax[ 1 ].imshow( im2, cmap="gray" )
    ax[ 1 ].grid()


#
points1 = [ [ 142, 65 ], [ 110, 210 ], [ 37, 130 ], [ 160, 175 ] ]
points2 = [ [ 130, 42 ], [ 125, 205 ], [ 45, 140 ], [ 183, 158 ] ]
colors = [ 'orange', 'blue', 'green', 'yellow' ]

#
fig1, ax1 = plt.subplots()
ax1.imshow( im1, cmap="gray" )
ax1.axis( False )
fig1.tight_layout()
saveFigure( fig1, "im1_noLandmarks.png" )
for n, point in enumerate( points1 ):
    s = ax1.scatter( point[ 1 ], point[ 0 ], c=colors[ n ] )
saveFigure( fig1, "im1_landmarks.png" )

fig2, ax2 = plt.subplots()
ax2.imshow( im2, cmap="gray" )
ax2.axis( False )
fig2.tight_layout()
saveFigure( fig2, "im2_noLandmarks.png" )
for n, point in enumerate( points2 ):
    s = ax2.scatter( point[ 1 ], point[ 0 ], c=colors[ n ] )
saveFigure( fig2, "im2_landmarks.png" )

    

# Compute optimal affine transformation
points1 = np.array( points1 )
points2 = np.array( points2 )
A = np.hstack( ( points1, np.ones( (points1.shape[0],1) ) ) )
im1to2 = np.eye( 3 )
for directionNumber in range( 2 ):
    t = points2[ :, directionNumber ].reshape( -1, 1 )
    im1to2[ directionNumber, : ] = np.linalg.solve( A.T @ A, A.T @ t ).ravel()

# Resample im2 to im1 grid
x, y = np.arange( im1.shape[0] ), np.arange( im1.shape[1] )
X,Y = np.meshgrid( x, y, indexing='ij' )
xs = np.array( [ X.ravel( order='F' ), Y.ravel( order='F' ) ] )
mappedXs =  im1to2[ :2, :2 ] @ xs + im1to2[ :2, -1 ].reshape( -1, 1 )
import scipy
resampledIm2 = scipy.ndimage.map_coordinates( im2, [ mappedXs[ 0, : ], mappedXs[ 1, : ] ] )
resampledIm2 = resampledIm2.reshape( im1.shape, order='F' )

#
im2to1 = np.linalg.inv( im1to2 )
mappedPoints2 = ( im2to1[ :2, :2 ] @ points2.T + im2to1[ :2, -1 ].reshape( -1, 1 ) ).T
fig3, ax3 = plt.subplots()
ax3.imshow( resampledIm2, cmap="gray" )
ax3.axis( False )
fig3.tight_layout()
saveFigure( fig3, "resampledIm2_noLandmarks.png" )
for n, point in enumerate( mappedPoints2 ):
    s = ax3.scatter( point[ 1 ], point[ 0 ], c=colors[ n ] )
saveFigure( fig3, "resampledIm2_landmarks.png" )


# Mosaic im1 and im2, both before and after registration
def mosaic( im1, im2, k=5 ):
    cos2D = np.cos ( ( x.reshape(-1,1) / im1.shape[0] * np.pi - np.pi/2 ) * k ) @ \
            np.cos ( ( y.reshape(1,-1) / im1.shape[1] * np.pi - np.pi/2 ) * k )
    mask = cos2D > 0
    mix = im2.copy(); mix[ mask ] = im1[ mask ]
    return mix
  
fig, ax = plt.subplots()
ax.imshow( mosaic( im1, im2, k=10 ), cmap="gray" )
ax.axis( False )
fig.tight_layout()
saveFigure( fig, "mosaic_beforeRegistration.png" )

fig, ax = plt.subplots()
ax.imshow( im1 + im2, cmap="gray" )
ax.axis( False )
fig.tight_layout()
saveFigure( fig, "average_beforeRegistration.png" )

fig, ax = plt.subplots()
ax.imshow( mosaic( im1, resampledIm2, k=10 ), cmap="gray" )
ax.axis( False )
fig.tight_layout()
saveFigure( fig, "mosaic_afterRegistration.png" )

fig, ax = plt.subplots()
ax.imshow( im1 + resampledIm2, cmap="gray" )
ax.axis( False )
fig.tight_layout()
saveFigure( fig, "average_afterRegistration.png" )


