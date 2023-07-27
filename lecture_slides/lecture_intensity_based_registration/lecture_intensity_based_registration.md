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

# Image registration
<section data-state="slide2">
<div class="r-vstack">
<div style="font-size:18pt"><p> Determine a geometrical transformation that aligns points in an
image with corresponding points in other image(s)</p></div>
<div class="r-hstack" >
<div class="r-stack">
<div><img height="300" src="./media/img1_slide1.png" id="img1_slide2"></div>
<div><img height="300" src="./media/img1_slide1.png" id="img1_slide2"></div>
</div>
<div class="r-stack">
<div><img height="300" src="./media/img2_slide1.png" id="img2_slide2" class="fragment fade-out" data-fragment-index="0"></div>
<div><img height="300" src="./media/img4_slide1.png" id="img2_slide2" class="fragment fade-in" data-fragment-index="0"></div>
</div>
<div class="r-stack">
<div><img height="300" src="./media/img3_slide1.png" id="img3_slide2" class="fragment fade-out" data-fragment-index="0"></div>
<div><img height="300" src="./media/img5_slide1.png" id="img3_slide2" class="fragment fade-in" data-fragment-index="0"></div>
</div>
</div>

</div>
</section>

# Elements in image registration
<section data-state="slide3">
- Geometrical transformation: <span id="formula_slide3" class="fragment highlight-blue" data-fragment-index="0">$\quad \mathbf{y}(\mathbf{x};\mathbf{w}) : \mathbb{R}^{2} \rightarrow \mathbb{R}^{2}$</span> or $\mathbb{R}^{3} \rightarrow \mathbb{R}^{3}$
- Similarity measure: $\quad\mathcal{D}(\mathbf{w})$
- Regularization: $\quad\mathcal{S}(\mathbf{w})$
- Optimization algorith: $\quad\mathcal{J}(\mathbf{w}) = \mathcal{D}(\mathbf{w}) + \alpha\mathcal{S}(\mathbf{w})$
</section>

# Transformations (linear)
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

# Transformations (non-linear)
<section data-state="slide5">
<div class="r-hstack">
<svg width="300" height="300" style="transform:translate(-40px,0px)">
  <use href="#trans_grid" />
</svg>
<svg width="300" height="300" style="transform:translate(40px,0px)">
  <use href="#deformed_grid" />
</svg>
</div>
</section>

# Landmark based registration

<section data-state="slide6">
- Geometrical transformation: <span>$\quad \mathbf{y}(\mathbf{x};\mathbf{w}) : \mathbb{R}^{2} \rightarrow \mathbb{R}^{2}$</span> or $\mathbb{R}^{3} \rightarrow \mathbb{R}^{3}$
- Similarity measure: <span id="similarity_measure">$\quad\mathcal{D}(\mathbf{w})$</span>
- Regularization: $\quad\mathcal{S}(\mathbf{w})$
- Optimization algorith: $\quad\mathcal{J}(\mathbf{w}) = \mathcal{D}(\mathbf{w}) + \alpha\mathcal{S}(\mathbf{w})$

<div style="height:200px;width:90%;border:3px solid gray;float:center;" id="point_set_box">
<p style="font-size:16pt;margin-top:50px;margin-bottom:.5"> <span style="font-size:16pt">Match two corresponding point sets defined in two images: $\quad \mathbf{x}_i, \mathbf{x}_i \in \mathbb{R}^{2}$ or $\mathbb{R}^{3}$ </span> <br><br> <span style="font-size:16pt;margin-top:20px;">$\mathcal{D}(\mathbf{w}) = \sum_{i=1}^{N} \| \mathbf{y}(\mathbf{x}_{i}; \mathbf{w}) - \mathbf{y}_{i} \|^{2}$</span> </p>
</div>
</section>

# Rigid landmark based registration
<section data-state="slide7">
<div class="r-vstack">
<div class="r-hstack">
  <figure style="transform:translate(-50px,0)">
  <img src="./media/rigid_landmark_input.png" height="250" style="display:block; margin-bottom:0px;">
  <figcaption> <span style="margin-top:0;margin-bottom:1pt;font-size:12pt; line-height:0%;opacity:0;"> dummy  </span></figcaption>
  </figure>
  <figure style="transform:translate(50px,0)">
  <img src="./media/rigid_landmark_before.png" height="250" style="display:block; margin-bottom:0px;">
  <figcaption><span style="margin-top:0;margin-bottom:1pt;font-size:12pt; line-height:0%"> Before </span></figcaption>
  </figure>
