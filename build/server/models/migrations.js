'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.run = undefined;

var _map = require('babel-runtime/core-js/map');

var _map2 = _interopRequireDefault(_map);

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _set = require('babel-runtime/core-js/set');

var _set2 = _interopRequireDefault(_set);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

// For a given access, retrieves the custom fields and gives them to the
// changeFn, which must return a new version of the custom fields (deleted
// fields won't be kept in database). After which they're saved (it's not
// changeFn's responsability to call save/updateAttributes).
var updateCustomFields = function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(access, changeFn) {
        var originalCustomFields, newCustomFields, pairToString, buildSig, needsUpdate, originalSignature, newSignature;
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        originalCustomFields = JSON.parse(access.customFields || '[]');

                        // "deep copy", lol

                        newCustomFields = JSON.parse(access.customFields || '[]');

                        newCustomFields = changeFn(newCustomFields);

                        pairToString = function pairToString(pair) {
                            return pair.name + ':' + pair.value;
                        };

                        buildSig = function buildSig(fields) {
                            return fields.map(pairToString).join('/');
                        };

                        needsUpdate = false;

                        if (originalCustomFields.length !== newCustomFields.length) {
                            // If one has more fields than the other, update.
                            needsUpdate = true;
                        } else {
                            // If the name:value/name2:value2 strings are different, update.
                            originalSignature = buildSig(originalCustomFields);
                            newSignature = buildSig(newCustomFields);

                            needsUpdate = originalSignature !== newSignature;
                        }

                        if (!needsUpdate) {
                            _context.next = 11;
                            break;
                        }

                        log.debug('updating custom fields for ' + access.id);
                        _context.next = 11;
                        return access.updateAttributes({
                            customFields: (0, _stringify2.default)(newCustomFields)
                        });

                    case 11:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function updateCustomFields(_x, _x2) {
        return _ref.apply(this, arguments);
    };
}();

var run = exports.run = function () {
    var _ref10 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee10() {
        var _iteratorNormalCompletion14, _didIteratorError14, _iteratorError14, _iterator14, _step14, m;

        return _regenerator2.default.wrap(function _callee10$(_context10) {
            while (1) {
                switch (_context10.prev = _context10.next) {
                    case 0:
                        _iteratorNormalCompletion14 = true;
                        _didIteratorError14 = false;
                        _iteratorError14 = undefined;
                        _context10.prev = 3;
                        _iterator14 = (0, _getIterator3.default)(migrations);

                    case 5:
                        if (_iteratorNormalCompletion14 = (_step14 = _iterator14.next()).done) {
                            _context10.next = 12;
                            break;
                        }

                        m = _step14.value;
                        _context10.next = 9;
                        return m();

                    case 9:
                        _iteratorNormalCompletion14 = true;
                        _context10.next = 5;
                        break;

                    case 12:
                        _context10.next = 18;
                        break;

                    case 14:
                        _context10.prev = 14;
                        _context10.t0 = _context10['catch'](3);
                        _didIteratorError14 = true;
                        _iteratorError14 = _context10.t0;

                    case 18:
                        _context10.prev = 18;
                        _context10.prev = 19;

                        if (!_iteratorNormalCompletion14 && _iterator14.return) {
                            _iterator14.return();
                        }

                    case 21:
                        _context10.prev = 21;

                        if (!_didIteratorError14) {
                            _context10.next = 24;
                            break;
                        }

                        throw _iteratorError14;

                    case 24:
                        return _context10.finish(21);

                    case 25:
                        return _context10.finish(18);

                    case 26:
                    case 'end':
                        return _context10.stop();
                }
            }
        }, _callee10, this, [[3, 14, 18, 26], [19,, 21, 25]]);
    }));

    return function run() {
        return _ref10.apply(this, arguments);
    };
}();

var _access = require('./access');

var _access2 = _interopRequireDefault(_access);

var _account = require('./account');

var _account2 = _interopRequireDefault(_account);

var _alert = require('./alert');

var _alert2 = _interopRequireDefault(_alert);

var _bank = require('./bank');

var _bank2 = _interopRequireDefault(_bank);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

var _operation = require('./operation');

