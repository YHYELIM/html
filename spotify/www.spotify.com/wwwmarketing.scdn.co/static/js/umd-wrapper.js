// Copyright 2017 Google Inc. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


/* global define, module */


import {
    getFirstConsistentlyInteractive
} from './index.js';


const moduleExport = {
    getFirstConsistentlyInteractive
};


if (typeof module != 'undefined' && module.exports) {
    module.exports = moduleExport;
} else if (typeof define === 'function' && define.amd) {
    define('ttiPolyfill', [], () => moduleExport);
} else {
    window.ttiPolyfill = moduleExport;
}