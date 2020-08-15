//Original widget codes

window.myWidgetParam ? window.myWidgetParam : (window.myWidgetParam = []);
window.myWidgetParam.push({
  id: 11,
  cityid: "3054643",
  appid: "114a39f2791e27bc8bf67c776b796c3b",
  units: "metric",
  containerid: "openweathermap-widget-11"
});

(function () {
  var script = document.createElement("script");
  script.async = true;
  script.charset = "utf-8";
  script.src =
    "//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(script, s);
})();
