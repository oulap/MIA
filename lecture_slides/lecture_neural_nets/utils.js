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


var line1Slide4 = new LeaderLine(
  LeaderLine.areaAnchor(document.getElementById('img_gmm'), 'circle', {x: '43%', y: '0.5%', width: '20%', height:'10%'}),
  LeaderLine.pointAnchor(document.getElementById('green_box'), {x: '0%', y: '50%'}),
  {color: '#00FF00', path: 'straight', hide:'true', endPlug:'behind'}
);

var line2Slide4 = new LeaderLine(
  LeaderLine.areaAnchor(document.getElementById('img_gmm'), 'circle', {x: '9%', y: '90%', width: '20%', height:'10%'}),
  LeaderLine.pointAnchor(document.getElementById('green_box'), {x: '0%', y: '50%'}),
  {color: '#00FF00', path: 'straight', hide:'true', endPlug:'behind'}
);

var line3Slide4 = new LeaderLine(
  LeaderLine.areaAnchor(document.getElementById('img_gmm'),'circle', {x: '73%', y: '90%', width: '20%', height: '10%'}),
  LeaderLine.pointAnchor(document.getElementById('green_box'), {x: '0%', y: '50%'}),
  {color: '#00FF00', path: 'straight', hide:'true', endPlug:'behind'}
);

var arrow1Slide6 = new LeaderLine(
  LeaderLine.pointAnchor(document.getElementById('slide6_img1'),{x: '80%', y: '48%'}),
  LeaderLine.pointAnchor(document.getElementById('slide6_img2'),{x: '20%', y: '50%'}),
  {color: 'blue', path: 'straight', hide:'true', size:10}
);
var arrow2Slide6 = new LeaderLine(
  LeaderLine.pointAnchor(document.getElementById('slide6_img2'), {x: '80%', y: '50%'}),
  LeaderLine.pointAnchor(document.getElementById('slide6_img3'), {x: '20%', y: '43%'}),
  {color: 'blue', path: 'straight', hide:'true', size:10}
);

var boxLineSlide9 = new LeaderLine(
  LeaderLine.areaAnchor(document.getElementById('gradient_descent_formula'),'circle', {x: '43.3%', y: '30%', width: '2%', height: '70%'}),
  LeaderLine.pointAnchor(document.getElementById('gradient_step_box'), {x: '0%', y: '50%'}),
  {color: 'blue', hide:'true', size:6, endPlug:'behind', startSocket:'top'}
);

var boxLineSlide10 = new LeaderLine(
  LeaderLine.areaAnchor(document.getElementById('9d_bullet'),'circle', {x: '23%', y: '29%', width:'70%', height:'70%'}),
  LeaderLine.pointAnchor(document.getElementById('9d_box'), {x: '0%', y: '50%'}),
  {color: 'blue', hide:'true', size:6, endPlug:'behind', startSocket:'bottom'}
);

var boxLine1Slide11 = new LeaderLine(
  LeaderLine.areaAnchor(document.getElementById('parameter_formula'),'circle', {x: '29%', y: '79%', width: '6%', height: '15%'}),
  LeaderLine.pointAnchor(document.getElementById('parameter_box'), {x: '50%', y: '0%'}),
  {color: 'blue', path:'straight', hide:'true', size:6, endPlug:'behind', startSocket:'bottom'}
);


var boxLine2Slide11 = new LeaderLine(
  LeaderLine.areaAnchor(document.getElementById('parameter_formula'),'circle', {x: '43%', y: '79%', width:'6%', height:'15%'}),
  LeaderLine.pointAnchor(document.getElementById('parameter_box'), {x: '50%', y: '0%'}),
  {color: 'blue', path:'straight', hide:'true', size:6, endPlug:'behind', startSocket:'bottom'}
);

var boxLine1Slide13 = new LeaderLine(
  LeaderLine.areaAnchor(document.getElementById('nn_model'),'circle', {x: '75%', y: '2%', width:'4%', height:'15%'}),
  LeaderLine.pointAnchor(document.getElementById('nn_parameters'), {x: '50%', y: '0%'}),
  {color: 'blue', path:'straight', hide:'true', size:6, endPlug:'behind', startSocket:'bottom'}
);

var boxLine2Slide13 = new LeaderLine(
  LeaderLine.areaAnchor(document.getElementById('nn_basis_functions'),'circle', {x: '44%', y: '70%', width:'6%', height:'27%'}),
  LeaderLine.pointAnchor(document.getElementById('nn_parameters'), {x: '50%', y: '100%'}),
  {color: 'blue', path:'straight', hide:'true', size:6, endPlug:'behind', startSocket:'bottom'}
);

var boxLine3Slide13 = new LeaderLine(
  LeaderLine.areaAnchor(document.getElementById('nn_basis_functions'),'circle', {x: '60%', y: '70%', width:'6%', height:'27%'}),
  LeaderLine.pointAnchor(document.getElementById('nn_parameters'), {x: '50%', y: '100%'}),
  {color: 'blue', path:'straight', hide:'true', size:6, endPlug:'behind', startSocket:'bottom'}
);


var arrow1Slide14 = new LeaderLine(
  LeaderLine.pointAnchor(document.getElementById('flow_box1'), {x: '98%', y: '50%'}),
  LeaderLine.pointAnchor(document.getElementById('flow_box2'), {x: '0%', y: '50%'}),
  {color: '#add8e6', path: 'straight', hide:'true', size:0, endPlugSize:8}
);

var arrow1Slide15 = new LeaderLine(
  LeaderLine.pointAnchor(document.getElementById('phi_box1'), {x: '95%', y: '50%'}),
  LeaderLine.pointAnchor(document.getElementById('phi2'), {x: '0%', y: '58%'}),
  {color: '#add8e6', path: 'straight', hide:'true', size:0, endPlugSize:8}
);

