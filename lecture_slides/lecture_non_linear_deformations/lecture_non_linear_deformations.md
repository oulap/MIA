---
title: Non-linear deformations
author: Koen Van Leemput
revealOptions:
transition: 'none'
title-slide-attributes:
  data-state: "title-slide"
header-includes: <script src="../stylesheet/leader-line.min.js"></script>
---

# Course structure
<section data-state="slide1">
<div class="r-vstack">
<div class="r-vstack">
<img id="img0" width="300" src="./media/course-structure-0.png" class="fragment semi-fade-out" data-fragment-index="0">
<p style="width:100; height:20px;font-size:18px" class="fragment semi-fade-out" data-fragment-index="0"> "Fitting functions"</p>
</div>
<div class="r-hstack" postion="absolute">
<div class="r-vstack">
\n<img height="160" src="./media/course-structure-1.png" id="img1">
<p style="width:100; height:20px;font-size:18px" > "Registration"</p>
</div>
<div style="width: 200px; height: 200px; border: 0px solid black;"></div>
<div class="r-vstack">
<img height="160" src="./media/course-structure-2.png" id="img2" class="fragment semi-fade-out" data-fragment-index="0">
<p style="width:100; height:20px;font-size:18px" class="fragment semi-fade-out" data-fragment-index="0"> "Segmentation"</p>
</div>
</div>
</div>
</section>

# Elements in image registration
<section data-state="slide2">
- Geometrical transformation: <span class="fragment highlight-blue" data-fragment-index="0">$\quad \mathbf{y}(\mathbf{x};\mathbf{w})$ </span>$: \mathbb{R}^{2} \rightarrow \mathbb{R}^{2}$ or $\mathbb{R}^{3} \rightarrow \mathbb{R}^{3}$
- Similarity measure: $\quad\mathcal{D}(\mathbf{w})$
- Regularization: $\quad\mathcal{S}(\mathbf{w})$
- Optimization algorith: $\quad\mathcal{J}(\mathbf{w}) = \mathcal{D}(\mathbf{w}) + \alpha\mathcal{S}(\mathbf{w})$
</section>

# Geometrical transformation
<section data-state="slide3">
<div class="r-vstack">
<div class="r-stack">
<div class="fragment fade-in-then-out" data-fragment-index="0"> <p style="color:blue"> Coordinates in image $\mathcal{R}$ </p></div>
<div class="fragment fade-in-then-out" data-fragment-index="1"> <p style="color:blue"> parameters of the transformation </p></div>
<div class="fragment fade-in" data-fragment-index="2"> <p style="color:blue"> resulting coordinates in image $\mathcal{T}$</p></div>
</div>
<div class="r-stack">
<p class="fragment fade-out" data-fragment-index="0">$\quad \mathbf{y}(\mathbf{x};\mathbf{w}): \mathbb{R}^{2} \rightarrow \mathbb{R}^{2}$ or $\mathbb{R}^{3} \rightarrow \mathbb{R}^{3}$ <p>
<p class="fragment fade-in-then-out" data-fragment-index="0">$\quad \mathbf{y}(\textcolor{blue}{\mathbf{x}};\mathbf{w}): \mathbb{R}^{2} \rightarrow \mathbb{R}^{2}$ or $\mathbb{R}^{3} \rightarrow \mathbb{R}^{3}$ <p>
<p class="fragment fade-in-then-out" data-fragment-index="1">$\quad \mathbf{y}(\mathbf{x};\textcolor{blue}{\mathbf{w}}): \mathbb{R}^{2} \rightarrow \mathbb{R}^{2}$ or $\mathbb{R}^{3} \rightarrow \mathbb{R}^{3}$ <p>
<p class="fragment fade-in" data-fragment-index="2">$\quad \textcolor{blue}{\mathbf{y}(\mathbf{x};\mathbf{w})}: \mathbb{R}^{2} \rightarrow \mathbb{R}^{2}$ or $\mathbb{R}^{3} \rightarrow \mathbb{R}^{3}$ <p>
</div>
<div class="r-hstack">
<div class="r-stack">
<div class="fragment fade-in-then-out" data-fragment-index="0" style="z-index:200"> <p style="color:white;">$\mathbf{x}$</p></div>
<div><img height="300" src="./media/t1_1.png" id="t1_1" style="transform:translate(-20%,20%)"></div>
</div>
<div class="fragment fade-in-then-out" data-fragment-index="1" style="z-index:200"> <p>$\mathbf{w}$</p></div>
<div class="r-stack">
<div class="fragment fade-in" data-fragment-index="2" style="z-index:200;transform:translate(50%,-20%)"> <p style="color:white">$\mathbf{y}(\mathbf{x};\mathbf{w})$</p></div>
<img height="300" src="./media/t1_2.png" id="t1_2" style="transform:translate(20%,20%)">
</div>
</div>
</section>


