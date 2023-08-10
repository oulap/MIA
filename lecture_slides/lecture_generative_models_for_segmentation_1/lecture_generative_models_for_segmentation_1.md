---
title: Generative models for segmentation part 1
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
\n<img height="160" src="./media/course-structure-1.png" id="img1" class="fragment semi-fade-out" data-fragment-index="0">
<p style="width:100; height:20px;font-size:18px" class="fragment semi-fade-out" data-fragment-index="0"> "Registration"</p>
</div>
<div style="width: 200px; height: 200px; border: 0px solid black;"></div>
<div class="r-vstack">
<img height="160" src="./media/course-structure-2.png" id="img2">
<p style="width:100; height:20px;font-size:18px"> "Segmentation"</p>
</div>
</div>
</div>
</section>

# Voxel-based segmentation
<section data-state="slide2">
<div class="r-vstack">
<div class="r-vstack" style="transform:translate(0%,10%)">
<div class="r-hstack">
<div><img src="./media/coronal_slice.png" id="coronal_img" style="height:120px"></div>
<div><img src="./media/sagittal_slice.png" id="sagittal_img" style="height:120px"></div>
</div>
<div class="r-hstack" style="transform:translate(0%,-15%)">
<div><img src="./media/axial_slice.png" id="axial_img" style="width:220px;transform:translate(-15%,0%)"></div>
<div><img src="./media/cube.png" id="cube_img" style="width:150px;height:150px;transform:translate(15%,0%)"></div>
</div>
</div>
<div style="transform:translate(0%,-10%)">
<p style="font-size:18pt">Determine to which anatomical structure each voxel in the image belongs:</p>
- <span style="font-size:18pt">Think "LEGO bricks"</span>
- <span style="font-size:18pt">Outer surfaces can easily be extracted if needed</span>
</div>
</div>
</section>

# Voxel-based segmentation
<section data-state="slide3">
<div class="r-hstack">
<div class="r-vstack" style="transform:translate(-20%,0%)">
<div class="r-hstack">
<div><img src="./media/coronal_slice.png" id="coronal_img" style="height:120px"></div>
<div><img src="./media/sagittal_slice.png" id="sagittal_img" style="height:120px"></div>
</div>
<div class="r-hstack" style="transform:translate(0%,-15%)">
<div><img src="./media/axial_slice.png" id="axial_img" style="width:220px;transform:translate(-10%,0%)"></div>
<div><img src="./media/cube.png" id="cube_img" style="width:150px;height:150px;transform:translate(15%,0%);opacity:0"></div>
</div>
</div>
<div class="r-vstack" style="transform:translate(-10%, 0%)">
<div style="width:200px; transform:translate(0%, 20%)"><span style="font-size:24pt"> Automated computational methods </span></div>
<div style="font-size:168pt;transform:translate(0%,-20%)">&#x21e8;</div>
</div>
<img src="./media/fs_surf.png" style="width:400px;transform:translate(20%,0%)">
</div>
</section>

# This week and next week
<div class="r-hstack">
<div class="r-vstack" style="transform:translate(-20%,0%)">
<div class="r-hstack">
<div><img src="./media/coronal_slice.png" id="coronal_img" style="height:120px"></div>
<div><img src="./media/sagittal_slice.png" id="sagittal_img" style="height:120px"></div>
</div>
<div class="r-hstack" style="transform:translate(0%,-15%)">
<div><img src="./media/axial_slice.png" id="axial_img" style="width:220px;transform:translate(-10%,0%)"></div>
<div><img src="./media/cube.png" id="cube_img" style="width:150px;height:150px;transform:translate(15%,0%);opacity:0"></div>
</div>
</div>
<div class="r-vstack" style="transform:translate(-10%, 0%)">
<div style="width:200px; transform:translate(0%, 20%)"><span style="font-size:24pt"> Automated computational methods </span></div>
<div style="font-size:168pt;transform:translate(0%,-20%)">&#x21e8;</div>
</div>
<div class="r-vstack">
<img src="./media/wm_surf.png" style="width:200px;transform:translate(20%,0%)">
<img src="./media/gm_surf.png" style="width:200px;transform:translate(20%,0%)">
</div>
</div>

# The problem to be solved
<div class="r-hstack">
<div class="r-vstack" style="transform:translate(-20%,0%)">
<img src="./media/mri_coronal.png" style="width:200px;transform:translate(0%,0%)">
<div style="width:200px;border:solid black 2px; transform:translate(0%, -40%)"><span>MRI image $\mathbf{d}$ </span></div>
<div style="width:200px" class="fragment fade-out" data-fragment-index="0">
<span style="font-size:18pt">$N$ voxels </span> <br>
<span style="font-size:18pt">$\mathbf{d} = (d_1,\dots,d_N)^T$ </span> 
<span style="font-size:18pt">$d_n:$ intensity in voxel $n$ </span>
</div>
</div>
<div class="r-vstack fragment fade-in" data-fragment-index="0">
<div style="font-size:168pt;transform:translate(0%,20%);color:blue;">&#x21e8;</div>
<img src="./media/emoji.png" style="width:150px;transform:translate(0%,-20%)">
</div>
<div class="r-vstack fragment fade-in" data-fragment-index="0" style="transform:translate(20%,0%)">
<img src="./media/label_image_coronal.png" style="width:200px;transform:translate(0%,0%)">
<div style="width:220px;border:solid black 2px; transform:translate(0%, -40%)"><span>Label image $\mathbf{l}$ </span></div>
<div style="width:200px">
<span style="font-size:18pt">$\mathbf{l} = (l_1,\dots,l_N)^T$ </span> 
<span style="font-size:18pt">$l_n \in \{1,\dots,K\}$ </span> 
<span style="font-size:18pt">$K:$ number of classes </span>
</div>
</div>
</div>

