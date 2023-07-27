---
title: Neural Networks
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
<img id="img0" width="300" src="./media/course-structure-0.png">
<p style="width:100; height:20px;font-size:18px"> "Fitting functions"</p>
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

# Remeber regression?
<section data-state="slide2">
- <span style="font-size:0.6em; line-height:0%"> $f(x) = \sum_{m=1}^M \beta_{m}\phi_{m}(\mathbf{x})$ </span>
- Training set <span style="font-size:0.6em; line-height:0%"> $\{\mathbf{x}_{i}, y_{i}\}_{i=1}^{N}$ </span>
  - Input vector: <span style="font-size:0.6em; line-height:0%"> $\mathbf{x}_{i} = (x_{i1}, x_{i2}, \dots, x_{ip})^{T}$ </span>
  - Corresponding ouput: $y_{i}$
- Estimate parameters $\boldsymbol{\theta} = (\beta_{1}, \dots, \beta_{M})^{T}$ <br><br> by minimizing the cost $\sum_{i=1}^N (y_{i} - f(\mathbf{x}_{i}))^2$
</section>

# Remember regression?
<section data-state="slide3">
<div class="r-vstack">
<p> Example: p=1 and M=5 cosines </p>
<div class="r-hstack">
<div class="r-vstack">
<span style="margin:auto; display:table;font-size:0.6em; line-height:0%"> $\phi_m(\mathbf{x})$ </span>
<img height="300" src="./media/remember-regressionexample-p1-and-m5-cosines-2.png">
<span style="margin:auto; display:table;font-size:0.6em; line-height:0%">$\mathbf{x}$ </span>
</div>
<div style="width: 200px; height: 20px; border: 0px solid black;"></div>
<div class="r-vstack">
<span style="margin:auto; display:table;font-size:0.6em; line-height:0%"> $f(\mathbf{x}) = \sum_{m=1}^{M} \beta_{m}\phi_{m}(\mathbf{x})$ </span>
<img height="300" src="./media/remember-regressionexample-p1-and-m5-cosines-1.png">
<span style="margin:auto; display:table;font-size:0.6em;line-height:0%"> $\mathbf{x}$ </span>
</div>
</div>
</div>
</section>

# Remeber Gaussian mixture model?
<section data-state="slide4">
<div class="r-vstack">
<div class="r-hstack">
<img height="170" src="./media/remember-gaussian-mixture-modelposterior-using-bayes-rule-3.png">
<div style="width: 50px; height: 20px; border: 0px solid black;"></div>
<img height="170" src="./media/remember-gaussian-mixture-modelposterior-using-bayes-rule-2.png">
<div style="width: 50px; height: 20px; border: 0px solid black;"></div>
<img height="170" src="./media/remember-gaussian-mixture-modelposterior-using-bayes-rule-1.png">
</div>
<div class="r-hstack">
<div class="fragment" data-fragment-index="1" style="height:170px;width:220px;border:3px solid #0000FF;" id="blue_box">
<p style="color:#0000FF;font-size:14pt;margin-top:0;margin-bottom:.5"> This lecture: can we get a "classifier": </p>
<p><span style="margin:auto; display:table;font-size:0.6em; line-height:0%"> $p(l|d,\boldsymbol{\theta})$ </span></p>
<p style="color:#0000FF;font-size:14pt;margin-top:0;margin-bottom:.5">directly <u><b> without a model?</b></u>  </p>
</div>
<div style="width: 50px; height: 20px; border: 0px solid black;"></div>
<img height="200" src="./media/remember-gaussian-mixture-modelposterior-using-bayes-rule-0.png" id="img_gmm">
<div style="width: 50px; height: 20px; border: 0px solid black;"></div>
<div class="fragment" data-fragment-index="0" style="height:170px;width:220px;border:3px solid #00FF00;" id="green_box">
<p style="color:#00FF00;font-size:14pt;margin-top:0;margin-bottom:10pt"> New notation/terminology: </p>
<p style="color:#00FF00;font-size:14pt;margin-top:0;margin-bottom:1pt">"Training samples" </p>
<p style="font-size:14pt;margin-top:0;margin-bottom:1pt"> <span style="color:#0000FF"> "y=1" </span>  <span style="color:#00FF00;">    if l=1 </span></p>
<p style="font-size:14pt;margin-top:0;margin-bottom:1pt"> <span style="color:#FF0000;"> "y=0" </span>  <span style="color:#00FF00;">    if l=2 </span> </p>
</div>
</div>
<p style="font-size:18pt"> Posterior using Bayes' rule: $p(l=k|d,\boldsymbol{\theta}) = \frac{\mathcal{N}(d||\mu_{k}, \sigma_{k}^{2})\pi_{k}}{\sum_{k^{\prime}}\mathcal{N}(d|\mu_{k^{\prime}}, \sigma_{k^{\prime}}^{2})\pi_{k^{\prime}}}$ </p>
</div>
</section>