# Linear transformations
<section data-state="slide4">
<div class="r-vstack">
<div class="r-hstack">
<div class="r-vstack" style="margin-right:4em">
<p style="font-size:18pt;margin-bottom:20px"> translation </p>
<div class="r-hstack">
<div class="slidecontainer">
  <input type="range" min="-50" max="50" value="-20" class="slider" orient="vertical" id="translation_slider" style="outline:none; opacity:0.7 width:50px; height:100px" >
</div>
<svg width="120" height="120">
  <use href="#trans_grid" />
</svg>
<svg width="120" height="120" style="transform:translate(0px,-20px)" id="translate_grid">
  <use href="#trans_grid" />
</svg>
</div>
<p style="margin-top:0px"> <span style="font-size:14pt;"> $\mathbf{y}(\mathbf{x};\mathbf{t}) = \mathbf{x}+\mathbf{t}$ </span></p>
</div>
<div class="r-vstack" style="margin-left:4em">
<p style="font-size:18pt; margin-bottom:20px"> rigid: translation + rotation </p>
<div class="r-hstack" style="margin-bottom:0px">
<div class="slidecontainer">
  <input type="range" min="-90" max="90" value="20" class="slider" orient="vertical" id="rotation_slider" style="outline:none; opacity:0.7 width:50px; height:100px" >
</div>
<svg width="120" height="120">
  <use href="#trans_grid" />
</svg>
<svg width="120" height="120" style="transform:translate(10px,-20px) rotate(20deg);" id="rotate_grid">
  <use href="#trans_grid" />
</svg>
</div>
<p style="margin-top:0px"> 
<span style="font-size:14pt"> $\mathbf{y}(\mathbf{x};\mathbf{R},\mathbf{t}) = \mathbf{R}\mathbf{x}+\mathbf{t}$ </span> <br> 
<span style="font-size:14pt"> $\mathbf{R}^{T}\mathbf{R} = \mathbf{I}, \quad \det(\mathbf{R}) = 1$ </span> <br> 
</p>
</div>
</div>
<div class="r-hstack">
<div class="r-vstack" style="margin-right:4em">
<p style="font-size:18pt;margin-bottom:20px"> similarity transformation </p>
<div class="r-hstack">
<div class="slidecontainer">
  <input type="range" min="0.5" max="1.5" value="1.1" step="0.1" class="slider" orient="vertical" id="scale_slider" style="outline:none; opacity:0.7 width:50px; height:100px" >
</div>
<svg width="120" height="120">
  <use href="#trans_grid" />
</svg>
<svg width="120" height="120" style="transform: scale(1.1) rotate(20deg) translate(20%,-20%);" id="scale_grid">
  <use href="#trans_grid" />
</svg>
</div>
<p style="margin-top:0px"><span style="font-size:14pt"> $\mathbf{y}(\mathbf{x};s,\mathbf{R},\mathbf{t}) = s\mathbf{R}\mathbf{x}+\mathbf{t}, \quad s>0$ </span> <br> </p>
</div>
<div class="r-vstack" style="margin-left:4em">
<p style="font-size:18pt;margin-bottom:20px"> affine transformation </p>
<div class="r-hstack">
<div class="slidecontainer">
  <input type="range" min="-40" max="40" value="-30" class="slider" orient="vertical" id="skew_slider" style="outline:none; opacity:0.7 width:50px; height:100px" >
</div>
<svg width="120" height="120">
  <use href="#trans_grid" />
</svg>
<svg width="120" height="120" style="transform:scale(0.8, 1.2) rotate(10deg) translate(20%,-20%) skewX(-30deg);" id="skew_grid">
  <use href="#trans_grid" />