# One solution: generative modeling
- Formulate a statistical model of how a medical image is formed
<br>
<div class="r-hstack">
<div class="r-vstack" style="transform:translate(-20%,0%)">
<div style="width:200px;transform:translate(0%,120%)"><span>$p(\mathbf{l}|\boldsymbol{\theta}_l)$</span></div>
<div style="font-size:92pt;transform:translate(0%,0%);color:blue;width:200px">&#x21e8;</div>
<div style="font-size:24pt;transform:translate(0%,-50%);color:blue;width:200px">"labeling model"</div>
</div>
<div class="r-vstack" style="transform:translate(-30%,0%)">
<img src="./media/label_image_coronal.png" style="width:200px;transform:translate(0%,0%)">
<div style="width:200px;border:solid black 2px; transform:translate(0%, -40%);text-align:center;"><span>Label image $\mathbf{l}$ </span></div>
</div>
<div class="r-vstack">
<div style="width:200px;transform:translate(0%,120%)"><span>$p(\mathbf{d}|\mathbf{l}, \boldsymbol{\theta}_d)$</span></div>
<div style="font-size:92pt;transform:translate(0%,0%);color:blue;width:200px">&#x21e8;</div>
<div style="font-size:24pt;transform:translate(0%,-50%);color:blue;width:200px;">"imaging model"</div>
</div>
<div class="r-vstack">
<img src="./media/mri_coronal.png" style="width:200px;transform:translate(0%,0%)">
<div style="width:200px;border:solid black 2px; transform:translate(0%, -40%);text-align:center;"><span>MRI image $\mathbf{d}$ </span></div>
</div>
</div>
<br>
- The model depends on some parameters $\boldsymbol{\theta} = (\boldsymbol{\theta_{l}}^{T}, \boldsymbol{\theta_{d}}^{T})^T$
- Appropriate values $\boldsymbol{\hat{\theta}}$ are assumed to be known for now...

# Toy example
<div class="r-vstack">
<div class="r-hstack">
<div style="width:400px;float:left;align:left;transform:translate(-50%,0%)">
<p>$N=2$ voxels </p>
<p>$K=3$ classes </p>
</div>
<div class="r-stack">
<div style="width:200px;float:center;align:center" class="fragment fade-out" data-fragment-index="0">
<p>$\mathbf{l}=\begin{pmatrix}l_1 \\ l_2 \end{pmatrix}$</p>
</div>
<div style="width:200px;float:center;align:center" class="fragment fade-in" data-fragment-index="0">
<p>$\mathbf{d}=\begin{pmatrix}d_1 \\ d_2 \end{pmatrix}$</p>
</div>
</div>
</div>
<div class="r-stack">
<div class="r-hstack fragment fade-out" data-fragment-index="0">
<div class="r-vstack" style="transform:translate(-20%,0%)">
<div style="width:400px;float:center;align:center;transform:translate(0%,50%)">
<p>$p(\mathbf{l}) = p(l_1, l_2)$ </p>
</div>
<img src="./media/toy_label_probs.png" style="height:300px;transform:translate(0%,0%)">
</div>
<div class="r-vstack" style="transform:translate(20%,0%)">
<div style="width:400px;float:center;align:center;transform:translate(0%,50%)">
<p>$p(\mathbf{l}) = p(l_1, l_2)$ </p>
</div>
<img src="./media/toy_label_probs2.png" style="height:300px;transform:translate(0%,10%)">
</div>
</div>
<div class="r-hstack fragment fade-in" data-fragment-index="0">
<div class="r-vstack" style="transform:translate(-20%,0%)">
<div style="width:400px;float:center;align:center;transform:translate(0%,50%)">
<p>$p(\mathbf{d}|\mathbf{l}) = p(d_1, d_2 | l_1, l_2)$ </p>
</div>
<img src="./media/toy_label_intensity_probs.png" style="height:300px;transform:translate(0%,0%)">
</div>
<img src="./media/toy_labels.png" style="height:100px;transform:translate(0%,50%)">
</div>
</div>
</div>

# One solution: generative modeling
- Formulate a statistical model of how a medical image is formed
<br>
<div class="r-hstack">
<div class="r-vstack" style="transform:translate(-20%,0%)">
<div style="width:200px;transform:translate(0%,120%)"><span>$p(\mathbf{l}|\boldsymbol{\theta}_l)$</span></div>
<div style="font-size:92pt;transform:translate(0%,0%);color:blue;width:200px">&#x21e8;</div>
<div style="font-size:24pt;transform:translate(0%,-50%);color:blue;width:200px">"labeling model"</div>
</div>
<div class="r-vstack" style="transform:translate(-30%,0%)">
<img src="./media/label_image_coronal.png" style="width:200px;transform:translate(0%,0%)">
<div style="width:200px;border:solid black 2px; transform:translate(0%, -40%);text-align:center;"><span>Label image $\mathbf{l}$ </span></div>
</div>
<div class="r-vstack">
<div style="width:200px;transform:translate(0%,120%)"><span>$p(\mathbf{d}|\mathbf{l}, \boldsymbol{\theta}_d)$</span></div>
<div style="font-size:92pt;transform:translate(0%,0%);color:blue;width:200px">&#x21e8;</div>
<div style="font-size:24pt;transform:translate(0%,-50%);color:blue;width:200px;">"imaging model"</div>
</div>
<div class="r-vstack">
<img src="./media/mri_coronal.png" style="width:200px;transform:translate(0%,0%)">
<div style="width:200px;border:solid black 2px; transform:translate(0%, -40%);text-align:center;"><span>MRI image $\mathbf{d}$ </span></div>
</div>
</div>
<br>
- The model depends on some parameters $\boldsymbol{\theta} = (\boldsymbol{\theta_{l}}^{T}, \boldsymbol{\theta_{d}}^{T})^T$
- Appropriate values $\boldsymbol{\hat{\theta}}$ are assumed to be known for now...

