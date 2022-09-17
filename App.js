import { StatusBar } from 'expo-status-bar';
import { Fragment } from 'react';
import Navigation from './src/navigation';

export default function App() {
    return (
        <Fragment>
            <Navigation />
            <StatusBar style="auto" />
        </Fragment>
    );
}
