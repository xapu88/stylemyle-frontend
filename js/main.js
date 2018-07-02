function responsiveMenu()
{
    $('#menu_mobile').click(function(e)
        {
            e.preventDefault();
            $('#touchscreen_menu').animate({left: "0px"}, 300);
            $('#responsive_menu').css('box-shadow','5px 0px 3px rgba(0,0,0,0.15)');
        });

    $('#icon_mobile_menu_close').click(function(e)
        {
            e.preventDefault();
            $('#touchscreen_menu').animate({left: "-280px"}, 300);
            $('#responsive_menu').css('box-shadow','none');
        });

        $('.arrow_mobile_menu').click(function(e)
        {
            e.preventDefault();
            if($(this).siblings('ul').is(':hidden'))
            {
                $(this).siblings('ul').slideDown(300);
            }
            else
            {
                $(this).siblings('ul').slideUp(300);
            }
        });
}

function mobileSearch()
{
	$('#search_mobile').click(function(e)
	{
		e.preventDefault();
		if($('#mobile_search_container').is(':hidden'))
		{
			$('#mobile_search_container').fadeIn(300);
			$('#mobile_search_container #mobile_search_field').focus();
		}
		else
		{}
	});

	$('.mobile_search_close').click(function(e)
	{
		e.preventDefault();
		$('#mobile_search_container').fadeOut(300);
	});

	$(document).mouseup(function(e)
	{
    	var container = $("#mobile_search_container");
        if (!container.is(e.target) && container.has(e.target).length === 0)
	    {
    		$("#mobile_search_container").fadeOut(300);
    		$('#mobile_search_field').val('');
		}
	});
}

function couponModal()
{
	$('#modal_container').delay(2000).fadeIn(300);
	$('#coupon_close').click(function(e)
	{
		e.preventDefault();
		$('#modal_container').fadeOut(300);
	});

	$(document).mouseup(function(e)
	{
    	var container = $("#coupon");
        if (!container.is(e.target) && container.has(e.target).length === 0)
	    {
    		$("#modal_container").fadeOut(300);
		}
	});
}

function sizeChart()
{
	$('.lnk_size_chart').click(function(e)
	{
		e.preventDefault();
		$('#chart_container').fadeIn(300);
	});


	$('#chart_close').click(function(e)
	{
		e.preventDefault();
		$('#chart_container').fadeOut(300);
	});

	$(document).mouseup(function(e)
	{
    	var container = $("#size_chart");
        if (!container.is(e.target) && container.has(e.target).length === 0)
	    {
    		$("#chart_container").fadeOut(300);
		}
	});
}

function backToTop()
{
	var viewportWidth = $(window).width();
    var offset = 220;
    var duration = 300;
    $(window).scroll(function()
        {

        	if (viewportWidth>=768)
        	{
        		if ($(this).scrollTop() > offset)
            {
            	$('.back-to-top').fadeIn(duration);
	        	}
	        	else
	        	{
	            	$('.back-to-top').fadeOut(duration);
	        	}
        	}
    });

    $('.back-to-top').click(function(e)
    {
        e.preventDefault();
        $('html, body').animate({scrollTop: 0}, duration);
    })
}

function headerFixed()
{
	$(window).scroll(function()
	{
	if ($(this).scrollTop() > 100)
	{
	    $('header').addClass("header_fixed");
	}
  	else
	  {
	    $('header').removeClass("header_fixed");
	  }
	});
}

function homepageSlider()
{
	$('.trending_choices').slick({
	dots: false,
  	infinite: true,
  	speed: 300,
  	slidesToShow: 4,
  	slidesToScroll: 1,
  	autoplay: true,
		autoplaySpeed: 2000,
		prevArrow: '<a href="" class="slick-prev"><img src="images/arrow-prev.png"></a>',
		nextArrow: '<a href="" class="slick-next"><img src="images/arrow-next.png"></a>',
	responsive: [
	{
	  breakpoint: 991,
	  settings: {
	    slidesToShow: 4,
	    slidesToScroll: 1,
	    infinite: true,
	    dots: true
	  }
	},
	{
	  breakpoint: 767,
	  settings: {
	    slidesToShow: 4,
	    slidesToScroll: 1,
	    infinite: true,
	    dots: true,
	    arrows: false
	  }
	},
	{
	  breakpoint: 600,
	  settings: {
	    slidesToShow: 3,
	    slidesToScroll: 1,
	    infinite: true,
	    dots: true,
	    arrows: false
	  }
	},
	{
	  breakpoint: 480,
	  settings: {
	    slidesToShow: 3,
	    slidesToScroll: 1,
	    infinite: true,
	    dots: false,
	    arrows: false
	  }
	}
	]
		});
}

function productSpecs()
{
	$('.prod_specs_nav a').click(function(e)
	{
		e.preventDefault();
		var index = $(this).index();
		if ($(this).hasClass('prod_spec_active'))
		{}
		else if (index == 0)
		{
			$('.prod_spec_active').removeClass('prod_spec_active');
			$(this).addClass('prod_spec_active');
			$('.prod_spec_visible').slideUp(300).removeClass('prod_spec_visible');
			$('.product_spec_content:eq(0)').slideDown(300).addClass('prod_spec_visible');
		}
		else if (index == 1)
		{
			$('.prod_spec_active').removeClass('prod_spec_active');
			$(this).addClass('prod_spec_active');
			$('.prod_spec_visible').slideUp(300).removeClass('prod_spec_visible');
			$('.product_spec_content:eq(1)').slideDown(300).addClass('prod_spec_visible');
		}
		else if (index == 2)
		{
			$('.prod_spec_active').removeClass('prod_spec_active');
			$(this).addClass('prod_spec_active');
			$('.prod_spec_visible').slideUp(300).removeClass('prod_spec_visible');
			$('.product_spec_content:eq(2)').slideDown(300).addClass('prod_spec_visible');
		}
	});
}

function productImages()
{
	$('.pgwSlider').pgwSlider(
	{
		listPosition: 'left',
		autoSlide: false,
		displayControls: true,
		verticalCentering: true
	});
}

function filterMenu()
{
	$('.filter_container>ul>li>a').click(function(e)
	{
		e.preventDefault();
		if ($(this).next('ul').is(':hidden'))
		{
			$(this).next('ul').slideDown(300);
			$(this).children('span').removeClass('glyphicon glyphicon-plus').addClass('glyphicon glyphicon-minus');
		}
		else
		{
			$(this).next('ul').slideUp(300);
			$(this).children('span').removeClass('glyphicon glyphicon-minus').addClass('glyphicon glyphicon-plus');
		}
	});

	$('.filter_container>ul>li>ul>li>a').click(function(e)
	{
		e.preventDefault();
		if ($(this).next('ul').is(':hidden'))
		{
			$(this).css('font-weight', 500);
			$(this).next('ul').slideDown(300);
			$(this).children('span').removeClass('glyphicon glyphicon-chevron-right').addClass('glyphicon glyphicon-chevron-down');
		}
		else
		{
			$(this).css('font-weight', 300);
			$(this).next('ul').slideUp(300);
			$(this).children('span').removeClass('glyphicon glyphicon-chevron-down').addClass('glyphicon glyphicon-chevron-right');
		}
	})
}

function infoAccordian()
{
	$('.info_accord>li>a').click(function(e)
	{
		e.preventDefault();
		if ($(this).next('.open_info').is(':hidden'))
		{
			// $('.open_info:visible').slideUp(300);
			$(this).next('.open_info').slideDown(300);
			$('.info_accord_open').removeClass();
			//$(this).parent('li').addClass('info_accord_open');
			$(this).children('span').removeClass('glyphicon glyphicon-plus').addClass('glyphicon glyphicon-minus');
		}
		else
		{
			$(this).next('.open_info').slideUp(300);
			$(this).children('span').removeClass('glyphicon glyphicon-minus').addClass('glyphicon glyphicon-plus');
			//$(this).parent('li').removeClass('info_accord_open');
		}
	});
}

function search()
{
	$('#search_field').click(function()
							{
		$(this).css('width', 200);
	})
}

function colorChoice()
{
	$('.product_colors_container a').click(function(e)
	{
		e.preventDefault();
		if ($(this).hasClass('chosen_color'))
		{

		}
		else
		{
			$('.chosen_color').removeClass('chosen_color');
			$(this).addClass('chosen_color');
		}
	})
}

function designerList()
{
	$('#designers_alph li a[href^="#"]').click(function(e)
	{
 		e.preventDefault();
    	$('html,body').animate({scrollTop:$(this.hash).offset().top -120}, 1000);
    	$('.letter_selected').removeClass();
    	$(this.hash).next('ul').addClass('letter_selected');
 	});
}

function designerLetterSelected()
{
	$('.designers_section>h3').click(function()
	{
		if ($(this).next('ul').hasClass('letter_selected'))
		{}
		else
		{
			$('.letter_selected').removeClass();
			$(this).next('ul').addClass('letter_selected');
		}
	});
}

function countriesList()
{
	$('#countries_alph li a[href^="#"]').click(function(e)
	{
 		e.preventDefault();
    	$('html,body').animate({scrollTop:$(this.hash).offset().top -120}, 1000);
    	$('.letter_selected').removeClass();
    	$(this.hash).next('ul').addClass('letter_selected');
 	});
}

