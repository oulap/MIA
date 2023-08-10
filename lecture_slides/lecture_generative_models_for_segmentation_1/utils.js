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

var arrow1Slide2= new LeaderLine(
  LeaderLine.areaAnchor(document.getElementById('coronal_img'), 'rectangle',{x: '50%', y: '50%', width:'5%', height:'5%'}),
  LeaderLine.pointAnchor(document.getElementById('cube_img'), {x: '0%', y: '0%'}),
  {color: 'gray', hide:'true', path:'straight', color:'red'}
);

var arrow2Slide2= new LeaderLine(
  LeaderLine.areaAnchor(document.getElementById('sagittal_img'), 'rectangle',{x: '50%', y: '50%', width:'5%', height:'5%'}),
  LeaderLine.pointAnchor(document.getElementById('cube_img'), {x: '50%', y: '0%'}),
  {color: 'gray', hide:'true', path:'straight', color:'red'}
);

var arrow3Slide2= new LeaderLine(
  LeaderLine.areaAnchor(document.getElementById('axial_img'), 'rectangle',{x: '50%', y: '50%', width:'5%', height:'5%'}),
  LeaderLine.pointAnchor(document.getElementById('cube_img'), {x: '0%', y: '50%'}),
  {color: 'gray', hide:'true', path:'straight', color:'red'}
);

var line1Slide4= new LeaderLine(
  LeaderLine.pointAnchor(document.getElementById('mri_seg'), {x: '32%', y: '68%'}),
  LeaderLine.pointAnchor(document.getElementById('csf_box'), {x: '50%', y: '0%'}),
  {color: 'gray', hide:'true', path:'straight', color:'gray', endPlug:'behind'}
);

var line2Slide4= new LeaderLine(
  LeaderLine.pointAnchor(document.getElementById('mri_seg'), {x: '55%', y: '76%'}),
  LeaderLine.pointAnchor(document.getElementById('gm_box'), {x: '50%', y: '0%'}),
  {color: 'gray', hide:'true', path:'straight', color:'gray', endPlug:'behind'}
);

var line3Slide4= new LeaderLine(
  LeaderLine.pointAnchor(document.getElementById('mri_seg'), {x: '67%', y: '73%'}),
  LeaderLine.pointAnchor(document.getElementById('wm_box'), {x: '50%', y: '0%'}),
  {color: 'gray', hide:'true', path:'straight', color:'gray', endPlug:'behind'}
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

  if(event.previousSlide.getAttribute('data-state') == 'slide2'){

      arrow1Slide2.hide('none');
      arrow2Slide2.hide('none');
      arrow3Slide2.hide('none');
  }

  if(event.currentSlide.getAttribute('data-state') == 'slide2'){


      currentSlide = '2'
      arrow1Slide2.position();
      arrow2Slide2.position();
      arrow3Slide2.position();
      arrow1Slide2.show();
      arrow2Slide2.show();
      arrow3Slide2.show();
  }

  if(event.currentSlide.getAttribute('data-state') == 'slide3'){
    currentSlide = '3'
  }

  if(event.previousSlide.getAttribute('data-state') == 'slide4'){

      line1Slide4.hide('none');
      line2Slide4.hide('none');
      line3Slide4.hide('none');
  }

  if(event.currentSlide.getAttribute('data-state') == 'slide4'){

      currentSlide = '4'
      line1Slide4.position();
      line1Slide4.show();
      line2Slide4.position();
      line2Slide4.show();
      line3Slide4.position();
      line3Slide4.show();
  }

});
</script>
