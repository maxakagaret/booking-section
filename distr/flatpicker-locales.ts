(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.ru = {}));
}(this, (function (exports) { 'use strict';

  var fp = typeof window !== "undefined" && window.flatpickr !== undefined
      ? window.flatpickr
      : {
          l10ns: {},
      };

  var english = {
      weekdays: {
          shorthand: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          longhand: [
              "Sunday",
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
          ],
      },
      months: {
          shorthand: [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
          ],
          longhand: [
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "September",
              "October",
              "November",
              "December",
          ],
      },
      daysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
      firstDayOfWeek: 0,
      ordinal: function (nth) {
          var s = nth % 100;
          if (s > 3 && s < 21)
              return "th";
          switch (s % 10) {
              case 1:
                  return "st";
              case 2:
                  return "nd";
              case 3:
                  return "rd";
              default:
                  return "th";
          }
      },
      rangeSeparator: " to ",
      weekAbbreviation: "Wk",
      scrollTitle: "Scroll to increment",
      toggleTitle: "Click to toggle",
      amPM: ["AM", "PM"],
      yearAriaLabel: "Year",
      monthAriaLabel: "Month",
      hourAriaLabel: "Hour",
      minuteAriaLabel: "Minute",
      time_24hr: false,
  };

  exports.default = english;
  exports.english = english;

  var Russian = {
      weekdays: {
          shorthand: ["????", "????", "????", "????", "????", "????", "????"],
          longhand: [
              "??????????????????????",
              "??????????????????????",
              "??????????????",
              "??????????",
              "??????????????",
              "??????????????",
              "??????????????",
          ],
      },
      months: {
          shorthand: [
              "??????",
              "??????",
              "????????",
              "??????",
              "??????",
              "????????",
              "????????",
              "??????",
              "??????",
              "??????",
              "??????",
              "??????",
          ],
          longhand: [
              "????????????",
              "??????????????",
              "????????",
              "????????????",
              "??????",
              "????????",
              "????????",
              "????????????",
              "????????????????",
              "??????????????",
              "????????????",
              "??????????????",
          ],
      },
      firstDayOfWeek: 1,
      ordinal: function () {
          return "";
      },
      rangeSeparator: " ??? ",
      weekAbbreviation: "??????.",
      scrollTitle: "???????????????????? ?????? ????????????????????",
      toggleTitle: "?????????????? ?????? ????????????????????????",
      amPM: ["????", "????"],
      yearAriaLabel: "??????",
      time_24hr: true,
  };
  fp.l10ns.ru = Russian;
  var ru = fp.l10ns;

  exports.Russian = Russian;
  exports.default = ru;

  var Turkish = {
      weekdays: {
          shorthand: ["Paz", "Pzt", "Sal", "??ar", "Per", "Cum", "Cmt"],
          longhand: [
              "Pazar",
              "Pazartesi",
              "Sal??",
              "??ar??amba",
              "Per??embe",
              "Cuma",
              "Cumartesi",
          ],
      },
      months: {
          shorthand: [
              "Oca",
              "??ub",
              "Mar",
              "Nis",
              "May",
              "Haz",
              "Tem",
              "A??u",
              "Eyl",
              "Eki",
              "Kas",
              "Ara",
          ],
          longhand: [
              "Ocak",
              "??ubat",
              "Mart",
              "Nisan",
              "May??s",
              "Haziran",
              "Temmuz",
              "A??ustos",
              "Eyl??l",
              "Ekim",
              "Kas??m",
              "Aral??k",
          ],
      },
      firstDayOfWeek: 1,
      ordinal: function () {
          return ".";
      },
      rangeSeparator: " - ",
      weekAbbreviation: "Hf",
      scrollTitle: "Art??rmak i??in kayd??r??n",
      toggleTitle: "A??/Kapa",
      amPM: ["????", "??S"],
      time_24hr: true,
  };
  fp.l10ns.tr = Turkish;
  var tr = fp.l10ns;

  exports.Turkish = Turkish;
  exports.default = tr;

  var German = {
      weekdays: {
          shorthand: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
          longhand: [
              "Sonntag",
              "Montag",
              "Dienstag",
              "Mittwoch",
              "Donnerstag",
              "Freitag",
              "Samstag",
          ],
      },
      months: {
          shorthand: [
              "Jan",
              "Feb",
              "M??r",
              "Apr",
              "Mai",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Okt",
              "Nov",
              "Dez",
          ],
          longhand: [
              "Januar",
              "Februar",
              "M??rz",
              "April",
              "Mai",
              "Juni",
              "Juli",
              "August",
              "September",
              "Oktober",
              "November",
              "Dezember",
          ],
      },
      firstDayOfWeek: 1,
      weekAbbreviation: "KW",
      rangeSeparator: " bis ",
      scrollTitle: "Zum ??ndern scrollen",
      toggleTitle: "Zum Umschalten klicken",
      time_24hr: true,
  };
  fp.l10ns.de = German;
  var de = fp.l10ns;

  exports.German = German;
  exports.default = de;

  var French = {
      firstDayOfWeek: 1,
      weekdays: {
          shorthand: ["dim", "lun", "mar", "mer", "jeu", "ven", "sam"],
          longhand: [
              "dimanche",
              "lundi",
              "mardi",
              "mercredi",
              "jeudi",
              "vendredi",
              "samedi",
          ],
      },
      months: {
          shorthand: [
              "janv",
              "f??vr",
              "mars",
              "avr",
              "mai",
              "juin",
              "juil",
              "ao??t",
              "sept",
              "oct",
              "nov",
              "d??c",
          ],
          longhand: [
              "janvier",
              "f??vrier",
              "mars",
              "avril",
              "mai",
              "juin",
              "juillet",
              "ao??t",
              "septembre",
              "octobre",
              "novembre",
              "d??cembre",
          ],
      },
      ordinal: function (nth) {
          if (nth > 1)
              return "";
          return "er";
      },
      rangeSeparator: " au ",
      weekAbbreviation: "Sem",
      scrollTitle: "D??filer pour augmenter la valeur",
      toggleTitle: "Cliquer pour basculer",
      time_24hr: true,
  };
  fp.l10ns.fr = French;
  var fr = fp.l10ns;

  exports.French = French;
  exports.default = fr;
  
  Object.defineProperty(exports, '__esModule', { value: true });

})));
