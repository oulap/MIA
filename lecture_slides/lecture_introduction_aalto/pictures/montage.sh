#!/bin/bash

#
montage -tile 16x16 -mode concatenate overlayFramesProcessed/* overlayMontage.png
mogrify -resize 50% overlayMontage.png

#
montage -tile 16x16 -mode concatenate origFramesProcessed/* origMontage.png
mogrify -resize 50% origMontage.png