# Segmentation = inverse problem
<div class="r-hstack" style="transform:translate(0%,-20%)">
<div class="r-vstack" style="transform:translate(-20%,0%)">
<img src="./media/mri_coronal.png" style="width:200px;transform:translate(0%,0%)">
<div style="width:200px;border:solid black 2px; transform:translate(0%, -40%)"><span>MRI image $\mathbf{d}$ </span></div>
</div>
<div class="r-vstack">
<div style="font-size:168pt;transform:translate(0%,20%);color:blue;">&#x21e8;</div>
<div class="r-stack">
<div><img src="./media/emoji.png" style="width:150px;transform:translate(0%,-20%)" class="fragment fade-out" data-fragment-index="0"></div>
<div><img src="./media/emoji_pointy.png" style="width:200px;transform:translate(0%,-10%)" class="fragment fade-in" data-fragment-index="0"></div>
</div>
</div>
<div class="r-vstack fragment fade-in" data-fragment-index="0" style="transform:translate(20%,0%)">
<img src="./media/label_image_coronal.png" style="width:200px;transform:translate(0%,25%)">
<div style="width:220px;border:solid black 2px; transform:translate(0%, 70%)"><span>Label image $\mathbf{l}$ </span></div>
<div style="width:200px;transform:translate(0%,20%)">
<span style="font-size:22pt">$\mathbf{\hat{l}} = \arg \max_{\mathbf{l}} p(\mathbf{l}|\mathbf{d}, \boldsymbol{\theta})$ </span> 
</div>
</div>
</div>
<div class="fragment fade-in" data-fragment-index="0" style="transform:translate(0%,-60%)">
<p>The posterior distribution $p(\mathbf{l}|\mathbf{d}, \boldsymbol{\hat{\theta}})$ is given by Bayes' rule: </p>
<div class="r-hstack">
<div class="r-stack">
<div><span class="fragment fade-out" data-fragment-index="1">$p(\mathbf{l}|\mathbf{d}, \boldsymbol{\hat{\theta}}) = \frac{p(\mathbf{d}|\mathbf{l}, \boldsymbol{\hat{\theta}_d}) p(\mathbf{l}|\boldsymbol{\hat{\theta}_l})}{p(\mathbf{d}|\boldsymbol{\hat{\theta}})}$</span></div>
<div><span class="fragment fade-in-then-out" data-fragment-index="1">$p(\mathbf{l}|\mathbf{d}, \boldsymbol{\hat{\theta}}) = \frac{p(\mathbf{d}|\mathbf{l}, \boldsymbol{\hat{\theta}_d}) \textcolor{blue}{p(\mathbf{l}|\boldsymbol{\hat{\theta}_l})}}{p(\mathbf{d}|\boldsymbol{\hat{\theta}})}$</span></div>
<div><span class="fragment fade-in-then-out" data-fragment-index="2">$p(\mathbf{l}|\mathbf{d}, \boldsymbol{\hat{\theta}}) = \frac{\textcolor{blue}{p(\mathbf{d}|\mathbf{l}, \boldsymbol{\hat{\theta}_d})} p(\mathbf{l}|\boldsymbol{\hat{\theta}_l})}{p(\mathbf{d}|\boldsymbol{\hat{\theta}})}$</span></div>
<div><span class="fragment fade-in" data-fragment-index="3">$p(\mathbf{l}|\mathbf{d}, \boldsymbol{\hat{\theta}}) = \frac{p(\mathbf{d}|\mathbf{l}, \boldsymbol{\hat{\theta}_d}) p(\mathbf{l}|\boldsymbol{\hat{\theta}_l})}{\textcolor{blue}{p(\mathbf{d}|\boldsymbol{\hat{\theta}})}}$</span></div>
</div>
<div class="r-stack">
<div class="fragment fade-in-then-out" data-fragment-index="1"><p style="color:blue;transform:translate(50%,0%)"> labeling model </p></div>
<div class="fragment fade-in-then-out" data-fragment-index="2"><p style="color:blue;transform:translate(50%,0%)"> imaging model </p></div>
<div class="fragment fade-in" data-fragment-index="3"><p style="color:blue;transform:translate(10%,0%)"> <span style="font-size:18pt">$p(\mathbf{d}|\boldsymbol{\hat{\theta}}) = \sum_{\mathbf{l}} p(\mathbf{d}|\mathbf{l}, \boldsymbol{\hat{\theta}_{d}})p(\mathbf{l}|\boldsymbol{\hat{\theta}_l})$ </span> (not needed) </p></div>
</div>
</div>
</div>

# Gaussian mixture model
<div class="r-hstack">
<div class="r-vstack" style="transform:translate(-20%,0%)">
<div style="width:200px;transform:translate(0%,120%)"><span>$p(\mathbf{l}|\boldsymbol{\theta}_l)$</span></div>
<div style="font-size:92pt;transform:translate(0%,0%);color:blue;width:200px">&#x21e8;</div>
<div style="font-size:24pt;transform:translate(0%,-50%);color:blue;width:200px">"labeling model"</div>
</div>
<div class="r-vstack" style="transform:translate(-30%,0%)">
<img src="./media/label_image_coronal.png" style="width:200px;transform:translate(0%,0%)">
<div style="width:220px;border:solid black 2px; transform:translate(0%, -40%);text-align:center;"><span>Label image $\mathbf{l}$ </span></div>
</div>
<div class="r-vstack" style="opacity:0.3">
<div style="width:200px;transform:translate(0%,120%)"><span>$p(\mathbf{d}|\mathbf{l}, \boldsymbol{\theta}_d)$</span></div>
<div style="font-size:92pt;transform:translate(0%,0%);color:blue;width:200px">&#x21e8;</div>
<div style="font-size:24pt;transform:translate(0%,-50%);color:blue;width:200px;">"imaging model"</div>
</div>
<div class="r-vstack" style="opacity:0.3">
<img src="./media/mri_coronal.png" style="width:200px;transform:translate(0%,0%)">
<div style="width:200px;border:solid black 2px; transform:translate(0%, -40%);text-align:center;"><span>MRI image $\mathbf{d}$ </span></div>
</div>
</div>
- Assign a label to each voxel independently
- Probability of assigning label $k$ is $\pi_k$
<p>
$p(\mathbf{l} | \boldsymbol{\theta}_l) = \prod_n \pi_{l_n}, \quad \boldsymbol{\theta}_l = (\pi_{1}, \dots, \pi_{K})^T$
</p>

# Toy example
<div class="r-vstack">
<div class="r-hstack">
<div style="width:400px;float:left;align:left;transform:translate(-50%,0%)">
<p>$N=2$ voxels </p>
<p>$K=3$ classes </p>
</div>
<div style="width:200px;float:center;align:center">
<p>$\mathbf{l}=\begin{pmatrix}l_1 \\ l_2 \end{pmatrix}$</p>
</div>
</div>
<div style="width:400px;float:center;align:center;transform:translate(0%,50%)">
<p>$p(\mathbf{l}) = p(l_1, l_2) = p(l_2 | {\color{red}\cancel{{\color{black}l_1}}})p(l_1)$ </p>
</div>
<div class="r-hstack" style="transform:translate(0%,20%)">
<img src="./media/label_probs_toy_example.png" style="height:250px;transform:translate(-20%,0%)">
<div style="width:50px;font-size:48pt;transform:translate(-50%,-30%)"> $=$ </div>
<img src="./media/label_probs_toy_example_column.png" style="height:200px;transform:translate(0%,-10%)">
<div style="width:50px;height:50px;font-size:48pt;transform:translate(0%,-80%)"> $\cdot$ </div>
<img src="./media/label_probs_toy_example_row.png" style="height:100px;transform:translate(0%,-70%)">
</div>
</div>

