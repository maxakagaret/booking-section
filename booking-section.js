// @koala-prepend "flatpickr.min.js"
// @koala-prepend "langs/default.js"
// @koala-prepend "langs/tr.js"
// @koala-prepend "langs/de.js"
// @koala-prepend "langs/fr.js"
// @koala-prepend "langs/ru.js"

var $currentDate = new Date(),
	$lang=$('.booking-widget-section form').attr('data-lang');
$('.select-box .select-btn').click(function(e) {
	e.preventDefault();
	var selectBox = $(this).closest('.select-box'),
		selectList = selectBox.find('.select-list'),
		selectBoxPosition = selectBox.offset().top + selectBox.innerHeight() + selectList.innerHeight(),
		screenHeight = (window.innerHeight || document.documentElement.clientHeight),
		screenWidth = (window.innerWidth || document.documentElement.clientWidth);
	if(screenWidth>480) {
		if(($(window).scrollTop() + screenHeight)<selectBoxPosition) {
			selectBox.addClass('top');
		}
		else {
			selectBox.removeClass('top');
		}
	}
	else {
		if(screenHeight<selectBoxPosition) {
			selectBox.addClass('top');
		}
		else {
			selectBox.removeClass('top');
		}	
	}
	selectBox.toggleClass('opened');
});
$('.select-box .select-list li button').click(function(e) {
	var value = $(this).val(),
		widget = $(this).closest('.booking-widget-section');
	$(this).closest('.select-box').find('input').val(value).change();
	$(this).closest('.select-box').find('.select-btn').text($(this).text());
	$(this).closest('.select-box').removeClass('opened');
	if($(this).closest('.select-box').find('input').attr('name') == 'child') {
		for (var i=1;i<=parseInt(value);i++) {
			widget.find('.input-box[data-child="'+i+'"]').removeClass('disabled');
		}
		for (var j=parseInt(value)+1;j<=4;j++) {
			widget.find('.input-box[data-child="'+j+'"]').addClass('disabled');
		}
	}
	if($(this).closest('.select-box').find('input').attr('data-name') == 'child') {
		for (var i=1;i<=parseInt(value);i++) {
			widget.find('.input-box[data-child="'+i+'"]').removeClass('disabled');
			widget.find('.input-box[data-child="'+i+'"] .childage').attr('name','childBirthDate');
		}
		for (var j=parseInt(value)+1;j<=4;j++) {
			widget.find('.input-box[data-child="'+j+'"]').addClass('disabled');
			widget.find('.input-box[data-child="'+j+'"] .childage').removeAttr('name');
		}
	}
});
$('.booking-widget-section .collapse-btn').click(function(e){
	e.preventDefault();
	$('.booking-widget-section').toggleClass('opened');
});
if($('#desktop .checkin').length && $('#desktop .checkout').length) {
	var checkin, checkout;

	checkin = flatpickr($('#desktop .checkin')[0],{
		dateFormat: "Ymd",
		altFormat: "d.m.Y",
		altInput: true,
		altInputClass:"altdate",
		locale: $lang?$lang:"tr",
		minDate: $currentDate,
		disableMobile: true,
		position:'auto',
		monthSelectorType: 'static',
		onChange: function(selectedDates,dateStr,instance) {
			var tommorow = new Date(selectedDates[0]);
			tommorow.setDate(tommorow.getDate() + 1);
			checkout.set('minDate',tommorow);
			checkin.input.blur();
			checkin._input.blur();
		},
	});
	
	checkout = flatpickr($('#desktop .checkout')[0],{
		dateFormat: "Ymd",
		altFormat: "d.m.Y",
		altInput: true,
		altInputClass:"altdate",
		locale: $lang?$lang:"tr",
		minDate: $currentDate,
		disableMobile: true,
		position:'auto',
		monthSelectorType: 'static',
		onChange: function(selectedDates,dateStr,instance) {
			var yesterday = new Date(selectedDates[0]);
			yesterday.setDate(yesterday.getDate() - 1);
			checkin.set('maxDate',yesterday);
		},
	});
}
if($('#booking-box-float .checkin').length && $('#booking-box-float .checkout').length) {
	var checkinF, checkoutF;

	checkinF = flatpickr($('#booking-box-float .checkin')[0],{
		dateFormat: "Ymd",
		altFormat: "d.m.Y",
		altInput: true,
		altInputClass:"altcheckin",
		locale: $lang?$lang:"tr",
		minDate: $currentDate,
		disableMobile: "true",
		position: "center center",
		appendTo: $('#booking-box-float #datepicker-overflow')[0],
		onOpen: function(selectedDates,dateStr,instance) {
			$('#booking-box-float #datepicker-overflow').addClass('opened');
		},
		onClose: function(selectedDates,dateStr,instance) {
			$('#booking-box-float #datepicker-overflow').removeClass('opened');
			$('#booking-box-float .checkin').blur();
			$('#booking-box-float .altcheckin').blur();
		},
		onChange: function(selectedDates,dateStr,instance) {
			var tommorow = new Date(selectedDates[0]);
			tommorow.setDate(tommorow.getDate() + 1);
			checkoutF.set('minDate',tommorow);
			$('#booking-box-float #datepicker-overflow').removeClass('opened');
		},
	});
	
	checkoutF = flatpickr($('#booking-box-float .checkout')[0],{
		dateFormat: "Ymd",
		altFormat: "d.m.Y",
		altInput: true,
		altInputClass:"altcheckout",
		locale: $lang?$lang:"tr",
		minDate: $currentDate,
		disableMobile: "true",
		position: "center center",
		appendTo: $('#booking-box-float #datepicker-overflow')[0],
		onOpen: function(selectedDates,dateStr,instance) {
			$('#booking-box-float #datepicker-overflow').addClass('opened');
		},
		onClose: function(selectedDates,dateStr,instance) {
			$('#booking-box-float #datepicker-overflow').removeClass('opened');
			$('#booking-box-float .checkout').blur();
			$('#booking-box-float .altcheckout').blur();
		},
		onChange: function(selectedDates,dateStr,instance) {
			var yesterday = new Date(selectedDates[0]);
			yesterday.setDate(yesterday.getDate() - 1);
			checkinF.set('maxDate',yesterday);
			$('#booking-box-float #datepicker-overflow').removeClass('opened');
		},
	});
	
	$('#booking-box-float #datepicker-overflow .datepicker-close-btn').click(function(e){
		e.preventDefault();
		$('#booking-box-float #datepicker-overflow').removeClass('opened');
		setTimeout(function(){checkinF.close();checkoutF.close();},500);
	})
}
if($('#desktop input.childage').length) {
	var childMinDate = new Date((parseInt($currentDate.getFullYear())-12)+"-"+($currentDate.getMonth()+1)+"-"+$currentDate.getDate());
	$('#desktop input.childage').each(function() {
		$(this).flatpickr({
			dateFormat: "Ymd",
			altFormat: "d.m.Y",
			altInput: true,
			altInputClass:"altdate",
			locale: $lang?$lang:"tr",
			minDate: childMinDate,
			maxDate: $currentDate,
			disableMobile: "true",
			position: "auto center",
		});
	});
}
if($('#booking-box-float input.childage').length) {
	var childMinDate = new Date((parseInt($currentDate.getFullYear())-12)+"-"+($currentDate.getMonth()+1)+"-"+$currentDate.getDate());
	$('#booking-box-float input.childage').each(function() {
		$(this).flatpickr({
			dateFormat: "Ymd",
			altFormat: "d.m.Y",
			altInput: true,
			altInputClass:"altdate",
			locale: $lang?$lang:"tr",
			minDate: childMinDate,
			maxDate: $currentDate,
			disableMobile: "true",
			position: "center center",
			appendTo: $('#booking-box-float #datepicker-overflow')[0],
			onOpen: function(selectedDates,dateStr,instance) {
				$('#booking-box-float #datepicker-overflow').addClass('opened');
			},
			onClose: function(selectedDates,dateStr,instance) {
				$('#booking-box-float #datepicker-overflow').removeClass('opened');
				$('#booking-box-float input.childage').blur();
				$('#booking-box-float .altdate').blur();
			},
		});
	});
}
/*
if($('#desktop #checkin').length && $('#desktop #checkout').length) {
	var checkin, checkout,
	today = new Date();
	checkin = flatpickr($('#desktop #checkin')[0],{
		// dateFormat: "m/d/Y",
		dateFormat: "Ymd",
		altFormat: "d.m.Y",
		altInput: true,
		altInputClass:"altdate",
		locale: $lang?$lang:"tr",
		minDate: $currentDate,
		disableMobile: "true",
		position: "below",
		onChange: function(selectedDates,dateStr,instance) {
			var tommorow = new Date(selectedDates[0]),
				selectedCheckout = checkout.selectedDates[0];
			tommorow.setDate(tommorow.getDate() + 1);
			checkout.set('minDate',tommorow);
			checkout.changeMonth(12);
			checkout.changeMonth(-12);
			if(selectedCheckout){
				checkout.setDate(selectedCheckout);	
			}
		},
		onOpen: function(selectedDates,dateStr,instance) {
			var inputBox = $('#desktop #checkin'),
				calendarBox = $(instance.calendarContainer),
				inputBoxPosition = inputBox.offset().top + inputBox.innerHeight() + calendarBox.innerHeight(),
				screenHeight = (window.innerHeight || document.documentElement.clientHeight);
			if(($(window).scrollTop() + screenHeight)<inputBoxPosition) {
				calendarBox.css({'transform':'translateY(-'+(inputBox.innerHeight() + calendarBox.innerHeight())+'px)'});
			}
			else {
				calendarBox.css({'transform':'translateY(0)'});	
			}
		}
	});
	checkout = flatpickr($('#desktop #checkout')[0],{
		// dateFormat: "m/d/Y",
		dateFormat: "Ymd",
		altFormat: "d.m.Y",
		altInput: true,
		altInputClass:"altdate",
		locale: $lang?$lang:"tr",
		minDate: $currentDate,
		disableMobile: "true",
		position: "below",
		onOpen: function(selectedDates,dateStr,instance) {
			var inputBox = $('#desktop #checkout'),
				calendarBox = $(instance.calendarContainer),
				inputBoxPosition = inputBox.offset().top + inputBox.innerHeight() + calendarBox.innerHeight(),
				screenHeight = (window.innerHeight || document.documentElement.clientHeight);
			if(($(window).scrollTop() + screenHeight)<inputBoxPosition) {
				calendarBox.css({'transform':'translateY(-'+(inputBox.innerHeight() + calendarBox.innerHeight())+'px)'});
			}
			else {
				calendarBox.css({'transform':'translateY(0)'});	
			}
		}
	});
}
if($('#booking-box-float #checkin').length && $('#booking-box-float #checkout').length) {
	var checkinF, checkoutF,
	today = new Date();
	checkinF = flatpickr($('#booking-box-float #checkin')[0],{
		// dateFormat: "d.m.Y",
		dateFormat: "Ymd",
		altFormat: "d.m.Y",
		altInput: true,
		altInputClass:"altdate",
		locale: $lang?$lang:"tr",
		minDate: $currentDate,
		disableMobile: "true",
		position: "below",
		onChange: function(selectedDates,dateStr,instance) {
			var tommorow = new Date(selectedDates[0]),
				selectedCheckout = checkoutF.selectedDates[0];
			tommorow.setDate(tommorow.getDate() + 1);
			checkoutF.set('minDate',tommorow);
			checkoutF.changeMonth(12);
			checkoutF.changeMonth(-12);
			if(selectedCheckout){
				checkoutF.setDate(selectedCheckout);	
			}
		},
		onOpen: function(selectedDates,dateStr,instance) {
			var inputBox = $('#booking-box-float #checkin'),
				calendarBox = $(instance.calendarContainer),
				inputBoxPosition = inputBox.offset().top + inputBox.innerHeight() + calendarBox.innerHeight(),
				screenHeight = (window.innerHeight || document.documentElement.clientHeight);
			if(($(window).scrollTop() + screenHeight)<inputBoxPosition) {
				calendarBox.css({'transform':'translateY(-'+(inputBox.innerHeight() + calendarBox.innerHeight())+'px)'});
			}
			else {
				calendarBox.css({'transform':'translateY(0)'});	
			}
		}
	});
	checkoutF = flatpickr($('#booking-box-float #checkout')[0],{
		// dateFormat: "d.m.Y",
		dateFormat: "Ymd",
		altFormat: "d.m.Y",
		altInput: true,
		altInputClass:"altdate",
		locale: $lang?$lang:"tr",
		minDate: $currentDate,
		disableMobile: "true",
		position: "below",
		onOpen: function(selectedDates,dateStr,instance) {
			var inputBox = $('#booking-box-float #checkout'),
				calendarBox = $(instance.calendarContainer),
				inputBoxPosition = inputBox.offset().top + inputBox.innerHeight() + calendarBox.innerHeight(),
				screenHeight = (window.innerHeight || document.documentElement.clientHeight);
			if(($(window).scrollTop() + screenHeight)<inputBoxPosition) {
				calendarBox.css({'transform':'translateY(-'+(inputBox.innerHeight() + calendarBox.innerHeight())+'px)'});
			}
			else {
				calendarBox.css({'transform':'translateY(0)'});	
			}
		}
	});
}
if($('input.childage').length) {
	var today = new Date(),
		childMinDate = new Date((parseInt(today.getFullYear())-12)+"-"+(today.getMonth()+1)+"-"+today.getDate());
	$('input.childage').each(function() {
		var inp = $(this),
			datepick = flatpickr(inp[0],{
				// dateFormat: "d.m.Y",
				dateFormat: "Ymd",
				altFormat: "d.m.Y",
				altInput: true,
				altInputClass:"altdate",
				locale: $lang?$lang:"tr",
				minDate: childMinDate,
				maxDate: today,
				disableMobile: "true",
				position: "below",
				onOpen: function(selectedDates,dateStr,instance) {
					var inputBox = inp,
						calendarBox = $(instance.calendarContainer),
						inputBoxPosition = inputBox.offset().top + inputBox.innerHeight() + calendarBox.innerHeight(),
						screenHeight = (window.innerHeight || document.documentElement.clientHeight);			
					if(($(window).scrollTop() + screenHeight)<inputBoxPosition) {
						calendarBox.css({'transform':'translateY(-'+(inputBox.innerHeight() + calendarBox.innerHeight())+'px)'});
					}
					else {
						calendarBox.css({'transform':'translateY(0)'});	
					}
				}
			});
	});
}
*/
$('.booking-widget-section form').submit(function(e){
	e.preventDefault();
	var data = $(this).serialize(),
		link = $(this).attr('action'),
		url = link+'?'+data;
	window.open(url, '_blank');
});
$('#booking-box-float .close-btn').click(function(e) {
	e.preventDefault();
	$('#booking-box-float').removeClass('opened');
});
$('#mobile-extras .booking-btn, #header .booking-btn').click(function(e) {
	e.preventDefault();
	$('#floating-widget').addClass('opened');
});
$(document).click(function(e) {
	if(!$(e.target).closest('.select-box').length) {
		$('.select-box').removeClass('opened');
	}
	else {
		$('.select-box').not($(e.target).closest('.select-box')).removeClass('opened');
	}
});
/*********************************************** Widget ************************************************************/