</svg>
</div>
<p style="margin-top:0px"><span style="font-size:14pt"> $\mathbf{y}(\mathbf{x};\mathbf{A},\mathbf{t}) = \mathbf{A}\mathbf{x}+\mathbf{t}$ </span> <br> </p>
</div>
</div>
</div>
</section>

# Non-linear transformations
<section data-state="slide5">
<div class="r-hstack">
<svg width="250" height="250" style="transform:translate(-40px,0px)">
  <use href="#trans_grid" />
</svg>
<svg width="250" height="250" style="transform:translate(40px,0px)">
  <use href="#deformed_grid" />
</svg>
</div>
- Tissue motion (cardiac cycle/respiratory motion)
- Deformation compensation (intra-operative, soft tissue)
- Longitudinal tissue changes (e.g., tumor growth)
- Inter-subject registration
</section>

# Canonical form
<section data-state="slide6">
<div class="r-vstack">
<p id="canonical_form"> $\mathbf{y}(\mathbf{x};\mathbf{w}) = \mathbf{x} + \mathbf{u}(\mathbf{x};\mathbf{w})$ </p>

<div class="r-hstack">
<div style="border:solid gray 3pt;padding:10px; transform:translate(-70%, 120%)" id="identity"> <p>Identity part</p></div>
<div style="border:solid gray 3pt;padding:10px; transform:translate(70%, 120%)" id="deformation"> <p>Deformation part</p></div>
</div>
</div>
</section>

# Canonical form
<span> $\mathbf{y}(\mathbf{x};\mathbf{w}) = \mathbf{x} + \mathbf{u}(\mathbf{x};\mathbf{w})$ </span>
<div class="r-vstack">
<div class="r-hstack">
<div class="r-stack">
<div><img height="230" src="./media/R.png"></div>
<div style="z-index:200;transform:translate(0%,300%)"><span style="font-size:16pt">$\mathcal{R}$</span></div>
</div>
<div class="r-stack">
<div><img height="230" src="./media/T.png"></div>
<div style="z-index:200;transform:translate(0%,300%)"><span style="font-size:16pt">$\mathcal{T}$</span></div>
</div>
</div>
<div class="r-hstack">
<div class="r-stack">
<div style="z-index:200;transform:translate(0%,300%)"><span style="font-size:16pt">$\mathbf{u}(\mathbf{x};\mathbf{w})$</span></div>
<div><img height="230" src="./media/u.png"></div>
</div>
<div class="r-stack">
<div style="z-index:200;transform:translate(0%,300%)"><span style="font-size:16pt">$\mathbf{y}(\mathbf{x};\mathbf{w})$</span></div>
<div><img height="230" src="./media/y.png"></div>
</div>
<div class="r-stack">
<div style="z-index:200;transform:translate(0%,300%)"><span style="font-size:16pt">$\mathcal{T}(\mathbf{y}(\mathbf{x};\mathbf{w}))$</span></div>
<div><img height="230" src="./media/T_transformed.png"></div>
</div>
</div>
</div>

# Affine transformation
<section data-state="slide8">
<div class="r-vstack">
<div>
<span style="font-size:18pt">$\begin{align}\mathbf{y}(\mathbf{x}_{i};\mathbf{A},\mathbf{t}) &= \mathbf{A}\mathbf{x}_{i} + \mathbf{t}\\
&= \mathbf{x}_{i} + \underbrace{(\mathbf{A} - \mathbf{I}_{3})\mathbf{x}_{i} + \mathbf{t}}_{\mathbf{u}(\mathbf{x}_{i};\mathbf{A},\mathbf{t})}\end{align}$
<br>
<br>
with $\mathbf{A} = \begin{pmatrix} a_{11} & a_{12} & a_{13}\\
                                   a_{21} & a_{22} & a_{23}\\
                                   a_{31} & a_{32} & a_{33}\end{pmatrix}$
