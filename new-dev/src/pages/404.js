import React from "react";
import Layout from "components/layout";
import Seo from "components/seo";

const NotFoundPage = ({ location }) => {
  return (
    <Layout location={location}>
      <Seo title="404: Not Found" />
      <div style={{ textAlign: "center" }}>
        <h1>
          <strong>404</strong>
        </h1>
        <p>Maaf Halaman yang anda cari tidak tersedia.</p>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
