var onLoadHandler = function() {
	captcha1 = grecaptcha.render('captcha1', {
		'sitekey': '6LebTzoUAAAAAGEMNnMUJGpqJfvq0YFps09CvmsR',
		'theme': 'dark'
	});
	captcha2 = grecaptcha.render('captcha2', {
		'sitekey' : '6LebTzoUAAAAAGEMNnMUJGpqJfvq0YFps09CvmsR',
		'theme': 'light'
	});
}

$(document).ready(function() {

	new WOW().init();

	$("#feedback-1,#feedback-2").submit(function() {
		var response1 = grecaptcha.getResponse(captcha1);
		var response2 = grecaptcha.getResponse(captcha2);
		if (response1.length == response2.length) {
			alert("Не пройдена captcha, попробуйте еще раз.")
		} else {
			$.ajax({
				type: "GET",
				url: "mail.php",
				data: $(this).serialize()
			}).done(function() {
				$.magnificPopup.close();
				alert("Ваше сообщение успешно отправено!");
				$("#feedback-1,#feedback-2")[0].reset();
				grecaptcha.reset();
				setTimeout(function() {
					$.fancybox.close();
				}, 1000);
			});
		}
		return false;
	});

	$(".contact-btn[type='reset']").click(function() {
		grecaptcha.reset(captcha1);
		grecaptcha.reset(captcha2);
	});

	$(".phone").mask("+7(000)000-00-00", {
		placeholder: "",
		clearIfNotMatch: true
	});

	$("a.scroll").mPageScroll2id();

	$(".toggle_mnu").click(function() {
		$(".sandwich").toggleClass("active");
		if ($(".top_mnu").is(":visible")) {
			$(".top_mnu").fadeOut(600);
			$(".top_mnu li a").removeClass("fadeInUp animated");
		} else {
			$(".top_mnu").fadeIn(600);
			$(".top_mnu li a").addClass("fadeInUp animated");
		};
	});

	$(".top_mnu ul a,.soc-links a").click(function() {
		$(".top_mnu").fadeOut(600);
		$(".sandwich").toggleClass("active");
	}).append("<span>");

	$(".toggle_mnu").addClass("fadeInRight animated");

	$('.popup-modal').magnificPopup({
		type:'inline',
		midClick: true,
		removalDelay: 350,
		mainClass: 'mfp-fade'
	});

	$('.u-class').magnificPopup({
		mainClass: 'mfp-zoom-in',
		delegate: 'a',
		type: 'image',
		tLoading: '',
		gallery:{
			enabled:true,
		},
		removalDelay: 300,
		callbacks: {
			beforeChange: function() {
				this.items[0].src = this.items[0].src + '?=' + Math.random(); 
			},
			open: function() {
				$.magnificPopup.instance.next = function() {
					var self = this;
					self.wrap.removeClass('mfp-image-loaded');
					setTimeout(function() { $.magnificPopup.proto.next.call(self); }, 120);
				}
				$.magnificPopup.instance.prev = function() {
					var self = this;
					self.wrap.removeClass('mfp-image-loaded');
					setTimeout(function() { $.magnificPopup.proto.prev.call(self); }, 120);
				}
			},
			imageLoadComplete: function() { 
				var self = this;
				setTimeout(function() { self.wrap.addClass('mfp-image-loaded'); }, 16);
			}
		}
	});

});

$(window).on('scroll', function(){
	$(".flow-content").css("right", "0");
});