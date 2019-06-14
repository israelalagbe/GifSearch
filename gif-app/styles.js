(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "\r\n\r\n@import url(http://fonts.googleapis.com/css?family=Cutive%20Mono:400);\n/* You can add global styles to this file, and also import other style files */\n/* ------------------------------------------------------------------------------\r\n\tTemplate Name: Flosix\r\n\tAuthor: Designstub\r\n\tAuthor URI: http://www.designstub.com\r\n\tLicense: GNU General Public License version 3.0\r\n\tLicense URI: http://www.gnu.org/licenses/gpl-3.0.html\r\n\tVersion: 1.0\r\n\r\n/* ------------------------------------------------------------------------------\r\n\tTypography\r\n-------------------------------------------------------------------------------*/\np {\r\n    font-size: 14px;\r\n    line-height: 22.4px;\r\n    color: #6c7279;\r\n}\nh1 {\r\n    font-size: 65px;\r\n    color: #2d3033;\r\n}\nh2 {\r\n    font-size: 40px;\r\n    color: #2d3033;\r\n}\nh3 {\r\n    font-size: 28px;\r\n    color: #2d3033;\r\n    font-weight: 300;\r\n}\nh4 {\r\n    font-size: 22px;\r\n    color: #2d3033;\r\n    font-weight: 400;\r\n}\nh5 {\r\n    font-size: 14px;\r\n    color: #2d3033;\r\n    font-weight: 700;\r\n}\n.btn {\r\n    background-color: #333;\r\n    color: #fff;\r\n    font-size: 15px;\r\n    font-weight: 600;\r\n    letter-spacing: 1px;\r\n    border-radius: 0;\r\n    padding: 3% 10% 3% 10%;\r\n    display: inline-block;\r\n    text-transform: uppercase;\r\n}\n.btn:hover, .btn:focus {\r\n    background-color: #000;\r\n    color: #fff;\r\n}\n.btn-large {\r\n    padding: 15px 40px;\r\n}\n/* ------------------------------------------------------------------------------\r\n\tGlobal Styles\r\n-------------------------------------------------------------------------------*/\na {\r\n    color: #e84545;\r\n}\na:hover, a:focus {\r\n    text-decoration: none;\r\n    transition: background-color, color, 0.3s;\r\n}\nbody {\r\n    font-family: \"Cutive Mono\";\r\n    font-weight: 400;\r\n    color: #fff;\r\n}\nul, ol {\r\n    margin: 0;\r\n    padding: 0;\r\n}\nul li {\r\n    list-style: none;\r\n}\n.section {\r\n    padding: 50px 0;\r\n}\n.no-padding {\r\n    padding: 0;\r\n}\n.no-gutter [class*=col-] {\r\n    padding-right: 0;\r\n    padding-left: 0;\r\n}\n.extra-padding {\r\n    margin: 60px 0 0 100px;\r\n}\n/* ------------------------------------------------------------------------------\r\n\t Header\r\n-------------------------------------------------------------------------------*/\n#header {\r\n    position: fixed;\r\n    width: 100%;\r\n    z-index: 999;\r\n}\n#header .header-content {\r\n    margin: 0 auto;\r\n    padding: 60px 10%;\r\n    width: 100%;\r\n    transition: padding 0.3s;\r\n}\n#header .logo {\r\n    float: left;\r\n}\n#header.fixed {\r\n    background-color: rgba(255, 255, 255, 1);\r\n}\n#header.fixed .header-content {\r\n    border-bottom: 0;\r\n    padding: 25px 10%;\r\n}\n#header.fixed .nav-toggle {\r\n    top: 18px;\r\n}\n.navigation.open {\r\n    opacity: 0.9;\r\n    visibility: visible;\r\n    transition: opacity 0.5s;\r\n}\n.navigation {\r\n    float: right;\r\n}\n.navigation li {\r\n    display: inline-block;\r\n}\n.navigation, .navigation a {\r\n    color: rgba(0, 0, 0, 1);\r\n    font-size: 16px;\r\n    margin-left: 40px;\r\n    letter-spacing: -1px;\r\n}\n.navigation a:hover, .navigation a.active {\r\n    color: #000;\r\n}\n.nav-toggle {\r\n    display: none;\r\n    height: 44px;\r\n    overflow: hidden;\r\n    position: fixed;\r\n    right: 5%;\r\n    text-indent: 100%;\r\n    top: 32px;\r\n    white-space: nowrap;\r\n    width: 44px;\r\n    z-index: 99999;\r\n    transition: all 0.3s;\r\n}\n.nav-toggle:before, .nav-toggle:after {\r\n    border-radius: 50%;\r\n    content: \"\";\r\n    height: 100%;\r\n    left: 0;\r\n    position: absolute;\r\n    top: 0;\r\n    width: 100%;\r\n    -webkit-transform: translateZ(0);\r\n    transform: translateZ(0);\r\n    -webkit-backface-visibility: hidden;\r\n    backface-visibility: hidden;\r\n    transition-property: -webkit-transform;\r\n    transition-property: transform;\r\n    transition-property: transform, -webkit-transform;\r\n}\n.nav-toggle:before {\r\n    background-color: #333;\r\n    -webkit-transform: scale(1);\r\n    transform: scale(1);\r\n    transition-duration: 0.3s;\r\n}\n.nav-toggle:after {\r\n    background-color: #000;\r\n    -webkit-transform: scale(0);\r\n    transform: scale(0);\r\n    transition-duration: 0s;\r\n}\n.nav-toggle span {\r\n    background-color: #fff;\r\n    bottom: auto;\r\n    display: inline-block;\r\n    height: 3px;\r\n    left: 50%;\r\n    position: absolute;\r\n    right: auto;\r\n    top: 50%;\r\n    width: 18px;\r\n    z-index: 10;\r\n    -webkit-transform: translateX(-50%) translateY(-50%);\r\n    transform: translateX(-50%) translateY(-50%);\r\n}\n.nav-toggle span:before, .nav-toggle span:after {\r\n    background-color: #fff;\r\n    content: \"\";\r\n    height: 100%;\r\n    position: absolute;\r\n    right: 0;\r\n    top: 0;\r\n    width: 100%;\r\n    -webkit-transform: translateZ(0);\r\n    transform: translateZ(0);\r\n    -webkit-backface-visibility: hidden;\r\n    backface-visibility: hidden;\r\n    transition: -webkit-transform 0.3s;\r\n    transition: transform 0.3s;\r\n    transition: transform 0.3s, -webkit-transform 0.3s;\r\n}\n.nav-toggle span:before {\r\n    -webkit-transform: translateY(-6px) rotate(0deg);\r\n    transform: translateY(-6px) rotate(0deg);\r\n}\n.nav-toggle span:after {\r\n    -webkit-transform: translateY(6px) rotate(0deg);\r\n    transform: translateY(6px) rotate(0deg);\r\n}\n.nav-toggle.close-nav:before {\r\n    -webkit-transform: scale(0);\r\n    transform: scale(0);\r\n}\n.nav-toggle.close-nav:after {\r\n    -webkit-transform: scale(1);\r\n    transform: scale(1);\r\n}\n.nav-toggle.close-nav span {\r\n    background-color: rgba(255, 255, 255, 0);\r\n}\n.nav-toggle.close-nav span:before, .nav-toggle.close-nav span:after {\r\n    background-color: #fff;\r\n}\n.nav-toggle.close-nav span:before {\r\n    -webkit-transform: translateY(0) rotate(45deg);\r\n    transform: translateY(0) rotate(45deg);\r\n}\n.nav-toggle.close-nav span:after {\r\n    -webkit-transform: translateY(0) rotate(-45deg);\r\n    transform: translateY(0) rotate(-45deg);\r\n}\n/* ------------------------------------------------------------------------------\r\n\t Hero content\r\n-------------------------------------------------------------------------------*/\n.hero {\r\n    margin-top: 10%;\r\n}\n.hero-content {\r\n}\n.hero h1 {\r\n    font-size: 48px;\r\n    text-transform: uppercase;\r\n}\n.hero h4 {\r\n    font-weight: 400;\r\n}\n.hero p {\r\n    padding-top: 20px;\r\n}\n/* ------------------------------------------------------------------------------\r\n\t Portfolio\r\n-------------------------------------------------------------------------------*/\n#portfolio .portfolio-item {\r\n    right: 0;\r\n    margin: 0 0 20px;\r\n    padding: 0 10px;\r\n}\n#portfolio .portfolio-item .portfolio-link {\r\n    display: block;\r\n    position: relative;\r\n    margin: 0 auto;\r\n}\n#portfolio .portfolio-item .portfolio-link .caption {\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    opacity: 0;\r\n    background: rgba(58,54,54,.9);\r\n    transition: all ease .5s;\r\n}\n#portfolio .portfolio-item .portfolio-link .caption:hover {\r\n    opacity: 1;\r\n}\n#portfolio .portfolio-item .portfolio-link .caption .caption-content {\r\n    position: absolute;\r\n    top: 50%;\r\n    width: 100%;\r\n    height: 20px;\r\n    margin-top: -12px;\r\n    text-align: center;\r\n    font-size: 20px;\r\n    color: #fff;\r\n}\n#portfolio .portfolio-item .portfolio-link .caption .caption-content i {\r\n    margin-top: -12px;\r\n}\n#portfolio .portfolio-item .portfolio-link .caption .caption-content h3 {\r\n    margin: 0;\r\n    color: #e9eaed;\r\n    font-size: 17px;\r\n    letter-spacing: 4px;\r\n    text-transform: uppercase;\r\n}\n#portfolio .portfolio-item .portfolio-link .caption .caption-content h4 {\r\n    margin: 10px 0;\r\n    color: #e9eaed;\r\n    font-size: 12px;\r\n    letter-spacing: 2px;\r\n    text-transform: uppercase;\r\n}\n#portfolio * {\r\n    z-index: 2;\r\n}\n/* ------------------------------------------------------------------------------\r\n\t Service\r\n-------------------------------------------------------------------------------*/\n.service {\r\n    margin-bottom: 50px;\r\n}\n.service h4 {\r\n    font-size: 19px;\r\n    color: #000;\r\n    font-weight: 400;\r\n    text-transform: uppercase;\r\n}\n.service-content {\r\n    margin-top: 30px;\r\n}\n.service .icon {\r\n    color: #a1a4a8;\r\n    font-size: 48px;\r\n}\n.service-content h5 {\r\n    text-transform: uppercase;\r\n    font-weight: 400;\r\n    color: #000;\r\n}\n/* ------------------------------------------------------------------------------\r\n\t Footer\r\n-------------------------------------------------------------------------------*/\n.footer {\r\n    text-align: left;\r\n    background-color: #333;\r\n    padding: 7%;\r\n}\n.footer h4 {\r\n    color: #fff;\r\n    margin: 0 0 15px 0;\r\n    padding: 0px;\r\n}\n.footer p {\r\n    color: #c8c8c8;\r\n}\n.footer a {\r\n    color: #fff;\r\n}\n.footer a:hover {\r\n    text-decoration: underline;\r\n}\n.footer .fa-heart {\r\n    color: #e84545;\r\n    font-size: 11px;\r\n    margin: 0 2px;\r\n}\n/* ------------------------------------------------------------------------------\r\n\t Work Details\r\n-------------------------------------------------------------------------------*/\n#app {\r\n    min-height: 20em;\r\n    color: black;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,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QzdCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsY0FBYztJQUNkLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxVQUFVO0FBQ2Q7QUFDQTs7Z0ZBRWdGO0FBQ2hGO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsV0FBVztJQUNYLGdCQUFnQjtJQUNoQix5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksY0FBYztJQUNkLGVBQWU7QUFDbkI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsV0FBVztBQUNmO0FBQ0E7O2dGQUVnRjtBQUNoRjtJQUNJLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsV0FBVztBQUNmO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksMEJBQTBCO0FBQzlCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLGFBQWE7QUFDakI7QUFDQTs7Z0ZBRWdGO0FBRWhGO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL3N0eWxlcy5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFRlbXBsYXRlIE5hbWU6IEZsb3NpeFxyXG5cdEF1dGhvcjogRGVzaWduc3R1YlxyXG5cdEF1dGhvciBVUkk6IGh0dHA6Ly93d3cuZGVzaWduc3R1Yi5jb21cclxuXHRMaWNlbnNlOiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMuMFxyXG5cdExpY2Vuc2UgVVJJOiBodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvZ3BsLTMuMC5odG1sXHJcblx0VmVyc2lvbjogMS4wXHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRUeXBvZ3JhcGh5XHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5cclxuQGltcG9ydCB1cmwoaHR0cDovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Q3V0aXZlJTIwTW9ubzo0MDApO1xyXG5wIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMi40cHg7XHJcbiAgICBjb2xvcjogIzZjNzI3OTtcclxufVxyXG5oMSB7XHJcbiAgICBmb250LXNpemU6IDY1cHg7XHJcbiAgICBjb2xvcjogIzJkMzAzMztcclxufVxyXG5oMiB7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICBjb2xvcjogIzJkMzAzMztcclxufVxyXG5oMyB7XHJcbiAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICBjb2xvcjogIzJkMzAzMztcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbn1cclxuaDQge1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgY29sb3I6ICMyZDMwMzM7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcbmg1IHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiAjMmQzMDMzO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG4uYnRuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIHBhZGRpbmc6IDMlIDEwJSAzJSAxMCU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcbi5idG46aG92ZXIsIC5idG46Zm9jdXMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcbi5idG4tbGFyZ2Uge1xyXG4gICAgcGFkZGluZzogMTVweCA0MHB4O1xyXG59XHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdEdsb2JhbCBTdHlsZXNcclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbmEge1xyXG4gICAgY29sb3I6ICNlODQ1NDU7XHJcbn1cclxuYTpob3ZlciwgYTpmb2N1cyB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IsIGNvbG9yLCAwLjNzO1xyXG4gICAgLW8tdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciwgY29sb3IsIDAuM3M7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IsIGNvbG9yLCAwLjNzO1xyXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciwgY29sb3IsIDAuM3M7XHJcbn1cclxuYm9keSB7XHJcbiAgICBmb250LWZhbWlseTogXCJDdXRpdmUgTW9ub1wiO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcbnVsLCBvbCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcbnVsIGxpIHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuLnNlY3Rpb24ge1xyXG4gICAgcGFkZGluZzogNTBweCAwO1xyXG59XHJcbi5uby1wYWRkaW5nIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuLm5vLWd1dHRlciBbY2xhc3MqPWNvbC1dIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbn1cclxuLmV4dHJhLXBhZGRpbmcge1xyXG4gICAgbWFyZ2luOiA2MHB4IDAgMCAxMDBweDtcclxufVxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHQgSGVhZGVyXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4jaGVhZGVyIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgei1pbmRleDogOTk5O1xyXG59XHJcbiNoZWFkZXIgLmhlYWRlci1jb250ZW50IHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcGFkZGluZzogNjBweCAxMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogcGFkZGluZyAwLjNzO1xyXG4gICAgLW8tdHJhbnNpdGlvbjogcGFkZGluZyAwLjNzO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBwYWRkaW5nIDAuM3M7XHJcbiAgICB0cmFuc2l0aW9uOiBwYWRkaW5nIDAuM3M7XHJcbn1cclxuI2hlYWRlciAubG9nbyB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG4jaGVhZGVyLmZpeGVkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XHJcbn1cclxuI2hlYWRlci5maXhlZCAuaGVhZGVyLWNvbnRlbnQge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMDtcclxuICAgIHBhZGRpbmc6IDI1cHggMTAlO1xyXG59XHJcbiNoZWFkZXIuZml4ZWQgLm5hdi10b2dnbGUge1xyXG4gICAgdG9wOiAxOHB4O1xyXG59XHJcbi5uYXZpZ2F0aW9uLm9wZW4ge1xyXG4gICAgb3BhY2l0eTogMC45O1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzO1xyXG4gICAgLW8tdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXM7XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXM7XHJcbn1cclxuLm5hdmlnYXRpb24ge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcbi5uYXZpZ2F0aW9uIGxpIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG4ubmF2aWdhdGlvbiwgLm5hdmlnYXRpb24gYSB7XHJcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAxKTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0xcHg7XHJcbn1cclxuLm5hdmlnYXRpb24gYTpob3ZlciwgLm5hdmlnYXRpb24gYS5hY3RpdmUge1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbn1cclxuLm5hdi10b2dnbGUge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIGhlaWdodDogNDRweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICByaWdodDogNSU7XHJcbiAgICB0ZXh0LWluZGVudDogMTAwJTtcclxuICAgIHRvcDogMzJweDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICB3aWR0aDogNDRweDtcclxuICAgIHotaW5kZXg6IDk5OTk5O1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG59XHJcbi5uYXYtdG9nZ2xlOmJlZm9yZSwgLm5hdi10b2dnbGU6YWZ0ZXIge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xyXG4gICAgLW1vei1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIC1tb3otdHJhbnNpdGlvbi1wcm9wZXJ0eTogLW1vei10cmFuc2Zvcm07XHJcbiAgICAtby10cmFuc2l0aW9uLXByb3BlcnR5OiAtby10cmFuc2Zvcm07XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tcHJvcGVydHk6IC13ZWJraXQtdHJhbnNmb3JtO1xyXG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtO1xyXG59XHJcbi5uYXYtdG9nZ2xlOmJlZm9yZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgLW1vei10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xyXG4gICAgLW8tdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XHJcbn1cclxuLm5hdi10b2dnbGU6YWZ0ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxuICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICAgIC1tb3otdHJhbnNpdGlvbi1kdXJhdGlvbjogMHM7XHJcbiAgICAtby10cmFuc2l0aW9uLWR1cmF0aW9uOiAwcztcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMHM7XHJcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwcztcclxufVxyXG4ubmF2LXRvZ2dsZSBzcGFuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3R0b206IGF1dG87XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBoZWlnaHQ6IDNweDtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiBhdXRvO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICB3aWR0aDogMThweDtcclxuICAgIHotaW5kZXg6IDEwO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcclxufVxyXG4ubmF2LXRvZ2dsZSBzcGFuOmJlZm9yZSwgLm5hdi10b2dnbGUgc3BhbjphZnRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuICAgIC1tb3otYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAtbW96LXRyYW5zaXRpb246IC1tb3otdHJhbnNmb3JtIDAuM3M7XHJcbiAgICAtby10cmFuc2l0aW9uOiAtby10cmFuc2Zvcm0gMC4zcztcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMC4zcztcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzO1xyXG59XHJcbi5uYXYtdG9nZ2xlIHNwYW46YmVmb3JlIHtcclxuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC02cHgpIHJvdGF0ZSgwZGVnKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTZweCkgcm90YXRlKDBkZWcpO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTZweCkgcm90YXRlKDBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC02cHgpIHJvdGF0ZSgwZGVnKTtcclxufVxyXG4ubmF2LXRvZ2dsZSBzcGFuOmFmdGVyIHtcclxuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDZweCkgcm90YXRlKDBkZWcpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSg2cHgpIHJvdGF0ZSgwZGVnKTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDZweCkgcm90YXRlKDBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDZweCkgcm90YXRlKDBkZWcpO1xyXG59XHJcbi5uYXYtdG9nZ2xlLmNsb3NlLW5hdjpiZWZvcmUge1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xyXG59XHJcbi5uYXYtdG9nZ2xlLmNsb3NlLW5hdjphZnRlciB7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbn1cclxuLm5hdi10b2dnbGUuY2xvc2UtbmF2IHNwYW4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcclxufVxyXG4ubmF2LXRvZ2dsZS5jbG9zZS1uYXYgc3BhbjpiZWZvcmUsIC5uYXYtdG9nZ2xlLmNsb3NlLW5hdiBzcGFuOmFmdGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbn1cclxuLm5hdi10b2dnbGUuY2xvc2UtbmF2IHNwYW46YmVmb3JlIHtcclxuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHJvdGF0ZSg0NWRlZyk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHJvdGF0ZSg0NWRlZyk7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSByb3RhdGUoNDVkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHJvdGF0ZSg0NWRlZyk7XHJcbn1cclxuLm5hdi10b2dnbGUuY2xvc2UtbmF2IHNwYW46YWZ0ZXIge1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgcm90YXRlKC00NWRlZyk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHJvdGF0ZSgtNDVkZWcpO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgcm90YXRlKC00NWRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgcm90YXRlKC00NWRlZyk7XHJcbn1cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0IEhlcm8gY29udGVudFxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuLmhlcm8ge1xyXG4gICAgbWFyZ2luLXRvcDogMTAlO1xyXG59XHJcbi5oZXJvLWNvbnRlbnQge1xyXG59XHJcbi5oZXJvIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogNDhweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuLmhlcm8gaDQge1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG4uaGVybyBwIHtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG59XHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdCBQb3J0Zm9saW9cclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbiNwb3J0Zm9saW8gLnBvcnRmb2xpby1pdGVtIHtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgbWFyZ2luOiAwIDAgMjBweDtcclxuICAgIHBhZGRpbmc6IDAgMTBweDtcclxufVxyXG4jcG9ydGZvbGlvIC5wb3J0Zm9saW8taXRlbSAucG9ydGZvbGlvLWxpbmsge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxufVxyXG4jcG9ydGZvbGlvIC5wb3J0Zm9saW8taXRlbSAucG9ydGZvbGlvLWxpbmsgLmNhcHRpb24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSg1OCw1NCw1NCwuOSk7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCBlYXNlIC41cztcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIGVhc2UgLjVzO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIGVhc2UgLjVzO1xyXG59XHJcbiNwb3J0Zm9saW8gLnBvcnRmb2xpby1pdGVtIC5wb3J0Zm9saW8tbGluayAuY2FwdGlvbjpob3ZlciB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG59XHJcbiNwb3J0Zm9saW8gLnBvcnRmb2xpby1pdGVtIC5wb3J0Zm9saW8tbGluayAuY2FwdGlvbiAuY2FwdGlvbi1jb250ZW50IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTJweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcbiNwb3J0Zm9saW8gLnBvcnRmb2xpby1pdGVtIC5wb3J0Zm9saW8tbGluayAuY2FwdGlvbiAuY2FwdGlvbi1jb250ZW50IGkge1xyXG4gICAgbWFyZ2luLXRvcDogLTEycHg7XHJcbn1cclxuI3BvcnRmb2xpbyAucG9ydGZvbGlvLWl0ZW0gLnBvcnRmb2xpby1saW5rIC5jYXB0aW9uIC5jYXB0aW9uLWNvbnRlbnQgaDMge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgY29sb3I6ICNlOWVhZWQ7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogNHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG4jcG9ydGZvbGlvIC5wb3J0Zm9saW8taXRlbSAucG9ydGZvbGlvLWxpbmsgLmNhcHRpb24gLmNhcHRpb24tY29udGVudCBoNCB7XHJcbiAgICBtYXJnaW46IDEwcHggMDtcclxuICAgIGNvbG9yOiAjZTllYWVkO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuI3BvcnRmb2xpbyAqIHtcclxuICAgIHotaW5kZXg6IDI7XHJcbn1cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0IFNlcnZpY2VcclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbi5zZXJ2aWNlIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbn1cclxuLnNlcnZpY2UgaDQge1xyXG4gICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG4uc2VydmljZS1jb250ZW50IHtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbn1cclxuLnNlcnZpY2UgLmljb24ge1xyXG4gICAgY29sb3I6ICNhMWE0YTg7XHJcbiAgICBmb250LXNpemU6IDQ4cHg7XHJcbn1cclxuLnNlcnZpY2UtY29udGVudCBoNSB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG59XHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdCBGb290ZXJcclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbi5mb290ZXIge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XHJcbiAgICBwYWRkaW5nOiA3JTtcclxufVxyXG4uZm9vdGVyIGg0IHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgbWFyZ2luOiAwIDAgMTVweCAwO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG59XHJcbi5mb290ZXIgcCB7XHJcbiAgICBjb2xvcjogI2M4YzhjODtcclxufVxyXG4uZm9vdGVyIGEge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuLmZvb3RlciBhOmhvdmVyIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcbi5mb290ZXIgLmZhLWhlYXJ0IHtcclxuICAgIGNvbG9yOiAjZTg0NTQ1O1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgbWFyZ2luOiAwIDJweDtcclxufVxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHQgV29yayBEZXRhaWxzXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5cclxuI2FwcCB7XHJcbiAgICBtaW4taGVpZ2h0OiAyMGVtO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcbiJdfQ== */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!./styles.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./src/styles.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\JavascriptProjects\Angular Projects\RibiTest\src\styles.css */"./src/styles.css");


/***/ })

},[[3,"runtime"]]]);
//# sourceMappingURL=styles.js.map