# Logistic regression
<section data-state="slide5">
<div class="r-vstack">
<p>Logistic function as a "squashing" function</p>
<img width="400" src="./media/logistic-regressionlogistic-function-as-a-squashing-function-1.png">
<p><span style="margin:auto; display:table;font-size:1em; line-height:0%"> $\sigma(a) = \frac{1}{1+\exp(-a)}$ </span></p>
</div>
</section>

# Logistic regression
<section data-state="slide6">
<div class="r-vstack">
<div class="r-hstack">
<div class="r-vstack">
<img width="200" src="./media/logistic-regressionwhereof-course-3.png" id="slide6_img1">
<p style="font-size:12pt;margin-top:0;margin-bottom:0"> $a=\sum_{m=1}^{M}\beta_m\phi_m(\mathbf{x})$ </p>
</div>
<div style="width: 50px; height: 20px; border: 0px solid black;"></div>
<div class="r-vstack">
<div style="width: 50px; height: 50px; border: 0px solid black;"></div>
<img width="200" src="./media/logistic-regressionlogistic-function-as-a-squashing-function-1.png" id="slide6_img2">
<p><span style="font-size:12pt;margin-top:0;margin-bottom:0;"> $\sigma(a) = \frac{1}{1+\exp(-a)}$ </span></p>
</div>
<div style="width: 50px; height: 10px; border: 0px solid black;"></div>
<img width="200" src="./media/logistic-regressionwhereof-course-4.png" id="slide6_img3">
</div>
<div style="width: 50px; height: 50px; border: 0px solid black;"></div>
- <span style="margin-top:0;margin-bottom:1pt;font-size:12pt; line-height:0%"> $p(y=1|\mathbf{x}, \boldsymbol{\theta})$  where  $f(\mathbf{x}) = \sigma\left(\sum_{m=1}^{M}\beta_{m}\phi_{m}(\mathbf{x})\right)$ </span>
- <span style="margin-top:0;margin-bottom:0; display:table;font-size:12pt; line-height:0%"> Of course:  $p(y=0|\mathbf{x}, \boldsymbol{\theta}) = 1 - p(y=1|\mathbf{x}, \boldsymbol{\theta}) = 1 - f(\mathbf{x})$ </span>
</div>
</section>


# Voxel-based classifier
<section data-state="slide7">
<div class="r-hstack">
<div class="column" width="80%">
- <span style="margin-top:0;margin-bottom:1pt;font-size:12pt; line-height:0%"> Training data $\{\mathbf{x}_{i}, y_{i}\}_{i=1}^{N}$ with $\mathbf{x}_i = d_i$ (i.e., $p=1$) and $y_i\in{0,1}$ </span> 
- <span style="margin-top:0;margin-bottom:1pt;font-size:12pt; line-height:0%"> Estimate paremeters $\boldsymbol{\theta} = (\beta_{1},\dots,\beta_{M})^T$ by maximizing the likelihood function $\prod_{i}^N p(y_i|\mathbf{x}_i, \boldsymbol{\theta})$ </span> 
</div>
<img width="200" src="./media/voxel-based-classifier-0.png">
</div>
<div class="r-hstack">
<img height="300" src="./media/voxel-based-classifier-1.png">
<div style="width: 70px; height: 50px; border: 0px solid black;"></div>
<div class="r-stack">
  <div><img src="./media/scenario1_training_iteration0001_activation.png" height="300" class="fragment fade-in-then-out" data-fragment-index="0"></div>
  <div><img src="./media/scenario1_training_iteration0101_activation.png" height="300" class="fragment fade-in-then-out" data-fragment-index="1"></div>
  <div><img src="./media/scenario1_training_iteration4901_activation.png" height="300" class="fragment fade-in" data-fragment-index="2"></div>
