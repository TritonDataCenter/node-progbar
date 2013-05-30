#!/usr/bin/env node

var mod_progbar = require('../lib/progbar');

var SZ = 123456789;
var RT = 5234000;
var PS = 0;
var IX = 0;

var bar = null;
var iv;

function
new_bar()
{
  iv = setInterval(function() {
    if (bar === null) {
      if (IX > 10)
        clearInterval(iv);
      bar = new mod_progbar.ProgressBar({
        filename: 'tester-xxxx-' + (++IX),
        size: SZ
      });
    }
    var dlta = Math.min(RT, SZ - PS);
    if (dlta === 0) {
      bar.end();
      bar = null;
      PS = 0;
      SZ = Math.floor(SZ * 1.5);
    } else {
      PS += dlta;
      bar.advance(dlta);
    }
  }, 78);
}

new_bar();
