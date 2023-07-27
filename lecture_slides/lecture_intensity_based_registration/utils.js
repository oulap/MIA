<script>

var arrow1Slide1 = new LeaderLine(
  LeaderLine.pointAnchor(document.getElementById('img0'),{x: '0%', y: '50%'}),
  LeaderLine.pointAnchor(document.getElementById('img1'),{x: '50%', y: '0%'}),
  {color: 'black', path: 'straight', hide:'true'}
);
var arrow2Slide1 = new LeaderLine(
  LeaderLine.pointAnchor(document.getElementById('img0'), {x: '100%', y: '50%'}),
  LeaderLine.pointAnchor(document.getElementById('img2'), {x: '50%', y: '0%'}),
  {color: 'black', path: 'straight', hide:'true'}
);
var arrow3Slide1 = new LeaderLine(
  document.getElementById('img1'),
  document.getElementById('img2'),
  {color: 'black', path: 'straight', hide:'true'}
);


var arrow1Slide2 = new LeaderLine(
  LeaderLine.pointAnchor(document.getElementById('img1_slide2'),{x: '50%', y: '50%'}),
  LeaderLine.pointAnchor(document.getElementById('img2_slide2'),{x: '50%', y: '50%'}),
  {color: 'yellow', path: 'arc', hide:'true', middleLabel: LeaderLine.pathLabel('?',{color: 'yellow', lineOffset:24, outlineColor:'', fontSize:'32pt'}),  startPlug: 'arrow1'}
);
var arrow2Slide2 = new LeaderLine(
  LeaderLine.pointAnchor(document.getElementById('img2_slide2'), {x: '50%', y: '50%'}),
  LeaderLine.pointAnchor(document.getElementById('img3_slide2'), {x: '50%', y: '50%'}),
  {color: 'yellow', path: 'arc', hide:'true', middleLabel: LeaderLine.pathLabel('?',{color: 'yellow', lineOffset:24, outlineColor:'', fontSize:'32pt'}), startPlug: 'arrow1'}
);


var arrow1Slide6 = new LeaderLine(
  LeaderLine.areaAnchor(document.getElementById('similarity_measure'),'circle',{x: '25%', y: '15%', width:'80%', height:'100%'}),
  LeaderLine.pointAnchor(document.getElementById('point_set_box'),{x: '50%', y: '0%'}),
  {color: 'gray', path: 'straight', hide:'true', size:6}
);

var arrow1Slide8 = new LeaderLine(
  LeaderLine.areaAnchor(document.getElementById('similarity_measure_slide8'),'circle',{x: '25%', y: '15%', width:'80%', height:'100%'}),
  LeaderLine.pointAnchor(document.getElementById('point_set_box_slide8'),{x: '50%', y: '0%'}),
  {color: 'gray', path: 'straight', hide:'true', size:6, startSocket:'bottom'}
);

var line1Slide14 = new LeaderLine(
  LeaderLine.areaAnchor(document.getElementById('rminust'),'circle',{x: '79%', y: '15%', width:'4%', height:'100%'}),
  LeaderLine.pointAnchor(document.getElementById('constant'),{x: '7%', y: '100%'}),
  {color: 'blue', path: 'straight', hide:'true', size:6, startSocket:'top', endPlug:"behind"}
);

var line2Slide14 = new LeaderLine(
  LeaderLine.areaAnchor(document.getElementById('rminust'),'circle',{x: '65%', y: '15%', width:'4%', height:'100%'}),
  LeaderLine.pointAnchor(document.getElementById('constant'),{x: '7%', y: '100%'}),
  {color: 'blue', path: 'straight', hide:'true', size:6, startSocket:'top', endPlug:"behind"}
);

var arrow1Slide17 = new LeaderLine(
  LeaderLine.pointAnchor(document.getElementById('T1'),{x: '30%', y: '50%'}),
  LeaderLine.pointAnchor(document.getElementById('hist2d'),{x: '53%', y: '45%'}),
  {color: 'red', hide:'true'}
);

var arrow2Slide17 = new LeaderLine(
  LeaderLine.pointAnchor(document.getElementById('T2'),{x: '30%', y: '50%'}),
  LeaderLine.pointAnchor(document.getElementById('hist2d'),{x: '53%', y: '45%'}),
  {color: 'blue',  hide:'true'}
);