</div>
<div style="width: 70px; height: 50px; border: 0px solid black;"></div>
<div class="r-stack">
  <div> <img class="fragment fade-out" data-fragment-index="0" src="./media/scenario1_training_initialization_scatter.png" height="300"> </div>
  <div> <img class="fragment fade-in-then-out" data-fragment-index="0" src="./media/scenario1_training_iteration0001_posterior.png" height="300"> </div>
  <div> <img class="fragment fade-in-then-out" data-fragment-index="1" src="./media/scenario1_training_iteration0101_posterior.png" height="300"> </div>
  <div> <img class="fragment fade-in" data-fragment-index="2" src="./media/scenario1_training_iteration4901_posterior.png" height="300"> </div>
</div>
</div>
</section>

# Voxel-based classifier
<section data-state="slide8">
<div class="r-hstack">
<div class="column" width="80%">
- <span style="margin-top:0;margin-bottom:1pt;font-size:12pt; line-height:0%"> Once trained keep the classifier:  $p(l=1 | d, \boldsymbol{\hat{\theta}})$ </span> 
- <span style="margin-top:0;margin-bottom:1pt;font-size:12pt; line-height:0%"> Simply apply it to new data </span> 
</div>
<img width="200" src="./media/scenario1_training_iteration4901_posterior.png">
</div>
<div class="r-hstack">
  <figure>
  <img src="./media/voxel-based-classifieronce-trained-keep-the-classifier-simply-apply-it-to-new-data-2.png" height="300" style="display:block; margin:0;">
  <figcaption> <span style="margin-top:0;margin-bottom:1pt;font-size:12pt; line-height:0%"> $\hspace{2mm}$ </span></figcaption>
  </figure>
  <figure>
  <img src="./media/voxel-based-classifieronce-trained-keep-the-classifier-simply-apply-it-to-new-data-3.png" height="300" style="display:block; margin:0;">
  <figcaption><span style="margin-top:0;margin-bottom:1pt;font-size:12pt; line-height:0%"> $p(l | d, \boldsymbol{\hat{\theta}})$ </span></figcaption>
  </figure>
  <figure>
  <img src="./media/voxel-based-classifieronce-trained-keep-the-classifier-simply-apply-it-to-new-data-1.png" height="300" style="display:block; margin:0;">
  <figcaption><span style="margin-top:0;margin-bottom:1pt;font-size:12pt; line-height:0%">$p(l | d, \boldsymbol{\hat{\theta}}) > 0.5$</span></figcaption>
  </figure>
</div>
</section>

# Optimization algorithm for training
<section data-state="slide9">
- <span style="margin-top:0;margin-bottom:1pt;font-size:14pt; line-height:0%"> Maximizing the likelihood function $\prod_{i=1}^{N}p(y_{i}|\mathbf{x}_{i},\boldsymbol{\theta})$ is equivalent to minimizing </span> <br>
<span style="margin-top:0;margin-bottom:1pt;font-size:14pt; line-height:0%"> $$\begin{align} E_N(\boldsymbol{\theta}) &= -\log \prod_{i=1}^{N} p(y_i | \mathbf{x}_i, \boldsymbol{\theta})\\ &=- \sum_{i=1}^{N}\{y_i\log f(\mathbf{x}_i) + (1-y_i)\log[1-f(\mathbf{x}_i)]\}\end{align}$$ </span>

