---
title: Intensity-based registration
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
<span style="font-size:18pt">$\begin{align}\\
y^k(\mathbf{x}_i;\mathbf{A},\mathbf{t}) &= x^k_i + \mathbf{q}(\mathbf{x}_i)^T\mathbf{w}^k\\\\
\mathbf{q}(\mathbf{x}_i) &= (1,x^1_i,x^2_i,x^3_i)^T\\\\
\mathbf{w}^k &= (t_k, a_{k1}, -1, a_{k2}, a_{k3})^T
\end{align}$</span>
</div>
</div>
