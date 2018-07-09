/*
Copyright (C) <2018>  Lars Feldeisen <lars@feldeisen.de>

This file is part of ARouter.

ARouter is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 2 of the License, or
(at your option) any later version.

ARouter is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with ARouter.  If not, see <http://www.gnu.org/licenses/>.
*/

function arouter(contentelement, config) {
    var load = function () {
        if (config[location.hash]) {
            fetch(config[location.hash])
                .then(function (res) {
                    return res.text();
                }).then(function (res) {
                document.getElementById(contentelement).innerHTML = res;
            });
        }
    };
    window.onhashchange = function () {
        load();
    };

    // init load, in case of first time loading
    document.getElementById(contentelement).innerHTML = "";
    load();
}