<div style="height:22px;width:220px;border:3px solid #0000FF;float:right;" id="gradient_step_box">
<p style="color:#0000FF;font-size:14pt;margin-top:0;margin-bottom:.5"> step size (user-specified) </p>
</div>

- <span style="margin-top:0;margin-bottom:1pt;font-size:14pt; line-height:0%" id="gradient_descent_formula"> <font color="blue"> Gradient descent:  </font> $\boldsymbol{\theta}^{(\tau+1)} = \boldsymbol{\theta}^{(\tau)} - \nu\nabla E_N(\boldsymbol{\theta}^{(\tau)})$  with gradient  $\nabla E_N(\boldsymbol{\theta}) = \frac{\partial E_{N}}{\partial \boldsymbol{\theta}}$ </span> 

- <span style="margin-top:0;margin-bottom:1pt;font-size:14pt; line-height:0%"> <font color="blue"> Stochastic gradient descent:  </font> use only  $N^{\prime} \ll N$ randomly sampled training points, and approximate: </span> <br>
<div class="column" style="text-align:center"> <span style="margin-top:0;margin-bottom:1pt;font-size:14pt; line-height:0%"> $\nabla E_{N}(\boldsymbol{\theta}) \simeq \frac{N}{N^{\prime}}\nabla E_{N^{\prime}}(\boldsymbol{\theta})$ </span> </div>
</section>

# More fun: patch-based classifier
<div class="r-hstack">
<div class="column" width="80%">
- Classify 3x3 image "patches": intensity of the pixel to be classified + intensities of 8 neigboring pixels
- $\mathbf{x}$ is now a 9-dimensional vector ($p=9$), but otherwise everything is the same: <br><br>
<div class="column" style="text-align:center">  $p(y=1|\mathbf{x}, \boldsymbol{\hat{\theta}}) = \sigma (\sum_{m=1}^{M} \hat{\beta}_{m}\phi_{m}(\mathbf{x}))$ </div><br>
- But how to choose basis functions $\phi_{m}(\mathbf{x})$ in a 9-dimensional space?
</div>
<img src="./media/patch_based_classifier_figure.png" height="300" style="display:block; margin:0;">
</div>

# Basis functions in high dimensions
<section data-state="slide10">
<div class="r-hstack">
<div class="column" width="50%">
- Idea: remember the tensor B-spline trick?

<div style="height:200px;width:400px;border:0px;float:center;text-align:left;">
<p style="font-size:18pt;margin-top:70px;margin-bottom:50px;margin-left:50px;"> Example: take outer products of four 1D basis functions to "make" sixteen 2D basis functions </p>
</div>
<div style="float:left;" id="9d_bullet">
- Does this work in 9D?
</div>
</div>
<div class="r-vstack">
<figure>
<img src="./media/slide-16-image-0.png" height="450" style="display:block; margin:0;">
  <figcaption style="height:25px;width:200px;border:2px solid gray;float:center;text-align:center;margin-left:30%;margin-bottom:20px;"> 
  <p style="font-size:14pt;margin-top:0pt;margin-bottom:0pt;"> 2-D: "tensor B-spline"</p>
  </figcaption>
</figure>
<div style="height:25px;width:350px;border:3px solid #0000FF;float:right;" id="9d_box" class="fragment fade-in" data-fragment-index="0">
<p style="color:#0000FF;font-size:14pt;margin-top:.5px;margin-bottom:.5px"> No! $4^9 = 2621444$ basis functions! </p>
</div>
</div>
</div>
</section>

# Adaptive basis functions
<section data-state="slide11">
- Introduce extra parameters that alter the <font color="blue"><em> form </em></font> of a limited set of basis functions
- <div id="parameter_formula"> Prototypical example: <br> <br>$\phi_{m}(\mathbf{x}) = \begin{cases} 1 & \text{if} \  m=1,\\ \sigma(\sum_{j=1}^{p} w_{m,j}x_{j} + w_{m,0}) & \text{otherwise} \end{cases}$</div> 
<br>
<div style="height:25px;width:160px;border:3px solid #0000FF;float:center;transform: translate(150%, 0%);" id="parameter_box" class="fragment fade-in" data-fragment-index="0">
<p style="color:#0000FF;font-size:14pt;margin-top:.5px;margin-bottom:.5px"> Extra parameters </p>
- All parameters ($\{w_{m,j}\}$ and $\{\beta_{m}\}$) optimized together during training (stochastic gradient descent)
</section>