and $\mathbf{t} = \begin{pmatrix}t_{1} \\ t_{2} \\ t_{3} \end{pmatrix}$</span>
</div>
<div class="fragment fade-in" data-fragment-index="0">
<span style="color:blue;font-size:18pt;"> <b> All-important trick:</b></span> <span style="font-size:18pt"> look at each coordinate $k$ separately!</span>
<div id="coordinate_eq"><span style="font-size:18pt">$\begin{align}\\
y^k(\mathbf{x}_i;\mathbf{A},\mathbf{t}) &= x^k_i + \mathbf{q}(\mathbf{x}_i)^T\mathbf{w}^k\\\\
\mathbf{q}(\mathbf{x}_i) &= (1,x^1_i,x^2_i,x^3_i)^T\\\\
\mathbf{w}^k &= (t_k, a_{k1}, -1, a_{k2}, a_{k3})^T
\end{align}$</span></div>
<div style="border:solid gray 3pt;padding:0px; transform:translate(450%, -80%); width:150px; height:40px;text-align:center;" id="k1"> <span style="font-size:18pt;line-height:0">(for $k=1$)</span></div>
</div>
</div>
</section>

# Affine transformation
<section data-state="slide9">
<div class="r-vstack">
<p align="left" text-align="left">In matrix form: (all $N$ input points simultaneously)</p>
<br>
<p align="left">Define</p>
$\mathbf{x}^{k} = \begin{pmatrix}x_{1}^{k}\\x_{2}^{k}\\\vdots\\x_{N}^{k}\end{pmatrix} \quad \mathbf{y}^{k} = \begin{pmatrix}y_{1}^{k}\\y_{2}^{k}\\\vdots\\y_{N}^{k}\end{pmatrix} \quad
\mathbf{Q\prime} = \begin{pmatrix}1 & x_{1}^{1} & x_{1}^{2} & x_{1}^{3}\\ 1 & x_{2}^{1} & x_{2}^{2} & x_{2}^{3}\\\vdots & \vdots & \vdots &\vdots \\ 1 & x_{N}^{1} & x_{N}^{2} & x_{N}^{3}\end{pmatrix}$
<br>
<br>
<div class="r-hstack">
<div style="font-size:96pt;transform:translate(-50%,0%)">&#x21e8;</div>
<span style="transform:translate(50%,0%)">$\mathbf{y}^{k} = \mathbf{x}^{k} + \mathbf{Q\prime}\mathbf{w}_{k}$</span>
</div>
</div>
</section>

# Affine transformation
<section data-state="slide10">
<div class="r-vstack">
<div class="r-stack" style="transform:translate(0%,150%)">
<svg width="200" height="200" position="fixed">
  <use href="#trans_grid" />
</svg>
<svg width="200" height="200" transform="matrix(1 0 0 1 0 0)" id="moving_grid">
  <use href="#trans_grid"/>
