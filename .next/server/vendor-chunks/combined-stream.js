"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/combined-stream";
exports.ids = ["vendor-chunks/combined-stream"];
exports.modules = {

/***/ "(ssr)/./node_modules/combined-stream/lib/combined_stream.js":
/*!*************************************************************!*\
  !*** ./node_modules/combined-stream/lib/combined_stream.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar util = __webpack_require__(/*! util */ \"util\");\nvar Stream = (__webpack_require__(/*! stream */ \"stream\").Stream);\nvar DelayedStream = __webpack_require__(/*! delayed-stream */ \"(ssr)/./node_modules/delayed-stream/lib/delayed_stream.js\");\nmodule.exports = CombinedStream;\nfunction CombinedStream() {\n    this.writable = false;\n    this.readable = true;\n    this.dataSize = 0;\n    this.maxDataSize = 2 * 1024 * 1024;\n    this.pauseStreams = true;\n    this._released = false;\n    this._streams = [];\n    this._currentStream = null;\n    this._insideLoop = false;\n    this._pendingNext = false;\n}\nutil.inherits(CombinedStream, Stream);\nCombinedStream.create = function(options) {\n    var combinedStream = new this();\n    options = options || {};\n    for(var option in options){\n        combinedStream[option] = options[option];\n    }\n    return combinedStream;\n};\nCombinedStream.isStreamLike = function(stream) {\n    return typeof stream !== \"function\" && typeof stream !== \"string\" && typeof stream !== \"boolean\" && typeof stream !== \"number\" && !Buffer.isBuffer(stream);\n};\nCombinedStream.prototype.append = function(stream) {\n    var isStreamLike = CombinedStream.isStreamLike(stream);\n    if (isStreamLike) {\n        if (!(stream instanceof DelayedStream)) {\n            var newStream = DelayedStream.create(stream, {\n                maxDataSize: Infinity,\n                pauseStream: this.pauseStreams\n            });\n            stream.on(\"data\", this._checkDataSize.bind(this));\n            stream = newStream;\n        }\n        this._handleErrors(stream);\n        if (this.pauseStreams) {\n            stream.pause();\n        }\n    }\n    this._streams.push(stream);\n    return this;\n};\nCombinedStream.prototype.pipe = function(dest, options) {\n    Stream.prototype.pipe.call(this, dest, options);\n    this.resume();\n    return dest;\n};\nCombinedStream.prototype._getNext = function() {\n    this._currentStream = null;\n    if (this._insideLoop) {\n        this._pendingNext = true;\n        return; // defer call\n    }\n    this._insideLoop = true;\n    try {\n        do {\n            this._pendingNext = false;\n            this._realGetNext();\n        }while (this._pendingNext);\n    } finally{\n        this._insideLoop = false;\n    }\n};\nCombinedStream.prototype._realGetNext = function() {\n    var stream = this._streams.shift();\n    if (typeof stream == \"undefined\") {\n        this.end();\n        return;\n    }\n    if (typeof stream !== \"function\") {\n        this._pipeNext(stream);\n        return;\n    }\n    var getStream = stream;\n    getStream((function(stream) {\n        var isStreamLike = CombinedStream.isStreamLike(stream);\n        if (isStreamLike) {\n            stream.on(\"data\", this._checkDataSize.bind(this));\n            this._handleErrors(stream);\n        }\n        this._pipeNext(stream);\n    }).bind(this));\n};\nCombinedStream.prototype._pipeNext = function(stream) {\n    this._currentStream = stream;\n    var isStreamLike = CombinedStream.isStreamLike(stream);\n    if (isStreamLike) {\n        stream.on(\"end\", this._getNext.bind(this));\n        stream.pipe(this, {\n            end: false\n        });\n        return;\n    }\n    var value = stream;\n    this.write(value);\n    this._getNext();\n};\nCombinedStream.prototype._handleErrors = function(stream) {\n    var self = this;\n    stream.on(\"error\", function(err) {\n        self._emitError(err);\n    });\n};\nCombinedStream.prototype.write = function(data) {\n    this.emit(\"data\", data);\n};\nCombinedStream.prototype.pause = function() {\n    if (!this.pauseStreams) {\n        return;\n    }\n    if (this.pauseStreams && this._currentStream && typeof this._currentStream.pause == \"function\") this._currentStream.pause();\n    this.emit(\"pause\");\n};\nCombinedStream.prototype.resume = function() {\n    if (!this._released) {\n        this._released = true;\n        this.writable = true;\n        this._getNext();\n    }\n    if (this.pauseStreams && this._currentStream && typeof this._currentStream.resume == \"function\") this._currentStream.resume();\n    this.emit(\"resume\");\n};\nCombinedStream.prototype.end = function() {\n    this._reset();\n    this.emit(\"end\");\n};\nCombinedStream.prototype.destroy = function() {\n    this._reset();\n    this.emit(\"close\");\n};\nCombinedStream.prototype._reset = function() {\n    this.writable = false;\n    this._streams = [];\n    this._currentStream = null;\n};\nCombinedStream.prototype._checkDataSize = function() {\n    this._updateDataSize();\n    if (this.dataSize <= this.maxDataSize) {\n        return;\n    }\n    var message = \"DelayedStream#maxDataSize of \" + this.maxDataSize + \" bytes exceeded.\";\n    this._emitError(new Error(message));\n};\nCombinedStream.prototype._updateDataSize = function() {\n    this.dataSize = 0;\n    var self = this;\n    this._streams.forEach(function(stream) {\n        if (!stream.dataSize) {\n            return;\n        }\n        self.dataSize += stream.dataSize;\n    });\n    if (this._currentStream && this._currentStream.dataSize) {\n        this.dataSize += this._currentStream.dataSize;\n    }\n};\nCombinedStream.prototype._emitError = function(err) {\n    this._reset();\n    this.emit(\"error\", err);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvY29tYmluZWQtc3RyZWFtL2xpYi9jb21iaW5lZF9zdHJlYW0uanMiLCJtYXBwaW5ncyI6IjtBQUFBLElBQUlBLE9BQU9DLG1CQUFPQSxDQUFDO0FBQ25CLElBQUlDLFNBQVNELG9EQUF3QjtBQUNyQyxJQUFJRSxnQkFBZ0JGLG1CQUFPQSxDQUFDO0FBRTVCRyxPQUFPQyxPQUFPLEdBQUdDO0FBQ2pCLFNBQVNBO0lBQ1AsSUFBSSxDQUFDQyxRQUFRLEdBQUc7SUFDaEIsSUFBSSxDQUFDQyxRQUFRLEdBQUc7SUFDaEIsSUFBSSxDQUFDQyxRQUFRLEdBQUc7SUFDaEIsSUFBSSxDQUFDQyxXQUFXLEdBQUcsSUFBSSxPQUFPO0lBQzlCLElBQUksQ0FBQ0MsWUFBWSxHQUFHO0lBRXBCLElBQUksQ0FBQ0MsU0FBUyxHQUFHO0lBQ2pCLElBQUksQ0FBQ0MsUUFBUSxHQUFHLEVBQUU7SUFDbEIsSUFBSSxDQUFDQyxjQUFjLEdBQUc7SUFDdEIsSUFBSSxDQUFDQyxXQUFXLEdBQUc7SUFDbkIsSUFBSSxDQUFDQyxZQUFZLEdBQUc7QUFDdEI7QUFDQWhCLEtBQUtpQixRQUFRLENBQUNYLGdCQUFnQko7QUFFOUJJLGVBQWVZLE1BQU0sR0FBRyxTQUFTQyxPQUFPO0lBQ3RDLElBQUlDLGlCQUFpQixJQUFJLElBQUk7SUFFN0JELFVBQVVBLFdBQVcsQ0FBQztJQUN0QixJQUFLLElBQUlFLFVBQVVGLFFBQVM7UUFDMUJDLGNBQWMsQ0FBQ0MsT0FBTyxHQUFHRixPQUFPLENBQUNFLE9BQU87SUFDMUM7SUFFQSxPQUFPRDtBQUNUO0FBRUFkLGVBQWVnQixZQUFZLEdBQUcsU0FBU0MsTUFBTTtJQUMzQyxPQUFPLE9BQVFBLFdBQVcsY0FDcEIsT0FBT0EsV0FBVyxZQUNsQixPQUFPQSxXQUFXLGFBQ2xCLE9BQU9BLFdBQVcsWUFDbEIsQ0FBQ0MsT0FBT0MsUUFBUSxDQUFDRjtBQUN6QjtBQUVBakIsZUFBZW9CLFNBQVMsQ0FBQ0MsTUFBTSxHQUFHLFNB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O0lBQ2hDLElBQUksQ0FBQy9DLFFBQVEsR0FBRztJQUNoQixJQUFJLENBQUNNLFFBQVEsR0FBRyxFQUFFO0lBQ2xCLElBQUksQ0FBQ0MsY0FBYyxHQUFHO0FBQ3hCO0FBRUFSLGVBQWVvQixTQUFTLENBQUNNLGNBQWMsR0FBRztJQUN4QyxJQUFJLENBQUN3QixlQUFlO0lBQ3BCLElBQUksSUFBSSxDQUFDL0MsUUFBUSxJQUFJLElBQUksQ0FBQ0MsV0FBVyxFQUFFO1FBQ3JDO0lBQ0Y7SUFFQSxJQUFJK0MsVUFDRixrQ0FBa0MsSUFBSSxDQUFDL0MsV0FBVyxHQUFHO0lBQ3ZELElBQUksQ0FBQ3lDLFVBQVUsQ0FBQyxJQUFJTyxNQUFNRDtBQUM1QjtBQUVBbkQsZUFBZW9CLFNBQVMsQ0FBQzhCLGVBQWUsR0FBRztJQUN6QyxJQUFJLENBQUMvQyxRQUFRLEdBQUc7SUFFaEIsSUFBSXdDLE9BQU8sSUFBSTtJQUNmLElBQUksQ0FBQ3BDLFFBQVEsQ0FBQzhDLE9BQU8sQ0FBQyxTQUFTcEMsTUFBTTtRQUNuQyxJQUFJLENBQUNBLE9BQU9kLFFBQVEsRUFBRTtZQUNwQjtRQUNGO1FBRUF3QyxLQUFLeEMsUUFBUSxJQUFJYyxPQUFPZCxRQUFRO0lBQ2xDO0lBRUEsSUFBSSxJQUFJLENBQUNLLGNBQWMsSUFBSSxJQUFJLENBQUNBLGNBQWMsQ0FBQ0wsUUFBUSxFQUFFO1FBQ3ZELElBQUksQ0FBQ0EsUUFBUSxJQUFJLElBQUksQ0FBQ0ssY0FBYyxDQUFDTCxRQUFRO0lBQy9DO0FBQ0Y7QUFFQUgsZUFBZW9CLFNBQVMsQ0FBQ3lCLFVBQVUsR0FBRyxTQUFTRCxHQUFHO0lBQ2hELElBQUksQ0FBQ0ksTUFBTTtJQUNYLElBQUksQ0FBQ0QsSUFBSSxDQUFDLFNBQVNIO0FBQ3JCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLWF1dGgvLi9ub2RlX21vZHVsZXMvY29tYmluZWQtc3RyZWFtL2xpYi9jb21iaW5lZF9zdHJlYW0uanM/NmFhNSJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgdXRpbCA9IHJlcXVpcmUoJ3V0aWwnKTtcbnZhciBTdHJlYW0gPSByZXF1aXJlKCdzdHJlYW0nKS5TdHJlYW07XG52YXIgRGVsYXllZFN0cmVhbSA9IHJlcXVpcmUoJ2RlbGF5ZWQtc3RyZWFtJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tYmluZWRTdHJlYW07XG5mdW5jdGlvbiBDb21iaW5lZFN0cmVhbSgpIHtcbiAgdGhpcy53cml0YWJsZSA9IGZhbHNlO1xuICB0aGlzLnJlYWRhYmxlID0gdHJ1ZTtcbiAgdGhpcy5kYXRhU2l6ZSA9IDA7XG4gIHRoaXMubWF4RGF0YVNpemUgPSAyICogMTAyNCAqIDEwMjQ7XG4gIHRoaXMucGF1c2VTdHJlYW1zID0gdHJ1ZTtcblxuICB0aGlzLl9yZWxlYXNlZCA9IGZhbHNlO1xuICB0aGlzLl9zdHJlYW1zID0gW107XG4gIHRoaXMuX2N1cnJlbnRTdHJlYW0gPSBudWxsO1xuICB0aGlzLl9pbnNpZGVMb29wID0gZmFsc2U7XG4gIHRoaXMuX3BlbmRpbmdOZXh0ID0gZmFsc2U7XG59XG51dGlsLmluaGVyaXRzKENvbWJpbmVkU3RyZWFtLCBTdHJlYW0pO1xuXG5Db21iaW5lZFN0cmVhbS5jcmVhdGUgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gIHZhciBjb21iaW5lZFN0cmVhbSA9IG5ldyB0aGlzKCk7XG5cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGZvciAodmFyIG9wdGlvbiBpbiBvcHRpb25zKSB7XG4gICAgY29tYmluZWRTdHJlYW1bb3B0aW9uXSA9IG9wdGlvbnNbb3B0aW9uXTtcbiAgfVxuXG4gIHJldHVybiBjb21iaW5lZFN0cmVhbTtcbn07XG5cbkNvbWJpbmVkU3RyZWFtLmlzU3RyZWFtTGlrZSA9IGZ1bmN0aW9uKHN0cmVhbSkge1xuICByZXR1cm4gKHR5cGVvZiBzdHJlYW0gIT09ICdmdW5jdGlvbicpXG4gICAgJiYgKHR5cGVvZiBzdHJlYW0gIT09ICdzdHJpbmcnKVxuICAgICYmICh0eXBlb2Ygc3RyZWFtICE9PSAnYm9vbGVhbicpXG4gICAgJiYgKHR5cGVvZiBzdHJlYW0gIT09ICdudW1iZXInKVxuICAgICYmICghQnVmZmVyLmlzQnVmZmVyKHN0cmVhbSkpO1xufTtcblxuQ29tYmluZWRTdHJlYW0ucHJvdG90eXBlLmFwcGVuZCA9IGZ1bmN0aW9uKHN0cmVhbSkge1xuICB2YXIgaXNTdHJlYW1MaWtlID0gQ29tYmluZWRTdHJlYW0uaXNTdHJlYW1MaWtlKHN0cmVhbSk7XG5cbiAgaWYgKGlzU3RyZWFtTGlrZSkge1xuICAgIGlmICghKHN0cmVhbSBpbnN0YW5jZW9mIERlbGF5ZWRTdHJlYW0pKSB7XG4gICAgICB2YXIgbmV3U3RyZWFtID0gRGVsYXllZFN0cmVhbS5jcmVhdGUoc3RyZWFtLCB7XG4gICAgICAgIG1heERhdGFTaXplOiBJbmZpbml0eSxcbiAgICAgICAgcGF1c2VTdHJlYW06IHRoaXMucGF1c2VTdHJlYW1zLFxuICAgICAgfSk7XG4gICAgICBzdHJlYW0ub24oJ2RhdGEnLCB0aGlzLl9jaGVja0RhdGFTaXplLmJpbmQodGhpcykpO1xuICAgICAgc3RyZWFtID0gbmV3U3RyZWFtO1xuICAgIH1cblxuICAgIHRoaXMuX2hhbmRsZUVycm9ycyhzdHJlYW0pO1xuXG4gICAgaWYgKHRoaXMucGF1c2VTdHJlYW1zKSB7XG4gICAgICBzdHJlYW0ucGF1c2UoKTtcbiAgICB9XG4gIH1cblxuICB0aGlzLl9zdHJlYW1zLnB1c2goc3RyZWFtKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5Db21iaW5lZFN0cmVhbS5wcm90b3R5cGUucGlwZSA9IGZ1bmN0aW9uKGRlc3QsIG9wdGlvbnMpIHtcbiAgU3RyZWFtLnByb3RvdHlwZS5waXBlLmNhbGwodGhpcywgZGVzdCwgb3B0aW9ucyk7XG4gIHRoaXMucmVzdW1lKCk7XG4gIHJldHVybiBkZXN0O1xufTtcblxuQ29tYmluZWRTdHJlYW0ucHJvdG90eXBlLl9nZXROZXh0ID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuX2N1cnJlbnRTdHJlYW0gPSBudWxsO1xuXG4gIGlmICh0aGlzLl9pbnNpZGVMb29wKSB7XG4gICAgdGhpcy5fcGVuZGluZ05leHQgPSB0cnVlO1xuICAgIHJldHVybjsgLy8gZGVmZXIgY2FsbFxuICB9XG5cbiAgdGhpcy5faW5zaWRlTG9vcCA9IHRydWU7XG4gIHRyeSB7XG4gICAgZG8ge1xuICAgICAgdGhpcy5fcGVuZGluZ05leHQgPSBmYWxzZTtcbiAgICAgIHRoaXMuX3JlYWxHZXROZXh0KCk7XG4gICAgfSB3aGlsZSAodGhpcy5fcGVuZGluZ05leHQpO1xuICB9IGZpbmFsbHkge1xuICAgIHRoaXMuX2luc2lkZUxvb3AgPSBmYWxzZTtcbiAgfVxufTtcblxuQ29tYmluZWRTdHJlYW0ucHJvdG90eXBlLl9yZWFsR2V0TmV4dCA9IGZ1bmN0aW9uKCkge1xuICB2YXIgc3RyZWFtID0gdGhpcy5fc3RyZWFtcy5zaGlmdCgpO1xuXG5cbiAgaWYgKHR5cGVvZiBzdHJlYW0gPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB0aGlzLmVuZCgpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmICh0eXBlb2Ygc3RyZWFtICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhpcy5fcGlwZU5leHQoc3RyZWFtKTtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgZ2V0U3RyZWFtID0gc3RyZWFtO1xuICBnZXRTdHJlYW0oZnVuY3Rpb24oc3RyZWFtKSB7XG4gICAgdmFyIGlzU3RyZWFtTGlrZSA9IENvbWJpbmVkU3RyZWFtLmlzU3RyZWFtTGlrZShzdHJlYW0pO1xuICAgIGlmIChpc1N0cmVhbUxpa2UpIHtcbiAgICAgIHN0cmVhbS5vbignZGF0YScsIHRoaXMuX2NoZWNrRGF0YVNpemUuYmluZCh0aGlzKSk7XG4gICAgICB0aGlzLl9oYW5kbGVFcnJvcnMoc3RyZWFtKTtcbiAgICB9XG5cbiAgICB0aGlzLl9waXBlTmV4dChzdHJlYW0pO1xuICB9LmJpbmQodGhpcykpO1xufTtcblxuQ29tYmluZWRTdHJlYW0ucHJvdG90eXBlLl9waXBlTmV4dCA9IGZ1bmN0aW9uKHN0cmVhbSkge1xuICB0aGlzLl9jdXJyZW50U3RyZWFtID0gc3RyZWFtO1xuXG4gIHZhciBpc1N0cmVhbUxpa2UgPSBDb21iaW5lZFN0cmVhbS5pc1N0cmVhbUxpa2Uoc3RyZWFtKTtcbiAgaWYgKGlzU3RyZWFtTGlrZSkge1xuICAgIHN0cmVhbS5vbignZW5kJywgdGhpcy5fZ2V0TmV4dC5iaW5kKHRoaXMpKTtcbiAgICBzdHJlYW0ucGlwZSh0aGlzLCB7ZW5kOiBmYWxzZX0pO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciB2YWx1ZSA9IHN0cmVhbTtcbiAgdGhpcy53cml0ZSh2YWx1ZSk7XG4gIHRoaXMuX2dldE5leHQoKTtcbn07XG5cbkNvbWJpbmVkU3RyZWFtLnByb3RvdHlwZS5faGFuZGxlRXJyb3JzID0gZnVuY3Rpb24oc3RyZWFtKSB7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgc3RyZWFtLm9uKCdlcnJvcicsIGZ1bmN0aW9uKGVycikge1xuICAgIHNlbGYuX2VtaXRFcnJvcihlcnIpO1xuICB9KTtcbn07XG5cbkNvbWJpbmVkU3RyZWFtLnByb3RvdHlwZS53cml0ZSA9IGZ1bmN0aW9uKGRhdGEpIHtcbiAgdGhpcy5lbWl0KCdkYXRhJywgZGF0YSk7XG59O1xuXG5Db21iaW5lZFN0cmVhbS5wcm90b3R5cGUucGF1c2UgPSBmdW5jdGlvbigpIHtcbiAgaWYgKCF0aGlzLnBhdXNlU3RyZWFtcykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmKHRoaXMucGF1c2VTdHJlYW1zICYmIHRoaXMuX2N1cnJlbnRTdHJlYW0gJiYgdHlwZW9mKHRoaXMuX2N1cnJlbnRTdHJlYW0ucGF1c2UpID09ICdmdW5jdGlvbicpIHRoaXMuX2N1cnJlbnRTdHJlYW0ucGF1c2UoKTtcbiAgdGhpcy5lbWl0KCdwYXVzZScpO1xufTtcblxuQ29tYmluZWRTdHJlYW0ucHJvdG90eXBlLnJlc3VtZSA9IGZ1bmN0aW9uKCkge1xuICBpZiAoIXRoaXMuX3JlbGVhc2VkKSB7XG4gICAgdGhpcy5fcmVsZWFzZWQgPSB0cnVlO1xuICAgIHRoaXMud3JpdGFibGUgPSB0cnVlO1xuICAgIHRoaXMuX2dldE5leHQoKTtcbiAgfVxuXG4gIGlmKHRoaXMucGF1c2VTdHJlYW1zICYmIHRoaXMuX2N1cnJlbnRTdHJlYW0gJiYgdHlwZW9mKHRoaXMuX2N1cnJlbnRTdHJlYW0ucmVzdW1lKSA9PSAnZnVuY3Rpb24nKSB0aGlzLl9jdXJyZW50U3RyZWFtLnJlc3VtZSgpO1xuICB0aGlzLmVtaXQoJ3Jlc3VtZScpO1xufTtcblxuQ29tYmluZWRTdHJlYW0ucHJvdG90eXBlLmVuZCA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLl9yZXNldCgpO1xuICB0aGlzLmVtaXQoJ2VuZCcpO1xufTtcblxuQ29tYmluZWRTdHJlYW0ucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5fcmVzZXQoKTtcbiAgdGhpcy5lbWl0KCdjbG9zZScpO1xufTtcblxuQ29tYmluZWRTdHJlYW0ucHJvdG90eXBlLl9yZXNldCA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLndyaXRhYmxlID0gZmFsc2U7XG4gIHRoaXMuX3N0cmVhbXMgPSBbXTtcbiAgdGhpcy5fY3VycmVudFN0cmVhbSA9IG51bGw7XG59O1xuXG5Db21iaW5lZFN0cmVhbS5wcm90b3R5cGUuX2NoZWNrRGF0YVNpemUgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5fdXBkYXRlRGF0YVNpemUoKTtcbiAgaWYgKHRoaXMuZGF0YVNpemUgPD0gdGhpcy5tYXhEYXRhU2l6ZSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBtZXNzYWdlID1cbiAgICAnRGVsYXllZFN0cmVhbSNtYXhEYXRhU2l6ZSBvZiAnICsgdGhpcy5tYXhEYXRhU2l6ZSArICcgYnl0ZXMgZXhjZWVkZWQuJztcbiAgdGhpcy5fZW1pdEVycm9yKG5ldyBFcnJvcihtZXNzYWdlKSk7XG59O1xuXG5Db21iaW5lZFN0cmVhbS5wcm90b3R5cGUuX3VwZGF0ZURhdGFTaXplID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuZGF0YVNpemUgPSAwO1xuXG4gIHZhciBzZWxmID0gdGhpcztcbiAgdGhpcy5fc3RyZWFtcy5mb3JFYWNoKGZ1bmN0aW9uKHN0cmVhbSkge1xuICAgIGlmICghc3RyZWFtLmRhdGFTaXplKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc2VsZi5kYXRhU2l6ZSArPSBzdHJlYW0uZGF0YVNpemU7XG4gIH0pO1xuXG4gIGlmICh0aGlzLl9jdXJyZW50U3RyZWFtICYmIHRoaXMuX2N1cnJlbnRTdHJlYW0uZGF0YVNpemUpIHtcbiAgICB0aGlzLmRhdGFTaXplICs9IHRoaXMuX2N1cnJlbnRTdHJlYW0uZGF0YVNpemU7XG4gIH1cbn07XG5cbkNvbWJpbmVkU3RyZWFtLnByb3RvdHlwZS5fZW1pdEVycm9yID0gZnVuY3Rpb24oZXJyKSB7XG4gIHRoaXMuX3Jlc2V0KCk7XG4gIHRoaXMuZW1pdCgnZXJyb3InLCBlcnIpO1xufTtcbiJdLCJuYW1lcyI6WyJ1dGlsIiwicmVxdWlyZSIsIlN0cmVhbSIsIkRlbGF5ZWRTdHJlYW0iLCJtb2R1bGUiLCJleHBvcnRzIiwiQ29tYmluZWRTdHJlYW0iLCJ3cml0YWJsZSIsInJlYWRhYmxlIiwiZGF0YVNpemUiLCJtYXhEYXRhU2l6ZSIsInBhdXNlU3RyZWFtcyIsIl9yZWxlYXNlZCIsIl9zdHJlYW1zIiwiX2N1cnJlbnRTdHJlYW0iLCJfaW5zaWRlTG9vcCIsIl9wZW5kaW5nTmV4dCIsImluaGVyaXRzIiwiY3JlYXRlIiwib3B0aW9ucyIsImNvbWJpbmVkU3RyZWFtIiwib3B0aW9uIiwiaXNTdHJlYW1MaWtlIiwic3RyZWFtIiwiQnVmZmVyIiwiaXNCdWZmZXIiLCJwcm90b3R5cGUiLCJhcHBlbmQiLCJuZXdTdHJlYW0iLCJJbmZpbml0eSIsInBhdXNlU3RyZWFtIiwib24iLCJfY2hlY2tEYXRhU2l6ZSIsImJpbmQiLCJfaGFuZGxlRXJyb3JzIiwicGF1c2UiLCJwdXNoIiwicGlwZSIsImRlc3QiLCJjYWxsIiwicmVzdW1lIiwiX2dldE5leHQiLCJfcmVhbEdldE5leHQiLCJzaGlmdCIsImVuZCIsIl9waXBlTmV4dCIsImdldFN0cmVhbSIsInZhbHVlIiwid3JpdGUiLCJzZWxmIiwiZXJyIiwiX2VtaXRFcnJvciIsImRhdGEiLCJlbWl0IiwiX3Jlc2V0IiwiZGVzdHJveSIsIl91cGRhdGVEYXRhU2l6ZSIsIm1lc3NhZ2UiLCJFcnJvciIsImZvckVhY2giXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/combined-stream/lib/combined_stream.js\n");

/***/ })

};
;