# Adaptive basis functions (p=1)
<section data-state="slide12">
<div class="r-stack">
<div><img src="./media/adaptive-basis-functions-p1-0.png" height="500" style="display:block; margin:0;" class="fragment fade-out" data-fragment-index="0"></div>
<div><img src="./media/slide-21-image-0.png" height="500" style="display:block; margin:0;" class="fragment fade-in-then-out" data-fragment-index="0"></div>
<div><img src="./media/slide-22-image-0.png" height="500" style="display:block; margin:0;" class="fragment fade-in" data-fragment-index="1"></div>
</div>
</section>

# Adaptive basis functions (p=2)
<div class='r-stretch'>
<div><img src="./media/adaptive-basis-functions-p2-0.png"></div>
</div>

# Feed-forward neural network
<section data-state="slide13">
<div id="nn_model">
<p> So the model is $p(y=1|\mathbf{x}, \boldsymbol{\theta}) = \sigma(\sum_{m=1}^{M} \beta_{m}\phi_{m}(\mathbf{x}))$</p>
<div>
<br>
<div style="height:35px;width:200px;border:3px solid #0000FF;float:right;margin-right:300px" id="nn_parameters" class="fragment fade-in" data-fragment-index="0">
<p style="color:#0000FF;font-size:22pt;margin-top:.5px;margin-bottom:.5px"> parameters </p>
</div>
<div style="float:left;">
<p> with basis functions </p> 
</div>
<br>
<div id="nn_basis_functions">
<p> $\phi_{m}(\mathbf{x}) = \begin{cases} 1 & \text{if} \  m=1,\\ \sigma(\sum_{j=1}^{p} w_{m,j}x_{j} + w_{m,0}) & \text{otherwise} \end{cases}$ </p> 
</div>
</section>

# Feed-forward neural network
<section data-state="slide14">
<div class="r-vstack">
<div><span style="margin-top:0;margin-bottom:1pt;font-size:14pt; line-height:0%"> Graphical representation of our 3x3 patch-based classifier ($p=9$ and $M=4$):</span></div>
<div style="width: 10px; height: 30px; border: 0px solid black;"></div>
<div class="r-stack">
<div><img src="./media/slide-25-image-0.png" height="400" style="display:block; margin:0;"></div>
<div style="height:400px;width:35px;border:3px solid yellow;position:absolute;top=20%;left:56%;"></div>
<div style="height:30px;width:150px;border:0px solid yellow;position:absolute;top=20%;left:61%;background-color:yellow;"><p style="font-size:16pt;margin-top:0pt">"hidden units"</p></div>
</div>
<div style="width: 10px; height: 30px; border: 0px solid black;"></div>
<div class="r-hstack">
<div style="width: 10px; height: 10px; border: 0px solid black;"></div>
<div style="width: 320px; height: 30px; border: 0px solid black;background-color:#add8e6;text-align:center;" id="flow_box1"> <p style="font-size:16pt;margin-top:0pt"> flow of information </p></div>
<div style="width: 100px; height: 10px; border: 0px solid black;" id="flow_box2"></div>
</div>
- <span style="margin-top:0;margin-bottom:0pt;font-size:14pt; line-height:0%">Can insert more than one "hidden" layer ("deep learning")</span>
</div>
</section>