</svg>
</div>
<div class="r-stack" style="transform:translate(0%,400%)">
<div class="fragment fade-out" data-fragment-index="0"><span style="font-size:16pt">
$\mathbf{y}^{1}=\mathbf{x}^{1} + \mathbf{Q\prime}\begin{pmatrix}0\\0\\0\end{pmatrix},\quad
\mathbf{y}^{2}=\mathbf{x}^{2} + \mathbf{Q\prime}\begin{pmatrix}0\\0\\0\end{pmatrix},\quad
\mathbf{A} = \begin{pmatrix}1 & 0\\0 & 1\end{pmatrix}, \quad \mathbf{t} = \begin{pmatrix}0\\0 \end{pmatrix}$
</span></div>
<div class="fragment fade-in-then-out" data-fragment-index="0"><span style="font-size:16pt">
$\mathbf{y}^{1}=\mathbf{x}^{1} + \mathbf{Q\prime}\begin{pmatrix}240\\0\\0\end{pmatrix},\quad
\mathbf{y}^{2}=\mathbf{x}^{2} + \mathbf{Q\prime}\begin{pmatrix}0\\0\\0\end{pmatrix},\quad
\mathbf{A} = \begin{pmatrix}1 & 0\\0 & 1\end{pmatrix}, \quad \mathbf{t} = \begin{pmatrix}240\\0 \end{pmatrix}$
</span></div>
<div class="fragment fade-in-then-out" data-fragment-index="1"><span style="font-size:16pt">
$\mathbf{y}^{1}=\mathbf{x}^{1} + \mathbf{Q\prime}\begin{pmatrix}240\\0.3\\0\end{pmatrix},\quad
\mathbf{y}^{2}=\mathbf{x}^{2} + \mathbf{Q\prime}\begin{pmatrix}0\\0\\0\end{pmatrix},\quad
\mathbf{A} = \begin{pmatrix}1.3 & 0\\0 & 1\end{pmatrix}, \quad \mathbf{t} = \begin{pmatrix}240\\0 \end{pmatrix}$
</span></div>
<div class="fragment fade-in-then-out" data-fragment-index="2"><span style="font-size:16pt">
$\mathbf{y}^{1}=\mathbf{x}^{1} + \mathbf{Q\prime}\begin{pmatrix}240\\0\\0.2\end{pmatrix},\quad
\mathbf{y}^{2}=\mathbf{x}^{2} + \mathbf{Q\prime}\begin{pmatrix}0\\0\\0\end{pmatrix},\quad
\mathbf{A} = \begin{pmatrix}1 & 0.2\\0 & 1\end{pmatrix}, \quad \mathbf{t} = \begin{pmatrix}240\\0 \end{pmatrix}$
</span></div>
<div class="fragment fade-in-then-out" data-fragment-index="3"><span style="font-size:16pt">
$\mathbf{y}^{1}=\mathbf{x}^{1} + \mathbf{Q\prime}\begin{pmatrix}240\\0.3\\0.2\end{pmatrix},\quad
\mathbf{y}^{2}=\mathbf{x}^{2} + \mathbf{Q\prime}\begin{pmatrix}0\\0\\0\end{pmatrix},\quad
\mathbf{A} = \begin{pmatrix}1.3 & 0.2\\0 & 1\end{pmatrix}, \quad \mathbf{t} = \begin{pmatrix}240\\0 \end{pmatrix}$
</span></div>
<div class="fragment fade-in-then-out" data-fragment-index="4"><span style="font-size:16pt">
$\mathbf{y}^{1}=\mathbf{x}^{1} + \mathbf{Q\prime}\begin{pmatrix}0\\0\\0\end{pmatrix},\quad
\mathbf{y}^{2}=\mathbf{x}^{2} + \mathbf{Q\prime}\begin{pmatrix}240\\0\\0\end{pmatrix},\quad
\mathbf{A} = \begin{pmatrix}1 & 0\\0 & 1\end{pmatrix}, \quad \mathbf{t} = \begin{pmatrix}0\\240 \end{pmatrix}$
</span></div>
<div class="fragment fade-in-then-out" data-fragment-index="5"><span style="font-size:16pt">
$\mathbf{y}^{1}=\mathbf{x}^{1} + \mathbf{Q\prime}\begin{pmatrix}0\\0\\0\end{pmatrix},\quad
\mathbf{y}^{2}=\mathbf{x}^{2} + \mathbf{Q\prime}\begin{pmatrix}240\\0.2\\-0.3\end{pmatrix},\quad
\mathbf{A} = \begin{pmatrix}1 & 0\\0.2 & 0.7\end{pmatrix}, \quad \mathbf{t} = \begin{pmatrix}0\\240 \end{pmatrix}$
</span></div>
<div class="fragment fade-in" data-fragment-index="6"><span style="font-size:16pt">
$\mathbf{y}^{1}=\mathbf{x}^{1} + \mathbf{Q\prime}\begin{pmatrix}240\\0.1\\0.2\end{pmatrix},\quad
\mathbf{y}^{2}=\mathbf{x}^{2} + \mathbf{Q\prime}\begin{pmatrix}240\\0.2\\-0.3\end{pmatrix},\quad
\mathbf{A} = \begin{pmatrix}1.1 & 0.2\\0.2 & 0.7\end{pmatrix}, \quad \mathbf{t} = \begin{pmatrix}240\\240 \end{pmatrix}$
</span></div>
</div>
</div>
</section>

# Non-linear transformations
<div class="r-vstack">
<p>Just use basis functions that depend <b><u>non-linearly</u></b> on $\mathbf{x}$ </p>
<br>
<p>
$\mathbf{y}^{k}=\mathbf{x}^{k} + \mathbf{Q\prime}\mathbf{w}_{k}$
</p>
<div class="r-stack">
<div class="fragment fade-out" data-fragment-index="0"><p>
$\mathbf{Q\prime} = \begin{pmatrix} 1 & x_{1}^{1} & x_{1}^{2} & x_{1}^{3}\\
                        1 & x_{2}^{1} & x_{2}^{2} & x_{2}^{3}\\
                        \vdots & \vdots & \vdots & \vdots \\
                        1 & x_{N}^{1} & x_{N}^{2} & x_{N}^{3}\end{pmatrix}$
