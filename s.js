window.isAlreadyRunned = false;
if(!window.isAlreadyRunned){
	window.isAlreadyRunned = true;

  let scriptElm = document.createElement('script');
  scriptElm.src = '//cdn.jsdelivr.net/npm/sweetalert2@11';
  scriptElm.onload = showOffer;
  document.body.appendChild(scriptElm);
}

function showOffer(){
  const gradeInfo = '<strong style="color: green">Grade: PCGS MS70</strong>';
  const message = 'Mexico 2010-Mo Gold 200 Coin, Limited Edition<br>Today price is <b>$10 000</b> (<s>$15 000</s>)';

  Swal.fire({
    title: 'Special offer from collectors.com',
    html: `${gradeInfo}<br>${message}`,
    imageUrl: 'https://d1w8cc2yygc27j.cloudfront.net/-5099721544750836979/3827092546973246412_thumbnail.jpg',
    imageWidth: 200,
    imageHeight: 200,
    showCancelButton: true,
    confirmButtonText: 'View'
  }).then((result) => {
  	if (result.isConfirmed) 
    	alert('Fake coin :)');
  })
}