# Gaussian mixture model
<div class="r-hstack">
<div class="r-vstack" style="transform:translate(-20%,0%);opacity:0.3">
<div style="width:200px;transform:translate(0%,120%)"><span>$p(\mathbf{l}|\boldsymbol{\theta}_l)$</span></div>
<div style="font-size:92pt;transform:translate(0%,0%);color:blue;width:200px">&#x21e8;</div>
<div style="font-size:24pt;transform:translate(0%,-50%);color:blue;width:200px">"labeling model"</div>
</div>
<div class="r-vstack" style="transform:translate(-30%,0%);opacity:0.3">
<img src="./media/label_image_coronal.png" style="width:200px;transform:translate(0%,0%)">
<div style="width:220px;border:solid black 2px; transform:translate(0%, -40%);text-align:center;"><span>Label image $\mathbf{l}$ </span></div>
</div>
<div class="r-vstack">
<div style="width:200px;transform:translate(0%,120%)"><span>$p(\mathbf{d}|\mathbf{l}, \boldsymbol{\theta}_d)$</span></div>
<div style="font-size:92pt;transform:translate(0%,0%);color:blue;width:200px">&#x21e8;</div>
<div style="font-size:24pt;transform:translate(0%,-50%);color:blue;width:200px;">"imaging model"</div>
</div>
<div class="r-vstack">
<img src="./media/mri_coronal.png" style="width:200px;transform:translate(0%,0%)">
<div style="width:200px;border:solid black 2px; transform:translate(0%, -40%);text-align:center;"><span>MRI image $\mathbf{d}$ </span></div>
</div>
</div>
- Draw the intensity in each voxel with label $k$ from a Gaussian distribution with mean $\mu_{k}$ and variance $\sigma_{k}^{2}$
<p>
$p(\mathbf{d} | \mathbf{l}, \boldsymbol{\theta}_l) = \prod_n \mathcal{N}(d_{n}|\mu_{{l_{n}}}, \sigma_{l_{n}}^{2}), \quad \boldsymbol{\theta}_d = (\mu_{1}, \dots, \mu_{K},\sigma_{1}^{2}, \dots, \sigma_{K}^{2})^T$
</p>
<p style="text-align:center">
$\mathcal{N}(d|\mu,\sigma^2) = \frac{1}{\sqrt{2\pi\sigma^2}}\exp[-\frac{(d-\mu)^{2}}{2\sigma^{2}}]$
</p>

# Toy example
<div class="r-vstack">
<div class="r-hstack">
<div class="r-vstack">
<div style="width:400px;float:left;align:left;transform:translate(-50%,0%)">
<p>$N=2$ voxels </p>
<p>$K=3$ classes </p>
</div>
<img src="./media/toy_labels.png" style="width:150px;transform:translate(-130%,-30%)">
</div>
<div style="width:200px;float:center;align:center;transform:translate(0%,-50%)">
<p>$\mathbf{d}=\begin{pmatrix}d_1 \\ d_2 \end{pmatrix}$</p>
</div>
</div>
<div style="width:400px;float:center;align:center;transform:translate(-50%,-90%)">
<p>$p(\mathbf{d}|\mathbf{l}) = p(d_1, d_2 | l_1, l_2) = p(d_2 |{\color{red}\cancel{{\color{black}l_1}}}, l_2,  {\color{red}\cancel{{\color{black}d_1}}})p(d_1 | l_1, {\color{red}\cancel{{\color{black}l_2}}})$ </p>
</div>
<div class="r-hstack" style="transform:translate(0%,-30%)">
<img src="./media/toy_label_intensity_probs1.png" style="height:250px;transform:translate(-20%,0%)">
<div style="width:50px;font-size:48pt;transform:translate(-50%,-30%)"> $=$ </div>
<img src="./media/toy_label_intensity_probs1_column.png" style="height:250px;transform:translate(0%,-5%)">
<div style="width:50px;height:50px;font-size:48pt;transform:translate(0%,-80%)"> $\cdot$ </div>
<img src="./media/toy_label_intensity_probs1_row.png" style="height:50px;transform:translate(0%,-220%)">
</div>
</div>

# Gaussian mixture model
<div class="r-vstack">
<div class="r-hstack">
<img src="./media/mri_gmm.png" style="height:250px;transform:translate(-10%,0%)">
<div class="r_vstack">
<img src="./media/gmm_hist.png" style="width:500px;transform:translate(10%,-10%)">
<div style="text-align:center;transform:translate(10%,0%)">$K=3$ labels</div>
</div>
</div>
<div style="width:90%">
<br>
<p>
$p(\mathbf{d}|\boldsymbol{\theta}) = \prod_n(\sum_k\mathcal{N}(d_n|\mu_k,\sigma_k^2)\pi_k)$ 
</p>
<br>
<p>
$\boldsymbol{\theta} = (\mu_{1},\dots,\mu_{K},\sigma_{1}^{2},\dots,\sigma_{K}^{2},\pi_{k},\dots,\pi_{K})^T$
</p>
</div>
</div>