</div>
<div class="r-hstack">

  <figure style="transform:translate(-50px,0)">
  <img src="./media/rigid_landmark_input.png" height="250" style="opacity:0; margin-bottom:0px;">
  <figcaption> <span style="margin-top:0;margin-bottom:1pt;font-size:12pt; line-height:0%;opacity:0;"> dummy </span></figcaption>
  </figure>
  <figure style="transform:translate(50px,0)">
  <img src="./media/rigid_landmark_after.png" height="250" style="display:block; margin-top:0px;margin-bottom:0px">
  <figcaption><span style="margin-top:0;margin-bottom:1pt;font-size:12pt; line-height:0%"> After </span></figcaption>
  </figure>
</div>
</div>
</section>

# Landmark based registration
<section data-state="slide8">
- Geometrical transformation: <span>$\quad \mathbf{y}(\mathbf{x};\mathbf{w}) : \mathbb{R}^{2} \rightarrow \mathbb{R}^{2}$</span> or $\mathbb{R}^{3} \rightarrow \mathbb{R}^{3}$
- Similarity measure: <span id="similarity_measure_slide8">$\quad\mathcal{D}(\mathbf{w})$</span>
- Regularization: $\quad\mathcal{S}(\mathbf{w})$
- Optimization algorith: $\quad\mathcal{J}(\mathbf{w}) = \mathcal{D}(\mathbf{w}) + \alpha\mathcal{S}(\mathbf{w})$
<div class="r-hstack">
<img src="./media/emoji.png" height="150" style="display:block; margin-top:0px;margin-bottom:0px;transform:translate(-10%,30%)">
<div style="height:82px;width:40%;border:3px solid gray;float:center;transform:translate(10%,35%); padding:5px;" id="point_set_box_slide8">
<p style="font-size:16pt;margin:5px"> <span style="font-size:16pt"> <i>I'm too lazy to put landmarks. Can't we use images directly?</i> </span> </p>
</div>
</div>
</section>

# Intra-modality registration
<section data-state="slide9">
<div class="r-stack">
<div><img src="./media/intra-modality-registration1.png" class="r-stretch fragment fade-out" data-fragment-index="0"></div>
<div><img src="./media/intra-modality-registration2.png" class="r-stretch fragment fade-in" data-fragment-index="0"></div>
</div>
</section>

# Intra-modality registration

- Sum of squared differences (SSD)
<p>$\mathcal{D}_{\text{SSD}}(\mathbf{w}) = \frac{1}{2} \sum_{i\in\Omega}(\mathcal{T}(\mathbf{y}(\mathbf{x}_i;\mathbf{w})) - \mathcal{R}(\mathbf{x}_i))^2$</p>
<div class="r-stack">
<div class="r-hstack fragment fade-in-then-out" data-fragment-index="0">
<img height="200" src="./media/CTs1.png" style="transform:translate(-20%, 0%)">
<img height="200" src="./media/CT_overlap.png" style="transform:translate(20%, 0%)">
</div>
<div class="r-hstack fragment fade-in" data-fragment-index="1">
<img height="250" src="./media/CTs2.png" style="transform:translate(-20%, 0%)">
<img height="200" src="./media/CT_overlap2.png" style="transform:translate(20%, 0%)">
</div>
</div>

# Intra-modality registration
<div><img src="./media/ssd_curve.png" width="90%"></div>

# Miscalibration of intensities
<div class="r-stack">
<div><img src="./media/CT_line_trace1.png" class="r-stretch fragment fade-out" data-fragment-index="0"></div>
<div><img src="./media/CT_line_trace2.png" class="r-stretch fragment fade-in" data-fragment-index="0"></div>
</div>

# Miscalibration of intensities
<div class="r-stack">
<div>
<img src="./media/trace_and_bar.png" class="fragment fade-out" data-fragment-index="0" height="400px">
<p class="fragment fade-out" data-fragment-index="0" style="opacity:0"> dummy </p>
</div>
<div>
<img src="./media/trace_and_bar_substract_mean.png" class="fragment fade-in-then-out" data-fragment-index="0" height="400px">
<p class="fragment fade-in-then-out" data-fragment-index="0">Substract mean</p>
</div>
<div>
<img src="./media/trace_and_bar_divide_std.png" class="fragment fade-in" data-fragment-index="1" height="400px">
<p class="fragment fade-in" data-fragment-index="1">Divide by standard deviation</p>
</div>
</div>

