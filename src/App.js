import { withAuthenticator } from '@aws-amplify/ui-react';
import {Amplify} from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';
import awsExports from './aws-exports';

Amplify.configure(awsExports);

function App({ signOut }) {
  return (
    <div>
      <h1>Matsuba Notes App</h1>
      <button onClick={signOut}>Sign out</button>
    </div>
  );
}

export default withAuthenticator(App);
