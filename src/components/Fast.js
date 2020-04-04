/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from "react";
export default class Fast extends Component {
  render() {
    return (
      // <div>
      //   <meta charSet="utf-8" />
      //   <meta
      //     name="viewport"
      //     content="width=device-width, initial-scale=1.0, user-scalable=yes"
      //   />
      //   <title>AlgoNotes</title>
      //   <style
      //     type="text/css"
      //     dangerouslySetInnerHTML={{
      //       __html:
      //         "\nbody {\n  font-family: Helvetica, arial, sans-serif;\n  font-size: 14px;\n  line-height: 1.6;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  background-color: white;\n  padding: 30px; }\n\nbody > *:first-child {\n  margin-top: 0 !important; }\nbody > *:last-child {\n  margin-bottom: 0 !important; }\n\na {\n  color: #4183C4; }\na.absent {\n  color: #cc0000; }\na.anchor {\n  display: block;\n  padding-left: 30px;\n  margin-left: -30px;\n  cursor: pointer;\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0; }\n\nh1, h2, h3, h4, h5, h6 {\n  margin: 20px 0 10px;\n  padding: 0;\n  font-weight: bold;\n  -webkit-font-smoothing: antialiased;\n  cursor: text;\n  position: relative; }\n\nh1:hover a.anchor, h2:hover a.anchor, h3:hover a.anchor, h4:hover a.anchor, h5:hover a.anchor, h6:hover a.anchor {\n  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA09pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoMTMuMCAyMDEyMDMwNS5tLjQxNSAyMDEyLzAzLzA1OjIxOjAwOjAwKSAgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OUM2NjlDQjI4ODBGMTFFMTg1ODlEODNERDJBRjUwQTQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OUM2NjlDQjM4ODBGMTFFMTg1ODlEODNERDJBRjUwQTQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5QzY2OUNCMDg4MEYxMUUxODU4OUQ4M0REMkFGNTBBNCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5QzY2OUNCMTg4MEYxMUUxODU4OUQ4M0REMkFGNTBBNCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PsQhXeAAAABfSURBVHjaYvz//z8DJYCRUgMYQAbAMBQIAvEqkBQWXI6sHqwHiwG70TTBxGaiWwjCTGgOUgJiF1J8wMRAIUA34B4Q76HUBelAfJYSA0CuMIEaRP8wGIkGMA54bgQIMACAmkXJi0hKJQAAAABJRU5ErkJggg==) no-repeat 10px center;\n  text-decoration: none; }\n\nh1 tt, h1 code {\n  font-size: inherit; }\n\nh2 tt, h2 code {\n  font-size: inherit; }\n\nh3 tt, h3 code {\n  font-size: inherit; }\n\nh4 tt, h4 code {\n  font-size: inherit; }\n\nh5 tt, h5 code {\n  font-size: inherit; }\n\nh6 tt, h6 code {\n  font-size: inherit; }\n\nh1 {\n  font-size: 28px;\n  color: black; }\n\nh2 {\n  font-size: 24px;\n  border-bottom: 1px solid #cccccc;\n  color: black; }\n\nh3 {\n  font-size: 18px; }\n\nh4 {\n  font-size: 16px; }\n\nh5 {\n  font-size: 14px; }\n\nh6 {\n  color: #777777;\n  font-size: 14px; }\n\np, blockquote, ul, ol, dl, li, table, pre {\n  margin: 15px 0; }\n\nhr {\n  background: transparent url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAECAYAAACtBE5DAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBNYWNpbnRvc2giIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OENDRjNBN0E2NTZBMTFFMEI3QjRBODM4NzJDMjlGNDgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OENDRjNBN0I2NTZBMTFFMEI3QjRBODM4NzJDMjlGNDgiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4Q0NGM0E3ODY1NkExMUUwQjdCNEE4Mzg3MkMyOUY0OCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo4Q0NGM0E3OTY1NkExMUUwQjdCNEE4Mzg3MkMyOUY0OCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PqqezsUAAAAfSURBVHjaYmRABcYwBiM2QSA4y4hNEKYDQxAEAAIMAHNGAzhkPOlYAAAAAElFTkSuQmCC) repeat-x 0 0;\n  border: 0 none;\n  color: #cccccc;\n  height: 4px;\n  padding: 0;\n}\n\nbody > h2:first-child {\n  margin-top: 0;\n  padding-top: 0; }\nbody > h1:first-child {\n  margin-top: 0;\n  padding-top: 0; }\n  body > h1:first-child + h2 {\n    margin-top: 0;\n    padding-top: 0; }\nbody > h3:first-child, body > h4:first-child, body > h5:first-child, body > h6:first-child {\n  margin-top: 0;\n  padding-top: 0; }\n\na:first-child h1, a:first-child h2, a:first-child h3, a:first-child h4, a:first-child h5, a:first-child h6 {\n  margin-top: 0;\n  padding-top: 0; }\n\nh1 p, h2 p, h3 p, h4 p, h5 p, h6 p {\n  margin-top: 0; }\n\nli p.first {\n  display: inline-block; }\nli {\n  margin: 0; }\nul, ol {\n  padding-left: 30px; }\n\nul :first-child, ol :first-child {\n  margin-top: 0; }\n\ndl {\n  padding: 0; }\n  dl dt {\n    font-size: 14px;\n    font-weight: bold;\n    font-style: italic;\n    padding: 0;\n    margin: 15px 0 5px; }\n    dl dt:first-child {\n      padding: 0; }\n    dl dt > :first-child {\n      margin-top: 0; }\n    dl dt > :last-child {\n      margin-bottom: 0; }\n  dl dd {\n    margin: 0 0 15px;\n    padding: 0 15px; }\n    dl dd > :first-child {\n      margin-top: 0; }\n    dl dd > :last-child {\n      margin-bottom: 0; }\n\nblockquote {\n  border-left: 4px solid #dddddd;\n  padding: 0 15px;\n  color: #777777; }\n  blockquote > :first-child {\n    margin-top: 0; }\n  blockquote > :last-child {\n    margin-bottom: 0; }\n\ntable {\n  padding: 0;border-collapse: collapse; }\n  table tr {\n    border-top: 1px solid #cccccc;\n    background-color: white;\n    margin: 0;\n    padding: 0; }\n    table tr:nth-child(2n) {\n      background-color: #f8f8f8; }\n    table tr th {\n      font-weight: bold;\n      border: 1px solid #cccccc;\n      margin: 0;\n      padding: 6px 13px; }\n    table tr td {\n      border: 1px solid #cccccc;\n      margin: 0;\n      padding: 6px 13px; }\n    table tr th :first-child, table tr td :first-child {\n      margin-top: 0; }\n    table tr th :last-child, table tr td :last-child {\n      margin-bottom: 0; }\n\nimg {\n  max-width: 100%; }\n\nspan.frame {\n  display: block;\n  overflow: hidden; }\n  span.frame > span {\n    border: 1px solid #dddddd;\n    display: block;\n    float: left;\n    overflow: hidden;\n    margin: 13px 0 0;\n    padding: 7px;\n    width: auto; }\n  span.frame span img {\n    display: block;\n    float: left; }\n  span.frame span span {\n    clear: both;\n    color: #333333;\n    display: block;\n    padding: 5px 0 0; }\nspan.align-center {\n  display: block;\n  overflow: hidden;\n  clear: both; }\n  span.align-center > span {\n    display: block;\n    overflow: hidden;\n    margin: 13px auto 0;\n    text-align: center; }\n  span.align-center span img {\n    margin: 0 auto;\n    text-align: center; }\nspan.align-right {\n  display: block;\n  overflow: hidden;\n  clear: both; }\n  span.align-right > span {\n    display: block;\n    overflow: hidden;\n    margin: 13px 0 0;\n    text-align: right; }\n  span.align-right span img {\n    margin: 0;\n    text-align: right; }\nspan.float-left {\n  display: block;\n  margin-right: 13px;\n  overflow: hidden;\n  float: left; }\n  span.float-left span {\n    margin: 13px 0 0; }\nspan.float-right {\n  display: block;\n  margin-left: 13px;\n  overflow: hidden;\n  float: right; }\n  span.float-right > span {\n    display: block;\n    overflow: hidden;\n    margin: 13px auto 0;\n    text-align: right; }\n\ncode, tt {\n  margin: 0 2px;\n  padding: 0 5px;\n  white-space: nowrap;\n  border: 1px solid #eaeaea;\n  background-color: #f8f8f8;\n  border-radius: 3px; }\n\npre code {\n  margin: 0;\n  padding: 0;\n  white-space: pre;\n  border: none;\n  background: transparent; }\n\n.highlight pre {\n  background-color: #f8f8f8;\n  border: 1px solid #cccccc;\n  font-size: 13px;\n  line-height: 19px;\n  overflow: auto;\n  padding: 6px 10px;\n  border-radius: 3px; }\n\npre {\n  background-color: #f8f8f8;\n  border: 1px solid #cccccc;\n  font-size: 13px;\n  line-height: 19px;\n  overflow: auto;\n  padding: 6px 10px;\n  border-radius: 3px; }\n  pre code, pre tt {\n    background-color: transparent;\n    border: none; }\n\nsup {\n    font-size: 0.83em;\n    vertical-align: super;\n    line-height: 0;\n}\n\nkbd {\n  display: inline-block;\n  padding: 3px 5px;\n  font-size: 11px;\n  line-height: 10px;\n  color: #555;\n  vertical-align: middle;\n  background-color: #fcfcfc;\n  border: solid 1px #ccc;\n  border-bottom-color: #bbb;\n  border-radius: 3px;\n  box-shadow: inset 0 -1px 0 #bbb\n}\n\n* {\n\t-webkit-print-color-adjust: exact;\n}\n@media screen and (min-width: 914px) {\n    body {\n        width: 854px;\n        margin:0 auto;\n    }\n}\n@media print {\n\ttable, pre {\n\t\tpage-break-inside: avoid;\n\t}\n\tpre {\n\t\tword-wrap: break-word;\n\t}\n  body {\n    padding: 2cm; \n  }\n}\n"
      //     }}
      //   />
      //   <style
      //     type="text/css"
      //     dangerouslySetInnerHTML={{
      //       __html:
      //         '\n/**\n * prism.js default theme for JavaScript, CSS and HTML\n * Based on dabblet (http://dabblet.com)\n * @author Lea Verou\n */\n\ncode[class*="language-"],\npre[class*="language-"] {\n\tcolor: black;\n\tbackground: none;\n\ttext-shadow: 0 1px white;\n\tfont-family: Consolas, Monaco, \'Andale Mono\', \'Ubuntu Mono\', monospace;\n\ttext-align: left;\n\twhite-space: pre;\n\tword-spacing: normal;\n\tword-break: normal;\n\tword-wrap: normal;\n\tline-height: 1.5;\n\n\t-moz-tab-size: 4;\n\t-o-tab-size: 4;\n\ttab-size: 4;\n\n\t-webkit-hyphens: none;\n\t-moz-hyphens: none;\n\t-ms-hyphens: none;\n\thyphens: none;\n}\n\npre[class*="language-"]::-moz-selection, pre[class*="language-"] ::-moz-selection,\ncode[class*="language-"]::-moz-selection, code[class*="language-"] ::-moz-selection {\n\ttext-shadow: none;\n\tbackground: #b3d4fc;\n}\n\npre[class*="language-"]::selection, pre[class*="language-"] ::selection,\ncode[class*="language-"]::selection, code[class*="language-"] ::selection {\n\ttext-shadow: none;\n\tbackground: #b3d4fc;\n}\n\n@media print {\n\tcode[class*="language-"],\n\tpre[class*="language-"] {\n\t\ttext-shadow: none;\n\t}\n}\n\n/* Code blocks */\npre[class*="language-"] {\n\tpadding: 1em;\n\tmargin: .5em 0;\n\toverflow: auto;\n}\n\n:not(pre) > code[class*="language-"],\npre[class*="language-"] {\n\tbackground: #f5f2f0;\n}\n\n/* Inline code */\n:not(pre) > code[class*="language-"] {\n\tpadding: .1em;\n\tborder-radius: .3em;\n\twhite-space: normal;\n}\n\n.token.comment,\n.token.prolog,\n.token.doctype,\n.token.cdata {\n\tcolor: slategray;\n}\n\n.token.punctuation {\n\tcolor: #999;\n}\n\n.namespace {\n\topacity: .7;\n}\n\n.token.property,\n.token.tag,\n.token.boolean,\n.token.number,\n.token.constant,\n.token.symbol,\n.token.deleted {\n\tcolor: #905;\n}\n\n.token.selector,\n.token.attr-name,\n.token.string,\n.token.char,\n.token.builtin,\n.token.inserted {\n\tcolor: #690;\n}\n\n.token.operator,\n.token.entity,\n.token.url,\n.language-css .token.string,\n.style .token.string {\n\tcolor: #a67f59;\n\tbackground: hsla(0, 0%, 100%, .5);\n}\n\n.token.atrule,\n.token.attr-value,\n.token.keyword {\n\tcolor: #07a;\n}\n\n.token.function {\n\tcolor: #DD4A68;\n}\n\n.token.regex,\n.token.important,\n.token.variable {\n\tcolor: #e90;\n}\n\n.token.important,\n.token.bold {\n\tfont-weight: bold;\n}\n.token.italic {\n\tfont-style: italic;\n}\n\n.token.entity {\n\tcursor: help;\n}\n'
      //     }}
      //   />
      //   <style
      //     type="text/css"
      //     dangerouslySetInnerHTML={{
      //       __html:
      //         "\npre.line-numbers {\n\tposition: relative;\n\tpadding-left: 3.8em;\n\tcounter-reset: linenumber;\n}\n\npre.line-numbers > code {\n\tposition: relative;\n}\n\n.line-numbers .line-numbers-rows {\n\tposition: absolute;\n\tpointer-events: none;\n\ttop: 0;\n\tfont-size: 100%;\n\tleft: -3.8em;\n\twidth: 3em; /* works for line-numbers below 1000 lines */\n\tletter-spacing: -1px;\n\tborder-right: 1px solid #999;\n\n\t-webkit-user-select: none;\n\t-moz-user-select: none;\n\t-ms-user-select: none;\n\tuser-select: none;\n\n}\n\n\t.line-numbers-rows > span {\n\t\tpointer-events: none;\n\t\tdisplay: block;\n\t\tcounter-increment: linenumber;\n\t}\n\n\t\t.line-numbers-rows > span:before {\n\t\t\tcontent: counter(linenumber);\n\t\t\tcolor: #999;\n\t\t\tdisplay: block;\n\t\t\tpadding-right: 0.8em;\n\t\t\ttext-align: right;\n\t\t}\n"
      //     }}
      //   />
      //   <style
      //     type="text/css"
      //     dangerouslySetInnerHTML={{
      //       __html:
      //         "\ndiv.prism-show-language {\n\tposition: relative;\n}\n\ndiv.prism-show-language > div.prism-show-language-label {\n\tcolor: black;\n\tbackground-color: #CFCFCF;\n\tdisplay: inline-block;\n\tposition: absolute;\n\tbottom: auto;\n\tleft: auto;\n\ttop: 0;\n\tright: 0;\n\twidth: auto;\n\theight: auto;\n\tfont-size: 0.9em;\n\tborder-radius: 0 0 0 5px;\n\tpadding: 0 0.5em;\n\ttext-shadow: none;\n\tz-index: 1;\n\t-webkit-box-shadow: none;\n\t-moz-box-shadow: none;\n\tbox-shadow: none;\n\t-webkit-transform: none;\n\t-moz-transform: none;\n\t-ms-transform: none;\n\t-o-transform: none;\n\ttransform: none;\n}\n"
      //     }}
      //   />
      //   <h1 id="toc_0">Puzzle Solver Algo (Bit Array Solution)</h1>
      //   <h2 id="toc_1">Source Code</h2>
      //   <div>
      //     <pre className="line-numbers">
      //       <code className="language-typescript">
      //         import fs from 'fs';{"\n"}import {"{"} promisify {"}"} from
      //         'util';{"\n"}const readFileAsync = promisify(fs.readFile);{"\n"}
      //         {"\n"}const toVchar = (cs: string) =&gt; {"{"}
      //         {"\n"}
      //         {"  "}let cv = 0;{"\n"}
      //         {"  "}for (let i = 0; i &lt; cs.length; i++) {"{"}
      //         {"\n"}
      //         {"    "}let c = cs[i];{"\n"}
      //         {"    "}
      //         {"{"}
      //         {"\n"}
      //         {"      "}let ordinal ={"\n"}
      //         {"        "}(function(c: any) {"{"}
      //         {"\n"}
      //         {"          "}return c.charCodeAt == null ? c : c.charCodeAt(0);
      //         {"\n"}
      //         {"        "}
      //         {"}"})(c) - 'a'.charCodeAt(0);{"\n"}
      //         {"      "}cv |= 1 &lt;&lt; ordinal;{"\n"}
      //         {"    "}
      //         {"}"}
      //         {"\n"}
      //         {"  "}
      //         {"}"}
      //         {"\n"}
      //         {"  "}return cv;{"\n"}
      //         {"}"};{"\n"}
      //         {"\n"}const bitCount = (u: number) =&gt; {"{"}
      //         {"\n"}
      //         {"  "}const uCount = u - ((u &gt;&gt; 1) &amp; 0o33333333333) -
      //         ((u &gt;&gt; 2) &amp; 0o11111111111);{"\n"}
      //         {"  "}return ((uCount + (uCount &gt;&gt; 3)) &amp; 0o30707070707)
      //         % 63;{"\n"}
      //         {"}"};{"\n"}
      //         {"\n"}const firstSetBit = (int: number) =&gt; int &amp; -int;
      //         {"\n"}
      //         {"\n"}const puzzlesForBoardSet = (Vchar: number) =&gt; {"{"}
      //         {"\n"}
      //         {"  "}let puzzles = [];{"\n"}
      //         {"  "}let decayingBoardSet = Vchar;{"\n"}
      //         {"  "}while (decayingBoardSet !== 0) {"{"}
      //         {"\n"}
      //         {"    "}let required = firstSetBit(decayingBoardSet);{"\n"}
      //         {"    "}decayingBoardSet ^= required;{"\n"}
      //         {"    "}puzzles.push([Vchar, required]);{"\n"}
      //         {"  "}
      //         {"}"}
      //         {"\n"}
      //         {"  "}return puzzles;{"\n"}
      //         {"}"};{"\n"}
      //         {"\n"}const puzzleMaster = (dict: any, minLen: number, maxLets:
      //         number) =&gt; {"{"}
      //         {"\n"}
      //         {"  "}let wordSet = new Set();{"\n"}
      //         {"  "}let wordsByVector = new Map();{"\n"}
      //         {"  "}let boardSet = new Set();{"\n"}
      //         {"  "}let puzzles = [];{"\n"}
      //         {"  "}loop1: for (let i = 0; i &lt; dict.length; i++) {"{"}
      //         {"\n"}
      //         {"    "}let word = dict[i];{"\n"}
      //         {"    "}if (word.length &lt; minLen) {"{"}
      //         {"\n"}
      //         {"      "}continue;{"\n"}
      //         {"    "}
      //         {"}"}
      //         {"\n"}
      //         {"    "}let charArr = word.split('');{"\n"}
      //         {"    "}for (let j = 0; j &lt; charArr.length; j++) {"{"}
      //         {"\n"}
      //         {"      "}let c = charArr[j];{"\n"}
      //         {"      "}if ({"\n"}
      //         {"        "}c.charCodeAt(0) &lt; 'a'.charCodeAt(0) ||{"\n"}
      //         {"        "}c.charCodeAt(0) &gt; 'z'.charCodeAt(0){"\n"}
      //         {"      "}) {"{"}
      //         {"\n"}
      //         {"        "}continue loop1;{"\n"}
      //         {"      "}
      //         {"}"}
      //         {"\n"}
      //         {"    "}
      //         {"}"}
      //         {"\n"}
      //         {"    "}const vector = toVchar(charArr);{"\n"}
      //         {"    "}const distinctLetterCount = bitCount(vector);{"\n"}
      //         {"    "}if (distinctLetterCount &gt; maxLets) {"{"}
      //         {"\n"}
      //         {"      "}continue;{"\n"}
      //         {"    "}
      //         {"}"}
      //         {"\n"}
      //         {"    "}wordSet.add(word);{"\n"}
      //         {"    "}wordsByVector.set({"\n"}
      //         {"      "}vector,{"\n"}
      //         {"      "}wordsByVector.has(vector){"\n"}
      //         {"        "}? [...wordsByVector.get(vector), word]{"\n"}
      //         {"        "}: new Array(word){"\n"}
      //         {"    "});{"\n"}
      //         {"    "}if (distinctLetterCount === maxLets) {"{"}
      //         {"\n"}
      //         {"      "}if (!boardSet.has(vector) ? boardSet.add(vector) :
      //         false) {"{"}
      //         {"\n"}
      //         {"        "}puzzles.push(puzzlesForBoardSet(vector));{"\n"}
      //         {"      "}
      //         {"}"}
      //         {"\n"}
      //         {"    "}
      //         {"}"}
      //         {"\n"}
      //         {"  "}
      //         {"}"}
      //         {"\n"}
      //         {"  "}return {"{"} wordsByVector, puzzles {"}"};{"\n"}
      //         {"}"};{"\n"}
      //         {"\n"}const addSolutions = ({"\n"}
      //         {"  "}result: any[],{"\n"}
      //         {"  "}Vreq: number,{"\n"}
      //         {"  "}Vopt: number,{"\n"}
      //         {"  "}hashmap: Map&lt;number, any[]&gt;{"\n"}) =&gt; {"{"}
      //         {"\n"}
      //         {"  "}if (Vopt === 0) {"{"}
      //         {"\n"}
      //         {"    "}result.push(hashmap.has(Vreq) ? hashmap.get(Vreq) : null);
      //         {"\n"}
      //         {"  "}
      //         {"}"} else {"{"}
      //         {"\n"}
      //         {"    "}let nextOneHot = firstSetBit(Vopt);{"\n"}
      //         {"    "}let expandedVreq = Vreq | nextOneHot;{"\n"}
      //         {"    "}let nextVopt = Vopt ^ nextOneHot;{"\n"}
      //         {"    "}addSolutions(result, Vreq, nextVopt, hashmap);{"\n"}
      //         {"    "}addSolutions(result, expandedVreq, nextVopt, hashmap);
      //         {"\n"}
      //         {"  "}
      //         {"}"}
      //         {"\n"}
      //         {"}"};{"\n"}
      //         {"\n"}const solutionsTo = ({"\n"}
      //         {"  "}Vlets: number,{"\n"}
      //         {"  "}Vreq: number,{"\n"}
      //         {"  "}hashmap: Map&lt;number, any[]&gt;{"\n"}) =&gt; {"{"}
      //         {"\n"}
      //         {"  "}const solutions = []; //new Set();{"\n"}
      //         {"  "}const Vopt = Vlets &amp; ~Vreq;{"\n"}
      //         {"  "}addSolutions(solutions, Vreq, Vopt, hashmap);{"\n"}
      //         {"  "}return solutions;{"\n"}
      //         {"}"};{"\n"}
      //         {"\n"}const createReqMap = () =&gt; {"{"}
      //         {"\n"}
      //         {"  "}let reqMap = new Map();{"\n"}
      //         {"  "}const alphabet = [{"\n"}
      //         {"    "}'A',{"\n"}
      //         {"    "}'B',{"\n"}
      //         {"    "}'C',{"\n"}
      //         {"    "}'D',{"\n"}
      //         {"    "}'E',{"\n"}
      //         {"    "}'F',{"\n"}
      //         {"    "}'G',{"\n"}
      //         {"    "}'H',{"\n"}
      //         {"    "}'I',{"\n"}
      //         {"    "}'J',{"\n"}
      //         {"    "}'K',{"\n"}
      //         {"    "}'L',{"\n"}
      //         {"    "}'M',{"\n"}
      //         {"    "}'N',{"\n"}
      //         {"    "}'O',{"\n"}
      //         {"    "}'P',{"\n"}
      //         {"    "}'Q',{"\n"}
      //         {"    "}'R',{"\n"}
      //         {"    "}'S',{"\n"}
      //         {"    "}'T',{"\n"}
      //         {"    "}'U',{"\n"}
      //         {"    "}'V',{"\n"}
      //         {"    "}'W',{"\n"}
      //         {"    "}'X',{"\n"}
      //         {"    "}'Y',{"\n"}
      //         {"    "}'Z'{"\n"}
      //         {"  "}];{"\n"}
      //         {"\n"}
      //         {"  "}for (let i = 0; i &lt; alphabet.length; i++) {"{"}
      //         {"\n"}
      //         {"    "}reqMap.set(toVchar(alphabet[i]), alphabet[i]);{"\n"}
      //         {"  "}
      //         {"}"}
      //         {"\n"}
      //         {"  "}return reqMap;{"\n"}
      //         {"}"};{"\n"}
      //         {"\n"}const createLetterSetMap = (puzzles: any[], hashmap:
      //         Map&lt;number, any[]&gt;) =&gt; {"{"}
      //         {"\n"}
      //         {"  "}let letters = [];{"\n"}
      //         {"  "}let lettersMap = new Map();{"\n"}
      //         {"  "}for (let i = 0; i &lt; puzzles.length; i++) {"{"}
      //         {"\n"}
      //         {"    "}letters.push(puzzles[i][0][0]);{"\n"}
      //         {"    "}lettersMap.set({"\n"}
      //         {"      "}letters[i],{"\n"}
      //         {"      "}hashmap{"\n"}
      //         {"        "}.get(letters[i])[0]{"\n"}
      //         {"        "}.replace(/(.)(?=.*\u)/g, ''){"\n"}
      //         {"        "}.toUpperCase(){"\n"}
      //         {"    "});{"\n"}
      //         {"  "}
      //         {"}"}
      //         {"\n"}
      //         {"  "}return lettersMap;{"\n"}
      //         {"}"};{"\n"}
      //         {"\n"}const solver = (puzzles: any, hashmap: any) =&gt; {"{"}
      //         {"\n"}
      //         {"  "}let solutions = [];{"\n"}
      //         {"  "}const reqMap = createReqMap();{"\n"}
      //         {"  "}const letterSetMap = createLetterSetMap(puzzles, hashmap);
      //         {"\n"}
      //         {"  "}for (let i = 0; i &lt; puzzles.length; i++) {"{"}
      //         {"\n"}
      //         {"    "}for (let j = 0; j &lt; 7; j++) {"{"}
      //         {"\n"}
      //         {"      "}let Vchar = puzzles[i][j][0];{"\n"}
      //         {"      "}let Vreq = puzzles[i][j][1];{"\n"}
      //         {"      "}solutions.push([{"\n"}
      //         {"        "}reqMap.get(Vreq),{"\n"}
      //         {"        "}letterSetMap.get(Vchar),{"\n"}
      //         {"        "}hashmap.get(Vchar),{"\n"}
      //         {"        "}solutionsTo(Vchar, Vreq, hashmap){"\n"}
      //         {"          "}.flat(Infinity){"\n"}
      //         {"          "}.filter(x =&gt; x){"\n"}
      //         {"      "}]);{"\n"}
      //         {"    "}
      //         {"}"}
      //         {"\n"}
      //         {"  "}
      //         {"}"}
      //         {"\n"}
      //         {"  "}return solutions;{"\n"}
      //         {"}"};{"\n"}
      //         {"\n"}const SolvePuzzles = async (dictPath: string) =&gt; {"{"}
      //         {"\n"}
      //         {"  "}const t0 = performance.now();{"\n"}
      //         {"\n"}
      //         {"  "}console.log('Reading dictionary...');{"\n"}
      //         {"  "}const dict = await readFileAsync(__dirname + dictPath,
      //         'utf8');{"\n"}
      //         {"  "}const words = await dict.split('\n'); {"\n"}
      //         {"\n"}
      //         {"  "}console.log('Generating puzzles...');{"\n"}
      //         {"  "}const {"{"} wordsByVector {"}"} = puzzleMaster(words, 4, 7);{" "}
      //         {"\n"}
      //         {"  "}const {"{"} puzzles {"}"} = puzzleMaster(words, 4, 7);{" "}
      //         {"\n"}
      //         {"\n"}
      //         {"  "}console.log('Solutions:');{"\n"}
      //         {"  "}console.log(solver(puzzles, wordsByVector)); //Take
      //         ~1421.117 milliseconds{"\n"}
      //         {"}"};{"\n"}
      //         {"\n"}(async () =&gt; {"{"}
      //         {"\n"}
      //         {"  "}await SolvePuzzles('/ubuntu-wamerican.txt'));{"\n"}
      //         {"}"})();
      //       </code>
      //     </pre>
      //   </div>
      //   <h4 id="toc_2">To run the algo:</h4>
      //   <ul>
      //     <li>
      //       Download and open this folder in your IDE:{" "}
      //       <a href="http://www.filedropper.com/bitarrsolution">
      //         http://www.filedropper.com/bitarrsolution
      //       </a>
      //     </li>
      //     <li>Then in your terminal run:</li>
      //   </ul>
      //   <div>
      //     <pre className="line-numbers">
      //       <code className="language-none">
      //         npm i -g typescript{"\n"}npm i -g ts-node{"\n"}npm i{"\n"}s-node
      //         &lt;PATH&gt;/&lt;NAME&gt;.ts
      //       </code>
      //     </pre>
      //   </div>
      //   <h2 id="toc_3">Deconstruction</h2>
      //   <h4 id="toc_4">Preprocessing:</h4>
      //   <ul>
      //     <li>
      //       First, a dictionary text file is read into an array of its words.{" "}
      //     </li>
      //     <li>
      //       Then each element in the dictionary array is converted into its
      //       character array (an array of the characters that make up a given
      //       word. e.g. <code>'word' =&gt; ['w', 'o', 'r', 'd']</code>).{" "}
      //     </li>
      //     <li>
      //       Then the array is preprocessed to index each word by its character
      //       vector using the toVchar() function.
      //     </li>
      //   </ul>
      //   <div>
      //     <pre className="line-numbers">
      //       <code className="language-typescript">
      //         const toVchar = (cs: string) =&gt; {"{"}
      //         {"\n"}
      //         {"  "}let cv = 0;{"\n"}
      //         {"  "}for (let i = 0; i &lt; cs.length; i++) {"{"}
      //         {"\n"}
      //         {"    "}let c = cs[i];{"\n"}
      //         {"    "}
      //         {"{"}
      //         {"\n"}
      //         {"      "}let ordinal ={"\n"}
      //         {"        "}(function(c: any) {"{"}
      //         {"\n"}
      //         {"          "}return c.charCodeAt == null ? c : c.charCodeAt(0);
      //         {"\n"}
      //         {"        "}
      //         {"}"})(c) - 'a'.charCodeAt(0);{"\n"}
      //         {"      "}cv |= 1 &lt;&lt; ordinal;{"\n"}
      //         {"    "}
      //         {"}"}
      //         {"\n"}
      //         {"  "}
      //         {"}"}
      //         {"\n"}
      //         {"  "}return cv;{"\n"}
      //         {"}"};
      //       </code>
      //     </pre>
      //   </div>
      //   <p>
      //     The character vector for a set of characters is the integer whose ith
      //     bit is set exactly if the ith letter of the alphabet is included in
      //     the character set. All indices are zero-based, and the least
      //     significant bits are numbered first. The alphabet is fixed to the 26
      //     lowercase Latin characters as used in the English alphabet.
      //   </p>
      //   <ul>
      //     <li>
      //       e.g. the character vector for <code>['a', 'd', 'e', 'g']</code> is
      //       0b1011001 or 89.
      //     </li>
      //   </ul>
      //   <p>
      //     The character vector for a word is defined to be the character vector
      //     for the set of unique characters in that string.{" "}
      //   </p>
      //   <ul>
      //     <li>
      //       <p>
      //         e.g., the character set for both ‘adage’ and ‘gagged’ is {"{"}a,
      //         d, e, g{"}"}. Since both these strings share a character set they
      //         both share the character vector 89.
      //       </p>
      //     </li>
      //     <li>
      //       <p>
      //         the letiable cv is used as a storage for bits. Where every bit in
      //         the integer cv can be treated as a flag.{" "}
      //       </p>
      //     </li>
      //     <li>
      //       <p>
      //         Eventually cv becomes an array of bits. Each bit in the array
      //         states whether the character with bit’s index was found in the
      //         string or not.{" "}
      //       </p>
      //     </li>
      //     <li>
      //       <p>
      //         The left shift operator <code>&lt;&lt;</code> moves all the bits
      //         in its first operand to the left by the number of places specified
      //         in the second operand. New bits are filled with zeros. Shifting a
      //         value left by one position is equivalent to multiplying it by 2,
      //         shifting two positions is equivalent to multiplying by 4, and so
      //         on.
      //       </p>
      //     </li>
      //   </ul>
      //   <p>
      //     Bitwise shifting any number x to the left by y bits yields{" "}
      //     <code>x * 2 ** y</code>.{" "}
      //   </p>
      //   <ul>
      //     <li>
      //       e.g. <code>9 &lt;&lt; 3</code> translates to{" "}
      //       <code>9 * (2 ** 3) = 9 * (8) = 72</code>.
      //     </li>
      //   </ul>
      //   <p>
      //     The bitwise OR assignment operator <code>|=</code> uses the binary
      //     representation of both operands, does a bitwise OR operation on them
      //     and assigns the result to the letiable. \((x |= y) \equiv (x = x |
      //     y)\)
      //   </p>
      //   <div>
      //     <pre className="line-numbers">
      //       <code className="language-none">
      //         let bar = 5;{"\n"}bar |= 2; 7{"\n"} 5:
      //         00000000000000000000000000000101{"\n"} 2:
      //         00000000000000000000000000000010{"\n"}
      //         -----------------------------------{"\n"} 7:
      //         00000000000000000000000000000111
      //       </code>
      //     </pre>
      //   </div>
      //   <h4 id="toc_5">Counting Bits:</h4>
      //   <div>
      //     <pre className="line-numbers">
      //       <code className="language-typescript">
      //         const bitCount = (u: number) =&gt; {"{"}
      //         {"\n"}
      //         {"  "}const uCount = u - ((u &gt;&gt; 1) &amp; 0o33333333333) -
      //         ((u &gt;&gt; 2) &amp; 0o11111111111);{"\n"}
      //         {"  "}return ((uCount + (uCount &gt;&gt; 3)) &amp; 0o30707070707)
      //         % 63;{"\n"}
      //         {"}"};
      //       </code>
      //     </pre>
      //   </div>
      //   <p>
      //     Instead of looping over the entire number, sum up the number in blocks
      //     of 3 (octal) and count them in parallel. This method has 0(1) time and
      //     space complexity. See:{" "}
      //     <a href="https://docs.microsoft.com/en-us/archive/blogs/jeuge/bit-fiddling-3">
      //       https://docs.microsoft.com/en-us/archive/blogs/jeuge/bit-fiddling-3
      //     </a>
      //   </p>
      //   <p>
      //     If you were to initialize a bitArray at the beginning of the function
      //     e.g. let bitArray = []. And then push each of the results from bit
      //     count to it{" "}
      //   </p>
      //   <ul>
      //     <li>
      //       e.g.{" "}
      //       <code>
      //         if (distinctLetterCount &gt; maxLets) {"{"}continue;{"}"}{" "}
      //         bitSet.push(distinctLetterCount)
      //       </code>{" "}
      //       <code>puzzleMaster(['ABCDEF', 'GAGGED', 'ADAGE'], 4, 7)</code> would
      //       return the bitArray: <code>[ 6, 4, 4 ]</code>
      //     </li>
      //   </ul>
      //   <h4 id="toc_6">Generate the puzzles for a board set:</h4>
      //   <h5 id="toc_7">Getting the lowest set bit:</h5>
      //   <div>
      //     <pre className="line-numbers">
      //       <code className="language-typescript">
      //         const firstSetBit = (int) =&gt; int &amp; -int;
      //       </code>
      //     </pre>
      //   </div>
      //   <p>
      //     The firstSetBit() method takes an integer and returns an integer value
      //     with at most a single one-bit, in the position of the lowest-order
      //     (“rightmost”) one-bit in the specified integer value.
      //   </p>
      //   <p>
      //     It returns zero if the specified value has no one-bits in its two’s
      //     complement binary representation, that is, if it is equal to zero.
      //   </p>
      //   <p>e.g.</p>
      //   <div>
      //     <pre className="line-numbers">
      //       <code className="language-none">
      //         Number = 170{"\n"}Binary = 10101010{"\n"}Number of one bits = 4
      //         {"\n"}Highest one bit = 128{"\n"}Lowest one bit = 2
      //       </code>
      //     </pre>
      //   </div>
      //   <p>
      //     The Bitwise AND operator <code>&amp;</code> performs the AND operation
      //     on each pair of bits. a AND b yields 1 i.f.f. both a and b are 1. The
      //     truth table for the AND operation is:
      //   </p>
      //   <div>
      //     <pre className="line-numbers">
      //       <code className="language-none">
      //         a{"   "}b{"   "}a AND b{"\n"}0{"   "}0{"       "}0{"\n"}0{"   "}1
      //         {"       "}0{"\n"}1{"   "}0{"       "}0{"\n"}1{"   "}1{"       "}1
      //       </code>
      //     </pre>
      //   </div>
      //   <p>Bitwise ANDing any number x with 0 yields 0.</p>
      //   <h5 id="toc_8">
      //     The two’s complement negation <code>-int</code> of the integer is
      //     taken as follows:
      //   </h5>
      //   <ul>
      //     <li>
      //       <p>
      //         first you complement it, setting all zeroes to the right of the
      //         lowest set bit to one and the lowest set bit to zero.
      //       </p>
      //     </li>
      //     <li>
      //       <p>
      //         then you add one, setting the bits on the right to zero and the
      //         lowest set bit becomes one again, ending the carry chain.
      //       </p>
      //     </li>
      //     <li>
      //       <p>
      //         Now the negation of the number has the same “right part”, up to
      //         and including the lowest set bit.
      //       </p>
      //     </li>
      //     <li>
      //       <p>
      //         everything to the left of the lowest set bit is the complement of
      //         the input. Thus if you take the bitwise AND of a number with its
      //         negation <code>int &amp; -int</code>, all the bits to the left of
      //         the lowest set bit are cancelled out. This leaves you with the
      //         isolated lowest set bit.
      //       </p>
      //     </li>
      //   </ul>
      //   <h4 id="toc_9">Generating puzzle for a board set</h4>
      //   <p>
      //     The puzzlesForBoardSet() function takes a character vector as an
      //     argument, which should have at least one bit set and returns all
      //     puzzles whose char vector is the supplied argument and whose required
      //     letter has exactly one bit set.
      //   </p>
      //   <div>
      //     <pre className="line-numbers">
      //       <code className="language-typescript">
      //         const puzzlesForBoardSet = (Vchar: number) =&gt; {"{"}
      //         {"\n"}
      //         {"  "}let puzzles = [];{"\n"}
      //         {"  "}let decayingBoardSet = Vchar;{"\n"}
      //         {"  "}while (decayingBoardSet !== 0) {"{"}
      //         {"\n"}
      //         {"    "}let required = firstSetBit(decayingBoardSet);{"\n"}
      //         {"    "}decayingBoardSet ^= required;{"\n"}
      //         {"    "}puzzles.push([Vchar, required]);{"\n"}
      //         {"  "}
      //         {"}"}
      //         {"\n"}
      //         {"  "}return puzzles;{"\n"}
      //         {"}"};
      //       </code>
      //     </pre>
      //   </div>
      //   <div>
      //     <pre className="line-numbers">
      //       <code className="language-typescript">
      //         let puzzles = [];{"\n"}let decayingBoardSet = Vchar;
      //       </code>
      //     </pre>
      //   </div>
      //   <p>
      //     an empty array called puzzles is initialized and the letiable
      //     decayingBoardSet is set to be the charVector supplied as an argument.
      //   </p>
      //   <div>
      //     <pre className="line-numbers">
      //       <code className="language-typescript">
      //         let required = firstSetBit(decayingBoardSet);
      //       </code>
      //     </pre>
      //   </div>
      //   <p>
      //     While the decayingBoardSet is not equal to zero we set the letiable
      //     required to be the result of firstSetBit() with decayingBoardSet
      //     supplied as the argument meaning required is equal to the lowest order
      //     one bit of the charVector.
      //   </p>
      //   <div>
      //     <pre className="line-numbers">
      //       <code className="language-typescript">
      //         decayingBoardSet ^= required;
      //       </code>
      //     </pre>
      //   </div>
      //   <p>
      //     Then the bitwise XOR assignment operator (^=) is applied to the value
      //     of the required letiable. ^= uses the binary representation of both
      //     operands, does a bitwise XOR operation on them and assigns the result
      //     to the letiable. the bitwise XOR operator performs the XOR operation
      //     on each pair of bits. a XOR b yields 1 if a and b are different.
      //   </p>
      //   <p>The truth table for the XOR operation is:</p>
      //   <div>
      //     <pre className="line-numbers">
      //       <code className="language-none">
      //         a{"   "}b{"   "}a XOR b{"\n"}0{"   "}0{"   "}0{"\n"}0{"   "}1
      //         {"   "}1{"\n"}1{"   "}0{"   "}1{"\n"}1{"   "}1{"   "}0
      //       </code>
      //     </pre>
      //   </div>
      //   <p>
      //     e.g. ~~~ let bar = 5; bar ^= 2; // 7 5:
      //     00000000000000000000000000000101 2: 00000000000000000000000000000010
      //     7: 00000000000000000000000000000111 ~~~
      //   </p>
      //   <div>
      //     <pre className="line-numbers">
      //       <code className="language-typescript">
      //         puzzles.push([Vchar, required]);
      //       </code>
      //     </pre>
      //   </div>
      //   <p>
      //     While the lowest order one bit of the charVector is not equal to zero
      //     an array containing the character vector and its corresponding lowest
      //     order one bit are pushed to the puzzles array. When the while loop
      //     ends the puzzles array is returned.
      //   </p>
      //   <p>
      //     If you defined a character vector as follows:{" "}
      //     <code>const cv = toVchar(['A', 'D', 'G', 'E']);</code>
      //     and then passed it as an argument to the puzzlesForBoardSet(cv)
      //     function the puzzles array would be returned as follows:{" "}
      //     <code>[ [ 89, 1 ], [ 89, 8 ], [ 89, 16 ], [ 89, 64 ] ]</code>
      //   </p>
      //   <p>
      //     Where r is the required vector and cv is the character vector: \[ \sum
      //     r = cv \]
      //   </p>
      //   <h2 id="toc_10">Puzzle Master Function</h2>
      //   <div>
      //     <pre className="line-numbers">
      //       <code className="language-typescript">
      //         const puzzleMaster = (dict: any, minLen: number, maxLets: number)
      //         =&gt; {"{"}
      //         {"\n"}
      //         {"  "}let wordSet = new Set();{"\n"}
      //         {"  "}let wordsByVector = new Map();{"\n"}
      //         {"  "}let boardSet = new Set();{"\n"}
      //         {"  "}let puzzles = [];{"\n"}
      //         {"  "}loop1: for (let i = 0; i &lt; dict.length; i++) {"{"}
      //         {"\n"}
      //         {"    "}let word = dict[i];{"\n"}
      //         {"    "}if (word.length &lt; minLen) {"{"}
      //         {"\n"}
      //         {"      "}continue;{"\n"}
      //         {"    "}
      //         {"}"}
      //         {"\n"}
      //         {"    "}let charArr = word.split('');{"\n"}
      //         {"    "}for (let j = 0; j &lt; charArr.length; j++) {"{"}
      //         {"\n"}
      //         {"      "}let c = charArr[j];{"\n"}
      //         {"      "}if ({"\n"}
      //         {"        "}c.charCodeAt(0) &lt; 'a'.charCodeAt(0) ||{"\n"}
      //         {"        "}c.charCodeAt(0) &gt; 'z'.charCodeAt(0){"\n"}
      //         {"      "}) {"{"}
      //         {"\n"}
      //         {"        "}continue loop1;{"\n"}
      //         {"      "}
      //         {"}"}
      //         {"\n"}
      //         {"    "}
      //         {"}"}
      //         {"\n"}
      //         {"    "}const vector = toVchar(charArr);{"\n"}
      //         {"    "}const distinctLetterCount = bitCount(vector);{"\n"}
      //         {"    "}if (distinctLetterCount &gt; maxLets) {"{"}
      //         {"\n"}
      //         {"      "}continue;{"\n"}
      //         {"    "}
      //         {"}"}
      //         {"\n"}
      //         {"    "}wordSet.add(word);{"\n"}
      //         {"    "}wordsByVector.set({"\n"}
      //         {"      "}vector,{"\n"}
      //         {"      "}wordsByVector.has(vector){"\n"}
      //         {"        "}? [...wordsByVector.get(vector), word]{"\n"}
      //         {"        "}: new Array(word){"\n"}
      //         {"    "});{"\n"}
      //         {"    "}if (distinctLetterCount === maxLets) {"{"}
      //         {"\n"}
      //         {"      "}if (!boardSet.has(vector) ? boardSet.add(vector) :
      //         false) {"{"}
      //         {"\n"}
      //         {"        "}puzzles.push(puzzlesForBoardSet(vector));{"\n"}
      //         {"      "}
      //         {"}"}
      //         {"\n"}
      //         {"    "}
      //         {"}"}
      //         {"\n"}
      //         {"  "}
      //         {"}"}
      //         {"\n"}
      //         {"  "}return {"{"} wordsByVector, puzzles {"}"};{"\n"}
      //         {"}"};
      //       </code>
      //     </pre>
      //   </div>
      //   <ul>
      //     <li>
      //       <p>
      //         The puzzleMaster function takes a dictionary of words, a minimum
      //         word length, and a maximum number of letters allowed in a puzzle
      //         as arguments.
      //       </p>
      //     </li>
      //     <li>
      //       <p>
      //         We start by initializing a has set called wrodSet to store the
      //         processed words, a hash Map called wordsByVector, a set called
      //         boardSet to store the set of all character vectors some
      //         permutation of which is a valid word with exactly 7 unique
      //         letters, and an array called puzzles to store all the potential
      //         puzzles.
      //       </p>
      //     </li>
      //   </ul>
      //   <h3 id="toc_11">Loop1:</h3>
      //   <ul>
      //     <li>
      //       checks each word in the dictionary and if its length is under the
      //       minimum word length it is ignored
      //     </li>
      //     <li>
      //       JS continue (Breaks one iteration on specific condition and
      //       continues with the next iteration in the loop);
      //     </li>
      //   </ul>
      //   <div>
      //     <pre className="line-numbers">
      //       <code className="language-typescript">
      //         for (let i = 0; i &lt; dict.length; i++) {"{"}
      //         {"\n"}
      //         {"    "}let word = dict[i];{"\n"}
      //         {"    "}if (word.length &lt; minLen) {"{"}
      //         {"\n"}
      //         {"      "}continue;{"\n"}
      //         {"    "}
      //         {"}"}
      //       </code>
      //     </pre>
      //   </div>
      //   <h3 id="toc_12">Loop2:</h3>
      //   <div>
      //     <pre className="line-numbers">
      //       <code className="language-typescript">
      //         {"  "}let charArr = (word).split('');{"\n"}
      //         {"  "}let c = charArr[j];{"\n"}
      //         {"      "}if ({"\n"}
      //         {"        "}c.charCodeAt(0) &lt; 'a'.charCodeAt(0) ||{"\n"}
      //         {"        "}c.charCodeAt(0) &gt; 'z'.charCodeAt(0){"\n"}
      //         {"      "}) {"{"}
      //         {"\n"}
      //         {"        "}continue loop1;{"\n"}
      //         {"      "}
      //         {"}"}
      //         {"\n"}
      //         {"    "}
      //         {"}"}
      //       </code>
      //     </pre>
      //   </div>
      //   <ul>
      //     <li>
      //       First take a word as string and converts it to an array of its
      //       characters. e.g.{" "}
      //       <code>'HELLO' =&gt; ['H', 'E', 'L', 'L', 'O']</code>
      //     </li>
      //     <li>
      //       The next piece checks the asccii value of each charachter in the
      //       array to make sure its in the latin alphabet if it fails the check
      //       ignore this word and the outer loop continues
      //     </li>
      //   </ul>
      //   <div>
      //     <pre className="line-numbers">
      //       <code className="language-typescript">
      //         const vector = toVChar(charArr);
      //       </code>
      //     </pre>
      //   </div>
      //   <p>
      //     The next piece uses the toVChar() function to convert each words
      //     character array into a character vector as defined above.
      //   </p>
      //   <p>
      //     If you were to initialize a vectorArray at the beginning of the
      //     function e.g. <code>let vectorArray = []</code>. And then push each of
      //     the results from toVChar() function to it{" "}
      //   </p>
      //   <p>e.g. </p>
      //   <div>
      //     <pre className="line-numbers">
      //       <code className="language-typescript">
      //         const vector = toVChar(charArr); vectorArray.push(vector)
      //       </code>
      //     </pre>
      //   </div>
      //   <p>
      //     <code>puzzleMaster(['ABCDEF', 'GAGGED', 'ADAGE'], 4, 7)</code> would
      //     return the vectorArray: <code>[ 63, 89, 89 ]</code>
      //   </p>
      //   <h4 id="toc_13">
      //     The next piece adds each word whose distinctLetterCount is less than
      //     the maximum number of letters allowed in a board to the wordSet:
      //   </h4>
      //   <p>
      //     e.g.{" "}
      //     <code>
      //       puzzleMaster(['ABCDEF', 'GAGGED', 'ADAGE'], 4, 7) =&gt; Set {"{"}{" "}
      //       'ABCDEF', 'GAGGED', 'ADAGE' {"}"}
      //     </code>
      //   </p>
      //   <div>
      //     <pre className="line-numbers">
      //       <code className="language-typescript">
      //         if (distinctLetterCount &gt; maxLets) {"{"}continue;{"}"}
      //         {"\n"}wordSet.add(word);
      //       </code>
      //     </pre>
      //   </div>
      //   <h4 id="toc_14">
      //     The next piece attempts to emulate javas computeIfAbsent() method for
      //     hash maps:
      //   </h4>
      //   <p>
      //     The computeIfAbsent(Key, Function) method of HashMap class is used to
      //     compute value for a given key using the given mapping function, if key
      //     is not already associated with a value (or is mapped to null) and
      //     enter that computed value in Hash map else null.
      //   </p>
      //   <p>
      //     Map.prototype.set(key, value) Sets the value for the key in the Map
      //     object and Returns the Map object.
      //   </p>
      //   <p>
      //     Map.prototype.has(key) Returns a boolean asserting whether a value has
      //     been associated to the key in the Map object or not.
      //   </p>
      //   <p>
      //     Map.prototype.get(key) Returns the value associated with a particular
      //     key.
      //   </p>
      //   <p>
      //     e.g. If you initialize a new Map =&gt;{" "}
      //     <code>let hashMap = new Map();</code> and then set the value for the
      //     key ‘A’ to be ‘X’ =&gt; <code>hashMap.set('A', 'X');</code>
      //     you can use the hashMap.has(key) method to set a value only on the
      //     condition that a value has been associated to the specified key in the
      //     Map object =&gt;{" "}
      //     <code>
      //       hashMap.set('A', hashMap.has('A')? hashMap.get('A') : 'B');
      //     </code>{" "}
      //     will return ‘X’ in our case.
      //   </p>
      //   <p>
      //     In the case that that no value has been associated to the key ‘A’, the
      //     value ‘B’ would be assigned.
      //   </p>
      //   <h4 id="toc_15">
      //     You then check the hash map for each character vector
      //   </h4>
      //   <p>
      //     You see if the key is already associated with a word. If it is not
      //     then you add the word as an array as the keys value. if another word
      //     has the same character vector it is added to the array.
      //   </p>
      //   <div>
      //     <pre className="line-numbers">
      //       <code className="language-typescript">
      //         {" "}
      //         wordsByVector.set({"\n"}
      //         {"      "}vector,{"\n"}
      //         {"      "}wordsByVector.has(vector){"\n"}
      //         {"        "}? [...wordsByVector.get(vector), word]{"\n"}
      //         {"        "}: new Array(word){"\n"}
      //         {"    "});
      //       </code>
      //     </pre>
      //   </div>
      //   <p>
      //     <code>puzzleMaster(['ABCDEF', 'GAGGED', 'ADAGE'], 4, 7)</code> would
      //     return wordsByVector:{" "}
      //     <code>
      //       Map {"{"} 63 =&gt; 'ABCDEF', 89 =&gt; ['GAGGED', 'ADAGE'] {"}"};
      //     </code>
      //   </p>
      //   <p>
      //     If you return the wordsByVector map for the dictionary.txt file it has
      //     size 48,906
      //   </p>
      //   <h4 id="toc_16">
      //     The next piece checks if the number of distinct letters is equal to
      //     the number of tiles allowed on the board. If the check returns true
      //     those character arrays are added to a set of potential character
      //     arrays for generating a board.
      //   </h4>
      //   <div>
      //     <pre className="line-numbers">
      //       <code className="language-typescript">
      //         if (distinctLetterCount === maxLets) {"{"}
      //         {"\n"}
      //         {"    "}if (!boardSet.has(vector) ? boardSet.add(vector) : false){" "}
      //         {"{"}
      //         {"\n"}
      //         {"        "}puzzles.push(puzzlesForBoardSet(vector));{"\n"}
      //         {"    "}
      //         {"}"}
      //         {"\n"}
      //         {"}"};
      //       </code>
      //     </pre>
      //   </div>
      //   <p>
      //     This method will add the character vector only if it is not present in
      //     the HashSet else the function will return False if the character
      //     vector is already present in the HashSet.
      //   </p>
      //   <div>
      //     <pre className="line-numbers">
      //       <code className="language-typescript">
      //         if (!boardSet.has(vector) ? boardSet.add(vector) : false);
      //       </code>
      //     </pre>
      //   </div>
      //   <p>
      //     If the above method returns true the puzzlesForBoardSet() function
      //     (defined above) is called with the vector as an argument and the
      //     result is added to the puzzles array.
      //   </p>
      //   <div>
      //     <pre className="line-numbers">
      //       <code className="language-typescript">
      //         puzzles.push(puzzlesForBoardSet(vector));
      //       </code>
      //     </pre>
      //   </div>
      //   <p>
      //     <code>puzzleMaster(['ABCDEFG', 'HIJKLMN'], 4, 7)</code> would return
      //     the puzzles array:
      //   </p>
      //   <div>
      //     <pre className="line-numbers">
      //       <code className="language-none">
      //         [{"\n"}
      //         {"    "}[{"\n"}
      //         {"        "}[ 127, 1 ],{"\n"}
      //         {"        "}[ 127, 2 ],{"\n"}
      //         {"        "}[ 127, 4 ],{"\n"}
      //         {"        "}[ 127, 8 ],{"\n"}
      //         {"        "}[ 127, 16 ],{"\n"}
      //         {"        "}[ 127, 32 ],{"\n"}
      //         {"        "}[ 127, 64 ]{"\n"}
      //         {"    "}],{"\n"}
      //         {"    "}[{"\n"}
      //         {"        "}[ 16256, 128 ],{"\n"}
      //         {"        "}[ 16256, 256 ],{"\n"}
      //         {"        "}[ 16256, 512 ],{"\n"}
      //         {"        "}[ 16256, 1024 ],{"\n"}
      //         {"        "}[ 16256, 2048 ],{"\n"}
      //         {"        "}[ 16256, 4096 ],{"\n"}
      //         {"        "}[ 16256, 8192 ]{"\n"}
      //         {"    "}]{"\n"}]
      //       </code>
      //     </pre>
      //   </div>
      //   <p>
      //     Puzzles is an array of arrays of sets of character vectors and their
      //     corresponding first set bit required letter that were checked to see
      //     if the number of distinct letters were equal to the number of tiles
      //     allowed on the board.
      //   </p>
      //   <div>
      //     <pre className="line-numbers">
      //       <code className="language-typescript">
      //         return {"{"} wordsByVector, puzzles {"}"};
      //       </code>
      //     </pre>
      //   </div>
      //   <p>
      //     Finally you return and object with the wordByVector hash map and the
      //     puzzles array for later use.
      //   </p>
      //   <h3 id="toc_17">Getting back to words:</h3>
      //   <h4 id="toc_18">
      //     Finding all words that contain the Required Vector and use no
      //     additional characters but those specified in the Optional Vector then
      //     adding those words to the given result set.
      //   </h4>
      //   <p>
      //     A one-hot is a group of bits among which the legal combinations of
      //     values are only those with a single high (1) bit and all the others
      //     low (0).
      //     <a href="https://en.wikipedia.org/wiki/One-hot">
      //       https://en.wikipedia.org/wiki/One-hot
      //     </a>
      //   </p>
      //   <div>
      //     <pre className="line-numbers">
      //       <code className="language-typescript">
      //         const addSolutions = ({"\n"}
      //         {"  "}result: any[],{"\n"}
      //         {"  "}Vreq: number,{"\n"}
      //         {"  "}Vopt: number,{"\n"}
      //         {"  "}hashmap: Map&lt;number, any[]&gt;{"\n"}) =&gt; {"{"}
      //         {"\n"}
      //         {"  "}if (Vopt === 0) {"{"}
      //         {"\n"}
      //         {"    "}result.push(hashmap.has(Vreq) ? hashmap.get(Vreq) : null);
      //         {"\n"}
      //         {"  "}
      //         {"}"} else {"{"}
      //         {"\n"}
      //         {"    "}let nextOneHot = firstSetBit(Vopt);{"\n"}
      //         {"    "}let expandedVreq = Vreq | nextOneHot;{"\n"}
      //         {"    "}let nextVopt = Vopt ^ nextOneHot;{"\n"}
      //         {"    "}addSolutions(result, Vreq, nextVopt, hashmap);{"\n"}
      //         {"    "}addSolutions(result, expandedVreq, nextVopt, hashmap);
      //         {"\n"}
      //         {"  "}
      //         {"}"}
      //         {"\n"}
      //         {"}"};
      //       </code>
      //     </pre>
      //   </div>
      //   <h4 id="toc_19">
      //     Finding all words that can be formed in the given puzzle.
      //   </h4>
      //   <div>
      //     <pre className="line-numbers">
      //       <code className="language-typescript">
      //         const solutionsTo = ({"\n"}
      //         {"  "}Vlets: number,{"\n"}
      //         {"  "}Vreq: number,{"\n"}
      //         {"  "}hashmap: Map&lt;number, any[]&gt;{"\n"}) =&gt; {"{"}
      //         {"\n"}
      //         {"  "}const solutions = []; //new Set();{"\n"}
      //         {"  "}const Vopt = Vlets &amp; ~Vreq;{"\n"}
      //         {"  "}addSolutions(solutions, Vreq, Vopt, hashmap);{"\n"}
      //         {"  "}return solutions;{"\n"}
      //         {"}"};
      //       </code>
      //     </pre>
      //   </div>
      //   <h4 id="toc_20">
      //     Create a has map of character vectors for the required letter:
      //   </h4>
      //   <div>
      //     <pre className="line-numbers">
      //       <code className="language-typescript">
      //         const createReqMap = () =&gt; {"{"}
      //         {"\n"}
      //         {"  "}let reqMap = new Map();{"\n"}
      //         {"  "}const alphabet = [{"\n"}
      //         {"    "}'A',{"\n"}
      //         {"    "}'B',{"\n"}
      //         {"    "}'C',{"\n"}
      //         {"    "}'D',{"\n"}
      //         {"    "}'E',{"\n"}
      //         {"    "}'F',{"\n"}
      //         {"    "}'G',{"\n"}
      //         {"    "}'H',{"\n"}
      //         {"    "}'I',{"\n"}
      //         {"    "}'J',{"\n"}
      //         {"    "}'K',{"\n"}
      //         {"    "}'L',{"\n"}
      //         {"    "}'M',{"\n"}
      //         {"    "}'N',{"\n"}
      //         {"    "}'O',{"\n"}
      //         {"    "}'P',{"\n"}
      //         {"    "}'Q',{"\n"}
      //         {"    "}'R',{"\n"}
      //         {"    "}'S',{"\n"}
      //         {"    "}'T',{"\n"}
      //         {"    "}'U',{"\n"}
      //         {"    "}'V',{"\n"}
      //         {"    "}'W',{"\n"}
      //         {"    "}'X',{"\n"}
      //         {"    "}'Y',{"\n"}
      //         {"    "}'Z'{"\n"}
      //         {"  "}];{"\n"}
      //         {"\n"}
      //         {"  "}for (let i = 0; i &lt; alphabet.length; i++) {"{"}
      //         {"\n"}
      //         {"    "}reqMap.set(toVchar(alphabet[i]), alphabet[i]);{"\n"}
      //         {"  "}
      //         {"}"}
      //         {"\n"}
      //         {"  "}return reqMap;{"\n"}
      //         {"}"};
      //       </code>
      //     </pre>
      //   </div>
      //   <div>
      //     <pre className="line-numbers">
      //       <code className="language-javascript">
      //         Map {"{"}
      //         {"\n"}
      //         {"  "}1 =&gt; 'A',{"\n"}
      //         {"  "}2 =&gt; 'B',{"\n"}
      //         {"  "}4 =&gt; 'C',{"\n"}
      //         {"  "}8 =&gt; 'D',{"\n"}
      //         {"  "}16 =&gt; 'E',{"\n"}
      //         {"  "}32 =&gt; 'F',{"\n"}
      //         {"  "}64 =&gt; 'G',{"\n"}
      //         {"  "}128 =&gt; 'H',{"\n"}
      //         {"  "}256 =&gt; 'I',{"\n"}
      //         {"  "}512 =&gt; 'J',{"\n"}
      //         {"  "}1024 =&gt; 'K',{"\n"}
      //         {"  "}2048 =&gt; 'L',{"\n"}
      //         {"  "}4096 =&gt; 'M',{"\n"}
      //         {"  "}8192 =&gt; 'N',{"\n"}
      //         {"  "}16384 =&gt; 'O',{"\n"}
      //         {"  "}32768 =&gt; 'P',{"\n"}
      //         {"  "}65536 =&gt; 'Q',{"\n"}
      //         {"  "}131072 =&gt; 'R',{"\n"}
      //         {"  "}262144 =&gt; 'S',{"\n"}
      //         {"  "}524288 =&gt; 'T',{"\n"}
      //         {"  "}1048576 =&gt; 'U',{"\n"}
      //         {"  "}2097152 =&gt; 'V',{"\n"}
      //         {"  "}4194304 =&gt; 'W',{"\n"}
      //         {"  "}8388608 =&gt; 'X',{"\n"}
      //         {"  "}16777216 =&gt; 'Y',{"\n"}
      //         {"  "}33554432 =&gt; 'Z'{"\n"}
      //         {"}"}
      //       </code>
      //     </pre>
      //   </div>
      //   <h4 id="toc_21">
      //     Create a has map of character vectors for the letter set
      //   </h4>
      //   <div>
      //     <pre className="line-numbers">
      //       <code className="language-typescript">
      //         const createLetterSetMap = (puzzles: any[], hashmap:
      //         Map&lt;number, any[]&gt;) =&gt; {"{"}
      //         {"\n"}
      //         {"  "}let letters = [];{"\n"}
      //         {"  "}let lettersMap = new Map();{"\n"}
      //         {"  "}for (let i = 0; i &lt; puzzles.length; i++) {"{"}
      //         {"\n"}
      //         {"    "}letters.push(puzzles[i][0][0]);{"\n"}
      //         {"    "}lettersMap.set({"\n"}
      //         {"      "}letters[i],{"\n"}
      //         {"      "}hashmap{"\n"}
      //         {"        "}.get(letters[i])[0]{"\n"}
      //         {"        "}.replace(/(.)(?=.*\u)/g, ''){"\n"}
      //         {"        "}.toUpperCase(){"\n"}
      //         {"    "});{"\n"}
      //         {"  "}
      //         {"}"}
      //         {"\n"}
      //         {"  "}return lettersMap;{"\n"}
      //         {"}"};
      //       </code>
      //     </pre>
      //   </div>
      //   <div>
      //     <pre className="line-numbers">
      //       <code className="language-javascript">
      //         Map {"{"}
      //         {"\n"}...{"\n"}
      //         {"  "}17301661 =&gt; 'YACHTED',{"\n"}
      //         {"  "}16786757 =&gt; 'YACKING',{"\n"}
      //         {"  "}17170521 =&gt; 'YRDAGES',{"\n"}
      //         {"  "}16925715 =&gt; 'YEARBOK',{"\n"}
      //         {"  "}16916817 =&gt; 'YEARING',{"\n"}
      //         {"  "}17694993 =&gt; 'YASTIER',{"\n"}
      //         {"  "}21776400 =&gt; 'YLOWEST',{"\n"}
      //         {"  "}16820560 =&gt; 'YELPING',{"\n"}
      //         {"  "}19136913 =&gt; 'YESHIVA',{"\n"}
      //         {"  "}16787800 =&gt; 'YELDING',{"\n"}
      //         {"  "}17188888 =&gt; 'YODLERS',{"\n"}
      //         {"  "}18497728 =&gt; 'YGHOURT',{"\n"}
      //         {"  "}18759744 =&gt; 'YOGURTS',{"\n"}
      //         {"  "}17981520 =&gt; 'YOUNGER',{"\n"}
      //         {"  "}18368672 =&gt; 'YOTHFUL',{"\n"}
      //         {"  "}17958164 =&gt; 'YUCKIER',{"\n"}
      //         {"  "}17835332 =&gt; 'YUCKING',{"\n"}
      //         {"  "}18352408 =&gt; 'YULTIDE',{"\n"}
      //         {"  "}18616592 =&gt; 'YUMIEST',{"\n"}
      //         {"  "}34359313 =&gt; 'ZEALOTS',{"\n"}
      //         {"  "}34883601 =&gt; 'ZEALOUS',{"\n"}
      //         {"  "}34349456 =&gt; 'ZENITHS',{"\n"}
      //         {"  "}50757776 =&gt; 'ZEPHYRS',{"\n"}...{"\n"}
      //         {"}"}
      //         {"\n"}
      //         {"\n"}
      //         {"}"}
      //       </code>
      //     </pre>
      //   </div>
      //   <h4 id="toc_22">
      //     Finally solve all the puzzles by looking up their vectors in the maps
      //   </h4>
      //   <div>
      //     <pre className="line-numbers">
      //       <code className="language-typescript">
      //         const solver = (puzzles: any, hashmap: any) =&gt; {"{"}
      //         {"\n"}
      //         {"  "}let solutions = [];{"\n"}
      //         {"  "}const reqMap = createReqMap();{"\n"}
      //         {"  "}const letterSetMap = createLetterSetMap(puzzles, hashmap);
      //         {"\n"}
      //         {"  "}for (let i = 0; i &lt; puzzles.length; i++) {"{"}
      //         {"\n"}
      //         {"    "}for (let j = 0; j &lt; 7; j++) {"{"}
      //         {"\n"}
      //         {"      "}let Vchar = puzzles[i][j][0];{"\n"}
      //         {"      "}let Vreq = puzzles[i][j][1];{"\n"}
      //         {"      "}solutions.push([{"\n"}
      //         {"        "}reqMap.get(Vreq),{"\n"}
      //         {"        "}letterSetMap.get(Vchar),{"\n"}
      //         {"        "}hashmap.get(Vchar),{"\n"}
      //         {"        "}solutionsTo(Vchar, Vreq, hashmap){"\n"}
      //         {"          "}.flat(Infinity){"\n"}
      //         {"          "}.filter(x =&gt; x){"\n"}
      //         {"      "}]);{"\n"}
      //         {"    "}
      //         {"}"}
      //         {"\n"}
      //         {"  "}
      //         {"}"}
      //         {"\n"}
      //         {"  "}return solutions;{"\n"}
      //         {"}"};
      //       </code>
      //     </pre>
      //   </div>
      //   <h3 id="toc_23">Notes</h3>
      //   <p>
      //     During preprocessing, any words with more than 7 unique characters are
      //     discarded since they violate the rules of the game. All character sets
      //     of size exactly 7 are flagged as being possible letter sets since they
      //     are panagrams. After this all valid puzzles can be generated by taking
      //     each valid letter set and using each letter as the required letter.
      //   </p>
      //   <p>
      //     the trick here speed wise is packing each character set into a single
      //     machine word as all these bitwise operations are essentially costless.
      //     <br />
      //     the puzzles array is every possible puzzle (the letter set and each
      //     letter in the letter set as the required letter)
      //   </p>
      //   <p>
      //     Then you lookup each word that includes the required letter and the
      //     any of the other letters….
      //   </p>
      //   <p>
      //     There are 26 possible choices for the center letter and \(25\choose
      //     6\) possible combinations for the other letters. This makes \(26 *{" "}
      //     {"{"}25\choose 6{"}"} = \frac{"{"}25!{"}"}
      //     {"{"}( 6! (25 - 6)! ){"}"} = 26 * 177,100 = 4,604,600\) possible
      //     honeycombs.
      //   </p>
      //   <p>
      //     For each subset S with n elements, its power set contains 128 elements
      //     \(|P(S)| = 2^7 = 128\)
      //   </p>
      //   <p>
      //     For each subset s use the precomputed tables to look up all words with
      //     character set S U {"{"}r{"}"}, where r is the required letter. Taking
      //     the union of these 128 sets completes the algorithm.{" "}
      //   </p>
      //   <h4 id="toc_24">WordSet</h4>
      //   <p>
      //     All words that might appear in a puzzle. This includes all words
      //     composed only of characters in the alphabet (i.e., the 26 lowercase
      //     Latin characters), with length at least 4 and with at most 7 distinct
      //     letters.
      //   </p>
      //   <h4 id="toc_25">wordsByVector</h4>
      //   <p>
      //     A hash map containing the set of all valid words as values, keyed to
      //     their character vectors. Two words will be in the same bucket if and
      //     only if they contain the same sets of characters, not considering
      //     multiplicity. The union of all the values equals the full word set.
      //   </p>
      //   <h4 id="toc_26">Puzzles</h4>
      //   <p>
      //     The set of all potential puzzles. This is trivially formed by choosing
      //     each potential required letter for each potential letter set.
      //   </p>
      //   <div>
      //     <pre className="line-numbers">
      //       <code className="language-none">
      //         Asccii Table{"\n"}Char Octal Dec Hex{"\n"}A{"     "}101{"    "}65
      //         {"  "}41{"\n"}B{"     "}102{"    "}66{"  "}42{"\n"}C{"     "}103
      //         {"    "}67{"  "}43{"\n"}D{"     "}104{"    "}68{"  "}44{"\n"}E
      //         {"     "}105{"    "}69{"  "}45{"\n"}F{"     "}106{"    "}70{"  "}
      //         46{"\n"}G{"     "}107{"    "}71{"  "}47{"\n"}H{"     "}110{"    "}
      //         72{"  "}48{"\n"}I{"     "}111{"    "}73{"  "}49{"\n"}J{"     "}112
      //         {"    "}74{"  "}4a{"\n"}K{"     "}113{"    "}75{"  "}4b{"\n"}L
      //         {"     "}114{"    "}76{"  "}4c{"\n"}M{"     "}115{"    "}77{"  "}
      //         4d{"\n"}N{"     "}116{"    "}78{"  "}4e{"\n"}O{"     "}117{"    "}
      //         79{"  "}4f{"\n"}P{"     "}120{"    "}80{"  "}50{"\n"}Q{"     "}121
      //         {"    "}81{"  "}51{"\n"}R{"     "}122{"    "}82{"  "}52{"\n"}S
      //         {"     "}123{"    "}83{"  "}53{"\n"}T{"     "}124{"    "}84{"  "}
      //         54{"\n"}U{"     "}125{"    "}85{"  "}55{"\n"}V{"     "}126{"    "}
      //         86{"  "}56{"\n"}W{"     "}127{"    "}87{"  "}57{"\n"}X{"     "}130
      //         {"    "}88{"  "}58{"\n"}Y{"     "}131{"    "}89{"  "}59{"\n"}Z
      //         {"     "}132{"    "}90{"  "}5a
      //       </code>
      //     </pre>
      //   </div>
      //   <h2 id="toc_27">Example output</h2>
      //   <div>
      //     <pre className="line-numbers">
      //       <code className="language-javascript">
      //         [{"\n"}
      //         {"    "}'N',{"\n"}
      //         {"    "}'ABETING',{"\n"}
      //         {"    "}[ 'abetting', 'abnegating', 'battening', 'beating' ],
      //         {"\n"}
      //         {"    "}[{"\n"}
      //         {"      "}'tint',{"      "}'gigging',{"  "}'ginning',{"    "}
      //         'inning',{"    "}'igniting',{"\n"}
      //         {"      "}'ting',{"      "}'tinging',{"  "}'tinning',{"    "}
      //         'tinting',{"   "}'entente',{"\n"}
      //         {"      "}'teen',{"      "}'tenet',{"    "}'tent',{"       "}
      //         'nine',{"      "}'intent',{"\n"}
      //         {"      "}'nineteen',{"  "}'nite',{"     "}'tine',{"       "}
      //         'gene',{"      "}'gent',{"\n"}
      //         {"      "}'egging',{"    "}'engine',{"   "}'geeing',{"     "}
      //         'genie',{"     "}'genii',{"\n"}
      //         {"      "}'getting',{"   "}'ignite',{"   "}'netting',{"    "}
      //         'teeing',{"    "}'tenting',{"\n"}
      //         {"      "}'tieing',{"    "}'tinge',{"    "}'tingeing',{"   "}
      //         'binging',{"   "}'binning',{"\n"}
      //         {"      "}'gibing',{"    "}'biting',{"   "}'been',{"       "}
      //         'bent',{"      "}'bitten',{"\n"}
      //         {"      "}'begging',{"   "}'begin',{"    "}'beginning',{"  "}
      //         'being',{"     "}'benign',{"\n"}
      //         {"      "}'binge',{"     "}'bingeing', 'ebbing',{"     "}
      //         'begetting', 'betting',{"\n"}
      //         {"      "}'gibbeting', 'anti',{"     "}'attain',{"     "}'taint',
      //         {"     "}'tannin',{"\n"}
      //         {"      "}'titan',{"     "}'gang',{"     "}'gnat',{"       "}
      //         'tang',{"      "}'again',{"\n"}
      //         {"      "}'aging',{"     "}'angina',{"   "}'gagging',{"    "}
      //         'gaging',{"    "}'gain',{"\n"}
      //         {"      "}'gaining',{"   "}'ganging',{"  "}'nagging',{"    "}
      //         'agitating', 'attaining',{"\n"}
      //         {"      "}'gating',{"    "}'giant',{"    "}'initiating',
      //         'tagging',{"   "}'tainting',{"\n"}
      //         {"      "}'tanning',{"   "}'tatting',{"  "}'ante',{"       "}
      //         'antenna',{"   "}'antennae',{"\n"}
      //         {"      "}'eaten',{"     "}'neat',{"     "}'tenant',{"     "}
      //         'inane',{"     "}'initiate',{"\n"}
      //         {"      "}'innate',{"    "}'engage',{"   "}'agent',{"      "}
      //         'gannet',{"    "}'negate',{"\n"}
      //         {"      "}'tangent',{"   "}'teenage',{"  "}'ageing',{"     "}
      //         'engaging',{"  "}'anteing',{"\n"}
      //         {"      "}'antigen',{"   "}'eating',{"   "}'gentian',{"    "}
      //         'negating',{"  "}'tenanting',{"\n"}
      //         {"      "}... 26 more items{"\n"}
      //         {"    "}]{"\n"}
      //         {"  "}],{"\n"}
      //         {"  "}[{"\n"}
      //         {"    "}'S',{"\n"}
      //         {"    "}'ABETORS',{"\n"}
      //         {"    "}[ 'abettors', 'boaster', 'boasters', 'boaters' ],{"\n"}
      //         {"    "}[{"\n"}
      //         {"      "}'soot',{"     "}'sots',{"      "}'toots',{"    "}'toss',
      //         {"    "}'tost',{"\n"}
      //         {"      "}'tots',{"     "}'roost',{"     "}'roosts',{"   "}
      //         'roots',{"   "}'rotors',{"\n"}
      //         {"      "}'rots',{"     "}'sort',{"      "}'sorts',{"    "}'tors',
      //         {"    "}'torso',{"\n"}
      //         {"      "}'torsos',{"   "}'torts',{"     "}'trots',{"    "}'sees',
      //         {"    "}'sets',{"\n"}
      //         {"      "}'settee',{"   "}'settees',{"   "}'tees',{"     "}'test',
      //         {"    "}'testes',{"\n"}
      //         {"      "}'tests',{"    "}'errs',{"      "}'seer',{"     "}
      //         'seers',{"   "}'sere',{"\n"}
      //         {"      "}'serer',{"    "}'ester',{"     "}'esters',{"   "}
      //         'reset',{"   "}'resets',{"\n"}
      //         {"      "}'rest',{"     "}'rests',{"     "}'serest',{"   "}
      //         'setter',{"  "}'setters',{"\n"}
      //         {"      "}'steer',{"    "}'steers',{"    "}'street',{"   "}
      //         'streets', 'stress',{"\n"}
      //         {"      "}'stresses', 'teeters',{"   "}'terse',{"    "}'terser',
      //         {"  "}'tersest',{"\n"}
      //         {"      "}'tester',{"   "}'testers',{"   "}'trees',{"    "}
      //         'tress',{"   "}'tresses',{"\n"}
      //         {"      "}'toes',{"     "}'tosses',{"    "}'totes',{"    "}
      //         'errors',{"  "}'ores',{"\n"}
      //         {"      "}'roes',{"     "}'rose',{"      "}'roses',{"    "}'sore',
      //         {"    "}'sorer',{"\n"}
      //         {"      "}'sores',{"    "}'otters',{"    "}'resort',{"   "}
      //         'resorts', 'restore',{"\n"}
      //         {"      "}'restorer', 'restorers', 'restores', 'retorts',
      //         'rooster',{"\n"}
      //         {"      "}'roosters', 'rosette',{"   "}'rosettes', 'roster',{"  "}
      //         'rosters',{"\n"}
      //         {"      "}'sorest',{"   "}'sorter',{"    "}'sorters',{"  "}
      //         'stereo',{"  "}'stereos',{"\n"}
      //         {"      "}'store',{"    "}'stores',{"    "}'terrors',{"  "}
      //         'tortes',{"  "}'totters',{"\n"}
      //         {"      "}'trotters', 'bobs',{"      "}'boobs',{"    "}'boos',
      //         {"    "}'boss',{"\n"}
      //         {"      "}'sobs',{"     "}'boost',{"     "}'boosts',{"   "}
      //         'boots',{"   "}'boors',{"\n"}
      //         {"      "}... 234 more items{"\n"}
      //         {"    "}]{"\n"}
      //         {"  "}],{"\n"}
      //         {"  "}[{"\n"}
      //         {"    "}'R',{"\n"}
      //         {"    "}'ABHORED',{"\n"}
      //         {"    "}[ 'abhorred', 'harbored', 'headboard' ],{"\n"}
      //         {"    "}[{"\n"}
      //         {"      "}'horror',{"  "}'error',{"     "}'here',{"       "}
      //         'hero',{"    "}'door',{"\n"}
      //         {"      "}'odor',{"    "}'rood',{"      "}'deer',{"       "}
      //         'erred',{"   "}'redder',{"\n"}
      //         {"      "}'reed',{"    "}'dodder',{"    "}'doddered',{"   "}
      //         'doer',{"    "}'erode',{"\n"}
      //         {"      "}'eroded',{"  "}'odder',{"     "}'order',{"      "}
      //         'ordered', 'redo',{"\n"}
      //         {"      "}'reorder', 'reordered', 'rode',{"       "}'rodeo',
      //         {"   "}'herd',{"\n"}
      //         {"      "}'herded',{"  "}'horde',{"     "}'horded',{"     "}
      //         'boor',{"    "}'beer',{"\n"}
      //         {"      "}'bore',{"    "}'borer',{"     "}'robber',{"     "}
      //         'robe',{"    "}'herb',{"\n"}
      //         {"      "}'brood',{"   "}'bedder',{"    "}'bred',{"       "}
      //         'breed',{"   "}'breeder',{"\n"}
      //         {"      "}'border',{"  "}'bordered',{"  "}'bored',{"      "}
      //         'brooded', 'brooder',{"\n"}
      //         {"      "}'robbed',{"  "}'robed',{"     "}'roar',{"       "}
      //         'hoorah',{"  "}'area',{"\n"}
      //         {"      "}'rare',{"    "}'rarer',{"     "}'rear',{"       "}
      //         'hare',{"    "}'hear',{"\n"}
      //         {"      "}'hearer',{"  "}'rhea',{"      "}'radar',{"      "}
      //         'ardor',{"   "}'road',{"\n"}
      //         {"      "}'hard',{"    "}'hoard',{"     "}'adder',{"      "}
      //         'dare',{"    "}'dared',{"\n"}
      //         {"      "}'deader',{"  "}'dear',{"      "}'dearer',{"     "}
      //         'dread',{"   "}'dreaded',{"\n"}
      //         {"      "}'rared',{"   "}'read',{"      "}'reader',{"     "}
      //         'reared',{"  "}'reread',{"\n"}
      //         {"      "}'adore',{"   "}'adored',{"    "}'oared',{"      "}
      //         'roared',{"  "}'adhere',{"\n"}
      //         {"      "}'adhered', 'harder',{"    "}'hardheaded', 'hared',
      //         {"   "}'header',{"\n"}
      //         {"      "}'heard',{"   "}'redhead',{"   "}'redheaded',{"  "}
      //         'hoarded', 'hoarder',{"\n"}
      //         {"      "}'barb',{"    "}'arbor',{"     "}'boar',{"       "}
      //         'abhor',{"   "}'harbor',{"\n"}
      //         {"      "}'barber',{"  "}'bare',{"      "}'barer',{"      "}
      //         'bear',{"    "}'bearer',{"\n"}
      //         {"      "}... 31 more items{"\n"}
      //         {"    "}]{"\n"}
      //         {"  "}],{"\n"}
      //         {"    "}[{"\n"}
      //         {"      "}'sits',{"      "}'tits',{"     "}'ills',{"     "}'sill',
      //         {"      "}'sills',{"\n"}
      //         {"      "}'lilts',{"     "}'list',{"     "}'lists',{"    "}'silt',
      //         {"      "}'silts',{"\n"}
      //         {"      "}'slit',{"      "}'slits',{"    "}'still',{"    "}
      //         'stills',{"    "}'stilt',{"\n"}
      //         {"      "}'stilts',{"    "}'tills',{"    "}'tilts',{"    "}'sees',
      //         {"      "}'sets',{"\n"}
      //         {"      "}'settee',{"    "}'settees',{"  "}'tees',{"     "}'test',
      //         {"      "}'testes',{"\n"}
      //         {"      "}'tests',{"     "}'eels',{"     "}'ells',{"     "}'else',
      //         {"      "}'lees',{"\n"}
      //         {"      "}'less',{"      "}'lessee',{"   "}'lessees',{"  "}'sell',
      //         {"      "}'sells',{"\n"}
      //         {"      "}'lest',{"      "}'lets',{"     "}'settle',{"   "}
      //         'settles',{"   "}'sleet',{"\n"}
      //         {"      "}'sleets',{"    "}'steel',{"    "}'steels',{"   "}
      //         'tells',{"     "}'sises',{"\n"}
      //         {"      "}'sissies',{"   "}'sissiest', 'site',{"     "}'sites',
      //         {"     "}'sties',{"\n"}
      //         {"      "}'testiest',{"  "}'testis',{"   "}'ties',{"     "}'isle',
      //         {"      "}'isles',{"\n"}
      //         {"      "}'leis',{"      "}'lies',{"     "}'lilies',{"   "}
      //         'lisle',{"     "}'sillies',{"\n"}
      //         {"      "}'elites',{"    "}'elitist',{"  "}'elitists', 'islet',
      //         {"     "}'islets',{"\n"}
      //         {"      "}'listless',{"  "}'littlest', 'silliest', 'sleetiest',
      //         'sliest',{"\n"}
      //         {"      "}'steeliest', 'stile',{"    "}'stiles',{"   "}'stillest',
      //         {"  "}'tiles',{"\n"}
      //         {"      "}'titles',{"    "}'tittles',{"  "}'bibs',{"     "}'ibis',
      //         {"      "}'bits',{"\n"}
      //         {"      "}'titbits',{"   "}'bills',{"    "}'bliss',{"    "}'bees',
      //         {"      "}'ebbs',{"\n"}
      //         {"      "}'beets',{"     "}'beset',{"    "}'besets',{"   "}'best',
      //         {"      "}'bests',{"\n"}
      //         {"      "}'bets',{"      "}'belles',{"   "}'bells',{"    "}
      //         'bless',{"     "}'blesses',{"\n"}
      //         {"      "}'beetles',{"   "}'belts',{"    "}'blest',{"    "}
      //         'ibises',{"    "}'bites',{"\n"}
      //         {"      "}... 205 more items{"\n"}
      //         {"    "}]{"\n"}
      //         {"  "}],{"\n"}
      //         {"  "}[{"\n"}
      //         {"    "}'A',{"\n"}
      //         {"    "}'ABJURED',{"\n"}
      //         {"    "}[ 'abjured' ],{"\n"}
      //         {"    "}[{"\n"}
      //         {"      "}'aura',{"     "}'ajar',{"     "}'raja',{"    "}'area',
      //         {"     "}'rare',{"\n"}
      //         {"      "}'rarer',{"    "}'rear',{"     "}'aurae',{"   "}'urea',
      //         {"     "}'radar',{"\n"}
      //         {"      "}'added',{"    "}'dead',{"     "}'adder',{"   "}'dare',
      //         {"     "}'dared',{"\n"}
      //         {"      "}'deader',{"   "}'dear',{"     "}'dearer',{"  "}'dread',
      //         {"    "}'dreaded',{"\n"}
      //         {"      "}'rared',{"    "}'read',{"     "}'reader',{"  "}'reared',
      //         {"   "}'reread',{"\n"}
      //         {"      "}'jade',{"     "}'jaded',{"    "}'jarred',{"  "}'adjure',
      //         {"   "}'adjured',{"\n"}
      //         {"      "}'barb',{"     "}'babe',{"     "}'beau',{"    "}'barber',
      //         {"   "}'bare',{"\n"}
      //         {"      "}'barer',{"    "}'bear',{"     "}'bearer',{"  "}'bureau',
      //         {"   "}'jabber',{"\n"}
      //         {"      "}'jabberer', 'abjure',{"   "}'baud',{"    "}'daub',
      //         {"     "}'bard',{"\n"}
      //         {"      "}'brad',{"     "}'drab',{"     "}'abed',{"    "}'baaed',
      //         {"    "}'bade',{"\n"}
      //         {"      "}'bead',{"     "}'beaded',{"   "}'dabbed',{"  "}'daubed',
      //         {"   "}'abrade',{"\n"}
      //         {"      "}'abraded',{"  "}'badder',{"   "}'barbed',{"  "}
      //         'barbered', 'bared',{"\n"}
      //         {"      "}'barred',{"   "}'beard',{"    "}'bearded', 'bread',
      //         {"    "}'breaded',{"\n"}
      //         {"      "}'debar',{"    "}'debarred', 'drabber', 'dauber',{"   "}
      //         'jabbed',{"\n"}
      //         {"      "}'jabbered', 'abjured'{"\n"}
      //         {"    "}]{"\n"}
      //         {"  "}],{"\n"}
      //         {"  "}... 54633 more items{"\n"}]
      //       </code>
      //     </pre>
      //   </div>
      // </div>
      <div>
        <h1>Coming Soon...</h1>
      </div>
    );
  }
}