var arrow1Slide21 = new LeaderLine(
  LeaderLine.pointAnchor(document.getElementById('entropy_bar_1'),{x: '90%', y: '50%'}),
  LeaderLine.pointAnchor(document.getElementById('entropy_curve'),{x: '28%', y: '30%'}),
  {color: 'black', path:'straight', hide:'true'}
);

var arrow2Slide21 = new LeaderLine(
  LeaderLine.pointAnchor(document.getElementById('entropy_bar_2'),{x: '50%', y: '90%'}),
  LeaderLine.pointAnchor(document.getElementById('entropy_curve'),{x: '51%', y: '7%'}),
  {color: 'black', path:'straight', hide:'true'}
);

var arrow3Slide21 = new LeaderLine(
  LeaderLine.pointAnchor(document.getElementById('entropy_bar_3'),{x: '10%', y: '50%'}),
  LeaderLine.pointAnchor(document.getElementById('entropy_curve'),{x: '75%', y: '30%'}),
  {color: 'black', path:'straight', hide:'true'}
);

var currentSlide
Reveal.on( 'slidechanged', event => {

  if(event.currentSlide.getAttribute('data-state') == 'slide1'){


      currentSlide = '1';
    arrow1Slide1.setOptions({
        color: 'rgb(0, 0, 0)',
        startPlugColor: 'rgb(0, 0, 0)',
        endPlugColor: 'rgb(0, 0, 0)'
      });
      arrow2Slide1.setOptions({
        color: 'rgb(0, 0, 0)',
        startPlugColor: 'rgb(0, 0, 0)',
        endPlugColor: 'rgb(0, 0, 0)' // translucent
      });
      arrow3Slide1.setOptions({
        color: 'rgb(0, 0, 0)',
        startPlugColor: 'rgb(0, 0, 0)',
        endPlugColor: 'rgb(0, 0, 0)' // translucent
      });
      arrow1Slide1.position();
      arrow2Slide1.position();
      arrow3Slide1.position();
      arrow1Slide1.show();
      arrow2Slide1.show();
      arrow3Slide1.show();

      Reveal.on( 'fragmentshown', event => {
        if(currentSlide == '1' && event.fragment.getAttribute('data-fragment-index') == 0){

          arrow1Slide1.setOptions({
            color: 'rgba(0, 0, 0, 0.5)',
            startPlugColor: 'rgba(0, 0, 0., 0.5)',
            endPlugColor: 'rgba(0, 0, 0, 0.5)' // translucent
          });
          arrow2Slide1.setOptions({
            color: 'rgba(0, 0, 0, 0.5)',
            startPlugColor: 'rgba(0, 0, 0., 0.5)',
            endPlugColor: 'rgba(0, 0, 0, 0.5)' // translucent
          });
          arrow3Slide1.setOptions({
            color: 'rgba(0, 0, 0, 0.5)',
            startPlugColor: 'rgba(0, 0, 0., 0.5)',
            endPlugColor: 'rgba(0, 0, 0, 0.5)' // translucent
          });
          arrow1Slide1.show();
          arrow2Slide1.show();
          arrow3Slide1.show();

        }
      });

  }

  if(event.previousSlide.getAttribute('data-state') == 'slide1'){

      arrow1Slide1.hide('none');
      arrow2Slide1.hide('none');
      arrow3Slide1.hide('none');

  }


  if(event.currentSlide.getAttribute('data-state') == 'slide2'){

    currentSlide = '2';
      arrow1Slide2.position();
      arrow2Slide2.position();

      arrow1Slide2.middleLabel = LeaderLine.pathLabel('?',{color: 'yellow', lineOffset:24, outlineColor:'', fontSize:'32pt'});
      arrow2Slide2.middleLabel = LeaderLine.pathLabel('?',{color: 'yellow', lineOffset:24, outlineColor:'', fontSize:'32pt'});

      arrow1Slide2.show();
      arrow2Slide2.show();

      Reveal.on( 'fragmentshown', event => {
        if(currentSlide == '2' && event.fragment.getAttribute('data-fragment-index') == 0){

          arrow1Slide2.middleLabel = LeaderLine.pathLabel('!',{color: 'yellow', lineOffset:24, outlineColor:'', fontSize:'32pt'});
          arrow2Slide2.middleLabel = LeaderLine.pathLabel('!',{color: 'yellow', lineOffset:24, outlineColor:'', fontSize:'32pt'});
          arrow1Slide2.show();
          arrow2Slide2.show();
        }
      });
  }


  if(event.previousSlide.getAttribute('data-state') == 'slide2'){

      arrow1Slide2.hide('none');
      arrow2Slide2.hide('none');

  }

  if(event.currentSlide.getAttribute('data-state') == 'slide3'){
    currentSlide = '3';

  }

  if(event.currentSlide.getAttribute('data-state') == 'slide4'){
      currentSlide = '4'
  }


  if(event.previousSlide.getAttribute('data-state') == 'slide6'){

      arrow1Slide6.hide('none');
  }


  if(event.currentSlide.getAttribute('data-state') == 'slide6'){


      currentSlide = '6'
      arrow1Slide6.position();
      arrow1Slide6.show();
  }


  if(event.previousSlide.getAttribute('data-state') == 'slide8'){

      arrow1Slide8.hide('none');
  }


  if(event.currentSlide.getAttribute('data-state') == 'slide8'){


      currentSlide = '8'
      arrow1Slide8.position();
      arrow1Slide8.show();
  }


  if(event.currentSlide.getAttribute('data-state') == 'slide9'){
      currentSlide = '9'
  }

  if(event.previousSlide.getAttribute('data-state') == 'slide14'){

      line1Slide14.hide('none');
      line2Slide14.hide('none');
  }

  if(event.currentSlide.getAttribute('data-state') == 'slide14'){

    currentSlide = '14';
      line1Slide14.position();
      line2Slide14.position();

      Reveal.on( 'fragmentshown', event => {
        if(currentSlide == '14' && event.fragment.getAttribute('data-fragment-index') == 0){
          line1Slide14.show();
          line2Slide14.show();
        }
      });
  }

  if(event.currentSlide.getAttribute('data-state') == 'slide15'){
      currentSlide = '15'
  }

  if(event.previousSlide.getAttribute('data-state') == 'slide17'){

      arrow1Slide17.hide('none');
      arrow2Slide17.hide('none');
  }

  if(event.currentSlide.getAttribute('data-state') == 'slide17'){

    currentSlide = '17';
      arrow1Slide17.position();
      arrow2Slide17.position();
      arrow1Slide17.show();
      arrow2Slide17.show();
  }

  if(event.previousSlide.getAttribute('data-state') == 'slide21'){

      arrow1Slide21.hide('none');
      arrow2Slide21.hide('none');
      arrow3Slide21.hide('none');

  }

  if(event.currentSlide.getAttribute('data-state') == 'slide21'){

    currentSlide = '21';
      arrow1Slide21.position();
      arrow2Slide21.position();
      arrow3Slide21.position();
      arrow1Slide21.show();
      arrow2Slide21.show();
      arrow3Slide21.show();
  }
});

