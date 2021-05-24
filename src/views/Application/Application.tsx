import React from "react";
import Investments from "../Investments";
import Layout from "./lib/Layout";
import { MediaQueryProvider } from 'react-media-query-hoc';
import {device, screen} from "../../utils/devices";



function Application() {
  return (
    <MediaQueryProvider queries={{ [device.mobile]: screen.mobile, [device.web]: screen.web}}>
      <Layout>
          <Investments />
      </Layout>
    </MediaQueryProvider>
  );
}

export default Application;
