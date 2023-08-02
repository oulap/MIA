---
title: <code> pyscript </code> example
author: Oula Puonti
revealOptions:
transition: 'none'
title-slide-attributes:
  data-state: "title-slide"
header-includes: <script defer src="https://pyscript.net/latest/pyscript.js"></script> 

---
# Non-linear deformation
<py-config>
    packages = ["numpy", "matplotlib", "scipy"]
</py-config>

<py-script src="nonlin_grid.py"></py-script>
<div class="r-hstack">
<div style="font-size:12pt;width:55%">
~~~python
import numpy as np
import matplotlib.pyplot as plt
from scipy.ndimage import zoom

def draw_grid():
    shape = [128,128]
    chape = 12
    scale = 3
    disp = np.random.randn(8,8,2) * scale
    disp_zoomed = np.zeros([128, 128, 2])
    for i in range(disp_zoomed.shape[2]):
        disp_zoomed[:,:,i] = zoom(disp[:,:,i],16)

    identity = np.stack(np.meshgrid(*[np.arange(s).astype(float) for s in shape]), -1)
    grid = identity + disp_zoomed
    skip = 16
    skip = 16
    plt.clf()
    for i in range(0, 128, skip):
        plt.plot(identity[i, :, 1], identity[i, :, 0], color='b')
    plt.plot(identity[-1, :, 1], identity[-1, :, 0], color='b')
    for j in range(0, 128, skip):
        plt.plot(identity[:, j, 1], identity[:, j, 0], color='b')
    plt.plot(identity[:, -1, 1], identity[:, -1, 0], color='b')
    for i in range(0, 128, skip):
        plt.plot(grid[i, :, 1], grid[i, :, 0], color='r')
    plt.plot(grid[-1, :, 1], grid[-1, :, 0], color='r')
    for j in range(0, 128, skip):
        plt.plot(grid[:, j, 1], grid[:, j, 0], color='r')
    plt.plot(grid[:, -1, 1], grid[:, -1, 0], color='r')
    plt.axis('off')
    display(plt, target="graph-area", append=False)

draw_grid()
~~~
</div>
<div style="width:45%">
<div id="graph-area"></div>
<button py-click = "draw_grid()" > update </button>
</div>
</div>