var translation_slider = document.getElementById("translation_slider");


translation_slider.oninput = function() {

  var translate_grid = document.getElementById('translate_grid')
  translate_grid.setAttribute('style','transform:translate(0px,'+this.value+'px)');

};


var translation_slider = document.getElementById("rotation_slider");

rotation_slider.oninput = function() {

  var rotate_grid = document.getElementById('rotate_grid')
  rotate_grid.setAttribute('style','transform:translate(10px,-20px) rotate(' + this.value + 'deg); transform-origin: center;');

};


var scale_slider = document.getElementById("scale_slider");

scale_slider.oninput = function() {

  var scale_grid = document.getElementById('scale_grid')
  scale_grid.setAttribute('style','transform: scale('+ this.value +') rotate(20deg) translate(20%,-20%);');

};


var skew_slider = document.getElementById("skew_slider");

skew_slider.oninput = function() {

  var skew_grid = document.getElementById('skew_grid')
  skew_grid.setAttribute('style','transform:scale(0.8, 1.2) rotate(10deg) translate(20%,-20%) skewX('+ this.value + 'deg);');

};

</script>

<svg style="display: none" version="2.0">
<defs>
<symbol id="trans_grid" viewBox="0 0 4.4 4.4" style="width: 300px; display: block; margin: 10px auto; border: 0px solid #0b82b3;">
<line style="fill: none; stroke: #0b82b3; stroke-width: 0.1px; stroke-opacity: 1;" x1="0.2" y1="0.2" x2="4.2" y2="0.2"/>
<line style="fill: none; stroke: #0b82b3; stroke-width: 0.1px; stroke-opacity: 1;" x1="0.2" y1="0.2" x2="0.2" y2="4.2"/>
<line style="fill: none; stroke: #0b82b3; stroke-width: 0.1px; stroke-opacity: 1;" x1="1.2" y1="0.2" x2="1.2" y2="4.2"/>
<line style="fill: none; stroke: #0b82b3; stroke-width: 0.1px; stroke-opacity: 1;" x1="2.2" y1="0.2" x2="2.2" y2="4.2"/>
<line style="fill: none; stroke: #0b82b3; stroke-width: 0.1px; stroke-opacity: 1;" x1="3.2" y1="0.2" x2="3.2" y2="4.2"/>
<line style="fill: none; stroke: #0b82b3; stroke-width: 0.1px; stroke-opacity: 1;" x1="4.2" y1="0.2" x2="4.2" y2="4.2"/>
<line style="fill: none; stroke: #0b82b3; stroke-width: 0.1px; stroke-opacity: 1;" x1="0.2" y1="1.2" x2="4.2" y2="1.2"/>
<line style="fill: none; stroke: #0b82b3; stroke-width: 0.1px; stroke-opacity: 1;" x1="0.2" y1="2.2" x2="4.2" y2="2.2"/>
<line style="fill: none; stroke: #0b82b3; stroke-width: 0.1px; stroke-opacity: 1;" x1="0.2" y1="3.2" x2="4.2" y2="3.2"/>
<line style="fill: none; stroke: #0b82b3; stroke-width: 0.1px; stroke-opacity: 1;" x1="0.2" y1="4.2" x2="4.2" y2="4.2"/>
<circle cx="0.2" cy="0.2" r=".1"/>
<circle cx="1.2" cy="0.2" r=".1"/>
<circle cx="2.2" cy="0.2" r=".1"/>
<circle cx="3.2" cy="0.2" r=".1"/>
<circle cx="4.2" cy="0.2" r=".1"/>
<circle cx="0.2" cy="1.2" r=".1"/>
<circle cx="1.2" cy="1.2" r=".1"/>
<circle cx="2.2" cy="1.2" r=".1"/>
<circle cx="3.2" cy="1.2" r=".1"/>
<circle cx="4.2" cy="1.2" r=".1"/>
<circle cx="5.2" cy="1.2" r=".1"/>
<circle cx="0.2" cy="2.2" r=".1"/>
<circle cx="1.2" cy="2.2" r=".1"/>
<circle cx="2.2" cy="2.2" r=".1"/>
<circle cx="3.2" cy="2.2" r=".1"/>
<circle cx="4.2" cy="2.2" r=".1"/>
<circle cx="0.2" cy="3.2" r=".1"/>
<circle cx="1.2" cy="3.2" r=".1"/>
<circle cx="2.2" cy="3.2" r=".1"/>
<circle cx="3.2" cy="3.2" r=".1"/>
<circle cx="4.2" cy="3.2" r=".1"/>
<circle cx="0.2" cy="4.2" r=".1"/>
<circle cx="1.2" cy="4.2" r=".1"/>
<circle cx="2.2" cy="4.2" r=".1"/>
<circle cx="3.2" cy="4.2" r=".1"/>
<circle cx="4.2" cy="4.2" r=".1"/>
</symbol>
</defs>
<use href="#trans_grid"/>
</svg>

