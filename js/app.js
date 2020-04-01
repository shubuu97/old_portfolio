$(document).ready(function() {
  // ========================================================================= //
  //  Typed Js
  // ========================================================================= //

  var typed = $(".typed");

  $(function() {
    typed.typed({
      strings: ["MY NAME IS SHUBHAM.", "I'M A FULL STACK WEB DEVELOPER."],
      typeSpeed: 100,
      loop: true
    });
  });

  // ========================================================================= //
  //  Waypoint animation
  // ========================================================================= //

  // About Me Section
  $(".lp-animate").waypoint(
    function(direction) {
      $(".lp-animate").addClass("animated lightSpeedIn");
    },
    {
      offset: "100%"
    }
  );

  // // Personal Skill Section
  $(".ps-animate").waypoint(
    function(direction) {
      $(".ps-animate").addClass("animated zoomIn");
      $("ps-animate").css("opacity", "1");
    },
    {
      offset: "60%"
    }
  );

  // Professional Skill, Startup Projects, Experience & Awards Section
  $(".pulse-animate-1").waypoint(
    function(direction) {
      $(".pulse-animate-1").addClass("animated pulse");
    },
    {
      offset: "30%"
    }
  );

  $(".pulse-animate-2").waypoint(
    function(direction) {
      $(".pulse-animate-2").addClass("animated pulse");
    },
    {
      offset: "50%"
    }
  );

  $(".pulse-animate-3").waypoint(
    function(direction) {
      $(".pulse-animate-3").addClass("animated pulse");
    },
    {
      offset: "50%"
    }
  );

  $(".pulse-animate-4").waypoint(
    function(direction) {
      $(".pulse-animate-4").addClass("animated pulse");
    },
    {
      offset: "50%"
    }
  );

  $(".pulse-animate-5").waypoint(
    function(direction) {
      $(".pulse-animate-5").addClass("animated pulse");
    },
    {
      offset: "40%"
    }
  );

  // Certificate Section
  $(".roll-animate").waypoint(
    function(direction) {
      $(".roll-animate").addClass("animated rollIn");
    },
    {
      offset: "70%"
    }
  );
});