</p>
</div>
<div class="fragment fade-in-then-out" data-fragment-index="0"><p>
$\mathbf{Q\prime} = \xcancel{\begin{pmatrix} 1 & x_{1}^{1} & x_{1}^{2} & x_{1}^{3}\\
                        1 & x_{2}^{1} & x_{2}^{2} & x_{2}^{3}\\
                        \vdots & \vdots & \vdots & \vdots \\
                        1 & x_{N}^{1} & x_{N}^{2} & x_{N}^{3}\end{pmatrix}}$
</p>
</div>
<div class="fragment fade-in" data-fragment-index="1"><p>
$\mathbf{Q\prime} = \begin{pmatrix} \phi_{1}(\mathbf{x}_{1}) & \phi_{2}(\mathbf{x}_{1}) &  \cdots &  \phi_{M}(\mathbf{x}_{1})\\
                        \phi_{1}(\mathbf{x}_{2}) & \phi_{2}(\mathbf{x}_{2}) & \cdots & \phi_{M}(\mathbf{x}_{2})\\
                        \vdots & \vdots & \ddots & \vdots \\
                     \phi_{1}(\mathbf{x}_{N})& \phi_{2}(\mathbf{x}_{N}) & \cdots & \phi_{M}(\mathbf{x}_{N})\end{pmatrix}$
</p>
</div>
</div>
<div class="fragment fade-in" data-fragment-index="1">
<p> 
Non-linear in input variables, but still linear in parameters!
</p>
</div>
</div>

# Non-linear transformations
<img src="./media/non-linear_grid.png" width="600">

# Non-linear transformations
<div class="r-hstack">
<p>$\phi_m(\mathbf{x})$</p>
<img src="./media/non-linear_bfs.png" width="600">
</div>

# Non-linear transformations
<img src="./media/non-linear_grid2.png" height="600">

# Non-linear basis functions used in exercise this week
<div class="r-hstack">
<div class="r-vstack">
<img src="./media/1d_spline.png" height="300">
<div style="border:solid gray 3pt;padding:5px;">1-D: B-spline</div>
</div>
<div style="font-size:96pt;">&#x21e8;</div>
<div class="r-vstack">
<img src="./media/2d_spline.png" height="450">
<div style="border:solid gray 3pt;padding:5px;">2-D: "tensor B-spline"</div>
</div>
</div>

# Non-linear basis functions used in exercise this week
<div class="r-vstack">
<div class="r-hstack" style="transform:translate(0%,-20%)">
<img src="./media/1d_hist.png" height="230" style="transform:translate(-5%,0%)">
<p style="font-size:22pt">$\cdot$</p>
<img src="./media/1d_hist2.png" height="230" style="transform:translate(5%,0%)">
<p style="font-size:22pt;transform:translate(80%,0%)">$=$</p>
<img src="./media/2d_hist.png" height="350" style="transform:translate(5%,0%)">
</div>
<div style="transform:translate(0%,-50%)"><span style="font-size:16pt">
$\begin{pmatrix} 1 \\ 8 \\ 24 \\ 33 \\ 24 \\ 8 \\ 1 \end{pmatrix} \cdot \begin{pmatrix}1 & 8 & 24 & 33 & 24 & 8 & 1\end{pmatrix}  = \begin{pmatrix}
1 \cdot 1 & 1 \cdot 8 & 1 \cdot 24 & 1 \cdot 33 & 1 \cdot 24 & 1 \cdot 8 & 1 \cdot 1\\
8 \cdot 1 & 8 \cdot 8 & 8 \cdot 24 & 8 \cdot 33 & 8 \cdot 24 & 8 \cdot 8 & 8 \cdot 1\\
24 \cdot 1 & 24 \cdot 8 & 24 \cdot 24 & 24 \cdot 33 & 24 \cdot 24 & 24 \cdot 8 & 24 \cdot 1\\
33 \cdot 1 & 33 \cdot 8 & 33 \cdot 24 & 33 \cdot 33 & 33 \cdot 24 & 33 \cdot 8 & 33 \cdot 1\\
24 \cdot 1 & 24 \cdot 8 & 24 \cdot 24 & 24 \cdot 33 & 24 \cdot 24 & 24 \cdot 8 & 24 \cdot 1\\
8 \cdot 1 & 8 \cdot 8 & 8 \cdot 24 & 8 \cdot 33 & 8 \cdot 24 & 8 \cdot 8 & 8 \cdot 1\\
1 \cdot 1 & 1 \cdot 8 & 1 \cdot 24 & 1 \cdot 33 & 1 \cdot 24 & 1 \cdot 8 & 1 \cdot 1\\
\end{pmatrix}$
</span>
</div>
</div>