<svg style="display: none" version="2.0">
<defs>
<symbol id="deformed_grid" viewBox="0 0 4.4 4.4" style="width: 300px; display: block; margin: 10px auto; border: 0px solid #0b82b3;">
<line style="fill: none; stroke: #0b82b3; stroke-width: 0.1px; stroke-opacity: 1;" x1="0.2" y1="0.2" x2="0.9" y2="0.4"/>
<line style="fill: none; stroke: #0b82b3; stroke-width: 0.1px; stroke-opacity: 1;" x1="0.9" y1="0.4" x2="2.0" y2="0.6"/>
<line style="fill: none; stroke: #0b82b3; stroke-width: 0.1px; stroke-opacity: 1;" x1="2.0" y1="0.6" x2="3.0" y2="0.7"/>
<line style="fill: none; stroke: #0b82b3; stroke-width: 0.1px; stroke-opacity: 1;" x1="3.0" y1="0.7" x2="4.0" y2="0.3"/>

<line style="fill: none; stroke: #0b82b3; stroke-width: 0.1px; stroke-opacity: 1;" x1="0.2" y1="0.2" x2="0.5" y2="1.4"/>
<line style="fill: none; stroke: #0b82b3; stroke-width: 0.1px; stroke-opacity: 1;" x1="0.9" y1="0.4" x2="1.3" y2="1.6"/>
<line style="fill: none; stroke: #0b82b3; stroke-width: 0.1px; stroke-opacity: 1;" x1="2.0" y1="0.6" x2="2.2" y2="1.6"/>
<line style="fill: none; stroke: #0b82b3; stroke-width: 0.1px; stroke-opacity: 1;" x1="3.0" y1="0.7" x2="3.0" y2="1.8"/>
<line style="fill: none; stroke: #0b82b3; stroke-width: 0.1px; stroke-opacity: 1;" x1="4.0" y1="0.3" x2="4.1" y2="1.4"/>