# Posterior probability distribution
<div class="r-vstack">
<div class="r-hstack">
<img src="./media/mri_gmm.png" style="height:200px;transform:translate(-10%,0%)">
<div style="width:70%;transform:translate(10%,0%);font-size:16pt">
<span style="font-size:16pt">
$\begin{align}
p(\mathbf{l}|\mathbf{d}, \boldsymbol{\hat{\theta}}) &= \frac{p(\mathbf{d}|\mathbf{l},\boldsymbol{\hat{\theta}_{d}}) p(\mathbf{l}|\boldsymbol{\hat{\theta}_{l}})}{p(\mathbf{d}|\boldsymbol{\hat{\theta}})}\\
&=\frac{\prod_n\mathcal{N}(d_n|\hat{\mu}_{l_{n}},\hat{\sigma}_{l_n})^2)\prod_n\hat{\pi}_{l_n}}{\prod_n\sum_k\mathcal{N}(d_n|\hat{\mu}_{k}, \hat{\sigma}_{k}^{2})\hat{\pi}_{k}}\\
&=\prod_n p(l_n|d_n,\boldsymbol{\hat{\theta}})
\end{align}$
</span>
</div>
</div>
<img src="./media/mri_gmm_probabilities.png" style="height:180px;transform:translate(0%,0%)">
<div style="font-size:18pt">
<p style="font-size:18pt">
$p(l_n|d_n,\boldsymbol{\hat{\theta}}) = \frac{\mathcal{N}(d_{n}|\hat{\mu}_{l_{n}}, \hat{\sigma}_{l_{n}}^{2})\hat{\pi}_{l_{n}}}{\sum_k\mathcal{N}(d_n|\hat{\mu}_{k}, \hat{\sigma}_{k}^{2})\hat{\pi}_{k}}$
</p>
</div>
</div>

# Maximum a posteriori segmentation 
<section data-state="slide4">
<div class="r-vstack">
<div style="width:90%">
<p>
$\mathbf{\hat{l}} = \arg\max_{\mathbf{l}}p(\mathbf{l}|\mathbf{d},\boldsymbol{\hat{\theta}}) = \arg\max_{l_1,\dots,l_I}p(l_n|d_n,\boldsymbol{\hat{\theta}})$
</p>
</div>
<div class="r-hstack">
<img src="./media/gmm_mri_seg.png" style="height:300px;transform:translate(0%,0%)" id="mri_seg">
<img src="./media/gmm_hist_seg.png" style="height:300px;transform:translate(0%,0%)">
</div>
<div class="r-hstack">
<div style="width:120px;height:50px;background-color:#4169E1;text-align:middle;float:left;transform:translate(-200%,-50%)" id="csf_box"> CSF </div>
<div style="width:250px;height:50px;background-color:red;text-align:middle;transform:translate(-120%,90%)" id="gm_box"> gray matter </div>
<div style="width:250px;height:50px;background-color:#98FB98;text-align:middle;transform:translate(-120%,-50%)" id="wm_box"> white matter </div>
</div>
</div>
</section>

# Problem solved? 
<div style="width:100%; text-align:center;float:center;align:center">
Two-component Gaussian mixture model: tumor vs. “other”
</div>
<div class="r-vstack">
<img src="./media/mr_scan_tumor_seg.png" style="height:400px;transform:translate(0%,0%)">
<div class="r-hstack">
<div style="width:120px;height:40px;line-height:70px;border:solid black 4px;transform:translate(-10%,-80%)">
<p style="font-size:18pt;line-height:0">MR scan</p>
</div>
<div style="width:400px;height:40px;border:solid black 4px;transform:translate(40%,-80%)">
<p style="font-size:18pt;line-height:0">Posterior probability for tumor</p>
</div>
</div>
</div>

# Gaussian mixture model
<div class="r-hstack">
<div class="r-vstack" style="transform:translate(-20%,0%)">
<div style="width:200px;transform:translate(0%,120%)"><span>$p(\mathbf{l}|\boldsymbol{\theta}_l)$</span></div>
<div style="font-size:92pt;transform:translate(0%,0%);color:blue;width:200px">&#x21e8;</div>
<div style="font-size:24pt;transform:translate(0%,-50%);color:blue;width:200px">"labeling model"</div>
</div>
<div class="r-vstack" style="transform:translate(-10%,0%)">
<div class="r-stack">
<div class="fragment fade-out" data-fragment-index="0"><img src="./media/label_image_coronal.png" style="width:200px;transform:translate(0%,0%)"></div>
<div class="fragment fade-in-then-out" data-fragment-index="0"><img src="./media/label_image_1.png" style="width:200px;transform:translate(0%,0%)"></div>
<div class="fragment fade-in-then-out" data-fragment-index="1"><img src="./media/label_image_2.png" style="width:200px;transform:translate(0%,0%)"></div>
<div class="fragment fade-in-then-out" data-fragment-index="2"><img src="./media/label_image_3.png" style="width:200px;transform:translate(0%,0%)"></div>
<div class="fragment fade-in" data-fragment-index="3"><img src="./media/label_image_4.png" style="width:200px;transform:translate(0%,0%)"></div>
</div>
<div style="width:210px;border:solid black 2px; transform:translate(0%, -40%);text-align:center;"><span>Label image $\mathbf{l}$ </span></div>
</div>
<div class="r-vstack">
<div style="width:200px;transform:translate(0%,120%)"><span>$p(\mathbf{d}|\mathbf{l}, \boldsymbol{\theta}_d)$</span></div>
<div style="font-size:92pt;transform:translate(0%,0%);color:blue;width:200px">&#x21e8;</div>
<div style="font-size:24pt;transform:translate(0%,-50%);color:blue;width:200px;">"imaging model"</div>
</div>
<div class="r-vstack">
<div class="r-stack">
<div class="fragment fade-out" data-fragment-index="0"><img src="./media/mri_coronal.png" style="width:200px;transform:translate(0%,0%)"></div>
<div class="fragment fade-in-then-out" data-fragment-index="0"><img src="./media/mri_image_1.png" style="width:200px;transform:translate(0%,0%)"></div>
<div class="fragment fade-in-then-out" data-fragment-index="1"><img src="./media/mri_image_2.png" style="width:200px;transform:translate(0%,0%)"></div>
<div class="fragment fade-in-then-out" data-fragment-index="2"><img src="./media/mri_image_3.png" style="width:200px;transform:translate(0%,0%)"></div>
<div class="fragment fade-in" data-fragment-index="3"><img src="./media/mri_image_4.png" style="width:200px;transform:translate(0%,0%)"></div>
</div>
<div style="width:200px;border:solid black 2px; transform:translate(0%, -40%);text-align:center;"><span>MRI image $\mathbf{d}$ </span></div>
</div>
</div>
<div class="r-stack">
<div class="r-hstack fragment fade-in-then-out" data-fragment-index="0">
<div>
<p><span style="font-size:20pt">$\mu_1=70, \mu_2=90$</span></p>
<p><span style="font-size:20pt">$\sigma_1=5, \sigma_2=5$</span></p>
<p><span style="font-size:20pt">$\pi_1=0.5, \pi_2=0.5$</span></p>
</div>
<div><img src="./media/random_hist1.png" style="height:250px;transform:translate(0%,0%)"></div>
</div>
<div class="r-hstack fragment fade-in-then-out" data-fragment-index="1">
<div>
<p><span style="font-size:20pt">$\mu_1=70, \mu_2=90$</span></p>
<p><span style="font-size:20pt">$\sigma_1=5, \sigma_2=5$</span></p>
<p><span style="font-size:20pt">$\pi_1=0.2, \pi_2=0.8$</span></p>
</div>
<div><img src="./media/random_hist2.png" style="height:250px;transform:translate(0%,0%)"></div>
</div>
<div class="r-hstack fragment fade-in-then-out" data-fragment-index="2">
<div>
<p><span style="font-size:20pt">$\mu_1=70, \mu_2=90$</span></p>
<p><span style="font-size:20pt">$\sigma_1=5, \sigma_2=5$</span></p>
<p><span style="font-size:20pt">$\pi_1=0.8, \pi_2=0.2$</span></p>
</div>
<div><img src="./media/random_hist3.png" style="height:250px;transform:translate(0%,0%)"></div>
</div>
<div class="r-hstack fragment fade-in" data-fragment-index="3">
<div>
<p><span style="font-size:20pt">$\mu_1=70, \mu_2=90$</span></p>
<p><span style="font-size:20pt">$\sigma_1=5, \sigma_2=5$</span></p>
</div>
<div><img src="./media/random_hist4.png" style="height:250px;transform:translate(0%,0%)"></div>
</div>
</div>

