import React from "react";

import Layout from "../components/layout";
import SEO from "../components/SEO/seo";

import Nav from "../components/nav";
import Breadcrumb from "../components/breadcrumb";
import Sched from "../components/schedSchedule";
import Footer from "../components/footer";

function Schedule() {
  return (
    <Layout>
      <SEO keywords={["Developer Conference Zambia", "DevConZM", "DevCon Zambia"]} title="Schedule" />
      <Nav />
      <Breadcrumb name="Event Schedule" />
      <Sched />
      <Footer />
    </Layout>
  );
}

export default Schedule;