<line style="fill: none; stroke: #0b82b3; stroke-width: 0.1px; stroke-opacity: 1;" x1="0.5" y1="1.4" x2="1.3" y2="1.6"/>
<line style="fill: none; stroke: #0b82b3; stroke-width: 0.1px; stroke-opacity: 1;" x1="1.3" y1="1.6" x2="2.2" y2="1.6"/>
<line style="fill: none; stroke: #0b82b3; stroke-width: 0.1px; stroke-opacity: 1;" x1="2.2" y1="1.6" x2="3.0" y2="1.8"/>
<line style="fill: none; stroke: #0b82b3; stroke-width: 0.1px; stroke-opacity: 1;" x1="3.0" y1="1.8" x2="4.1" y2="1.4"/>

<line style="fill: none; stroke: #0b82b3; stroke-width: 0.1px; stroke-opacity: 1;" x1="0.5" y1="1.4" x2="0.3" y2="2.4"/>
<line style="fill: none; stroke: #0b82b3; stroke-width: 0.1px; stroke-opacity: 1;" x1="1.3" y1="1.6" x2="1.0" y2="2.2"/>
<line style="fill: none; stroke: #0b82b3; stroke-width: 0.1px; stroke-opacity: 1;" x1="2.2" y1="1.6" x2="1.9" y2="2.5"/>
<line style="fill: none; stroke: #0b82b3; stroke-width: 0.1px; stroke-opacity: 1;" x1="3.0" y1="1.8" x2="3.0" y2="2.6"/>
<line style="fill: none; stroke: #0b82b3; stroke-width: 0.1px; stroke-opacity: 1;" x1="4.1" y1="1.4" x2="3.9" y2="2.2"/>

<line style="fill: none; stroke: #0b82b3; stroke-width: 0.1px; stroke-opacity: 1;" x1="0.3" y1="2.4" x2="1.0" y2="2.2"/>
<line style="fill: none; stroke: #0b82b3; stroke-width: 0.1px; stroke-opacity: 1;" x1="1.0" y1="2.2" x2="1.9" y2="2.5"/>
<line style="fill: none; stroke: #0b82b3; stroke-width: 0.1px; stroke-opacity: 1;" x1="1.9" y1="2.5" x2="3.0" y2="2.6"/>
<line style="fill: none; stroke: #0b82b3; stroke-width: 0.1px; stroke-opacity: 1;" x1="3.0" y1="2.6" x2="3.9" y2="2.2"/>

<line style="fill: none; stroke: #0b82b3; stroke-width: 0.1px; stroke-opacity: 1;" x1="0.3" y1="2.4" x2="0.2" y2="3.2"/>
<line style="fill: none; stroke: #0b82b3; stroke-width: 0.1px; stroke-opacity: 1;" x1="1.0" y1="2.2" x2="1.2" y2="3.2"/>
<line style="fill: none; stroke: #0b82b3; stroke-width: 0.1px; stroke-opacity: 1;" x1="1.9" y1="2.5" x2="2.2" y2="3.5"/>
<line style="fill: none; stroke: #0b82b3; stroke-width: 0.1px; stroke-opacity: 1;" x1="3.0" y1="2.6" x2="3.2" y2="3.7"/>
<line style="fill: none; stroke: #0b82b3; stroke-width: 0.1px; stroke-opacity: 1;" x1="3.9" y1="2.2" x2="4.2" y2="3.2"/>

