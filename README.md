# ql_wails3_react_template

一个基于 **Wails3** 的 React + TypeScript 桌面应用开发模板。

## 技术栈

- **Wails3** - Go + Web 技术构建跨平台桌面应用
- **React 18** - 前端 UI 框架
- **TypeScript** - 类型安全的 JavaScript 超集
- **Vite** - 极速的前端构建工具

## 快速开始

### 环境要求

- [Go](https://go.dev/dl/) 1.26+
- [Node.js](https://nodejs.org/) 18+
- [Wails v3](https://v3.wails.io/) 命令行工具

安装 Wails v3 CLI：

```bash
go install github.com/wailsapp/wails/v3/cmd/wails3@v3.0.0
```

### 使用模板创建项目

```bash
wails3 init -n myapp -t https://github.com/qlstrio/ql_wails3_react_template
cd myapp
wails3 dev
```

## 相关链接

- [Wails v3 官方文档](https://v3.wails.io/)
- [Wails GitHub](https://github.com/wailsapp/wails)
- [React 官方文档](https://react.dev/)
- [Vite 官方文档](https://vitejs.dev/)

## License

MIT