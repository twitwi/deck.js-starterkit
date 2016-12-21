# deck.js-starterkit

A "minimal" repository to start writing a deck.js presentation (contains a lot of extensions).

This is a bigger version of https://github.com/twitwi/deck.js-packed, including a presentation file, some fonts so that the presentation is guaranteed to work offline, some theme, etc.

To see what you'll get, visit https://twitwi.github.io/deck.js-starterkit/

##  To use it

Step 1, get the repository:
- download a zip (https://github.com/twitwi/deck.js-starterkit/archive/master.zip)
- or, just clone it (if you want to go private)
- or, fork it on github
- or, "github import" it (if you'll make multiple presentations, as github won't allow you to have multiple clones of a single repository) by entering this url `https://github.com/twitwi/deck.js-starterkit.git` on the [github import page](https://import.github.com).

Step 2, modify the `index.html`:
- change the metadata,
- write your slides, remove the example ones

Optional, step 3, cleanup:
- remove the `fonts/` folder if you do not intend to write any math equations or your presentation will always be given online
- remove the `local-fonts/` folder if you do not use the theme (or your presentation will always be given online)
- remove example slides

Optional, step 4, change the theme:


## What it contains

Latest version (see around https://github.com/twitwi/deck.js/blob/master/extensions/includedeck/load.js#L187 for details):
- profile-6 + lightreddense-theme + katex-fonts



## Helper for building the repository / customizing it

Deck.js profile with extensions:

    git clone https://github.com/twitwi/deck.js tmpdeck
    git -C tmpdeck/ pull
    node ./tmpdeck/extensions/bundle-maker/make-packed.js "profile-6" deck-packed.js
    sed -i -e 's@/.*/tmpdeck//*@..../@g' deck-packed.js

Fonts for offline KaTeX (math equations):

    git clone --depth 1 https://github.com/twitwi/KaTeX.git tmpkatex
    rm -rf fonts/ && cp -r tmpkatex/static/fonts/ .

