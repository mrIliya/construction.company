$(function () {

	$('.projects__content .menu-btn').on('click', function (event) {
		let id = $(this).attr('data-id');

		$('.projects-gallery').find('.projects-gallery__item').removeClass('active').hide();

		$('.projects__menu').find('.menu-btn').removeClass('active');


		$(this).addClass('active');

		$('#' + id).addClass('active').fadeIn(1000, 'linear');

		return false;

	});

	$('.reviews__slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		centerMode: true,
		centerPadding: '60px',
		arrows: false,
		autoplay: true,
		autoplaySpeed: 2000,
		pauseOnHover: true,
		responsive: [
			{
				breakpoint: 1000,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					centerMode: true,
					centerPadding: '20px',
					arrows: false,
					autoplay: false,
				}
			},
			{
				breakpoint: 650,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					centerMode: false,
					autoplay: false,
				}
			}
		]
	});



	$("[data-scroll]").on('click', function () {
		event.preventDefault();

		let elementId = $(this).data('scroll');

		let elementOffset = $(elementId).offset().top;


		$("html, body").animate({
			scrollTop: elementOffset

		}, 700
		);
	});

	let menu = $('.header-menu');
	let header = $('#top');
	let headerH = header.innerHeight();
	let scrollPos = $(window).scrollTop();

	$(window).on('scroll load resize', function () {
		headerH = header.innerHeight();
		scrollPos = $(this).scrollTop();

		if (scrollPos > headerH) {
			menu.addClass('fixed');

		} else { menu.removeClass('fixed'); }

	});
	

	$('.menu-burger__btn').on('click', function () {
		$(this).toggleClass('active');

		$('.menu-burger').toggleClass('active');

	});


	AOS.init({
		disable: 'phone',
		once: true,
	});

});