var _operation2 = _interopRequireDefault(_operation);

var _category = require('./category');

var _category2 = _interopRequireDefault(_category);

var _operationtype = require('./operationtype');

var _operationtype2 = _interopRequireDefault(_operationtype);

var _helpers = require('../helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var log = (0, _helpers.makeLogger)('models/migrations');

function reduceOperationsDate(oldest, operation) {
    return Math.min(oldest, +new Date(operation.dateImport));
}

var migrations = [function () {
    var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
        var weboobLog, weboobInstalled;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        log.info('Removing weboob-log and weboob-installed from the db...');
                        _context2.next = 3;
                        return _config2.default.byName('weboob-log');

                    case 3:
                        weboobLog = _context2.sent;

                        if (!weboobLog) {
                            _context2.next = 8;
                            break;
                        }

                        log.info('\tDestroying Config[weboob-log].');
                        _context2.next = 8;
                        return weboobLog.destroy();

                    case 8:
                        _context2.next = 10;
                        return _config2.default.byName('weboob-installed');

                    case 10:
                        weboobInstalled = _context2.sent;

                        if (!weboobInstalled) {
                            _context2.next = 15;
                            break;
                        }

                        log.info('\tDestroying Config[weboob-installed].');
                        _context2.next = 15;
                        return weboobInstalled.destroy();

                    case 15:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, this);
    }));

    function m1() {
        return _ref2.apply(this, arguments);
    }

    return m1;
}(), function () {
    var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
        var ops, categories, categorySet, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, c, catNum, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, op, needsSave;

        return _regenerator2.default.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        log.info('Checking that operations with categories are consistent...');
                        _context3.next = 3;
                        return _operation2.default.all();

                    case 3:
                        ops = _context3.sent;
                        _context3.next = 6;
                        return _category2.default.all();

                    case 6:
                        categories = _context3.sent;
                        categorySet = new _set2.default();
                        _iteratorNormalCompletion = true;
                        _didIteratorError = false;
                        _iteratorError = undefined;
                        _context3.prev = 11;

                        for (_iterator = (0, _getIterator3.default)(categories); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                            c = _step.value;

                            categorySet.add(c.id);
                        }

                        _context3.next = 19;
                        break;

                    case 15:
                        _context3.prev = 15;
                        _context3.t0 = _context3['catch'](11);
                        _didIteratorError = true;
                        _iteratorError = _context3.t0;

                    case 19:
                        _context3.prev = 19;
                        _context3.prev = 20;

                        if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                        }

                    case 22:
                        _context3.prev = 22;

                        if (!_didIteratorError) {
                            _context3.next = 25;
                            break;
                        }

                        throw _iteratorError;

                    case 25:
                        return _context3.finish(22);

                    case 26:
                        return _context3.finish(19);

                    case 27:
                        catNum = 0;
                        _iteratorNormalCompletion2 = true;
                        _didIteratorError2 = false;
                        _iteratorError2 = undefined;
                        _context3.prev = 31;
                        _iterator2 = (0, _getIterator3.default)(ops);

                    case 33:
                        if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
                            _context3.next = 43;
                            break;
                        }

                        op = _step2.value;
                        needsSave = false;


                        if (typeof op.categoryId !== 'undefined' && !categorySet.has(op.categoryId)) {
                            needsSave = true;
                            delete op.categoryId;
                            catNum += 1;
                        }

                        if (!needsSave) {
                            _context3.next = 40;
                            break;
                        }

                        _context3.next = 40;
                        return op.save();

                    case 40:
                        _iteratorNormalCompletion2 = true;
                        _context3.next = 33;
                        break;

                    case 43:
                        _context3.next = 49;
                        break;

                    case 45:
                        _context3.prev = 45;
                        _context3.t1 = _context3['catch'](31);
                        _didIteratorError2 = true;
                        _iteratorError2 = _context3.t1;

                    case 49:
                        _context3.prev = 49;
                        _context3.prev = 50;

                        if (!_iteratorNormalCompletion2 && _iterator2.return) {
                            _iterator2.return();
                        }

                    case 52:
                        _context3.prev = 52;

                        if (!_didIteratorError2) {
                            _context3.next = 55;
                            break;
                        }

                        throw _iteratorError2;

                    case 55:
                        return _context3.finish(52);

                    case 56:
                        return _context3.finish(49);

                    case 57:

                        if (catNum) log.info('\t' + catNum + ' operations had an inconsistent category.');

                    case 58:
                    case 'end':
                        return _context3.stop();
                }
            }
        }, _callee3, this, [[11, 15, 19, 27], [20,, 22, 26], [31, 45, 49, 57], [50,, 52, 56]]);
    }));

    function m2() {
        return _ref3.apply(this, arguments);
    }

    return m2;
}(), function () {
    var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4() {
        var ops, num, _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, o;

        return _regenerator2.default.wrap(function _callee4$(_context4) {
            while (1) {
                switch (_context4.prev = _context4.next) {
                    case 0:
                        log.info('Replacing NONE_CATEGORY_ID by undefined...');
                        _context4.next = 3;
                        return _operation2.default.all();

                    case 3:
                        ops = _context4.sent;
                        num = 0;
                        _iteratorNormalCompletion3 = true;
                        _didIteratorError3 = false;
                        _iteratorError3 = undefined;
                        _context4.prev = 8;
                        _iterator3 = (0, _getIterator3.default)(ops);

                    case 10:
                        if (_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done) {
                            _context4.next = 20;
                            break;
                        }

                        o = _step3.value;

                        if (!(typeof o.categoryId !== 'undefined' && o.categoryId.toString() === '-1')) {
                            _context4.next = 17;
                            break;
                        }

                        delete o.categoryId;
                        _context4.next = 16;
                        return o.save();

                    case 16:
                        num += 1;

                    case 17:
                        _iteratorNormalCompletion3 = true;
                        _context4.next = 10;
                        break;

                    case 20:
                        _context4.next = 26;
                        break;

                    case 22:
                        _context4.prev = 22;
                        _context4.t0 = _context4['catch'](8);
                        _didIteratorError3 = true;
                        _iteratorError3 = _context4.t0;

                    case 26:
                        _context4.prev = 26;
                        _context4.prev = 27;

                        if (!_iteratorNormalCompletion3 && _iterator3.return) {
                            _iterator3.return();
                        }

                    case 29:
                        _context4.prev = 29;

                        if (!_didIteratorError3) {
                            _context4.next = 32;
                            break;
                        }

                        throw _iteratorError3;

                    case 32:
                        return _context4.finish(29);

                    case 33:
                        return _context4.finish(26);

                    case 34:

                        if (num) log.info('\t' + num + ' operations had -1 as categoryId.');

                    case 35:
                    case 'end':
                        return _context4.stop();
                }
            }
        }, _callee4, this, [[8, 22, 26, 34], [27,, 29, 33]]);
    }));

    function m3() {
        return _ref4.apply(this, arguments);
    }

    return m3;
}(), function () {
    var _ref5 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5() {
        var accesses, num, updateFields, _iteratorNormalCompletion4, _didIteratorError4, _iteratorError4, _iterator4, _step4, a, website;

        return _regenerator2.default.wrap(function _callee5$(_context5) {
            while (1) {
                switch (_context5.prev = _context5.next) {
                    case 0:
                        log.info('Migrating websites to the customFields format...');

                        _context5.next = 3;
                        return _access2.default.all();

                    case 3:
                        accesses = _context5.sent;
                        num = 0;

                        updateFields = function updateFields(website) {
                            return function (customFields) {
                                if (customFields.filter(function (field) {
                                    return field.name === 'website';
                                }).length) return customFields;

                                customFields.push({
                                    name: 'website',
                                    value: website
                                });

                                return customFields;
                            };
                        };

                        _iteratorNormalCompletion4 = true;
                        _didIteratorError4 = false;
                        _iteratorError4 = undefined;
                        _context5.prev = 9;
                        _iterator4 = (0, _getIterator3.default)(accesses);

                    case 11:
                        if (_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done) {
                            _context5.next = 25;
                            break;
                        }

                        a = _step4.value;

                        if (!(typeof a.website === 'undefined' || !a.website.length)) {
                            _context5.next = 15;
                            break;
                        }

                        return _context5.abrupt('continue', 22);

                    case 15:
                        website = a.website;

                        delete a.website;

                        _context5.next = 19;
                        return updateCustomFields(a, updateFields(website));

                    case 19:
                        _context5.next = 21;
                        return a.save();

                    case 21:
                        num += 1;

                    case 22:
                        _iteratorNormalCompletion4 = true;
                        _context5.next = 11;
                        break;

                    case 25:
                        _context5.next = 31;
                        break;

                    case 27:
                        _context5.prev = 27;
                        _context5.t0 = _context5['catch'](9);
                        _didIteratorError4 = true;
                        _iteratorError4 = _context5.t0;

                    case 31:
                        _context5.prev = 31;
                        _context5.prev = 32;

                        if (!_iteratorNormalCompletion4 && _iterator4.return) {
                            _iterator4.return();
                        }

                    case 34:
                        _context5.prev = 34;

                        if (!_didIteratorError4) {
                            _context5.next = 37;
                            break;
                        }

                        throw _iteratorError4;

                    case 37:
                        return _context5.finish(34);

                    case 38:
                        return _context5.finish(31);

                    case 39:

                        if (num) log.info('\t' + num + ' accesses updated to the customFields format.');

                    case 40:
                    case 'end':
                        return _context5.stop();
                }
            }
        }, _callee5, this, [[9, 27, 31, 39], [32,, 34, 38]]);
    }));

    function m4() {
        return _ref5.apply(this, arguments);
    }

    return m4;
}(), function () {
    var _ref6 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee6() {
        var accesses, updateFieldsBnp, updateFieldsHelloBank, _iteratorNormalCompletion5, _didIteratorError5, _iteratorError5, _iterator5, _step5, a, accounts, _iteratorNormalCompletion7, _didIteratorError7, _iteratorError7, _iterator7, _step7, acc, banks, _iteratorNormalCompletion6, _didIteratorError6, _iteratorError6, _iterator6, _step6, b;

        return _regenerator2.default.wrap(function _callee6$(_context6) {
            while (1) {
                switch (_context6.prev = _context6.next) {
                    case 0:
                        log.info('Migrating HelloBank users to BNP and BNP users to the new website format.');
                        _context6.next = 3;
                        return _access2.default.all();

                    case 3:
                        accesses = _context6.sent;

                        updateFieldsBnp = function updateFieldsBnp(customFields) {
                            if (customFields.filter(function (field) {
                                return field.name === 'website';
                            }).length) return customFields;

                            customFields.push({
                                name: 'website',
                                value: 'pp'
                            });

                            log.info('\tBNP access updated to the new website format.');
                            return customFields;
                        };

                        updateFieldsHelloBank = function updateFieldsHelloBank(customFields) {
                            customFields.push({
                                name: 'website',
                                value: 'hbank'
                            });
                            return customFields;
                        };

                        _iteratorNormalCompletion5 = true;
                        _didIteratorError5 = false;
                        _iteratorError5 = undefined;
                        _context6.prev = 9;
                        _iterator5 = (0, _getIterator3.default)(accesses);

                    case 11:
                        if (_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done) {
                            _context6.next = 56;
                            break;
                        }

                        a = _step5.value;

                        if (!(a.bank === 'bnporc')) {
                            _context6.next = 17;
                            break;
                        }

                        _context6.next = 16;
                        return updateCustomFields(a, updateFieldsBnp);

                    case 16:
                        return _context6.abrupt('continue', 53);

                    case 17:
                        if (!(a.bank === 'hellobank')) {
                            _context6.next = 53;
                            break;
                        }

                        _context6.next = 20;
                        return updateCustomFields(a, updateFieldsHelloBank);

                    case 20:
                        _context6.next = 22;
                        return _account2.default.byBank({ uuid: 'hellobank' });

                    case 22:
                        accounts = _context6.sent;
                        _iteratorNormalCompletion7 = true;
                        _didIteratorError7 = false;
                        _iteratorError7 = undefined;
                        _context6.prev = 26;
                        _iterator7 = (0, _getIterator3.default)(accounts);

                    case 28:
                        if (_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done) {
                            _context6.next = 35;
                            break;
                        }

                        acc = _step7.value;
                        _context6.next = 32;
                        return acc.updateAttributes({ bank: 'bnporc' });

                    case 32:
                        _iteratorNormalCompletion7 = true;
                        _context6.next = 28;
                        break;

                    case 35:
                        _context6.next = 41;
                        break;

                    case 37:
                        _context6.prev = 37;
                        _context6.t0 = _context6['catch'](26);
                        _didIteratorError7 = true;
                        _iteratorError7 = _context6.t0;

                    case 41:
                        _context6.prev = 41;
                        _context6.prev = 42;

                        if (!_iteratorNormalCompletion7 && _iterator7.return) {
                            _iterator7.return();
                        }

                    case 44:
                        _context6.prev = 44;

                        if (!_didIteratorError7) {
                            _context6.next = 47;
                            break;
                        }

                        throw _iteratorError7;

                    case 47:
                        return _context6.finish(44);

                    case 48:
                        return _context6.finish(41);

                    case 49:
                        _context6.next = 51;
                        return a.updateAttributes({ bank: 'bnporc' });

                    case 51:
                        log.info('\tHelloBank access updated to use BNP\'s backend.');
                        return _context6.abrupt('continue', 53);

                    case 53:
                        _iteratorNormalCompletion5 = true;
                        _context6.next = 11;
                        break;

                    case 56:
                        _context6.next = 62;
                        break;

                    case 58:
                        _context6.prev = 58;
                        _context6.t1 = _context6['catch'](9);
                        _didIteratorError5 = true;
                        _iteratorError5 = _context6.t1;

                    case 62:
                        _context6.prev = 62;
                        _context6.prev = 63;

                        if (!_iteratorNormalCompletion5 && _iterator5.return) {
                            _iterator5.return();
                        }

                    case 65:
                        _context6.prev = 65;

                        if (!_didIteratorError5) {
                            _context6.next = 68;
                            break;
                        }

                        throw _iteratorError5;

                    case 68:
                        return _context6.finish(65);

                    case 69:
                        return _context6.finish(62);

                    case 70:
                        _context6.next = 72;
                        return _bank2.default.all();

                    case 72:
                        banks = _context6.sent;
                        _iteratorNormalCompletion6 = true;
                        _didIteratorError6 = false;
                        _iteratorError6 = undefined;
                        _context6.prev = 76;
                        _iterator6 = (0, _getIterator3.default)(banks);

                    case 78:
                        if (_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done) {
                            _context6.next = 89;
                            break;
                        }

                        b = _step6.value;

                        if (!(b.uuid !== 'hellobank')) {
                            _context6.next = 82;
                            break;
                        }

                        return _context6.abrupt('continue', 86);

                    case 82:
                        log.info('\tRemoving HelloBank from the list of banks...');
                        _context6.next = 85;
                        return b.destroy();

                    case 85:
                        log.info('\tdone!');

                    case 86:
                        _iteratorNormalCompletion6 = true;
                        _context6.next = 78;
                        break;

                    case 89:
                        _context6.next = 95;
                        break;

                    case 91:
                        _context6.prev = 91;
                        _context6.t2 = _context6['catch'](76);
                        _didIteratorError6 = true;
                        _iteratorError6 = _context6.t2;

                    case 95:
                        _context6.prev = 95;
                        _context6.prev = 96;

                        if (!_iteratorNormalCompletion6 && _iterator6.return) {
                            _iterator6.return();
                        }

                    case 98:
                        _context6.prev = 98;

                        if (!_didIteratorError6) {
                            _context6.next = 101;
                            break;
                        }

                        throw _iteratorError6;

                    case 101:
                        return _context6.finish(98);

                    case 102:
                        return _context6.finish(95);

                    case 103:
                    case 'end':
                        return _context6.stop();
                }
            }
        }, _callee6, this, [[9, 58, 62, 70], [26, 37, 41, 49], [42,, 44, 48], [63,, 65, 69], [76, 91, 95, 103], [96,, 98, 102]]);
    }));

    function m5() {
        return _ref6.apply(this, arguments);
    }

    return m5;
}(), function () {
    var _ref7 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee7() {
        var accounts, _iteratorNormalCompletion8, _didIteratorError8, _iteratorError8, _iterator8, _step8, a, ops, dateNumber;

        return _regenerator2.default.wrap(function _callee7$(_context7) {
            while (1) {
                switch (_context7.prev = _context7.next) {
                    case 0:
                        log.info('Ensure "importDate" field is present in accounts.');
                        _context7.next = 3;
                        return _account2.default.all();

                    case 3:
                        accounts = _context7.sent;
                        _iteratorNormalCompletion8 = true;
                        _didIteratorError8 = false;
                        _iteratorError8 = undefined;
                        _context7.prev = 7;
                        _iterator8 = (0, _getIterator3.default)(accounts);

                    case 9:
                        if (_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done) {
                            _context7.next = 26;
                            break;
                        }

                        a = _step8.value;

                        if (!(typeof a.importDate !== 'undefined')) {
                            _context7.next = 13;
                            break;
                        }

                        return _context7.abrupt('continue', 23);

                    case 13:

                        log.info('\t' + a.accountNumber + ' has no importDate.');

                        _context7.next = 16;
                        return _operation2.default.byAccount(a);

                    case 16:
                        ops = _context7.sent;
                        dateNumber = Date.now();

                        if (ops.length) {
                            dateNumber = ops.reduce(reduceOperationsDate, Date.now());
                        }

                        a.importDate = new Date(dateNumber);
                        _context7.next = 22;
                        return a.save();

                    case 22:

                        log.info('\tImport date for ' + a.title + ' (' + a.accountNumber + '): ' + a.importDate);

                    case 23:
                        _iteratorNormalCompletion8 = true;
                        _context7.next = 9;
                        break;

                    case 26:
                        _context7.next = 32;
                        break;

                    case 28:
                        _context7.prev = 28;
                        _context7.t0 = _context7['catch'](7);
                        _didIteratorError8 = true;
                        _iteratorError8 = _context7.t0;

                    case 32:
                        _context7.prev = 32;
                        _context7.prev = 33;

                        if (!_iteratorNormalCompletion8 && _iterator8.return) {
                            _iterator8.return();
                        }

                    case 35:
                        _context7.prev = 35;

                        if (!_didIteratorError8) {
                            _context7.next = 38;
                            break;
                        }

                        throw _iteratorError8;

                    case 38:
                        return _context7.finish(35);

                    case 39:
                        return _context7.finish(32);

                    case 40:
                    case 'end':
                        return _context7.stop();
                }
            }
        }, _callee7, this, [[7, 28, 32, 40], [33,, 35, 39]]);
    }));

    function m6() {
        return _ref7.apply(this, arguments);
    }

    return m6;
}(), function () {
    var _ref8 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee8() {
        var types, operations, typeMap, _iteratorNormalCompletion9, _didIteratorError9, _iteratorError9, _iterator9, _step9, _step9$value, id, name, _iteratorNormalCompletion10, _didIteratorError10, _iteratorError10, _iterator10, _step10, operation, _iteratorNormalCompletion11, _didIteratorError11, _iteratorError11, _iterator11, _step11, type;

        return _regenerator2.default.wrap(function _callee8$(_context8) {
            while (1) {
                switch (_context8.prev = _context8.next) {
                    case 0:
                        log.info('Migrate operationTypeId to type field...');
                        types = [];
                        _context8.prev = 2;
                        _context8.next = 5;
                        return _operationtype2.default.all();

                    case 5:
                        types = _context8.sent;

                        if (!types.length) {
                            _context8.next = 85;
                            break;
                        }

                        _context8.next = 9;
                        return _operation2.default.allWithOperationTypesId();

                    case 9:
                        operations = _context8.sent;

                        log.info(operations.length + ' operations to migrate');
                        typeMap = new _map2.default();
                        _iteratorNormalCompletion9 = true;
                        _didIteratorError9 = false;
                        _iteratorError9 = undefined;
                        _context8.prev = 15;

                        for (_iterator9 = (0, _getIterator3.default)(types); !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
                            _step9$value = _step9.value;
                            id = _step9$value.id;
                            name = _step9$value.name;

                            typeMap.set(id, name);
                        }

                        _context8.next = 23;
                        break;

                    case 19:
                        _context8.prev = 19;
                        _context8.t0 = _context8['catch'](15);
                        _didIteratorError9 = true;
                        _iteratorError9 = _context8.t0;

                    case 23:
                        _context8.prev = 23;
                        _context8.prev = 24;

                        if (!_iteratorNormalCompletion9 && _iterator9.return) {
                            _iterator9.return();
                        }

                    case 26:
                        _context8.prev = 26;

                        if (!_didIteratorError9) {
                            _context8.next = 29;
                            break;
                        }

                        throw _iteratorError9;

                    case 29:
                        return _context8.finish(26);

                    case 30:
                        return _context8.finish(23);

                    case 31:
                        _iteratorNormalCompletion10 = true;
                        _didIteratorError10 = false;
                        _iteratorError10 = undefined;
                        _context8.prev = 34;
                        _iterator10 = (0, _getIterator3.default)(operations);

                    case 36:
                        if (_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done) {
                            _context8.next = 45;
                            break;
                        }

                        operation = _step10.value;

                        if (operation.operationTypeID && typeMap.has(operation.operationTypeID)) {
                            operation.type = typeMap.get(operation.operationTypeID);
                        } else {
                            operation.type = _helpers.UNKNOWN_OPERATION_TYPE;
                        }
                        delete operation.operationTypeID;
                        _context8.next = 42;
                        return operation.save();

                    case 42:
                        _iteratorNormalCompletion10 = true;
                        _context8.next = 36;
                        break;

                    case 45:
                        _context8.next = 51;
                        break;

                    case 47:
                        _context8.prev = 47;
                        _context8.t1 = _context8['catch'](34);
                        _didIteratorError10 = true;
                        _iteratorError10 = _context8.t1;

                    case 51:
                        _context8.prev = 51;
                        _context8.prev = 52;

                        if (!_iteratorNormalCompletion10 && _iterator10.return) {
                            _iterator10.return();
                        }

                    case 54:
                        _context8.prev = 54;

                        if (!_didIteratorError10) {
                            _context8.next = 57;
                            break;
                        }

                        throw _iteratorError10;

                    case 57:
                        return _context8.finish(54);

                    case 58:
                        return _context8.finish(51);

                    case 59:

                        // Delete operation types
                        _iteratorNormalCompletion11 = true;
                        _didIteratorError11 = false;
                        _iteratorError11 = undefined;
                        _context8.prev = 62;
                        _iterator11 = (0, _getIterator3.default)(types);

                    case 64:
                        if (_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done) {
                            _context8.next = 71;
                            break;
                        }

                        type = _step11.value;
                        _context8.next = 68;
                        return type.destroy();

                    case 68:
                        _iteratorNormalCompletion11 = true;
                        _context8.next = 64;
                        break;

                    case 71:
                        _context8.next = 77;
                        break;

                    case 73:
                        _context8.prev = 73;
                        _context8.t2 = _context8['catch'](62);
                        _didIteratorError11 = true;
                        _iteratorError11 = _context8.t2;

                    case 77:
                        _context8.prev = 77;
                        _context8.prev = 78;

                        if (!_iteratorNormalCompletion11 && _iterator11.return) {
                            _iterator11.return();
                        }

                    case 80:
                        _context8.prev = 80;

                        if (!_didIteratorError11) {
                            _context8.next = 83;
                            break;
                        }

                        throw _iteratorError11;

                    case 83:
                        return _context8.finish(80);

                    case 84:
                        return _context8.finish(77);

                    case 85:
                        _context8.next = 90;
                        break;

                    case 87:
                        _context8.prev = 87;
                        _context8.t3 = _context8['catch'](2);

                        log.error('Error while updating operation type: ' + _context8.t3);

                    case 90:
                    case 'end':
                        return _context8.stop();
                }
            }
        }, _callee8, this, [[2, 87], [15, 19, 23, 31], [24,, 26, 30], [34, 47, 51, 59], [52,, 54, 58], [62, 73, 77, 85], [78,, 80, 84]]);
    }));

    function m7() {
        return _ref8.apply(this, arguments);
    }

    return m7;
}(), function () {
    var _ref9 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee9() {
        var accountSet, accounts, _iteratorNormalCompletion12, _didIteratorError12, _iteratorError12, _iterator12, _step12, account, alerts, numOrphans, _iteratorNormalCompletion13, _didIteratorError13, _iteratorError13, _iterator13, _step13, al;

        return _regenerator2.default.wrap(function _callee9$(_context9) {
            while (1) {
                switch (_context9.prev = _context9.next) {
                    case 0:
                        log.info('Ensuring consistency of accounts with alerts...');

                        _context9.prev = 1;
                        accountSet = new _set2.default();
                        _context9.next = 5;
                        return _account2.default.all();

                    case 5:
                        accounts = _context9.sent;
                        _iteratorNormalCompletion12 = true;
                        _didIteratorError12 = false;
                        _iteratorError12 = undefined;
                        _context9.prev = 9;

                        for (_iterator12 = (0, _getIterator3.default)(accounts); !(_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done); _iteratorNormalCompletion12 = true) {
                            account = _step12.value;

                            accountSet.add(account.accountNumber);
                        }

                        _context9.next = 17;
                        break;

                    case 13:
                        _context9.prev = 13;
                        _context9.t0 = _context9['catch'](9);
                        _didIteratorError12 = true;
                        _iteratorError12 = _context9.t0;

                    case 17:
                        _context9.prev = 17;
                        _context9.prev = 18;

                        if (!_iteratorNormalCompletion12 && _iterator12.return) {
                            _iterator12.return();
                        }

                    case 20:
                        _context9.prev = 20;

                        if (!_didIteratorError12) {
                            _context9.next = 23;
                            break;
                        }

                        throw _iteratorError12;

                    case 23:
                        return _context9.finish(20);

                    case 24:
                        return _context9.finish(17);

                    case 25:
                        _context9.next = 27;
                        return _alert2.default.all();

                    case 27:
                        alerts = _context9.sent;
                        numOrphans = 0;
                        _iteratorNormalCompletion13 = true;
                        _didIteratorError13 = false;
                        _iteratorError13 = undefined;
                        _context9.prev = 32;
                        _iterator13 = (0, _getIterator3.default)(alerts);

                    case 34:
                        if (_iteratorNormalCompletion13 = (_step13 = _iterator13.next()).done) {
                            _context9.next = 43;
                            break;
                        }

                        al = _step13.value;

                        if (accountSet.has(al.bankAccount)) {
                            _context9.next = 40;
                            break;
                        }

                        numOrphans++;
                        _context9.next = 40;
                        return al.destroy();

                    case 40:
                        _iteratorNormalCompletion13 = true;
                        _context9.next = 34;
                        break;

                    case 43:
                        _context9.next = 49;
                        break;

                    case 45:
                        _context9.prev = 45;
                        _context9.t1 = _context9['catch'](32);
                        _didIteratorError13 = true;
                        _iteratorError13 = _context9.t1;

                    case 49:
                        _context9.prev = 49;
                        _context9.prev = 50;

                        if (!_iteratorNormalCompletion13 && _iterator13.return) {
                            _iterator13.return();
                        }

                    case 52:
                        _context9.prev = 52;

                        if (!_didIteratorError13) {
                            _context9.next = 55;
                            break;
                        }

                        throw _iteratorError13;

                    case 55:
                        return _context9.finish(52);

                    case 56:
                        return _context9.finish(49);

                    case 57:

                        if (numOrphans) log.info('\tfound and removed ' + numOrphans + ' orphan alerts');
                        _context9.next = 63;
                        break;

                    case 60:
                        _context9.prev = 60;
                        _context9.t2 = _context9['catch'](1);

                        log.error('Error while ensuring consistency of alerts: ' + _context9.t2.toString());

                    case 63:
                    case 'end':
                        return _context9.stop();
                }
            }
        }, _callee9, this, [[1, 60], [9, 13, 17, 25], [18,, 20, 24], [32, 45, 49, 57], [50,, 52, 56]]);
    }));

    function m8() {
        return _ref9.apply(this, arguments);
    }

    return m8;
}()];