function countriesLetterSelected()
{
	$('.countries_section>h3').click(function()
	{
		if ($(this).next('ul').hasClass('letter_selected'))
		{}
		else
		{
			$('.letter_selected').removeClass();
			$(this).next('ul').addClass('letter_selected');
		}
	});
}

function numbersOnly()
{
	$(".cart_qty").keydown(function (e)
	{
        // Allow: backspace, delete, tab, escape, enter and .
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
             // Allow: Ctrl/cmd+A
            (e.keyCode == 65 && (e.ctrlKey === true || e.metaKey === true)) ||
             // Allow: Ctrl/cmd+C
            (e.keyCode == 67 && (e.ctrlKey === true || e.metaKey === true)) ||
             // Allow: Ctrl/cmd+X
            (e.keyCode == 88 && (e.ctrlKey === true || e.metaKey === true)) ||
             // Allow: home, end, left, right
            (e.keyCode >= 35 && e.keyCode <= 39)) {
                 // let it happen, don't do anything
                 return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    });
}

function ccardLimits()
{
	$('#cvv2').formance('format_credit_card_cvc');
	$('#card_exp').formance('format_credit_card_expiry');
	$('#cc_num').formance('format_credit_card_number');
}

function paymentFunction()
{
	if ($('#new_card').is(':checked') & $('#new_payment_options_container').is(':hidden'))
	{
		$('#new_payment_options_container').slideDown(0);
		$("#existing_cards input[type=radio]").attr('disabled', true);
	};

	if ($('#check').is(':checked')&& $('#ccard_info').is(':visible'))
	{
		$('#ccard_info').slideUp(0);
	}

	$('.checkout_payment_method_new').click(function()
	{
		if ($(this).children('#new_card').is(':checked'))
		{

		}
		else
		{
			$(this).children('#new_card').prop('checked');
			$('#new_payment_options_container').slideDown(300);
			$("#existing_cards input[type=radio]").attr('disabled', true);
		}
	});

	$('.checkout_payment_method_existing').click(function()
	{
		if ($(this).children('#existing_card').is(':checked'))
		{

		}
		else
		{
			$('#new_payment_options_container').slideUp(300);
			$("#existing_cards input[type=radio]").attr('disabled', false);
		}
	});

	$('#new_payment_options_container label').click(function()
	{
		if ($(this).children('input[type=radio]').is('#check') && $('#ccard_info').is(':visible'))
		{
			$('#ccard_info').slideUp(300);
		}
		else if ($(this).children('input[type=radio]').not('#check') && $('#ccard_info').is(':hidden'))
		{
			$('#ccard_info').slideDown(300);
		}
	});
}

function mainMenu()
{
	// $('#main_menu>li').mouseover(function()
	// {
	// 	if ($(this).children('.top_submenu_container').is(':visible'))
	// 	{

	// 	}
	// 	else
	// 	{
	// 		$('.top_submenu_container:visible').fadeOut(200);
	// 		$(this).children('.top_submenu_container').fadeIn(200);
	// 		$('.sub_sub_menu_container:visible').fadeOut(200);
	// 		$('.top_submenu_container>ul>li:nth-of-type(1) .sub_sub_menu_container').fadeIn(0);
	// 	}
	// });

	// $('#main_menu>li').mouseleave(function()
	// {
	// 	$(this).children('.top_submenu_container').fadeOut(200);
	// });

	// $('.top_submenu_container>ul>li').mouseover(function()
	// {
	// 	if ($(this).children('.sub_sub_menu_container').is(':visible'))
	// 	{

	// 	}
	// 	else
	// 	{
	// 		$('.sub_sub_menu_container:visible').fadeOut(200);
	// 		$(this).children('.sub_sub_menu_container').fadeIn(200);
	// 	}
	// });

	// $('#main_menu>li>a').mouseover(function()
	// {
	// 	var menuItem = $(this).attr('id');
	// 	switch (menuItem)
	// 	{
	// 		case 'top_women':
	// 			if ($('#header_bottom #menu_women').is(':visible'))
	// 			{
	// 			}
	// 			else
	// 			{
	// 				$('#header_bottom ul:visible').fadeOut(0);
	// 				$('#header_bottom #menu_women').fadeIn(300).css('display','inline');
	// 			}
	// 			break;

	// 		case 'top_men':
	// 			if ($('#header_bottom #menu_men').is(':visible'))
	// 			{
	// 			}
	// 			else
	// 			{
	// 				$('#header_bottom ul:visible').fadeOut(0);
	// 				$('#header_bottom #menu_men').fadeIn(300).css('display','inline');
	// 			}
	// 			break;

	// 		case 'top_kids':
	// 			if ($('#header_bottom #menu_kids').is(':visible'))
	// 			{
	// 			}
	// 			else
	// 			{
	// 				$('#header_bottom ul:visible').fadeOut(0);
	// 				$('#header_bottom #menu_kids').fadeIn(300).css('display','inline');
	// 			}
	// 			break;
	// 	}
	// });

	$('#header_bottom ul li a').hoverIntent(function()
	{
		if($(this).hasClass('active_sub'))
		{

		}
		else
		{
			$('.active_sub').removeClass();
			$(this).addClass('active_sub');
		}

		var menuItem = $(this).attr('id');
		switch (menuItem)
		{
			case 'top_new':
				if ($('#sub_new').is(':visible'))
				{
				}
				else
				{
					$('#sub_all>.container:visible').fadeOut(0);
					$('#sub_new').fadeIn(300);
				}
				break;

			case 'top_designers':
				if ($('#sub_designers').is(':visible'))
				{
				}
				else
				{
					$('#sub_all>.container:visible').fadeOut(0);
					$('#sub_designers').fadeIn(300);
				}
				break;

			case 'top_clothing':
				if ($('#sub_clothing').is(':visible'))
				{
				}
				else
				{
					$('#sub_all>.container:visible').fadeOut(0);
					$('#sub_clothing').fadeIn(300);
				}
				break;

			case 'top_shoes':
				if ($('#sub_shoes').is(':visible'))
				{
				}
				else
				{
					$('#sub_all>.container:visible').fadeOut(0);
					$('#sub_shoes').fadeIn(300);
				}
				break;

			case 'top_bags':
				if ($('#sub_bags').is(':visible'))
				{
				}
				else
				{
					$('#sub_all>.container:visible').fadeOut(0);
					$('#sub_bags').fadeIn(300);
				}
				break;

			case 'top_accessories':
				if ($('#sub_accessories').is(':visible'))
				{
				}
				else
				{
					$('#sub_all>.container:visible').fadeOut(0);
					$('#sub_accessories').fadeIn(300);
				}
				break;
		}
		$('#header_submenu_container').slideDown(300);
		$('#menu_overlay').fadeIn(300);

		$(document).mouseover(function(e)
		{
	    	var container = $("#header_bottom>ul");
	    	var container2 = $("#header_submenu_container");
	        if (!container.is(e.target) && container.has(e.target).length === 0 && !container2.is(e.target) && container2.has(e.target).length === 0)
		    {
	    		$('#header_submenu_container').slideUp(300);
				$('#menu_overlay').fadeOut(300);
				$('.active_sub').removeClass();
				$('#sub_all>.container:visible').fadeOut(300);
			}
		});


	},
	function()
	{
		// $('#header_submenu_container').slideUp(300);
		// $('#menu_overlay').fadeOut(300);
	});
}