# Non-linear basis functions used in exercise this week
<p>Warp field: need one for each coordinate! </p>
<div class="r-hstack">
<div class="r-vstack" style="transform:translate(-20%,0%)">
<img src="./media/2d_bfs.png" height="400" style="transform:translate(0%,0%)">
<p style="transform:translate(0%, -80%)"><span style="font-size:16pt">$\mathbf{y}^1 = \mathbf{x}^1 + \mathbf{Q\prime}\mathbf{w}_1$</span></p>
</div>
<div class="r-vstack" style="transform:translate(20%,0%)">
<img src="./media/2d_bfs.png" height="400" style="transform:translate(0%,0%)">
<p style="transform:translate(0%, -80%)"><span style="font-size:16pt">$\mathbf{y}^2 = \mathbf{x}^2 + \mathbf{Q\prime}\mathbf{w}_2$</span></p>
</div>
</div>

# Elements in image registration
- Geometrical transformation: $\quad \mathbf{y}(\mathbf{x};\mathbf{w}): \mathbb{R}^{2} \rightarrow \mathbb{R}^{2}$ or $\mathbb{R}^{3} \rightarrow \mathbb{R}^{3}$
- Similarity measure: $\quad\mathcal{D}(\mathbf{w})$
- Regularization: $\quad\mathcal{S}(\mathbf{w})$
- Optimization algorith: <span class="fragment highlight-blue" data-fragment-index="0">$\quad\mathcal{J}(\mathbf{w}) = \mathcal{D}(\mathbf{w}) + \alpha\mathcal{S}(\mathbf{w})$</span>

# Optimization of image registration
<p> Optimize sum of squared differences </p>
<p> $\mathcal{D}_{\text{SSD}}(\mathbf{w}) = \frac{1}{2}\sum_{i\in\Omega}(\mathcal{T}(\mathbf{y}(\mathbf{x}_i;\mathbf{w})) - \mathcal{R}(\mathbf{x}_i))^2$ </p>
<br>
<p><span style="color:blue"> New notation: </span> all coordinates simultaneously by stacking them </p>
<p> <span style="font-size:18pt">$\mathbf{\tilde{x}} = \begin{pmatrix} \mathbf{x}^1\\\mathbf{x}^2\\\mathbf{x}^3\end{pmatrix} \quad \mathbf{\tilde{y}} = \begin{pmatrix} \mathbf{y}^1\\\mathbf{y}^2\\\mathbf{y}^3\end{pmatrix} \quad \mathbf{\tilde{w}} = \begin{pmatrix} \mathbf{w}^1\\\mathbf{w}^2\\\mathbf{w}^3\end{pmatrix}$ </span></p>
<div class="r-hstack">
<div style="font-size:96pt;transform:translate(-20%,0%)">&#x21e8;</div>
<span style="font-size:18pt;transform:translate(20%,0%)">$\mathbf{\tilde{y}} = \mathbf{\tilde{x}} + \begin{pmatrix}\mathbf{Q\prime} & 0 & 0\\ 0 & \mathbf{Q\prime} & 0\\ 0 & 0 & \mathbf{Q\prime} \end{pmatrix}\mathbf{w} = \mathbf{\tilde{x}} + \mathbf{Q}\mathbf{w}$ </span>
</div>

# Optimization of image registration
<div style="align:left; text-align:left"> More new notation: </div>
<br>
<div style="align:center">$\mathcal{R}(\mathbf{\tilde{x}})$: vector of all reference image values <br>
$\mathcal{T}(\mathbf{\tilde{y}})$: vector of corresponding template image values </div>
<br>
<div class="r-hstack">
<div style="font-size:96pt;transform:translate(-30%,0%)">&#x21e8;</div>
<span style="transform:translate(30%,0%)">$\begin{align}\mathcal{D}_{\text{SSD}}(\mathbf{w}) &= \frac{1}{2}\sum_{i\in\Omega}(\mathcal{T}(\mathbf{y}(\mathbf{x}_i;\mathbf{w})) - \mathcal{R}(\mathbf{x}_i))^2\\
&= \frac{1}{2}\|\mathcal{T}(\mathbf{\tilde{y}}) - \mathcal{R}(\mathbf{\tilde{x}})\|^2\end{align}$ </span>
</div>

