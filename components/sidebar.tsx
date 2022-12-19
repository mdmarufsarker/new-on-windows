import React, { useState } from "react";
import { CodeOutlined, ChromeOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Layout, Menu, theme } from "antd";
import Image from "next/image";
import Link from "next/link";

const { Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Code Editor / IDE", "sub1", <CodeOutlined />, [
    getItem("Visual Studio Code", "vscode"),
    getItem("Sublime Text", "sublime"),
    getItem("Brackets", "brackets"),
    getItem("IntelliJ IDEA", "intelij"),
    getItem("PyCharm", "pycharm"),
    getItem("WebStorm", "webstorm"),
    getItem("PhpStorm", "phpstorm"),
    getItem("GoLand", "goLand"),
  ]),
  getItem("Browser", "sub2", <ChromeOutlined />, [
    getItem("Google Chrome", "chrome"),
    getItem("Mozilla Firefox", "firefox"),
    getItem("Brave", "brave"),
  ]),
];

// add links to the get item function
const routes = {
  development: {
    vscode: "/vscode",
    sublime: "/sublime",
    brackets: "/brackets",
    intelij: "/intelij",
    pycharm: "/pycharm",
    webstorm: "/webstorm",
    phpstorm: "/phpstorm",
    goLand: "/goLand",
  },
  browser: {
    chrome: "/chrome",
    firefox: "/firefox",
    brave: "/brave",
  },
};

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: "90vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="p-4 flex items-center">
          <Image
            src="/logo.png"
            width={40}
            height={40}
            alt="logo"
            className="m-2"
          />
          <span className="text-lg ml-6 text-white">New On Windows</span>
        </div>
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>
    </Layout>
  );
};

export default App;
