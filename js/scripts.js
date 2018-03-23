$(document).ready(function() {

	$('#map').usmap({
	    'stateStyles': {fill: '#A9A9A9', stroke: '#fff'},
	    'stateHoverStyles': {fill: 'red'},
	    'clickState': {
	      'NY' : function(event, data) {
	        $('#alert p b').text('New York');
	      },
	      'AK' : function(event, data) {
	        $('#alert p b').text('Alaska');
	      },
	      'AL' : function(event, data) {
	        $('#alert p b').text('Alabama');
	      },
	      'AZ' : function(event, data) {
	        $('#alert p b').text('Arizona');
	      },
	      'AR' : function(event, data) {
	        $('#alert p b').text('Arkansas');
	      },
	      'CA' : function(event, data) {
	        $('#alert p b').text('California');
	      },
	      'CO' : function(event, data) {
	        $('#alert p b').text('Colorado');
	      },
	      'CT' : function(event, data) {
	        $('#alert p b').text('Connecticut');
	      },
	      'DE' : function(event, data) {
	        $('#alert p b').text('Delaware');
	      },
	      'FL' : function(event, data) {
	        $('#alert p b').text('Florida');
	      },
	      'GA' : function(event, data) {
	        $('#alert p b').text('Georgia');
	      },
	      'HI' : function(event, data) {
	        $('#alert p b').text('Hawaii');
	      },
	      'ID' : function(event, data) {
	        $('#alert p b').text('Idaho');
	      },
	      'IL' : function(event, data) {
	        $('#alert p b').text('Illinois');
	      },
	      'IN' : function(event, data) {
	        $('#alert p b').text('Indiana');
	      },
	      'IA' : function(event, data) {
	        $('#alert p b').text('Iowa');
	      },
	      'KS' : function(event, data) {
	        $('#alert p b').text('Kansas');
	      },
	      'KY' : function(event, data) {
	        $('#alert p b').text('Kentucky');
	      },
	      'LA' : function(event, data) {
	        $('#alert p b').text('Louisiana');
	      },
	      'ME' : function(event, data) {
	        $('#alert p b').text('Maine');
	      },
	      'MD' : function(event, data) {
	        $('#alert p b').text('Maryland');
	      },
	      'MA' : function(event, data) {
	        $('#alert p b').text('Massachusetts');
	      },
	      'MI' : function(event, data) {
	        $('#alert p b').text('Michigan');
	      },
	      'MN' : function(event, data) {
	        $('#alert p b').text('Minnesota');
	      },
	      'MS' : function(event, data) {
	        $('#alert p b').text('Mississippi');
	      },
	      'MO' : function(event, data) {
	        $('#alert p b').text('Missouri');
	      },
	      'MT' : function(event, data) {
	        $('#alert p b').text('Montana');
	      },
	      'NE' : function(event, data) {
	        $('#alert p b').text('Nebraska');
	      },
	      'NV' : function(event, data) {
	        $('#alert p b').text('Nevada');
	      },
	      'NH' : function(event, data) {
	        $('#alert p b').text('New Hampshire');
	      },
	      'NJ' : function(event, data) {
	        $('#alert p b').text('New Jersey');
	      },
	      'NM' : function(event, data) {
	        $('#alert p b').text('New Mexico');
	      },
	      'NC' : function(event, data) {
	        $('#alert p b').text('North Carolina');
	      },
	      'ND' : function(event, data) {
	        $('#alert p b').text('North Dakota');
	      },
	      'OH' : function(event, data) {
	        $('#alert p b').text('Ohio');
	      },
	      'OK' : function(event, data) {
	        $('#alert p b').text('Oklahoma');
	      },
	      'OR' : function(event, data) {
	        $('#alert p b').text('Oregon');
	      },
	      'PA' : function(event, data) {
	        $('#alert p b').text('Pennsylvania');
	      },
	      'RI' : function(event, data) {
	        $('#alert p b').text('Rhode Island');
	      },
	      'SC' : function(event, data) {
	        $('#alert p b').text('South Carolina');
	      },
	      'SD' : function(event, data) {
	        $('#alert p b').text('South Dakota');
	      },
	      'TN' : function(event, data) {
	        $('#alert p b').text('Tennessee');
	      },
	      'TX' : function(event, data) {
	        $('#alert p b').text('Texas');
	      },
	      'UT' : function(event, data) {
	        $('#alert p b').text('Utah');
	      },
	      'VT' : function(event, data) {
	        $('#alert p b').text('Vermont');
	      },
	      'VA' : function(event, data) {
	        $('#alert p b').text('Virginia');
	      },
	      'WA' : function(event, data) {
	        $('#alert p b').text('Washington');
	      },
	      'WV' : function(event, data) {
	        $('#alert p b').text('West Virginia');
	      },
	      'WI' : function(event, data) {
	        $('#alert p b').text('Wisconsin');
	      },
	      'WY' : function(event, data) {
	        $('#alert p b').text('Wyoming');
	      }
	    }
	});
	$('.sec-6 input[value="1"]').click(function(){
		$("#car-1").attr("src","images/traveling_over.png");
		$("#car-2").attr("src","images/working.png");
		$("#car-3").attr("src","images/commuting.png");
		$("#car-4").attr("src","images/racing.png");
		$("#car-5").attr("src","images/leisure.png");
	});
	$('.sec-6 input[value="2"]').click(function(){
		$("#car-1").attr("src","images/traveling.png");
		$("#car-2").attr("src","images/working_over.png");
		$("#car-3").attr("src","images/commuting.png");
		$("#car-4").attr("src","images/racing.png");
		$("#car-5").attr("src","images/leisure.png");
	});
	$('.sec-6 input[value="3"]').click(function(){
		$("#car-1").attr("src","images/traveling.png");
		$("#car-2").attr("src","images/working.png");
		$("#car-3").attr("src","images/commuting_over.png");
		$("#car-4").attr("src","images/racing.png");
		$("#car-5").attr("src","images/leisure.png");
	});
	$('.sec-6 input[value="4"]').click(function(){
		$("#car-1").attr("src","images/traveling.png");
		$("#car-2").attr("src","images/working.png");
		$("#car-3").attr("src","images/commuting.png");
		$("#car-4").attr("src","images/racing_over.png");
		$("#car-5").attr("src","images/leisure.png");
	});
	$('.sec-6 input[value="5"]').click(function(){
		$("#car-1").attr("src","images/traveling.png");
		$("#car-2").attr("src","images/working.png");
		$("#car-3").attr("src","images/commuting.png");
		$("#car-4").attr("src","images/racing.png");
		$("#car-5").attr("src","images/leisure_over.png");
	});

	$('.sec-4 input[value="1"]').click(function(){
		$("#park_1").attr("src","images/public_parking_lot_over.png");
		$("#park_2").attr("src","images/Parkin_building.png");
		$("#park_3").attr("src","images/Private_parking.png");
	});
	$('.sec-4 input[value="2"]').click(function(){
		$("#park_1").attr("src","images/public_parking_lot.png");
		$("#park_2").attr("src","images/Parkin_building_over.png");
		$("#park_3").attr("src","images/Private_parking.png");
	});
	$('.sec-4 input[value="3"]').click(function(){
		$("#park_1").attr("src","images/public_parking_lot.png");
		$("#park_2").attr("src","images/Parkin_building.png");
		$("#park_3").attr("src","images/Private_parking_over.png");
	});

	$('#n-1').click(function(){
		$('.sec-1').addClass('display-n');
		$('.sec-2').removeClass('display-n');
        $.ajaxSetup({
            contentType: "application/json; charset=utf-8"
        });
        var location = $("b.location").text();
        var data = JSON.stringify({
            location: `${location}`
        });
        $.ajax({
            url: '/location',
            type: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            data: data,
            success: function(response){
                var age = response.age;
            }
        })
	});
	$('#n-2').click(function(){
	    $('.sec-2').addClass('display-n');
        $('.sec-3').removeClass('display-n');
		$.ajaxSetup({
            contentType: "application/json; charset=utf-8"
        });
        var driving_style = document.getElementById('driving_style').value;
        var data = JSON.stringify({
            driving_style: `${driving_style}`
        });
        $.ajax({
            url: '/driving_style',
            type: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            data: data,
            success: function(response){
                var age = response.windshield;
            }
        })
	});
	$('#n-3').click(function(){
		$('.sec-3').addClass('display-n');
		$('.sec-4').removeClass('display-n');
        $.ajaxSetup({
            contentType: "application/json; charset=utf-8"
        });
        var driving_hours = $('input[name=hours]:checked', '#FormHours').val();
        var data = JSON.stringify({
            driving_hours: `${driving_hours}`
        });
        $.ajax({
            url: '/driving_hours',
            type: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            data: data,
            success: function(response){
                var age = response.windshield;
            }
        })
	});
	$('#n-4').click(function(){
		$('.sec-4').addClass('display-n');
		$('.sec-5').removeClass('display-n');
        $.ajaxSetup({
            contentType: "application/json; charset=utf-8"
        });
        var parking_style = $('input[name=parking]:checked', '#FormParking').val();
        var data = JSON.stringify({
            parking_style: `${parking_style}`
        });
        $.ajax({
            url: '/parking_style',
            type: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            data: data,
            success: function(response){
                var age = response.windshield;
            }
        })
	});
	$('#n-5').click(function(){
    		$('.sec-5').addClass('display-n');
    		$('.sec-6').removeClass('display-n');
            $.ajaxSetup({
                contentType: "application/json; charset=utf-8"
            });
            var age = $('input[name=age]:checked', '#FormAge').val();
            var data = JSON.stringify({
                age: `${age}`
            });
            $.ajax({
                url: '/age',
                type: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                data: data,
                success: function(response){
                    var age = response.windshield;
                }
            })
    	});
	$('#n-6').click(function(){
	    $('.sec-6').addClass('display-n');
    	$('.sec-7').removeClass('display-n');
        $.ajaxSetup({
            contentType: "application/json; charset=utf-8"
        });
        var car_usage = $('input[name=car]:checked', '#FormUsage').val();
        var data = JSON.stringify({
            car_usage: `${car_usage}`
        });

        $.ajax({
            url: '/car_usage',
            type: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            data: data,
            success: function(response){
                var details = response.details;
                var opKey = response.keyloss;
                var opPaint = response.paint;
                var opTires = response.tires;
                var opWind = response.windshield;
                var users = response.users;
                var enable = 1;
                /*alert(opKey)
                alert(opPaint)
                alert(opWind)
                alert(opTires)*/
                $('#details').html(details);
                if (opKey != enable) {
                    $("div#optionKeyloss").hide();
                }
                if (opPaint != enable) {
                    $("div#optionPaint").hide();
                }
                if (opTires != enable) {
                    $("div#optionTires").hide();
                }
                if (opWind != enable) {
                    $("div#optionWindshield").hide();
                }
                $("div#ad_key").hide();
                $("div#ad_windshield").hide();
                $("div#ad_tires").hide();
                $("div#ad_paint").hide();
                for (i = 0; i < users.length; i++) {
                    switch(users[i]) {
                        case 'Paint':
                            $("div#ad_paint").show();
                            break;
                        case 'Tires':
                            $("div#ad_tires").show();
                            break;
                        case 'Windshield':
                            $("div#ad_windshield").show();
                            break;
                        default:
                            //keyloss
                            $("div#ad_key").show();
                    }
                }
            }
        })
    });
    $('#save').click(function(){
        window.location.href = "final-page.html";
    })
    $('#sendEmail').click(function(){
        var email = $('#inputEmail').val();
        var data = JSON.stringify({
          email: `${email}`
        });
        $.ajax({
          url: '/send_email',
          type: 'POST',
          headers: {
             "Content-Type": "application/json"
          },
          data: data,
          success: function(response) {
             alert('your recommendation result has been successfully send');
             $("#inputEmail").val('');
          }
        })
    })

});
window.onload = function() {
  var input = document.querySelector('input[type=range]'),
    style_el = document.createElement('style'),
    styles = [],
    track_sel = ['::-webkit-slider-runnable-track'];
  document.body.appendChild(style_el);

  styles.push('');

  input.addEventListener('input', function() {
    var min = this.min || 0,
      max = this.max || 100,
      c_style, u, edge_w, val, str = '';

    this.setAttribute('value', this.value);

    val = this.value + '% 100%';
    str += 'input[type="range"]' + track_sel[0] + '{background-size:' + val + '}';

    styles[0] = str;
    style_el.textContent = styles.join('');
  }, false);
}