function clientProfile()
{

	$('.acc_gender_select').val('').trigger('chosen:updated');

	$('.acc_country_select').chosen(
		{
			allow_single_deselect: true,
			width: "100%"
		});

	$('.acc_gender_select').chosen(
		{
			width: "100%"
		}).change(function()
		{
			var gender = $('.acc_gender_select').chosen().val();

			switch (gender)
			{
				case 'female':
					$('.size_default').fadeOut(0);
					$('.size_female').fadeIn(0);
					$('.size_male').fadeOut(0);
					$('.size_male .acc_size_country_select').val('').trigger('chosen:updated');
					$('.size_male .acc_size_select').val('').prop('disabled', true).attr('data-placeholder', 'Select Nationality').trigger('chosen:updated');
					$('.size_male .acc_shoe_size_country_select').val('').trigger('chosen:updated');
					$('.size_male .acc_shoe_size_select').val('').prop('disabled', true).attr('data-placeholder', 'Select Nationality').trigger('chosen:updated');
					$('.size_female #size_country_select').prop('disabled', false).attr('data-placeholder', 'Select from list').trigger('chosen:updated');
					$('.size_female #shoe_size_country_select').prop('disabled', false).attr('data-placeholder', 'Select from list').trigger('chosen:updated');

					$('.size_female .acc_size_country_select').chosen(
						{
							width: "100%"
						}).change(function()
						{
							var sizeFemaleStandard = '<option value="female_xxxs">XXXS</option>';
								sizeFemaleStandard +='<option value="female_xxs">XXS</option>';
								sizeFemaleStandard +='<option value="female_xs">XS</option>';
								sizeFemaleStandard +='<option value="female_s">S</option>';
								sizeFemaleStandard +='<option value="female_m">M</option>';
								sizeFemaleStandard +='<option value="female_l">L</option>';
								sizeFemaleStandard +='<option value="female_xl">XL</option>';
								sizeFemaleStandard +='<option value="female_xxl">XXL</option>';
								sizeFemaleStandard +='<option value="female_xxxl">XXXL</option>';

							var sizeFemaleItaly = '<option value="female_it_36">36</option>';
								sizeFemaleItaly +='<option value="female_it_38">38</option>';
								sizeFemaleItaly +='<option value="female_it_40">40</option>';
								sizeFemaleItaly +='<option value="female_it_42">42</option>';
								sizeFemaleItaly +='<option value="female_it_44">44</option>';
								sizeFemaleItaly +='<option value="female_it_46">46</option>';
								sizeFemaleItaly +='<option value="female_it_48">48</option>';
								sizeFemaleItaly +='<option value="female_it_50">50</option>';
								sizeFemaleItaly +='<option value="female_it_52">52</option>';

							var sizeFemaleUs = '<option value="female_us_0">0</option>';
								sizeFemaleUs +='<option value="female_us_2">2</option>';
								sizeFemaleUs +='<option value="female_us_4">4</option>';
								sizeFemaleUs +='<option value="female_us_6">6</option>';
								sizeFemaleUs +='<option value="female_us_8">8</option>';
								sizeFemaleUs +='<option value="female_us_10">10</option>';
								sizeFemaleUs +='<option value="female_us_12">12</option>';
								sizeFemaleUs +='<option value="female_us_14">14</option>';
								sizeFemaleUs +='<option value="female_us_16">16</option>';


							var	sizeFemaleUk = '<option value="female_uk_4">4</option>';
								sizeFemaleUk +='<option value="female_uk_6">6</option>';
								sizeFemaleUk +='<option value="female_uk_8">8</option>';
								sizeFemaleUk +='<option value="female_uk_10">10</option>';
								sizeFemaleUk +='<option value="female_uk_12">12</option>';
								sizeFemaleUk +='<option value="female_uk_14">14</option>';
								sizeFemaleUk +='<option value="female_uk_16">16</option>';
								sizeFemaleUk +='<option value="female_uk_18">18</option>';
								sizeFemaleUk +='<option value="female_uk_20">20</option>';

							var	sizeFemaleFrance = '<option value="female_france_32">32</option>';
								sizeFemaleFrance +='<option value="female_france_34">34</option>';
								sizeFemaleFrance +='<option value="female_france_36">36</option>';
								sizeFemaleFrance +='<option value="female_france_38">38</option>';
								sizeFemaleFrance +='<option value="female_france_40">40</option>';
								sizeFemaleFrance +='<option value="female_france_42">42</option>';
								sizeFemaleFrance +='<option value="female_france_44">44</option>';
								sizeFemaleFrance +='<option value="female_france_46">46</option>';
								sizeFemaleFrance +='<option value="female_france_48">48</option>';

							var	sizeFemaleBrazil = '<option value="female_brazil_34">34/XPP</option>';
								sizeFemaleBrazil +='<option value="female_brazil_36">36/PP</option>';
								sizeFemaleBrazil +='<option value="female_brazil_38">38/P</option>';
								sizeFemaleBrazil +='<option value="female_brazil_40">40/M</option>';
								sizeFemaleBrazil +='<option value="female_brazil_42">42/M</option>';
								sizeFemaleBrazil +='<option value="female_brazil_44">44/G</option>';
								sizeFemaleBrazil +='<option value="female_brazil_46">46/G</option>';
								sizeFemaleBrazil +='<option value="female_brazil_48">48/GG</option>';
								sizeFemaleBrazil +='<option value="female_brazil_50">50/GG</option>';

							var	sizeFemaleGerman = '<option value="female_german_30">30</option>';
								sizeFemaleGerman +='<option value="female_german_32">32</option>';
								sizeFemaleGerman +='<option value="female_german_34">34</option>';
								sizeFemaleGerman +='<option value="female_german_36">46</option>';
								sizeFemaleGerman +='<option value="female_german_38">48</option>';
								sizeFemaleGerman +='<option value="female_german_40">40</option>';
								sizeFemaleGerman +='<option value="female_german_42">42</option>';
								sizeFemaleGerman +='<option value="female_german_44">44</option>';
								sizeFemaleGerman +='<option value="female_german_46">46</option>';

							var	sizeFemaleJapan = '<option value="female_japan_3">3</option>';
								sizeFemaleJapan +='<option value="female_japan_5">5</option>';
								sizeFemaleJapan +='<option value="female_japan_7">7</option>';
								sizeFemaleJapan +='<option value="female_japan_9">9</option>';
								sizeFemaleJapan +='<option value="female_japan_11">11</option>';
								sizeFemaleJapan +='<option value="female_japan_13">13</option>';
								sizeFemaleJapan +='<option value="female_japan_15">15</option>';
								sizeFemaleJapan +='<option value="female_japan_17">17</option>';
								sizeFemaleJapan +='<option value="female_japan_19">19</option>';

							var	sizeFemaleKorea = '<option value="female_korea_3">-</option>';
								sizeFemaleKorea +='<option value="female_korea_5">33</option>';
								sizeFemaleKorea +='<option value="female_korea_7">44</option>';
								sizeFemaleKorea +='<option value="female_korea_9">55</option>';
								sizeFemaleKorea +='<option value="female_korea_11">66</option>';
								sizeFemaleKorea +='<option value="female_korea_13">77</option>';
								sizeFemaleKorea +='<option value="female_korea_15">88</option>';
								sizeFemaleKorea +='<option value="female_korea_17">99</option>';
								sizeFemaleKorea +='<option value="female_korea_19">-</option>';

							var	sizeFemaleChina = '<option value="female_china_145">145/73A</option>';
								sizeFemaleChina +='<option value="female_china_150">150/76A</option>';
								sizeFemaleChina +='<option value="female_china_155">155/80A</option>';
								sizeFemaleChina +='<option value="female_china_160">160/84A</option>';
								sizeFemaleChina +='<option value="female_china_165">165/88A</option>';
								sizeFemaleChina +='<option value="female_china_170">170/92A</option>';
								sizeFemaleChina +='<option value="female_china_175">175/96A</option>';
								sizeFemaleChina +='<option value="female_china_180">180/100A</option>';
								sizeFemaleChina +='<option value="female_china_185">185/104A</option>';

							var	sizeFemaleAustralia = '<option value="female_australia_4">4</option>';
								sizeFemaleAustralia +='<option value="female_australia_6">6</option>';
								sizeFemaleAustralia +='<option value="female_australia_8">8</option>';
								sizeFemaleAustralia +='<option value="female_australia_10">10</option>';
								sizeFemaleAustralia +='<option value="female_australia_12">12</option>';
								sizeFemaleAustralia +='<option value="female_australia_14">14</option>';
								sizeFemaleAustralia +='<option value="female_australia_16">16</option>';
								sizeFemaleAustralia +='<option value="female_australia_18">18</option>';
								sizeFemaleAustralia +='<option value="female_australia_20">20</option>';

							var	sizeFemaleRussia = '<option value="female_russia_38">38</option>';
								sizeFemaleRussia +='<option value="female_russia_40">40</option>';
								sizeFemaleRussia +='<option value="female_russia_42">42</option>';
								sizeFemaleRussia +='<option value="female_russia_44">44</option>';
								sizeFemaleRussia +='<option value="female_russia_46">46</option>';
								sizeFemaleRussia +='<option value="female_russia_48">48</option>';
								sizeFemaleRussia +='<option value="female_russia_50">50</option>';
								sizeFemaleRussia +='<option value="female_russia_52">52</option>';
								sizeFemaleRussia +='<option value="female_russia_54">54</option>';

							var values = $('.size_female .acc_size_country_select').chosen().val();

							switch (values)
							{
								case 'Standard':
									$('.size_female #size_select').children('option:not(:first)').remove();
									$('.size_female #size_select').prop("disabled", false).attr("data-placeholder", "Select from list").append(sizeFemaleStandard).trigger('chosen:updated');
									break;
								case 'Italy':
									$('.size_female #size_select').children('option:not(:first)').remove();
									$('.size_female #size_select').prop("disabled", false).attr("data-placeholder", "Select from list").append(sizeFemaleItaly).trigger('chosen:updated');
									break;
								case 'US':
									$('.size_female #size_select').children('option:not(:first)').remove();
									$('.size_female #size_select').prop("disabled", false).attr("data-placeholder", "Select from list").append(sizeFemaleUs).trigger('chosen:updated');
									break;
								case 'UK':
									$('.size_female #size_select').children('option:not(:first)').remove();
									$('.size_female #size_select').prop("disabled", false).attr("data-placeholder", "Select from list").append(sizeFemaleUk).trigger('chosen:updated');
									break;
								case 'France':
									$('.size_female #size_select').children('option:not(:first)').remove();
									$('.size_female #size_select').prop("disabled", false).attr("data-placeholder", "Select from list").append(sizeFemaleFrance).trigger('chosen:updated');
									break;
								case 'Japan':
									$('.size_female #size_select').children('option:not(:first)').remove();
									$('.size_female #size_select').prop("disabled", false).attr("data-placeholder", "Select from list").append(sizeFemaleJapan).trigger('chosen:updated');
									break;
								case 'Brazil':
									$('.size_female #size_select').children('option:not(:first)').remove();
									$('.size_female #size_select').prop("disabled", false).attr("data-placeholder", "Select from list").append(sizeFemaleBrazil).trigger('chosen:updated');
									break;
								case 'German_danish':
									$('.size_female #size_select').children('option:not(:first)').remove();
									$('.size_female #size_select').prop("disabled", false).attr("data-placeholder", "Select from list").append(sizeFemaleGerman).trigger('chosen:updated');
									break;
								case 'Korea':
									$('.size_female #size_select').children('option:not(:first)').remove();
									$('.size_female #size_select').prop("disabled", false).attr("data-placeholder", "Select from list").append(sizeFemaleKorea).trigger('chosen:updated');
									break;
								case 'China':
									$('.size_female #size_select').children('option:not(:first)').remove();
									$('.size_female #size_select').prop("disabled", false).attr("data-placeholder", "Select from list").append(sizeFemaleChina).trigger('chosen:updated');
									break;
								case 'Australia':
									$('.size_female #size_select').children('option:not(:first)').remove();
									$('.size_female #size_select').prop("disabled", false).attr("data-placeholder", "Select from list").append(sizeFemaleAustralia).trigger('chosen:updated');
									break;
								case 'Russia':
									$('.size_female #size_select').children('option:not(:first)').remove();
									$('.size_female #size_select').prop("disabled", false).attr("data-placeholder", "Select from list").append(sizeFemaleRussia).trigger('chosen:updated');
									break;
							}
						});


						$('.size_female .acc_shoe_size_country_select').chosen(
						{
							width: "100%"
						}).change(function()
						{

							var ShoeSizeFemaleItaly = '<option value="female_shoe_it_34">34</option>';
								ShoeSizeFemaleItaly +='<option value="female_shoe_it_34.5">34.5</option>';
								ShoeSizeFemaleItaly +='<option value="female_shoe_it_35">35</option>';
								ShoeSizeFemaleItaly +='<option value="female_shoe_it_35.5">35.5</option>';
								ShoeSizeFemaleItaly +='<option value="female_shoe_it_36">36</option>';
								ShoeSizeFemaleItaly +='<option value="female_shoe_it_36.5">36.5</option>';
								ShoeSizeFemaleItaly +='<option value="female_shoe_it_37">37</option>';
								ShoeSizeFemaleItaly +='<option value="female_shoe_it_37.5">37.5</option>';
								ShoeSizeFemaleItaly +='<option value="female_shoe_it_38">38</option>';
								ShoeSizeFemaleItaly +='<option value="female_shoe_it_38.5">38.5</option>';
								ShoeSizeFemaleItaly +='<option value="female_shoe_it_39">39</option>';
								ShoeSizeFemaleItaly +='<option value="female_shoe_it_39.5">39.5</option>';
								ShoeSizeFemaleItaly +='<option value="female_shoe_it_40">40</option>';
								ShoeSizeFemaleItaly +='<option value="female_shoe_it_40.5">40.5</option>';
								ShoeSizeFemaleItaly +='<option value="female_shoe_it_41">41</option>';

							var	ShoeSizeFemaleFrance = '<option value="female_shoe_france_35">35</option>';
								ShoeSizeFemaleFrance +='<option value="female_shoe_france_35.5">35.5</option>';
								ShoeSizeFemaleFrance +='<option value="female_shoe_france_36">36</option>';
								ShoeSizeFemaleFrance +='<option value="female_shoe_france_36.5">36.5</option>';
								ShoeSizeFemaleFrance +='<option value="female_shoe_france_37">37</option>';
								ShoeSizeFemaleFrance +='<option value="female_shoe_france_37.5">37.5</option>';
								ShoeSizeFemaleFrance +='<option value="female_shoe_france_38">38</option>';
								ShoeSizeFemaleFrance +='<option value="female_shoe_france_38.5">38.5</option>';
								ShoeSizeFemaleFrance +='<option value="female_shoe_france_39">39</option>';
								ShoeSizeFemaleFrance +='<option value="female_shoe_france_39.5">39.5</option>';
								ShoeSizeFemaleFrance +='<option value="female_shoe_france_40">40</option>';
								ShoeSizeFemaleFrance +='<option value="female_shoe_france_40.5">40.5</option>';
								ShoeSizeFemaleFrance +='<option value="female_shoe_france_41">41</option>';
								ShoeSizeFemaleFrance +='<option value="female_shoe_france_41.5">41.5</option>';
								ShoeSizeFemaleFrance +='<option value="female_shoe_france_42">42</option>';

							var ShoeSizeFemaleUs = '<option value="female_shoe_us_4">4</option>';
								ShoeSizeFemaleUs +='<option value="female_shoe_us_4.5">4.5</option>';
								ShoeSizeFemaleUs +='<option value="female_shoe_us_5">5</option>';
								ShoeSizeFemaleUs +='<option value="female_shoe_us_5.5">5.5</option>';
								ShoeSizeFemaleUs +='<option value="female_shoe_us_6">6</option>';
								ShoeSizeFemaleUs +='<option value="female_shoe_us_6.5">6.5</option>';
								ShoeSizeFemaleUs +='<option value="female_shoe_us_7">7</option>';
								ShoeSizeFemaleUs +='<option value="female_shoe_us_7.5">7.5</option>';
								ShoeSizeFemaleUs +='<option value="female_shoe_us_8">8</option>';
								ShoeSizeFemaleUs +='<option value="female_shoe_us_8.5">8.5</option>';
								ShoeSizeFemaleUs +='<option value="female_shoe_us_9">9</option>';
								ShoeSizeFemaleUs +='<option value="female_shoe_us_9.5">9.5</option>';
								ShoeSizeFemaleUs +='<option value="female_shoe_us_10">10</option>';
								ShoeSizeFemaleUs +='<option value="female_shoe_us_10.5">10.5</option>';
								ShoeSizeFemaleUs +='<option value="female_shoe_us_11">11</option>';


							var	ShoeSizeFemaleUk = '<option value="female_shoe_uk_1">1</option>';
								ShoeSizeFemaleUk +='<option value="female_shoe_uk_1.5">1.5</option>';
								ShoeSizeFemaleUk +='<option value="female_shoe_uk_2">2</option>';
								ShoeSizeFemaleUk +='<option value="female_shoe_uk_2.5">2.5</option>';
								ShoeSizeFemaleUk +='<option value="female_shoe_uk_3">3</option>';
								ShoeSizeFemaleUk +='<option value="female_shoe_uk_3.5">3.5</option>';
								ShoeSizeFemaleUk +='<option value="female_shoe_uk_4">4</option>';
								ShoeSizeFemaleUk +='<option value="female_shoe_uk_4.5">4.5</option>';
								ShoeSizeFemaleUk +='<option value="female_shoe_uk_5">5</option>';
								ShoeSizeFemaleUk +='<option value="female_shoe_uk_5.5">5.5</option>';
								ShoeSizeFemaleUk +='<option value="female_shoe_uk_6">6</option>';
								ShoeSizeFemaleUk +='<option value="female_shoe_uk_6.5">6.5</option>';
								ShoeSizeFemaleUk +='<option value="female_shoe_uk_7">7</option>';
								ShoeSizeFemaleUk +='<option value="female_shoe_uk_7.5">7.5</option>';
								ShoeSizeFemaleUk +='<option value="female_shoe_uk_8">8</option>';

							var	ShoeSizeFemaleBrazil = '<option value="female_shoe_brazil_33">33</option>';
								ShoeSizeFemaleBrazil +='<option value="female_shoe_brazil_33.5">33.5</option>';
								ShoeSizeFemaleBrazil +='<option value="female_shoe_brazil_34">34</option>';
								ShoeSizeFemaleBrazil +='<option value="female_shoe_brazil_34.5">34.5</option>';
								ShoeSizeFemaleBrazil +='<option value="female_shoe_brazil_35">35</option>';
								ShoeSizeFemaleBrazil +='<option value="female_shoe_brazil_35.5">35.5</option>';
								ShoeSizeFemaleBrazil +='<option value="female_shoe_brazil_36">36</option>';
								ShoeSizeFemaleBrazil +='<option value="female_shoe_brazil_36.5">36.5</option>';
								ShoeSizeFemaleBrazil +='<option value="female_shoe_brazil_37">37</option>';
								ShoeSizeFemaleBrazil +='<option value="female_shoe_brazil_37.5">37.5</option>';
								ShoeSizeFemaleBrazil +='<option value="female_shoe_brazil_38">38</option>';
								ShoeSizeFemaleBrazil +='<option value="female_shoe_brazil_38.5">38.5</option>';
								ShoeSizeFemaleBrazil +='<option value="female_shoe_brazil_39">39</option>';
								ShoeSizeFemaleBrazil +='<option value="female_shoe_brazil_39.5">39.5</option>';
								ShoeSizeFemaleBrazil +='<option value="female_shoe_brazil_40">40</option>';

							var	ShoeSizeFemaleJapan = '<option value="female_shoe_japan_21">21</option>';
								ShoeSizeFemaleJapan +='<option value="female_shoe_japan_21.5">21.5</option>';
								ShoeSizeFemaleJapan +='<option value="female_shoe_japan_22">22</option>';
								ShoeSizeFemaleJapan +='<option value="female_shoe_japan_22.5">22.5</option>';
								ShoeSizeFemaleJapan +='<option value="female_shoe_japan_23">23</option>';
								ShoeSizeFemaleJapan +='<option value="female_shoe_japan_23.5">23.5</option>';
								ShoeSizeFemaleJapan +='<option value="female_shoe_japan_24">24</option>';
								ShoeSizeFemaleJapan +='<option value="female_shoe_japan_24.5">24.5</option>';
								ShoeSizeFemaleJapan +='<option value="female_shoe_japan_25">25</option>';
								ShoeSizeFemaleJapan +='<option value="female_shoe_japan_25.5">25.5</option>';
								ShoeSizeFemaleJapan +='<option value="female_shoe_japan_26">26</option>';
								ShoeSizeFemaleJapan +='<option value="female_shoe_japan_26.5">26.5</option>';
								ShoeSizeFemaleJapan +='<option value="female_shoe_japan_27">27</option>';
								ShoeSizeFemaleJapan +='<option value="female_shoe_japan_27.5">27.5</option>';
								ShoeSizeFemaleJapan +='<option value="female_shoe_japan_28">28</option>';

							var	ShoeSizeFemaleKorea = '<option value="female_shoe_korea_210">210</option>';
								ShoeSizeFemaleKorea +='<option value="female_shoe_korea_215">215</option>';
								ShoeSizeFemaleKorea +='<option value="female_shoe_korea_220">220</option>';
								ShoeSizeFemaleKorea +='<option value="female_shoe_korea_225">225</option>';
								ShoeSizeFemaleKorea +='<option value="female_shoe_korea_230">230</option>';
								ShoeSizeFemaleKorea +='<option value="female_shoe_korea_235">235</option>';
								ShoeSizeFemaleKorea +='<option value="female_shoe_korea_240">240</option>';
								ShoeSizeFemaleKorea +='<option value="female_shoe_korea_245">245</option>';
								ShoeSizeFemaleKorea +='<option value="female_shoe_korea_250">250</option>';
								ShoeSizeFemaleKorea +='<option value="female_shoe_korea_255">255</option>';
								ShoeSizeFemaleKorea +='<option value="female_shoe_korea_260">260</option>';
								ShoeSizeFemaleKorea +='<option value="female_shoe_korea_265">265</option>';
								ShoeSizeFemaleKorea +='<option value="female_shoe_korea_270">270</option>';
								ShoeSizeFemaleKorea +='<option value="female_shoe_korea_275">275</option>';
								ShoeSizeFemaleKorea +='<option value="female_shoe_korea_280">280</option>';

							var	ShoeSizeFemaleChina = '<option value="female_shoe_china_34">34</option>';
								ShoeSizeFemaleChina +='<option value="female_shoe_china_34.5">34.5</option>';
								ShoeSizeFemaleChina +='<option value="female_shoe_china_35">35</option>';
								ShoeSizeFemaleChina +='<option value="female_shoe_china_35.5">35.5</option>';
								ShoeSizeFemaleChina +='<option value="female_shoe_china_36">36</option>';
								ShoeSizeFemaleChina +='<option value="female_shoe_china_36.5">36.5</option>';
								ShoeSizeFemaleChina +='<option value="female_shoe_china_37">37</option>';
								ShoeSizeFemaleChina +='<option value="female_shoe_china_37.5">37.5</option>';
								ShoeSizeFemaleChina +='<option value="female_shoe_china_38">38</option>';
								ShoeSizeFemaleChina +='<option value="female_shoe_china_38.5">38.5</option>';
								ShoeSizeFemaleChina +='<option value="female_shoe_china_39">39</option>';
								ShoeSizeFemaleChina +='<option value="female_shoe_china_39.5">39.5</option>';
								ShoeSizeFemaleChina +='<option value="female_shoe_china_40">40</option>';
								ShoeSizeFemaleChina +='<option value="female_shoe_china_40.5">40.5</option>';
								ShoeSizeFemaleChina +='<option value="female_shoe_china_41">41</option>';

							var values2 = $('.size_female #shoe_size_country_select').chosen().val();

							switch (values2)
							{
								case 'Italy':
									$('.size_female #shoe_size_select').children('option:not(:first)').remove();
									$('.size_female #shoe_size_select').prop("disabled", false).attr("data-placeholder", "Select from list").append(ShoeSizeFemaleItaly).trigger('chosen:updated');
									break;
								case 'US':
									$('.size_female #shoe_size_select').children('option:not(:first)').remove();
									$('.size_female #shoe_size_select').prop("disabled", false).attr("data-placeholder", "Select from list").append(ShoeSizeFemaleUs).trigger('chosen:updated');
									break;
								case 'UK':
									$('.size_female #shoe_size_select').children('option:not(:first)').remove();
									$('.size_female #shoe_size_select').prop("disabled", false).attr("data-placeholder", "Select from list").append(ShoeSizeFemaleUk).trigger('chosen:updated');
									break;
								case 'France':
									$('.size_female #shoe_size_select').children('option:not(:first)').remove();
									$('.size_female #shoe_size_select').prop("disabled", false).attr("data-placeholder", "Select from list").append(ShoeSizeFemaleFrance).trigger('chosen:updated');
									break;
								case 'Japan':
									$('.size_female #shoe_size_select').children('option:not(:first)').remove();
									$('.size_female #shoe_size_select').prop("disabled", false).attr("data-placeholder", "Select from list").append(ShoeSizeFemaleJapan).trigger('chosen:updated');
									break;
								case 'Brazil':
									$('.size_female #shoe_size_select').children('option:not(:first)').remove();
									$('.size_female #shoe_size_select').prop("disabled", false).attr("data-placeholder", "Select from list").append(ShoeSizeFemaleBrazil).trigger('chosen:updated');
									break;
								case 'Korea':
									$('.size_female #shoe_size_select').children('option:not(:first)').remove();
									$('.size_female #shoe_size_select').prop("disabled", false).attr("data-placeholder", "Select from list").append(ShoeSizeFemaleKorea).trigger('chosen:updated');
									break;
								case 'China':
									$('.size_female #shoe_size_select').children('option:not(:first)').remove();
									$('.size_female #shoe_size_select').prop("disabled", false).attr("data-placeholder", "Select from list").append(ShoeSizeFemaleChina).trigger('chosen:updated');
									break;
							}
						});

					break;

				case 'male':
					$('.size_default').fadeOut(0);
					$('.size_female').fadeOut(0);
					$('.size_male').fadeIn(0);
					$('.size_female .acc_size_country_select').val('').trigger('chosen:updated');
					$('.size_female .acc_size_select').val('').prop('disabled', true).attr('data-placeholder', 'Select Nationality').trigger('chosen:updated');
					$('.size_female .acc_shoe_size_country_select').val('').trigger('chosen:updated');
					$('.size_female .acc_shoe_size_select').val('').prop('disabled', true).attr('data-placeholder', 'Select Nationality').trigger('chosen:updated');
					$('.size_male #size_country_select').prop('disabled', false).attr('data-placeholder', 'Select from list').trigger('chosen:updated');
					$('.size_male #shoe_size_country_select').prop('disabled', false).attr('data-placeholder', 'Select from list').trigger('chosen:updated');
					$('.size_male .acc_size_country_select').chosen(
						{
							width: "100%"
						}).change(function()
						{
							var sizeMaleStandard = '<option value="male_xxxs">XXXS</option>';
								sizeMaleStandard +='<option value="male_xxs">XXS</option>';
								sizeMaleStandard +='<option value="male_xs">XS</option>';
								sizeMaleStandard +='<option value="male_s">S</option>';
								sizeMaleStandard +='<option value="male_m">M</option>';
								sizeMaleStandard +='<option value="male_l">L</option>';
								sizeMaleStandard +='<option value="male_xl">XL</option>';
								sizeMaleStandard +='<option value="male_xxl">XXL</option>';
								sizeMaleStandard +='<option value="male_xxxl">XXXL</option>';
								sizeMaleStandard +='<option value="male_4xl">4XL</option>';

							var sizeMaleItaly = '<option value="male_it_40">40</option>';
								sizeMaleItaly +='<option value="male_it_42">42</option>';
								sizeMaleItaly +='<option value="male_it_44">44</option>';
								sizeMaleItaly +='<option value="male_it_46">46</option>';
								sizeMaleItaly +='<option value="male_it_48">48</option>';
								sizeMaleItaly +='<option value="male_it_50">50</option>';
								sizeMaleItaly +='<option value="male_it_52">52</option>';
								sizeMaleItaly +='<option value="male_it_54">52</option>';
								sizeMaleItaly +='<option value="male_it_56">52</option>';
								sizeMaleItaly +='<option value="male_it_58">52</option>';

							var sizeMaleUsChest = '<option value="male_us_chest_30">30</option>';
								sizeMaleUsChest +='<option value="male_us_chest_32">32</option>';
								sizeMaleUsChest +='<option value="male_us_chest_34">34</option>';
								sizeMaleUsChest +='<option value="male_us_chest_36">36</option>';
								sizeMaleUsChest +='<option value="male_us_chest_38">38</option>';
								sizeMaleUsChest +='<option value="male_us_chest_40">40</option>';
								sizeMaleUsChest +='<option value="male_us_chest_42">42</option>';
								sizeMaleUsChest +='<option value="male_us_chest_44">44</option>';
								sizeMaleUsChest +='<option value="male_us_chest_46">46</option>';
								sizeMaleUsChest +='<option value="male_us_chest_48">48</option>';

							var	sizeMaleUsWaist = '<option value="male_us_waist_24">24</option>';
								sizeMaleUsWaist +='<option value="male_us_waist_26">26</option>';
								sizeMaleUsWaist +='<option value="male_us_waist_28">28</option>';
								sizeMaleUsWaist +='<option value="male_us_waist_30">30</option>';
								sizeMaleUsWaist +='<option value="male_us_waist_32">32</option>';
								sizeMaleUsWaist +='<option value="male_us_waist_34">34</option>';
								sizeMaleUsWaist +='<option value="male_us_waist_36">36</option>';
								sizeMaleUsWaist +='<option value="male_us_waist_38">38</option>';
								sizeMaleUsWaist +='<option value="male_us_waist_40">40</option>';
								sizeMaleUsWaist +='<option value="male_us_waist_40">42</option>';

							var	sizeMaleBrazil = '<option value="male_brazil_32">32/XPP</option>';
								sizeMaleBrazil +='<option value="male_brazil_34">34/PP</option>';
								sizeMaleBrazil +='<option value="male_brazil_36">36/PP</option>';
								sizeMaleBrazil +='<option value="male_brazil_39">38/P</option>';
								sizeMaleBrazil +='<option value="male_brazil_40">40/M</option>';
								sizeMaleBrazil +='<option value="male_brazil_42">42/M</option>';
								sizeMaleBrazil +='<option value="male_brazil_44">44/G</option>';
								sizeMaleBrazil +='<option value="male_brazil_46">46/GG</option>';
								sizeMaleBrazil +='<option value="male_brazil_48">48/GG</option>';
								sizeMaleBrazil +='<option value="male_brazil_50">50/XGG</option>';

							var	sizeMaleGerman = '<option value="male_german_40">40</option>';
								sizeMaleGerman +='<option value="male_german_42">42</option>';
								sizeMaleGerman +='<option value="male_german_44">44</option>';
								sizeMaleGerman +='<option value="male_german_46">46</option>';
								sizeMaleGerman +='<option value="male_german_48">48</option>';
								sizeMaleGerman +='<option value="male_german_50">50</option>';
								sizeMaleGerman +='<option value="male_german_52">52</option>';
								sizeMaleGerman +='<option value="male_german_54">54</option>';
								sizeMaleGerman +='<option value="male_german_56">56</option>';
								sizeMaleGerman +='<option value="male_german_58">58</option>';

							var	sizeMaleJapan = '<option value="male_japan_00">00</option>';
								sizeMaleJapan +='<option value="male_japan_0">0</option>';
								sizeMaleJapan +='<option value="male_japan_1">1</option>';
								sizeMaleJapan +='<option value="male_japan_2">2</option>';
								sizeMaleJapan +='<option value="male_japan_3">3</option>';
								sizeMaleJapan +='<option value="male_japan_4">4</option>';
								sizeMaleJapan +='<option value="male_japan_5">5</option>';
								sizeMaleJapan +='<option value="male_japan_6">6</option>';
								sizeMaleJapan +='<option value="male_japan_7">7</option>';
								sizeMaleJapan +='<option value="male_japan_8">8</option>';

							var	sizeMaleKorea = '<option value="male_korea_80">80</option>';
								sizeMaleKorea +='<option value="male_korea_85">85</option>';
								sizeMaleKorea +='<option value="male_korea_90">90</option>';
								sizeMaleKorea +='<option value="male_korea_95">95</option>';
								sizeMaleKorea +='<option value="male_korea_100">100</option>';
								sizeMaleKorea +='<option value="male_korea_105">105</option>';
								sizeMaleKorea +='<option value="male_korea_110">110</option>';
								sizeMaleKorea +='<option value="male_korea_115">115</option>';
								sizeMaleKorea +='<option value="male_korea_120">120</option>';
								sizeMaleKorea +='<option value="male_korea_125">125</option>';

							var	sizeMaleChina = '<option value="male_china_155">155/86A</option>';
								sizeMaleChina +='<option value="male_china_160">160/80A</option>';
								sizeMaleChina +='<option value="male_china_165">165/84A</option>';
								sizeMaleChina +='<option value="male_china_170">170/88A</option>';
								sizeMaleChina +='<option value="male_china_175">175/92A</option>';
								sizeMaleChina +='<option value="male_china_180">180/96A</option>';
								sizeMaleChina +='<option value="male_china_185">185/100A</option>';
								sizeMaleChina +='<option value="male_china_190">190/104A</option>';
								sizeMaleChina +='<option value="male_china_195">195/108A</option>';
								sizeMaleChina +='<option value="male_china_200">200/112A</option>';

							var	sizeMaleRussia = '<option value="male_russia_40">40</option>';
								sizeMaleRussia +='<option value="male_russia_42">42</option>';
								sizeMaleRussia +='<option value="male_russia_44">44</option>';
								sizeMaleRussia +='<option value="male_russia_46">46</option>';
								sizeMaleRussia +='<option value="male_russia_48">48</option>';
								sizeMaleRussia +='<option value="male_russia_50">50</option>';
								sizeMaleRussia +='<option value="male_russia_52">52</option>';
								sizeMaleRussia +='<option value="male_russia_54">54</option>';
								sizeMaleRussia +='<option value="male_russia_54">56</option>';
								sizeMaleRussia +='<option value="male_russia_54">58</option>';

							var valuesMale = $('.size_male .acc_size_country_select').chosen().val();

							switch (valuesMale)
							{
								case 'Standard':
									$('.size_male #size_select').children('option:not(:first)').remove();
									$('.size_male #size_select').prop("disabled", false).attr("data-placeholder", "Select from list").append(sizeMaleStandard).trigger('chosen:updated');
									break;
								case 'Italy':
									$('.size_male #size_select').children('option:not(:first)').remove();
									$('.size_male #size_select').prop("disabled", false).attr("data-placeholder", "Select from list").append(sizeMaleItaly).trigger('chosen:updated');
									break;
								case 'US_UK_chest':
									$('.size_male #size_select').children('option:not(:first)').remove();
									$('.size_male #size_select').prop("disabled", false).attr("data-placeholder", "Select from list").append(sizeMaleUsChest).trigger('chosen:updated');
									break;
								case 'US_UK_waist':
									$('.size_male #size_select').children('option:not(:first)').remove();
									$('.size_male #size_select').prop("disabled", false).attr("data-placeholder", "Select from list").append(sizeMaleUsWaist).trigger('chosen:updated');
									break;
								case 'Japan':
									$('.size_male #size_select').children('option:not(:first)').remove();
									$('.size_male #size_select').prop("disabled", false).attr("data-placeholder", "Select from list").append(sizeMaleJapan).trigger('chosen:updated');
									break;
								case 'Brazil':
									$('.size_male #size_select').children('option:not(:first)').remove();
									$('.size_male #size_select').prop("disabled", false).attr("data-placeholder", "Select from list").append(sizeMaleBrazil).trigger('chosen:updated');
									break;
								case 'German_danish':
									$('.size_male #size_select').children('option:not(:first)').remove();
									$('.size_male #size_select').prop("disabled", false).attr("data-placeholder", "Select from list").append(sizeMaleGerman).trigger('chosen:updated');
									break;
								case 'Korea':
									$('.size_male #size_select').children('option:not(:first)').remove();
									$('.size_male #size_select').prop("disabled", false).attr("data-placeholder", "Select from list").append(sizeMaleKorea).trigger('chosen:updated');
									break;
								case 'China':
									$('.size_male #size_select').children('option:not(:first)').remove();
									$('.size_male #size_select').prop("disabled", false).attr("data-placeholder", "Select from list").append(sizeMaleChina).trigger('chosen:updated');
									break;
								case 'Russia':
									$('.size_male #size_select').children('option:not(:first)').remove();
									$('.size_male #size_select').prop("disabled", false).attr("data-placeholder", "Select from list").append(sizeMaleRussia).trigger('chosen:updated');
									break;
							}
						});


						$('.size_male .acc_shoe_size_country_select').chosen(
						{
							width: "100%"
						}).change(function()
						{

							var ShoeSizeMaleItaly = '<option value="male_shoe_it_36">36</option>';
								ShoeSizeMaleItaly +='<option value="male_shoe_it_36.5">36.5</option>';
								ShoeSizeMaleItaly +='<option value="male_shoe_it_37">37</option>';
								ShoeSizeMaleItaly +='<option value="male_shoe_it_37.5">37.5</option>';
								ShoeSizeMaleItaly +='<option value="male_shoe_it_38">38</option>';
								ShoeSizeMaleItaly +='<option value="male_shoe_it_38.5">38.5</option>';
								ShoeSizeMaleItaly +='<option value="male_shoe_it_39">39</option>';
								ShoeSizeMaleItaly +='<option value="male_shoe_it_39.5">39.5</option>';
								ShoeSizeMaleItaly +='<option value="male_shoe_it_40">40</option>';
								ShoeSizeMaleItaly +='<option value="male_shoe_it_40.5">40.5</option>';
								ShoeSizeMaleItaly +='<option value="male_shoe_it_41">41</option>';
								ShoeSizeMaleItaly +='<option value="male_shoe_it_41.5">41.5</option>';
								ShoeSizeMaleItaly +='<option value="male_shoe_it_42">42</option>';
								ShoeSizeMaleItaly +='<option value="male_shoe_it_42.5">42.5</option>';
								ShoeSizeMaleItaly +='<option value="male_shoe_it_43">43</option>';
								ShoeSizeMaleItaly +='<option value="male_shoe_it_43.5">43.5</option>';
								ShoeSizeMaleItaly +='<option value="male_shoe_it_44">44</option>';
								ShoeSizeMaleItaly +='<option value="male_shoe_it_44.5">44.5</option>';
								ShoeSizeMaleItaly +='<option value="male_shoe_it_45">45</option>';
								ShoeSizeMaleItaly +='<option value="male_shoe_it_45.5">45.5</option>';
								ShoeSizeMaleItaly +='<option value="male_shoe_it_46">46</option>';
								ShoeSizeMaleItaly +='<option value="male_shoe_it_46.5">46.5</option>';
								ShoeSizeMaleItaly +='<option value="male_shoe_it_47">47</option>';
								ShoeSizeMaleItaly +='<option value="male_shoe_it_47.5">47.5</option>';
								ShoeSizeMaleItaly +='<option value="male_shoe_it_48">48</option>';
								ShoeSizeMaleItaly +='<option value="male_shoe_it_48.5">48.5</option>';
								ShoeSizeMaleItaly +='<option value="male_shoe_it_49">49</option>';


							var
								ShoeSizeMaleUs = '<option value="male_shoe_us_3">3</option>';
								ShoeSizeMaleUs +='<option value="male_shoe_us_3.5">3.5</option>';
								ShoeSizeMaleUs +='<option value="male_shoe_us_4">4</option>';
								ShoeSizeMaleUs +='<option value="male_shoe_us_4.5">4.5</option>';
								ShoeSizeMaleUs +='<option value="male_shoe_us_5">5</option>';
								ShoeSizeMaleUs +='<option value="male_shoe_us_5.5">5.5</option>';
								ShoeSizeMaleUs +='<option value="male_shoe_us_6">6</option>';
								ShoeSizeMaleUs +='<option value="male_shoe_us_6.5">6.5</option>';
								ShoeSizeMaleUs +='<option value="male_shoe_us_7">7</option>';
								ShoeSizeMaleUs +='<option value="male_shoe_us_7.5">7.5</option>';
								ShoeSizeMaleUs +='<option value="male_shoe_us_8">8</option>';
								ShoeSizeMaleUs +='<option value="male_shoe_us_8.5">8.5</option>';
								ShoeSizeMaleUs +='<option value="male_shoe_us_9">9</option>';
								ShoeSizeMaleUs +='<option value="male_shoe_us_9.5">9.5</option>';
								ShoeSizeMaleUs +='<option value="male_shoe_us_10">10</option>';
								ShoeSizeMaleUs +='<option value="male_shoe_us_10.5">10.5</option>';
								ShoeSizeMaleUs +='<option value="male_shoe_us_11">11</option>';
								ShoeSizeMaleUs +='<option value="male_shoe_us_11.5">11.5</option>';
								ShoeSizeMaleUs +='<option value="male_shoe_us_12">12</option>';
								ShoeSizeMaleUs +='<option value="male_shoe_us_12.5">12.5</option>';
								ShoeSizeMaleUs +='<option value="male_shoe_us_13">13</option>';
								ShoeSizeMaleUs +='<option value="male_shoe_us_13.5">13.5</option>';
								ShoeSizeMaleUs +='<option value="male_shoe_us_14">14</option>';
								ShoeSizeMaleUs +='<option value="male_shoe_us_14.5">14.5</option>';
								ShoeSizeMaleUs +='<option value="male_shoe_us_15">15</option>';
								ShoeSizeMaleUs +='<option value="male_shoe_us_15.5">15.5</option>';
								ShoeSizeMaleUs +='<option value="male_shoe_us_16">16</option>';

							var	ShoeSizeMaleUk = '<option value="male_shoe_uk_2">2</option>';
								ShoeSizeMaleUk +='<option value="male_shoe_uk_2.5">2.5</option>';
								ShoeSizeMaleUk +='<option value="male_shoe_uk_3">3</option>';
								ShoeSizeMaleUk +='<option value="male_shoe_uk_3.5">3.5</option>';
								ShoeSizeMaleUk +='<option value="male_shoe_uk_4">4</option>';
								ShoeSizeMaleUk +='<option value="male_shoe_uk_4.5">4.5</option>';
								ShoeSizeMaleUk +='<option value="male_shoe_uk_5">5</option>';
								ShoeSizeMaleUk +='<option value="male_shoe_uk_5.5">5.5</option>';
								ShoeSizeMaleUk +='<option value="male_shoe_uk_6">6</option>';
								ShoeSizeMaleUk +='<option value="male_shoe_uk_6.5">6.5</option>';
								ShoeSizeMaleUk +='<option value="male_shoe_uk_7">7</option>';
								ShoeSizeMaleUk +='<option value="male_shoe_uk_7.5">7.5</option>';
								ShoeSizeMaleUk +='<option value="male_shoe_uk_8">8</option>';
								ShoeSizeMaleUk +='<option value="male_shoe_uk_8.5">8.5</option>';
								ShoeSizeMaleUk +='<option value="male_shoe_uk_9">9</option>';
								ShoeSizeMaleUk +='<option value="male_shoe_uk_9.5">9.5</option>';
								ShoeSizeMaleUk +='<option value="male_shoe_uk_10">10</option>';
								ShoeSizeMaleUk +='<option value="male_shoe_uk_10.5">10.5</option>';
								ShoeSizeMaleUk +='<option value="male_shoe_uk_11">11</option>';
								ShoeSizeMaleUk +='<option value="male_shoe_uk_11.5">11.5</option>';
								ShoeSizeMaleUk +='<option value="male_shoe_uk_12">12</option>';
								ShoeSizeMaleUk +='<option value="male_shoe_uk_12.5">12.5</option>';
								ShoeSizeMaleUk +='<option value="male_shoe_uk_13">13</option>';
								ShoeSizeMaleUk +='<option value="male_shoe_uk_13.5">13.5</option>';
								ShoeSizeMaleUk +='<option value="male_shoe_uk_14">14</option>';
								ShoeSizeMaleUk +='<option value="male_shoe_uk_14.5">14.5</option>';
								ShoeSizeMaleUk +='<option value="male_shoe_uk_15">15</option>';

							var	ShoeSizeMaleBrazil = '<option value="male_shoe_brazil_34">34</option>';
								ShoeSizeMaleBrazil +='<option value="male_shoe_brazil_34.5">34.5</option>';
								ShoeSizeMaleBrazil +='<option value="male_shoe_brazil_35">35</option>';
								ShoeSizeMaleBrazil +='<option value="male_shoe_brazil_35.5">35.5</option>';
								ShoeSizeMaleBrazil +='<option value="male_shoe_brazil_36">36</option>';
								ShoeSizeMaleBrazil +='<option value="male_shoe_brazil_36.5">36.5</option>';
								ShoeSizeMaleBrazil +='<option value="male_shoe_brazil_37">37</option>';
								ShoeSizeMaleBrazil +='<option value="male_shoe_brazil_37.5">37.5</option>';
								ShoeSizeMaleBrazil +='<option value="male_shoe_brazil_38">38</option>';
								ShoeSizeMaleBrazil +='<option value="male_shoe_brazil_38.5">38.5</option>';
								ShoeSizeMaleBrazil +='<option value="male_shoe_brazil_39">39</option>';
								ShoeSizeMaleBrazil +='<option value="male_shoe_brazil_39.5">39.5</option>';
								ShoeSizeMaleBrazil +='<option value="male_shoe_brazil_40">40</option>';
								ShoeSizeMaleBrazil +='<option value="male_shoe_brazil_40.5">40.5</option>';
								ShoeSizeMaleBrazil +='<option value="male_shoe_brazil_41">41</option>';
								ShoeSizeMaleBrazil +='<option value="male_shoe_brazil_41.5">41.5</option>';
								ShoeSizeMaleBrazil +='<option value="male_shoe_brazil_42">42</option>';
								ShoeSizeMaleBrazil +='<option value="male_shoe_brazil_42.5">42.5</option>';
								ShoeSizeMaleBrazil +='<option value="male_shoe_brazil_43">43</option>';
								ShoeSizeMaleBrazil +='<option value="male_shoe_brazil_43.5">43.5</option>';
								ShoeSizeMaleBrazil +='<option value="male_shoe_brazil_44">44</option>';
								ShoeSizeMaleBrazil +='<option value="male_shoe_brazil_44.5">44.5</option>';
								ShoeSizeMaleBrazil +='<option value="male_shoe_brazil_45">45</option>';
								ShoeSizeMaleBrazil +='<option value="male_shoe_brazil_45.5">45.5</option>';
								ShoeSizeMaleBrazil +='<option value="male_shoe_brazil_46">46</option>';
								ShoeSizeMaleBrazil +='<option value="male_shoe_brazil_46.5">46.5</option>';
								ShoeSizeMaleBrazil +='<option value="male_shoe_brazil_47">47</option>';

							var	ShoeSizeMaleJapan = '<option value="male_shoe_japan_21">21</option>';
								ShoeSizeMaleJapan +='<option value="male_shoe_japan_21.5">21.5</option>';
								ShoeSizeMaleJapan +='<option value="male_shoe_japan_22">22</option>';
								ShoeSizeMaleJapan +='<option value="male_shoe_japan_22.5">22.5</option>';
								ShoeSizeMaleJapan +='<option value="male_shoe_japan_23">23</option>';
								ShoeSizeMaleJapan +='<option value="male_shoe_japan_23.5">23.5</option>';
								ShoeSizeMaleJapan +='<option value="male_shoe_japan_24">24</option>';
								ShoeSizeMaleJapan +='<option value="male_shoe_japan_24.5">24.5</option>';
								ShoeSizeMaleJapan +='<option value="male_shoe_japan_25">25</option>';
								ShoeSizeMaleJapan +='<option value="male_shoe_japan_25.5">25.5</option>';
								ShoeSizeMaleJapan +='<option value="male_shoe_japan_26">26</option>';
								ShoeSizeMaleJapan +='<option value="male_shoe_japan_26.5">26.5</option>';
								ShoeSizeMaleJapan +='<option value="male_shoe_japan_27">27</option>';
								ShoeSizeMaleJapan +='<option value="male_shoe_japan_27.5">27.5</option>';
								ShoeSizeMaleJapan +='<option value="male_shoe_japan_28">28</option>';
								ShoeSizeMaleJapan +='<option value="male_shoe_japan_28.5">28.5</option>';
								ShoeSizeMaleJapan +='<option value="male_shoe_japan_29">29</option>';
								ShoeSizeMaleJapan +='<option value="male_shoe_japan_29.5">29.5</option>';
								ShoeSizeMaleJapan +='<option value="male_shoe_japan_30">30</option>';
								ShoeSizeMaleJapan +='<option value="male_shoe_japan_30.5">30.5</option>';
								ShoeSizeMaleJapan +='<option value="male_shoe_japan_31">31</option>';
								ShoeSizeMaleJapan +='<option value="male_shoe_japan_31.5">31.5</option>';
								ShoeSizeMaleJapan +='<option value="male_shoe_japan_32">32</option>';
								ShoeSizeMaleJapan +='<option value="male_shoe_japan_32.5">32.5</option>';
								ShoeSizeMaleJapan +='<option value="male_shoe_japan_33">33</option>';
								ShoeSizeMaleJapan +='<option value="male_shoe_japan_33.5">33.5</option>';
								ShoeSizeMaleJapan +='<option value="male_shoe_japan_34">34</option>';

							var	ShoeSizeMaleKorea = '<option value="male_shoe_korea_210">210</option>';
								ShoeSizeMaleKorea +='<option value="male_shoe_korea_215">215</option>';
								ShoeSizeMaleKorea +='<option value="male_shoe_korea_220">220</option>';
								ShoeSizeMaleKorea +='<option value="male_shoe_korea_225">225</option>';
								ShoeSizeMaleKorea +='<option value="male_shoe_korea_230">230</option>';
								ShoeSizeMaleKorea +='<option value="male_shoe_korea_235">235</option>';
								ShoeSizeMaleKorea +='<option value="male_shoe_korea_240">240</option>';
								ShoeSizeMaleKorea +='<option value="male_shoe_korea_245">245</option>';
								ShoeSizeMaleKorea +='<option value="male_shoe_korea_250">250</option>';
								ShoeSizeMaleKorea +='<option value="male_shoe_korea_255">255</option>';
								ShoeSizeMaleKorea +='<option value="male_shoe_korea_260">260</option>';
								ShoeSizeMaleKorea +='<option value="male_shoe_korea_265">265</option>';
								ShoeSizeMaleKorea +='<option value="male_shoe_korea_270">270</option>';
								ShoeSizeMaleKorea +='<option value="male_shoe_korea_275">275</option>';
								ShoeSizeMaleKorea +='<option value="male_shoe_korea_280">280</option>';
								ShoeSizeMaleKorea +='<option value="male_shoe_korea_285">285</option>';
								ShoeSizeMaleKorea +='<option value="male_shoe_korea_290">290</option>';
								ShoeSizeMaleKorea +='<option value="male_shoe_korea_295">295</option>';
								ShoeSizeMaleKorea +='<option value="male_shoe_korea_300">300</option>';
								ShoeSizeMaleKorea +='<option value="male_shoe_korea_305">305</option>';
								ShoeSizeMaleKorea +='<option value="male_shoe_korea_310">310</option>';
								ShoeSizeMaleKorea +='<option value="male_shoe_korea_315">315</option>';
								ShoeSizeMaleKorea +='<option value="male_shoe_korea_320">320</option>';
								ShoeSizeMaleKorea +='<option value="male_shoe_korea_325">325</option>';
								ShoeSizeMaleKorea +='<option value="male_shoe_korea_330">330</option>';
								ShoeSizeMaleKorea +='<option value="male_shoe_korea_335">335</option>';
								ShoeSizeMaleKorea +='<option value="male_shoe_korea_340">340</option>';

							var valuesMale2 = $('.size_male #shoe_size_country_select').chosen().val();

							switch (valuesMale2)
							{
								case 'Italy':
									$('.size_male #shoe_size_select').children('option:not(:first)').remove();
									$('.size_male #shoe_size_select').prop("disabled", false).attr("data-placeholder", "Select from list").append(ShoeSizeMaleItaly).trigger('chosen:updated');
									break;
								case 'US':
									$('.size_male #shoe_size_select').children('option:not(:first)').remove();
									$('.size_male #shoe_size_select').prop("disabled", false).attr("data-placeholder", "Select from list").append(ShoeSizeMaleUs).trigger('chosen:updated');
									break;
								case 'UK':
									$('.size_male #shoe_size_select').children('option:not(:first)').remove();
									$('.size_male #shoe_size_select').prop("disabled", false).attr("data-placeholder", "Select from list").append(ShoeSizeMaleUk).trigger('chosen:updated');
									break;
								case 'Japan':
									$('.size_male #shoe_size_select').children('option:not(:first)').remove();
									$('.size_male #shoe_size_select').prop("disabled", false).attr("data-placeholder", "Select from list").append(ShoeSizeMaleJapan).trigger('chosen:updated');
									break;
								case 'Brazil':
									$('.size_male #shoe_size_select').children('option:not(:first)').remove();
									$('.size_male #shoe_size_select').prop("disabled", false).attr("data-placeholder", "Select from list").append(ShoeSizeMaleBrazil).trigger('chosen:updated');
									break;
								case 'Korea':
									$('.size_male #shoe_size_select').children('option:not(:first)').remove();
									$('.size_male #shoe_size_select').prop("disabled", false).attr("data-placeholder", "Select from list").append(ShoeSizeMaleKorea).trigger('chosen:updated');
									break;
							}
						});

					break;
			}
		});

	$('.acc_size_country_select').chosen(
	{
 		width: "100%"
 	})

	$('.acc_size_select').chosen(
		{
			allow_single_deselect: true,
			width: "100%"
		});

	$('.acc_shoe_size_country_select').chosen(
		{
			width: "100%"
		});

	$('.acc_shoe_size_select').chosen(
		{
			allow_single_deselect: true,
			width: "100%"
		});


	$('.acc_colors_select').chosen(
		{
			width: "100%"
		});

	$('.acc_designers_select').chosen(
		{
			width: "100%"
		});

	$('.acc_birthday').formance('format_dd_mm_yyyy');
	$('#acc_phone').formance('format_number');
	$('#acc_email').formance('validate_email');
}


$(document).ready(function()
{

	headerFixed();

	if($('#home_section_1_container').length > 0)
	{
		homepageSlider();
	}
	else{}

	if($('.product_images_container').length > 0)
	{
		productImages();
		productSpecs();
	}
	else{}

	if($('.info_accord').length > 0)
	{
		infoAccordian();
	}
	else{}

	responsiveMenu();
	mobileSearch();
	clientProfile();
	mainMenu();
	//couponModal();
	sizeChart();
	filterMenu();
	backToTop();
	colorChoice();
	designerList();
	designerLetterSelected();
	countriesList();
	countriesLetterSelected();
	numbersOnly();
	ccardLimits();
	paymentFunction();
	$('[data-toggle="tooltip"]').tooltip();


});