# 
<section data-state="slide15">
<div class="r-vstack">
<div class="r-hstack">
<div style="height:150px;width:150px;border:0px solid #0000FF;transform:translate(0%,0%);">
<p style="font-size:14pt;margin-top:0;margin-bottom:.5"> Applying the trained classifier on new data:  </p> 
</div>
<div class="r-vstack">
<img src="./media/mr_and_classification.png" height="150" style="display:block; margin:0;">
<div style="float:right;transform: translate(70%, -20%);"><span style="margin-top:0;margin-bottom:0pt;font-size:14pt; line-height:0%">$p(y=1|\mathbf{x}, \boldsymbol{\hat{\theta}})$</span></div>
</div>
<div class="fragment" data-fragment-index="1" style="height:150px;width:220px;border:3px solid #0000FF;transform:translate(0%,-10%);">
<p style="color:#0000FF;font-size:14pt;margin-top:0;margin-bottom:.5"> Filtering operations can be implemented using convolutions </p> 
<p><span style="color:#0000FF;margin:auto; display:table;font-size:14pt;"> $\Rightarrow$ "convolutional neural network" </span></p>
</div>
</div>
<div class="fragment fade-in" data-fragment-index="0">
<div class="r-hstack">
<div class="r-vstack">
<div style="transform:translate(0%,-265%)"><span style="margin-top:0;margin-bottom:0pt;font-size:14pt; line-height:0%;">$\{w_{2,1}, \dots, w_{2,9}\}$</span></div>
<div style="transform:translate(0%,-20%)"><span style="margin-top:0;margin-bottom:0pt;font-size:14pt; line-height:0%;">$\{w_{3,1}, \dots, w_{3,9}\}$</span></div>
<div style="transform:translate(0%,230%)"><span style="margin-top:0;margin-bottom:0pt;font-size:14pt; line-height:0%;">$\{w_{4,1}, \dots, w_{4,9}\}$</span></div>
</div> 
<img src="./media/xx-3.png" height="400" style="display:block; margin:0;" id="filters">
<div class="r-vstack">
<div style="width: 300px; height: 30px; border: 0px solid black;background-color:#add8e6;text-align:center;transform:translate(0%,-380%)" id="phi_box1"> <p style="font-size:16pt;margin-top:0pt"> filter </p></div>
<div style="width: 300px; height: 30px; border: 0px solid black;background-color:#add8e6;text-align:center;transform:translate(0%,-7%)" id="phi_box2"> <p style="font-size:16pt;margin-top:0pt"> filter </p></div>
<div style="width: 300px; height: 30px; border: 0px solid black;background-color:#add8e6;text-align:center;transform:translate(0%,380%)" id="phi_box3"> <p style="font-size:16pt;margin-top:0pt"> filter </p></div>
</div>
<div style="width: 30px; height: 30px; border: 0px solid black;"></div>
<div class="r-vstack">
<div style="transform:translate(0%,-265%)" id="phi2"><span style="margin-top:0;margin-bottom:0pt;font-size:14pt; line-height:0%">$\phi_2(\mathbf{x})$</span></div>
<div style="transform:translate(0%,-20%)" id="phi3"><span style="margin-top:0;margin-bottom:0pt;font-size:14pt; line-height:0%">$\phi_3(\mathbf{x})$</span></div>
<div style="transform:translate(0%,230%)" id="phi4"><span style="margin-top:0;margin-bottom:0pt;font-size:14pt; line-height:0%">$\phi_4(\mathbf{x})$</span></div>
</div> 
<img src="./media/xx-2.png" height="460" style="display:block; margin:0;">
</div>
</div>
</div>
</section>

# Neural networks = the ultimate solution?

<div><p> <u><b> No model, only training data: </b></u></p></div>
<br>
<div class="r-hstack">
<div class="r-vstack">
<img src="./media/neural-networks-ultimate-solution-no-model-only-training-data-no-domain-expertise-needed-very-easy-to-train-and-deploy-super-fas.jpg" height="100" style="display:block; margin:0;transform:translate(-100%,-50%)">
<img src="./media/not_so_good_smiley.png" height="100" style="display:block; margin:0;transform:translate(-100%,50%)">
</div>
<div class="r-vstack">
<div style="width:500px">
- No domain expertise needed
- Very easy to train and deploy
- Super fast (GPUs)
<br>
<br>
- Training data often very hard to get in medical imaging!
- Scanning hardware/software/protocol changes routinely!
</div>
</div>
</div>
