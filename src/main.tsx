
  import { createRoot } from "react-dom/client";
  import { BrowserRouter, Routes, Route } from "react-router";
  import App from "./app/App.tsx";
  import Story from "./app/Story.tsx";
  import About from "./app/About.tsx";
  import Blog from "./app/Blog.tsx";
  import BlogPost from "./app/BlogPost.tsx";
  import Card from "./app/Card.tsx";
  import Freelancers from "./app/Freelancers.tsx";
  import OFWs from "./app/OFWs.tsx";
  import Privacy from "./app/Privacy.tsx";
  import Terms from "./app/Terms.tsx";
  import { Layout } from "./app/components/Layout.tsx";
  import "./styles/index.css";

  createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/story" element={<Story />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/card" element={<Card />} />
          <Route path="/freelancers" element={<Freelancers />} />
          <Route path="/ofws" element={<OFWs />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
  