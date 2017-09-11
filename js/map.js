function initMap(){

	// testing
	// alert('go');
	// Google maps is ready to be used
	var theDiv = document.querySelector('#tbm-map');

	// Data on Te Papa
	var tbmData = {
		lat: -41.281461,
		lng: 174.775767,
		// icon: 'filename.jpg'
	};

	var mapOptions = {
		zoom: 15,
		center: tbmData
	}

	// Create the map
	var theMap = new google.maps.Map(theDiv, mapOptions);


	// Options for the Te Papa marker
	var tbmMarkerOptions = {
		position: tbmData,
		map: theMap,
		icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
	};

	// Create the icon after map is created
	var tbmMarker = new google.maps.Marker(tbmMarkerOptions);


	// Find out where the user is
	// Make sure the device has geolocation capabilities
	if (navigator.geolocation) {

		//yes, the device has geolocation capabilities
		//Ask the user for their location
		navigator.geolocation.getCurrentPosition(function(position){

			console.log(position);

			var userData = {
				lat: position.coords.latitude,
				lng: position.coords.longitude
			};

			//Prepare the user marker options
			var userMarkerOption = {
				position: userData,
				map: theMap
			};

			//Create a marker to represent the user
			var userMarker = new google.maps.Marker(userMarkerOption);

			// Drop the icon in to catch the eye
			userMarker.setAnimation(google.maps.Animation.DROP);

			// Focus on the user's location
			// pan over nicely if the two points are close enough
			// Instantly transition if points are far apart
			theMap.panTo(userData);

		// Prepare the nerd (Good at calculating routes)
		var directionsService = new google.maps.DirectionsService();

		// Prepare the artist (to draw directionson the map)
		var directionsDisplay = new google.maps.DirectionsRenderer();

		//Tell the artist which map to pint on
		directionsDisplay.setMap(theMap);

		//Direction setting
		var directionsSettings = {
			origin: userData,
			destination: tbmData,
			travelMode: google.maps.TravelMode['DRIVING'] // WALKING, BICYLCING, TRANSIT
		};

		//Do the calculations (this actually gets sent to Google)
		directionsService.route(directionsSettings, function(response, status) {
			//Once the maths is complete
			if (status == 'OK') {
				//Tell the artist to draw on the map
				directionsDisplay.setDirections(response);
			}
		});

	});


	} else {
		// No!!!
	}
};