# Miscalibration of intensities
<section data-state="slide14">
- One more thing:
<div id="constant" class="fragment fade-in" data-fragment-index="0" style="transform: translate(65%,-40%)"><span style="color:blue"> constant </span></div>
<p id="rminust">$\sum_i (r_i - t_i)^2 = \sum_i (r_i^2 - 2r_it_i + t_i^2) = \sum_i r_i^2 + \sum_i t_i^2 - 2\sum_ir_it_i$</p>

<div class="r-hstack">
<div class="r-stack">
<div><img src="./media/trace_and_bar_divide_std2.png" class="fragment fade-in-then-out" data-fragment-index="0" height="400px"></div>
<div><img src="./media/trace_and_bar_divide_std_t.png" class="fragment fade-in" data-fragment-index="1" height="400px"></div>
</div>
<div class="r-vstack fragment fade-in" data-fragment-index="0">
<p style="color:blue; transform:translate(0%,-150%)"> $r$ </p>
<p style="color:red; transform:translate(0%,150%)"> $t$ </p>
</div>
</div>
</section>

# Miscalibration of intensities
<section data-state="slide15">
- Correlation coefficient (CC)
<br>
<p>
$\mathcal{D}_{\text{CC}}(\mathbf{w}) = \frac{\sum_{i\in\Omega} (\mathcal{T}(\mathbf{y}(\mathbf{x}_{i};\mathbf{w})) - \bar{\mathcal{T}}) ( \mathcal{R}(\mathbf{x}_{i}) - \bar{\mathcal{R}} )}{\sqrt{\sum_{i\in\Omega} (\mathcal{T}(\mathbf{y}(\mathbf{x}_{i};\mathbf{w})) - \bar{\mathcal{T}})^{2} ( \mathcal{R}(\mathbf{x}_{i}) - \bar{\mathcal{R}})^2}}$
</p>
<p>
$\bar{\mathcal{T}} = \frac{1}{|\Omega|}\sum_{i\in\Omega} \mathcal{T}(\mathbf{y}(\mathbf{x}_{i};\mathbf{w}))$
</p>
<p>
$\bar{\mathcal{R}} = \frac{1}{|\Omega|}\sum_{i\in\Omega} \mathcal{R}(\mathbf{x}_{i})$
</p>
</section>

# Inter-modality registration
<div class="r-stack">
<div><img src="./media/inter_modality_reg1.png" class="r-stretch fragment fade-out" data-fragment-index="0"></div>
<div><img src="./media/inter_modality_reg2.png" class="r-stretch fragment fade-in-then-out" data-fragment-index="0"></div>
<div><img src="./media/inter_modality_reg3.png" class="r-stretch fragment fade-in-then-out" data-fragment-index="1"></div>
<div><img src="./media/inter_modality_reg4.png" class="r-stretch fragment fade-in" data-fragment-index="2"></div>
</div>

# Inter-modality registration
<section data-state="slide17">
- Idea: build a joint histogram
<div class="r-hstack" style="transform:translate(-20%,0%)">
<div style="transform:translate(100%,430%) rotate(35deg); width:200px"><span style="font-size:16pt">Intensity in $\mathcal{T}$</span></div>
<img src="./media/2d_hist.png" height="400px" id="hist2d">
<div style="transform:translate(-80%,440%) rotate(-22deg);width:200px"><span style="font-size:16pt">Intensity in $\mathcal{R}$</span></div>
<div class="r-vstack">
<div class="r-hstack" style="transform:translate(40%,0%)">
<img src="./media/2d_hist_t1.png" height="150px" id="T1">
<p>$\mathcal{T}$</p>
</div>
<div class="r-hstack" style="transform:translate(40%,0%)" id="T2">
<img src="./media/2d_hist_t2.png" height="150px">
<p>$\mathcal{R}$</p>
</div>
</div>
</div>
</section>

