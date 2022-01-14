/**
* index.web.ts
* Copyright: Microsoft 2018
*
* Web implementation of "fonts" module.
*/

import { FontBase } from './Fonts';

class Fonts implements FontBase {
    monospace = 'monospace';

    displayLight = '"SF Light", OpenSans Light", sans-serif';
    displayRegular = '"SF Regular", "OpenSans Regular", sans-serif';
    displaySemibold = '"SF Semibold",  "OpenSans Semibold", sans-serif';
    displayBold = '"SF Bold", "OpenSans Bold", sans-serif';
}

export default new Fonts();
