/* Basic Lazy-Loader v1.0, copyright 2016 Eric Butler, licensed under GNU GPLv3, free for personal and commercial use.
 * https://github.com/ericbutler555/basic-lazy-loader/tree/master
 */
function basicLazyLoad () {
  var lazyArray = document.getElementsByClassName("b-lazy");
  if (lazyArray.length > 0) {
    for (i = 0; i < lazyArray.length; i++) {
      var dataSrc = lazyArray[i].getAttribute("data-src");
      if (dataSrc && dataSrc != "") {
        lazyArray[i].src = dataSrc;
      } // end if
    } // end for
  } // end if
} // end function
window.addEventListener("load", basicLazyLoad, false);
