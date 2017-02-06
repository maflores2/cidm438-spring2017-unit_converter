var unitConverter = angular.module("UnitConverter", []);

/* conversion rates and UI idea from: http://convert.french-property.co.uk/ */

unitConverter.controller('UnitConverterController', [
	'$scope', function($scope){
		
		var ucc = this;
		
		//attributes
		ucc.lengthValue = 0;
		

		//cities to populate the drop-down box
		ucc.metric_volume_units = 
		[
			{
				unit_name: "Cubic Centimeters",
				unit_code: "cm3",
				type: "metric"
			},
			{
				unit_name: "Cubic Decimeters",
				unit_code: "dm3",
				type: "metric"
			},
			{
				unit_name: "Cubic Meters",
				unit_code: "m3",
				type: "metric"
			},
			{
				unit_name: "Liters",
				unit_code: "l",
				type: "metric"
			},	
			{
				unit_name: "Hectoliters",
				unit_code: "hl",
				type: "metric"
			}
		];		
		
		 ucc.imperial_volume_units = 
    [
        {
            unit_name: "Cubic Inches",
            unit_code: "in3",
            type: "imperial"
        },
         {
            unit_name: "Cubic Foot",
            unit_code: "ft3",
            type: "imperial"
        },
         {
            unit_name: "Fluid Ounce",
            unit_code: "fl oz",
            type: "imperial"
        },
         {
            unit_name: "Pint",
            unit_code: "pt",
            type: "imperial"
        },
         {
            unit_name: "Gallon",
            unit_code: "g",
            type: "imperial"
        }
    ];
    
    	ucc.metric_length_units = 
		[
			{
				unit_name: "millimeters",
				unit_code: "mm",
				type: "metric"
			},
			{
				unit_name: "centimeters",
				unit_code: "cm",
				type: "metric"
			},
			{
				unit_name: "meters",
				unit_code: "m",
				type: "metric"
			},
			{
				unit_name: "kilometers",
				unit_code: "km",
				type: "metric"
			},	
		];		
		
		ucc.imperial_length_units = 
    [
        {
            unit_name: "inches",
            unit_code: "in",
            type: "imperial"
        },
         {
            unit_name: "feet",
            unit_code: "ft",
            type: "imperial"
        },
         {
            unit_name: "yards",
            unit_code: "yd",
            type: "imperial"
        },
         {
            unit_name: "miles",
            unit_code: "mi",
            type: "imperial"
        },
         {
            unit_name: "nautical miles",
            unit_code: "nm",
            type: "imperial"
        }
    ];
    
    	ucc.metric_mass_units = 
		[
			{
				unit_name: "milligrams",
				unit_code: "mg",
				type: "metric"
			},
			{
				unit_name: "grams",
				unit_code: "g",
				type: "metric"
			},
			{
				unit_name: "kilograms",
				unit_code: "kg",
				type: "metric"
			},
			{
				unit_name: "Tons",
				unit_code: "t",
				type: "metric"
			},	
		];	
		
		ucc.imperial_mass_units = 
    [
        {
            unit_name: "ounces",
            unit_code: "oz",
            type: "imperial"
        },
         {
            unit_name: "pounds",
            unit_code: "lbs",
            type: "imperial"
        },
         {
            unit_name: "stone",
            unit_code: "s",
            type: "imperial"
        },
         {
            unit_name: "hundredweight",
            unit_code: "cwt",
            type: "imperial"
        },
    ];
		
		
		function lengthUpdated(){
			console.log(ucc.lengthValue);
		}
		
		$scope.$watch('ucc.lengthValue', lengthUpdated);
		
		ucc.selected_metric_volume_unit = ucc.metric_volume_units[0];
		ucc.selected_imperial_volume_unit = ucc.imperial_volume_units[0];
		ucc.selected_metric_length_units = ucc.metric_length_units[0];
		ucc.selected_imperial_length_unit = ucc.imperial_length_units[0];
		ucc.selected_metric_mass_unit = ucc.metric_mass_units[0];
		ucc.selected_imperial_mass_unit = ucc.imperial_mass_units[0];
		
		//behaviors
		
		ucc.showSelectedUnit = function(){
			console.log(ucc.selected_metric_volume_unit.unit_name);
			console.log(ucc.selected_imperial_volume_unit.unit_name);
			console.log(ucc.selected_metric_length_unit.unit_name);
			console.log(ucc.selected_imperial_length_unit.unit_name);
			console.log(ucc.selected_metric_mass_unit.unit_name);
			console.log(ucc.selected_imperial_mass_unit.unit_name);
		}
		
	}
]);
