//para acomodar dashboard al hacer scroll
	window.addEventListener("scroll", function(){	  
		var st = window.pageYOffset || document.documentElement.scrollTop; 
		if(st >50){
			$('.navbar-dark').addClass('navbar-completa');
			$('.sidebar').css('top','36px');			
			
		}
		else{
			$('.sidebar').css('top','85px');
			$('.navbar-dark').removeClass('navbar-completa');			
		}
	}, false);
  
// para ocultar o mostrar el menú en un dashboard
function escondeMenu(flecha){
    console.log('entra');
	if(flecha == 0){
		$('.sidebar').addClass('esconder');			
		$('main').css('flex','0 0 100%').css('max-width','100%').css('transition','1s');
		$('#flecha1').removeClass('d-none');
		$('#flecha0').addClass('d-none	');
	}	
	else{
		$('#flecha0').removeClass('d-none');
		$('#flecha1').addClass('d-none');
		$('.sidebar').removeClass('esconder');
		$('main').css('flex','0 0 83.333333%').css('max-width','83.333333%').css('transition','1s');
	}
}

//carga páginas cuando es un dashboard
function cargaInfoDashboard(inc,detalle){
	$('#main_info').loading('Cargando '+detalle+'...');
	$('#main_title').text(detalle);
	$('#main_info').load(inc+'.cfm',{algunselect:$('#algunselect').val()});
}

//spinner loading
$.fn.loading=function(texto,size){	
	if (!size){
		size=3;
	}
	$(this).html("<div class='col-sm-12 text-center' id='fa-spiner'>"+texto+"<div class='fa fa-spinner fa-pulse fa-"+size+"x fa-fw'></div>");
}

$.fn.quitaLoading= function(){
	$(this).find('#fa-spiner').remove();
}