# Markov random field model
- Prior that prefers voxels with the same label to be spatially clustered
<div class="r-stack">
<div class="r-vstack fragment fade-out" data-fragment-index="0">
<div style="align:center;text-align:center">
<p>$p(\mathbf{l}|\boldsymbol{\theta_l}) = \frac{1}{Z(\boldsymbol{\theta_l})} \exp(-U(\mathbf{l}|\boldsymbol{\theta}_l))$</p>
<p>$U(\mathbf{l}|\boldsymbol{\theta}_l) = \beta\sum_{(i,j)}\delta(l_i\neq l_j)$</p>
</div>
<div style="color:blue;opacity:0" >sum over all neighboring voxels</div> 
</div>
<div class="r-vstack fragment fade-in-then-out" data-fragment-index="0">
<div style="align:center;text-align:center">
<p>$p(\mathbf{l}|\boldsymbol{\theta_l}) = \frac{1}{Z(\boldsymbol{\theta_l})} \exp(-U(\mathbf{l}|\boldsymbol{\theta}_l))$</p>
<p>$U(\mathbf{l}|\boldsymbol{\theta}_l) = \beta{\color{blue}\sum_{(i,j)}}\delta(l_i\neq l_j)$</p>
</div>
<div style="color:blue;" >sum over all neighboring voxels</div> 
</div>
<div class="r-vstack fragment fade-in-then-out" data-fragment-index="1">
<div style="align:center;text-align:center">
<p>$p(\mathbf{l}|\boldsymbol{\theta_l}) = \frac{1}{Z(\boldsymbol{\theta_l})} \exp(-U(\mathbf{l}|\boldsymbol{\theta}_l))$</p>
<p>$U(\mathbf{l}|\boldsymbol{\theta}_l) = \beta\sum_{(i,j)}{\color{blue}\delta(l_i\neq l_j)}$</p>
</div>
<div style="color:blue;" >zero if labels are the same, one otherwise</div> 
</div>
<div class="r-vstack fragment fade-in-then-out" data-fragment-index="2">
<div style="align:center;text-align:center">
<p>$p(\mathbf{l}|\boldsymbol{\theta_l}) = \frac{1}{Z(\boldsymbol{\theta_l})} \exp(-U(\mathbf{l}|\boldsymbol{\theta}_l))$</p>
<p>$U(\mathbf{l}|\boldsymbol{\theta}_l) = {\color{blue}\beta}\sum_{(i,j)}\delta(l_i\neq l_j)$</p>
</div>
<div style="color:blue;" >Parameter controlling strength of penalization</div> 
</div>
<div class="r-vstack fragment fade-in" data-fragment-index="3">
<div style="align:center;text-align:center">
<p>$p(\mathbf{l}|\boldsymbol{\theta_l}) = \frac{1}{Z(\boldsymbol{\theta_l})} \exp(-U(\mathbf{l}|\boldsymbol{\theta}_l))$</p>
<p>$U(\mathbf{l}|\boldsymbol{\theta}_l) = \beta\sum_{(i,j)}\delta(l_i\neq l_j)$</p>
</div>
<div style="color:blue;opacity:0" >Parameter controlling strength of penalization</div> 
</div>
</div>

<div class="r-stack">
<div class="r-vstack fragment fade-out" data-fragment-index="3">
- $Z(\boldsymbol{\theta_l}) = \sum_{\mathbf{l}}\exp(-U(\mathbf{l}|\boldsymbol{\theta_{l}}))$ is a normalizing constant
<div style="color:blue;opacity:0" >Not needed in practice</div> 
</div>
<div class="r-vstack fragment fade-in" data-fragment-index="3">
- ${\color{blue}Z(\boldsymbol{\theta_l}) = \sum_{\mathbf{l}}\exp(-U(\mathbf{l}|\boldsymbol{\theta_{l}}))}$ is a normalizing constant
<div style="color:blue;" >Not needed in practice</div> 
</div>
</div>

# Markov random field model
- Slightly more general 
<div style="align:center;text-align:center">
<p>$p(\mathbf{l}|\boldsymbol{\theta_l}) = \frac{1}{Z(\boldsymbol{\theta_l})} \exp(-U(\mathbf{l}|\boldsymbol{\theta}_l))$</p>
<p>$U(\mathbf{l}|\boldsymbol{\theta}_l) = \beta\sum_{(i,j)}\delta(l_i\neq l_j) {\color{blue}-\sum_i\log(\pi_{l_i})}$</p>
<br>
</div> 

- $\boldsymbol{\theta_l} = (\beta, \pi_{1},\dots,\pi_{K})^T$ are the model parameters
- Reduces to Gaussian mixture model prior $p(\mathbf{l}|\boldsymbol{\theta_{l}}) = \prod_{n}\pi_{{l_{n}}}$ for $\beta=0$!

