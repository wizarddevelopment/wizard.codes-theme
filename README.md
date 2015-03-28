# Setup for dev
 - `gem install sass`
 - `npm install`
 - `grunt watch`

# To install on ghost.org

 - go here https://ghost.org/blogs/wizarddev/
 - upload a zip of this theme
 - make sure you include ran `grunt` first

## User Guide

#### Cover Photo
To add a cover photo. Just add a title of `cover` to the image. e.g.

    ![cover](/content/images/2014/Jul/8367493679_f712198e6e_h.jpg)

Or use the more modern image upload for cover images in post settings.

#### Subtitles
To add a subtitle. Just add a `<span>` with the class of `subtitle`. e.g

    <span id="subtitle">Do they really exist, or are they unicorns?</span>

_P.S. If you do not want the subtitle to be picked up by the excerpt, simply add the subtitle at the end of the article. This way the excerpt will not pick it up._

## Thanks

Thanks to [@roycehaynes](https://twitter.com/roycehaynes), the original porter of the theme to Ghost as well as the Ghost team for creating this blog platform.

Special shout out to [Dave Gamache](http://blog.davegamache.com/articles), the original designer.