var arrow2Slide15 = new LeaderLine(
  LeaderLine.pointAnchor(document.getElementById('phi_box2'), {x: '95%', y: '50%'}),
  LeaderLine.pointAnchor(document.getElementById('phi3'), {x: '0%', y: '58%'}),
  {color: '#add8e6', path: 'straight', hide:'true', size:0, endPlugSize:8}
);

var arrow3Slide15 = new LeaderLine(
  LeaderLine.pointAnchor(document.getElementById('phi_box3'), {x: '95%', y: '50%'}),
  LeaderLine.pointAnchor(document.getElementById('phi4'), {x: '0%', y: '58%'}),
  {color: '#add8e6', path: 'straight', hide:'true', size:0, endPlugSize:8}
);

var currentSlide;

Reveal.on( 'slidechanged', event => {

  if(event.currentSlide.getAttribute('data-state') == 'slide1'){


      currentSlide = '1'
      arrow1Slide1.setOptions({
        color: 'rgb(0, 0, 0)',
        startPlugColor: 'rgb(0, 0, 0)',
        endPlugColor: 'rgb(0, 0, 0)'
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
          arrow3Slide1.setOptions({
            color: 'rgba(0, 0, 0, 0.5)',
            startPlugColor: 'rgba(0, 0, 0., 0.5)',
            endPlugColor: 'rgba(0, 0, 0, 0.5)' // translucent
          });
          arrow1Slide1.show();
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

      currentSlide = '2'
  }

  if(event.previousSlide.getAttribute('data-state') == 'slide4'){

      line1Slide4.hide('none');
      line2Slide4.hide('none');
      line3Slide4.hide('none');

  }

  if(event.currentSlide.getAttribute('data-state') == 'slide4'){

      currentSlide = '4'
      line1Slide4.position();
      line2Slide4.position();
      line3Slide4.position();

      Reveal.on( 'fragmentshown', event => {
        if(currentSlide == '4' && event.fragment.getAttribute('data-fragment-index') == 0){

          line1Slide4.show();
          line2Slide4.show();
          line3Slide4.show();
        }
      });

  }


  if(event.previousSlide.getAttribute('data-state') == 'slide6'){

      arrow1Slide6.hide('none');
      arrow2Slide6.hide('none');
  }


  if(event.currentSlide.getAttribute('data-state') == 'slide6'){


      currentSlide = '6'
      arrow1Slide6.position();
      arrow2Slide6.position();
      arrow1Slide6.show();
      arrow2Slide6.show();
  }

  if(event.previousSlide.getAttribute('data-state') == 'slide9'){
      boxLineSlide9.hide('none');
  }

  if(event.currentSlide.getAttribute('data-state') == 'slide9'){

      currentSlide = '9'
      boxLineSlide9.position();
      boxLineSlide9.show();
  }


  if(event.previousSlide.getAttribute('data-state') == 'slide10'){
      boxLineSlide10.hide('none');
  }

  if(event.currentSlide.getAttribute('data-state') == 'slide10'){

      currentSlide = '10'
      boxLineSlide10.position();

      Reveal.on( 'fragmentshown', event => {
        if(currentSlide == '10' && event.fragment.getAttribute('data-fragment-index') == 0){

          boxLineSlide10.show();
        }
      });
  }

  if(event.previousSlide.getAttribute('data-state') == 'slide11'){
      boxLine1Slide11.hide('none')
      boxLine2Slide11.hide('none')
  }

  if(event.currentSlide.getAttribute('data-state') == 'slide11'){

      currentSlide = '11'
      boxLine1Slide11.position();
      boxLine2Slide11.position();

      Reveal.on( 'fragmentshown', event => {
        if(currentSlide == '11' && event.fragment.getAttribute('data-fragment-index') == 0){

          boxLine1Slide11.show();
          boxLine2Slide11.show();
        }
      });
  }

  if(event.currentSlide.getAttribute('data-state') == 'slide12'){

      currentSlide = '12'
  }


  if(event.previousSlide.getAttribute('data-state') == 'slide13'){
      boxLine1Slide13.hide('none')
      boxLine2Slide13.hide('none')
      boxLine3Slide13.hide('none')
  }


  if(event.currentSlide.getAttribute('data-state') == 'slide13'){

      currentSlide = '13'
      boxLine1Slide13.position();
      boxLine2Slide13.position();
      boxLine3Slide13.position();

      Reveal.on( 'fragmentshown', event => {
        if(currentSlide == '13' && event.fragment.getAttribute('data-fragment-index') == 0){

          boxLine1Slide13.show();
          boxLine2Slide13.show();
          boxLine3Slide13.show();
        }
      });
  }


  if(event.previousSlide.getAttribute('data-state') == 'slide14'){
      arrow1Slide14.hide('none')
  }

  if(event.currentSlide.getAttribute('data-state') == 'slide14'){

      currentSlide = '14'
      arrow1Slide14.position();
      arrow1Slide14.show();
  }

  if(event.previousSlide.getAttribute('data-state') == 'slide15'){
      arrow1Slide15.hide('none')
      arrow2Slide15.hide('none')
      arrow3Slide15.hide('none')
  }

  if(event.currentSlide.getAttribute('data-state') == 'slide15'){

      currentSlide = '15'
      arrow1Slide15.position();
      arrow2Slide15.position();
      arrow3Slide15.position();

      Reveal.on( 'fragmentshown', event => {
        if(currentSlide == '15' && event.fragment.getAttribute('data-fragment-index') == 0){

          arrow1Slide15.show();
          arrow2Slide15.show();
          arrow3Slide15.show();
        }
      });
  }

});
</script>