# Inter-modality registration
- Idea: build a joint histogram
<div class="r-hstack">
<div class="r-hstack">
<div class="r-vstack">
<div style="transform:translate(-100%,-75%);"><p style="color:blue;"> MRI </p></div>
<div style="transform:translate(-120%,60%);"><p style="color:red;"> CT</p></div>
</div>
<div class="r-stack">
<div><img src="./media/mri_ct_1d.png" width="350px" style="transform:translate(-10%,0%)" class="fragment fade-out" data-fragment-index="0"></div>
<div><img src="./media/mri_ct_1d_1.png" width="350px" style="transform:translate(-10%,0%)" class="fragment fade-in" data-fragment-index="0"></div>
</div>
</div>
<div class="r-hstack">
<div style="transform:translate(180%,400%); width:100px;z-index:200"><span style="font-size:18pt;color:blue">MRI</span></div>
<div class="r-stack">
<div><img src="./media/mri_ct_2d.png" width="400px" style="transform:translate(10%,0%)" class="fragment fade-out" data-fragment-index="0"></div>
<div><img src="./media/mri_ct_2d_1.png" width="400px" style="transform:translate(10%,0%)" class="fragment fade-in" data-fragment-index="0"></div>
</div>
<div style="transform:translate(-40%,480%); width:100px;z-index:200"><span style="font-size:18pt;color:red">CT</span></div>
</div>
</div>

# 
<div class="r-stack">
<div><img src="./media/mr_ct_big_hist_2d.png" width="75%" class="fragment fade-out" data-fragment-index="0"></div>
<div><img src="./media/mr_ct_big_hist_2d_1.png" width="75%" class="fragment fade-in" data-fragment-index="0"></div>
<div><img src="./media/mri_ct_side_to_side.png" width="350px" style="transform:translate(0%,-120%)" class="fragment fade-out" data-fragment-index="0"></div>
<div><img src="./media/mri_ct_side_to_side_1.png" width="350px" style="transform:translate(0%,-100%)" class="fragment fade-in" data-fragment-index="0"></div>
<div style="transform:translate(-60%,-100%) rotate(-21deg); width:200px;z-index:200"><span style="font-size:16pt;">CT intensities</span></div>
<div style="transform:translate(-100%,540%) rotate(35deg); width:200px;z-index:200"><span style="font-size:16pt;">MR intensities</span></div>
<div style="height:127px;width:32%;border:3px solid red;float:center;transform:translate(0%,-167%)" class="fragment fade-in" data-fragment-index="0"></div>
</div>

# 
<div class="r-stack">
<div><img src="./media/T2_hist2d.png" width="500px" class="fragment fade-out" data-fragment-index="0" style="transform:translate(0%,30%)"></div>
<div><img src="./media/T2_hist2d_1.png" width="500px" class="fragment fade-in" data-fragment-index="0" style="transform:translate(0%,30%)"></div>
<div class="r-hstack">
<div><img src="./media/2d_hist_t2.png" width="150px" style="transform:translate(0%,-120%)"></div>
<div class="r-stack">
<div><img src="./media/2d_hist_t2.png" width="150px" style="transform:translate(0%,-120%)" class="fragment fade-out" data-fragment-index="0"></div>
<div><img src="./media/2d_hist_t2.png" width="150px" style="transform:translate(0%,-90%)" class="fragment fade-in" data-fragment-index="0"></div>
</div>
</div>
<div style="height:115px;width:32%;border:3px solid red;float:center;transform:translate(0%,-152%)" class="fragment fade-in" data-fragment-index="0"></div>
</div>

# Inter-modality registration: entropy
<section data-state="slide21">
<div class="r-hstack">
<img src="./media/entropy_bar_1.png" width="350px" id="entropy_bar_1">
<div class="r-vstack">
<img src="./media/entropy_bar_2.png" width="270px" id="entropy_bar_2" style="transform:translate(0%,10%)">
<img src="./media/entropy_curve.png" width="400px" id="entropy_curve">
</div>
<img src="./media/entropy_bar_3.png" width="350px" id="entropy_bar_3" style="margin-bottom:0px; margin-top:0px">
</div>
<div style="transform:translate(0%,-50%)">
- Also works for more than two outcomes
</div>
</section>