# Toy example
<div class="r-vstack">
<div class="r-hstack">
<div style="width:400px;float:left;align:left;transform:translate(-50%,0%)">
<p>$N=2$ voxels </p>
<p>$K=3$ classes </p>
</div>
<div style="width:200px;float:center;align:center">
<p>$\mathbf{l}=\begin{pmatrix}l_1 \\ l_2 \end{pmatrix}$</p>
</div>
</div>
<div class="r-hstack">
<div style="width:350px;height:400px;border:solid blue 2px;padding:10px 10px 10px 10px;transform:translate(-20%,0%)">
<div class="r-vstack">
<div>$\beta = 0$</div>
<img src="./media/label_probs_beta0.png" style="width:400px;transform:translate(0%,0%)">
<div>$p(\mathbf{l}) = p(l_2 | {\color{red}\cancel{{\color{black}l_1}}})p(l_1)$</div>
</div>
</div>
<div style="width:350px;height:400px;border:solid blue 2px;padding:10px 10px 10px 10px;transform:translate(20%,0%)">
<div class="r-vstack">
<div>$\beta = 3.0$</div>
<img src="./media/label_probs_beta3.png" style="width:400px;transform:translate(0%,0%)">
<div>$p(\mathbf{l}) = p(l_1, l_2)$</div>
</div>
</div>
</div>
</div>

# Samples
<div class="r-hstack">
<img src="./media/mrf_sample_1.png" style="width:300px;transform:translate(0%,0%)">
<img src="./media/mrf_sample_2.png" style="width:300px;transform:translate(0%,0%)">
<img src="./media/mrf_sample_3.png" style="width:300px;transform:translate(0%,0%)">
</div>
<p>
Different values for model parameters $\boldsymbol{\theta_{l}} = (\beta,\pi_{1},\dots,\pi_{K})^{T}$
</p>

# Why exactly this model
- Long-range statistical dependencies between voxels
- Local computations (efficient!):
<div class="r-stack">
<div class="r-hstack fragment fade-out" data-fragment-index="0">
<div>
<p>
$\begin{align}
p(l_i|l_{\setminus i}) &= \frac{p(\mathbf{l})}{p(\mathbf{l}_{\setminus i})}\\
&= \frac{p(\mathbf{l})}{\sum_{l_i}p(\mathbf{l})}\\
&= \frac{\exp(-U(\mathbf{l}|\boldsymbol{\theta_l}))}{\sum_{l_i} \exp(-U(\mathbf{l}|\boldsymbol{\theta_l}))}\\
&= \frac{\pi_{l_i}\cdot\exp(-\beta\sum_{j\in\mathfrak{N}_i}\delta(l_i\neq l_j))}{\sum_{k}\pi_{k}\cdot\exp(-\beta\sum_{j\in\mathfrak{N}_i}\delta(l_i\neq k))}
\end{align}$
</p>
</div>
<div style="width:250px;color:blue;opacity:0;">All labels except the one of voxel $i$</div>
</div>
<div class="r-hstack fragment fade-in-then-out" data-fragment-index="0">
<div>
<p>
$\begin{align}
p(l_i|{\color{blue}l_{\setminus i}}) &= \frac{p(\mathbf{l})}{p(\mathbf{l}_{\setminus i})}\\
&= \frac{p(\mathbf{l})}{\sum_{l_i}p(\mathbf{l})}\\
&= \frac{\exp(-U(\mathbf{l}|\boldsymbol{\theta_l}))}{\sum_{l_i} \exp(-U(\mathbf{l}|\boldsymbol{\theta_l}))}\\
&= \frac{\pi_{l_i}\cdot\exp(-\beta\sum_{j\in\mathfrak{N}_i}\delta(l_i\neq l_j))}{\sum_{k}\pi_{k}\cdot\exp(-\beta\sum_{j\in\mathfrak{N}_i}\delta(l_i\neq k))}
\end{align}$
</p>
</div>
<div style="width:250px;color:blue;">All labels except the one of voxel $i$</div>
</div>
<div class="r-hstack fragment fade-in" data-fragment-index="1">
<div>
<p>
$\begin{align}
p(l_i|l_{\setminus i}) &= \frac{p(\mathbf{l})}{p(\mathbf{l}_{\setminus i})}\\
&= \frac{p(\mathbf{l})}{\sum_{l_i}p(\mathbf{l})}\\
&= \frac{\exp(-U(\mathbf{l}|\boldsymbol{\theta_l}))}{\sum_{l_i} \exp(-U(\mathbf{l}|\boldsymbol{\theta_l}))}\\
&= \frac{\pi_{l_i}\cdot\exp(-\beta\sum_{j\in{\color{blue}\mathfrak{N}_i}}\delta(l_i\neq l_j))}{\sum_{k}\pi_{k}\cdot\exp(-\beta\sum_{j\in{\color{blue}\mathfrak{N}_i}}\delta(l_i\neq k))}
\end{align}$
</p>
</div>
<div style="width:250px;color:blue;">Neighbors of voxel $i$</div>
</div>
</div>

# Mean field approximation
- In the Gaussian mixture model, the posterior was of the form
<div style="text-align:center">
$p(\mathbf{l}|\mathbf{d}, \boldsymbol{\hat{\theta}}) = \prod_n p(l_n|d_n, \boldsymbol{\hat{\theta}})$
</div>
- With the Markov random field model, the posterior no longer "factorizes" that way
- For a 2-label model in a standard $256\times 256 \times 128$ MR scan, there are over $10^{1000000}$  unique label images with each its own posterior probability!
- Solution: approximate: $p(\mathbf{l}|\mathbf{d}, \boldsymbol{\hat{\theta}})$

# Mean field approximation
- Approximate $p(\mathbf{l}|\mathbf{d}, \boldsymbol{\hat{\theta}})$ with something of the form
<div style="text-align:center">
$q(\mathbf{l}) = \prod_n q_n(l_n)$
</div>

- Find the voxel-wise distributions $q_n(k)$ that minimize the difference between $q(\mathbf{l})$ and $p(\mathbf{l}|\mathbf{d},\boldsymbol{\hat{\theta}})$

