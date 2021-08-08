function setCurrentWindowSize(horizontalRatio, verticalRatio) {

    var currentWindow = workspace.activeClient;

    if (currentWindow.moveable) {
        var currentDisplay = workspace.clientArea(KWin.MaximizeArea, currentWindow);

        var windoWidth = currentDisplay.width * horizontalRatio;
        var windowHeight = currentDisplay.height * horizontalRatio;

        var dx = (currentDisplay.width - windoWidth) / 2;
        var dy = (currentDisplay.height - windowHeight) / 2;

        var X = currentDisplay.x + dx;
        var Y = currentDisplay.y + dy;

        currentWindow.geometry = {
            x: X, y: Y,
            width: windoWidth, height: windowHeight
        };
    }
}
registerShortcut(
    "Reduce Windows to 75% Width Height and Center (HD)",
    "Center & 3/4th-ify Window Size to the Monitor",
    "Ctrl+Meta+Z",
    function () {setCurrentWindowSize(.75,.75);}
    )

registerShortcut(
    "Reduce Windows to 66% Width Height and Center (HD)",
    "Center & 2/3rd-ify Window Size to the Monitor",
    "Ctrl+Meta+Z",
    function () {setCurrentWindowSize(.66,.66);}
    )


registerShortcut(
    "Reduce Windows to 50% Width Height and Center (1440p)",
    "Center & Half-ify Window Size to the Monitor and Center",
    "Ctrl+Meta+Z",
    function () {setCurrentWindowSize(.5,.5);}
    )

registerShortcut(
    "Reduce Windows to 33% Width Height and Center (4K)",
    "Center & Third-ify Window Size to the Monitor",
    "Ctrl+Meta+Z",
    function () {setCurrentWindowSize(.33,.33);}
    )

registerShortcut(
    "Reduce Windows to 25% Width Height and Center (HD)",
    "Center & Quarter-ify Window Size to the Monitor",
    "Ctrl+Meta+Z",
    function () {setCurrentWindowSize(.25,.25);}
    )

//registerShortcut(
//    "If you are modding Place ->Description of Function here <-",
//    "->This Text will go to the Shortcuts List<-",
//    "->Ctrl+Meta+Z<-",  //The default Keyboard Shortcut for this function
//    function () {setCurrentWindowSize(.75,.75);}  //call the function with your custom values
//    )
