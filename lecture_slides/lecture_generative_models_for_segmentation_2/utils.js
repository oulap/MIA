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

var line1Slide3= new LeaderLine(
  LeaderLine.pointAnchor(document.getElementById('mri_seg'), {x: '32%', y: '68%'}),
  LeaderLine.pointAnchor(document.getElementById('csf_box'), {x: '50%', y: '0%'}),
  {color: 'gray', hide:'true', path:'straight', color:'gray', endPlug:'behind'}
);

var line2Slide3= new LeaderLine(
  LeaderLine.pointAnchor(document.getElementById('mri_seg'), {x: '55%', y: '76%'}),
  LeaderLine.pointAnchor(document.getElementById('gm_box'), {x: '50%', y: '0%'}),
  {color: 'gray', hide:'true', path:'straight', color:'gray', endPlug:'behind'}
);

var line3Slide3= new LeaderLine(
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
  }

  if(event.previousSlide.getAttribute('data-state') == 'slide3'){

      line1Slide3.hide('none');
      line2Slide3.hide('none');
      line3Slide3.hide('none');
  }

  if(event.currentSlide.getAttribute('data-state') == 'slide3'){

      currentSlide = '3'
      line1Slide3.position();
      line1Slide3.show();
      line2Slide3.position();
      line2Slide3.show();
      line3Slide3.position();
      line3Slide3.show();
  }

});
</script>
