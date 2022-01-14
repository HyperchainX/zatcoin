/**
* index.native.ts
* Copyright: Microsoft 2018
*
* Native implementation of "images" module.
*/

import { ImageSourceBase } from './Images';

// The React Native bundler handles resource paths at build time, so they need
// to be specified as full string literals (as opposed to being constructed
// programmatically in a helper method).

// We use accessors and "require" calls to defer loading of these images into
// memory until they are actually used. If we were to require them upfront,
// app launch times would increase substantially.
class ImageSource implements ImageSourceBase {
    get todoLogo() { return require('../../../images/todo-logo.png'); }
    get todoSmall() { return require('../../../images/todo-small.png'); }
    get caru1() { return require('../../../images/caru1.png'); }
    get caru2() { return require('../../../images/caru2.png'); }
    get caru3() { return require('../../../images/caru3.png'); }
    get logo() { return require('../../../images/logo.png'); }
    get elipse() { return require('../../../images/elipse.png'); }
    get background() { return require('../../../images/background.png'); }
    get logo2() { return require('../../../images/logo2.png'); }
    get stripe() { return require('../../../images/stripe.png'); } 
       get metamask() { return require('../../../images/metamask.png'); }
       get vector() { return require('../../../images/vector.png'); }
       get vector1() { return require('../../../images/vector1.png'); }
       get vector2() { return require('../../../images/vector2.png'); }
       get vector3() { return require('../../../images/vector3.png'); }
       get vector4() { return require('../../../images/vector4.png'); }
       get vector5() { return require('../../../images/vector5.png'); }
       get vector6() { return require('../../../images/vector6.png'); }
       get vector7() { return require('../../../images/vector7.png'); }
       get vector8() { return require('../../../images/vector8.png'); }
       get vector9() { return require('../../../images/vector9.png'); }
       get vector10() { return require('../../../images/vector10.png'); }
       get vector11() { return require('../../../images/vector11.png'); }
       get vector12() { return require('../../../images/vector12.png'); }
       get vector13() { return require('../../../images/vector13.png'); }
       get vector14() { return require('../../../images/vector14.png'); }
       get vector15() { return require('../../../images/vector15.png'); }
       get vector16() { return require('../../../images/vector16.png'); }
       get vector17() { return require('../../../images/vector17.png'); }
       get vector18() { return require('../../../images/vector18.png'); }
       get vector19() { return require('../../../images/vector19.png'); }
       get vector20() { return require('../../../images/vector20.png'); }
       get vector21() { return require('../../../images/vector21.png'); }
     
}

export default new ImageSource();
