import React from 'react';
import { StatusBar } from 'expo-status-bar';

import Tab from './pages/Tab';

export default function App() {
  return (
    <>
      <Tab/>
      <StatusBar style="auto"/>
    </>
  );
}
