(function($) {
  "use strict"; // Start of use strict

  // Preloader 
  $('body').jpreLoader({
    showSplash: false,
		showPercentage: true,
    autoClose: true
  }, function() {
    //callback function
  });

  // Video
  const domain = "meet.jit.si";
  const meetingName = "anythinghere";
  const parentElement = document.querySelector("#video");
  var options = {
    roomName: meetingName,
    width: "100%",
    height: "100%",
    parentNode: parentElement,
    interfaceConfigOverwrite: {
      LANG_DETECTION: true,
      TOOLBAR_BUTTONS: ['microphone', 'camera', 'hangup', 'tileview'],
      filmStripOnly: false,
      SHOW_JITSI_WATERMARK: false,
      JITSI_WATERMARK_LINK: 'https://jitsi.org',
      SHOW_WATERMARK_FOR_GUESTS: false,
      SHOW_BRAND_WATERMARK: false,
      BRAND_WATERMARK_LINK: ''
    }
  }
  var api = new JitsiMeetExternalAPI(domain, options);

})(jQuery); // End of use strict