# KWIN Script to Center and Resize a Window in a monitor on a Multi-Monitor Setup

This is a basic script redone using sample and understanding from the following sources
* https://github.com/KSmanis/kwin-move-window-to-center
* https://github.com/piehei/kde-plasma-center-window
* https://github.com/zgana/kwin-custom-move-resize

The Scripting API documentation is quite sparse to really understand what each bit of code does.
So had to use the above sources to figure it out.

Essentially, it calculates the screen size and resizes the window and adds a margin that is calculated using the total screen area to position it back accurately in the specific screen the window existed in.

# Installation

Clone this repo and run `plasmapkg2 --install . `inside the directory.  
Go to `Window Management -> Kwin Scripts` and enable the newly installed script  
Go to `Shortcuts` and assign a shortcut for the actions you need.

Look at  contents/code/main.js to customise as per your requirements
