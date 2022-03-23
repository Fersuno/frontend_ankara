import SeoComponent from "/components/SeoComponent";
import Layout from "/components/Layout/Index";
import Blogs from './../../components/Blogs';
import HeadingPage from "components/HeadingPage";
import Breadcrumb from "components/Breadcrumb";

const Blog = () => {
  return (
    <Layout>
      <SeoComponent
        title="Ankara"
        description="Desde hace 10 años despertamos tus sentidos con productos y accesorios de belleza para hombres y mujeres. Con presencia en más de 20 estados venezolanos nos hemos consolidado en el mercado nacional para brindarle bienestar y calidad a clientes mayoristas y al detal"
        image="/imagen/anka.png"
      />
      <section className="mt-24 md:mt-40 lg:mt-16">
        <HeadingPage titulo="Blog"/>
        <Breadcrumb />
        <Blogs />
      </section>
    </Layout>
  );
};

export default Blog;
