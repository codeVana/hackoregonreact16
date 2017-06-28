// 
// e.g., BrowserPolicy.content.allowOriginForAll( 's3.amazonaws.com' );

import { BrowserPolicy } from 'meteor/browser-policy-common';
BrowserPolicy.content.allowOriginForAll('s2.quickmeme.com');
BrowserPolicy.content.allowOriginForAll('media.giphy.com');
BrowserPolicy.content.allowOriginForAll('66.media.tumblr.com')