<line style="fill: none; stroke: #0b82b3; stroke-width: 0.1px; stroke-opacity: 1;" x1="0.2" y1="3.2" x2="1.2" y2="3.2"/>
<line style="fill: none; stroke: #0b82b3; stroke-width: 0.1px; stroke-opacity: 1;" x1="1.2" y1="3.2" x2="2.2" y2="3.5"/>
<line style="fill: none; stroke: #0b82b3; stroke-width: 0.1px; stroke-opacity: 1;" x1="2.2" y1="3.5" x2="3.2" y2="3.7"/>
<line style="fill: none; stroke: #0b82b3; stroke-width: 0.1px; stroke-opacity: 1;" x1="3.2" y1="3.7" x2="4.2" y2="3.2"/>

<line style="fill: none; stroke: #0b82b3; stroke-width: 0.1px; stroke-opacity: 1;" x1="0.2" y1="3.2" x2="0.6" y2="3.9"/>
<line style="fill: none; stroke: #0b82b3; stroke-width: 0.1px; stroke-opacity: 1;" x1="1.2" y1="3.2" x2="1.2" y2="3.8"/>
<line style="fill: none; stroke: #0b82b3; stroke-width: 0.1px; stroke-opacity: 1;" x1="2.2" y1="3.5" x2="2.0" y2="4.2"/>
<line style="fill: none; stroke: #0b82b3; stroke-width: 0.1px; stroke-opacity: 1;" x1="3.2" y1="3.7" x2="3.2" y2="4.2"/>
<line style="fill: none; stroke: #0b82b3; stroke-width: 0.1px; stroke-opacity: 1;" x1="4.2" y1="3.2" x2="4.2" y2="4.0"/>

<line style="fill: none; stroke: #0b82b3; stroke-width: 0.1px; stroke-opacity: 1;" x1="0.6" y1="3.9" x2="1.2" y2="3.8"/>
<line style="fill: none; stroke: #0b82b3; stroke-width: 0.1px; stroke-opacity: 1;" x1="1.2" y1="3.8" x2="2.0" y2="4.2"/>
<line style="fill: none; stroke: #0b82b3; stroke-width: 0.1px; stroke-opacity: 1;" x1="2.0" y1="4.2" x2="3.2" y2="4.2"/>
<line style="fill: none; stroke: #0b82b3; stroke-width: 0.1px; stroke-opacity: 1;" x1="3.2" y1="4.2" x2="4.2" y2="4.0"/>

<circle cx="0.2" cy="0.2" r=".1"/>
<circle cx="0.9" cy="0.4" r=".1"/>
<circle cx="2.0" cy="0.6" r=".1"/>
<circle cx="3.0" cy="0.7" r=".1"/>
<circle cx="4.0" cy="0.3" r=".1"/>

<circle cx="0.5" cy="1.4" r=".1"/>
<circle cx="1.3" cy="1.6" r=".1"/>
<circle cx="2.2" cy="1.6" r=".1"/>
<circle cx="3.0" cy="1.8" r=".1"/>
<circle cx="4.1" cy="1.4" r=".1"/>

<circle cx="0.3" cy="2.4" r=".1"/>
<circle cx="1.0" cy="2.2" r=".1"/>
<circle cx="1.9" cy="2.5" r=".1"/>
<circle cx="3.0" cy="2.6" r=".1"/>
<circle cx="3.9" cy="2.2" r=".1"/>

<circle cx="0.2" cy="3.2" r=".1"/>
<circle cx="1.2" cy="3.2" r=".1"/>
<circle cx="2.2" cy="3.5" r=".1"/>
<circle cx="3.2" cy="3.7" r=".1"/>
<circle cx="4.2" cy="3.2" r=".1"/>


<circle cx="0.6" cy="3.9" r=".1"/>
<circle cx="1.2" cy="3.8" r=".1"/>
<circle cx="2.0" cy="4.2" r=".1"/>
<circle cx="3.2" cy="4.2" r=".1"/>
<circle cx="4.2" cy="4.0" r=".1"/>
</symbol>
</defs>
<use href="#deformed_grid"/>
</svg>
