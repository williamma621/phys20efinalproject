function calculate_flux_w_luminosity(luminosity, distance){
    return luminosity / (4 * Math.PI * Math.pow(distance, 2))
}
function calculate_flux_w_black_body(temperature, radius, distance){
    return calculate_flux_w_luminosity(5.67e-8 * Math.pow(temperature, 4) * 4 * Math.PI * Math.pow(radius, 2), distance)
}

function default_values(name){
    switch(name){
        case 'Sun':
            luminosity = '3.846e+26'
            distance = 149597870700
            break
        case 'Moon':
            luminosity = '9.615e+20'
            distance = 384000000
            break
        case 'Sirius':
            luminosity = '9.77e27'
            distance = 8.136e+16
        case 'Polaris':
            luminosity = '4.846e29'
            distance = 4.096e+18
    }
    document.getElementById('luminosity_input_box').value = luminosity
    document.getElementById('distance_input_box').value = distance
}

function default_valuesBlackBody(name){
    switch(name){
        case 'Sun':
            temperature = 5772
            radius = 6.96e8
            distance_2 = 149597870700
            break
        case 'Moon':
            temperature = 394
            radius = 174e4
            distance_2 = 384000000
            break
        case 'Sirius':
            temperature = 9940
            radius = 1.19e9
            distance_2 = 8.136e+16
        case 'Polaris':
            temperature = 6015
            radius = 2.61e10
            distance_2 = 4.096e+18

    }
    document.getElementById('temperature_input_box').value = temperature
    document.getElementById('radius_input_box').value = radius
    document.getElementById('distance_input_box_2').value = distance_2
}

defaultFlux = 1368







document.getElementById('luminosityDefaults').addEventListener('change', function(event) {
    default_values(event.target.value)

    luminosity = document.getElementById('luminosity_input_box').value
    distance = document.getElementById('distance_input_box').value
    flux = calculate_flux_w_luminosity(luminosity, distance)
    result = flux/defaultFlux
    document.querySelectorAll('img')[0].style.filter = `brightness(${result})`;
    document.getElementById('flux1').innerHTML = flux.toFixed(2)
})

document.getElementById('luminosity_input_box').addEventListener('input', function(event){
    luminosity = event.target.value
    flux = calculate_flux_w_luminosity(luminosity, distance)
    result = flux/defaultFlux
    document.querySelectorAll('img')[0].style.filter = `brightness(${result})`;
    document.getElementById('flux1').innerHTML = flux.toFixed(2)
})
document.getElementById('distance_input_box').addEventListener('input', function(event){
    distance = event.target.value
    flux = calculate_flux_w_luminosity(luminosity, distance)
    result = flux/defaultFlux
    document.querySelectorAll('img')[0].style.filter = `brightness(${result})`;
    document.getElementById('flux1').innerHTML = flux.toFixed(2)

})

display_1 = -1
document.getElementById('learn_more').addEventListener('click', function(event){
    display_1 *= -1
    if(display_1 == 1){
    document.getElementById('learn_more').innerHTML = 'Hide'
    document.getElementById('about_luminosity').style.display = 'block'
    }
    if(display_1 == -1){
        document.getElementById('learn_more').innerHTML = 'Learn More'
        document.getElementById('about_luminosity').style.display = 'none'
    }
})





document.getElementById('blackBodyDefaults').addEventListener('change', function(event) {
    default_valuesBlackBody(event.target.value)

    temperature = document.getElementById('temperature_input_box').value
    radius = document.getElementById('radius_input_box').value
    distance_2 = document.getElementById('distance_input_box_2').value

    flux = calculate_flux_w_black_body(temperature, radius, distance_2)
    result = flux/defaultFlux
    document.querySelectorAll('img')[0].style.filter = `brightness(${result})`;
    document.getElementById('flux2').innerHTML = flux.toFixed(2)
})

document.getElementById('temperature_input_box').addEventListener('input', function(event){
    temperature = event.target.value
    flux = calculate_flux_w_black_body(temperature, radius, distance_2)
    result = flux/defaultFlux
    document.querySelectorAll('img')[0].style.filter = `brightness(${result})`;
    document.getElementById('flux2').innerHTML = flux.toFixed(2)
})
document.getElementById('radius_input_box').addEventListener('input', function(event){
    radius = event.target.value
    flux = calculate_flux_w_black_body(temperature, radius, distance_2)
    result = flux/defaultFlux
    document.querySelectorAll('img')[0].style.filter = `brightness(${result})`;
    document.getElementById('flux2').innerHTML = flux.toFixed(2)
})
document.getElementById('distance_input_box_2').addEventListener('input', function(event){
    distance_2 = event.target.value
    flux = calculate_flux_w_black_body(temperature, radius, distance_2)
    result = flux/defaultFlux
    document.querySelectorAll('img')[0].style.filter = `brightness(${result})`;
    document.getElementById('flux2').innerHTML = flux.toFixed(2)
})

display_2 = -1
document.getElementById('learn_more_2').addEventListener('click', function(event){
    display_2 *= -1
    if(display_2 == 1){
    document.getElementById('learn_more_2').innerHTML = 'Hide'
    document.getElementById('about_black_bodies').style.display = 'block'
    }
    if(display_2 == -1){
        document.getElementById('learn_more_2').innerHTML = 'Learn More'
        document.getElementById('about_black_bodies').style.display = 'none'
    }
})



















document.getElementById('image_choosing_methods').addEventListener('change', function(event) {
    switch(event.target.value){
        case 'Website Url':
            document.getElementById('urlInput').style.display = 'block'
            document.getElementById('uploadInput').style.display  ='none'
            break

        case 'Upload':
            document.getElementById('uploadInput').style.display = 'block'
            document.getElementById('urlInput').style.display  ='none'
            break
    }
})

document.getElementById('uploadInput').addEventListener('change', function(event) {
    const file = event.target.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const uploadedImage = document.getElementById('uploadedImage');
            uploadedImage.src = e.target.result;
            uploadedImage.style.display = 'block';
        };
        reader.readAsDataURL(file);
    }
});

document.getElementById('urlInput').addEventListener('input', function(event) {
    document.getElementById('uploadedImage').src = event.target.value
})

document.getElementById('image_choosing_flux').addEventListener('change', function(event) {
    switch(event.target.value){
        case 'Sunlight':
            defaultFlux = 1368
            break

        case 'Moonlight':
            defaultFlux = 519
            break

        case 'Enter a custom flux value in W/m^2':
            document.getElementById('fluxInput').style.display  ='block'
            break
    }
})

document.getElementById('fluxInput').addEventListener('input', function(event) {
    defaultFlux = parseInt(event.target.value)
})
