# Basic Lazy Loader

Super tiny (416 **bytes**) JavaScript file that enables basic lazy-loading on your web pages.


## What It Does and Doesn't

This Basic Lazy-Loader simply detects when all the non-lazy-loaded page elements have finished loading, and only then, begins to load in the image files that you have chosen to lazy-load.

Yes, it **does** allow setting an initial image to load in normally, which is a good opportunity to show a "loading" spinner graphic -- or a low-res version of the image -- as a temporary placeholder while the rest of the page loads.

No, it does **not** (as of now) try to detect the size of the image or keep a true-to-size place held for it, etc. **unless** you set an explicit `width` and/or `height` attribute. <a href="#note">See note below.</a>


## How To Use

For any given image, instead of adding the file's path as a `src` attribute, add it as a `data-src` attribute.

Then, just add a `b-lazy` class to the element.

That's it.

Here's an example:

    <!-- DON'T DO: -->
    <img src="path/to/file.jpg">
    
    <!-- DO: -->
    <img class="b-lazy" data-src="path/to/file.jpg">

Now, this image will not load until the rest of the page has finished loading.


### Note

If the image will display on your webpage at a fixed size (if it does not have a responsive or fluid width and height), set specific `width` and `height` attributes on the `<img>` tag in order to preserve the space that the lazy-loaded image will fill once it loads. Example:

    <!-- if the image should display 600px wide and 400px tall -->
    <img class="b-lazy" data-src="path/to/file.jpg" width="600" height="400">


### Another Idea

Consider setting a loading spinner or low-res version of the image as its initial `src` value. That way the page will show the spinner or low-res version immediately, then will swap it out with the intended final version of the image after the rest of the page loads. Example:

    <img class="b-lazy" src="path/to/low-res-img-or-spinner.gif" data-src="path/to/real-file.jpg">

One word of caution with this: this does mean that your page will load extra files onto the page (the initial one and the final one), so just make sure those initial images have a small file size.


## Browser Compatibility, Dependencies

Should work in all modern and mobile browsers, IE 8 and higher.

It is written as plain JavaScript, so there are **no dependencies** besides having JavaScript enabled in your browser. If you want to support that as well, you'll need to use `<noscript>` tags. Example:

    <img class="b-lazy" data-src="path/to/file.jpg">
    <noscript>
      <img src="path/to/file.jpg">
    </noscript>

Kinda overkill, but that's how you'd do it if you had to. Enjoy.
