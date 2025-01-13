import { Layout } from "antd";

const { Footer } = Layout;

function MainPage({ user }) {
  return (
    <Layout style={{ backgroundColor: "#141414" }}>
      <Footer
        style={{
          textAlign: "center",
          background: "#000",
          color: "#b3b3b3",
          padding: "20px 0",
        }}
      >
        <div style={{ marginBottom: "10px" }}>
          <a
            href="/terms"
            style={{
              color: "#b3b3b3",
              margin: "0 15px",
              textDecoration: "none",
              fontSize: "14px",
            }}
          >
            Условия использования
          </a>
          <a
            href="/contact"
            style={{
              color: "#b3b3b3",
              margin: "0 15px",
              textDecoration: "none",
              fontSize: "14px",
            }}
          >
            Контакты
          </a>
        </div>
        <p
          style={{
            color: "#b3b3b3",
            fontSize: "14px",
            marginTop: "10px",
          }}
        >
          ©2024 Все права защищены.
        </p>
      </Footer>
    </Layout>
  );
}

export default MainPage;