# Linearization
<p>For a small change $\mathbf{s}$ to the current parameter estimate $\mathbf{w}$ we have (linearization): </p> 
<p>$\begin{align}\mathcal{D}_{\text{SSD}}(\mathbf{w} + \mathbf{s}) &= \frac{1}{2}\|\mathcal{T}(\mathbf{\tilde{x}} + \mathbf{Q}(\mathbf{w} + \mathbf{s})) - \mathcal{R}(\mathbf{\tilde{x}})\|^2\\ &\approx  \frac{1}{2}\|\mathcal{T}(\mathbf{\tilde{x}} + \mathbf{Q}(\mathbf{w})) + \nabla\mathcal{T}(\mathbf{\tilde{x}} + \mathbf{Q}\mathbf{w})\mathbf{Q}\mathbf{s} - \mathcal{R}(\mathbf{\tilde{x}})\|^2 \end{align}$ </p>
<br>
<p>with $\nabla\mathcal{T}(\mathbf{\tilde{x}} + \mathbf{Q}\mathbf{w}) = (\mathbf{G}_{1}\quad\mathbf{G}_{2}\quad\mathbf{G}_{3})$ </p>
<p>and $\mathbf{G}_k = \text{diag}(\left.\frac{\partial\mathcal{T}}{\partial y^{k}}\right|_{\mathbf{y}_1}, \dots, \left.\frac{\partial\mathcal{T}}{\partial y^{k}}\right|_{\mathbf{y}_N})$ </p>

# Linearization (baby version)
<p>1D, only 1 pixel, only translation ($y=x+t$) </p>
<div class="r-hstack">
<div class="r-stack">
<div><img src="./media/linearization1.png" height="400"></div>
<div><img src="./media/linearization2.png" height="400" class="fragment fade-in" data-fragment-index="0" style="transform:translate(0%, -23%)"></div>
</div>
<div><img src="./media/linearization3.png" height="400" class="fragment fade-in" data-fragment-index="0"></div>
</div>

# Optimization of image registration
<div style="float:left;align:left;text-align:left">
<p><span style="color:blue;">Gauss-Newton optimization:</span> search for change $\mathbf{s}$ that minimizes </p>
<span>$\mathcal{D}_{\text{SSD}}(\mathbf{w} + \mathbf{s}) \approx \frac{1}{2}\|\mathcal{T}(\mathbf{\tilde{x}} + \mathbf{Q}\mathbf{w}) + \nabla\mathcal{T}(\mathbf{\tilde{x}} + \mathbf{Q}\mathbf{w})\mathbf{Q}\mathbf{s} - \mathcal{R}(\mathbf{\tilde{x}}) \|^2$</span>
</div>
<div class="r-vstack">
<div class="fragment fade-in" data-fragment-index="0">
<p style="transform:translate(-30%, 0%)"> Is standard least-squares fit!</p>
<div class="r-hstack">
<div style="font-size:128pt;transform:translate(-20%,-10%)" class="fragment fade-in" data-fragment-index="2">&#x21ba;</div>
<div class="r-vstack">
<div style="float:right;align:right;text-align:right">
<span> solve $(\mathbf{J}^{T}\mathbf{J})\mathbf{s} = \mathbf{J}^T(\mathcal{R}(\mathbf{\tilde{x}}) - \mathcal{T}(\mathbf{\tilde{x}} + \mathbf{Q}\mathbf{w}))$</span>
<br>
<span> where $\mathbf{J} = \nabla\mathcal{T}(\mathbf{\tilde{x}} + \mathbf{Q}\mathbf{w})\mathbf{Q}$</span>
</div>
<div class="fragment fade-in" data-fragment-index="1">
<p>When done, update current parameter estimate $\mathbf{w}\coloneqq\mathbf{w} + \mathbf{s}$</p>
</div>
</div>
</div>
</div>
</div>

# Optimization of image registration
<div class="r-hstack">
<img src="./media/example_reg1.png" height="400">
<img src="./media/example_reg2.png" height="400">
<img src="./media/example_reg3.png" height="400">
</div>