- Quantify the difference between the two distributions using the "Kullback-Leibler divergence"
<div style="text-align:center">
$KL(q(\mathbf{l})\parallel p(\mathbf{l}|\mathbf{d},\boldsymbol{\hat{\theta}})) = -\sum_{\mathbf{l}}q(\mathbf{l})\log\frac{p(\mathbf{l}|\mathbf{d},\boldsymbol{\hat{\theta}})}{q(\mathbf{l})}$
</div>

# Toy example
<div class="r-vstack">
<div class="r-hstack">
<div style="width:400px;float:left;align:left;transform:translate(-50%,0%)">
<p>$N=2$ voxels </p>
<p>$K=3$ classes </p>
</div>
<div style="width:200px;float:center;align:center">
<p>$\mathbf{l}=\begin{pmatrix}l_1 \\ l_2 \end{pmatrix}$</p>
</div>
</div>
<div style="width:400px;float:center;align:center;transform:translate(-20%,50%)">
<p>$p(\mathbf{l}|\mathbf{d}) = p(l_1, l_2|d_1, d_2) \simeq q(l_1)q(l_2)$ </p>
</div>
<div class="r-hstack" style="transform:translate(10%,20%)">
<img src="./media/prob_table_mean_field.png" style="height:250px;transform:translate(-20%,0%)">
<div style="width:50px;font-size:48pt;transform:translate(-50%,-30%)"> $\simeq$ </div>
<img src="./media/prob_unknown_column.png" style="height:200px;transform:translate(0%,-10%)">
<div style="width:50px;height:50px;font-size:48pt;transform:translate(0%,-80%)"> $\cdot$ </div>
<img src="./media/prob_unknown_row.png" style="height:100px;transform:translate(0%,-90%)">
<img src="./media/emoji.png" style="height:150px;transform:translate(-100%,50%)">
</div>
</div>

# Mean field approximation
- Solution for one voxel $i$:
<div style="text-align:center">
$q_{i}(l_{i}) = \frac{\mathcal{N}(d_{i}|\hat{\mu}_{l_{i}},\hat{\sigma}_{l_{i}}^{2})\gamma_{i}(l_{i})}{\sum_{k}\mathcal{N}(d_{i}|\hat{\mu}_{k},\hat{\sigma}_{k}^{2})\gamma_{i}(k)}$
</div>
<div class="r-stack">
<div class="r-vstack fragment fade-out" data-fragment-index="0">
<div style="text-align:center">
where $\gamma_{i}(k) = \frac{\hat{\pi}_{k} \cdot \exp(-\beta \sum_{j\in\mathfrak{N}_{i}}(1-q_{j}(k)))}{\sum_{k\prime} \hat{\pi}_{k\prime} \cdot \exp(-\beta \sum_{j\in\mathfrak{N}_{i}}(1-q_{j}(k\prime)))}$
</div>
<div style="color:blue;opacity:0"> Influenced by the result in neighboring voxels: spatial context! </div>
</div>
<div class="r-vstack fragment fade-in" data-fragment-index="0">
<div style="text-align:center">
where $\gamma_{i}(k) = \frac{\hat{\pi}_{k} \cdot {\color{blue}\exp(-\beta \sum_{j\in\mathfrak{N}_{i}}(1-q_{j}(k)))}}{\sum_{k\prime} \hat{\pi}_{k\prime} \cdot {\color{blue}\exp(-\beta \sum_{j\in\mathfrak{N}_{i}}(1-q_{j}(k\prime)))}}$
</div>
<div style="color:blue;"> Influenced by the result in neighboring voxels: <b>spatial context!</b> </div>
</div>
</div>
<p class="fragment fade-in" data-fragment-index="1"> <b>Need to iterate across all voxels</b></p>

# Example 
<div style="width:100%; text-align:center;float:center;align:center">
Two-component Gaussian mixture model: tumor vs. “other”
</div>
<div class="r-stack">
<div class="r-hstack fragment fade-out" data-fragment-index="0">
<div class="r-vstack">
<img src="./media/mr_scan_mean_field.png" style="height:400px;transform:translate(0%,0%)">
<div style="width:120px;height:40px;line-height:70px;border:solid black 4px;transform:translate(0%,-70%)">
<p style="font-size:18pt;line-height:0">MR scan</p>
</div>
</div>
<div class="r-vstack">
<img src="./media/tumor_mean_field_beta0.png" style="height:400px;transform:translate(0%,0%)">
<div style="width:400px;height:40px;border:solid black 4px;transform:translate(0%,-70%);padding:0 0 0 0;">
<p style="font-size:18pt;line-height:0;transform:translate(0%,-40%)">$q_{n}(k)$ for tumor class $\beta=0$</p>
</div>
</div>
</div>
<div class="r-hstack fragment fade-in-then-out" data-fragment-index="0">
<div class="r-vstack">
<img src="./media/mr_scan_mean_field.png" style="height:400px;transform:translate(0%,0%)">
<div style="width:120px;height:40px;line-height:70px;border:solid black 4px;transform:translate(0%,-70%)">
<p style="font-size:18pt;line-height:0">MR scan</p>
</div>
</div>
<div class="r-vstack">
<img src="./media/tumor_mean_field_beta25.png" style="height:400px;transform:translate(0%,0%)">
<div style="width:400px;height:40px;border:solid black 4px;transform:translate(0%,-70%);padding:0 0 0 0;">
<p style="font-size:18pt;line-height:0;transform:translate(0%,-40%)">$q_{n}(k)$ for tumor class $\beta=0.25$</p>
</div>
</div>
</div>
<div class="r-hstack fragment fade-in" data-fragment-index="1">
<div class="r-vstack">
<img src="./media/mr_scan_mean_field.png" style="height:400px;transform:translate(0%,0%)">
<div style="width:120px;height:40px;line-height:70px;border:solid black 4px;transform:translate(0%,-70%)">
<p style="font-size:18pt;line-height:0">MR scan</p>
</div>
</div>
<div class="r-vstack">
<img src="./media/tumor_mean_field_beta55.png" style="height:400px;transform:translate(0%,0%)">
<div style="width:400px;height:40px;border:solid black 4px;transform:translate(0%,-70%);padding:0 0 0 0;">
<p style="font-size:18pt;line-height:0;transform:translate(0%,-40%)">$q_{n}(k)$ for tumor class $\beta=0.55$</p>
</div>
</div>
</div>
</div>
