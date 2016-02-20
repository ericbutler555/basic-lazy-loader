/* Basic Lazy-Loader v1.0.1, copyright 2016 Eric Butler, licensed under GNU GPLv3, free for personal and commercial use.
 * https://github.com/ericbutler555/basic-lazy-loader/tree/master
 */
function basicLazyLoad () {
  var lazyArray = (document.getElementsByClassName) ? document.getElementsByClassName("b-lazy") : document.querySelectorAll(".b-lazy");
  if (lazyArray.length > 0) {
    for (i = 0; i < lazyArray.length; i++) {
      var dataSrc = lazyArray[i].getAttribute("data-src");
      if (dataSrc && dataSrc != "") {
        lazyArray[i].src = dataSrc;
      } // end if
    } // end for
  } // end if
} // end function
if (window.addEventListener) {
  window.addEventListener("load", basicLazyLoad, false);
} else {
  window.attachEvent("onload", basicLazyLoad);
} // end else