# Inter-modality registration
- Joint entropy
<br>
<p>$\mathcal{D}_{\text{JE}}(\mathbf{w}) = H(\mathcal{T}(\mathbf{y}(\mathbf{x}_i;\mathbf{w})),\mathcal{R}(\mathbf{x}_i))$</p>
<br>
<p>$H(\mathcal{T}(\mathbf{y}(\mathbf{x}_i;\mathbf{w})),\mathcal{R}(\mathbf{x}_i)) = -\sum_{j,k}\text{PDF}(j,k)\log(\text{PDF}(j,k))$</p>
<br>
<p>$\text{PDF}(j,k) = \frac{\text{HIST}(j,k)}{\sum_{j,k}\text{HIST}(j,k)}$</p>
<br>

# Inter-modality registration
- Wait a minute...

<div class="r-stack">
<div><img src="./media/t1_wait_a_minute.png" width="300px" style="transform:translate(-60%,0%)"></div>
<div><img src="./media/ct_wait_a_minute.png" width="300px" style="transform:translate(50%,25%) rotate(30deg)"></div>
<div style="height:50px;width:50px;border:3px solid red;float:center;transform:translate(-70%,240%)"></div>
</div>

# Inter-modality registration
- Mutual information
<br>
<p>$\mathcal{D}_{\text{MI}} = H(\mathcal{T}(\mathbf{y}(\mathbf{x}_i;\mathbf{w})),\mathcal{R}(\mathbf{x}_i)) - H(\mathcal{T}(\mathbf{y}(\mathbf{x}_i;\mathbf{w}))) -H(\mathcal{R}(\mathbf{x}_i))$</p>
<div class="r-hstack">
<img src="./media/mi_2d_hist.png" width="350px" style="transform:translate(-30%,0%)">
<img src="./media/mi_1d_hist_1.png" width="250px" style="transform:translate(0%,-20%)">
<img src="./media/mi_1d_hist_2.png" width="250px" style="transform:translate(30%,-20%)">
</div>

# Inter-modality registration
<div class="r-stack">
<div><img src="./media/inter_modality_registration_curve.png" height="90%" class="fragment fade-out" data-fragment-index="0"></div>
<div><img src="./media/inter_modality_registration_curve_1.png" height="90%" class="fragment fade-in" data-fragment-index="0"></div>
</div>

# Initialization?
<div class="r-vstack">
<img src="./media/initialization.png" height="300px">
<div class="r-hstack fragment fade-in" data-fragment-index="0">
<div class="r-vstack" style="transform:translate(-20%,0%)">
<span style="font-size:16pt">$\boldsymbol{\mu}_{\mathcal{R}} = \frac{\sum_{\Omega_{\mathcal{R}}}\mathcal{R}(\mathbf{x}_i)\mathbf{x}_i}{\sum_{\Omega_{\mathcal{R}}}\mathcal{R}(\mathbf{x}_i)}$</span>
<p></p>
<span style="font-size:16pt">$\boldsymbol{\Sigma}_{\mathcal{R}} = \frac{\sum_{\Omega_{\mathcal{R}}}\mathcal{R}(\mathbf{x}_i)(\mathbf{x}_i - \boldsymbol{\mu}_{\mathcal{R}})(\mathbf{x}_i - \boldsymbol{\mu}_{\mathcal{R}})^T}{\sum_{\Omega_{\mathcal{R}}}\mathcal{R}(\mathbf{x}_i)}$</span>
</div>
<div class="r-vstack" style="transform:translate(20%,0%)">
<span style="font-size:16pt">$\boldsymbol{\mu}_{\mathcal{T}} = \frac{\sum_{\Omega_{\mathcal{T}}}\mathcal{T}(\mathbf{y}_i)\mathbf{y}_i}{\sum_{\Omega_{\mathcal{T}}}\mathcal{T}(\mathbf{y}_i)}$</span>
<p></p>
<span style="font-size:16pt">$\boldsymbol{\Sigma}_{\mathcal{T}} = \frac{\sum_{\Omega_{\mathcal{T}}}\mathcal{T}(\mathbf{y}_i)(\mathbf{y}_i - \boldsymbol{\mu}_{\mathcal{T}})(\mathbf{y}_i - \boldsymbol{\mu}_{\mathcal{T}})^T}{\sum_{\Omega_{\mathcal{T}}}\mathcal{T}(\mathbf{y}_i)}$</span>
</div>
</div>
</div>
