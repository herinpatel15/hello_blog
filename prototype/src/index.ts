require('dotenv').config()
import { getAllSheetData, getTitle } from "./lib/gSheet";

(function () {
    console.log('hello herin')
    getTitle()
    getAllSheetData('admins')
})();