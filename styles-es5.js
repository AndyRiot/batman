(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"], {
  /***/
  "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/styles.scss":
  /*!********************************************************************************************************************************************************************************************************************!*\
    !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/dist/cjs.js??ref--13-3!./src/styles.scss ***!
    \********************************************************************************************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesAngularDevkitBuildAngularSrcAngularCliFilesPluginsRawCssLoaderJsNode_modulesPostcssLoaderSrcIndexJsNode_modulesSassLoaderDistCjsJsSrcStylesScss(module, exports) {
    module.exports = [[module.i, "* {\n  outline: none;\n}\n\nbody {\n  background: #0A090A;\n  color: #fff;\n  font-family: Roboto, sans-serif;\n  margin: 0;\n  overflow-x: hidden;\n  position: relative;\n}\n\na {\n  color: #fff;\n}\n\n.hidden {\n  display: none !important;\n}\n\n.container {\n  margin: 0 auto 60px;\n  max-width: 1140px;\n  width: 100%;\n}\n\n.header {\n  align-items: center;\n  display: flex;\n  padding-top: 45px;\n}\n\n.header > .header_search {\n  display: flex;\n  flex: 100%;\n  text-align: center;\n}\n\n.header > .header_search > .header_search__label {\n  background: rgba(196, 196, 196, 0.5);\n  border-radius: 5px;\n  max-width: 800px;\n  width: 100%;\n}\n\n.header > .header_search > .header_search__label > .header_search__input {\n  background: transparent;\n  border: 0;\n  box-sizing: border-box;\n  color: #fff;\n  height: 40px;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 16px;\n  padding: 12px 18px;\n  width: 100%;\n}\n\n.header > .header_search > .header_search__label > .header_search__input::-webkit-input-placeholder {\n  color: #aeaeae;\n}\n\n.header > .header_search > .header_search__label > .header_search__input::-moz-placeholder {\n  color: #aeaeae;\n}\n\n.header > .header_search > .header_search__label > .header_search__input::-ms-input-placeholder {\n  color: #aeaeae;\n}\n\n.header > .header_search > .header_search__label > .header_search__input::placeholder {\n  color: #aeaeae;\n}\n\n.header > .header_search > .header_search__button {\n  background: transparent;\n  border: 0;\n  padding-left: 19px;\n}\n\n.header > .header_logo, .header > .header_user {\n  min-width: 172px;\n}\n\n.header > .header_user {\n  align-items: center;\n  display: flex;\n  justify-content: flex-end;\n}\n\n.header > .header_user .header_user__profile {\n  margin-left: 20px;\n}\n\n.header > .header_user .header_user__profile a {\n  display: block;\n}\n\n.header > .header_user .header_user__profile a img {\n  background: #fff;\n  border-radius: 50%;\n  height: 40px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 40px;\n  z-index: -1;\n}\n\n.header #logo {\n  font-style: normal;\n  font-weight: 900;\n  font-size: 24px;\n  line-height: 28px;\n  text-decoration: none;\n}\n\n.index-wrap {\n  background: #fff;\n  border-radius: 3px;\n  margin-top: 200px;\n  padding: 10px 5px;\n}\n\n.index-wrap * {\n  color: #333;\n}\n\n.dropdown {\n  position: relative;\n}\n\n.dropdown > .dropdown-content {\n  background-color: #fff;\n  display: none;\n  position: absolute;\n}\n\n.dropdown > .dropdown-content > * {\n  box-sizing: border-box;\n  color: #333;\n  cursor: pointer;\n  padding: 5px 12px;\n}\n\n.dropdown > .dropdown-content.show, .dropdown > .dropdown-content:hover {\n  display: block;\n}\n\n.dropdown.dropdown-right-bottom > .dropdown-content {\n  right: 0;\n  top: 100%;\n}\n\n.dropdown.dropdown-left-top > .dropdown-content {\n  right: 100%;\n  top: 0;\n}\n\n.play {\n  font-family: Roboto, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 16px;\n  line-height: 19px;\n  padding-left: 46px;\n  position: relative;\n  text-decoration: none;\n}\n\n.play:before {\n  content: \"\";\n  background: #fff;\n  border-radius: 50%;\n  height: 31px;\n  left: 0;\n  position: absolute;\n  top: -6px;\n  width: 31px;\n}\n\n.play:after {\n  color: #000;\n  content: url('triangle.svg');\n  left: 11px;\n  position: absolute;\n  top: 0;\n  transform: rotate(-90deg);\n}\n\n.tag {\n  background: #FFFFFF;\n  border-radius: 3px;\n  color: #333;\n  display: inline-block;\n  font-family: Roboto, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 16px;\n  line-height: 19px;\n  margin-right: 10px;\n  padding: 5px 10px;\n  text-decoration: none;\n}\n\n.bookmark__add {\n  content: url('fav.svg');\n  position: absolute;\n  right: 20px;\n  top: 10px;\n}\n\n.bookmark__added {\n  content: url('faved.svg');\n}\n\n.film-card {\n  display: inline-block;\n  padding: 0 10px 20px;\n  position: relative;\n  vertical-align: top;\n  width: 183px;\n}\n\n.film-card > .film-card__link {\n  color: #333;\n  text-decoration: none;\n}\n\n.tab-menu {\n  display: flex;\n  justify-content: space-around;\n  margin: 0 -20px 40px;\n  position: relative;\n}\n\n.tab-menu > .tab-menu-item {\n  color: #000;\n  font-weight: normal;\n  font-size: 18px;\n  line-height: 21px;\n  text-decoration: none;\n}\n\n.tab-menu > .tab-menu-item.active {\n  color: #FF8F27;\n}\n\n.tabs-content {\n  width: 100%;\n}\n\n.tabs-content > .tab-content {\n  display: none;\n}\n\n.tabs-content > .tab-content.show {\n  display: block;\n}\n\n.tabs-content > .tab-content > p {\n  margin-top: 0;\n}\n\n.button {\n  background: #FF8F27;\n  border: 0;\n  cursor: pointer;\n}\n\n.subscribe > .subscribe__title {\n  font-weight: 900;\n  font-size: 16px;\n  line-height: 150%;\n  margin-bottom: 14px;\n}\n\n.subscribe > .subscribe-form {\n  border-radius: 5px;\n  display: flex;\n  overflow: hidden;\n}\n\n.subscribe > .subscribe-form > .subscribe__input {\n  background: rgba(241, 241, 241, 0.5);\n  border: 0;\n  box-sizing: border-box;\n  padding: 12px 15px;\n  max-width: 175px;\n}\n\n.subscribe > .subscribe-form > .subscribe__input::-webkit-input-placeholder {\n  color: #9B9B9B;\n}\n\n.subscribe > .subscribe-form > .subscribe__input::-moz-placeholder {\n  color: #9B9B9B;\n}\n\n.subscribe > .subscribe-form > .subscribe__input::-ms-input-placeholder {\n  color: #9B9B9B;\n}\n\n.subscribe > .subscribe-form > .subscribe__input::placeholder {\n  color: #9B9B9B;\n}\n\n.subscribe > .subscribe-form > .subscribe__button {\n  background-image: url('check.svg');\n  background-position: center center;\n  background-repeat: no-repeat;\n  height: 40px;\n  min-width: 43px;\n}\n\n.picture {\n  display: block;\n  margin-top: 49px;\n}\n\n@media (max-width: 1200px) {\n  .container {\n    width: 960px;\n  }\n\n  .header {\n    padding-top: 20px;\n  }\n\n  .tab-menu {\n    margin-bottom: 10px;\n  }\n  .tab-menu > .tab-menu-item {\n    font-size: 16px;\n  }\n\n  .picture {\n    margin-top: 20px;\n  }\n}\n\n@media (max-width: 992px) {\n  .container {\n    width: 740px;\n  }\n\n  .header > .header_search {\n    margin: 0 3%;\n  }\n  .header > .header_user {\n    min-width: auto;\n  }\n\n  .tab-menu > .tab-menu-item {\n    font-size: 14px;\n  }\n}\n\n@media (max-width: 768px) {\n  .container {\n    width: 540px;\n  }\n\n  .header {\n    flex-wrap: wrap;\n    justify-content: space-between;\n    padding-top: 10px;\n  }\n  .header > .header_search {\n    margin: 5% 0 0;\n    order: 3;\n  }\n\n  .tab-menu {\n    flex-wrap: wrap;\n    justify-content: flex-start;\n    margin: 0;\n  }\n  .tab-menu > .tab-menu-item {\n    flex-basis: 25%;\n    line-height: 2;\n  }\n}\n\n@media (max-width: 576px) {\n  .container {\n    width: 90%;\n  }\n\n  .tab-menu {\n    flex-direction: column;\n  }\n  .tab-menu > .bookmark__add {\n    content: \"\";\n  }\n\n  .subscribe > .subscribe-form > .subscribe__input {\n    max-width: 100%;\n    width: 100%;\n  }\n\n  .picture > .background {\n    margin: 0 5%;\n    width: 90%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9DOlxcc2l0ZXNcXGJhdG1hbi9zcmNcXHN0eWxlcy5zY3NzIiwic3JjL3N0eWxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsK0JBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtBQ0NGOztBREVBO0VBQ0Usd0JBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQ0NGOztBRENFO0VBQ0UsYUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQ0NKOztBRENJO0VBQ0Usb0NBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQ0NOOztBRENNO0VBQ0UsdUJBQUE7RUFDQSxTQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNDUjs7QURDUTtFQUNFLGNBQUE7QUNDVjs7QURGUTtFQUNFLGNBQUE7QUNDVjs7QURGUTtFQUNFLGNBQUE7QUNDVjs7QURGUTtFQUNFLGNBQUE7QUNDVjs7QURJSTtFQUNFLHVCQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0FDRk47O0FETUU7RUFDRSxnQkFBQTtBQ0pKOztBRE9FO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7QUNMSjs7QURPSTtFQUNFLGlCQUFBO0FDTE47O0FET007RUFDRSxjQUFBO0FDTFI7O0FET1E7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQ0xWOztBRFdFO0VBQ0Usa0JBQUE7RUFDQSxnQkFB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WUFBQTtFQzNDRjs7RUQ4Q0E7SUFDRSxlQUFBO0lBQ0EsOEJBQUE7SUFDQSxpQkFBQTtFQzNDRjtFRDZDRTtJQUNFLGNBQUE7SUFDQSxRQUFBO0VDM0NKOztFRCtDQTtJQUNFLGVBQUE7SUFDQSwyQkFBQTtJQUNBLFNBQUE7RUM1Q0Y7RUQ4Q0U7SUFDRSxlQUFBO0lBQ0EsY0FBQTtFQzVDSjtBQUNGOztBRGdEQTtFQUNFO0lBQ0UsVUFBQTtFQzlDRjs7RURpREE7SUFDRSxzQkFBQTtFQzlDRjtFRGdERTtJQUNFLFdBQUE7RUM5Q0o7O0VEb0RJO0lBQ0UsZUFBQTtJQUNBLFdBQUE7RUNqRE47O0VEdURFO0lBQ0UsWUFBQTtJQUNBLFVBQUE7RUNwREo7QUFDRiIsImZpbGUiOiJzcmMvc3R5bGVzLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBiYWNrZ3JvdW5kOiAjMEEwOTBBO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIHNhbnMtc2VyaWY7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbmEge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uaGlkZGVuIHtcclxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIG1hcmdpbjogMCBhdXRvIDYwcHg7XHJcbiAgbWF4LXdpZHRoOiAxMTQwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5oZWFkZXIge1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwYWRkaW5nLXRvcDogNDVweDtcclxuXHJcbiAgJiA+ICZfc2VhcmNoIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4OiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgICYgPiAuaGVhZGVyX3NlYXJjaF9fbGFiZWwge1xyXG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDE5NiwgMTk2LCAxOTYsIC41KTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICBtYXgtd2lkdGg6IDgwMHB4O1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgICYgPiAuaGVhZGVyX3NlYXJjaF9faW5wdXQge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgICAgICAgcGFkZGluZzogMTJweCAxOHB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgICAmOjpwbGFjZWhvbGRlciB7XHJcbiAgICAgICAgICBjb2xvcjogI2FlYWVhZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmID4gLmhlYWRlcl9zZWFyY2hfX2J1dHRvbiB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICBib3JkZXI6IDA7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMTlweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYgPiAmX2xvZ28sICYgPiAmX3VzZXIge1xyXG4gICAgbWluLXdpZHRoOiAxNzJweDtcclxuICB9XHJcblxyXG4gICYgPiAmX3VzZXIge1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG5cclxuICAgICYgLmhlYWRlcl91c2VyX19wcm9maWxlIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcblxyXG4gICAgICAmIGEge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG5cclxuICAgICAgICAmIGltZyB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICAgIHotaW5kZXg6IC0xO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgI2xvZ28ge1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuLmluZGV4LXdyYXAge1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIG1hcmdpbi10b3A6IDIwMHB4O1xyXG4gIHBhZGRpbmc6IDEwcHggNXB4O1xyXG5cclxuICAmICoge1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgfVxyXG59XHJcblxyXG4uZHJvcGRvd24ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgJiA+ICYtY29udGVudCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHJcbiAgICAmID4gKiB7XHJcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIHBhZGRpbmc6IDVweCAxMnB4O1xyXG4gICAgfVxyXG5cclxuICAgICYuc2hvdywgJjpob3ZlciB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi5kcm9wZG93bi1yaWdodC1ib3R0b20ge1xyXG4gICAgJiA+IC5kcm9wZG93bi1jb250ZW50IHtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgIHRvcDogMTAwJTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYuZHJvcGRvd24tbGVmdC10b3Age1xyXG4gICAgJiA+IC5kcm9wZG93bi1jb250ZW50IHtcclxuICAgICAgcmlnaHQ6IDEwMCU7XHJcbiAgICAgIHRvcDogMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5wbGF5IHtcclxuICBmb250LWZhbWlseTogUm9ib3RvLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBsaW5lLWhlaWdodDogMTlweDtcclxuICBwYWRkaW5nLWxlZnQ6IDQ2cHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHJcbiAgJjpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgaGVpZ2h0OiAzMXB4O1xyXG4gICAgbGVmdDogMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogLTZweDtcclxuICAgIHdpZHRoOiAzMXB4O1xyXG4gIH1cclxuXHJcbiAgJjphZnRlciB7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIGNvbnRlbnQ6IHVybCgnYXNzZXRzL3RyaWFuZ2xlLnN2ZycpO1xyXG4gICAgbGVmdDogMTFweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XHJcbiAgfVxyXG59XHJcblxyXG4udGFnIHtcclxuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBjb2xvcjogIzMzMztcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgc2Fucy1zZXJpZjtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE5cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLmJvb2ttYXJrX19hZGQge1xyXG4gIGNvbnRlbnQ6IHVybCgnYXNzZXRzL2Zhdi5zdmcnKTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDIwcHg7XHJcbiAgdG9wOiAxMHB4O1xyXG5cclxuICAmZWQge1xyXG4gICAgY29udGVudDogdXJsKCdhc3NldHMvZmF2ZWQuc3ZnJyk7XHJcbiAgfVxyXG59XHJcblxyXG4uZmlsbS1jYXJkIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcGFkZGluZzogMCAxMHB4IDIwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgd2lkdGg6IDE4M3B4O1xyXG5cclxuICAmID4gJl9fbGluayB7XHJcbiAgICBjb2xvcjogIzMzMztcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbi50YWItbWVudSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICBtYXJnaW46IDAgLTIwcHggNDBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICYgPiAmLWl0ZW0ge1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIxcHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblxyXG4gICAgJi5hY3RpdmUge1xyXG4gICAgICBjb2xvcjogI0ZGOEYyNztcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi50YWJzLWNvbnRlbnQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICAmID4gLnRhYi1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcblxyXG4gICAgJi5zaG93IHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcblxyXG4gICAgJiA+IHAge1xyXG4gICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZDogI0ZGOEYyNztcclxuICBib3JkZXI6IDA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uc3Vic2NyaWJlIHtcclxuICAmID4gJl9fdGl0bGUge1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNTAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTRweDtcclxuICB9XHJcblxyXG4gICYgPiAmLWZvcm0ge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gICAgJiA+IC5zdWJzY3JpYmVfX2lucHV0IHtcclxuICAgICAgYmFja2dyb3VuZDogcmdiYSgyNDEsIDI0MSwgMjQxLCAwLjUpO1xyXG4gICAgICBib3JkZXI6IDA7XHJcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgIHBhZGRpbmc6IDEycHggMTVweDtcclxuICAgICAgbWF4LXdpZHRoOiAxNzVweDtcclxuXHJcbiAgICAgICY6OnBsYWNlaG9sZGVyIHtcclxuICAgICAgICBjb2xvcjogIzlCOUI5QjtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYgPiAuc3Vic2NyaWJlX19idXR0b24ge1xyXG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJhc3NldHMvY2hlY2suc3ZnXCIpO1xyXG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgIG1pbi13aWR0aDogNDNweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5waWN0dXJlIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tdG9wOiA0OXB4O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogOTYwcHg7XHJcbiAgfVxyXG5cclxuICAuaGVhZGVyIHtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgLnRhYi1tZW51IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcblxyXG4gICAgJiA+ICYtaXRlbSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5waWN0dXJlIHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAuY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiA3NDBweDtcclxuICB9XHJcblxyXG4gIC5oZWFkZXIge1xyXG4gICAgJiA+ICZfc2VhcmNoIHtcclxuICAgICAgbWFyZ2luOiAwIDMlO1xyXG4gICAgfVxyXG5cclxuICAgICYgPiAmX3VzZXIge1xyXG4gICAgICBtaW4td2lkdGg6IGF1dG87XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAudGFiLW1lbnUge1xyXG4gICAgJiA+ICYtaXRlbSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDU0MHB4O1xyXG4gIH1cclxuXHJcbiAgLmhlYWRlciB7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuXHJcbiAgICAmID4gJl9zZWFyY2gge1xyXG4gICAgICBtYXJnaW46IDUlIDAgMDtcclxuICAgICAgb3JkZXI6IDM7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAudGFiLW1lbnUge1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgbWFyZ2luOiAwO1xyXG5cclxuICAgICYgPiAmLWl0ZW0ge1xyXG4gICAgICBmbGV4LWJhc2lzOiAyNSU7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAyO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gIH1cclxuXHJcbiAgLnRhYi1tZW51IHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gICAgJiA+IC5ib29rbWFya19fYWRkIHtcclxuICAgICAgY29udGVudDogJyc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuc3Vic2NyaWJlIHtcclxuICAgICYgPiAmLWZvcm0ge1xyXG4gICAgICAmID4gLnN1YnNjcmliZV9faW5wdXQge1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnBpY3R1cmUge1xyXG4gICAgJiA+IC5iYWNrZ3JvdW5kIHtcclxuICAgICAgbWFyZ2luOiAwIDUlO1xyXG4gICAgICB3aWR0aDogOTAlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIqIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuYm9keSB7XG4gIGJhY2tncm91bmQ6ICMwQTA5MEE7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LWZhbWlseTogUm9ib3RvLCBzYW5zLXNlcmlmO1xuICBtYXJnaW46IDA7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG5hIHtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5oaWRkZW4ge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5jb250YWluZXIge1xuICBtYXJnaW46IDAgYXV0byA2MHB4O1xuICBtYXgtd2lkdGg6IDExNDBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5oZWFkZXIge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nLXRvcDogNDVweDtcbn1cbi5oZWFkZXIgPiAuaGVhZGVyX3NlYXJjaCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5oZWFkZXIgPiAuaGVhZGVyX3NlYXJjaCA+IC5oZWFkZXJfc2VhcmNoX19sYWJlbCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTk2LCAxOTYsIDE5NiwgMC41KTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXgtd2lkdGg6IDgwMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cbi5oZWFkZXIgPiAuaGVhZGVyX3NlYXJjaCA+IC5oZWFkZXJfc2VhcmNoX19sYWJlbCA+IC5oZWFkZXJfc2VhcmNoX19pbnB1dCB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGNvbG9yOiAjZmZmO1xuICBoZWlnaHQ6IDQwcHg7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMTZweDtcbiAgcGFkZGluZzogMTJweCAxOHB4O1xuICB3aWR0aDogMTAwJTtcbn1cbi5oZWFkZXIgPiAuaGVhZGVyX3NlYXJjaCA+IC5oZWFkZXJfc2VhcmNoX19sYWJlbCA+IC5oZWFkZXJfc2VhcmNoX19pbnB1dDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogI2FlYWVhZTtcbn1cbi5oZWFkZXIgPiAuaGVhZGVyX3NlYXJjaCA+IC5oZWFkZXJfc2VhcmNoX19idXR0b24ge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAwO1xuICBwYWRkaW5nLWxlZnQ6IDE5cHg7XG59XG4uaGVhZGVyID4gLmhlYWRlcl9sb2dvLCAuaGVhZGVyID4gLmhlYWRlcl91c2VyIHtcbiAgbWluLXdpZHRoOiAxNzJweDtcbn1cbi5oZWFkZXIgPiAuaGVhZGVyX3VzZXIge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuLmhlYWRlciA+IC5oZWFkZXJfdXNlciAuaGVhZGVyX3VzZXJfX3Byb2ZpbGUge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cbi5oZWFkZXIgPiAuaGVhZGVyX3VzZXIgLmhlYWRlcl91c2VyX19wcm9maWxlIGEge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5oZWFkZXIgPiAuaGVhZGVyX3VzZXIgLmhlYWRlcl91c2VyX19wcm9maWxlIGEgaW1nIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBoZWlnaHQ6IDQwcHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICB3aWR0aDogNDBweDtcbiAgei1pbmRleDogLTE7XG59XG4uaGVhZGVyICNsb2dvIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogOTAwO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5pbmRleC13cmFwIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBtYXJnaW4tdG9wOiAyMDBweDtcbiAgcGFkZGluZzogMTBweCA1cHg7XG59XG4uaW5kZXgtd3JhcCAqIHtcbiAgY29sb3I6ICMzMzM7XG59XG5cbi5kcm9wZG93biB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5kcm9wZG93biA+IC5kcm9wZG93bi1jb250ZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuLmRyb3Bkb3duID4gLmRyb3Bkb3duLWNvbnRlbnQgPiAqIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgY29sb3I6ICMzMzM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZzogNXB4IDEycHg7XG59XG4uZHJvcGRvd24gPiAuZHJvcGRvd24tY29udGVudC5zaG93LCAuZHJvcGRvd24gPiAuZHJvcGRvd24tY29udGVudDpob3ZlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmRyb3Bkb3duLmRyb3Bkb3duLXJpZ2h0LWJvdHRvbSA+IC5kcm9wZG93bi1jb250ZW50IHtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMTAwJTtcbn1cbi5kcm9wZG93bi5kcm9wZG93bi1sZWZ0LXRvcCA+IC5kcm9wZG93bi1jb250ZW50IHtcbiAgcmlnaHQ6IDEwMCU7XG4gIHRvcDogMDtcbn1cblxuLnBsYXkge1xuICBmb250LWZhbWlseTogUm9ib3RvLCBzYW5zLXNlcmlmO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDE5cHg7XG4gIHBhZGRpbmctbGVmdDogNDZweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4ucGxheTpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGhlaWdodDogMzFweDtcbiAgbGVmdDogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC02cHg7XG4gIHdpZHRoOiAzMXB4O1xufVxuLnBsYXk6YWZ0ZXIge1xuICBjb2xvcjogIzAwMDtcbiAgY29udGVudDogdXJsKFwiYXNzZXRzL3RyaWFuZ2xlLnN2Z1wiKTtcbiAgbGVmdDogMTFweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XG59XG5cbi50YWcge1xuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGNvbG9yOiAjMzMzO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMTlweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uYm9va21hcmtfX2FkZCB7XG4gIGNvbnRlbnQ6IHVybChcImFzc2V0cy9mYXYuc3ZnXCIpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAyMHB4O1xuICB0b3A6IDEwcHg7XG59XG4uYm9va21hcmtfX2FkZGVkIHtcbiAgY29udGVudDogdXJsKFwiYXNzZXRzL2ZhdmVkLnN2Z1wiKTtcbn1cblxuLmZpbG0tY2FyZCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogMCAxMHB4IDIwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgd2lkdGg6IDE4M3B4O1xufVxuLmZpbG0tY2FyZCA+IC5maWxtLWNhcmRfX2xpbmsge1xuICBjb2xvcjogIzMzMztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4udGFiLW1lbnUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgbWFyZ2luOiAwIC0yMHB4IDQwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi50YWItbWVudSA+IC50YWItbWVudS1pdGVtIHtcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDIxcHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi50YWItbWVudSA+IC50YWItbWVudS1pdGVtLmFjdGl2ZSB7XG4gIGNvbG9yOiAjRkY4RjI3O1xufVxuXG4udGFicy1jb250ZW50IHtcbiAgd2lkdGg6IDEwMCU7XG59XG4udGFicy1jb250ZW50ID4gLnRhYi1jb250ZW50IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi50YWJzLWNvbnRlbnQgPiAudGFiLWNvbnRlbnQuc2hvdyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLnRhYnMtY29udGVudCA+IC50YWItY29udGVudCA+IHAge1xuICBtYXJnaW4tdG9wOiAwO1xufVxuXG4uYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogI0ZGOEYyNztcbiAgYm9yZGVyOiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zdWJzY3JpYmUgPiAuc3Vic2NyaWJlX190aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDE1MCU7XG4gIG1hcmdpbi1ib3R0b206IDE0cHg7XG59XG4uc3Vic2NyaWJlID4gLnN1YnNjcmliZS1mb3JtIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLnN1YnNjcmliZSA+IC5zdWJzY3JpYmUtZm9ybSA+IC5zdWJzY3JpYmVfX2lucHV0IHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNDEsIDI0MSwgMjQxLCAwLjUpO1xuICBib3JkZXI6IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBhZGRpbmc6IDEycHggMTVweDtcbiAgbWF4LXdpZHRoOiAxNzVweDtcbn1cbi5zdWJzY3JpYmUgPiAuc3Vic2NyaWJlLWZvcm0gPiAuc3Vic2NyaWJlX19pbnB1dDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogIzlCOUI5Qjtcbn1cbi5zdWJzY3JpYmUgPiAuc3Vic2NyaWJlLWZvcm0gPiAuc3Vic2NyaWJlX19idXR0b24ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJhc3NldHMvY2hlY2suc3ZnXCIpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBoZWlnaHQ6IDQwcHg7XG4gIG1pbi13aWR0aDogNDNweDtcbn1cblxuLnBpY3R1cmUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogNDlweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAuY29udGFpbmVyIHtcbiAgICB3aWR0aDogOTYwcHg7XG4gIH1cblxuICAuaGVhZGVyIHtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgfVxuXG4gIC50YWItbWVudSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgfVxuICAudGFiLW1lbnUgPiAudGFiLW1lbnUtaXRlbSB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG5cbiAgLnBpY3R1cmUge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xuICAuY29udGFpbmVyIHtcbiAgICB3aWR0aDogNzQwcHg7XG4gIH1cblxuICAuaGVhZGVyID4gLmhlYWRlcl9zZWFyY2gge1xuICAgIG1hcmdpbjogMCAzJTtcbiAgfVxuICAuaGVhZGVyID4gLmhlYWRlcl91c2VyIHtcbiAgICBtaW4td2lkdGg6IGF1dG87XG4gIH1cblxuICAudGFiLW1lbnUgPiAudGFiLW1lbnUtaXRlbSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDU0MHB4O1xuICB9XG5cbiAgLmhlYWRlciB7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgfVxuICAuaGVhZGVyID4gLmhlYWRlcl9zZWFyY2gge1xuICAgIG1hcmdpbjogNSUgMCAwO1xuICAgIG9yZGVyOiAzO1xuICB9XG5cbiAgLnRhYi1tZW51IHtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIG1hcmdpbjogMDtcbiAgfVxuICAudGFiLW1lbnUgPiAudGFiLW1lbnUtaXRlbSB7XG4gICAgZmxleC1iYXNpczogMjUlO1xuICAgIGxpbmUtaGVpZ2h0OiAyO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDkwJTtcbiAgfVxuXG4gIC50YWItbWVudSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICAudGFiLW1lbnUgPiAuYm9va21hcmtfX2FkZCB7XG4gICAgY29udGVudDogXCJcIjtcbiAgfVxuXG4gIC5zdWJzY3JpYmUgPiAuc3Vic2NyaWJlLWZvcm0gPiAuc3Vic2NyaWJlX19pbnB1dCB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLnBpY3R1cmUgPiAuYmFja2dyb3VuZCB7XG4gICAgbWFyZ2luOiAwIDUlO1xuICAgIHdpZHRoOiA5MCU7XG4gIH1cbn0iXX0= */", '', '']];
    /***/
  },

  /***/
  "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
  /*!****************************************************************************!*\
    !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
    \****************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesStyleLoaderDistRuntimeInjectStylesIntoStyleTagJs(module, exports, __webpack_require__) {
    "use strict";

    var stylesInDom = {};

    var isOldIE = function isOldIE() {
      var memo;
      return function memorize() {
        if (typeof memo === 'undefined') {
          // Test for IE <= 9 as proposed by Browserhacks
          // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
          // Tests for existence of standard globals is to allow style-loader
          // to operate correctly into non-standard environments
          // @see https://github.com/webpack-contrib/style-loader/issues/177
          memo = Boolean(window && document && document.all && !window.atob);
        }

        return memo;
      };
    }();

    var getTarget = function getTarget() {
      var memo = {};
      return function memorize(target) {
        if (typeof memo[target] === 'undefined') {
          var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

          if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
            try {
              // This will throw an exception if access to iframe is blocked
              // due to cross-origin restrictions
              styleTarget = styleTarget.contentDocument.head;
            } catch (e) {
              // istanbul ignore next
              styleTarget = null;
            }
          }

          memo[target] = styleTarget;
        }

        return memo[target];
      };
    }();

    function listToStyles(list, options) {
      var styles = [];
      var newStyles = {};

      for (var i = 0; i < list.length; i++) {
        var item = list[i];
        var id = options.base ? item[0] + options.base : item[0];
        var css = item[1];
        var media = item[2];
        var sourceMap = item[3];
        var part = {
          css: css,
          media: media,
          sourceMap: sourceMap
        };

        if (!newStyles[id]) {
          styles.push(newStyles[id] = {
            id: id,
            parts: [part]
          });
        } else {
          newStyles[id].parts.push(part);
        }
      }

      return styles;
    }

    function addStylesToDom(styles, options) {
      for (var i = 0; i < styles.length; i++) {
        var item = styles[i];
        var domStyle = stylesInDom[item.id];
        var j = 0;

        if (domStyle) {
          domStyle.refs++;

          for (; j < domStyle.parts.length; j++) {
            domStyle.parts[j](item.parts[j]);
          }

          for (; j < item.parts.length; j++) {
            domStyle.parts.push(addStyle(item.parts[j], options));
          }
        } else {
          var parts = [];

          for (; j < item.parts.length; j++) {
            parts.push(addStyle(item.parts[j], options));
          }

          stylesInDom[item.id] = {
            id: item.id,
            refs: 1,
            parts: parts
          };
        }
      }
    }

    function insertStyleElement(options) {
      var style = document.createElement('style');

      if (typeof options.attributes.nonce === 'undefined') {
        var nonce = true ? __webpack_require__.nc : undefined;

        if (nonce) {
          options.attributes.nonce = nonce;
        }
      }

      Object.keys(options.attributes).forEach(function (key) {
        style.setAttribute(key, options.attributes[key]);
      });

      if (typeof options.insert === 'function') {
        options.insert(style);
      } else {
        var target = getTarget(options.insert || 'head');

        if (!target) {
          throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
        }

        target.appendChild(style);
      }

      return style;
    }

    function removeStyleElement(style) {
      // istanbul ignore if
      if (style.parentNode === null) {
        return false;
      }

      style.parentNode.removeChild(style);
    }
    /* istanbul ignore next  */


    var replaceText = function replaceText() {
      var textStore = [];
      return function replace(index, replacement) {
        textStore[index] = replacement;
        return textStore.filter(Boolean).join('\n');
      };
    }();

    function applyToSingletonTag(style, index, remove, obj) {
      var css = remove ? '' : obj.css; // For old IE

      /* istanbul ignore if  */

      if (style.styleSheet) {
        style.styleSheet.cssText = replaceText(index, css);
      } else {
        var cssNode = document.createTextNode(css);
        var childNodes = style.childNodes;

        if (childNodes[index]) {
          style.removeChild(childNodes[index]);
        }

        if (childNodes.length) {
          style.insertBefore(cssNode, childNodes[index]);
        } else {
          style.appendChild(cssNode);
        }
      }
    }

    function applyToTag(style, options, obj) {
      var css = obj.css;
      var media = obj.media;
      var sourceMap = obj.sourceMap;

      if (media) {
        style.setAttribute('media', media);
      }

      if (sourceMap && btoa) {
        css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
      } // For old IE

      /* istanbul ignore if  */


      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
        while (style.firstChild) {
          style.removeChild(style.firstChild);
        }

        style.appendChild(document.createTextNode(css));
      }
    }

    var singleton = null;
    var singletonCounter = 0;

    function addStyle(obj, options) {
      var style;
      var update;
      var remove;

      if (options.singleton) {
        var styleIndex = singletonCounter++;
        style = singleton || (singleton = insertStyleElement(options));
        update = applyToSingletonTag.bind(null, style, styleIndex, false);
        remove = applyToSingletonTag.bind(null, style, styleIndex, true);
      } else {
        style = insertStyleElement(options);
        update = applyToTag.bind(null, style, options);

        remove = function remove() {
          removeStyleElement(style);
        };
      }

      update(obj);
      return function updateStyle(newObj) {
        if (newObj) {
          if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
            return;
          }

          update(obj = newObj);
        } else {
          remove();
        }
      };
    }

    module.exports = function (list, options) {
      options = options || {};
      options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
      // tags it will allow on a page

      if (!options.singleton && typeof options.singleton !== 'boolean') {
        options.singleton = isOldIE();
      }

      var styles = listToStyles(list, options);
      addStylesToDom(styles, options);
      return function update(newList) {
        var mayRemove = [];

        for (var i = 0; i < styles.length; i++) {
          var item = styles[i];
          var domStyle = stylesInDom[item.id];

          if (domStyle) {
            domStyle.refs--;
            mayRemove.push(domStyle);
          }
        }

        if (newList) {
          var newStyles = listToStyles(newList, options);
          addStylesToDom(newStyles, options);
        }

        for (var _i = 0; _i < mayRemove.length; _i++) {
          var _domStyle = mayRemove[_i];

          if (_domStyle.refs === 0) {
            for (var j = 0; j < _domStyle.parts.length; j++) {
              _domStyle.parts[j]();
            }

            delete stylesInDom[_domStyle.id];
          }
        }
      };
    };
    /***/

  },

  /***/
  "./src/styles.scss":
  /*!*************************!*\
    !*** ./src/styles.scss ***!
    \*************************/

  /*! no static exports found */

  /***/
  function srcStylesScss(module, exports, __webpack_require__) {
    var content = __webpack_require__(
    /*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!../node_modules/sass-loader/dist/cjs.js??ref--13-3!./styles.scss */
    "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/styles.scss");

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    var options = {};
    options.insert = "head";
    options.singleton = false;

    var update = __webpack_require__(
    /*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */
    "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

    if (content.locals) {
      module.exports = content.locals;
    }
    /***/

  },

  /***/
  3:
  /*!*******************************!*\
    !*** multi ./src/styles.scss ***!
    \*******************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\sites\batman\src\styles.scss */
    "./src/styles.scss");
    /***/
  }
}, [[3, "runtime"]]]);
//# sourceMappingURL=styles-es5.js.map