/*=================================================
true = yes/enable
false = no/disable
1000 = 1 seconds
=================================================*/

/*=================================================
countdown
=================================================*/
var _countdown = true; // countdown toggle
var _countdownDate = new Date(2015, 12 - 1, 20); // 2016-12-25
var _countdownTimezone = '+2'; // timezone

/*=================================================
color version
=================================================*/
var _color = 'red'; // default, red, green, blue, purple, pink, brown

/*=================================================
background
=================================================*/
var _bg = 2; // 1 = image background, 2 = video background, 3 = youtube video background
var _gradient = true; // gradient overlay
var _gradientStyle = 1; // gradient overlay style, 1, 2, 3

/*=================================================
background image
=================================================*/
var _bgImgStyle = 2; // 1 = single image, 2 = change image when section change, 3 = change image every 5 seconds(or delay time set by this config file), good for single section
var _bgSliderDelay = 5000; // bckground image delay
var _bgSliderTransition = 'fade'; // do not work for _bgImgStyle = 2, fade, fade2, slideLeft, slideLeft2, slideRight, slideRight2, slideUp, slideUp2, slideDown, slideDown2, zoomIn, zoomIn2, zoomOut, zoomOut2, swirlLeft, swirlLeft2, swirlRight, swirlRight2, burn, burn2, blur, blur2, flash, flash2, random
var _bgSliderAnimation = 'kenburns'; // do not work for _bgImgStyle = 2, kenburns, kenburnsUp, kenburnsDown, kenburnsRight, kenburnsLeft, kenburnsUpLeft, kenburnsUpRight, kenburnsDownLeft, kenburnsDownRight, random

/*=================================================
youtube video
=================================================*/
var _ytUrl = 'ZBVZAeGHIv8'; // youtube video id
var _ytQuality = 'hightres'; // hightres, hd1080, hd720, default - youtube video quality
var _ytStart = 1; // start time (seconds)
var _ytEnd = 0; // end time (seconds), 0 to ignored
var _ytLoop = true; // loop
var _ytMute = false; // mute on start
var _ytRemoveVolumeIcon = true; // remove volume icon, if _ytMute = true will still have volume

/*=================================================
html5 video
=================================================*/
var _videoMute = true; // mute video
var _removeVolumeIcon = true; // remove volume icon, if _videoMute = true will still have volume

/*=================================================
contact
=================================================*/
var _contactEmail = 'ian.petras@gmail.com'; // contact email address
var _contactSuccess = '<i class="icons fa fa-check valid"></i> message has been sent'; // success submit message
var _contactInputError = '<i class="icons fa fa-close error"></i> all fields are required'; // input error message
var _contactEmailError = '<i class="icons fa fa-close error"></i> email address is invalid'; // email error message

/*=================================================
subscribe
=================================================*/
var _subscribe = 2; // 1 = php send email, 2 = save to txt file, 3 = mailchimp

/* php */
var _subscribeEmail = 'contact@recondis.com'; // subscribe email address
var _subscribeSuccess = '<i class="icons fa fa-check valid"></i> thank you for subscribing'; // subscribe success message
var _subscribeError = '<i class="icons fa fa-close error"></i> email address is invalid'; // subscribe error message

/* mailchimp */
var _mailchimpUrl = ''; // mailchimp post url

$.ajaxChimp.translations.eng = { // custom mailchimp message
  'submit': 'please wait',
  0: '<i class="icons fa fa-check"></i> we have sent you a confirmation email',
  1: '<i class="icons fa fa-close"></i> enter a valid e-mail address',
  2: '<i class="icons fa fa-close"></i> e-mail address is not valid',
  3: '<i class="icons fa fa-close"></i> e-mail address is not valid',
  4: '<i class="icons fa fa-close"></i> e-mail address is not valid',
  5: '<i class="icons fa fa-close"></i> e-mail address is not valid'
}

// dedault mailchimp message for reference

// Submit Message
// 'submit': 'Submitting...'
// Mailchimp Responses
// 0: 'We have sent you a confirmation email'
// 1: 'Please enter a value'
// 2: 'An email address must contain a single @'
// 3: 'The domain portion of the email address is invalid (the portion after the @: )'
// 4: 'The username portion of the email address is invalid (the portion before the @: )'
// 5: 'This email address looks fake or invalid. Please enter a real email address'

/*=================================================
disable section, true = disable, false = enable
last value without comma
=================================================*/
var _disableSection = {
  about : false, // about
  services : false, // service
  contact : false // contact
};