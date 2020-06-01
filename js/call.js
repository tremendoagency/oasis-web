(function($) {
  "use strict"; // Start of use strict

  // Preloader 
  $(window).on('load', function () {
    setTimeout((function() {
      $('#loader').animate({ "opacity": "0" }, 1000, function(){
        $('#loader').remove();
      });
    }), 1000);
  });

  // Video
  var domain = "meet.jit.si";
  var meetingName = "Llamada de Oasis Call";
  var parentElement = document.querySelector("#video");
  var options = {
    roomName: meetingName,
    width: "100%",
    height: "100%",
    parentNode: parentElement,
    interfaceConfigOverwrite: {
      LANG_DETECTION: true,
      //TOOLBAR_BUTTONS: ['microphone', 'camera', 'hangup', 'tileview'],
      filmStripOnly: false,
      SHOW_JITSI_WATERMARK: false,
      JITSI_WATERMARK_LINK: 'https://jitsi.org',
      SHOW_WATERMARK_FOR_GUESTS: false,
      SHOW_BRAND_WATERMARK: false,
      BRAND_WATERMARK_LINK: '',
      SHOW_CHROME_EXTENSION_BANNER: false
    }
  }
  var api = new JitsiMeetExternalAPI(domain, options);
  api.on('participantJoined', () => {
    console.log('opaaaaa');
  });
  api.on('readyToClose', () => {
    console.log('opaaaaa');
  });

})(jQuery); // End of use strict