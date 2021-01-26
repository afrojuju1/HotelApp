import { registerRootComponent } from 'expo';

import MainEntry from './MainEntry';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
registerRootComponent(MainEntry);
